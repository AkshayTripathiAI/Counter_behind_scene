# Counter Behind the Scenes

**Live demo:** https://akshaytripathiai.github.io/Counter_behind_scene/

A React counter app used to explore how React renders under the hood: component re-execution, memoisation, keys and state batching.

Built as a practice project while learning React.

## Features

- Set a starting value for the counter (press Enter or click "Set"); the app tells you whether it is a prime number
- Increment/decrement buttons with a history list of every change (click or keyboard-select an entry to highlight it)
- Two counters: one re-mounted via `key` when the configured value changes, one fixed at 0 that `memo` keeps from re-rendering
- In-page **render log** panel showing every component render (indented by depth), so the live demo explains itself without DevTools; the same colour-coded output goes to the browser console
- Uses `memo`, `useCallback` and `useMemo` (the prime check only re-runs when the initial value changes)
- Responsive layout and visible keyboard focus styles

## Tech stack

- React 18
- Vite 4
- Deployed to GitHub Pages from the `gh-pages` branch (`base: '/Counter_behind_scene/'` in `vite.config.js`)

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/Counter_behind_scene.git
cd Counter_behind_scene
npm install
npm run dev
```

Open the URL Vite prints (by default http://localhost:5173) and watch the render log panel (or the browser console).

Other scripts: `npm run build`, `npm run preview`.

## Project structure

```
src/
  App.jsx                    # holds the chosen start value
  log.js                     # render logger (console + in-page store)
  components/
    Header.jsx
    RenderLog.jsx            # render log panel, mounted in its own React root
    Counter/
      ConfigureCounter.jsx   # number input + "Set" button
      Counter.jsx            # memoised counter, prime check
      CounterOutput.jsx
      CounterHistory.jsx
    UI/                      # IconButton and SVG icons
```
