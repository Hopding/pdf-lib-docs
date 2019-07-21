---
id: pdfdocument
title: PDFDocument
sidebar_label: PDFDocument
---

[PDFDocument](pdfdocument.md) /

Represents a PDF document.

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

*Defined in [PDFDocument.ts:115](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L115)*

___

###  context

• **context**: *`PDFContext`*

*Defined in [PDFDocument.ts:114](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L114)*

___

###  isEncrypted

• **isEncrypted**: *boolean*

*Defined in [PDFDocument.ts:116](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L116)*

## Methods

###  addPage

▸ **addPage**(`page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [PDFDocument.ts:167](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | [PDFPage](pdfpage.md) &#124; [number, number] |

**Returns:** *[PDFPage](pdfpage.md)*

___

###  copyPages

▸ **copyPages**(`srcDoc`: [PDFDocument](pdfdocument.md), `indices`: number[]): *`Promise<PDFPage[]>`*

*Defined in [PDFDocument.ts:196](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`srcDoc` | [PDFDocument](pdfdocument.md) |
`indices` | number[] |

**Returns:** *`Promise<PDFPage[]>`*

___

###  embedFont

▸ **embedFont**(`font`: [StandardFonts](../enums/standardfonts.md) | string | `Uint8Array` | `ArrayBuffer`, `options`: object): *`Promise<PDFFont>`*

*Defined in [PDFDocument.ts:212](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L212)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`font` | [StandardFonts](../enums/standardfonts.md) &#124; string &#124; `Uint8Array` &#124; `ArrayBuffer` | - |
`options` | object |  {} |

**Returns:** *`Promise<PDFFont>`*

___

###  embedJpg

▸ **embedJpg**(`jpg`: string | `Uint8Array` | `ArrayBuffer`): *`Promise<PDFImage>`*

*Defined in [PDFDocument.ts:258](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`jpg` | string &#124; `Uint8Array` &#124; `ArrayBuffer` |

**Returns:** *`Promise<PDFImage>`*

___

###  embedPng

▸ **embedPng**(`png`: string | `Uint8Array` | `ArrayBuffer`): *`Promise<PDFImage>`*

*Defined in [PDFDocument.ts:268](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`png` | string &#124; `Uint8Array` &#124; `ArrayBuffer` |

**Returns:** *`Promise<PDFImage>`*

___

###  embedStandardFont

▸ **embedStandardFont**(`font`: [StandardFonts](../enums/standardfonts.md)): *[PDFFont](pdffont.md)*

*Defined in [PDFDocument.ts:243](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`font` | [StandardFonts](../enums/standardfonts.md) |

**Returns:** *[PDFFont](pdffont.md)*

___

###  flush

▸ **flush**(): *`Promise<void>`*

*Defined in [PDFDocument.ts:278](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L278)*

**Returns:** *`Promise<void>`*

___

###  getPageCount

▸ **getPageCount**(): *number*

*Defined in [PDFDocument.ts:147](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L147)*

**Returns:** *number*

___

###  getPageIndices

▸ **getPageIndices**(): *number[]*

*Defined in [PDFDocument.ts:155](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L155)*

**Returns:** *number[]*

___

###  getPages

▸ **getPages**(): *[PDFPage](pdfpage.md)[]*

*Defined in [PDFDocument.ts:151](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L151)*

**Returns:** *[PDFPage](pdfpage.md)[]*

___

###  insertPage

▸ **insertPage**(`index`: number, `page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [PDFDocument.ts:174](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`page?` | [PDFPage](pdfpage.md) &#124; [number, number] |

**Returns:** *[PDFPage](pdfpage.md)*

___

###  registerFontkit

▸ **registerFontkit**(`fontkit`: `Fontkit`): *void*

*Defined in [PDFDocument.ts:143](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`fontkit` | `Fontkit` |

**Returns:** *void*

___

###  removePage

▸ **removePage**(`index`: number): *void*

*Defined in [PDFDocument.ts:159](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  save

▸ **save**(`options`: [SaveOptions](../interfaces/saveoptions.md)): *`Promise<Uint8Array>`*

*Defined in [PDFDocument.ts:292](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L292)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [SaveOptions](../interfaces/saveoptions.md) |  {} |

**Returns:** *`Promise<Uint8Array>`*

___

###  saveAsBase64

▸ **saveAsBase64**(`options`: [Base64SaveOptions](../interfaces/base64saveoptions.md)): *`Promise<string>`*

*Defined in [PDFDocument.ts:310](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L310)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Base64SaveOptions](../interfaces/base64saveoptions.md) |  {} |

**Returns:** *`Promise<string>`*

___

### `Static` create

▸ **create**(): *`Promise<PDFDocument>`*

*Defined in [PDFDocument.ts:105](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L105)*

**Returns:** *`Promise<PDFDocument>`*

___

### `Static` load

▸ **load**(`pdf`: string | `Uint8Array` | `ArrayBuffer`, `options`: [LoadOptions](../interfaces/loadoptions.md)): *`Promise<PDFDocument>`*

*Defined in [PDFDocument.ts:87](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFDocument.ts#L87)*

Load an existing [PDFDocument](pdfdocument.md). The input data can be provided in three
different formats:

| Type          | Contents                                               |
| ------------- | ------------------------------------------------------ |
| `string`      | A base64 encoded string (or data URI) containing a PDF |
| `Uint8Array`  | The raw bytes of a PDF                                 |
| `ArrayBuffer` | The raw bytes of a PDF                                 |

For example:
```js
import { PDFDocument } from 'pdf-lib'

const pdfDoc = PDFDocument.load('JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc0MjCwUjE4WQNC4Q6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQztFEKyuEK0uFxDuAAOERdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoIDIxNQo+PgpzdHJlYW0KeJxVj9GqwjAMhu/zFHkBzTo3nCCCiiKIHPEICuJF3cKoSCu2E8/b20wPIr1p8v9/8kVhgilmGfawX2CGaVrgcAi0/bsy0lrX7IGWpvJ4iJYEN3gEmrrGBlQwGsHHO9VBX1wNrxAqMX87RBD5xpJuddqwd82tjAHxzV1U5LPgy52DKXWnr1Lheg+j/c/pzGVriqV0VlwZPXGPCJjElw/ybkwUmeoWgxesDXGhHJC/D/iikp1Av80ptKU0FdBEe25pPihAM1u6ytgaaWfs2Hrz35CJT1+EWmAKZW5kc3RyZWFtCmVuZG9iagoKNyAwIG9iago8PAovU2l6ZSA4Ci9Sb290IDIgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9UeXBlIC9YUmVmCi9MZW5ndGggMzgKL1cgWyAxIDIgMiBdCi9JbmRleCBbIDAgOCBdCj4+CnN0cmVhbQp4nBXEwREAEBAEsCwz3vrvRmOOyyOoGhZdutHN2MT55fIAVocD+AplbmRzdHJlYW0KZW5kb2JqCgpzdGFydHhyZWYKNTEwCiUlRU9G')
const pdfDoc = PDFDocument.load('data:application/pdf;base64,JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbmd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc2NzQwUjE4WQNC4Q6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQztFEKyuEK0uFxDuAAOGhdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoIDIxNwo+PgpzdHJlYW0KeJxVT9tqwkAQfZ+vmB+ok40JiSBClZZCKRUVLIgPazKELbJb3E1p/96ZqIjsy865zJxjMMMciwLHWNVYYJ7XOJ0Cbf5/GGlpO45A766NuBNJhivcAy1C7xMamM3grl3YZI+hg4sJjYofFUoofWJ1DzytOIb+1IhBda9BGP288fGXk2vsUzWujOS6LqOvz8M3N4NIRkU+uHV2Hv4kYCavnJQj6VAXZlRPLmF9koNaoLwWeEilN4HW/SENo4IGaG4jD2nuUYBefBNa5zukrfPPProboBvPX41aYAplbmRzdHJlYW0KZW5kb2JqCgo3IDAgb2JqCjw8Ci9TaXplIDgKL1Jvb3QgMiAwIFIKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL1R5cGUgL1hSZWYKL0xlbmd0aCAzNwovVyBbIDEgMiAyIF0KL0luZGV4IFsgMCA4IF0KPj4Kc3RyZWFtCnicFcixDQAwCAMwQ6XO/f+bXgbK4sGYaZdQocMpj/IlWVORAvsKZW5kc3RyZWFtCmVuZG9iagoKc3RhcnR4cmVmCjUxMgolJUVPRg==')
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pdf` | string &#124; `Uint8Array` &#124; `ArrayBuffer` | - | The input data containing a PDF document. |
`options` | [LoadOptions](../interfaces/loadoptions.md) |  {} | The options to be used when loading the document. |

**Returns:** *`Promise<PDFDocument>`*

The document loaded from the input.