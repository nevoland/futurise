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

## Properties

### listeners

> **listeners**: \{ \[K in string \| number \| symbol\]?: Listener\<E\[K\]\>\[\] \} = `{}`

Listeners by event type.

#### Defined in

[classes/EventEmitter.ts:10](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/classes/EventEmitter.ts#L10)

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

[classes/EventEmitter.ts:20](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/classes/EventEmitter.ts#L20)

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

[classes/EventEmitter.ts:52](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/classes/EventEmitter.ts#L52)

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

[classes/EventEmitter.ts:34](https://github.com/nevoland/futurise/blob/8ffbf603501f9c1e62e0006561015802889e0a88/lib/classes/EventEmitter.ts#L34)