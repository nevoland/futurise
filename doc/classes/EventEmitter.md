[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / EventEmitter

# Class: EventEmitter\<E\>

Emits events to a managed pool of listeners. Works conveniently with the `on` and `once` tools.

## Type Parameters

• **E** *extends* [`EventMap`](../type-aliases/EventMap.md)

## Constructors

### new EventEmitter()

> **new EventEmitter**\<`E`\>(): [`EventEmitter`](EventEmitter.md)\<`E`\>

#### Returns

[`EventEmitter`](EventEmitter.md)\<`E`\>

#### Defined in

[classes/EventEmitter.ts:14](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/classes/EventEmitter.ts#L14)

## Methods

### addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `void`

Adds a listener for a particular event.

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **type**: `K`

The event type to listen to.

• **listener**: [`Defined`](../type-aliases/Defined.md)\<`E`\[`K`\], (`event`) => `void`, () => `void`\>

The listener to call with the event.

#### Returns

`void`

#### Defined in

[classes/EventEmitter.ts:34](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/classes/EventEmitter.ts#L34)

***

### dispatchEvent()

> **dispatchEvent**\<`K`\>(`type`, `event`): `void`

Dispatches the provided event of a given `type` to the registered listeners, if any.

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **type**: `K`

The event type to dispatch.

• **event**: `E`\[`K`\]

The event to dispatch.

#### Returns

`void`

#### Defined in

[classes/EventEmitter.ts:66](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/classes/EventEmitter.ts#L66)

***

### hasListeners()

> **hasListeners**\<`K`\>(`type`): `boolean`

Returns whether there are any listeners for a particular event type.

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **type**: `K`

The event type to check for listeners.

#### Returns

`boolean`

Whether there are any listeners for the event type.

#### Defined in

[classes/EventEmitter.ts:24](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/classes/EventEmitter.ts#L24)

***

### removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener`): `void`

Removes a listener from a particular event.

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **type**: `K`

The event type to stop listening.

• **listener**: [`Defined`](../type-aliases/Defined.md)\<`E`\[`K`\], (`event`) => `void`, () => `void`\>

The listener to remove.

#### Returns

`void`

#### Defined in

[classes/EventEmitter.ts:48](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/classes/EventEmitter.ts#L48)
