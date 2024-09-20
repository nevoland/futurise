import type { Defined, Unregister } from "../types";

export type Register<L, O> = Defined<
  O,
  (listener: L, options?: O) => Unregister,
  (listener: L) => Unregister
>;
