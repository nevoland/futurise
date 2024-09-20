import { expect, test } from "vitest";

import { EventEmitter } from "../classes.js";

import { on } from "./on.js";

const EVENT_EMITTER = new EventEmitter<{
  A: boolean;
  B: number;
}>();

test("registers listeners", () => {
  let RESULT: boolean | number = false;
  on(EVENT_EMITTER, "A", (event) => {
    RESULT = event;
  });
  EVENT_EMITTER.dispatchEvent("A", true);
  expect(RESULT).toBe(true);

  const register = on(EVENT_EMITTER, "B");
  register((event) => {
    RESULT = event;
  });
  EVENT_EMITTER.dispatchEvent("B", 4);
  expect(RESULT).toBe(4);
});

test("unregisters listeners", () => {
  let RESULT = false;
  const listener = (event: boolean) => {
    RESULT = event;
  };
  on(EVENT_EMITTER, "A", listener)();
  EVENT_EMITTER.dispatchEvent("A", true);
  expect(RESULT).toBe(false);
});
