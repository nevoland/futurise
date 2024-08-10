[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / interval

# Function: interval()

## interval(duration, callback)

> **interval**(`duration`, `callback`): [`Unregister`](../type-aliases/Unregister.md)

Calls `callback` at least every `duration` milliseconds. Returns a function that stops future calls of `callback`.
If the `duration` is `0`, it uses `requestAnimationFrame` if available.

### Parameters

• **duration**: `number`

Minimum duration of each interval in milliseconds.

• **callback**

Called at the end of each interval.

### Returns

[`Unregister`](../type-aliases/Unregister.md)

Function that cancels the interval.

### Defined in

[tools/interval.ts:20](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/interval.ts#L20)

## interval(duration)

> **interval**(`duration`): [`Register`](../type-aliases/Register.md)\<[`ListenerTimer`](../type-aliases/ListenerTimer.md), `undefined`\>

Returns a function that registers a `callback` to be called at least every `duration` milliseconds.
If the `duration` is `0`, if uses `requestAnimationFrame` if available.
The interval is set during this call.

### Parameters

• **duration**: `number`

Minimum duration of each interval in milliseconds.

### Returns

[`Register`](../type-aliases/Register.md)\<[`ListenerTimer`](../type-aliases/ListenerTimer.md), `undefined`\>

Function that registers a callback to call at each elapsed interval, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the interval. When registering a callback on a cleared interval, throws an `Error` exception.

### Defined in

[tools/interval.ts:29](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/interval.ts#L29)
