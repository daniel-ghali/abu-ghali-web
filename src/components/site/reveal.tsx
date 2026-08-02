import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Hook that detects desktop viewport (min-width: 1024px).
 * Animations only run on desktop for performance; mobile gets static content.
 */
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

type RevealDirection = "up" | "down" | "left" | "right" | "none";

/**
 * Scroll-reveal wrapper that fades/slides content into view when scrolled to.
 * - Disabled automatically on mobile (matches existing site pattern).
 * - Respects user's reduced-motion preference.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.55,
  once = true,
  amount = 0.15,
  offset = 18,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  offset?: number;
}) {
  const isDesktop = useDesktopReveal();
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (!isDesktop || shouldReduceMotion) return { opacity: 1, x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0.96, y: offset };
      case "down":
        return { opacity: 0.96, y: -offset };
      case "left":
        return { opacity: 0.96, x: offset };
      case "right":
        return { opacity: 0.96, x: -offset };
      case "none":
      default:
        return { opacity: 0.96 };
    }
  };

  return (
    <motion.div
      className={cn(className)}
      initial={getInitial()}
      whileInView={isDesktop && !shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={isDesktop && !shouldReduceMotion ? { once, amount } : undefined}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
