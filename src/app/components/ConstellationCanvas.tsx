import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isLarge: boolean;
  isBrain: boolean;
  iconType?: "brain" | "lightning" | "shield" | "gear"; // icon for large nodes
  color: string; // for small nodes
  phaseOffset: number; // for large node pulse
  opacity: number;
}

const COLOR_PURPLE = "#7B5EA7";
const COLOR_CYAN = "#5BC8C0";
const CONNECTION_THRESHOLD = 180;
const CURSOR_INFLUENCE_RADIUS = 120;
const CURSOR_MAX_FORCE = 0.8;

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Create icon images from SVG paths
const ICON_SVGS = {
  brain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
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
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });
}

function initNodes(width: number, height: number): Node[] {
  const totalNodes = Math.floor(Math.random() * 8) + 28; // 28–35
  const largeCount = 4; // Exactly 4 large nodes
  const nodes: Node[] = [];

  // Define icon types and starting positions for the 4 large nodes
  const largeNodeConfigs: Array<{
    iconType: "brain" | "lightning" | "shield" | "gear";
    xPercent: number;
    yPercent: number;
  }> = [
    { iconType: "brain", xPercent: 0.5, yPercent: 0.2 },      // top-center
    { iconType: "lightning", xPercent: 0.2, yPercent: 0.75 }, // bottom-left
    { iconType: "gear", xPercent: 0.75, yPercent: 0.45 },     // center-right
    { iconType: "shield", xPercent: 0.6, yPercent: 0.8 },     // bottom-right
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
    let iconType: "brain" | "lightning" | "shield" | "gear" | undefined;
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
      
      // Assign icon type and position from config
      const config = largeNodeConfigs[i];
      iconType = config.iconType;
      x = width * config.xPercent;
      y = height * config.yPercent;
    } else {
      radius = Math.random() * 2 + 3; // 3–5
      vx = Math.random() * 0.8 - 0.4;
      vy = Math.random() * 0.8 - 0.4;
      opacity = Math.random() * 0.2 + 0.5; // 0.5–0.7
      color = Math.random() > 0.5 ? COLOR_PURPLE : COLOR_CYAN;
      iconType = undefined;
      x = Math.random() * width;
      y = Math.random() * height;
    }

    nodes.push({ x, y, vx, vy, radius, isLarge, isBrain, color, phaseOffset, opacity, iconType });
  }

  return nodes;
}

