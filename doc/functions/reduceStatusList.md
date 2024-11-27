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

[tools/reduceStatusList.ts:9](https://github.com/nevoland/futurise/blob/e367c94d1d167836196f4968f6ce3576b3470f4d/lib/tools/reduceStatusList.ts#L9)
