[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / on

# Function: on()

## on(target, eventName, listener, options)

> **on**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

Listens for `event` on `target`, calling `listener(event)` at each incoming `event`. The provided `options` are identical to those provided to `addEventListener`.
Returns a function that removes the `listener` from the `target` for the specified `event`.

### Type Parameters

• **K** *extends* keyof `HTMLElementEventMap`

### Parameters

• **target**: `HTMLElement`

The target on which to listen for the event.

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`HTMLElementEventMap`\[`K`\]\>

The listener callback.

• **options?**: `boolean` \| `AddEventListenerOptions`

Options to pass to the listener.

### Returns

[`Unregister`](../type-aliases/Unregister.md)

A function that removes the `listener`.

### Defined in

[tools/on.ts:13](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L13)

## on(target, eventName, listener, options)

> **on**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **K** *extends* keyof `DocumentEventMap`

### Parameters

• **target**: `Document`

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`DocumentEventMap`\[`K`\]\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/on.ts:19](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L19)

## on(target, eventName, listener, options)

> **on**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

### Parameters

• **target**: `Worker`

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`WorkerEventMap`\[`K`\]\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/on.ts:25](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L25)

## on(target, eventName, listener, options)

> **on**\<`E`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **E** *extends* `object`

### Parameters

• **target**: `EventTarget`

• **eventName**: `string`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`E`\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/on.ts:31](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L31)

## on(target, eventName)

> **on**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`HTMLElementEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`.

### Type Parameters

• **K** *extends* keyof `HTMLElementEventMap`

### Parameters

• **target**: `HTMLElement`

The target on which to listen for the event.

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`HTMLElementEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

Function that registers a `listener` with optional `options`.

### Example

```typescript
const register = on(element, "click");
// Start listening
const off = register(callback);
// Stop listening
off();
```

### Defined in

[tools/on.ts:53](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L53)

## on(target, eventName)

> **on**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`DocumentEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* keyof `DocumentEventMap`

### Parameters

• **target**: `Document`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`DocumentEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:57](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L57)

## on(target, eventName)

> **on**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`WorkerEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

### Parameters

• **target**: `Worker`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`WorkerEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:61](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L61)

## on(target, eventName)

> **on**\<`E`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **E** *extends* `object`

### Parameters

• **target**: `EventTarget`

• **eventName**: `string`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:65](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/tools/on.ts#L65)
