import type { DelayOptions, DelayedFunction, Unregister } from "../types.js";

import { timeout } from "./timeout.js";

/**
 * Delays invocations of the provided `callable` for a given `duration`.
 *
 * @param duration The delay duration in milliseconds.
 * @param callable The callable to delay.
 * @param options Options to set when the first call happens and whether to throttle it.
 * @returns The function that delays calls to the callable.
 */
export function delay<F extends (...args: any[]) => any>(
  duration: number,
  callable: F,
  options: DelayOptions = {},
): DelayedFunction<F> {
  let cancel: Unregister | null = null;
  let callableArgs: Parameters<F> | null = null;
  let result: ReturnType<F> | undefined = undefined;

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

  const delayedCallable = (...args: Parameters<F>) => {
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
      get() {
        return cancel != null;
      },
    },
    result: {
      configurable: false,
      get() {
        return result;
      },
    },
  }) as DelayedFunction<F>;
}
