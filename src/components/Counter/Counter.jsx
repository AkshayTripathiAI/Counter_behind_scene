import { useState, memo, useCallback, useMemo } from "react";
import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";
import CounterHistory from "./CounterHistory.jsx";

// Each Counter instance has its own isolated state.

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Monotonic ids are guaranteed unique, unlike Math.random() based keys.
let nextChangeId = 0;
function createChange(value) {
  return { value, id: nextChangeId++ };
}

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // Only re-run the (logged) prime check when the initial value changes.
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  const [counterChanges, setCounterChanges] = useState(() => [
    createChange(initialCount),
  ]);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges((prevCounterChanges) => [
      createChange(-1),
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounterChanges) => [
      createChange(1),
      ...prevCounterChanges,
    ]);
  }, []);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});
export default Counter;
