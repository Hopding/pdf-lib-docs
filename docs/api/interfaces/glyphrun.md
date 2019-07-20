---
id: glyphrun
title: GlyphRun
sidebar_label: GlyphRun
---

[GlyphRun](glyphrun.md) /

Represents a run of Glyph and GlyphPosition objects.
Returned by the Font.layout method.

## Hierarchy

* **GlyphRun**

## Index

### Properties

* [advanceHeight](glyphrun.md#advanceheight)
* [advanceWidth](glyphrun.md#advancewidth)
* [bbox](glyphrun.md#bbox)
* [direction](glyphrun.md#direction)
* [features](glyphrun.md#features)
* [glyphs](glyphrun.md#glyphs)
* [language](glyphrun.md#language)
* [positions](glyphrun.md#positions)
* [script](glyphrun.md#script)

## Properties

###  advanceHeight

• **advanceHeight**: *number*

*Defined in [types/fontkit.ts:216](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L216)*

The total advance height of the run.

___

###  advanceWidth

• **advanceWidth**: *number*

*Defined in [types/fontkit.ts:211](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L211)*

The total advance width of the run.

___

###  bbox

• **bbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:221](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L221)*

The bounding box containing all glyphs in the run.

___

###  direction

• **direction**: *"ltr" | "rtl" | null*

*Defined in [types/fontkit.ts:200](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L200)*

The direction requested for shaping, as passed in (either ltr or rtl).
If `null`, the default direction of the script is used.

___

###  features

• **features**: *object*

*Defined in [types/fontkit.ts:206](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L206)*

The features requested during shaping. This is a combination of user
specified features and features chosen by the shaper.

___

###  glyphs

• **glyphs**: *[Glyph](glyph.md)[]*

*Defined in [types/fontkit.ts:178](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L178)*

An array of Glyph objects in the run

___

###  language

• **language**: *string | null*

*Defined in [types/fontkit.ts:194](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L194)*

The language requested for shaping, as passed in. If `null`, the default language for the
script was used.

___

###  positions

• **positions**: *[GlyphPosition](glyphposition.md)[]*

*Defined in [types/fontkit.ts:183](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L183)*

An array of GlyphPosition objects for each glyph in the run

___

###  script

• **script**: *string*

*Defined in [types/fontkit.ts:188](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L188)*

The script that was requested for shaping. This was either passed in or detected automatically.