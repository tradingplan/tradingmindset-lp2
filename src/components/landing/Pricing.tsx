import { Check, ShieldCheck, Star } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { CHECKOUT_URL } from "@/lib/offer";

const BENEFITS = [
  "Catálogo completo com +20 áudios e frequências",
  "Download offline no celular (modo avião)",
  "Tarot Trader com histórico completo de 90 dias",
  "Sincronização em nuvem em tempo real (mobile + web)",
  "Acesso a todas as novas cartas e atualizações futuras",
];

export function Pricing() {
  return (
    <section id="planos" className="hero-glow relative py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Oferta"
            title="Plano Trader PRO — acesso completo"
            subtitle="Um investimento menor que o custo de um único stop descontrolado."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="animate-pulse-glow glass-card relative mx-auto mt-14 max-w-2xl rounded-3xl border-amber/40 p-7 sm:p-10">
            <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-accent-foreground">
              <Star className="size-3.5" /> Mais escolhido
            </span>

            <h3 className="text-center text-lg font-extrabold uppercase tracking-wider">
              Plano Trader PRO
            </h3>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                De <s>R$ 297,00</s> por apenas
              </p>
              <p className="mt-2 text-4xl font-extrabold leading-none sm:text-5xl">
                <span className="text-gradient-gold">12x de R$ 14,76</span>
              </p>
              <p className="mt-2 text-base font-bold text-foreground/90">ou R$ 147,00 à vista</p>
              <p className="mt-3 text-xs text-muted-foreground">
                Menos de R$ 0,40 por dia — menos do que o custo de 1 único stop descontrolado.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-amber/15 text-amber">
                    <Check className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_URL}
              className="mt-9 flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.015] active:scale-95 sm:text-base"
            >
              Quero garantir minha vaga com desconto
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Pagamento seguro • Liberação imediata por e-mail
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass-card mx-auto mt-10 flex max-w-2xl items-start gap-4 rounded-2xl border-amber/25 p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-amber/15 text-amber shadow-glow-amber">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <h4 className="text-base font-extrabold">Garantia blindada de 7 dias</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Teste por 7 dias. Se não transformar sua disciplina nas telas, devolvemos 100% do
                valor com 1 clique.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
