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
export function until<E = Event>(
  register: Register<Listener<E>, any>,
  signal?: AbortSignal,
  sentinel?: (event: E) => boolean,
): Promise<E>;
export function until<E = undefined>(
  register: Register<Listener<E>, undefined>,
  signal?: AbortSignal,
  sentinel?: () => boolean,
): Promise<undefined>;
export function until<E>(
  register: Register<Listener<E | undefined>, any | undefined>,
  signal?: AbortSignal,
  sentinel?: ((event: E) => boolean) | (() => boolean),
): Promise<E> {
  return new Promise((resolve, reject) => {
    const unregister = register((event?: E) => {
      if (sentinel !== undefined && !sentinel(event!)) {
        return;
      }
      unregister();
      resolve(event!);
    });
    if (signal !== undefined) {
      signal.addEventListener("abort", () => {
        unregister();
        reject(signal.reason);
      });
    }
  });
}
