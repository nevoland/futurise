export type DelayOptions = {
  /**
   * Whether the callable should be invoked immediately at the begining of the duration timeout.
   */
  immediate?: boolean;
  /**
   * Whether callable invocations should be throttled at the duration interval.
   */
  throttle?: boolean;
};
