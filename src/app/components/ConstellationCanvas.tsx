import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";

/**
 * Canvas de partículas do Hero B ("Canvas" 620×500 — frame #111:12628,
 * RN-022-2). Restaurado do legado (ConstellationCanvas pré-7f1f829) com
 * adaptações: paleta azul da marca (#24538F/#1F3A5F), tamanho
 * fluido definido pelo container pai (até 620×500, alturas menores no
 * mobile), render estático no primeiro frame sob prefers-reduced-motion
 * (RN-022) e sem dependências novas — Canvas 2D nativo.
 *
 * Elemento decorativo: quem consome deve envolver em wrapper aria-hidden.
 * Pausa o loop RAF fora da viewport (IntersectionObserver) e no unmount.
 */

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isLarge: boolean;
  isBrain: boolean;
  iconType?: IconType; // ícone dos 4 nós grandes
  color: string; // cor dos nós pequenos
  phaseOffset: number; // pulsar do nó grande
  opacity: number;
}

type IconType = "brain" | "lightning" | "shield" | "gear";

// Paleta B (design claro): AZUL da marca (#1F3A5F/#24538F) — glow dos nós e conexões.
const COLOR_TEAL = "#24538F";
const COLOR_GREEN = "#1F3A5F";
// RGB pré-computado para os gradientes (correspondem às cores acima).
const TEAL_RGB = { r: 36, g: 83, b: 143 };
const GREEN_RGB = { r: 31, g: 58, b: 95 };
const GLOW_RGB = TEAL_RGB;

const CONNECTION_THRESHOLD = 180;
const CURSOR_INFLUENCE_RADIUS = 120;
const CURSOR_MAX_FORCE = 0.8;

