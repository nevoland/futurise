import { useEffect, useState } from "preact/hooks";

/* global HTMLButtonElement MouseEvent window */

import { on, until } from "../lib/main.js";

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

  return (
    <>
      <h1 class="text-teal-500">Futurise</h1>
      <button ref={setRef}>Click this</button>
    </>
  );
}
