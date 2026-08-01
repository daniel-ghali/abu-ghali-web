# Fix "Duplicate declaration hot" in route code-splitter

## Root Cause
`tanstackStart()` already installs its own router generator + code-splitter + HMR.
The standalone `tanstackRouter()` in `vite.config.ts` adds a SECOND HMR transform
that injects a duplicate `const hot` into each route file, causing the Babel
"Duplicate declaration 'hot'" error in `quote.tsx`.

## Steps
- [x] Investigate root cause (route files, plugin sources, vite config, react-start wiring)
- [x] Edit `vite.config.ts` to remove the redundant `tanstackRouter()` plugin
- [x] Restart dev server and verify routes load without the error
- [x] Verify `quote.tsx` and other routes transform cleanly (all 16 routes return 200)
- [x] Fix follow-up runtime error: `capabilities.tsx` used `routeSeo` without importing it
- [x] Verify all 15 routes render cleanly via dev server (200, no errors)
- [x] Fix follow-up runtime error: `index.tsx` used `Globe` icon without importing it
- [x] Fix follow-up runtime error: `index.tsx` used `Section`/`SectionHead` components without importing them from `@/components/site/section`
- [x] ESLint scan confirms zero undefined-identifier errors across all routes (319 errors are pre-existing prettier formatting only)
- [x] Verify homepage renders cleanly (200, correct title, no `SectionHead` error)
- [x] Verify all 16 routes render cleanly (200 clean=True)
- [x] `npx tsc --noEmit` passes with exit code 0 — no TypeScript errors remaining

