import { expect, test } from "vitest";

import { TypedEventEmitter } from "./TypedEventEmitter.js";

type EventType = { type: "A"; value: boolean } | { type: "B"; value: number };

test("registers listeners", () => {
  const emitter = new TypedEventEmitter<EventType>();

  let RESULT: boolean | number = false;

  emitter.addEventListener("A", (event) => {
    RESULT = event.value;
  });
  emitter.dispatchEvent({ type: "A", value: true });
  expect(RESULT).toBe(true);

  emitter.addEventListener("B", (event) => {
    RESULT = event.value;
  });
  emitter.dispatchEvent({ type: "B", value: 4 });
  expect(RESULT).toBe(4);
});

test("unregisters listeners", () => {
  const emitter = new TypedEventEmitter<EventType>();

  let RESULT = false;
  const listener = (event: Extract<EventType, { type: "A" }>) => {
    RESULT = event.value;
  };

  emitter.addEventListener("A", listener);
  emitter.removeEventListener("A", listener);
  emitter.dispatchEvent({ type: "A", value: true });

  expect(RESULT).toBe(false);
});

test("checks listeners by event type", () => {
  const emitter = new TypedEventEmitter<EventType>();

  const listener = (_event: Extract<EventType, { type: "A" }>) => {};

  expect(emitter.hasListeners("A")).toBe(false);
  emitter.addEventListener("A", listener);
  expect(emitter.hasListeners("A")).toBe(true);
  emitter.removeEventListener("A", listener);
  expect(emitter.hasListeners("A")).toBe(false);
});
