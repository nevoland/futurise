import type { EventEmitter } from "../classes/EventEmitter";
import type {
  EventMap,
  Listener,
  ListenerOptions,
  Register,
  Unregister,
} from "../types";

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
function on<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
  listener: Listener<HTMLElementEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function on<K extends keyof DocumentEventMap>(
  target: Document,
  eventName: K,
  listener: Listener<DocumentEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function on<K extends keyof MediaQueryListEventMap>(
  target: MediaQueryList,
  eventName: K,
  listener: Listener<MediaQueryListEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function on<K extends keyof MediaRecorderEventMap>(
  target: MediaRecorder,
  eventName: K,
  listener: Listener<MediaRecorderEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function on<K extends keyof WorkerEventMap>(
  target: Worker,
  eventName: K,
  listener: Listener<WorkerEventMap[K]>,
  options?: ListenerOptions,
): Unregister;
function on<E extends EventMap, K extends keyof E>(
  target: EventEmitter<E>,
  eventName: K,
  listener: Listener<E[K]>,
): Unregister;
function on<E>(
  target: EventTarget,
  eventName: string,
  listener: Listener<E>,
  options?: ListenerOptions,
): Unregister;
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
function on<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: K,
): Register<Listener<HTMLElementEventMap[K]>, ListenerOptions>;
function on<K extends keyof DocumentEventMap>(
  target: Document,
  eventName: K,
): Register<Listener<DocumentEventMap[K]>, ListenerOptions>;
function on<K extends keyof MediaQueryListEventMap>(
  target: MediaQueryList,
  eventName: K,
): Register<Listener<MediaQueryListEventMap[K]>, ListenerOptions>;
function on<K extends keyof MediaRecorderEventMap>(
  target: MediaRecorder,
  eventName: K,
): Register<Listener<MediaRecorderEventMap[K]>, ListenerOptions>;
function on<K extends keyof WorkerEventMap>(
  target: Worker,
  eventName: K,
): Register<Listener<WorkerEventMap[K]>, ListenerOptions>;
function on<E extends EventMap, K extends keyof E>(
  target: EventEmitter<E>,
  eventName: K,
): Register<Listener<E[K]>, undefined>;
function on<E>(
  target: EventTarget,
  eventName: string | number | symbol,
): Register<Listener<E>, ListenerOptions>;
function on(
  target: any,
  eventName: string | number | symbol,
  listener?: Listener<any>,
  options?: any,
): Unregister | Register<Listener<any>, any> {
  if (listener === undefined) {
    return ((listener: any, options: any) =>
      on(target, eventName as any, listener, options)) as Register<
      Listener<any>,
      any
    >;
  }
  target.addEventListener(eventName, listener, options);
  return () => {
    target.removeEventListener(eventName, listener, options);
  };
}

export { on };
