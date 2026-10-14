import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildWhatsAppUrl,
  EMAILS_BY_AREA,
  PHONE_DISPLAY,
  WHATSAPP_GROOM_FLOATING_MESSAGE,
  WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE,
  WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE,
  WHATSAPP_GROOM_TRIAL_MESSAGE,
  WHATSAPP_MAIN_FLOATING_MESSAGE,
  WHATSAPP_NUMBER,
} from "../../constants/contacts";

// RN-024-1 — DEBT-003 (ADR-010): o módulo de constantes é a FONTE ÚNICA de
// WhatsApp/e-mails/telefone. Nenhum consumidor (MainPage, Groom, seções B)
// deve hardcodar esses valores — verificação de fonte varre src/ inteira
// (conteúdo legal inline é conteúdo de documento, não consumidor do módulo,
// e é excluído como tal).

/** Varre recursivamente os arquivos .ts/.tsx de src/. */
function collectSourceFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectSourceFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

const here = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(here, "..", "..", "..");
const contactsPath = resolve(here, "..", "contacts.ts");
const selfPath = fileURLToPath(import.meta.url);
const allSources = collectSourceFiles(srcDir);

// Conteúdo legal inline (corpo dos documentos) — dados de documento, não
// consumidores do módulo de contatos.
const isLegalContent = (f: string) =>
  /components[\\/]legal[\\/]/.test(f) ||
  /pages[\\/](TermosDeUso|Privacidade)\.tsx$/.test(f);

const consumers = allSources.filter(
  (f) =>
    f !== contactsPath &&
    f !== selfPath &&
    !isLegalContent(f)
);

describe("Módulo de contatos — fonte única (RN-024-1 / DEBT-003)", () => {
  it("exporta o número canônico e o telefone para exibição", () => {
    expect(WHATSAPP_NUMBER).toBe("5551997066347");
    expect(PHONE_DISPLAY).toBe("+55 (51) 99706-6347");
  });

  it("exporta os e-mails por área do canônico (business/careers/support/compliance)", () => {
    expect(EMAILS_BY_AREA.business).toBe("business@techminds.net.br");
    expect(EMAILS_BY_AREA.careers).toBe("careers@techminds.net.br");
    expect(EMAILS_BY_AREA.support).toBe("support@techminds.net.br");
    expect(EMAILS_BY_AREA.compliance).toBe("compliance@techminds.net.br");
  });

  it("buildWhatsAppUrl monta o deep-link wa.me codificado (RN-002)", () => {
    const url = buildWhatsAppUrl(WHATSAPP_GROOM_TRIAL_MESSAGE);
    expect(url).toBe(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GROOM_TRIAL_MESSAGE)}`
    );
  });

  it("mensagens pré-preenchidas por contexto existem (Main, Groom)", () => {
    // Copie preservada — substituição mecânica (RN-024-1).
    expect(WHATSAPP_MAIN_FLOATING_MESSAGE).toBe(
      "Ola, tudo bem? Gostaria de conhecer melhor os produtos e solucoes da TechMinds. Podem me ajudar?"
    );
    expect(WHATSAPP_GROOM_TRIAL_MESSAGE).toContain("teste gratuito de 15 dias");
    expect(WHATSAPP_GROOM_PLAN_ESSENCIAL_MESSAGE).toContain("Plano Essencial");
    expect(WHATSAPP_GROOM_PLAN_PROFISSIONAL_MESSAGE).toContain(
      "Plano Profissional"
    );
    expect(WHATSAPP_GROOM_FLOATING_MESSAGE).toContain("Vi o site do Groom");
  });

  it("zero literal do número WhatsApp fora de contacts.ts (fonte + testes)", () => {
    const offenders = consumers.filter((f) =>
      readFileSync(f, "utf-8").includes(WHATSAPP_NUMBER)
    );
    expect(offenders).toEqual([]);
  });

  it("zero e-mail hardcoded fora de contacts.ts e do conteúdo legal", () => {
    const emailPattern =
      /(?:business|careers|support|compliance)@techminds\.net\.br/;
    const offenders = consumers.filter((f) =>
      emailPattern.test(readFileSync(f, "utf-8"))
    );
    expect(offenders).toEqual([]);
  });
});
