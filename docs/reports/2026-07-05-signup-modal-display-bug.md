# Bug Report: PlayerCreationForm Visible on Title Screen Without Opening

**Date:** 2026-07-05
**Component(s):** `src/components/UI/Modal.tsx`, `src/components/UI/Modal.module.css`, `src/components/screens/TitleScreen.tsx`

## Summary

The `PlayerCreationForm` (rendered inside a `Modal` with the `signUpModal` class) was visibly displayed at the bottom of the Title Screen on load, even though `accountCtx.isCreatingAccount` defaults to `false` and is only set to `true` when "New Game" is clicked.

## Root Cause

`Modal.tsx` wraps a native `<dialog>` element and toggles it **imperatively**, not via conditional rendering:

```tsx
useEffect(() => {
    if (open) modal.showModal();
    else modal.close();
}, [open]);
```

Because of this, the `<dialog>` and its children (`<PlayerCreationForm/>`) are **always mounted in the DOM** via `createPortal` into `#modal` (a plain `<div>` in `index.html`, sitting right after `#root` with no special positioning). Visibility is meant to be controlled entirely by the browser's native dialog behavior: a `<dialog>` without the `open` attribute is hidden by the user-agent stylesheet rule:

```css
dialog:not([open]) { display: none; }
```

The `.signUpModal` class, however, set `display: flex` **unconditionally**:

```css
.signUpModal {
    width: 90%;
    display: flex;   /* <- problem */
    ...
}
```

CSS cascade resolves by **origin and importance first, specificity second**. Any normal-priority author rule always beats a normal-priority user-agent rule, regardless of selector specificity. So this one `display: flex` declaration silently canceled the browser's built-in "hide when closed" behavior — the dialog rendered as an ordinary in-flow flex box wherever `#modal` happened to sit in the document, i.e. below the Title Screen content, instead of being hidden (or, once actually opened via `showModal()`, appearing as a proper top-layer overlay).

None of the other modal variants (`inventoryModal`, `monsterLogModal`, `questModal`, `battleModal`, `npcModal`) set `display` in their class, which is why only the sign-up form showed this symptom.

## Fix

Scope the `display: flex` declaration to only apply when the dialog actually has the `open` attribute (which the browser adds automatically when `.showModal()` runs):

```css
.signUpModal {
    width: 90%;
    align-items: center;
    justify-items: center;
    align-self: center;
    border: solid 5px black;
    height: 50vh;
    max-width: 428px;
    background: url("../../assets/paperTexture.jpg") no-repeat center / cover;
    border-radius: 38px;
}

.signUpModal[open] {
    display: flex;
    flex-direction: column;
}
```

This preserves the intended flex column layout while the modal is open, without interfering with the native closed/hidden state.

## General Usage Notes (to avoid recurrence)

1. **Never set `display` unconditionally on a class applied to a `<dialog>`-based modal.** If a modal needs `display: flex` (or `grid`, etc.) while open, scope it with an `[open]` attribute selector: `.myModal[open] { display: flex; }`. Layout properties that aren't `display` (width, border, background, etc.) are safe to leave unscoped.
2. **Remember this app's modals are always mounted, never conditionally rendered.** `Modal.tsx` calls `showModal()`/`close()` imperatively via `useEffect` — the JSX children exist in the DOM at all times regardless of the `open` prop. Visibility is 100% a CSS/native-dialog concern, not a React-mounting concern. When a modal "shows up when it shouldn't," check its CSS for `display` overrides before suspecting the state/context logic.
3. **CSS cascade reminder:** origin/importance is resolved before specificity. A low-specificity author rule (`.someClass { display: ... }`) will always override a higher-specificity user-agent rule (`dialog:not([open]) { display: none; }`) as long as both are normal-priority declarations. This is easy to forget when relying on native element defaults (`<dialog>`, `<details>`, etc.).
4. **When debugging "why is this always visible" issues on native interactive elements** (`<dialog>`, `<details>`, `<summary>`), inspect the element in DevTools for the presence/absence of the relevant boolean attribute (`open`) and compare against any author CSS rules matching that same class — don't assume the UA default is still in effect.
5. Consider adding a lint rule or code-review checklist item: any new `.xModal` class added to `Modal.module.css` should not declare `display` outside of an `[open]`-scoped selector.

---
Source project: MagicRpgRemix
