export type Listener<E> = E extends undefined ? () => void : (event: E) => void;

export type ListenerOptions = Parameters<EventTarget["addEventListener"]>[2];

export type ListenerTimer = Listener<undefined>;

export type Unregister = () => void;

export type Register<L, O> = O extends undefined
  ? (listener: L) => Unregister
  : (listener: L, options?: O) => Unregister;

/**
 * Status of a promise.
 */
export type PromiseStatus = "idle" | "pending" | "fulfilled" | "rejected";
