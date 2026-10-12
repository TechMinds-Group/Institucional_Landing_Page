import { createBrowserRouter, redirect } from "react-router";
import { MainPage } from "./pages/MainPage";
import { TermosDeUso } from "./pages/TermosDeUso";
import { Privacidade } from "./pages/Privacidade";
import { Groom } from "./pages/Groom";
// Landings de produto (RN-025 — CR-006/ADR-014): rotas no padrão
// do /groom, sem guards — site público.
import { VibeCutPage } from "./pages/landings/VibeCutPage";
import { LumenPage } from "./pages/landings/LumenPage";
import { FasToPage } from "./pages/landings/FasToPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/terms-of-use",
    loader: () => redirect("/terms-of-use/vibecut"),
  },
  {
    path: "/terms-of-use/:product",
    Component: TermosDeUso,
  },
  {
    path: "/privacy",
    loader: () => redirect("/privacy/vibecut"),
  },
  {
    path: "/privacy/:product",
    Component: Privacidade,
  },
  {
    path: "/groom",
    Component: Groom,
  },
  // ── RN-025: landings de produto ──
  {
    path: "/vibecut",
    Component: VibeCutPage,
  },
  {
    path: "/lumen",
    Component: LumenPage,
  },
  {
    path: "/fasto",
    Component: FasToPage,
  },
]);