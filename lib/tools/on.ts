import type { Listener, ListenerOptions, Register, Unregister } from "../types";

/**
 * Listens for `event` on `target`, calling `listener(event)` at each incoming `event`. The provided `options` are identical to those provided to `addEventListener`.
 * Returns a function that removes the `listener` from the `target` for the specified `event`.
 * If `listener` is not defined, returns a function that accepts the remaining `(listener, options)` arguments.
 *
 * @param target The target on which to listen for the event.
 * @param event The event name to listen for.
 * @param listener The listener callback.
 * @param options Options to pass to the listener.
 * @returns A function that removes the `listener` or a function that registers a `listener`.
 */
function on(target: EventTarget, event: string): Register;
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
