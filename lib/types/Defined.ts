/**
 * Returns `Y` if `T` is not `unknown` and `never`, and returns `N` otherwise.
 */
export type Defined<T, Y, N> = [unknown] extends [T]
  ? Y
  : [T] extends [never]
    ? N
    : undefined extends T
      ? 0 extends 1 & T
        ? Y
        : N
      : Y;
