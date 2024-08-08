export type Listener<E> = E extends undefined ? () => void : (event: E) => void;
