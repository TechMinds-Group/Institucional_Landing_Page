import { ArrowDown } from "lucide-react";
import { smoothScrollTo } from "../utils/scroll";

interface SectionHookProps {
  /** Frase âncora do gancho (i18n — tradução do chamador). */
  text: string;
  /** ID da seção de destino (contrato: constants/anchors.ts). */
  targetId: string;
  className?: string;
}

/**
 * Gancho de navegação entre seções do design B (RN-022 — CR-003):
 * frase âncora + seta conduzindo à próxima seção. Substitui os antigos
 * botões de rolagem do Hero (RN-001 superseded). Compartilhado com as
 * features irmãs (RN-019/RN-021/RN-024).
 */
export function SectionHook({ text, targetId, className = "" }: SectionHookProps) {
  return (
    <div className={`flex justify-center ${className}`} data-testid="section-hook">
      <a
        href={`#${targetId}`}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo(targetId);
        }}
        className="group inline-flex items-center gap-2 text-[#1F3A5F] font-medium cursor-pointer hover:opacity-80 transition-opacity motion-reduce:transition-none"
      >
        <span>{text}</span>
        <ArrowDown
          className="w-4 h-4 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
