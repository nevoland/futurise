[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / timeout

# Function: timeout()

## timeout(duration, callback)

> **timeout**(`duration`, `callback`): [`Unregister`](../type-aliases/Unregister.md)

Calls `callback` after at least `duration` milliseconds. Returns a function that cancels the future call of `callback`, if not already called.
If the `duration` is `0`, it uses `requestAnimationFrame` if available.

### Parameters

• **duration**: `number`

Timeout duration in milliseconds.

• **callback**

Called after the `duration` elapsed.

### Returns

[`Unregister`](../type-aliases/Unregister.md)

Function that cancels the call of `callback`.

### Defined in

[tools/timeout.ts:21](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/timeout.ts#L21)

## timeout(duration)

> **timeout**(`duration`): [`Register`](../type-aliases/Register.md)\<[`ListenerTimer`](../type-aliases/ListenerTimer.md), `undefined`\>

Returns a function that registers a `callback` to be called after at least `duration` milliseconds elapsed.
If the `duration` is `0`, if uses `requestAnimationFrame` if available.
The timer is set during this call.

### Parameters

• **duration**: `number`

Timeout duration in milliseconds.

### Returns

[`Register`](../type-aliases/Register.md)\<[`ListenerTimer`](../type-aliases/ListenerTimer.md), `undefined`\>

Function that registers a callback to call after the `duration` elapsed, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the timeout.

### Defined in

[tools/timeout.ts:30](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/timeout.ts#L30)
