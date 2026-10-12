// ── Imagem por breakpoint (RN-031/P-7 — dossiê g1) ─────────────────
// Desktop e mobile usam imageRefs distintos nos frames VibeCut/Lumen;
// o par de assets (src/imports/landings/*-desk.png / *-mob.png) troca
// por media query com <picture>. Copy 1:1 — só a imagem muda.

interface BreakpointImageProps {
  desk: string;
  mob: string;
  alt: string;
  testId?: string;
  className?: string;
}

export function BreakpointImage({
  desk,
  mob,
  alt,
  testId,
  className = "w-full h-auto rounded-xl object-cover",
}: BreakpointImageProps) {
  return (
    <picture data-testid={testId}>
      <source media="(max-width: 767px)" srcSet={mob} />
      <img src={desk} alt={alt} className={className} loading="lazy" />
    </picture>
  );
}
