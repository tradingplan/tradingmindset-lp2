import { Check, X } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const ROWS = [
  {
    topic: "Reação após o stop loss",
    amateur: "Dobra o lote para recuperar no impulso",
    pro: "Timer de resfriamento obrigatório antes da próxima entrada",
  },
  {
    topic: "Rotina pré-abertura (08:30)",
    amateur: "Abre a plataforma no susto, sem plano",
    pro: "Checklist pré-market + áudio de ancoragem Alfa 10 Hz",
  },
  {
    topic: "Gestão de notícias macro",
    amateur: "Descobre o CPI quando o stop já foi varrido",
    pro: "Alarme duplo 15 minutos antes de Payroll, CPI, FOMC e Copom",
  },
  {
    topic: "Mapeamento de consistência",
    amateur: "Só olha o extrato no fim do mês",
    pro: "Score de Disciplina diário e histórico de 90 dias",
  },
  {
    topic: "Acesso offline no modo avião",
    amateur: "Depende de internet e de sala de sinais",
    pro: "Áudios baixados e protocolos 100% offline",
  },
];

const IS_FOR = [
  "Trader que já tem setup e quer parar de sabotá-lo",
  "Quem opera índice, dólar, ações, cripto ou forex",
  "Quem já devolveu lucro de semanas em um dia de tilt",
  "Quem quer rotina e não adrenalina",
];

const IS_NOT_FOR = [
  "Quem busca sala de sinais e entradas prontas",
  "Quem quer robô de lucro garantido",
  "Quem não aceita seguir checklist e limites",
  "Quem procura atalho mágico sem disciplina",
];

export function Comparison() {
  return (
    <section id="comparativo" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Comparativo"
            title="Trader amador vs. Trader com Trading Mindset"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-card mt-12 overflow-hidden rounded-2xl">
            <div className="hidden grid-cols-3 border-b border-border bg-background-deep/60 text-xs font-bold uppercase tracking-wider md:grid">
              <div className="px-5 py-4 text-muted-foreground">Situação</div>
              <div className="px-5 py-4 text-crimson">Trader amador</div>
              <div className="px-5 py-4 text-emerald">Com Trading Mindset</div>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.topic}
                className="grid gap-2 border-b border-border px-5 py-5 last:border-b-0 md:grid-cols-3 md:gap-0 md:px-0 md:py-0"
              >
                <div className="text-sm font-bold md:px-5 md:py-5">{r.topic}</div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground md:px-5 md:py-5">
                  <X className="mt-0.5 size-4 shrink-0 text-crimson" /> {r.amateur}
                </div>
                <div className="flex items-start gap-2 text-sm text-foreground/90 md:px-5 md:py-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald" /> {r.pro}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full rounded-2xl border-emerald/25 p-6">
              <h3 className="text-lg font-extrabold text-emerald">É para você se…</h3>
              <ul className="mt-5 space-y-3">
                {IS_FOR.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card h-full rounded-2xl border-crimson/25 p-6">
              <h3 className="text-lg font-extrabold text-crimson">Não é para você se…</h3>
              <ul className="mt-5 space-y-3">
                {IS_NOT_FOR.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-crimson" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
