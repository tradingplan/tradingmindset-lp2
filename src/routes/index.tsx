import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/landing/TopNav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Pillars } from "@/components/landing/Pillars";
import { Comparison } from "@/components/landing/Comparison";
import { Pricing } from "@/components/landing/Pricing";
import { FaqFooter } from "@/components/landing/FaqFooter";

const TITLE = "Trading Mindset PRO — Blindagem mental e disciplina para traders";
const DESCRIPTION =
  "O copiloto de alta performance que elimina o revenge trading: Tarot Trader, ondas binaurais, S.O.S anti-tilt e Score de Disciplina diário.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background-deep">
      <TopNav />
      <Hero />
      <Problem />
      <Pillars />
      <Comparison />
      <Pricing />
      <FaqFooter />
    </main>
  );
}
