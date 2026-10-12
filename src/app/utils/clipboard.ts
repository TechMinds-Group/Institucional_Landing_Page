/**
 * Utilitário de copiar (RN-003): Clipboard API com fallback `execCommand`
 * (textarea oculta) para contextos não seguros/browsers antigos.
 *
 * Contrato: `copyToClipboard(text): Promise<boolean>` — true quando o valor
 * foi copiado em qualquer um dos caminhos; false em falha (chamador decide
 * o feedback — falha é silenciosa).
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // 1) Caminho moderno — Clipboard API (requer contexto seguro).
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // permissão negada/ausente → cai para o fallback
    }
  }

  // 2) Fallback — execCommand em textarea oculta.
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}
