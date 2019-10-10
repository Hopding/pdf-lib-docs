---
id: pdffont
title: PDFFont
sidebar_label: PDFFont
---

[PDFFont](pdffont.md) /

Represents a font that has been embedded in a [PDFDocument](pdfdocument.md).

## Hierarchy

* **PDFFont**

## Index

### Properties

* [doc](pdffont.md#doc)
* [name](pdffont.md#name)
* [ref](pdffont.md#ref)

### Methods

* [embed](pdffont.md#embed)
* [encodeText](pdffont.md#encodetext)
* [getCharacterSet](pdffont.md#getcharacterset)
* [heightAtSize](pdffont.md#heightatsize)
* [sizeAtHeight](pdffont.md#sizeatheight)
* [widthOfTextAtSize](pdffont.md#widthoftextatsize)
* [of](pdffont.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [PDFFont.ts:35](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L35)*

The document to which this font belongs.

___

###  name

• **name**: *string*

*Defined in [PDFFont.ts:38](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L38)*

The name of this font.

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [PDFFont.ts:32](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L32)*

The unique reference assigned to this font within the document.

## Methods

###  embed

▸ **embed**(): *`Promise<void>`*

*Defined in [PDFFont.ts:141](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L141)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all fonts get embedded.

Embed this font in its document.

**Returns:** *`Promise<void>`*

Resolves when the embedding is complete.

___

###  encodeText

▸ **encodeText**(`text`: string): *`PDFHexString`*

*Defined in [PDFFont.ts:68](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L68)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFPage.drawText](pdfpage.md#drawtext) method will automatically encode the text it is
> given.

Encodes a string of text in this font.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text to be encoded. |

**Returns:** *`PDFHexString`*

The encoded text as a hex string.

___

###  getCharacterSet

▸ **getCharacterSet**(): *number[]*

*Defined in [PDFFont.ts:121](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L121)*

Get the set of unicode code points that can be represented by this font.

**Returns:** *number[]*

The set of unicode code points supported by this font.

___

###  heightAtSize

▸ **heightAtSize**(`size`: number): *number*

*Defined in [PDFFont.ts:99](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L99)*

Measure the height of this font at a given size. For example:
```js
const height = font.heightAtSize(24)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | The font size to be used for this measurement. |

**Returns:** *number*

The height of this font at the given size.

___

###  sizeAtHeight

▸ **sizeAtHeight**(`height`: number): *number*

*Defined in [PDFFont.ts:112](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L112)*

Compute the font size at which this font is a given height. For example:
```js
const fontSize = font.sizeAtHeight(12)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`height` | number | The height to be used for this calculation. |

**Returns:** *number*

The font size at which this font is the given height.

___

###  widthOfTextAtSize

▸ **widthOfTextAtSize**(`text`: string, `size`: number): *number*

*Defined in [PDFFont.ts:85](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L85)*

Measure the width of a string of text drawn in this font at a given size.
For example:
```js
const width = font.widthOfTextAtSize('Foo Bar Qux Baz', 36)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The string of text to be measured. |
`size` | number | The font size to be used for this measurement. |

**Returns:** *number*

The width of the string of text when drawn in this font at the
         given size.

___

### `Static` of

▸ **of**(`ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [FontEmbedder](../index.md#fontembedder)): *[PDFFont](pdffont.md)*

*Defined in [PDFFont.ts:28](https://github.com/Hopding/pdf-lib/blob/f17521b/src/api/PDFFont.ts#L28)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.embedFont](pdfdocument.md#embedfont) and
> [PDFDocument.embedStandardFont](pdfdocument.md#embedstandardfont) methods, which will create instances
> of [PDFFont](pdffont.md) for you.

Create an instance of [PDFFont](pdffont.md) from an existing ref and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | `PDFRef` | The unique reference for this font. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the font will belong. |
`embedder` | [FontEmbedder](../index.md#fontembedder) | The embedder that will be used to embed the font.  |

**Returns:** *[PDFFont](pdffont.md)*