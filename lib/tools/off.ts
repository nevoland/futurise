/**
 * Returns a function that calls the provided remover functions.
 *
 * @param removers List of removers.
 * @returns Function that calls the provided removers.
 */
export function off(...removers: readonly (() => void)[]) {
  return () => {
    for (const remover of removers) {
      remover();
    }
  };
}
