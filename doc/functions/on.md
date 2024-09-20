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

[tools/on.ts:20](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L20)

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

[tools/on.ts:26](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L26)

## on(target, eventName, listener, options)

> **on**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **K** *extends* `"change"`

### Parameters

• **target**: `MediaQueryList`

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`MediaQueryListEventMap`\[`K`\]\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/on.ts:32](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L32)

## on(target, eventName, listener, options)

> **on**\<`K`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

### Type Parameters

• **K** *extends* keyof `MediaRecorderEventMap`

### Parameters

• **target**: `MediaRecorder`

• **eventName**: `K`

• **listener**: [`Listener`](../type-aliases/Listener.md)\<`MediaRecorderEventMap`\[`K`\]\>

• **options?**: `boolean` \| `AddEventListenerOptions`

### Returns

[`Unregister`](../type-aliases/Unregister.md)

### Defined in

[tools/on.ts:38](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L38)

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

[tools/on.ts:44](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L44)

## on(target, eventName, listener)

> **on**\<`E`, `K`\>(`target`, `eventName`, `listener`): [`Unregister`](../type-aliases/Unregister.md)

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

[tools/on.ts:50](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L50)

## on(target, eventName, listener, options)

> **on**\<`E`\>(`target`, `eventName`, `listener`, `options`?): [`Unregister`](../type-aliases/Unregister.md)

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

[tools/on.ts:55](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L55)

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

[tools/on.ts:77](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L77)

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

[tools/on.ts:81](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L81)

## on(target, eventName)

> **on**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`MediaQueryListEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* `"change"`

### Parameters

• **target**: `MediaQueryList`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`MediaQueryListEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:85](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L85)

## on(target, eventName)

> **on**\<`K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`MediaRecorderEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **K** *extends* keyof `MediaRecorderEventMap`

### Parameters

• **target**: `MediaRecorder`

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`MediaRecorderEventMap`\[`K`\]\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:89](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L89)

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

[tools/on.ts:93](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L93)

## on(target, eventName)

> **on**\<`E`, `K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\[`K`\]\>, `never`\>

### Type Parameters

• **E** *extends* [`EventMap`](../type-aliases/EventMap.md)

• **K** *extends* `string` \| `number` \| `symbol`

### Parameters

• **target**: [`EventEmitter`](../classes/EventEmitter.md)\<`E`\>

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\[`K`\]\>, `never`\>

### Defined in

[tools/on.ts:97](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L97)

## on(target, eventName)

> **on**\<`E`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Type Parameters

• **E**

### Parameters

• **target**: `EventTarget`

• **eventName**: `string` \| `number` \| `symbol`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`E`\>, [`ListenerOptions`](../type-aliases/ListenerOptions.md)\>

### Defined in

[tools/on.ts:101](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/tools/on.ts#L101)
