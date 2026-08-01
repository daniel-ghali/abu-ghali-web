import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const { locale, setLocale, isAr } = useLocale();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
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

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-hairline bg-background/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex flex-col space-y-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-lg px-4 text-base font-semibold text-primary transition hover:bg-surface hover:text-accent"
                  activeProps={{ className: "text-accent bg-accent/5 font-bold" }}
                >
                  {t(item.en, item.ar)}
                </Link>
              ))}
              <div className="rounded-2xl border border-hairline bg-gradient-to-b from-surface/70 to-background p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
                {/* Language toggle in mobile menu */}
                <div className="mb-3 flex items-center gap-1 rounded-full border border-hairline bg-surface/70 p-1 text-xs font-semibold sm:hidden">
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={cn(
                      "flex-1 rounded-full py-1.5 text-center transition duration-200",
                      locale === "en" ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground"
                    )}
                    aria-pressed={locale === "en"}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("ar")}
                    className={cn(
                      "flex-1 rounded-full py-1.5 text-center transition duration-200",
                      locale === "ar" ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground"
                    )}
                    aria-pressed={locale === "ar"}
                    style={{ fontFamily: "var(--font-arabic)" }}
                  >
                    العربية
                  </button>
                </div>
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-4 font-semibold text-accent-foreground shadow-sm"
                >
                  <span>{t("Request quote", "اطلب عرض سعر")}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}