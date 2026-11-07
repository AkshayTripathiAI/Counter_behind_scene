import { useSyncExternalStore } from 'react';

import { clearLog, getEntries, subscribe } from '../log.js';

// Rendered in its own React root (see main.jsx) so it never causes the app
// it is observing to re-render, and it does not log its own renders.
export default function RenderLog() {
  const entries = useSyncExternalStore(subscribe, getEntries);

  return (
    <aside id="render-log" aria-label="Render log">
      <div className="render-log-header">
        <h2>Render log</h2>
        <span>{entries.length} entries (newest first)</span>
        <button type="button" onClick={clearLog}>
          Clear
        </button>
      </div>
      <p className="render-log-hint">
        Click a button above and watch which components re-execute. The same
        output is printed to the browser console.
      </p>
      <ol>
        {entries.map((entry) => (
          <li
            key={entry.id}
            className={entry.type}
            style={{ paddingLeft: `${entry.level * 1.25 + 0.5}rem` }}
          >
            {entry.message}
          </li>
        ))}
      </ol>
    </aside>
  );
}
