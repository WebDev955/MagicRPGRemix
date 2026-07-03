# Image performance follow-up

**Date:** 2026-07-03
**Status:** Not started — follow-up only

## Context

The app uses a lot of images (character/monster art, map/scene backgrounds,
battle sprites) imported from `src/assets/`. Asked what to do to make sure
image-heavy pages stay fast, but decided to defer any changes for now.

## Candidate approaches (discussed, not implemented)

1. **Build-time image compression/conversion to WebP**
   e.g. `vite-plugin-image-optimizer`. Low risk, no code changes required —
   likely the first thing to try.

2. **Lazy-load scene-specific assets**
   Load forest/castle textures and battle sprites via dynamic `import()`
   instead of static top-of-file imports, so the initial bundle doesn't ship
   every map/monster/battle texture upfront. Bigger payoff, but requires
   restructuring asset loading in files like `src/components/Battles/Battle.tsx`
   and `src/data/MapForest.tsx`.

## Next steps when picked back up

- Start with the compression plugin (cheap win, no code changes).
- Measure `dist/assets` size before/after.
- Decide whether lazy-loading is worth the extra restructuring based on the
  measured difference.
