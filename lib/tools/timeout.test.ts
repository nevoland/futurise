import { expect, test } from "vitest";

import { sleep } from "./sleep.js";
import { timeout } from "./timeout.js";

test("sets a timer with a callback", async () => {
  const DURATION = 100;
  let result = 0;
  timeout(DURATION, () => (result |= 0b01));

  await sleep(DURATION);

  expect(result).toBe(0b01);
});

test("sets a timer with a callback and clears it before completion", async () => {
  const DURATION = 100;
  let result = 0;
  const clear = timeout(DURATION, () => (result |= 0b01));

  await sleep(DURATION / 2);

  clear();

  expect(result).toBe(0);
});

test("sets a timer and registers callbacks", async () => {
  const DURATION = 100;
  let result = 0;
  const register = timeout(DURATION);
  register(() => (result |= 0b01));
  register(() => (result |= 0b10));

  await sleep(DURATION);

  expect(result).toBe(0b11);
});

test("sets a timer and registers callbacks that can be unregistered", async () => {
  const DURATION = 100;
  let result = 0;
  const register = timeout(DURATION);
  register(() => (result |= 0b01));
  const unregister = register(() => (result |= 0b10));
  unregister();

  await sleep(DURATION);

  expect(result).toBe(0b01);
});
