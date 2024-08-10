import { useEffect, useState } from "preact/hooks";

/* global HTMLButtonElement MouseEvent window */

import { delay, on, until } from "../lib/main.js";

function print(...args: any[]) {
  // eslint-disable-next-line no-console
  console.log(...args);
}

const logThrottled = delay(2000, (message: string) => print(message), {
  immediate: true,
  throttle: true,
});

export function App() {
  const [ref, setRef] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (ref == null) {
      return;
    }
    (async () => {
      await until(on(ref, "click"));
      window.alert("Clicked the button for the first time!");
    })();
  }, [ref]);

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-teal-500">Futurise</h1>
      <button class="text-gray-400 dark:text-white" ref={setRef}>
        Click this
      </button>
      <button
        class="text-gray-400 dark:text-white"
        onClick={() => {
          setCount((count) => count + 1);
          logThrottled(`Count ${count + 1}`);
        }}
      >
        Log count {count}
      </button>
      <button
        class="text-gray-400 dark:text-white"
        onClick={() => {
          logThrottled.cancel();
        }}
      >
        Cancel
      </button>
      <button
        class="text-gray-400 dark:text-white"
        onClick={() => {
          logThrottled.flush();
        }}
      >
        Flush
      </button>
    </>
  );
}
