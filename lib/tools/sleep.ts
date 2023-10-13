import { getGlobal } from "../dependencies";

const { setTimeout, clearTimeout } = getGlobal();

/**
 * Returns a promise that resolves after at least `duration` milliseconds elapsed.
 * If a `signal` is provided, listens for an `abort` event to reject the promise with the `signal.reason`.
 *
 * @param duration Sleep duration in milliseconds.
 * @param signal Optional signal parameter on which the `abort` event will be listened to.
 * @returns
 */
export function sleep(duration: number, signal?: AbortSignal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, duration);
    if (signal !== undefined) {
      if (signal.aborted) {
        reject(signal.reason);
      }
      signal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(signal.reason);
      });
    }
  });
}
