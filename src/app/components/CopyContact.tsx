import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyToClipboard } from "../utils/clipboard";

interface CopyContactProps {
  /** Valor copiado ao clicar — e-mail/telefone do módulo de constantes. */
  value: string;
  /** Rótulo opcional exibido antes do valor (ex.: "Carreiras" no rodapé). */
  label?: string;
  /** Rótulo do estado pós-cópia ("Copiado!") —RN-003. */
  copiedLabel: string;
  /** Dica exibida em hover ("Clique para copiar"). */
  hint: string;
  className?: string;
  testId?: string;
}

/**
 * Contato copiável (RN-003): um clique copia o valor via Clipboard API
 * (com fallback `execCommand`) e troca o valor por "Copiado!" por 2s,
 * voltando ao original. O timer é independente por campo — cada
 * instância mantém seu próprio estado e o timer é limpo no unmount.
 * Compartilhado entre "Company and trust" (RN-024-2) e o Rodapé B (RN-024-3).
 */
export function CopyContact({
  value,
  label,
  copiedLabel,
  hint,
  className = "",
  testId,
}: CopyContactProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Cleanup do timer caso o campo seja desmontado durante o feedback.
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const ok = await copyToClipboard(value);
    // Falha silenciosa nos dois caminhos (padrão RN-003).
    if (!ok) return;
    setCopied(true);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className={`relative inline-block ${className}`} data-testid={testId}>
      <button
        type="button"
        onClick={handleCopy}
        data-testid={testId ? `${testId}-button` : undefined}
        className="group/copy inline-flex items-center gap-2 text-left cursor-pointer border-0 bg-transparent p-0 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/40 rounded-md"
        aria-label={label ? `${label}: ${value}` : value}
      >
        <span className="relative inline-flex items-center gap-2 min-h-[24px]">
          {copied ? (
            <span className="inline-flex items-center gap-1.5 transition-opacity duration-150">
              <Check className="w-4 h-4" aria-hidden="true" />
              {copiedLabel}
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 transition-opacity duration-150">
              {label && (
                <span className="font-medium">{label}</span>
              )}
              <span>{value}</span>
              <Copy
                className="w-4 h-4 opacity-60 group-hover/copy:opacity-100"
                aria-hidden="true"
              />
            </span>
          )}
        </span>
      </button>
      {hint && (
        <span
          role="tooltip"
          className="pointer-events-none z-50 absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg border border-[#D9DDE3] bg-white px-3 py-1.5 text-xs whitespace-nowrap text-[#4B5563] opacity-0 shadow-sm transition-opacity duration-150 group-hover/copy:opacity-100 hidden md:block"
          data-testid={testId ? `${testId}-hint` : undefined}
        >
          {hint}
        </span>
      )}
    </span>
  );
}
