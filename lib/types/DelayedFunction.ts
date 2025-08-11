export type DelayedFunction<F extends (...args: any[]) => any> = F & {
  /**
   * Cancels the last delayed invocation, if any, of the callable.
   */
  cancel: () => void;
  /**
   * Immediately runs the last delayed callable invocation, if any, of the callable and returns its result.
   * @returns The result returned by the callable.
   */
  flush: () => ReturnType<F>;
  /**
   * Whether there is a pending invocation of the callable or not.
   */
  pending: boolean;
  /**
   * The result of the last run invocation.
   */
  result: ReturnType<F>;
};
