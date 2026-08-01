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

[tools/on.ts:22](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L22)

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

[tools/on.ts:28](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L28)

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

[tools/on.ts:34](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L34)

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

[tools/on.ts:40](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L40)

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

[tools/on.ts:46](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L46)

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

[tools/on.ts:52](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L52)

## on(target, eventName, listener)

> **on**\<`E`, `K`\>(`target`, `eventName`, `listener`): [`Unregister`](../type-aliases/Unregister.md)

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

[tools/on.ts:57](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L57)

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

[tools/on.ts:62](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L62)

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

[tools/on.ts:84](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L84)

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

[tools/on.ts:88](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L88)

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

[tools/on.ts:92](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L92)

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

[tools/on.ts:96](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L96)

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

[tools/on.ts:100](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L100)

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

[tools/on.ts:104](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L104)

## on(target, eventName)

> **on**\<`E`, `K`\>(`target`, `eventName`): [`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`Extract`\<`E`, `object`\>\>, `never`\>

### Type Parameters

• **E** *extends* [`TypedEvent`](../type-aliases/TypedEvent.md)

• **K** *extends* `string`

### Parameters

• **target**: [`TypedEventEmitter`](../classes/TypedEventEmitter.md)\<`E`\>

• **eventName**: `K`

### Returns

[`Register`](../type-aliases/Register.md)\<[`Listener`](../type-aliases/Listener.md)\<`Extract`\<`E`, `object`\>\>, `never`\>

### Defined in

[tools/on.ts:108](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L108)

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

[tools/on.ts:112](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/tools/on.ts#L112)
