import { expect, test } from "vitest";

import { reduceStatusList } from "./reduceStatusList.js";

test("reduces status list", async () => {
  expect(reduceStatusList("idle", "fulfilled")).toBe("fulfilled");
  expect(reduceStatusList("idle", "pending")).toBe("pending");
  expect(reduceStatusList("idle", "rejected")).toBe("rejected");
  expect(reduceStatusList("idle", "idle")).toBe("idle");
});

test("reduces single list", async () => {
  expect(reduceStatusList("fulfilled")).toBe("fulfilled");
  expect(reduceStatusList("pending")).toBe("pending");
  expect(reduceStatusList("rejected")).toBe("rejected");
  expect(reduceStatusList("idle")).toBe("idle");
});

test("reduces empty list", async () => {
  expect(reduceStatusList()).toBe("idle");
});
