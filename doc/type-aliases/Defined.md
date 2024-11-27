[**futurise**](../README.md) • **Docs**

***

[futurise](../README.md) / Defined

# Type Alias: Defined\<T, Y, N\>

> **Defined**\<`T`, `Y`, `N`\>: [`unknown`] *extends* [`T`] ? `Y` : [`T`] *extends* [`never`] ? `N` : `undefined` *extends* `T` ? `0` *extends* `1` & `T` ? `Y` : `N` : `Y`

Returns `Y` if `T` is not `unknown` and `never`, and returns `N` otherwise.

## Type Parameters

• **T**

• **Y**

• **N**

## Defined in

[types/Defined.ts:4](https://github.com/nevoland/futurise/blob/e367c94d1d167836196f4968f6ce3576b3470f4d/lib/types/Defined.ts#L4)
