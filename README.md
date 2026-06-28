# shopping-basket-checker

This document explains the design and logic of the shopping basket checker

The app focuses on utilising various array methods i have recently learnt

## design concept

The results panel ist treated like a **printed reciept**. Each item you add prints a new line, numbers are set in monospace font( so decimals line up like they would on real receipt), and once the basket is closed a perforated tear-off the edge appears at the bottom of the card

## files 

| File| Purpose |
| --- | --- |
| `index.html` | Page Structure (markup only) |
| `style.css` | All styling - new file |
| `script.js` | App logic, same behaviour ass before, classses added for styling hooks |

## Color system

All colors are defined once as CSS custom properties (variables) at
the top of `style.css`, inside `:root`. Change a value there and it
updates everywhere it's used.

```css
--color-bg:        #0a0a0a   /* page background, near-black */
--color-panel:      #1c1c1e   /* card background, dark grey */
--color-panel-raised:#232325  /* input/button background, slightly lighter grey */
--color-border:     #2e2e32   /* dividing lines, input borders */
--color-text:       #f5f5f7   /* primary text, off-white */
--color-text-muted: #9a9aa2   /* secondary text */
--color-text-faint: #6b6b72   /* placeholders, disabled state */
--color-blue:       #3d7fff   /* primary action color (Add Item button) */
--color-blue-light: #7aa6ff   /* hover states, highlighted values */
```

Two extra colors (`--color-status-warn` red and `--color-status-caution`
amber) are used **only** for the "Over budget" and "Getting expensive"

### Why these choices

- **Black / dark grey** background and card create the "receipt under
  a desk lamp" feel and make the blue accent and white text pop without
  needing bright colors everywhere.
- **Blue** is reserved for things the user can *do* or *should notice*:
  the Add Item button, the focus ring, the total cost, and the basket
  progress dots. If something isn't interactive or important, it stays
  grey or white.

## Typography

Two typefaces, loaded from Google Fonts in `index.html`:

- **Inter** — used for headings, labels, buttons, and section titles.
  A clean, modern grotesk.
- **IBM Plex Mono** — used for every number and price. Monospace digits
  mean the decimal points in `R49.99` and `R150.00` line up visually
  down the receipt, the way they would on an actual till receipt.
