// Every render is logged to the browser console *and* to an in-page panel
// (see RenderLog.jsx) so the live demo shows what re-renders without DevTools.

const MAX_ENTRIES = 150;
let entries = [];
let nextId = 0;
let notifyScheduled = false;
const listeners = new Set();

function notify() {
  notifyScheduled = false;
  listeners.forEach((listener) => listener());
}

export function log(message, level = 0, type = 'component') {
  let styling = 'padding: 0.15rem; background: #04406b; color: #fcfabd';

  if (type === 'other') {
    styling = 'padding: 0.15rem; background: #210957; color: #ede6b2';
  }

  const indent = '- '.repeat(level);

  console.log('%c' + indent + message, styling);

  entries = [{ id: nextId++, message, level, type }, ...entries].slice(
    0,
    MAX_ENTRIES
  );

  // log() is called during render, so never update React state synchronously
  // from here - batch the notification until after the current render.
  if (!notifyScheduled) {
    notifyScheduled = true;
    setTimeout(notify, 0);
  }
}

export function clearLog() {
  entries = [];
  notify();
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getEntries() {
  return entries;
}
