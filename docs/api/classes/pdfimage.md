---
id: pdfimage
title: PDFImage
sidebar_label: PDFImage
---

[PDFImage](pdfimage.md) /

Represents an image that has been embedded in a [PDFDocument](pdfdocument.md).

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

*Defined in [PDFImage.ts:29](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L29)*

The document to which this image belongs.

___

###  height

• **height**: *number*

*Defined in [PDFImage.ts:35](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L35)*

The height of this image in pixels.

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [PDFImage.ts:26](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L26)*

The unique reference assigned to this image within the document.

___

###  width

• **width**: *number*

*Defined in [PDFImage.ts:32](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L32)*

The width of this image in pixels.

## Methods

###  embed

▸ **embed**(): *`Promise<void>`*

*Defined in [PDFImage.ts:97](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L97)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all images get embedded.

Embed this image in its document.

**Returns:** *`Promise<void>`*

Resolves when the embedding is complete.

___

###  scale

▸ **scale**(`factor`: number): *object*

*Defined in [PDFImage.ts:72](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L72)*

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

___

###  size

▸ **size**(): *object*

*Defined in [PDFImage.ts:84](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L84)*

Get the width and height of this image. For example:
```js
const { width, height } = image.size()
```

**Returns:** *object*

The width and height of the image.

___

### `Static` of

▸ **of**(`ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md), `embedder`: [ImageEmbedder](../index.md#imageembedder)): *[PDFImage](pdfimage.md)*

*Defined in [PDFImage.ts:22](https://github.com/Hopding/pdf-lib/blob/17b4036/src/api/PDFImage.ts#L22)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.embedPng](pdfdocument.md#embedpng) and [PDFDocument.embedJpg](pdfdocument.md#embedjpg)
> methods, which will create instances of [PDFImage](pdfimage.md) for you.

Create an instance of [PDFImage](pdfimage.md) from an existing ref and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ref` | `PDFRef` | The unique reference for this image. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the image will belong. |
`embedder` | [ImageEmbedder](../index.md#imageembedder) | The embedder that will be used to embed the image.  |

**Returns:** *[PDFImage](pdfimage.md)*