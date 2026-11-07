import { useState } from "react";

import { log } from "../../log.js";

export default function ConfigureCounter({ onSet }) {
  log("<ConfigureCounter /> rendered", 1);
  // Keep the raw string so the field can be cleared or hold "-" while typing.
  const [enteredNumber, setEnteredNumber] = useState("0");

  function handleChange(event) {
    setEnteredNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = Math.trunc(Number(enteredNumber));
    if (!Number.isFinite(value)) return;
    onSet(value);
    setEnteredNumber("0");
  }

  return (
    <form id="configure-counter" onSubmit={handleSubmit}>
      <h2>Set Counter</h2>
      <input
        aria-label="Initial counter value"
        type="number"
        step="1"
        onChange={handleChange}
        value={enteredNumber}
      />
      <button type="submit">Set</button>
    </form>
  );
}
