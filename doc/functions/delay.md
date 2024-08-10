[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / delay

# Function: delay()

> **delay**\<`T`, `A`, `R`\>(`duration`, `callable`, `options`): [`CallableDelayed`](../interfaces/CallableDelayed.md)\<`A`, `R`\>

Delays invocations of the provided `callbable` for a given `duration`.

## Type Parameters

• **T** *extends* (...`args`) => `R`

• **A** *extends* `any`[] = `Parameters`\<`T`\>

• **R** = `ReturnType`\<`T`\>

## Parameters

• **duration**: `number`

The delay duration in milliseconds.

• **callable**: `T`

The callable to delay.

• **options**: [`DelayOptions`](../type-aliases/DelayOptions.md) = `{}`

Options to set when the first call happens and whether to throttle it.

## Returns

[`CallableDelayed`](../interfaces/CallableDelayed.md)\<`A`, `R`\>

The delayed callable

## Defined in

[tools/delay.ts:13](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/delay.ts#L13)
