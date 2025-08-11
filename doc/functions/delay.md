[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / delay

# Function: delay()

> **delay**\<`F`\>(`duration`, `callable`, `options`): [`DelayedFunction`](../type-aliases/DelayedFunction.md)\<`F`\>

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

[`DelayedFunction`](../type-aliases/DelayedFunction.md)\<`F`\>

The function that delays calls to the callable.

## Defined in

[tools/delay.ts:13](https://github.com/nevoland/futurise/blob/1cd28e2a6cbda8f2e58123bfcca390764dde0e9a/lib/tools/delay.ts#L13)
