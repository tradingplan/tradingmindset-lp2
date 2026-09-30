import { useEffect, useState } from "react";
import { Activity, Flame, Menu, ShieldCheck, X } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/offer";

const LINKS = [
  { href: "#modulos", label: "Módulos" },
  { href: "#tarot", label: "Tarot Trader" },
  { href: "#audioteca", label: "Audioteca" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

function useCountdown(totalSeconds: number) {
  const [left, setLeft] = useState(totalSeconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v <= 1 ? totalSeconds : v - 1)), 1000);
    return () => clearInterval(id);
  }, [totalSeconds]);
  const m = Math.floor(left / 60);
  const s = left % 60;
  return `${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

export function TopNav() {
  const time = useCountdown(14 * 60 + 32);
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-urgency border-b border-border backdrop-blur-md">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.72rem] font-medium sm:text-xs">
          <span className="inline-flex items-center gap-1.5 text-amber">
            <Flame className="size-3.5" /> Acesso Oficial Liberado
          </span>
          <span className="hidden text-muted-foreground sm:inline">•</span>
          <span className="text-foreground/90">
            Versão 2026 com Tarot Trader e Frequências Binaurais
          </span>
          <span className="rounded-full border border-amber/40 bg-background-deep/60 px-2 py-0.5 font-mono font-bold text-amber">
            {time}
          </span>
        </div>
      </div>

      <header className="border-b border-border bg-background-deep/80 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative grid size-9 place-items-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan shadow-glow-cyan">
              <Activity className="size-5" />
            </span>
            <span className="text-sm font-extrabold uppercase tracking-[0.12em] sm:text-base">
              Trading <span className="text-gradient-accent">Mindset</span>
              <span className="ml-1 align-super text-[0.6rem] font-bold tracking-widest text-amber">
                PRO
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#planos"
              className="hidden items-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-2.5 text-sm font-bold text-cyan transition-all hover:bg-cyan/20 hover:shadow-glow-cyan active:scale-95 sm:inline-flex"
            >
              <ShieldCheck className="size-4" /> Garantir Acesso PRO
            </a>
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-border bg-background-deep/95 px-5 py-4 lg:hidden">
            <div className="grid gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-card hover:text-cyan"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CHECKOUT_URL}
                className="mt-2 rounded-xl bg-cyan/15 px-3 py-3 text-center text-sm font-bold text-cyan"
              >
                Garantir Acesso PRO
              </a>
            </div>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
