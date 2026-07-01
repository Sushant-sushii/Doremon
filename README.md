# Doremon

A playful React + Vite landing page inspired by Doraemon, built with GSAP animations and scroll-driven transitions.

## What this project includes

- React 19 with Vite
- Tailwind CSS styling
- GSAP animations with `ScrollTrigger`
- Animated character cards and floating text
- Footer reveal animation from the final section
- Remix Icon support and React Router DOM installed

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL shown in the terminal to preview the app.

## Production

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
```

## Project structure

- `src/`
  - `App.jsx` — top-level application shell
  - `main.jsx` — React entry point
  - `components/` — animated sections, cards, footer, and scenes
  - `assets/` — image files for the app
- `public/` — static public assets
- `vite.config.js` — Vite configuration
- `package.json` — dependencies and scripts

## Notes

- GSAP powers the motion and scroll experience.
- Footer text floats with a subtle infinite animation.
- Tailwind provides utility-first styling.

## License

This repository does not contain a license file by default.
