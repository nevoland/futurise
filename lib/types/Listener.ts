export type Listener<E> = undefined extends E ? () => void : (event: E) => void;
