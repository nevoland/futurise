[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / DelayedFunction

# Interface: DelayedFunction()\<F\>

## Type Parameters

• **F** *extends* (...`args`) => `any`

> **DelayedFunction**(...`args`): `void`

## Parameters

• ...**args**: `Parameters`\<`F`\>

## Returns

`void`

## Defined in

[types/DelayedFunction.ts:2](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/types/DelayedFunction.ts#L2)

## Properties

### cancel()

> **cancel**: () => `void`

Cancels the last delayed invocation, if any, of the callable.

#### Returns

`void`

#### Defined in

[types/DelayedFunction.ts:6](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/types/DelayedFunction.ts#L6)

***

### flush()

> **flush**: () => `ReturnType`\<`F`\>

#### Returns

`ReturnType`\<`F`\>

The result returned by the callable.

#### Defined in

[types/DelayedFunction.ts:11](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/types/DelayedFunction.ts#L11)

***

### pending

> **pending**: `boolean`

Whether there is a pending invocation of the callable or not.

#### Defined in

[types/DelayedFunction.ts:15](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/types/DelayedFunction.ts#L15)

***

### result

> **result**: `ReturnType`\<`F`\>

The result of the last run invocation.

#### Defined in

[types/DelayedFunction.ts:19](https://github.com/nevoland/futurise/blob/f004fb130ed2cfd337ed99b8ab01ee1b07fb6a02/lib/types/DelayedFunction.ts#L19)
