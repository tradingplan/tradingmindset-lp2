import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
