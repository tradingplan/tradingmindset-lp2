import { useEffect, useState } from "react";
import { Flame, Gauge, Headphones, Pause, Play, Sparkles } from "lucide-react";

const TABS = [
  { id: "score", label: "Protocolo", icon: Gauge },
  { id: "audio", label: "Audioteca", icon: Headphones },
  { id: "tarot", label: "Tarot", icon: Sparkles },
] as const;

export function WaveBars({ active, tone = "cyan" }: { active: boolean; tone?: "cyan" | "emerald" }) {
  const bars = Array.from({ length: 28 });
  return (
    <div className="flex h-10 items-center gap-[3px]">
      {bars.map((_, i) => (
        <span
          key={i}
          className={`w-[3px] flex-1 rounded-full ${tone === "cyan" ? "bg-cyan" : "bg-emerald"}`}
          style={{
            animation: active ? `wave 1.1s ease-in-out ${(i % 7) * 0.09}s infinite` : undefined,
            height: active ? "100%" : "28%",
            opacity: active ? 0.9 : 0.35,
          }}
        />
      ))}
    </div>
  );
}

export function AppMockup() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("score");
  const [playing, setPlaying] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setScore((s) => (s >= 100 ? 100 : s + 2)), 25);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-card animate-float rounded-3xl p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-crimson/70" />
          <span className="size-2.5 rounded-full bg-amber/70" />
          <span className="size-2.5 rounded-full bg-emerald/70" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-emerald">
          <Flame className="size-3" /> Streak 3 dias
        </span>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-1.5 rounded-2xl border border-border bg-background-deep/70 p-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-[0.7rem] font-bold transition-all sm:text-xs ${
              tab === t.id
                ? "bg-cyan/15 text-cyan shadow-glow-cyan"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <t.icon className="size-3.5" /> {t.label}
          </button>
        ))}
      </div>

      {tab === "score" ? (
        <div className="space-y-3">
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Score de Disciplina
              </p>
              <p className="text-2xl font-extrabold text-emerald">{score}%</p>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-emerald transition-[width] duration-100"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
          {[
            "Checklist pré-market concluído",
            "Sniper entry check validado",
            "Limite de operações respeitado",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-3 py-2.5 text-sm"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-md bg-emerald/15 text-[0.7rem] font-bold text-emerald">
                ✓
              </span>
              <span className="text-foreground/85">{item}</span>
            </div>
          ))}
        </div>
      ) : null}

      {tab === "audio" ? (
        <div className="space-y-3">
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pausar" : "Tocar"}
                className="grid size-11 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan shadow-glow-cyan transition-transform active:scale-90"
              >
                {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
              </button>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">Flow State • Alfa 10 Hz</p>
                <p className="text-xs text-muted-foreground">Ancoragem pré-market • 12:00</p>
              </div>
            </div>
            <div className="mt-3">
              <WaveBars active={playing} />
            </div>
          </div>
          {["Descompressão pós-loss • Teta 6 Hz", "Reprogramação mental • 08:30"].map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-3 py-2.5 text-sm text-foreground/85"
            >
              <Headphones className="size-4 shrink-0 text-cyan" /> {t}
            </div>
          ))}
        </div>
      ) : null}

      {tab === "tarot" ? (
        <div className="rounded-2xl border border-violet/25 bg-card/70 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
            Carta do dia
          </p>
          <p className="mt-2 text-2xl font-extrabold">O Vingador</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Viés detectado: impulso de recuperar o prejuízo imediatamente.
          </p>
          <div className="mt-4 rounded-xl border border-emerald/25 bg-emerald/10 p-3 text-left text-sm text-emerald">
            <strong className="font-bold">Antídoto:</strong> 10 minutos de resfriamento obrigatório
            antes da próxima entrada.
          </div>
        </div>
      ) : null}
    </div>
  );
}
