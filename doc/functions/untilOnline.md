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

[tools/untilOnline.ts:14](https://github.com/nevoland/futurise/blob/8a513686f5c22d687856d3646a9ab51e2997391d/lib/tools/untilOnline.ts#L14)
