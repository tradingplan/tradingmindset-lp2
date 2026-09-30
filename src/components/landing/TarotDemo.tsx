import { useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";

const CARDS = [
  {
    name: "O Vingador",
    wisdom: "Você quer o dinheiro de volta, não a operação certa.",
    antidote: "Resfriamento de 10 minutos e metade do lote na próxima entrada válida.",
  },
  {
    name: "O Ilusionista",
    wisdom: "Você está vendo um setup onde só existe vontade.",
    antidote: "Só entre se puder marcar os 3 critérios do checklist em voz alta.",
  },
  {
    name: "O Hesitante",
    wisdom: "O medo do erro está te tirando das entradas planejadas.",
    antidote: "Ordem programada antes da abertura, sem decisão no calor do gráfico.",
  },
  {
    name: "O Franco-Atirador",
    wisdom: "Excesso de cliques disfarçado de oportunidade.",
    antidote: "Limite rígido: 3 operações por sessão, depois a plataforma fecha.",
  },
];

export function TarotDemo() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const card = CARDS[index];

  const draw = () => {
    if (revealed) {
      setRevealed(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % CARDS.length);
        setRevealed(true);
      }, 320);
      return;
    }
    setIndex(Math.floor(Math.random() * CARDS.length));
    setRevealed(true);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="[perspective:1400px]">
        <div
          className="relative h-[19rem] w-[13rem] transition-transform duration-700 [transform-style:preserve-3d]"
          style={{ transform: revealed ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 grid place-items-center rounded-2xl border border-violet/35 bg-card [backface-visibility:hidden]">
            <div className="grid-lines absolute inset-0 rounded-2xl opacity-50" />
            <div className="relative grid place-items-center gap-3 text-center">
              <Sparkles className="size-9 text-violet" />
              <p className="px-4 text-xs font-bold uppercase tracking-[0.2em] text-violet">
                Tarot Trader
              </p>
              <p className="px-6 text-[0.7rem] text-muted-foreground">22 arquétipos comportamentais</p>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl border border-violet/40 bg-background-deep p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-violet">
              Arquétipo
            </p>
            <p className="mt-1 text-xl font-extrabold leading-tight">{card.name}</p>
            <div className="mt-4 space-y-3 text-left">
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-widest text-cyan">
                  Sabedoria
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/85">{card.wisdom}</p>
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-widest text-emerald">
                  Antídoto
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/85">{card.antidote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={draw}
        className="inline-flex items-center gap-2 rounded-xl border border-violet/45 bg-violet/15 px-5 py-3 text-sm font-bold text-foreground transition-all hover:bg-violet/25 active:scale-95"
      >
        {revealed ? <RotateCcw className="size-4" /> : <Sparkles className="size-4" />}
        {revealed ? "Puxar outra carta" : "Clique para puxar uma carta de exemplo"}
      </button>
    </div>
  );
}
