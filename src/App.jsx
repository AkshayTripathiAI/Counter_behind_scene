import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // State updates are scheduled, not applied immediately: reading
    // chosenCount on the next line would still give the old value.
    // React also batches multiple state updates made in the same event.
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <section className="counter-group">
          <h2>Counter keyed by the chosen value</h2>
          <p className="counter-group-hint">
            Changing the value changes the <code>key</code>, so React throws
            this counter away and mounts a fresh one.
          </p>
          <Counter key={chosenCount} initialCount={chosenCount} />
        </section>
        <section className="counter-group">
          <h2>Independent counter</h2>
          <p className="counter-group-hint">
            Wrapped in <code>memo</code> with a constant prop, so setting a
            new value does not re-render it.
          </p>
          <Counter initialCount={0} />
        </section>
      </main>
      <footer id="footer">
        <a
          href="https://github.com/AkshayTripathiAI/Counter_behind_scene"
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub
        </a>
      </footer>
    </>
  );
}

export default App;

// How the virtual DOM works in React
// step 1: Create a component tree
// step 2: Create a virtual snapshot of the target HTML
// step 3: Compare the new virtual DOM snapshot to the previous one
// step 4: Apply only the differences to the real DOM
