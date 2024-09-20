import type { Defined } from "./Defined";

export type Listener<E> = Defined<E, (event: E) => void, () => void>;
