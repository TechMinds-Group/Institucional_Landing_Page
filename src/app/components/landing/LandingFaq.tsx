import { useState } from "react";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import { LandingFaqItem } from "./types";

// ── FAQ das landings (RN-035 — padrão Groom herdado) ───────────────
// Accordion vertical, uma pergunta aberta por vez (dossiê g1 §8 —
// interação indeterminada no design → padrão do Groom aplica-se).

interface LandingFaqProps {
  items: LandingFaqItem[];
  testId: string;
  itemVariants?: string;
  questionVariants?: string;
  answerVariants?: string;
  iconVariants?: string;
}

export function LandingFaq({
  items,
  testId,
  itemVariants,
  questionVariants,
  answerVariants,
  iconVariants,
}: LandingFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4 w-full" data-testid={testId}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.q}
            data-testid={`${testId}-item`}
            className={`rounded-xl border p-6 ${itemVariants ?? ""}`}
          >
            <button
              type="button"
              aria-expanded={open}
              data-testid={`${testId}-toggle`}
              onClick={() => setOpenIndex(open ? null : index)}
              className={`flex w-full items-center justify-between gap-4 text-left cursor-pointer ${questionVariants ?? ""}`}
            >
              <span className="font-semibold">{item.q}</span>
              {open ? (
                <ChevronDown size={18} aria-hidden className={`shrink-0 ${iconVariants ?? ""}`} />
              ) : (
                <ChevronsUpDown size={18} aria-hidden className={`shrink-0 ${iconVariants ?? ""}`} />
              )}
            </button>
            {open && (
              <p className={`mt-3 leading-relaxed ${answerVariants ?? ""}`} data-testid={`${testId}-answer`}>
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
