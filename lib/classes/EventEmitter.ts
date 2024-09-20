import type { EventMap, Listener } from "../types";

/**
 * Emits events to a managed pool of listeners. Works conveniently with the `on` and `once` tools.
 */
export class EventEmitter<E extends EventMap> {
  /**
   * Listeners by event type.
   */
  listeners: {
    [K in keyof E]?: Listener<E[K]>[];
  } = {};

  /**
   * Adds a listener for a particular event.
   *
   * @param type The event type to listen to.
   * @param listener The listener to call with the event.
   */
  addEventListener<K extends keyof E>(type: K, listener: Listener<E[K]>) {
    const listeners = this.listeners[type] ?? [];
    if (listeners.length === 0) {
      this.listeners[type] = listeners;
    }
    listeners.push(listener);
  }

  /**
   * Removes a listener from a particular event.
   *
   * @param type The event type to stop listening.
   * @param listener The listener to remove.
   */
  removeEventListener<K extends keyof E>(type: K, listener: Listener<E[K]>) {
    const listeners = this.listeners[type];
    if (listeners === undefined || listeners.length === 0) {
      return;
    }
    const index = listeners.indexOf(listener);
    if (index === -1) {
      return;
    }
    listeners.splice(index, 1);
  }

  /**
   * Dispatches the provided event of a given `type` to the registered listeners, if any.
   *
   * @param type The event type to dispatch.
   * @param event The event to dispatch.
   */
  dispatchEvent<K extends keyof E>(type: K, event: E[K]) {
    const listeners = this.listeners[type];
    if (listeners === undefined || listeners.length === 0) {
      return;
    }
    const { length } = listeners;
    for (let i = 0; i < length; i++) {
      listeners[i](event);
    }
  }
}
