---
id: subset
title: Subset
sidebar_label: Subset
---

[Subset](subset.md) /

## Hierarchy

* **Subset**

## Index

### Methods

* [encodeStream](subset.md#encodestream)
* [includeGlyph](subset.md#includeglyph)

## Methods

###  encodeStream

▸ **encodeStream**(): *[SubsetStream](subsetstream.md)*

*Defined in [types/fontkit.ts:242](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L242)*

Returns a stream containing the encoded font file that can be piped to a
destination, such as a file.

**Returns:** *[SubsetStream](subsetstream.md)*

___

###  includeGlyph

▸ **includeGlyph**(`glyph`: number | [Glyph](glyph.md)): *number*

*Defined in [types/fontkit.ts:236](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L236)*

Includes the given glyph object or glyph ID in the subset.
Returns the glyph's new ID in the subset.

**Parameters:**

Name | Type |
------ | ------ |
`glyph` | number \| [Glyph](glyph.md) |

**Returns:** *number*