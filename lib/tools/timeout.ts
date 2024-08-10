import { getGlobal } from "../dependencies.js";
import type { ListenerTimer, Register, Unregister } from "../types";

const {
  setTimeout,
  clearTimeout,
  requestAnimationFrame,
  cancelAnimationFrame,
} = getGlobal();

const MAX_TIMEOUT = 2147483647;

/**
 * Calls `callback` after at least `duration` milliseconds. Returns a function that cancels the future call of `callback`, if not already called.
 * If the `duration` is `0`, it uses `requestAnimationFrame` if available.
 *
 * @param duration Timeout duration in milliseconds.
 * @param callback Called after the `duration` elapsed.
 * @returns Function that cancels the call of `callback`.
 */
export function timeout(duration: number, callback: ListenerTimer): Unregister;
/**
 * Returns a function that registers a `callback` to be called after at least `duration` milliseconds elapsed.
 * If the `duration` is `0`, if uses `requestAnimationFrame` if available.
 * The timer is set during this call.
 *
 * @param duration Timeout duration in milliseconds.
 * @returns Function that registers a callback to call after the `duration` elapsed, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the timeout.
 */
export function timeout(duration: number): Register<ListenerTimer, undefined>;
export function timeout(
  duration: number,
  callback?: ListenerTimer,
): Unregister | Register<ListenerTimer, undefined> {
  if (callback === undefined) {
    const callbackList: ListenerTimer[] = [];
    const clear = timeout(duration, () => {
      for (let i = 0; i < callbackList.length; i++) {
        callbackList[i]();
      }
    });
    return (callback) => {
      callbackList.push(callback);
      return () => {
        callbackList.splice(callbackList.indexOf(callback), 1);
        if (callbackList.length === 0) {
          clear();
        }
      };
    };
  }
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
