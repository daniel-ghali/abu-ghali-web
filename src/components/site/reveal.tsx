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
  duration = 0.5,
  once = false,
  amount = 0.1,
  offset = 20,
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
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 1, x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: offset };
      case "down":
        return { opacity: 0, y: -offset };
      case "left":
        return { opacity: 0, x: offset };
      case "right":
        return { opacity: 0, x: -offset };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      className={cn(className)}
      initial={getInitial()}
      whileInView={!shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={!shouldReduceMotion ? { once: true, amount, margin: "0px 0px -100px 0px" } : undefined}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
