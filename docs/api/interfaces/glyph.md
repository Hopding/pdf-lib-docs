---
id: glyph
title: Glyph
sidebar_label: Glyph
---

[Glyph](glyph.md) /

Glyph objects represent a glyph in the font. They have various properties for
accessing metrics and the actual vector path the glyph represents, and
methods for rendering the glyph to a graphics context.

You do not create glyph objects directly. They are created by various methods
on the Font object. There are several subclasses of the base Glyph class
internally that may be returned depending on the font format, but they all
include the following API.

## Hierarchy

* **Glyph**

## Index

### Properties

* [advanceWidth](glyph.md#advancewidth)
* [bbox](glyph.md#bbox)
* [cbox](glyph.md#cbox)
* [codePoints](glyph.md#codepoints)
* [id](glyph.md#id)
* [layers](glyph.md#layers)
* [path](glyph.md#path)

### Methods

* [getImageForSize](glyph.md#getimageforsize)
* [render](glyph.md#render)

## Properties

###  advanceWidth

• **advanceWidth**: *number*

*Defined in [types/fontkit.ts:117](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L117)*

___

###  bbox

• **bbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:108](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L108)*

The Glyph’s bounding box, i.e. the rectangle that encloses the glyph
outline as tightly as possible.

___

###  cbox

• **cbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:116](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L116)*

The Glyph’s control box. This is often the same as the bounding box, but is
faster to compute. Because of the way bezier curves are defined, some of
the control points can be outside of the bounding box. Where bbox takes
this into account, cbox does not. Thus, cbox is less accurate, but faster
to compute.

___

###  codePoints

• **codePoints**: *number[]*

*Defined in [types/fontkit.ts:102](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L102)*

An array of unicode code points that are represented by this glyph. There
can be multiple code points in the case of ligatures and other glyphs that
represent multiple visual characters.

___

###  id

• **id**: *number*

*Defined in [types/fontkit.ts:96](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L96)*

___

###  layers

• **layers**: *any[]*

*Defined in [types/fontkit.ts:123](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L123)*

For COLR glyphs, which are vector based, this returns an array of objects
representing the glyphs and colors for each layer in render order.

___

###  path

• **path**: *[Path](path.md)*

*Defined in [types/fontkit.ts:103](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L103)*

## Methods

###  getImageForSize

▸ **getImageForSize**(`size`: number): *`Uint8Array`*

*Defined in [types/fontkit.ts:138](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L138)*

For SBIX glyphs, which are bitmap based, this returns an object containing
some properties about the image, along with the image data itself
(usually PNG).

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *`Uint8Array`*

___

###  render

▸ **render**(`context`: any, `size`: number): *void*

*Defined in [types/fontkit.ts:130](https://github.com/Hopding/pdf-lib-docs/blob/36487a6/pdf-lib/src/types/fontkit.ts#L130)*

Renders the glyph to the given graphics context, at the specified
font size.

**Parameters:**

Name | Type |
------ | ------ |
`context` | any |
`size` | number |

**Returns:** *void*