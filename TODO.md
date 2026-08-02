# Scroll Animation Implementation Plan

## Step 1: Create reusable `Reveal` component
- [x] Create `src/components/site/reveal.tsx` — reusable scroll-reveal wrapper using `useDesktopReveal` pattern

## Step 2: Update shared site components
- [x] `src/components/site/capabilities-showcase.tsx` — animate trust stats, workflow steps, capability cards
- [x] `src/components/site/cta-band.tsx` — animate the CTA panel
- [x] `src/components/site/site-footer.tsx` — animate footer columns

## Step 3: Update route pages
- [x] `src/routes/industries.tsx` — animate industry cards
- [x] `src/routes/factory.tsx` — animate hero image and station cards
- [x] `src/routes/about.tsx` — animate spec plate, journey chapters, milestones, capabilities, gallery
- [x] `src/routes/products.tsx` — animate product cards and category galleries
- [x] `src/routes/projects.tsx` — animate project articles and trusted-by logos
- [x] `src/routes/quality.tsx` — animate image/text split and quality steps
- [x] `src/routes/careers.tsx` — animate job listings
- [x] `src/routes/contact.tsx` — animate contact info aside and form
- [x] `src/routes/news.tsx` — animate news articles
- [x] `src/routes/certificates.tsx` — animate certificate cards
- [x] `src/routes/blog.tsx` — animate blog post cards
- [x] `src/routes/downloads.tsx` — animate download items
- [x] `src/routes/quote.tsx` — animate side info panel and form wizard container

## Step 4: Verify build
- [x] Run `npm run build` to check for errors
