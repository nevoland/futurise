[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / reduceStatusList

# Function: reduceStatusList()

> **reduceStatusList**(...`statusList`): [`PromiseStatus`](../type-aliases/PromiseStatus.md)

Returns a reduced promise status, prioritizing `"rejected"` over `"pending"` over `"fulfilled"` over `"idle"`.

## Parameters

• ...**statusList**: [`PromiseStatus`](../type-aliases/PromiseStatus.md)[]

List of promise statuses.

## Returns

[`PromiseStatus`](../type-aliases/PromiseStatus.md)

The reduced promise status.

## Defined in

[tools/reduceStatusList.ts:9](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/reduceStatusList.ts#L9)
