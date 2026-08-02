import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AGLogo } from "./ag-logo";
import { useLocale, useT } from "@/i18n/i18n";

const NAV = [
  { to: "/capabilities", en: "Capabilities", ar: "قدراتنا" },
  { to: "/industries", en: "Industries", ar: "القطاعات" },
  { to: "/products", en: "Products", ar: "المنتجات" },
  { to: "/factory", en: "Factory", ar: "المصنع" },
  { to: "/projects", en: "Projects", ar: "المشاريع" },
  { to: "/quality", en: "Quality", ar: "الجودة" },
  { to: "/about", en: "About", ar: "من نحن" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale, isAr } = useLocale();
  const t = useT();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile menu component to be portaled
  const mobileMenu = mounted && open && (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setOpen(false)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              zIndex: 99997,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          {/* Slide-in Menu Panel from Right to Left */}
          <motion.div
            className="w-[85vw] max-w-sm overflow-y-auto lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              right: 0, 
              bottom: 0,
              zIndex: 99998,
              backgroundColor: '#ffffff',
              boxShadow: '-8px 0 32px -8px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Menu Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-background/95 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <AGLogo className="h-7 w-7 text-primary" />
                <div className="flex flex-col leading-none">
                  <span className={cn("text-sm font-bold tracking-[0.14em] text-primary", isAr && "tracking-normal text-base")}>
                    {t("ABU GHALI", "أبو غالي")}
                  </span>
                  <span className={cn("mt-0.5 text-[8.5px] font-semibold tracking-[0.24em] text-muted-foreground uppercase", isAr && "tracking-wide text-[9.5px]")}>
                    {t("MODERN INDUSTRIES", "للصناعات الحديثة")}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-surface text-primary transition hover:bg-accent/10 hover:border-accent hover:text-accent"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col p-6">
              {/* Navigation Links */}
              <nav className="space-y-1">
                {NAV.map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[52px] items-center rounded-xl px-4 text-base font-semibold text-primary transition hover:bg-surface hover:text-accent"
                      activeProps={{ 
                        className: "text-accent bg-accent/10 font-bold border border-accent/20" 
                      }}
                    >
                      {t(item.en, item.ar)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Actions Card */}
              <motion.div
                className="mt-6 space-y-4 rounded-2xl border border-hairline bg-gradient-to-br from-surface/70 to-background p-5 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                {/* Language Switcher - visible only on smallest screens */}
                <div className="flex items-center gap-1.5 rounded-xl border border-hairline bg-background p-1 text-xs font-semibold sm:hidden">
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={cn(
                      "flex-1 rounded-lg py-2 text-center transition duration-200",
                      locale === "en" 
                        ? "bg-accent text-accent-foreground font-bold shadow-sm" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                    aria-pressed={locale === "en"}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("ar")}
                    className={cn(
                      "flex-1 rounded-lg py-2 text-center transition duration-200",
                      locale === "ar" 
                        ? "bg-accent text-accent-foreground font-bold shadow-sm" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                    aria-pressed={locale === "ar"}
                    style={{ fontFamily: "var(--font-arabic)" }}
                  >
                    العربية
                  </button>
                </div>

                {/* Request Quote Button */}
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-accent px-5 text-base font-semibold text-accent-foreground shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)] transition hover:bg-accent/90 hover:shadow-[0_15px_40px_-18px_rgba(0,0,0,0.5)]"
                >
                  <span>{t("Request quote", "اطلب عرض سعر")}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b transition-all duration-300",
        scrolled
          ? "border-hairline/80 bg-background/90 py-0 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl"
          : "border-transparent bg-background/80 py-1 backdrop-blur-md"
      )}
    >
      <div className="container-x flex h-10 items-center justify-between gap-3 md:h-14">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3 rounded-full px-1.5 py-1 transition hover:bg-surface/60">
          <div className="relative flex items-center justify-center">
            <AGLogo className="h-8 w-8 text-primary transition duration-300 group-hover:scale-105" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "text-base font-bold tracking-[0.14em] text-primary transition duration-200 group-hover:text-accent",
                isAr && "tracking-normal text-lg"
              )}
            >
              {t("ABU GHALI", "أبو غالي")}
            </span>
            <span
              className={cn(
                "mt-0.5 text-[9.5px] font-semibold tracking-[0.24em] text-muted-foreground uppercase",
                isAr && "tracking-wide text-[10.5px]"
              )}
            >
              {t("MODERN INDUSTRIES", "للصناعات الحديثة")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 lg:flex bg-surface/60 p-1.5 rounded-full border border-hairline/60">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative rounded-full px-3 py-1.25 text-xs font-semibold text-primary/80 transition duration-200 hover:text-primary hover:bg-background/80"
              activeProps={{
                className: "text-accent font-bold bg-background shadow-xs border border-hairline/80",
              }}
            >
              {t(item.en, item.ar)}
            </Link>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher - hidden on smallest phones, visible sm+ */}
          <div className="hidden items-center gap-1 rounded-full border border-hairline bg-surface/70 p-1 text-xs font-semibold sm:flex">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2.5 py-1 transition duration-200",
                locale === "en"
                  ? "bg-accent text-accent-foreground font-bold shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              )}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("ar")}
              className={cn(
                "rounded-full px-2.5 py-1 transition duration-200",
                locale === "ar"
                  ? "bg-accent text-accent-foreground font-bold shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              )}
              aria-pressed={locale === "ar"}
              style={{ fontFamily: "var(--font-arabic)" }}
            >
              ع
            </button>
          </div>

          {/* Request Quote Button */}
          <Link
            to="/quote"
            className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] transition duration-200 hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            <span>{t("Request quote", "اطلب عرض سعر")}</span>
            <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-background text-primary shadow-sm transition hover:bg-surface lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Portal */}
      {mounted && typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </header>
  );
}