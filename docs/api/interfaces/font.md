---
id: font
title: Font
sidebar_label: Font
---

[Font](font.md) /

There are several different types of font objects that are returned by
fontkit depending on the font format. They all inherit from the TTFFont class
and have the same public API.

## Hierarchy

* **Font**

## Index

### Properties

* [OS/2](font.md#os/2)
* [ascent](font.md#ascent)
* [availableFeatures](font.md#availablefeatures)
* [bbox](font.md#bbox)
* [capHeight](font.md#capheight)
* [cff](font.md#cff)
* [characterSet](font.md#characterset)
* [copyright](font.md#copyright)
* [descent](font.md#descent)
* [familyName](font.md#familyname)
* [fullName](font.md#fullname)
* [head](font.md#head)
* [italicAngle](font.md#italicangle)
* [lineGap](font.md#linegap)
* [numGlyphs](font.md#numglyphs)
* [post](font.md#post)
* [postscriptName](font.md#postscriptname)
* [subfamilyName](font.md#subfamilyname)
* [underlinePosition](font.md#underlineposition)
* [underlineThickness](font.md#underlinethickness)
* [unitsPerEm](font.md#unitsperem)
* [version](font.md#version)
* [xHeight](font.md#xheight)

### Methods

* [createSubset](font.md#createsubset)
* [getGlyph](font.md#getglyph)
* [glyphForCodePoint](font.md#glyphforcodepoint)
* [glyphsForString](font.md#glyphsforstring)
* [hasGlyphForCodePoint](font.md#hasglyphforcodepoint)
* [layout](font.md#layout)
* [widthOfGlyph](font.md#widthofglyph)

## Properties

###  OS/2

• **OS/2**: *object*

*Defined in [types/fontkit.ts:276](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L276)*

#### Type declaration:

* **sFamilyClass**: *number*

___

###  ascent

• **ascent**: *number*

*Defined in [types/fontkit.ts:261](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L261)*

___

###  availableFeatures

• **availableFeatures**: *any[]*

*Defined in [types/fontkit.ts:274](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L274)*

___

###  bbox

• **bbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:269](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L269)*

___

###  capHeight

• **capHeight**: *number*

*Defined in [types/fontkit.ts:267](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L267)*

___

###  cff

• **cff**: *any*

*Defined in [types/fontkit.ts:275](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L275)*

___

###  characterSet

• **characterSet**: *number[]*

*Defined in [types/fontkit.ts:273](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L273)*

___

###  copyright

• **copyright**: *string | null*

*Defined in [types/fontkit.ts:256](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L256)*

___

###  descent

• **descent**: *number*

*Defined in [types/fontkit.ts:262](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L262)*

___

###  familyName

• **familyName**: *string | null*

*Defined in [types/fontkit.ts:254](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L254)*

___

###  fullName

• **fullName**: *string | null*

*Defined in [types/fontkit.ts:253](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L253)*

___

###  head

• **head**: *object*

*Defined in [types/fontkit.ts:277](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L277)*

#### Type declaration:

* **macStyle**(): *object*

  * **italic**: *boolean*

___

###  italicAngle

• **italicAngle**: *number*

*Defined in [types/fontkit.ts:266](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L266)*

___

###  lineGap

• **lineGap**: *number*

*Defined in [types/fontkit.ts:263](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L263)*

___

###  numGlyphs

• **numGlyphs**: *number*

*Defined in [types/fontkit.ts:272](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L272)*

___

###  post

• **post**: *object*

*Defined in [types/fontkit.ts:278](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L278)*

#### Type declaration:

* **isFixedPitch**: *boolean*

___

###  postscriptName

• **postscriptName**: *string | null*

*Defined in [types/fontkit.ts:252](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L252)*

___

###  subfamilyName

• **subfamilyName**: *string | null*

*Defined in [types/fontkit.ts:255](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L255)*

___

###  underlinePosition

• **underlinePosition**: *number*

*Defined in [types/fontkit.ts:264](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L264)*

___

###  underlineThickness

• **underlineThickness**: *number*

*Defined in [types/fontkit.ts:265](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L265)*

___

###  unitsPerEm

• **unitsPerEm**: *number*

*Defined in [types/fontkit.ts:260](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L260)*

___

###  version

• **version**: *string | null*

*Defined in [types/fontkit.ts:257](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L257)*

___

###  xHeight

• **xHeight**: *number*

*Defined in [types/fontkit.ts:268](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L268)*

## Methods

###  createSubset

▸ **createSubset**(): *[Subset](subset.md)*

*Defined in [types/fontkit.ts:333](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L333)*

Returns a Subset object for this font.

**Returns:** *[Subset](subset.md)*

___

###  getGlyph

▸ **getGlyph**(`glyphId`: number, `codePoints?`: number[]): *[Glyph](glyph.md)*

*Defined in [types/fontkit.ts:328](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L328)*

Returns a glyph object for the given glyph id. You can pass the array of
code points this glyph represents for your use later, and it will be
stored in the glyph object.

**Parameters:**

Name | Type |
------ | ------ |
`glyphId` | number |
`codePoints?` | number[] |

**Returns:** *[Glyph](glyph.md)*

___

###  glyphForCodePoint

▸ **glyphForCodePoint**(`codePoint`: number): *[Glyph](glyph.md)*

*Defined in [types/fontkit.ts:286](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L286)*

Maps a single unicode code point (number) to a Glyph object.
Does not perform any advanced substitutions (there is no context to do so).

**Parameters:**

Name | Type |
------ | ------ |
`codePoint` | number |

**Returns:** *[Glyph](glyph.md)*

___

###  glyphsForString

▸ **glyphsForString**(`str`: string): *[Glyph](glyph.md)[]*

*Defined in [types/fontkit.ts:300](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L300)*

This method returns an array of Glyph objects for the given string.
This is only a one-to-one mapping from characters to glyphs. For most uses,
you should use Font.layout, which provides a much more advanced mapping
supporting AAT and OpenType shaping.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[Glyph](glyph.md)[]*

___

###  hasGlyphForCodePoint

▸ **hasGlyphForCodePoint**(`codePoint`: number): *boolean*

*Defined in [types/fontkit.ts:292](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L292)*

Returns whether there is glyph in the font for the given
unicode code point.

**Parameters:**

Name | Type |
------ | ------ |
`codePoint` | number |

**Returns:** *boolean*

___

###  layout

▸ **layout**(`str`: string, `features?`: any[]): *[GlyphRun](glyphrun.md)*

*Defined in [types/fontkit.ts:319](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L319)*

This method returns a GlyphRun object, which includes an array of Glyphs
and GlyphPositions for the given string. Glyph objects are described below.
GlyphPosition objects include 4 properties: xAdvance, yAdvance, xOffset,
and yOffset.

The features parameter is an array of OpenType feature tags to be applied
in addition to the default set. If this is an AAT font, the OpenType
feature tags are mapped to AAT features.

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`features?` | any[] |

**Returns:** *[GlyphRun](glyphrun.md)*

___

###  widthOfGlyph

▸ **widthOfGlyph**(`glyphId`: number): *number*

*Defined in [types/fontkit.ts:307](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L307)*

Returns the advance width (described above) for a single glyph id.

**Parameters:**

Name | Type |
------ | ------ |
`glyphId` | number |

**Returns:** *number*