export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const activeRef = useRef(true);
  const lastTimeRef = useRef(0);
  const iconsLoadedRef = useRef(false);
  const iconImagesRef = useRef<{
    brain?: HTMLImageElement;
    lightning?: HTMLImageElement;
    shield?: HTMLImageElement;
    gear?: HTMLImageElement;
  }>({});
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const purple = hexToRgb(COLOR_PURPLE);
  const cyan = hexToRgb(COLOR_CYAN);

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

    // Re-initialize nodes scaled to new dimensions
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

    // Cap at ~60fps
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

    // Update positions
    for (const node of nodes) {
      // Cursor attraction
      if (mouse) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_INFLUENCE_RADIUS && dist > 0) {
          const force = (1 - dist / CURSOR_INFLUENCE_RADIUS) * CURSOR_MAX_FORCE;
          node.vx += (dx / dist) * force * 0.05;
          node.vy += (dy / dist) * force * 0.05;
          // Clamp velocity
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

      // Bounce off edges
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

    // Resolve large node collisions (elastic collision)
    const largeNodes = nodes.filter(n => n.isLarge);
    for (let i = 0; i < largeNodes.length; i++) {
      for (let j = i + 1; j < largeNodes.length; j++) {
        const nodeI = largeNodes[i];
        const nodeJ = largeNodes[j];
        
        const dx = nodeJ.x - nodeI.x;
        const dy = nodeJ.y - nodeI.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDist = nodeI.radius + nodeJ.radius;

        if (distance < minDist && distance > 0) {
          // Position correction - push nodes apart
          const overlap = (minDist - distance) / 2;
          const nx = dx / distance; // normalized collision axis x
          const ny = dy / distance; // normalized collision axis y

          nodeI.x -= nx * overlap;
          nodeI.y -= ny * overlap;
          nodeJ.x += nx * overlap;
          nodeJ.y += ny * overlap;

          // Velocity exchange (elastic collision)
          const dvx = nodeJ.vx - nodeI.vx;
          const dvy = nodeJ.vy - nodeI.vy;
          const dot = dvx * nx + dvy * ny;

          // Only resolve if nodes are moving toward each other
          if (dot < 0) {
            nodeI.vx += dot * nx;
            nodeI.vy += dot * ny;
            nodeJ.vx -= dot * nx;
            nodeJ.vy -= dot * ny;
          }

          // Speed cap after collision
          const maxSpeed = 1.2;
          
          // Apply speed cap to nodeI
          let speedI = Math.sqrt(nodeI.vx * nodeI.vx + nodeI.vy * nodeI.vy);
          const maxSpeedI = nodeI.isBrain ? maxSpeed * 0.4 : maxSpeed;
          if (speedI > maxSpeedI) {
            nodeI.vx = (nodeI.vx / speedI) * maxSpeedI;
            nodeI.vy = (nodeI.vy / speedI) * maxSpeedI;
          }

          // Apply speed cap to nodeJ
          let speedJ = Math.sqrt(nodeJ.vx * nodeJ.vx + nodeJ.vy * nodeJ.vy);
          const maxSpeedJ = nodeJ.isBrain ? maxSpeed * 0.4 : maxSpeed;
          if (speedJ > maxSpeedJ) {
            nodeJ.vx = (nodeJ.vx / speedJ) * maxSpeedJ;
            nodeJ.vy = (nodeJ.vy / speedJ) * maxSpeedJ;
          }
        }
      }
    }

    // --- 1. Draw connections ---
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
          grad.addColorStop(0, `rgba(${purple.r},${purple.g},${purple.b},${opacity})`);
          grad.addColorStop(1, `rgba(${cyan.r},${cyan.g},${cyan.b},${opacity})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Helper: draw large node
    const drawLargeNode = (node: Node) => {
      // Glow pulse
      const glowRadius =
        node.radius * (1.4 + 0.3 * Math.sin(time * 1.2 + node.phaseOffset));
      const glowGrad = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowRadius * 1.6
      );
      glowGrad.addColorStop(0, "rgba(91,200,192,0.15)");
      glowGrad.addColorStop(1, "rgba(91,200,192,0)");
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowRadius * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Node body
      const bodyGrad = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius
      );
      bodyGrad.addColorStop(0, `rgba(${purple.r},${purple.g},${purple.b},${node.opacity})`);
      bodyGrad.addColorStop(1, `rgba(${cyan.r},${cyan.g},${cyan.b},${node.opacity})`);
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Draw icon if available
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

    // --- 2. Draw small nodes ---
    for (const node of nodes) {
      if (node.isLarge) continue;
      const rgb = node.color === COLOR_PURPLE ? purple : cyan;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${node.opacity})`;
      ctx.fill();
    }

    // --- 3. Draw large nodes (non-brain) ---
    for (const node of nodes) {
      if (!node.isLarge || node.isBrain) continue;
      drawLargeNode(node);
    }

    // --- 4. Draw brain node last (always on top) ---
    const brainNode = nodes.find((n) => n.isBrain);
    if (brainNode) {
      drawLargeNode(brainNode);
    }

    if (activeRef.current) {
      animFrameRef.current = requestAnimationFrame(drawFrame);
    }
  }, [purple, cyan]);

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

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_THRESHOLD) {
          const opacity = (1 - dist / CONNECTION_THRESHOLD) * 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${purple.r},${purple.g},${purple.b},${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    for (const node of nodes) {
      if (node.isLarge) {
        const bodyGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        bodyGrad.addColorStop(0, `rgba(${purple.r},${purple.g},${purple.b},0.85)`);
        bodyGrad.addColorStop(1, `rgba(${cyan.r},${cyan.g},${cyan.b},0.85)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = bodyGrad;
        ctx.fill();
        // Draw icon if node has one
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
        const rgb = node.color === COLOR_PURPLE ? purple : cyan;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${node.opacity})`;
        ctx.fill();
      }
    }
  }, [purple, cyan]);

  useEffect(() => {
    resizeCanvas();

    if (reducedMotion.current) {
      drawStatic();
      return;
    }

    activeRef.current = true;
    animFrameRef.current = requestAnimationFrame(drawFrame);

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
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
    if (containerRef.current) observer.observe(containerRef.current);

    // Load icons
    const loadIcons = async () => {
      const promises: Promise<HTMLImageElement>[] = [];
      for (const key in ICON_SVGS) {
        if (ICON_SVGS.hasOwnProperty(key)) {
          promises.push(createIconImage(ICON_SVGS[key]));
        }
      }
      const images = await Promise.all(promises);
      for (let i = 0; i < images.length; i++) {
        const key = Object.keys(ICON_SVGS)[i];
        iconImagesRef.current[key as "brain" | "lightning" | "shield" | "gear"] = images[i];
      }
      iconsLoadedRef.current = true;
    };
    loadIcons();

    return () => {
      activeRef.current = false;
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [resizeCanvas, drawFrame, drawStatic]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = null;
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[420px]">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: "block", cursor: "crosshair" }}
      />
    </div>
  );
}