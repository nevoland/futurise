[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / DelayedFunction

# Type Alias: DelayedFunction\<F\>

> **DelayedFunction**\<`F`\>: `F` & `object`

## Type declaration

### cancel()

> **cancel**: () => `void`

Cancels the last delayed invocation, if any, of the callable.

#### Returns

`void`

### flush()

> **flush**: () => `ReturnType`\<`F`\>

#### Returns

`ReturnType`\<`F`\>

The result returned by the callable.

### pending

> **pending**: `boolean`

Whether there is a pending invocation of the callable or not.

### result

> **result**: `ReturnType`\<`F`\>

The result of the last run invocation.

## Type Parameters

• **F** *extends* (...`args`) => `any`

## Defined in

[types/DelayedFunction.ts:1](https://github.com/nevoland/futurise/blob/19458131a2b9248ce77024f61a31e10e9447a5f7/lib/types/DelayedFunction.ts#L1)
