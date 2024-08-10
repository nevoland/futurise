import type { CallableDelayed, DelayOptions, Unregister } from "../types.js";

import { timeout } from "./timeout.js";

/**
 * Delays invocations of the provided `callbable` for a given `duration`.
 *
 * @param duration The delay duration in milliseconds.
 * @param callable The callable to delay.
 * @param options Options to set when the first call happens and whether to throttle it.
 * @returns The delayed callable
 */
export function delay<
  T extends (...args: A) => R,
  A extends any[] = Parameters<T>,
  R = ReturnType<T>,
>(
  duration: number,
  callable: T,
  options: DelayOptions = {},
): CallableDelayed<A, R> {
  let cancel: Unregister | null = null;
  let callableArgs: A | null = null;
  let result: R | undefined = undefined;

  const { immediate = false, throttle = false } = options;

  const call = () => {
    cancel = null;
    if (callableArgs == null) {
      return;
    }
    result = callable(...callableArgs);
    callableArgs = null;
    if (throttle) {
      cancel = timeout(duration, call);
    }
  };

  const delayedCallable = (...args: A) => {
    if (immediate && callableArgs == null && cancel == null) {
      result = callable(...args);
    } else {
      callableArgs = args;
    }
    if (throttle) {
      if (cancel == null) {
        cancel = timeout(duration, call);
      }
      return;
    }
    cancel?.();
    cancel = timeout(duration, call);
  };

  return Object.defineProperties(delayedCallable, {
    cancel: {
      configurable: false,
      value: () => {
        if (cancel != null) {
          cancel();
          cancel = null;
        }
        callableArgs = null;
      },
    },
    flush: {
      configurable: false,
      value: () => {
        if (cancel != null) {
          cancel();
          call();
        }
        return result;
      },
    },
    pending: {
      configurable: false,
      get: () => cancel != null,
    },
    result: {
      configurable: false,
      get: () => result,
    },
  }) as CallableDelayed<A, R>;
}
