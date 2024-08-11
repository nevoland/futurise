[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / delay

# Function: delay()

> **delay**\<`F`\>(`duration`, `callable`, `options`): [`DelayedFunction`](../interfaces/DelayedFunction.md)\<`F`\>

Delays invocations of the provided `callable` for a given `duration`.

## Type Parameters

• **F** *extends* (...`args`) => `any`

## Parameters

• **duration**: `number`

The delay duration in milliseconds.

• **callable**: `F`

The callable to delay.

• **options**: [`DelayOptions`](../type-aliases/DelayOptions.md) = `{}`

Options to set when the first call happens and whether to throttle it.

## Returns

[`DelayedFunction`](../interfaces/DelayedFunction.md)\<`F`\>

The function that delays calls to the callable.

## Defined in

[tools/delay.ts:13](https://github.com/nevoland/futurise/blob/8a513686f5c22d687856d3646a9ab51e2997391d/lib/tools/delay.ts#L13)