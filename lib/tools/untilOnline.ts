import { getGlobal } from "../dependencies.js";

import { on } from "./on.js";
import { until } from "./until.js";

/**
 * Returns a promise that waits for the browser to be back online.
 * Resolves to `true` if it it was offline before calling this function, `false` otherwise.
 * If a `signal` is provided, listens to it to cancel the promise.
 *
 * @param signal Optional signal parameter on which the `abort` event will be listened to.
 * @returns `true` if it it was offline before calling this function, `false` otherwise.
 */
export async function untilOnline(signal?: AbortSignal) {
  const { navigator, window } = getGlobal();
  if (window !== undefined && navigator && !navigator.onLine) {
    await until(on(window, "online"), signal);
    return true;
  }
  return false;
}
