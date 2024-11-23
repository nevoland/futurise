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

[tools/once.ts:20](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L20)

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

[tools/once.ts:26](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L26)

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

[tools/once.ts:32](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L32)

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

[tools/once.ts:38](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L38)

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

[tools/once.ts:43](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L43)

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

[tools/once.ts:65](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L65)

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

[tools/once.ts:69](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L69)

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

[tools/once.ts:73](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L73)

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

[tools/once.ts:77](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L77)

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

[tools/once.ts:81](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/tools/once.ts#L81)
