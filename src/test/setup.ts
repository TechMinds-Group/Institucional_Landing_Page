import '@testing-library/jest-dom/vitest';

// jsdom não implementa IntersectionObserver (voltar-ao-topo da Main B —
// RN-009). Stub no-op: MainPage/landings podem ser montadas em testes de
// navegação sem quebrar o commit do React. Sem efeito em produção.
if (typeof globalThis.IntersectionObserver === "undefined") {
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver =
    IntersectionObserverStub;
}
