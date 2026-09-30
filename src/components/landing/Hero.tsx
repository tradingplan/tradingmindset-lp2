import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";
import { AppMockup } from "./AppMockup";
import { CHECKOUT_URL } from "@/lib/offer";

const BADGES = [
  "+20 Áudios e Ondas Binaurais",
  "Diagnóstico Diário Tarot Trader",
  "S.O.S Anti-Tilt com Respiração 4-7-8",
  "100% Funcional no Modo Avião",
];

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cyan shadow-glow-cyan sm:text-xs">
            <ShieldCheck className="size-3.5" /> Blindagem mental & disciplina operacional
          </span>

          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Você já domina o gráfico. O que falta é dominar{" "}
            <span className="text-gradient-accent">o que acontece entre as suas duas orelhas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            O copiloto de alta performance que elimina o <em>revenge trading</em>, blinda sua mente
            antes da abertura e impede que 20 minutos de descontrole destruam semanas de lucro
            consistente.
          </p>

          <div className="mt-8 max-w-xl">
            <a
              href={CHECKOUT_URL}
              className="animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.015] active:scale-95 sm:text-base"
            >
              <Zap className="size-5" /> Quero desbloquear meu acesso Trader PRO agora
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              ⚡ Liberação imediata • Garantia blindada de 7 dias • Acesso Web + Mobile
            </p>
          </div>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {BADGES.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-emerald/15 text-[0.7rem] font-bold text-emerald">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
}
