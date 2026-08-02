import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useDesktopReveal() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid-lines absolute inset-0 opacity-[0.06]" />
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Animated eyebrow with slide and fade */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            {eyebrow}
          </motion.div>

          {/* Animated title with sophisticated reveal from right */}
          <motion.h1
            className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.25, 
              ease: "easeOut",
            }}
          >
            {title}
          </motion.h1>

          {/* Animated intro text with fade animation */}
          {intro ? (
            <motion.p 
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {intro}
            </motion.p>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}