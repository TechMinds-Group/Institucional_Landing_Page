import { ReactNode } from "react";
import { Link } from "react-router";
import { LandingCtaConfig } from "./types";
import { smoothScrollTo } from "../../utils/scroll";

// ── Gate de CTAs das landings (RN-032) ─────────────────────────────
// Todo CTA de landing TEM destino definido — ou nasce desabilitado
// (disabled + tooltip/aria + microcopy visível). Target obrigatório:
// anchor/route/mailto sem target violam o contrato e caem no estado
// desabilitado com microcopy de fallback (defensivo).

export interface LandingCtaSlot {
  /** Motivo/microcopy exibida sob o botão desabilitado. */
  microcopy?: string;
  /** ID opcional do motivo (aria-describedby). */
  microcopyId?: string;
  className?: string;
  testId: string;
  /** Conteúdo extra após o label (ícone/↗). */
  children?: ReactNode;
}

interface LandingCtaProps extends LandingCtaSlot {
  cta: LandingCtaConfig;
}

function isDisabled(cta: LandingCtaConfig): boolean {
  if (cta.kind === "disabled") return true;
  return !cta.target; // destino obrigatório (RN-032)
}

export function LandingCta({ cta, microcopy, microcopyId, className, testId, children }: LandingCtaProps) {
  const base =
    className ??
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-sm transition-colors cursor-pointer";

  if (isDisabled(cta)) {
    const reason = cta.reason ?? microcopy;
    return (
      <span className="inline-flex flex-col items-start gap-1.5" data-testid={testId}>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title={cta.reason}
          aria-describedby={microcopyId}
          data-testid={`${testId}-button`}
          className={`${base} border border-slate-400/40 bg-transparent text-slate-400 opacity-70 cursor-not-allowed`}
        >
          {cta.label}
          {children}
        </button>
        {reason && (
          <p
            id={microcopyId}
            data-testid={`${testId}-microcopy`}
            className="text-xs text-slate-400 max-w-sm"
          >
            {reason}
          </p>
        )}
      </span>
    );
  }

  if (cta.kind === "route") {
    return (
      <Link to={cta.target as string} data-testid={testId} className={base}>
        {cta.label}
        {children}
      </Link>
    );
  }

  if (cta.kind === "mailto") {
    return (
      <a href={cta.target} data-testid={testId} className={base}>
        {cta.label}
        {children}
      </a>
    );
  }

  // anchor — rolagem suave com offset da navbar (RN-011)
  return (
    <a
      href={`#${cta.target}`}
      data-testid={testId}
      className={base}
      onClick={(e) => {
        e.preventDefault();
        smoothScrollTo(cta.target as string);
      }}
    >
      {cta.label}
      {children}
    </a>
  );
}
