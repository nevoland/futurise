import { getGlobal } from "../dependencies.js";
import type { Unregister } from "../types.js";

import { on } from "./on.js";

/**
 * Calls `callback` with a boolean value indicating whether the user has requested the dark theme.
 * If calls it immediately with the current state of the dark theme, and everytime it changes, until the returned function is called.
 *
 * @param callback The `callback` called with the boolean value indicating whether the user has requested the dark theme.
 * @returns A function that stops listening for theme changes.
 */
export function onDark(
  callback: (dark: boolean) => void,
): Unregister | undefined {
  const mediaQuery = getGlobal().matchMedia?.("(prefers-color-scheme: dark)");
  if (mediaQuery === undefined) {
    return undefined;
  }
  callback(mediaQuery.matches);
  return on(mediaQuery, "change", (event) => callback(event.matches));
}
