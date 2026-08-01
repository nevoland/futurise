import type { TypedEvent } from "../types/TypedEvent";

type TypedListener<E> = (event: E) => void;

/**
 * Emits discriminated events where each event carries its own `type` property.
 * Works conveniently with the `on` and `once` tools.
 */
export class TypedEventEmitter<E extends TypedEvent> {
  /**
   * Listeners by event type.
   */
  #listeners: {
    [K in E["type"]]?: TypedListener<Extract<E, { type: K }>>[];
  };

  constructor() {
    this.#listeners = {};
  }

  /**
   * Returns whether there are any listeners for a particular event type.
   *
   * @param type The event type to check for listeners.
   * @returns Whether there are any listeners for the event type.
   */
  hasListeners<K extends E["type"]>(type: K): boolean {
    return (this.#listeners[type]?.length ?? 0) > 0;
  }

  /**
   * Adds a listener for a particular event type.
   *
   * @param type The event type to listen to.
   * @param listener The listener to call with the event.
   */
  addEventListener<K extends E["type"]>(
    type: K,
    listener: TypedListener<Extract<E, { type: K }>>,
  ) {
    const listeners = this.#listeners[type] ?? [];
    if (listeners.length === 0) {
      this.#listeners[type] = listeners;
    }
    listeners.push(listener);
  }

  /**
   * Removes a listener from a particular event type.
   *
   * @param type The event type to stop listening.
   * @param listener The listener to remove.
   */
  removeEventListener<K extends E["type"]>(
    type: K,
    listener: TypedListener<Extract<E, { type: K }>>,
  ) {
    const listeners = this.#listeners[type];
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
   * Dispatches the provided event to the registered listeners, if any.
   *
   * @param event The event to dispatch.
   */
  dispatchEvent<K extends E["type"]>(event: Extract<E, { type: K }>) {
    const listeners = this.#listeners[event.type];
    if (listeners === undefined || listeners.length === 0) {
      return;
    }
    const { length } = listeners;
    for (let i = 0; i < length; i++) {
      listeners[i](event);
    }
  }
}
