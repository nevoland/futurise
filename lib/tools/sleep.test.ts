import { expect, test } from "vitest";

import { getGlobal } from "../dependencies.js";

import { sleep } from "./sleep.js";

const { setTimeout, AbortSignal } = getGlobal();

test("sleep for given duration", async () => {
  const DURATION = 100;
  const now = Date.now();
  expect(await sleep(DURATION)).toBeUndefined();
  expect(Date.now() - now >= DURATION).toBeTruthy();
});

test("handles abortions", async () => {
  const controller = new AbortController();
  await expect(async () => {
    setTimeout(() => controller.abort(), 100);
    await sleep(1000, controller.signal);
  }).rejects.toThrowError();
});

test("handles already aborted abortions", async () => {
  await expect(async () => {
    await sleep(1000, AbortSignal.abort());
  }).rejects.toThrowError();
});
