---
id: pdfimage
title: PDFImage
sidebar_label: PDFImage
---

[PDFImage](pdfimage.md) /

## Hierarchy

* **PDFImage**

## Index

### Properties

* [doc](pdfimage.md#doc)
* [height](pdfimage.md#height)
* [ref](pdfimage.md#ref)
* [width](pdfimage.md#width)

### Methods

* [embed](pdfimage.md#embed)
* [scale](pdfimage.md#scale)
* [size](pdfimage.md#size)
* [of](pdfimage.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/PDFImage.ts:12](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L12)*

___

###  height

• **height**: *number*

*Defined in [api/PDFImage.ts:14](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L14)*

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [api/PDFImage.ts:11](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L11)*

___

###  width

• **width**: *number*

*Defined in [api/PDFImage.ts:13](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L13)*

## Methods

###  embed

▸ **embed**(): *`Promise<void>`*

*Defined in [api/PDFImage.ts:44](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L44)*

**Returns:** *`Promise<void>`*

___

###  scale

▸ **scale**(`factor`: number): *object*

*Defined in [api/PDFImage.ts:35](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`factor` | number |

**Returns:** *object*

* **height**: *number* =  this.height * factor

* **width**: *number* =  this.width * factor

___

###  size

▸ **size**(): *object*

*Defined in [api/PDFImage.ts:40](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L40)*

**Returns:** *object*

* **height**: *number* =  this.height * factor

* **width**: *number* =  this.width * factor

___

### `Static` of

▸ **of**(`ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [ImageEmbedder](../index.md#imageembedder)): *[PDFImage](pdfimage.md)*

*Defined in [api/PDFImage.ts:8](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFImage.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | `PDFRef` |
`doc` | [PDFDocument](pdfdocument.md) |
`embedder` | [ImageEmbedder](../index.md#imageembedder) |

**Returns:** *[PDFImage](pdfimage.md)*