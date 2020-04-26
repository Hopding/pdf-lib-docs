---
id: "pdfembeddedpage"
title: "PDFEmbeddedPage"
sidebar_label: "PDFEmbeddedPage"
---

[pdf-lib](../index.md) › [PDFEmbeddedPage](pdfembeddedpage.md)

Represents a PDF page that has been embedded in a [PDFDocument](pdfdocument.md).

## Hierarchy

* **PDFEmbeddedPage**

## Implements

* [Embeddable](../interfaces/embeddable.md)

## Index

### Properties

* [doc](pdfembeddedpage.md#doc)
* [height](pdfembeddedpage.md#height)
* [ref](pdfembeddedpage.md#ref)
* [width](pdfembeddedpage.md#width)

### Methods

* [embed](pdfembeddedpage.md#embed)
* [scale](pdfembeddedpage.md#scale)
* [size](pdfembeddedpage.md#size)
* [of](pdfembeddedpage.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/PDFEmbeddedPage.ts:29](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L29)*

The document to which this embedded page belongs.

___

###  height

• **height**: *number*

*Defined in [api/PDFEmbeddedPage.ts:35](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L35)*

The height of this page in pixels.

___

###  ref

• **ref**: *PDFRef*

*Defined in [api/PDFEmbeddedPage.ts:26](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L26)*

The unique reference assigned to this embedded page within the document.

___

###  width

• **width**: *number*

*Defined in [api/PDFEmbeddedPage.ts:32](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L32)*

The width of this page in pixels.

## Methods

###  embed

▸ **embed**(): *Promise‹void›*

*Defined in [api/PDFEmbeddedPage.ts:98](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L98)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all embeddable pages get embedded.

Embed this embeddable page in its document.

**Returns:** *Promise‹void›*

Resolves when the embedding is complete.

___

###  scale

▸ **scale**(`factor`: number): *object*

*Defined in [api/PDFEmbeddedPage.ts:73](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L73)*

Compute the width and height of this page after being scaled by the
given `factor`. For example:
```js
embeddedPage.width  // => 500
embeddedPage.height // => 250

const scaled = embeddedPage.scale(0.5)
scaled.width  // => 250
scaled.height // => 125
```
This operation is often useful before drawing a page with
[PDFPage.drawPage](pdfpage.md#drawpage) to compute the `width` and `height` options.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factor` | number | The factor by which this page should be scaled. |

**Returns:** *object*

The width and height of the page after being scaled.

* **height**: *number* = this.height * factor

* **width**: *number* = this.width * factor

___

###  size

▸ **size**(): *object*

*Defined in [api/PDFEmbeddedPage.ts:85](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L85)*

Get the width and height of this page. For example:
```js
const { width, height } = embeddedPage.size()
```

**Returns:** *object*

The width and height of the page.

* **height**: *number* = this.height * factor

* **width**: *number* = this.width * factor

___

### `Static` of

▸ **of**(`ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md), `embedder`: PDFPageEmbedder): *[PDFEmbeddedPage](pdfembeddedpage.md)‹›*

*Defined in [api/PDFEmbeddedPage.ts:22](https://github.com/Hopding/pdf-lib/blob/e1fccea/src/api/PDFEmbeddedPage.ts#L22)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.embedPdf](pdfdocument.md#embedpdf) and
> [PDFDocument.embedPage](pdfdocument.md#embedpage) methods, which will create instances of
> [PDFEmbeddedPage](pdfembeddedpage.md) for you.

Create an instance of [PDFEmbeddedPage](pdfembeddedpage.md) from an existing ref and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | PDFRef | The unique reference for this embedded page. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the embedded page will belong. |
`embedder` | PDFPageEmbedder | The embedder that will be used to embed the page.  |

**Returns:** *[PDFEmbeddedPage](pdfembeddedpage.md)‹›*
