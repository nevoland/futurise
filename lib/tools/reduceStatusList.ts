import type { PromiseStatus } from "../types";

/**
 * Returns a reduced promise status, prioritizing `"rejected"` over `"pending"` over `"idle"` over `"fulfilled"`.
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
  const count: Record<PromiseStatus, number> = {
    fulfilled: 0,
    idle: 0,
    pending: 0,
    rejected: 0,
  };
  for (const status of statusList) {
    count[status]++;
  }
  if (count.rejected > 0) {
    return "rejected";
  }
  if (count.pending > 0) {
    return "pending";
  }
  if (count.idle > 0) {
    return "idle";
  }
  return "fulfilled";
}
