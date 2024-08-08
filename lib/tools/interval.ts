import { MAX_TIMEOUT } from "../constants/MAX_TIMEOUT.js";
import { getGlobal } from "../dependencies.js";
import type { ListenerTimer, Register, Unregister } from "../types";

const {
  setInterval,
  clearInterval,
  requestAnimationFrame,
  cancelAnimationFrame,
} = getGlobal();

/**
 * Calls `callback` at least every `duration` milliseconds. Returns a function that stops future calls of `callback`.
 * If the `duration` is `0`, it uses `requestAnimationFrame` if available.
 *
 * @param duration Minimum duration of each interval in milliseconds.
 * @param callback Called at the end of each interval.
 * @returns Function that cancels the interval.
 */
export function interval(duration: number, callback: ListenerTimer): Unregister;
/**
 * Returns a function that registers a `callback` to be called at least every `duration` milliseconds.
 * If the `duration` is `0`, if uses `requestAnimationFrame` if available.
 * The interval is set during this call.
 *
 * @param duration Minimum duration of each interval in milliseconds.
 * @returns Function that registers a callback to call at each elapsed interval, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the interval. When registering a callback on a cleared interval, throws an `Error` exception.
 */
export function interval(duration: number): Register<ListenerTimer, undefined>;
export function interval(
  duration: number,
  callback?: ListenerTimer,
): Unregister | Register<ListenerTimer, undefined> {
  if (callback === undefined) {
    const callbackList: ListenerTimer[] = [];
    const clear = interval(duration, () => {
      for (let i = 0; i < callbackList.length; i++) {
        callbackList[i]();
      }
    });
    let cleared = false;
    return (callback) => {
      if (cleared) {
        throw new Error("Cannot register a callback to a cleared interval.");
      }
      callbackList.push(callback);
      return () => {
        callbackList.splice(callbackList.indexOf(callback), 1);
        if (callbackList.length === 0) {
          cleared = true;
          clear();
        }
      };
    };
  }
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
  let timer: ReturnType<typeof setInterval> | undefined = setInterval(
    callback,
    duration > MAX_TIMEOUT ? MAX_TIMEOUT : duration,
  );
  return () => {
    if (timer === undefined) {
      return;
    }
    clearInterval(timer);
    timer = undefined;
  };
}
