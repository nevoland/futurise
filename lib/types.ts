export type Listener = Parameters<EventTarget["addEventListener"]>[1];

export type ListenerOptions = Parameters<EventTarget["addEventListener"]>[2];

export type Unregister = () => void;

export type Register = (
  listener: Listener,
  options?: ListenerOptions,
) => Unregister;
