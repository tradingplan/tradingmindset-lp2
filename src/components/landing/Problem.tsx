import { Quote } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const STEPS = [
  {
    time: "08:30",
    title: "Análise Perfeita",
    text: "Você acorda focado, traça os suportes e planeja o dia.",
    tone: "cyan",
  },
  {
    time: "09:30",
    title: "Meta Batida",
    text: "Faz 2 operações cirúrgicas e sente que a consistência chegou.",
    tone: "emerald",
  },
  {
    time: "10:15",
    title: "O Stop Normal",
    text: "O mercado corrige, pega seu stop planejado e o ego é ferido.",
    tone: "amber",
  },
  {
    time: "10:35",
    title: "O Colapso (Tilt)",
    text: "Você dobra os contratos para recuperar, entra fora do setup e devolve o lucro de semanas em 20 minutos de fúria.",
    tone: "crimson",
  },
] as const;

const TONE: Record<string, string> = {
  cyan: "border-cyan/30 text-cyan",
  emerald: "border-emerald/30 text-emerald",
  amber: "border-amber/30 text-amber",
  crimson: "border-crimson/40 text-crimson",
};

export function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="O ciclo destrutivo"
            title="Quantas vezes você já viveu esse filme de terror?"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.time} delay={i * 0.08}>
              <div className="glass-card group h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1.5">
                <span
                  className={`inline-flex rounded-lg border bg-background-deep/70 px-2.5 py-1 font-mono text-xs font-bold ${TONE[s.tone]}`}
                >
                  {s.time}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className={`mt-5 h-px w-full bg-current opacity-20 ${TONE[s.tone]}`} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <blockquote className="mx-auto mt-12 max-w-3xl rounded-2xl border border-crimson/30 bg-crimson/10 p-6 text-center sm:p-8">
            <Quote className="mx-auto size-6 text-crimson" />
            <p className="mt-4 text-lg font-semibold italic leading-relaxed sm:text-xl">
              “O mercado não quebra traders pela falta de indicadores técnicos. O mercado quebra
              traders nos 5 minutos em que a mente entra em colapso emocional.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
