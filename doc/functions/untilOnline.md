[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / untilOnline

# Function: untilOnline()

> **untilOnline**(`signal`?): `Promise`\<`boolean`\>

Returns a promise that waits for the browser to be back online.
Resolves to `true` if it it was offline before calling this function, `false` otherwise.
If a `signal` is provided, listens to it to cancel the promise.

## Parameters

• **signal?**: `AbortSignal`

Optional signal parameter on which the `abort` event will be listened to.

## Returns

`Promise`\<`boolean`\>

`true` if it it was offline before calling this function, `false` otherwise.

## Defined in

[tools/untilOnline.ts:14](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/untilOnline.ts#L14)
