import { getGlobal } from "../dependencies.js";
import type { Unregister } from "../types";

const {
  setTimeout,
  clearTimeout,
  requestAnimationFrame,
  cancelAnimationFrame,
} = getGlobal();

const MAX_TIMEOUT = 2147483647;

/**
 * Calls `callback` after at least `duration` milliseconds. Returns a function that cancels the future call of `callback`, if not already called.
 *
 * @param duration Timeout duration in milliseconds.
 * @param callback Called after the duration elapsed.
 * @returns Function that cancels the call of `callback`.
 */
export function timeout(duration: number, callback: () => void): Unregister {
  if (!duration && requestAnimationFrame && cancelAnimationFrame) {
    const timer = requestAnimationFrame(callback);
    return () => {
      cancelAnimationFrame(timer);
    };
  }
  let timer: ReturnType<typeof setTimeout> | undefined = setTimeout(
    () => {
      timer = undefined;
      callback();
    },
    duration > MAX_TIMEOUT ? MAX_TIMEOUT : duration,
  );
  return () => {
    if (timer === undefined) {
      return;
    }
    clearTimeout(timer);
    timer = undefined;
  };
}
