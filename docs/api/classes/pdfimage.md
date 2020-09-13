---
id: "pdfimage"
title: "PDFImage"
sidebar_label: "PDFImage"
---

[pdf-lib](../index.md) › [PDFImage](pdfimage.md)

Represents an image that has been embedded in a [PDFDocument](pdfdocument.md).

## Hierarchy

* **PDFImage**

## Implements

* [Embeddable](../interfaces/embeddable.md)

## Index

### Properties

* [doc](pdfimage.md#doc)
* [height](pdfimage.md#height)
* [ref](pdfimage.md#ref)
* [width](pdfimage.md#width)

### Methods

* [embed](pdfimage.md#embed)
* [scale](pdfimage.md#scale)
* [scaleToFit](pdfimage.md#scaletofit)
* [size](pdfimage.md#size)
* [of](pdfimage.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/PDFImage.ts:30](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L30)*

The document to which this image belongs.

___

###  height

• **height**: *number*

*Defined in [api/PDFImage.ts:36](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L36)*

The height of this image in pixels.

___

###  ref

• **ref**: *PDFRef*

*Defined in [api/PDFImage.ts:27](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L27)*

The unique reference assigned to this image within the document.

___

###  width

• **width**: *number*

*Defined in [api/PDFImage.ts:33](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L33)*

The width of this image in pixels.

## Methods

###  embed

▸ **embed**(): *Promise‹void›*

*Defined in [api/PDFImage.ts:127](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L127)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all images get embedded.

Embed this image in its document.

**Returns:** *Promise‹void›*

Resolves when the embedding is complete.

___

###  scale

▸ **scale**(`factor`: number): *object*

*Defined in [api/PDFImage.ts:73](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L73)*

Compute the width and height of this image after being scaled by the
given `factor`. For example:
```js
image.width  // => 500
image.height // => 250

const scaled = image.scale(0.5)
scaled.width  // => 250
scaled.height // => 125
```
This operation is often useful before drawing an image with
[PDFPage.drawImage](pdfpage.md#drawimage) to compute the `width` and `height` options.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factor` | number | The factor by which this image should be scaled. |

**Returns:** *object*

The width and height of the image after being scaled.

* **height**: *number* = this.height * factor

* **width**: *number* = this.width * factor

___

###  scaleToFit

▸ **scaleToFit**(`width`: number, `height`: number): *object*

*Defined in [api/PDFImage.ts:96](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L96)*

Get the width and height of this image after scaling it as large as
possible while maintaining its aspect ratio and not exceeding the
specified `width` and `height`. For example:
```
image.width  // => 500
image.height // => 250

const scaled = image.scaleToFit(750, 1000)
scaled.width  // => 750
scaled.height // => 375
```
The `width` and `height` parameters can also be thought of as the width
and height of a box that the scaled image must fit within.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | The bounding box's width. |
`height` | number | The bounding box's height. |

**Returns:** *object*

The width and height of the image after being scaled.

* **height**: *number* = this.height * factor

* **width**: *number* = this.width * factor

___

###  size

▸ **size**(): *object*

*Defined in [api/PDFImage.ts:114](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L114)*

Get the width and height of this image. For example:
```js
const { width, height } = image.size()
```

**Returns:** *object*

The width and height of the image.

* **height**: *number* = this.height * factor

* **width**: *number* = this.width * factor

___

### `Static` of

▸ **of**(`ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [ImageEmbedder](../index.md#imageembedder)): *[PDFImage](pdfimage.md)‹›*

*Defined in [api/PDFImage.ts:23](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/PDFImage.ts#L23)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.embedPng](pdfdocument.md#embedpng) and [PDFDocument.embedJpg](pdfdocument.md#embedjpg)
> methods, which will create instances of [PDFImage](pdfimage.md) for you.

Create an instance of [PDFImage](pdfimage.md) from an existing ref and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | PDFRef | The unique reference for this image. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the image will belong. |
`embedder` | [ImageEmbedder](../index.md#imageembedder) | The embedder that will be used to embed the image.  |

**Returns:** *[PDFImage](pdfimage.md)‹›*
