import type { Listener, ListenerOptions, Register, Unregister } from "../types";

/**
 * Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`.
 *
 * @example
 * ```typescript
 * const register = on(element, "click");
 * // Start listening
 * const off = register(callback);
 * // Stop listening
 * off();
 * ```
 *
 * @param target The target on which to listen for the event.
 * @param event The event name to listen for.
 * @returns Function that registers a `listener` with optional `options`.
 */
function on(target: EventTarget, event: string): Register;
/**
 * Listens for `event` on `target`, calling `listener(event)` at each incoming `event`. The provided `options` are identical to those provided to `addEventListener`.
 * Returns a function that removes the `listener` from the `target` for the specified `event`.
 *
 * @param target The target on which to listen for the event.
 * @param event The event name to listen for.
 * @param listener The listener callback.
 * @param options Options to pass to the listener.
 * @returns A function that removes the `listener`.
 */
function on(
  target: EventTarget,
  event: string,
  listener: Listener,
  options: ListenerOptions,
): Unregister;
function on(
  target: EventTarget,
  event: string,
  listener?: Listener,
  options?: ListenerOptions,
): Unregister | Register {
  if (listener === undefined) {
    return (listener, options) => on(target, event, listener, options);
  }
  target.addEventListener(event, listener, options);
  return () => {
    target.removeEventListener(event, listener, options);
  };
}

export { on };
