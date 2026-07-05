# Report: Responsive/Cross-Device Review of index.css & App.css

**Date:** 2026-07-05
**Files:** `src/index.css`, `src/App.css`

## Summary

Reviewed the app's two global stylesheets for cross-device issues, given the app renders its whole UI inside a fixed-max-width "mobile frame" (`--max-mobile-width: 430px`) centered on the page. Found two real risks and made targeted fixes; everything else in these files (the centering/max-width approach, the `box-sizing: border-box` reset, the viewport meta tag in `index.html`) was already solid and didn't need changes.

## Changes Made

### 1. `100vh` → `100dvh` fallback on `#root` (`App.css`)

**Before:**
```css
#root {
  ...
  min-height: 100vh;
  ...
}
```

**After:**
```css
#root {
  ...
  min-height: 100vh;
  min-height: 100dvh;
  ...
}
```

**Why:** On mobile Safari/Chrome, `100vh` is calculated against the *largest possible* viewport, including the space behind the collapsing address bar/toolbar. As the toolbar shows/hides while scrolling, content sized with `100vh` can visibly jump, leave a gap at the bottom, or get clipped. `100dvh` (dynamic viewport height) tracks the *actual visible* viewport and updates as the browser chrome resizes. The `100vh` line is kept first as a fallback for browsers that don't support `dvh` — CSS ignores unrecognized values, so older browsers use the first (valid) declaration and modern browsers use the second (later, and more specific to their capability).

### 2. Responsive `h1` sizing (`index.css`)

**Before:**
```css
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
```

**After:**
```css
h1 {
  font-size: clamp(1.75rem, 8vw, 2.75rem);
  line-height: 1.1;
}
```

**Why:** `3.2em` is sized for a full-width desktop page, but this app's content is boxed into a 430px-max frame. On a small phone (~320–375px wide), that fixed size was oversized relative to the frame and risked wrapping/overflow. `clamp(min, preferred, max)` scales the heading down smoothly on narrow viewports (down to `1.75rem`), scales with viewport width in between, and caps out at `2.75rem` once the viewport exceeds roughly the frame's width — so it looks consistent on tablets/desktop (where the frame stops growing) while staying readable and non-overflowing on the smallest phones.

## Not Changed (and why)

- **`#root` max-width/centering strategy** — already correct; this is what makes the app look like a boxed mobile frame on desktop instead of stretching full-width.
- **`box-sizing: border-box` reset** — already global and correct.
- **Viewport meta tag** (`index.html`) — already present and correct (`width=device-width, initial-scale=1.0`).
- **Safe-area-inset padding** (notch/home-indicator support) — not added. This only matters if the app is ever run full-screen/installed as a PWA; skipped for now since it's speculative, not an active issue. Worth revisiting if a PWA/standalone mode is added later.

## Usage Notes Going Forward

1. **Prefer `dvh`/`svh`/`lvh` over `vh` for any full-viewport-height element**, especially anything meant to fill the screen on mobile (modals, the game frame itself). Keep a `vh` fallback line before the dynamic-unit line for older browser support.
2. **Use `clamp()` for typography that needs to work both inside the 430px mobile frame and on wider desktop viewports**, rather than fixed `em`/`px` values — it avoids needing separate media-query breakpoints for simple scaling.
3. If the app ever adds a manifest/PWA install flow, revisit safe-area-inset padding on `#root` or `body` for notched devices.

---
Source project: MagicRpgRemix
