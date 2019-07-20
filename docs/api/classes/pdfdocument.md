---
id: pdfdocument
title: PDFDocument
sidebar_label: PDFDocument
---

[PDFDocument](pdfdocument.md) /

## Hierarchy

* **PDFDocument**

## Index

### Properties

* [catalog](pdfdocument.md#catalog)
* [context](pdfdocument.md#context)
* [isEncrypted](pdfdocument.md#isencrypted)

### Methods

* [addPage](pdfdocument.md#addpage)
* [copyPages](pdfdocument.md#copypages)
* [embedFont](pdfdocument.md#embedfont)
* [embedJpg](pdfdocument.md#embedjpg)
* [embedPng](pdfdocument.md#embedpng)
* [embedStandardFont](pdfdocument.md#embedstandardfont)
* [flush](pdfdocument.md#flush)
* [getPageCount](pdfdocument.md#getpagecount)
* [getPageIndices](pdfdocument.md#getpageindices)
* [getPages](pdfdocument.md#getpages)
* [insertPage](pdfdocument.md#insertpage)
* [registerFontkit](pdfdocument.md#registerfontkit)
* [removePage](pdfdocument.md#removepage)
* [save](pdfdocument.md#save)
* [saveAsBase64](pdfdocument.md#saveasbase64)
* [create](pdfdocument.md#static-create)
* [load](pdfdocument.md#static-load)

## Properties

###  catalog

• **catalog**: *`PDFCatalog`*

*Defined in [api/PDFDocument.ts:88](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L88)*

___

###  context

• **context**: *`PDFContext`*

*Defined in [api/PDFDocument.ts:87](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L87)*

___

###  isEncrypted

• **isEncrypted**: *boolean*

*Defined in [api/PDFDocument.ts:89](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L89)*

## Methods

###  addPage

▸ **addPage**(`page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFDocument.ts:140](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | [PDFPage](pdfpage.md) \| [number, number] |

**Returns:** *[PDFPage](pdfpage.md)*

___

###  copyPages

▸ **copyPages**(`srcDoc`: [PDFDocument](pdfdocument.md), `indices`: number[]): *`Promise<PDFPage[]>`*

*Defined in [api/PDFDocument.ts:169](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`srcDoc` | [PDFDocument](pdfdocument.md) |
`indices` | number[] |

**Returns:** *`Promise<PDFPage[]>`*

___

###  embedFont

▸ **embedFont**(`font`: `StandardFonts` | string | `Uint8Array` | `ArrayBuffer`, `options`: object): *`Promise<PDFFont>`*

*Defined in [api/PDFDocument.ts:185](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L185)*

**Parameters:**

▪ **font**: *`StandardFonts` | string | `Uint8Array` | `ArrayBuffer`*

▪`Default value`  **options**: *object*=  {}

Name | Type |
------ | ------ |
`subset?` | undefined \| false \| true |

**Returns:** *`Promise<PDFFont>`*

___

###  embedJpg

▸ **embedJpg**(`jpg`: string | `Uint8Array` | `ArrayBuffer`): *`Promise<PDFImage>`*

*Defined in [api/PDFDocument.ts:228](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`jpg` | string \| `Uint8Array` \| `ArrayBuffer` |

**Returns:** *`Promise<PDFImage>`*

___

###  embedPng

▸ **embedPng**(`png`: string | `Uint8Array` | `ArrayBuffer`): *`Promise<PDFImage>`*

*Defined in [api/PDFDocument.ts:238](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`png` | string \| `Uint8Array` \| `ArrayBuffer` |

**Returns:** *`Promise<PDFImage>`*

___

###  embedStandardFont

▸ **embedStandardFont**(`font`: `StandardFonts`): *[PDFFont](pdffont.md)*

*Defined in [api/PDFDocument.ts:216](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L216)*

**Parameters:**

Name | Type |
------ | ------ |
`font` | `StandardFonts` |

**Returns:** *[PDFFont](pdffont.md)*

___

###  flush

▸ **flush**(): *`Promise<void>`*

*Defined in [api/PDFDocument.ts:248](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L248)*

**Returns:** *`Promise<void>`*

___

###  getPageCount

▸ **getPageCount**(): *number*

*Defined in [api/PDFDocument.ts:120](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L120)*

**Returns:** *number*

___

###  getPageIndices

▸ **getPageIndices**(): *number[]*

*Defined in [api/PDFDocument.ts:128](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L128)*

**Returns:** *number[]*

___

###  getPages

▸ **getPages**(): *[PDFPage](pdfpage.md)[]*

*Defined in [api/PDFDocument.ts:124](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L124)*

**Returns:** *[PDFPage](pdfpage.md)[]*

___

###  insertPage

▸ **insertPage**(`index`: number, `page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFDocument.ts:147](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`page?` | [PDFPage](pdfpage.md) \| [number, number] |

**Returns:** *[PDFPage](pdfpage.md)*

___

###  registerFontkit

▸ **registerFontkit**(`fontkit`: [Fontkit](../interfaces/fontkit.md)): *void*

*Defined in [api/PDFDocument.ts:116](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`fontkit` | [Fontkit](../interfaces/fontkit.md) |

**Returns:** *void*

___

###  removePage

▸ **removePage**(`index`: number): *void*

*Defined in [api/PDFDocument.ts:132](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  save

▸ **save**(`options`: [SaveOptions](../interfaces/saveoptions.md)): *`Promise<Uint8Array>`*

*Defined in [api/PDFDocument.ts:262](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L262)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [SaveOptions](../interfaces/saveoptions.md) |  {} |

**Returns:** *`Promise<Uint8Array>`*

___

###  saveAsBase64

▸ **saveAsBase64**(`options`: [Base64SaveOptions](../interfaces/base64saveoptions.md)): *`Promise<string>`*

*Defined in [api/PDFDocument.ts:280](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L280)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Base64SaveOptions](../interfaces/base64saveoptions.md) |  {} |

**Returns:** *`Promise<string>`*

___

### `Static` create

▸ **create**(): *`Promise<PDFDocument>`*

*Defined in [api/PDFDocument.ts:78](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L78)*

**Returns:** *`Promise<PDFDocument>`*

___

### `Static` load

▸ **load**(`pdf`: string | `Uint8Array` | `ArrayBuffer`, `options`: object): *`Promise<PDFDocument>`*

*Defined in [api/PDFDocument.ts:57](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFDocument.ts#L57)*

**Parameters:**

▪ **pdf**: *string | `Uint8Array` | `ArrayBuffer`*

▪`Default value`  **options**: *object*=  {}

Name | Type |
------ | ------ |
`ignoreEncryption?` | undefined \| false \| true |
`parseSpeed?` | [ParseSpeeds](../enums/parsespeeds.md) \| number |

**Returns:** *`Promise<PDFDocument>`*