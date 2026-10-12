import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReactElement } from "react";
import { I18nProvider } from "../app/i18n/I18nContext";
import { Language } from "../app/i18n/translations";

interface Options {
  /** Idioma inicial simulando persistência em localStorage (RN-004). */
  language?: Language;
}

export function renderWithProviders(ui: ReactElement, options?: Options) {
  if (options?.language) {
    localStorage.setItem("techminds-language", options.language);
  }
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <I18nProvider>{ui}</I18nProvider>
    </MemoryRouter>
  );
}

export function resetI18n() {
  localStorage.removeItem("techminds-language");
  document.documentElement.lang = "";
  document.body.style.overflow = "";
}
