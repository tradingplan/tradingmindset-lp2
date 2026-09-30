import { useEffect, useRef, useState } from "react";
import { Bell, ClipboardCheck, Headphones, Laptop, Pause, Play, Siren, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { TarotDemo } from "./TarotDemo";
import { WaveBars } from "./AppMockup";

const PILLARS = [
  {
    icon: Sparkles,
    tone: "text-violet border-violet/30 bg-violet/10",
    title: "Tarot Trader",
    sub: "Diagnóstico precoce de viés",
    text: "22 cartas de arquétipos comportamentais — O Vingador, O Ilusionista, O Hesitante, O Franco-Atirador — para identificar o viés antes dele custar dinheiro.",
  },
  {
    icon: Headphones,
    tone: "text-cyan border-cyan/30 bg-cyan/10",
    title: "Audioteca & Ondas Binaurais",
    sub: "Alfa 10 Hz e Teta 6 Hz",
    text: "Sintetizador nativo de frequências, ancoragem pré-market, descompressão pós-loss e reprogramação mental.",
  },
  {
    icon: ClipboardCheck,
    tone: "text-emerald border-emerald/30 bg-emerald/10",
    title: "Protocolo Diário & Score",
    sub: "Disciplina de 0 a 100%",
    text: "Checklist Pré-Market, Sniper Entry Check e cálculo automático do seu Score de Disciplina diário.",
  },
  {
    icon: Siren,
    tone: "text-crimson border-crimson/35 bg-crimson/10",
    title: "Botão de Pânico S.O.S",
    sub: "Anti-Tilt imediato",
    text: "Respiração guiada 4-7-8 com timer circular animado e resfriamento obrigatório pós-stop.",
  },
  {
    icon: Bell,
    tone: "text-amber border-amber/30 bg-amber/10",
    title: "Radar de Notícias",
    sub: "Alarmes duplos",
    text: "Alerta inteligente 15 minutos antes de Payroll, CPI, FOMC e Copom para proteção de stops.",
  },
  {
    icon: Laptop,
    tone: "text-foreground border-border bg-card",
    title: "Companion Multiplataforma",
    sub: "PC + Celular",
    text: "Use no smartphone (Android/iOS) ou no navegador, ao lado do gráfico do Profit ou TradingView.",
  },
];

const PHASES = [
  { label: "Inspire", seconds: 4, tone: "text-cyan" },
  { label: "Segure", seconds: 7, tone: "text-amber" },
  { label: "Expire", seconds: 8, tone: "text-emerald" },
];

function BreathingDemo() {
  const [phase, setPhase] = useState(0);
  const [left, setLeft] = useState(PHASES[0]!.seconds);
  const [running, setRunning] = useState(false);
  const phaseRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((v) => {
        if (v > 1) return v - 1;
        const next = (phaseRef.current + 1) % PHASES.length;
        phaseRef.current = next;
        setPhase(next);
        return PHASES[next]!.seconds;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const current = PHASES[phase]!;
  const progress = ((current.seconds - left + 1) / current.seconds) * 100;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative grid size-40 place-items-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
          <circle cx="50" cy="50" r="44" className="fill-none stroke-secondary" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="44"
            className="fill-none stroke-crimson transition-all duration-1000"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={276}
            strokeDashoffset={276 - (276 * progress) / 100}
          />
        </svg>
        <div className="text-center">
          <p className={`text-sm font-bold uppercase tracking-widest ${current.tone}`}>
            {current.label}
          </p>
          <p className="text-4xl font-extrabold">{left}s</p>
        </div>
      </div>
      <button
        onClick={() => setRunning((r) => !r)}
        className="inline-flex items-center gap-2 rounded-xl border border-crimson/40 bg-crimson/15 px-5 py-3 text-sm font-bold transition-all hover:bg-crimson/25 active:scale-95"
      >
        {running ? <Pause className="size-4" /> : <Play className="size-4" />}
        {running ? "Pausar protocolo 4-7-8" : "Testar protocolo 4-7-8"}
      </button>
    </div>
  );
}

function AudioDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="glass-card w-full rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pausar amostra" : "Tocar amostra"}
          className="grid size-12 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan shadow-glow-cyan transition-transform active:scale-90"
        >
          {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
        </button>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">Amostra • Flow State Alfa 10 Hz</p>
          <p className="text-xs text-muted-foreground">
            {playing ? "Reproduzindo demonstração visual" : "Toque para ver o visualizador"}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <WaveBars active={playing} />
      </div>
    </div>
  );
}

export function Pillars() {
  return (
    <section id="modulos" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="6 pilares"
            title="Um sistema completo de blindagem mental operacional"
            subtitle="Cada módulo ataca um ponto exato onde o emocional destrói o resultado técnico."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/30">
                <span className={`grid size-11 place-items-center rounded-xl border ${p.tone}`}>
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.sub}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="tarot" className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet">
                Experimente agora
              </p>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Puxe uma carta e veja seu viés operacional na prática
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                O Tarot Trader não prevê o mercado — ele revela o seu estado mental antes da
                abertura. Cada arquétipo vem com uma sabedoria e um antídoto prático para a sessão.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TarotDemo />
          </Reveal>
        </div>

        <div id="audioteca" className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <AudioDemo />
          </Reveal>
          <Reveal delay={0.1}>
            <BreathingDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
