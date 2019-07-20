---
id: pdffont
title: PDFFont
sidebar_label: PDFFont
---

[PDFFont](pdffont.md) /

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

*Defined in [api/PDFFont.ts:17](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L17)*

___

###  name

• **name**: *string*

*Defined in [api/PDFFont.ts:18](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L18)*

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [api/PDFFont.ts:16](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L16)*

## Methods

###  embed

▸ **embed**(): *`Promise<void>`*

*Defined in [api/PDFFont.ts:72](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L72)*

**Returns:** *`Promise<void>`*

___

###  encodeText

▸ **encodeText**(`text`: string): *`PDFHexString`*

*Defined in [api/PDFFont.ts:38](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`PDFHexString`*

___

###  getCharacterSet

▸ **getCharacterSet**(): *number[]*

*Defined in [api/PDFFont.ts:60](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L60)*

**Returns:** *number[]*

___

###  heightAtSize

▸ **heightAtSize**(`size`: number): *number*

*Defined in [api/PDFFont.ts:50](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *number*

___

###  sizeAtHeight

▸ **sizeAtHeight**(`height`: number): *number*

*Defined in [api/PDFFont.ts:55](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`height` | number |

**Returns:** *number*

___

###  widthOfTextAtSize

▸ **widthOfTextAtSize**(`text`: string, `size`: number): *number*

*Defined in [api/PDFFont.ts:44](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`size` | number |

**Returns:** *number*

___

### `Static` of

▸ **of**(`ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [FontEmbedder](../index.md#fontembedder)): *[PDFFont](pdffont.md)*

*Defined in [api/PDFFont.ts:13](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFFont.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | `PDFRef` |
`doc` | [PDFDocument](pdfdocument.md) |
`embedder` | [FontEmbedder](../index.md#fontembedder) |

**Returns:** *[PDFFont](pdffont.md)*