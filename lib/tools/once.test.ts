import { expect, test } from "vitest";

import { EventEmitter } from "../classes.js";

import { once } from "./once.js";

const EVENT_EMITTER = new EventEmitter<{
  A: boolean;
  B: number;
}>();

test("registers listeners only once", () => {
  let RESULT: boolean | number = false;
  once(EVENT_EMITTER, "A", (event) => {
    RESULT = event;
  });
  EVENT_EMITTER.dispatchEvent("A", true);
  expect(RESULT).toBe(true);

  EVENT_EMITTER.dispatchEvent("A", false);
  expect(RESULT).toBe(true);

  const register = once(EVENT_EMITTER, "B");
  register((event) => {
    RESULT = event;
  });
  EVENT_EMITTER.dispatchEvent("B", 4);
  expect(RESULT).toBe(4);

  EVENT_EMITTER.dispatchEvent("B", 1);
  expect(RESULT).toBe(4);
});

test("unregisters listeners", () => {
  let RESULT = false;
  once(EVENT_EMITTER, "A", (event) => {
    RESULT = event;
  })();
  EVENT_EMITTER.dispatchEvent("A", true);
  expect(RESULT).toBe(false);
});
