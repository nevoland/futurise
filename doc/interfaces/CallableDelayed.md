[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / CallableDelayed

# Interface: CallableDelayed()\<A, R\>

## Type Parameters

• **A** *extends* `any`[]

• **R**

> **CallableDelayed**(...`args`): `void`

## Parameters

• ...**args**: `A`

## Returns

`void`

## Defined in

[types/CallableDelayed.ts:2](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/types/CallableDelayed.ts#L2)

## Properties

### cancel()

> **cancel**: () => `void`

Cancels the last delayed invocation, if any, of the callable.

#### Returns

`void`

#### Defined in

[types/CallableDelayed.ts:6](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/types/CallableDelayed.ts#L6)

***

### flush()

> **flush**: () => `R`

#### Returns

`R`

The result returned by the callable.

#### Defined in

[types/CallableDelayed.ts:11](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/types/CallableDelayed.ts#L11)

***

### pending

> **pending**: `boolean`

Whether there is a pending invocation of the callable or not.

#### Defined in

[types/CallableDelayed.ts:15](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/types/CallableDelayed.ts#L15)

***

### result

> **result**: `R`

The result of the last run invocation.

#### Defined in

[types/CallableDelayed.ts:19](https://github.com/nevoland/futurise/blob/24b077828c292e75ff85280bb7b5d97993669b07/lib/types/CallableDelayed.ts#L19)
