import type { PromiseStatus } from "../types";

/**
 * Returns a reduced promise status, prioritizing `"rejected"` over `"pending"` over `"fulfilled"` over `"idle"`.
 *
 * @param statusList List of promise statuses.
 * @returns The reduced promise status.
 */
export function reduceStatusList(
  ...statusList: PromiseStatus[]
): PromiseStatus {
  if (statusList.length === 0) {
    return "idle";
  }
  const templateStatus = statusList[0];
  if (statusList.every((status) => status === templateStatus)) {
    return templateStatus;
  }
  const count: Record<Exclude<PromiseStatus, "rejected">, number> = {
    fulfilled: 0,
    idle: 0,
    pending: 0,
  };
  for (const status of statusList) {
    if (status === "rejected") {
      return "rejected";
    }
    count[status]++;
  }
  if (count.pending > 0) {
    return "pending";
  }
  if (count.fulfilled > 0) {
    return "fulfilled";
  }
  return "idle";
}
