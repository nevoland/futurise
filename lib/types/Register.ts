import type { Unregister } from "../types";

export type Register<L, O> = undefined extends O
  ? (listener: L) => Unregister
  : (listener: L, options?: O) => Unregister;
