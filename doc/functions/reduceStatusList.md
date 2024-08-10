[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / reduceStatusList

# Function: reduceStatusList()

> **reduceStatusList**(...`statusList`): [`PromiseStatus`](../type-aliases/PromiseStatus.md)

Returns a reduced promise status, prioritizing `"rejected"` over `"pending"` over `"idle"` over `"fulfilled"`.

## Parameters

• ...**statusList**: [`PromiseStatus`](../type-aliases/PromiseStatus.md)[]

List of promise statuses.

## Returns

[`PromiseStatus`](../type-aliases/PromiseStatus.md)

The reduced promise status.

## Defined in

[tools/reduceStatusList.ts:9](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/reduceStatusList.ts#L9)
