## Scope

Four connected changes across the site:

1. **Bilingual (English + Arabic) with RTL** — full site-wide language toggle
2. **Remove** the "What clients say" (testimonials) and "Frequently asked" (FAQ) sections
3. **Rebuild the footer** as a tall, premium, Siemens/ABB-style final page
4. **Rebuild the Manufacturing Capabilities section** as a hierarchical, engineering-spec layout with trust strip, process flow, featured card, and 8 capability cards

## 1. Bilingual + RTL

- Add a lightweight i18n layer (custom React context + hook — no heavy library) with two locales: `en`, `ar`.
- Persist choice in `localStorage`, default to `en`.
- Toggle lives in the header (top-right, next to the "Request quote" button): `EN | ع`.
- On `ar`: set `<html dir="rtl" lang="ar">` and switch body font to `IBM Plex Sans Arabic` (already declared in `styles.css`).
- All copy moves into a single `src/i18n/dictionary.ts` keyed by page/section. Components read via `useT()`.
- Every page (`index`, `capabilities`, `industries`, `about`, `factory`, `quality`, `certificates`, `projects`, `products`, `news`, `blog`, `careers`, `contact`, `quote`, `downloads`) gets Arabic copy.
- Header + footer + CTA band fully translated.

## 2. Removals

- Delete the testimonials ("What clients say") section from `src/routes/index.tsx`.
- Delete the FAQ section from `src/routes/index.tsx` (and any dedicated FAQ block on other pages).

## 3. Premium footer

Replace `src/components/site/site-footer.tsx` with a taller multi-band footer:

**Band A — Pre-footer CTA / mini-RFQ**
Heading, sub-paragraph, primary "Send drawings" button → `/quote`. Subtle engineering grid background at ~5% opacity.

**Band B — Main footer** (navy, grid background)
- Left column: logo + short value-prop paragraph (EN/AR) + 4 checkmark trust points (25+ years, 800+ clients, OEM, export-ready).
- 4 nav columns: Company / Capabilities / Industries / Contact (all EN/AR).
- Certifications strip: `ISO 9001`, `CE`, `OEM`, `Made in Egypt` as small outlined badges.

**Band C — Manufacturing promise + socials**
- One-line promise ("We manufacture to drawing — precision, quality, on-time delivery.").
- Small outline social icons (LinkedIn primary, then Facebook, Instagram, WhatsApp).

**Band D — Bottom bar**
- Left: © 2026 · Privacy · Terms · Cookies · Sitemap.
- Right: `ISO 9001 · Made in Egypt · Export Ready`.

All spacing 32–48px, 24px rounded corners on cards, thin hairline dividers, white text with orange accents on CTAs only, smooth hover states.

## 4. Manufacturing Capabilities section (homepage + `/capabilities`)

Replace both the homepage capabilities block and the `/capabilities` page body.

**Header** — small label "قدراتنا التصنيعية / Manufacturing Capabilities", large 2-line heading, description paragraph, tagline.

**Trust strip** — 6 checkmark badges in a horizontal row above the cards (25+ years, 800+ clients, 58 machines, OEM to drawing, export-ready, engineering review per RFQ). Outline icons only.

**Process flow** — horizontal 6-step engineering workflow with thin line connectors and arrows: Engineering Review → Tool Design → Manufacturing → Inspection → Packaging → Delivery.

**Cards grid** — hierarchical layout, not a uniform 3×3:
- Card 01 (CNC) = large featured card spanning 2 columns and 2 rows.
- Cards 02–08 fill the remaining slots on a 3-column grid.

**Card anatomy** — 24px radius, 40px padding, hairline border, subtle shadow:
- Real factory image (16:10)
- Statistic overlay ("24 CNC MACHINES")
- Large capability number (01, 02, …)
- Title + short description
- Technical specs list (label / value pairs)
- Row of technical badges
- CTA link "Request a quote → / اطلب عرض سعر"
- Hover: image zoom, orange underline expand, shadow lift.

**Capabilities** — all 8: CNC · Water Flanges · Casting · Hydraulics · Rubber · Tool & Die · Gears · Hydraulic Pumps (specs/badges per user's spec).

**Section CTA** — dark card at the bottom: "هل لديك رسومات هندسية؟" with two buttons (Send drawings / Talk to an engineer) and a 5-check reassurance list (free engineering review, 48h quote, NDA available, OEM to drawing, direct engineering support).

## Technical notes

- No new dependencies; i18n is a ~40-line context.
- `src/routes/__root.tsx` reads locale from context and sets `<html lang dir>` via TanStack head or a client effect.
- Existing capability images are reused; only layout + copy + hierarchy change.
- Type-safe RTL: use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`) where direction matters.
