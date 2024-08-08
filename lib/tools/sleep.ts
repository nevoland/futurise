import { timeout } from "./timeout.js";
import { until } from "./until.js";

/**
 * Returns a promise that resolves after at least `duration` milliseconds elapsed.
 * If a `signal` is provided, listens for an `abort` event to reject the promise with the `signal.reason`.
 *
 * @param duration Sleep duration in milliseconds.
 * @param signal Optional signal parameter on which the `abort` event will be listened to.
 * @returns
 */
export function sleep(duration: number, signal?: AbortSignal) {
  return until(timeout(duration), signal);
}
