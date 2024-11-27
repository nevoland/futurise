[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / onDark

# Function: onDark()

> **onDark**(`callback`): [`Unregister`](../type-aliases/Unregister.md) \| `undefined`

Calls `callback` with a boolean value indicating whether the user has requested the dark theme.
If calls it immediately with the current state of the dark theme, and everytime it changes, until the returned function is called.

## Parameters

• **callback**

The `callback` called with the boolean value indicating whether the user has requested the dark theme.

## Returns

[`Unregister`](../type-aliases/Unregister.md) \| `undefined`

A function that stops listening for theme changes.

## Defined in

[tools/onDark.ts:13](https://github.com/nevoland/futurise/blob/e367c94d1d167836196f4968f6ce3576b3470f4d/lib/tools/onDark.ts#L13)
