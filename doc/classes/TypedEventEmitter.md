[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / TypedEventEmitter

# Class: TypedEventEmitter\<E\>

Emits discriminated events where each event carries its own `type` property.
Works conveniently with the `on` and `once` tools.

## Type Parameters

• **E** *extends* [`TypedEvent`](../type-aliases/TypedEvent.md)

## Constructors

### new TypedEventEmitter()

> **new TypedEventEmitter**\<`E`\>(): [`TypedEventEmitter`](TypedEventEmitter.md)\<`E`\>

#### Returns

[`TypedEventEmitter`](TypedEventEmitter.md)\<`E`\>

#### Defined in

[classes/TypedEventEmitter.ts:17](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/classes/TypedEventEmitter.ts#L17)

## Methods

### addEventListener()

> **addEventListener**\<`K`\>(`type`, `listener`): `void`

Adds a listener for a particular event type.

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **type**: `K`

The event type to listen to.

• **listener**: `TypedListener`\<`Extract`\<`E`, `object`\>\>

The listener to call with the event.

#### Returns

`void`

#### Defined in

[classes/TypedEventEmitter.ts:37](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/classes/TypedEventEmitter.ts#L37)

***

### dispatchEvent()

> **dispatchEvent**\<`K`\>(`event`): `void`

Dispatches the provided event to the registered listeners, if any.

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **event**: `Extract`\<`E`, `object`\>

The event to dispatch.

#### Returns

`void`

#### Defined in

[classes/TypedEventEmitter.ts:74](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/classes/TypedEventEmitter.ts#L74)

***

### hasListeners()

> **hasListeners**\<`K`\>(`type`): `boolean`

Returns whether there are any listeners for a particular event type.

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **type**: `K`

The event type to check for listeners.

#### Returns

`boolean`

Whether there are any listeners for the event type.

#### Defined in

[classes/TypedEventEmitter.ts:27](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/classes/TypedEventEmitter.ts#L27)

***

### removeEventListener()

> **removeEventListener**\<`K`\>(`type`, `listener`): `void`

Removes a listener from a particular event type.

#### Type Parameters

• **K** *extends* `string`

#### Parameters

• **type**: `K`

The event type to stop listening.

• **listener**: `TypedListener`\<`Extract`\<`E`, `object`\>\>

The listener to remove.

#### Returns

`void`

#### Defined in

[classes/TypedEventEmitter.ts:54](https://github.com/nevoland/futurise/blob/2721ec6d6bead96112e7c9247b86767ebb5613a6/lib/classes/TypedEventEmitter.ts#L54)
