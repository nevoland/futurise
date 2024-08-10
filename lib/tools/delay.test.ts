import { expect, test } from "vitest";

import { delay } from "./delay.js";
import { sleep } from "./sleep.js";

const DURATION = 1000;

test("delays invocations", async () => {
  let counter = 0;
  let flag = "";

  const delayedCallable = delay(DURATION, (nextFlag: string) => {
    counter = counter + 1;
    flag = nextFlag;
    return flag;
  });

  let iteration = 0;
  while (++iteration < 6) {
    delayedCallable(`iteration ${iteration}`);
    await sleep(DURATION / 4);
  }

  expect(counter).toBe(0);
  expect(flag).toBe("");

  await sleep(DURATION);

  expect(counter).toBe(1);
  expect(flag).toBe("iteration 5");
});

test("supports immediate invocations", async () => {
  let counter = 0;
  let flag = "";

  const delayedCallable = delay(
    DURATION,
    (nextFlag: string) => {
      counter = counter + 1;
      flag = nextFlag;
      return flag;
    },
    { immediate: true },
  );

  delayedCallable("a");
  delayedCallable("b");

  expect(counter).toBe(1);
  expect(flag).toBe("a");

  await sleep(DURATION);

  expect(counter).toBe(2);
  expect(flag).toBe("b");
});

test("throttles invocations", async () => {
  let counter = 0;
  let flag = "";

  const delayedCallable = delay(
    DURATION,
    (nextFlag: string) => {
      counter = counter + 1;
      flag = nextFlag;
      return flag;
    },
    { throttle: true },
  );

  let iteration = 0;
  while (++iteration < 6) {
    delayedCallable(`iteration ${iteration}`);
    await sleep(DURATION / 4);
  }
  expect(counter).toBe(1);
  expect(flag).toBe("iteration 4");

  await sleep(DURATION);

  expect(counter).toBe(2);
  expect(flag).toBe("iteration 5");
});
