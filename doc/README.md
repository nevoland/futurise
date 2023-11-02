futurise

# futurise

## Table of contents

### Type Aliases

- [Listener](README.md#listener)
- [ListenerOptions](README.md#listeneroptions)
- [PromiseStatus](README.md#promisestatus)
- [Register](README.md#register)
- [Unregister](README.md#unregister)

### Functions

- [interval](README.md#interval)
- [on](README.md#on)
- [sleep](README.md#sleep)
- [timeout](README.md#timeout)
- [until](README.md#until)
- [untilOnline](README.md#untilonline)

## Type Aliases

### Listener

Ƭ **Listener**: `Parameters`<`EventTarget`[``"addEventListener"``]\>[``1``]

#### Defined in

[types.ts:1](https://github.com/nevoland/futurise/blob/1730f11/lib/types.ts#L1)

___

### ListenerOptions

Ƭ **ListenerOptions**: `Parameters`<`EventTarget`[``"addEventListener"``]\>[``2``]

#### Defined in

[types.ts:3](https://github.com/nevoland/futurise/blob/1730f11/lib/types.ts#L3)

___

### PromiseStatus

Ƭ **PromiseStatus**: ``"idle"`` \| ``"pending"`` \| ``"fulfilled"`` \| ``"rejected"``

Status of a promise.

#### Defined in

[types.ts:15](https://github.com/nevoland/futurise/blob/1730f11/lib/types.ts#L15)

___

### Register

Ƭ **Register**: (`listener`: [`Listener`](README.md#listener), `options?`: [`ListenerOptions`](README.md#listeneroptions)) => [`Unregister`](README.md#unregister)

#### Type declaration

▸ (`listener`, `options?`): [`Unregister`](README.md#unregister)

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`Listener`](README.md#listener) |
| `options?` | [`ListenerOptions`](README.md#listeneroptions) |

##### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[types.ts:7](https://github.com/nevoland/futurise/blob/1730f11/lib/types.ts#L7)

___

### Unregister

Ƭ **Unregister**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types.ts:5](https://github.com/nevoland/futurise/blob/1730f11/lib/types.ts#L5)

## Functions

### interval

▸ **interval**(`duration`, `callback`): [`Unregister`](README.md#unregister)

Calls `callback` at least every `duration` milliseconds. Returns a function that stops future calls of `callback`. If `duration` is falsy, uses `requestAnimationFrame` if available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Duration of each interval in milliseconds. |
| `callback` | () => `void` | Called at the end of each interval. |

#### Returns

[`Unregister`](README.md#unregister)

Function that cancels the interval.

#### Defined in

[tools/interval.ts:19](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/interval.ts#L19)

___

### on

▸ **on**(`target`, `event`): [`Register`](README.md#register)

Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `EventTarget` | The target on which to listen for the event. |
| `event` | `string` | The event name to listen for. |

#### Returns

[`Register`](README.md#register)

Function that registers a `listener` with optional `options`.

**`Example`**

```typescript
const register = on(element, "click");
// Start listening
const off = register(callback);
// Stop listening
off();
```

#### Defined in

[tools/on.ts:19](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/on.ts#L19)

▸ **on**(`target`, `event`, `listener`, `options`): [`Unregister`](README.md#unregister)

Listens for `event` on `target`, calling `listener(event)` at each incoming `event`. The provided `options` are identical to those provided to `addEventListener`.
Returns a function that removes the `listener` from the `target` for the specified `event`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `EventTarget` | The target on which to listen for the event. |
| `event` | `string` | The event name to listen for. |
| `listener` | ``null`` \| `EventListenerOrEventListenerObject` | The listener callback. |
| `options` | `undefined` \| `boolean` \| `AddEventListenerOptions` | Options to pass to the listener. |

#### Returns

[`Unregister`](README.md#unregister)

A function that removes the `listener`.

#### Defined in

[tools/on.ts:30](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/on.ts#L30)

___

### sleep

▸ **sleep**(`duration`, `signal?`): `Promise`<`unknown`\>

Returns a promise that resolves after at least `duration` milliseconds elapsed.
If a `signal` is provided, listens for an `abort` event to reject the promise with the `signal.reason`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Sleep duration in milliseconds. |
| `signal?` | `AbortSignal` | Optional signal parameter on which the `abort` event will be listened to. |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[tools/sleep.ts:13](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/sleep.ts#L13)

___

### timeout

▸ **timeout**(`duration`, `callback`): [`Unregister`](README.md#unregister)

Calls `callback` after at least `duration` milliseconds. Returns a function that cancels the future call of `callback`, if not already called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Timeout duration in milliseconds. |
| `callback` | () => `void` | Called after the duration elapsed. |

#### Returns

[`Unregister`](README.md#unregister)

Function that cancels the call of `callback`.

#### Defined in

[tools/timeout.ts:15](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/timeout.ts#L15)

___

### until

▸ **until**(`register`, `signal?`, `sentinel?`): `Promise`<`Event`\>

Listens for an event with the provided `register` function until it happens or until `sentinel(event)` returns a truthy value.
If a `signal` is provided, listens to it to cancel the promise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `register` | [`Register`](README.md#register) | Function that registers a listener for the event to catch. |
| `signal?` | `AbortSignal` | Optional signal parameter on which the `abort` event will be listened to. |
| `sentinel?` | (`event`: `Event`) => `boolean` | Optional sentinel function that validates an `event` occurence. |

#### Returns

`Promise`<`Event`\>

A promise that resolves to the `event`.

#### Defined in

[tools/until.ts:12](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/until.ts#L12)

___

### untilOnline

▸ **untilOnline**(`signal?`): `Promise`<`boolean`\>

Returns a promise that waits for the browser to be back online.
Resolves to `true` if it it was offline before calling this function, `false` otherwise.
If a `signal` is provided, listens to it to cancel the promise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal?` | `AbortSignal` | Optional signal parameter on which the `abort` event will be listened to. |

#### Returns

`Promise`<`boolean`\>

`true` if it it was offline before calling this function, `false` otherwise.

#### Defined in

[tools/untilOnline.ts:14](https://github.com/nevoland/futurise/blob/1730f11/lib/tools/untilOnline.ts#L14)
