import type { Listener, Register } from "../types";

/**
 * Listens for an event with the provided `register` function until it happens or until `sentinel(event)` returns a truthy value.
 * If a `signal` is provided, listens to it to cancel the promise.
 *
 * @param register Function that registers a listener for the event to catch.
 * @param signal Optional signal parameter on which the `abort` event will be listened to.
 * @param sentinel Optional sentinel function that validates an `event` occurence.
 * @returns A promise that resolves to the `event`.
 */
export function until<E extends object = Event>(
  register: Register<Listener<E>, any>,
  signal?: AbortSignal,
  sentinel?: (event: E) => boolean,
): Promise<E> {
  return new Promise((resolve, reject) => {
    const unregister = register((event) => {
      if (sentinel !== undefined && !sentinel(event)) {
        return;
      }
      unregister();
      resolve(event);
    });
    if (signal !== undefined) {
      signal.addEventListener("abort", () => {
        unregister();
        reject(signal.reason);
      });
    }
  });
}
