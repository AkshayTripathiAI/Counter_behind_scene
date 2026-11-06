# Counter Behind the Scenes

A React counter app used to explore how React renders under the hood: component re-execution, memoisation, keys and state batching.

Built as a practice project while learning React.

## Features

- Set a starting value for the counter; the app tells you whether it is a prime number
- Increment/decrement buttons with a clickable history list of every change
- Two counters side by side: one re-mounted via `key` when the configured value changes, one fixed at 0
- Every component logs its render to the browser console (colour-coded, indented by depth) so you can see exactly what re-renders
- Uses `memo` and `useCallback` to avoid unnecessary re-renders

## Tech stack

- React 18
- Vite 4
- [Million](https://million.dev) compiler (enabled in `vite.config.js` with `auto: true`)

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/Counter_behind_scene.git
cd Counter_behind_scene
npm install
npm run dev
```

Open the URL Vite prints (by default http://localhost:5173) and keep the browser console open to see the render logs.

Other scripts: `npm run build`, `npm run preview`.

## Project structure

```
src/
  App.jsx                    # holds the chosen start value
  log.js                     # styled console logger used by every component
  components/
    Header.jsx
    Counter/
      ConfigureCounter.jsx   # number input + "Set" button
      Counter.jsx            # memoised counter, prime check
      CounterOutput.jsx
      CounterHistory.jsx
    UI/                      # IconButton and SVG icons
```
