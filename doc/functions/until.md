[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / until

# Function: until()

## until(register, signal, sentinel)

> **until**\<`E`\>(`register`, `signal`?, `sentinel`?): `Promise`\<`E`\>

Listens for an event with the provided `register` function until it happens or until `sentinel(event)` returns a truthy value.
If a `signal` is provided, listens to it to cancel the promise.

### Type Parameters

• **E** = `Event`

### Parameters

• **register**: (`listener`) => [`Unregister`](../type-aliases/Unregister.md) \| (`listener`, `options`?) => [`Unregister`](../type-aliases/Unregister.md)

Function that registers a listener for the event to catch.

• **signal?**: `AbortSignal`

Optional signal parameter on which the `abort` event will be listened to.

• **sentinel?**

Optional sentinel function that validates an `event` occurence.

### Returns

`Promise`\<`E`\>

A promise that resolves to the `event`.

### Defined in

[tools/until.ts:12](https://github.com/nevoland/futurise/blob/54db9391420145098bc39b459b46ddbae49856b0/lib/tools/until.ts#L12)

## until(register, signal, sentinel)

> **until**\<`E`\>(`register`, `signal`?, `sentinel`?): `Promise`\<`undefined`\>

### Type Parameters

• **E** = `undefined`

### Parameters

• **register**

• **signal?**: `AbortSignal`

• **sentinel?**

### Returns

`Promise`\<`undefined`\>

### Defined in

[tools/until.ts:17](https://github.com/nevoland/futurise/blob/54db9391420145098bc39b459b46ddbae49856b0/lib/tools/until.ts#L17)
