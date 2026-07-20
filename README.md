# sacropost-components

Component library for SacroPost site builder.

## Structure
Each section lives in `<section>/<slug>/`:
- `component.jsx` — React component, colours via CSS custom properties only
- `preview.html` — self-contained HTML preview (used in the desktop app picker)
- `preview.png`  — 1280×400 screenshot generated from preview.html
- `meta.json`    — name, family, description, required CSS vars

## Families
- `tabloid`   — bold, high-contrast, newspaper front-page feel
- `editorial` — clean, structured, long-form reading
- `magazine`  — rich visuals, asymmetric grids
- `minimal`   — text-first, subtle, fast-loading
