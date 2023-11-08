export type Listener<E extends object> = (event: E) => void;

export type ListenerOptions = Parameters<EventTarget["addEventListener"]>[2];

export type Unregister = () => void;

export type Register<L, O> = (listener: L, options?: O) => Unregister;

/**
 * Status of a promise.
 */
export type PromiseStatus = "idle" | "pending" | "fulfilled" | "rejected";
