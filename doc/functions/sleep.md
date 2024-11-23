[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / sleep

# Function: sleep()

> **sleep**(`duration`, `signal`?): `Promise`\<`undefined`\>

Returns a promise that resolves after at least `duration` milliseconds elapsed.
If a `signal` is provided, listens for an `abort` event to reject the promise with the `signal.reason`.

## Parameters

• **duration**: `number`

Sleep duration in milliseconds.

• **signal?**: `AbortSignal`

Optional signal parameter on which the `abort` event will be listened to.

## Returns

`Promise`\<`undefined`\>

## Defined in

[tools/sleep.ts:12](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/sleep.ts#L12)
