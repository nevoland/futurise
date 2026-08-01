[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / once

# Function: once()

## once(target, eventName, listener, options)

> **once**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

Listens for `event` on `target`, calling `listener(event)` at the first occuring `event`. The `listener` is then unregistered upon the first occurence. The provided `options` are identical to those provided to `addEventListener`.
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

[tools/once.ts:21](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L21)

## once(target, eventName, listener, options)

> **once**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

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

[tools/once.ts:27](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L27)

## once(target, eventName, listener, options)

> **once**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

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

[tools/once.ts:33](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L33)

## once(target, eventName, listener)

> **once**\<`E`, `K`\>(`target`, `eventName`, `listener`): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **E** *extends* [`EventMap`](../type-aliases/EventMap.md)

• **K** *extends* `string` \| `number` \| `symbol`

### Parameters

• **target**: [`EventEmitter`](../classes/EventEmitter.md)\<`E`\>

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`E`\[`K`\]\>

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/once.ts:39](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L39)

## once(target, eventName, listener)

> **once**\<`E`, `K`\>(`target`, `eventName`, `listener`): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **E** *extends* [`TypedEvent`](../type-aliases/TypedEvent.md)

• **K** *extends* `string`

### Parameters

• **target**: [`TypedEventEmitter`](../classes/TypedEventEmitter.md)\<`E`\>

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`Extract`\<`E`, `object`\>\>

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/once.ts:44](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L44)

## once(target, eventName, listener, options)

> **once**\<`E`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **E**

### Parameters

• **target**: `EventTarget`

• **eventName**: `string`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`E`\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/once.ts:49](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L49)

## once(target, eventName)

> **once**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`HTMLElementEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`. The `listener` is then unregistered upon the first occurence of the `event`.

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

[tools/once.ts:71](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L71)

## once(target, eventName)

> **once**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`DocumentEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* keyof `DocumentEventMap`

### Parameters

• **target**: `Document`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`DocumentEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/once.ts:75](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L75)

## once(target, eventName)

> **once**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`WorkerEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

### Parameters

• **target**: `Worker`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`WorkerEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/once.ts:79](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L79)

## once(target, eventName)

> **once**\<`E`, `K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\[`K`\]\>, `never`\>

### Type Parameters

• **E** *extends* [`EventMap`](../type-aliases/EventMap.md)

• **K** *extends* `string` \| `number` \| `symbol`

### Parameters

• **target**: [`EventEmitter`](../classes/EventEmitter.md)\<`E`\>

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\[`K`\]\>, `never`\>

### Defined in

[tools/once.ts:83](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L83)

## once(target, eventName)

> **once**\<`E`, `K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`Extract`\<`E`, `object`\>\>, `never`\>

### Type Parameters

• **E** *extends* [`TypedEvent`](../type-aliases/TypedEvent.md)

• **K** *extends* `string`

### Parameters

• **target**: [`TypedEventEmitter`](../classes/TypedEventEmitter.md)\<`E`\>

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`Extract`\<`E`, `object`\>\>, `never`\>

### Defined in

[tools/once.ts:87](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L87)

## once(target, eventName)

> **once**\<`E`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **E**

### Parameters

• **target**: `EventTarget`

• **eventName**: `string`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/once.ts:91](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/once.ts#L91)
