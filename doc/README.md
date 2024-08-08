futurise

# futurise

## Table of contents

### Type Aliases

- [Listener](README.md#listener)
- [ListenerOptions](README.md#listeneroptions)
- [ListenerTimer](README.md#listenertimer)
- [PromiseStatus](README.md#promisestatus)
- [Register](README.md#register)
- [Unregister](README.md#unregister)

### Functions

- [interval](README.md#interval)
- [on](README.md#on)
- [once](README.md#once)
- [reduceStatusList](README.md#reducestatuslist)
- [sleep](README.md#sleep)
- [timeout](README.md#timeout)
- [until](README.md#until)
- [untilOnline](README.md#untilonline)

## Type Aliases

### Listener

Ƭ **Listener**<`E`\>: `E` extends `undefined` ? () => `void` : (`event`: `E`) => `void`

#### Type parameters

| Name |
| :------ |
| `E` |

#### Defined in

[types.ts:1](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L1)

___

### ListenerOptions

Ƭ **ListenerOptions**: `Parameters`<`EventTarget`[``"addEventListener"``]\>[``2``]

#### Defined in

[types.ts:3](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L3)

___

### ListenerTimer

Ƭ **ListenerTimer**: [`Listener`](README.md#listener)<`undefined`\>

#### Defined in

[types.ts:5](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L5)

___

### PromiseStatus

Ƭ **PromiseStatus**: ``"idle"`` \| ``"pending"`` \| ``"fulfilled"`` \| ``"rejected"``

Status of a promise.

#### Defined in

[types.ts:16](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L16)

___

### Register

Ƭ **Register**<`L`, `O`\>: `O` extends `undefined` ? (`listener`: `L`) => [`Unregister`](README.md#unregister) : (`listener`: `L`, `options?`: `O`) => [`Unregister`](README.md#unregister)

#### Type parameters

| Name |
| :------ |
| `L` |
| `O` |

#### Defined in

[types.ts:9](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L9)

___

### Unregister

Ƭ **Unregister**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[types.ts:7](https://github.com/nevoland/futurise/blob/39d80c0/lib/types.ts#L7)

## Functions

### interval

▸ **interval**(`duration`, `callback`): [`Unregister`](README.md#unregister)

Calls `callback` at least every `duration` milliseconds. Returns a function that stops future calls of `callback`.
If the `duration` is `0`, it uses `requestAnimationFrame` if available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Minimum duration of each interval in milliseconds. |
| `callback` | () => `void` | Called at the end of each interval. |

#### Returns

[`Unregister`](README.md#unregister)

Function that cancels the interval.

#### Defined in

[tools/interval.ts:20](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/interval.ts#L20)

▸ **interval**(`duration`): [`Register`](README.md#register)<[`ListenerTimer`](README.md#listenertimer), `undefined`\>

Returns a function that registers a `callback` to be called at least every `duration` milliseconds.
If the `duration` is `0`, if uses `requestAnimationFrame` if available.
The interval is set during this call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Minimum duration of each interval in milliseconds. |

#### Returns

[`Register`](README.md#register)<[`ListenerTimer`](README.md#listenertimer), `undefined`\>

Function that registers a callback to call at each elapsed interval, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the interval. When registering a callback on a cleared interval, throws an `Error` exception.

#### Defined in

[tools/interval.ts:29](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/interval.ts#L29)

___

### on

▸ **on**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

Listens for `event` on `target`, calling `listener(event)` at each incoming `event`. The provided `options` are identical to those provided to `addEventListener`.
Returns a function that removes the `listener` from the `target` for the specified `event`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The target on which to listen for the event. |
| `eventName` | `K` | - |
| `listener` | [`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\> | The listener callback. |
| `options?` | `boolean` \| `AddEventListenerOptions` | Options to pass to the listener. |

#### Returns

[`Unregister`](README.md#unregister)

A function that removes the `listener`.

#### Defined in

[tools/on.ts:13](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L13)

▸ **on**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Document` |
| `eventName` | `K` |
| `listener` | [`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/on.ts:19](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L19)

▸ **on**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Worker` |
| `eventName` | `K` |
| `listener` | [`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/on.ts:25](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L25)

▸ **on**<`E`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `eventName` | `string` |
| `listener` | [`Listener`](README.md#listener)<`E`\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/on.ts:31](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L31)

▸ **on**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The target on which to listen for the event. |
| `eventName` | `K` | - |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

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

[tools/on.ts:53](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L53)

▸ **on**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Document` |
| `eventName` | `K` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/on.ts:57](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L57)

▸ **on**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Worker` |
| `eventName` | `K` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/on.ts:61](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L61)

▸ **on**<`E`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`E`\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `eventName` | `string` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`E`\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/on.ts:65](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/on.ts#L65)

___

### once

▸ **once**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

Listens for `event` on `target`, calling `listener(event)` at the first occuring `event`. The `listener` is then unregistered upon the first occurence. The provided `options` are identical to those provided to `addEventListener`.
Returns a function that removes the `listener` from the `target` for the specified `event`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The target on which to listen for the event. |
| `eventName` | `K` | - |
| `listener` | [`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\> | The listener callback. |
| `options?` | `boolean` \| `AddEventListenerOptions` | Options to pass to the listener. |

#### Returns

[`Unregister`](README.md#unregister)

A function that removes the `listener`.

#### Defined in

[tools/once.ts:13](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L13)

▸ **once**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Document` |
| `eventName` | `K` |
| `listener` | [`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/once.ts:19](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L19)

▸ **once**<`K`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Worker` |
| `eventName` | `K` |
| `listener` | [`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/once.ts:25](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L25)

▸ **once**<`E`\>(`target`, `eventName`, `listener`, `options?`): [`Unregister`](README.md#unregister)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `eventName` | `string` |
| `listener` | [`Listener`](README.md#listener)<`E`\> |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

[`Unregister`](README.md#unregister)

#### Defined in

[tools/once.ts:31](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L31)

▸ **once**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

Returns a function that registers a `listener` with optional `options` for a given `event` on the provided `target`. The `listener` is then unregistered upon the first occurence of the `event`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The target on which to listen for the event. |
| `eventName` | `K` | - |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`HTMLElementEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

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

[tools/once.ts:53](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L53)

▸ **once**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Document` |
| `eventName` | `K` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`DocumentEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/once.ts:57](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L57)

▸ **once**<`K`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Worker` |
| `eventName` | `K` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`WorkerEventMap`[`K`]\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/once.ts:61](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L61)

▸ **once**<`E`\>(`target`, `eventName`): [`Register`](README.md#register)<[`Listener`](README.md#listener)<`E`\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `eventName` | `string` |

#### Returns

[`Register`](README.md#register)<[`Listener`](README.md#listener)<`E`\>, [`ListenerOptions`](README.md#listeneroptions)\>

#### Defined in

[tools/once.ts:65](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/once.ts#L65)

___

### reduceStatusList

▸ **reduceStatusList**(`...statusList`): [`PromiseStatus`](README.md#promisestatus)

Returns a reduced promise status, prioritizing `"rejected"` over `"pending"` over `"idle"` over `"fulfilled"`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...statusList` | [`PromiseStatus`](README.md#promisestatus)[] | List of promise statuses. |

#### Returns

[`PromiseStatus`](README.md#promisestatus)

The reduced promise status.

#### Defined in

[tools/reduceStatusList.ts:9](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/reduceStatusList.ts#L9)

___

### sleep

▸ **sleep**(`duration`, `signal?`): `Promise`<`undefined`\>

Returns a promise that resolves after at least `duration` milliseconds elapsed.
If a `signal` is provided, listens for an `abort` event to reject the promise with the `signal.reason`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Sleep duration in milliseconds. |
| `signal?` | `AbortSignal` | Optional signal parameter on which the `abort` event will be listened to. |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[tools/sleep.ts:12](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/sleep.ts#L12)

___

### timeout

▸ **timeout**(`duration`, `callback`): [`Unregister`](README.md#unregister)

Calls `callback` after at least `duration` milliseconds. Returns a function that cancels the future call of `callback`, if not already called.
If the `duration` is `0`, it uses `requestAnimationFrame` if available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Timeout duration in milliseconds. |
| `callback` | () => `void` | Called after the `duration` elapsed. |

#### Returns

[`Unregister`](README.md#unregister)

Function that cancels the call of `callback`.

#### Defined in

[tools/timeout.ts:21](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/timeout.ts#L21)

▸ **timeout**(`duration`): [`Register`](README.md#register)<[`ListenerTimer`](README.md#listenertimer), `undefined`\>

Returns a function that registers a `callback` to be called after at least `duration` milliseconds elapsed.
If the `duration` is `0`, if uses `requestAnimationFrame` if available.
The timer is set during this call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Timeout duration in milliseconds. |

#### Returns

[`Register`](README.md#register)<[`ListenerTimer`](README.md#listenertimer), `undefined`\>

Function that registers a callback to call after the `duration` elapsed, and returns a function that unregisters it. If the latter function unregisters the last callback, it clears the timeout. When registering a callback on a cleared interval, throws an `Error` exception.

#### Defined in

[tools/timeout.ts:30](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/timeout.ts#L30)

___

### until

▸ **until**<`E`\>(`register`, `signal?`, `sentinel?`): `Promise`<`E`\>

Listens for an event with the provided `register` function until it happens or until `sentinel(event)` returns a truthy value.
If a `signal` is provided, listens to it to cancel the promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `Event` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `register` | (`listener`: [`Listener`](README.md#listener)<`E`\>) => [`Unregister`](README.md#unregister) \| (`listener`: [`Listener`](README.md#listener)<`E`\>, `options?`: `any`) => [`Unregister`](README.md#unregister) | Function that registers a listener for the event to catch. |
| `signal?` | `AbortSignal` | Optional signal parameter on which the `abort` event will be listened to. |
| `sentinel?` | (`event`: `E`) => `boolean` | Optional sentinel function that validates an `event` occurence. |

#### Returns

`Promise`<`E`\>

A promise that resolves to the `event`.

#### Defined in

[tools/until.ts:12](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/until.ts#L12)

▸ **until**<`E`\>(`register`, `signal?`, `sentinel?`): `Promise`<`undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `register` | (`listener`: [`Listener`](README.md#listener)<`E`\>) => [`Unregister`](README.md#unregister) |
| `signal?` | `AbortSignal` |
| `sentinel?` | () => `boolean` |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[tools/until.ts:17](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/until.ts#L17)

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

[tools/untilOnline.ts:14](https://github.com/nevoland/futurise/blob/39d80c0/lib/tools/untilOnline.ts#L14)
