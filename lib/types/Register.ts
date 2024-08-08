import type { Unregister } from "../types";

export type Register<L, O> = O extends undefined
  ? (listener: L) => Unregister
  : (listener: L, options?: O) => Unregister;
