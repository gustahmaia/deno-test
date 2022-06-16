/** @jsx h */
import { IS_BROWSER, useState } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  const increment = function (count: number) {
    if (count == 10) {
      return
    }
    setCount(count + 1)
  }

  const decrase = function (count: number) {
    if (count == 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => decrase(count)} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={() => increment(count)} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
