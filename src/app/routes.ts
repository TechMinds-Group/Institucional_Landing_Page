import { createBrowserRouter, redirect } from "react-router";
import { MainPage } from "./pages/MainPage";
import { TermosDeUso } from "./pages/TermosDeUso";
import { Privacidade } from "./pages/Privacidade";

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
]);