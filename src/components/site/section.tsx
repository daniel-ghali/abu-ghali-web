import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <motion.section
      className={cn("py-16 sm:py-20 md:py-28", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {bleed ? children : <div className="container-x">{children}</div>}
    </motion.section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow ? (
        <div className="eyebrow-accent">
          <span className="inline-block h-px w-6 bg-accent" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-4xl md:text-[42px] lg:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <motion.section
      className="relative overflow-hidden bg-primary text-primary-foreground"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid-lines absolute inset-0 opacity-[0.06]" />
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {eyebrow}
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}