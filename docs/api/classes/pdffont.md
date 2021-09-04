---
id: "pdffont"
title: "PDFFont"
sidebar_label: "PDFFont"
---

[pdf-lib](../index.md) › [PDFFont](pdffont.md)

Represents a font that has been embedded in a [PDFDocument](pdfdocument.md).

## Hierarchy

* **PDFFont**

## Implements

* [Embeddable](../interfaces/embeddable.md)

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

*Defined in [api/PDFFont.ts:36](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L36)*

The document to which this font belongs.

___

###  name

• **name**: *string*

*Defined in [api/PDFFont.ts:39](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L39)*

The name of this font.

___

###  ref

• **ref**: *PDFRef*

*Defined in [api/PDFFont.ts:33](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L33)*

The unique reference assigned to this font within the document.

## Methods

###  embed

▸ **embed**(): *Promise‹void›*

*Defined in [api/PDFFont.ts:147](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L147)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all fonts get embedded.

Embed this font in its document.

**Returns:** *Promise‹void›*

Resolves when the embedding is complete.

___

###  encodeText

▸ **encodeText**(`text`: string): *PDFHexString*

*Defined in [api/PDFFont.ts:69](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L69)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFPage.drawText](pdfpage.md#drawtext) method will automatically encode the text it is
> given.

Encodes a string of text in this font.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text to be encoded. |

**Returns:** *PDFHexString*

The encoded text as a hex string.

___

###  getCharacterSet

▸ **getCharacterSet**(): *number[]*

*Defined in [api/PDFFont.ts:130](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L130)*

Get the set of unicode code points that can be represented by this font.

**Returns:** *number[]*

The set of unicode code points supported by this font.

___

###  heightAtSize

▸ **heightAtSize**(`size`: number, `options?`: undefined | object): *number*

*Defined in [api/PDFFont.ts:105](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L105)*

Measure the height of this font at a given size. For example:
```js
const height = font.heightAtSize(24)
```

The `options.descender` value controls whether or not the font's
descender is included in the height calculation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | The font size to be used for this measurement. |
`options?` | undefined &#124; object | The options to be used when computing this measurement. |

**Returns:** *number*

The height of this font at the given size.

___

###  sizeAtHeight

▸ **sizeAtHeight**(`height`: number): *number*

*Defined in [api/PDFFont.ts:121](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L121)*

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

*Defined in [api/PDFFont.ts:86](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L86)*

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

▸ **of**(`ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [FontEmbedder](../index.md#fontembedder)): *[PDFFont](pdffont.md)‹›*

*Defined in [api/PDFFont.ts:29](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFFont.ts#L29)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.embedFont](pdfdocument.md#embedfont) and
> [PDFDocument.embedStandardFont](pdfdocument.md#embedstandardfont) methods, which will create instances
> of [PDFFont](pdffont.md) for you.

Create an instance of [PDFFont](pdffont.md) from an existing ref and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | PDFRef | The unique reference for this font. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the font will belong. |
`embedder` | [FontEmbedder](../index.md#fontembedder) | The embedder that will be used to embed the font.  |

**Returns:** *[PDFFont](pdffont.md)‹›*