// Cria imagens de ícone a partir de paths SVG (sem dependências novas).
const ICON_SVGS: Record<IconType, string> = {
  brain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 0 1 12 18Z"/>
  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
  <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
  <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
</svg>`,
  lightning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
</svg>`,
  gear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>`,
};

function createIconImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    try {
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(blob);
    } catch (error) {
      reject(error);
    }
  });
}

function initNodes(width: number, height: number): ParticleNode[] {
  const totalNodes = Math.floor(Math.random() * 8) + 28; // 28–35
  const largeCount = 4; // Exatamente 4 nós grandes
  const nodes: ParticleNode[] = [];

  // Posição inicial/tipo dos 4 nós grandes
  const largeNodeConfigs: Array<{
    iconType: IconType;
    xPercent: number;
    yPercent: number;
  }> = [
    { iconType: "brain", xPercent: 0.5, yPercent: 0.2 }, // topo-centro
    { iconType: "lightning", xPercent: 0.2, yPercent: 0.75 }, // baixo-esquerda
    { iconType: "gear", xPercent: 0.75, yPercent: 0.45 }, // centro-direita
    { iconType: "shield", xPercent: 0.6, yPercent: 0.8 }, // baixo-direita
  ];

  for (let i = 0; i < totalNodes; i++) {
    const isLarge = i < largeCount;
    const isBrain = i === 0;

    let radius: number;
    let vx: number;
    let vy: number;
    let color: string;
    let opacity: number;
    let phaseOffset = 0;
    let iconType: IconType | undefined;
    let x: number;
    let y: number;

    if (isLarge) {
      radius = Math.random() * 8 + 28; // 28–36
      const speed = isBrain ? 0.4 : 1;
      vx = (Math.random() * 0.8 - 0.4) * speed;
      vy = (Math.random() * 0.8 - 0.4) * speed;
      opacity = 0.85;
      color = "";
      phaseOffset = Math.random() * Math.PI * 2;

      const config = largeNodeConfigs[i];
      iconType = config.iconType;
      x = width * config.xPercent;
      y = height * config.yPercent;
    } else {
      radius = Math.random() * 2 + 3; // 3–5
      vx = Math.random() * 0.8 - 0.4;
      vy = Math.random() * 0.8 - 0.4;
      opacity = Math.random() * 0.2 + 0.5; // 0.5–0.7
      color = Math.random() > 0.5 ? COLOR_TEAL : COLOR_GREEN;
      iconType = undefined;
      x = Math.random() * width;
      y = Math.random() * height;
    }

    nodes.push({
      x,
      y,
      vx,
      vy,
      radius,
      isLarge,
      isBrain,
      color,
      phaseOffset,
      opacity,
      iconType,
    });
  }

  return nodes;
}

/** Colorir os nós pequenos (legado usava purple/cyan; aqui azul da marca). */
function nodeRgb(color: string) {
  return color === COLOR_TEAL ? TEAL_RGB : GREEN_RGB;
}

export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<ParticleNode[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const activeRef = useRef(true);
  const lastTimeRef = useRef(0);
  const iconsLoadedRef = useRef(false);
  const iconImagesRef = useRef<Partial<Record<IconType, HTMLImageElement>>>({});
  // RN-022: com prefers-reduced-motion, o canvas não anima — render
  // estático do primeiro frame (guard cobre ambientes sem matchMedia).
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Reinicializa os nós escalados às novas dimensões
    nodesRef.current = initNodes(width, height);
  }, []);

  const drawFrame = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;

    // Teto de ~60fps
    const delta = timestamp - lastTimeRef.current;
    if (delta < 14) {
      animFrameRef.current = requestAnimationFrame(drawFrame);
      return;
    }
    lastTimeRef.current = timestamp;

    const time = timestamp / 1000;
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, W, H);

    // Atualiza posições
    for (const node of nodes) {
      // Atração ao cursor
      if (mouse) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_INFLUENCE_RADIUS && dist > 0) {
          const force = (1 - dist / CURSOR_INFLUENCE_RADIUS) * CURSOR_MAX_FORCE;
          node.vx += (dx / dist) * force * 0.05;
          node.vy += (dy / dist) * force * 0.05;
          // Clamp de velocidade
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          const maxSpeed = node.isBrain ? 0.5 : 1.0;
          if (speed > maxSpeed) {
            node.vx = (node.vx / speed) * maxSpeed;
            node.vy = (node.vy / speed) * maxSpeed;
          }
        }
      }

      node.x += node.vx;
      node.y += node.vy;

      // Quica nas bordas
      if (node.x - node.radius < 0) {
        node.x = node.radius;
        node.vx = Math.abs(node.vx);
      } else if (node.x + node.radius > W) {
        node.x = W - node.radius;
        node.vx = -Math.abs(node.vx);
      }
      if (node.y - node.radius < 0) {
        node.y = node.radius;
        node.vy = Math.abs(node.vy);
      } else if (node.y + node.radius > H) {
        node.y = H - node.radius;
        node.vy = -Math.abs(node.vy);
      }
    }

    // Resolve colisões dos nós grandes (colisão elástica)
    const largeNodes = nodes.filter((n) => n.isLarge);
    for (let i = 0; i < largeNodes.length; i++) {
      for (let j = i + 1; j < largeNodes.length; j++) {
        const nodeI = largeNodes[i];
        const nodeJ = largeNodes[j];

        const dx = nodeJ.x - nodeI.x;
        const dy = nodeJ.y - nodeI.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDist = nodeI.radius + nodeJ.radius;

        if (distance < minDist && distance > 0) {
          // Correção de posição — separa os nós
          const overlap = (minDist - distance) / 2;
          const nx = dx / distance;
          const ny = dy / distance;

          nodeI.x -= nx * overlap;
          nodeI.y -= ny * overlap;
          nodeJ.x += nx * overlap;
          nodeJ.y += ny * overlap;

          // Troca de velocidade (colisão elástica)
          const dvx = nodeJ.vx - nodeI.vx;
          const dvy = nodeJ.vy - nodeI.vy;
          const dot = dvx * nx + dvy * ny;

          // Só resolve se os nós se aproximam
          if (dot < 0) {
            nodeI.vx += dot * nx;
            nodeI.vy += dot * ny;
            nodeJ.vx -= dot * nx;
            nodeJ.vy -= dot * ny;
          }

          // Clamp de velocidade após a colisão
          const maxSpeed = 1.2;

          let speedI = Math.sqrt(nodeI.vx * nodeI.vx + nodeI.vy * nodeI.vy);
          const maxSpeedI = nodeI.isBrain ? maxSpeed * 0.4 : maxSpeed;
          if (speedI > maxSpeedI) {
            nodeI.vx = (nodeI.vx / speedI) * maxSpeedI;
            nodeI.vy = (nodeI.vy / speedI) * maxSpeedI;
          }

          let speedJ = Math.sqrt(nodeJ.vx * nodeJ.vx + nodeJ.vy * nodeJ.vy);
          const maxSpeedJ = nodeJ.isBrain ? maxSpeed * 0.4 : maxSpeed;
          if (speedJ > maxSpeedJ) {
            nodeJ.vx = (nodeJ.vx / speedJ) * maxSpeedJ;
            nodeJ.vy = (nodeJ.vy / speedJ) * maxSpeedJ;
          }
        }
      }
    }

    // ── 1. Desenha as conexões ──
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_THRESHOLD) {
          const opacity = 1 - dist / CONNECTION_THRESHOLD;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${TEAL_RGB.r},${TEAL_RGB.g},${TEAL_RGB.b},${opacity})`);
          grad.addColorStop(1, `rgba(${GREEN_RGB.r},${GREEN_RGB.g},${GREEN_RGB.b},${opacity})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Helper: desenhar nó grande
    const drawLargeNode = (node: ParticleNode) => {
      // Pulso do glow
      const glowRadius =
        node.radius * (1.4 + 0.3 * Math.sin(time * 1.2 + node.phaseOffset));
      const glowGrad = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        glowRadius * 1.6
      );
      glowGrad.addColorStop(0, `rgba(${GLOW_RGB.r},${GLOW_RGB.g},${GLOW_RGB.b},0.15)`);
      glowGrad.addColorStop(1, `rgba(${GLOW_RGB.r},${GLOW_RGB.g},${GLOW_RGB.b},0)`);
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowRadius * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Corpo do nó
      const bodyGrad = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        node.radius
      );
      bodyGrad.addColorStop(0, `rgba(${TEAL_RGB.r},${TEAL_RGB.g},${TEAL_RGB.b},${node.opacity})`);
      bodyGrad.addColorStop(1, `rgba(${GREEN_RGB.r},${GREEN_RGB.g},${GREEN_RGB.b},${node.opacity})`);
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Ícone, quando disponível
      if (node.iconType && iconsLoadedRef.current) {
        const img = iconImagesRef.current[node.iconType];
        if (img) {
          ctx.save();
          ctx.globalAlpha = 0.92;
          const iconSize = node.radius * 0.75;
          ctx.drawImage(img, node.x - iconSize / 2, node.y - iconSize / 2, iconSize, iconSize);
          ctx.restore();
        }
      }
    };

    // ── 2. Nós pequenos ──
    for (const node of nodes) {
      if (node.isLarge) continue;
      const rgb = nodeRgb(node.color);
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${node.opacity})`;
      ctx.fill();
    }

    // ── 3. Nós grandes (não-brain) ──
    for (const node of nodes) {
      if (!node.isLarge || node.isBrain) continue;
      drawLargeNode(node);
    }

    // ── 4. Nó brain por último (sempre por cima) ──
    const brainNode = nodes.find((n) => n.isBrain);
    if (brainNode) {
      drawLargeNode(brainNode);
    }

    if (activeRef.current) {
      animFrameRef.current = requestAnimationFrame(drawFrame);
    }
  }, []);

  /** Render estático (prefers-reduced-motion — RN-022): desenha o
   *  primeiro frame e nunca agenda RAF. */
  const drawStatic = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    ctx.clearRect(0, 0, W, H);
    const nodes = nodesRef.current;

    // Conexões
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_THRESHOLD) {
          const opacity = (1 - dist / CONNECTION_THRESHOLD) * 0.5;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${TEAL_RGB.r},${TEAL_RGB.g},${TEAL_RGB.b},${opacity})`);
          grad.addColorStop(1, `rgba(${GREEN_RGB.r},${GREEN_RGB.g},${GREEN_RGB.b},${opacity})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    for (const node of nodes) {
      if (node.isLarge) {
        const bodyGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        bodyGrad.addColorStop(0, `rgba(${TEAL_RGB.r},${TEAL_RGB.g},${TEAL_RGB.b},0.85)`);
        bodyGrad.addColorStop(1, `rgba(${GREEN_RGB.r},${GREEN_RGB.g},${GREEN_RGB.b},0.85)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = bodyGrad;
        ctx.fill();
        if (node.iconType && iconsLoadedRef.current) {
          const img = iconImagesRef.current[node.iconType];
          if (img) {
            ctx.save();
            ctx.globalAlpha = 0.92;
            const iconSize = node.radius * 0.75;
            ctx.drawImage(img, node.x - iconSize / 2, node.y - iconSize / 2, iconSize, iconSize);
            ctx.restore();
          }
        }
      } else {
        const rgb = nodeRgb(node.color);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${node.opacity})`;
        ctx.fill();
      }
    }
  }, []);

  useEffect(() => {
    resizeCanvas();

    if (reducedMotion.current) {
      drawStatic();
      return;
    }

    activeRef.current = true;
    animFrameRef.current = requestAnimationFrame(drawFrame);

    const handleResize = () => {
      resizeCanvas();
      if (reducedMotion.current) drawStatic();
    };
    window.addEventListener("resize", handleResize);

    // IntersectionObserver pausa quando sai da viewport (economia de CPU)
    let observer: IntersectionObserver | undefined;
    const container = containerRef.current;
    if (typeof IntersectionObserver !== "undefined" && container) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            activeRef.current = true;
            animFrameRef.current = requestAnimationFrame(drawFrame);
          } else {
            activeRef.current = false;
            cancelAnimationFrame(animFrameRef.current);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
    }

    // Carrega os ícones; sem Blob/objectURL (ex.: jsdom) ou em erro,
    // os nós continuam com glow — decoração, sem falha perceptível.
    const loadIcons = () => {
      const canObjectUrl =
        typeof URL !== "undefined" && typeof URL.createObjectURL === "function";
      if (!canObjectUrl) return;
      const keys = Object.keys(ICON_SVGS) as IconType[];
      const promises = keys.map((key) =>
        createIconImage(ICON_SVGS[key]).catch(() => undefined)
      );
      Promise.all(promises).then((images) => {
        for (let i = 0; i < images.length; i++) {
          if (images[i]) iconImagesRef.current[keys[i]] = images[i];
        }
        iconsLoadedRef.current = true;
      });
    };
    loadIcons();

    return () => {
      activeRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
    };
  }, [resizeCanvas, drawFrame, drawStatic]);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null;
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
