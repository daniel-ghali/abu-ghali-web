import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, X, ZoomIn } from "lucide-react";
import { useT, useLocale } from "@/i18n/i18n";

export type GalleryImage = { src: string; captionEn: string; captionAr: string };

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function ProductGallery({
  images,
  titleEn,
  titleAr,
  code,
}: {
  images: GalleryImage[];
  titleEn: string;
  titleAr: string;
  code: string;
}) {
  const t = useT();
  const { isAr } = useLocale();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const count = images.length;
  const current = images[index];

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  const altFor = (g: GalleryImage) =>
    isAr
      ? `${g.captionAr} — ${titleAr} (${code}) — أبو غالي للصناعات الحديثة`
      : `${g.captionEn} — ${titleEn} (${code}) — Abu Ghali Modern Industries`;

  if (!count || !current) return null;

  return (
    <section aria-labelledby="product-gallery" className="rounded-xl border border-hairline bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 id="product-gallery" className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {t("Product images", "صور المنتج")}
        </h3>
        <span className="text-xs text-muted-foreground">
          {index + 1} / {count}
        </span>
      </div>

      <figure className="mt-4">
        <div className="group relative overflow-hidden rounded-lg border border-hairline bg-background">
          <img
            key={current.src}
            src={current.src}
            alt={altFor(current)}
            width={1280}
            height={960}
            className="aspect-[4/3] w-full animate-fade-in object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("Open full-size image", "افتح الصورة بالحجم الكامل") as string}
            className="absolute inset-0 flex items-end justify-end p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/85 px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground backdrop-blur transition group-hover:bg-accent">
              <ZoomIn className="h-3.5 w-3.5" />
              {t("Zoom", "تكبير")}
            </span>
          </button>

          {count > 1 && (
            <>
              <NavButton side="start" onClick={() => go(-1)} label={t("Previous image", "الصورة السابقة") as string} isAr={isAr} />
              <NavButton side="end" onClick={() => go(1)} label={t("Next image", "الصورة التالية") as string} isAr={isAr} />
            </>
          )}
        </div>
        <figcaption className="mt-2 text-xs text-muted-foreground">{t(current.captionEn, current.captionAr)}</figcaption>
      </figure>

      {count > 1 && (
        <ul className="mt-4 flex snap-x gap-3 overflow-x-auto pb-1">
          {images.map((g, i) => (
            <li key={i} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t(`Show image ${i + 1}`, `عرض الصورة ${i + 1}`) as string}
                aria-current={i === index}
                className={`block overflow-hidden rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  i === index ? "border-accent ring-1 ring-accent" : "border-hairline opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={g.src}
                  alt={altFor(g)}
                  loading="lazy"
                  width={200}
                  height={150}
                  className="h-16 w-24 object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && (
        <Lightbox
          images={images}
          index={index}
          setIndex={setIndex}
          onClose={() => setOpen(false)}
          altFor={altFor}
          isAr={isAr}
        />
      )}
    </section>
  );
}

function NavButton({
  side,
  onClick,
  label,
  isAr,
}: {
  side: "start" | "end";
  onClick: () => void;
  label: string;
  isAr: boolean;
}) {
  const Icon = (side === "start") !== isAr ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "start" ? "start-2" : "end-2"
      } grid h-11 w-11 place-items-center rounded-full bg-background/85 text-primary shadow-sm backdrop-blur transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

function Lightbox({
  images,
  index,
  setIndex,
  onClose,
  altFor,
  isAr,
}: {
  images: GalleryImage[];
  index: number;
  setIndex: (updater: (i: number) => number) => void;
  onClose: () => void;
  altFor: (g: GalleryImage) => string;
  isAr: boolean;
}) {
  const t = useT();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const stateRef = useRef({ zoom, offset });
  stateRef.current = { zoom, offset };

  const count = images.length;
  const current = images[index];

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const step = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count);
      reset();
    },
    [count, reset, setIndex],
  );

  const zoomAt = useCallback((next: number, px: number, py: number) => {
    const { zoom: z, offset: o } = stateRef.current;
    const clamped = clamp(next, MIN_ZOOM, MAX_ZOOM);
    const k = clamped / z;
    const nx = px - (px - o.x) * k;
    const ny = py - (py - o.y) * k;
    setZoom(clamped);
    setOffset(clamped === 1 ? { x: 0, y: 0 } : { x: nx, y: ny });
  }, []);

  const wheelRef = useRef((e: WheelEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
    const next = stateRef.current.zoom * Math.exp(-dy * 0.0015);
    zoomAt(next, e.clientX - rect.left, e.clientY - rect.top);
  });
  wheelRef.current = (e: WheelEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
    const next = stateRef.current.zoom * Math.exp(-dy * 0.0015);
    zoomAt(next, e.clientX - rect.left, e.clientY - rect.top);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelRef.current(e);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(isAr ? -1 : 1);
      else if (e.key === "ArrowLeft") step(isAr ? 1 : -1);
      else if (e.key === "+" || e.key === "=") zoomAt(stateRef.current.zoom * 1.4, 0, 0);
      else if (e.key === "-") zoomAt(stateRef.current.zoom / 1.4, 0, 0);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, step, zoomAt, isAr]);

  if (!current) return null;

  const centreZoom = (factor: number) => {
    const el = stageRef.current;
    const rect = el?.getBoundingClientRect();
    zoomAt(stateRef.current.zoom * factor, (rect?.width ?? 0) / 2, (rect?.height ?? 0) / 2);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("Product image viewer", "عارض صور المنتج") as string}
      className="fixed inset-0 z-50 flex animate-fade-in flex-col bg-primary/95 backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-primary-foreground">
        <span className="text-xs font-semibold tracking-[0.16em]">
          {index + 1} / {count}
        </span>
        <div className="flex items-center gap-2">
          <IconBtn onClick={() => centreZoom(1 / 1.4)} label={t("Zoom out", "تصغير") as string}>
            <Minus className="h-4 w-4" />
          </IconBtn>
          <span className="w-12 text-center text-xs tabular-nums">{Math.round(zoom * 100)}%</span>
          <IconBtn onClick={() => centreZoom(1.4)} label={t("Zoom in", "تكبير") as string}>
            <Plus className="h-4 w-4" />
          </IconBtn>
          <IconBtn onClick={reset} label={t("Reset zoom", "إعادة الضبط") as string}>
            <span className="text-[11px] font-semibold">1:1</span>
          </IconBtn>
          <IconBtn onClick={onClose} label={t("Close", "إغلاق") as string}>
            <X className="h-4 w-4" />
          </IconBtn>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative flex-1 touch-none overflow-hidden"
        onPointerDown={(e) => {
          if (zoom === 1) return;
          drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          setOffset({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        style={{ cursor: zoom > 1 ? (drag.current ? "grabbing" : "grab") : "zoom-in" }}
        onDoubleClick={() => (zoom > 1 ? reset() : centreZoom(2))}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: "0 0" }}
        >
          <img
            src={current.src}
            alt={altFor(current)}
            className="max-h-[78vh] max-w-[92vw] select-none object-contain"
            draggable={false}
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t("Previous image", "الصورة السابقة") as string}
              className="absolute start-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-3 text-primary transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isAr ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t("Next image", "الصورة التالية") as string}
              className="absolute end-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-3 text-primary transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isAr ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </>
        )}
      </div>

      <div className="px-4 pb-4 pt-2">
        <p className="mb-3 text-center text-xs text-primary-foreground/80">{t(current.captionEn, current.captionAr)}</p>
        <ul className="mx-auto flex max-w-3xl gap-2 overflow-x-auto">
          {images.map((g, i) => (
            <li key={i} className="shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIndex(() => i);
                  reset();
                }}
                aria-label={t(`Show image ${i + 1}`, `عرض الصورة ${i + 1}`) as string}
                aria-current={i === index}
                className={`block overflow-hidden rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  i === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={g.src} alt={altFor(g)} loading="lazy" className="h-14 w-20 object-cover" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IconBtn({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-primary-foreground/25 px-2 text-primary-foreground transition hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {children}
    </button>
  );
}
