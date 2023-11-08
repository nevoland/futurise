import type { Listener, ListenerOptions, Register, Unregister } from "../types";

/**
 * Listens for `event` on `target`, calling `listener(event)` at the first occuring `event`. The `listener` is then unregistered upon the first occurence. The provided `options` are identical to those provided to `addEventListener`.
 * Returns a function that removes the `listener` from the `target` for the specified `event`.
 *
 * @param target The target on which to listen for the event.
 * @param event The event name to listen for.
 * @param listener The listener callback.
 * @param options Options to pass to the listener.
 * @returns A function that removes the `listener`.
 */
function once<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
  listener: Listener<HTMLElementEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function once<K extends keyof DocumentEventMap>(
  target: Document,
  eventName: K,
  listener: Listener<DocumentEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function once(
  target: EventTarget,
  eventName: string,
  listener: Listener<Event>,
  options?: ListenerOptions,
): Unregister;
/**
 * Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`. The `listener` is then unregistered upon the first occurence of the `event`.
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
function once<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
): Register<Listener<HTMLElementEventMap[K]>, ListenerOptions>;
function once<K extends keyof DocumentEventMap>(
  target: Document,
  eventName: K,
): Register<Listener<DocumentEventMap[K]>, ListenerOptions>;
function once(
  target: EventTarget,
  eventName: string,
): Register<Listener<Event>, ListenerOptions>;
function once<T extends HTMLElement | Document | EventTarget, K extends string>(
  target: T,
  eventName: K,
  listener?: Listener<any>,
  options?: ListenerOptions,
): Unregister | Register<Listener<any>, any> {
  if (listener === undefined) {
    return (listener, options) => once(target, eventName, listener, options);
  }
  const listenOnce: Listener<any> = (event) => {
    listener(event);
    off();
  };
  const off = () => {
    target.removeEventListener(eventName, listenOnce, options);
  };
  target.addEventListener(eventName, listenOnce, options);
  return off;
}

export { once };
