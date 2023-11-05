import { MAX_TIMEOUT } from "../constants/MAX_TIMEOUT.js";
import { getGlobal } from "../dependencies.js";
import type { Unregister } from "../types";

const {
  setInterval,
  clearInterval,
  requestAnimationFrame,
  cancelAnimationFrame,
} = getGlobal();

/**
 * Calls `callback` at least every `duration` milliseconds. Returns a function that stops future calls of `callback`. If `duration` is falsy, uses `requestAnimationFrame` if available.
 *
 * @param duration Duration of each interval in milliseconds.
 * @param callback Called at the end of each interval.
 * @returns Function that cancels the interval.
 */
export function interval(duration: number, callback: () => void): Unregister {
  if (!duration && requestAnimationFrame && cancelAnimationFrame) {
    let timer: ReturnType<typeof requestAnimationFrame> | undefined;
    const update = () => {
      if (timer === undefined) {
        return;
      }
      callback();
      timer = requestAnimationFrame(update);
    };
    timer = requestAnimationFrame(update);
    return () => {
      if (timer === undefined) {
        return;
      }
      cancelAnimationFrame(timer);
      timer = undefined;
    };
  }
  const timer = setInterval(
    callback,
    duration > MAX_TIMEOUT ? MAX_TIMEOUT : duration,
  );
  return () => {
    clearInterval(timer);
  };
}
