import { Activity } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionTitle } from "./Reveal";

const FAQ = [
  {
    q: "Como recebo meu acesso após a compra?",
    a: "A liberação é imediata. Você recebe um e-mail de confirmação e entra no app (web ou celular) usando o mesmo e-mail da compra.",
  },
  {
    q: "Funciona sem internet (modo offline)?",
    a: "Sim. Os áudios e frequências podem ser baixados no celular e os protocolos funcionam 100% no modo avião.",
  },
  {
    q: "Funciona no celular e no computador?",
    a: "Sim. Você tem o aplicativo mobile (Android/iOS) e o Web Companion para usar ao lado do gráfico no PC, com sincronização em nuvem.",
  },
  {
    q: "Serve para quem opera ações, cripto ou forex?",
    a: "Sim. A psicologia de risco é universal: o sistema atua sobre o seu comportamento, não sobre um ativo específico.",
  },
  {
    q: "E se eu esquecer minha senha?",
    a: "A recuperação é instantânea por e-mail, direto na tela de login.",
  },
];

export function FaqFooter() {
  return (
    <>
      <section id="faq" className="relative py-20 sm:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card mx-auto mt-12 max-w-3xl rounded-2xl px-5 py-2 sm:px-7">
              <Accordion type="single" collapsible>
                {FAQ.map((item, i) => (
                  <AccordionItem key={item.q} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-bold hover:text-cyan">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background-deep py-12">
        <div className="section-shell">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
                <Activity className="size-5" />
              </span>
              <span className="text-sm font-extrabold uppercase tracking-[0.12em]">
                Trading <span className="text-gradient-accent">Mindset</span>
              </span>
            </span>
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
              O Trading Mindset é uma ferramenta de apoio educacional e comportamental. Não
              constitui recomendação de investimento.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-muted-foreground">
              <a href="#faq" className="transition-colors hover:text-cyan">
                Termos de Uso
              </a>
              <a href="#faq" className="transition-colors hover:text-cyan">
                Política de Privacidade
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Copyright © 2026 Trading Mindset. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
