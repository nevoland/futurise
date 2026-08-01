import { expect, test } from "vitest";

import { EventEmitter, TypedEventEmitter } from "../classes.js";

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

test("registers listeners on typed event emitters", () => {
  const typedEventEmitter = new TypedEventEmitter<
    { type: "A"; value: boolean } | { type: "B"; value: number }
  >();

  let RESULT: boolean | number = false;

  on(typedEventEmitter, "A", (event) => {
    RESULT = event.value;
  });
  typedEventEmitter.dispatchEvent({ type: "A", value: true });
  expect(RESULT).toBe(true);

  const register = on(typedEventEmitter, "B");
  register((event) => {
    RESULT = event.value;
  });
  typedEventEmitter.dispatchEvent({ type: "B", value: 4 });
  expect(RESULT).toBe(4);
});
