---
id: "pdfembeddedfile"
title: "PDFEmbeddedFile"
sidebar_label: "PDFEmbeddedFile"
---

[pdf-lib](../index.md) › [PDFEmbeddedFile](pdfembeddedfile.md)

## Hierarchy

* **PDFEmbeddedFile**

## Implements

* [Embeddable](../interfaces/embeddable.md)

## Index

### Properties

* [doc](pdfembeddedfile.md#doc)
* [ref](pdfembeddedfile.md#ref)

### Methods

* [embed](pdfembeddedfile.md#embed)
* [of](pdfembeddedfile.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/PDFEmbeddedFile.ts:14](https://github.com/Hopding/pdf-lib/blob/6ac676a/src/api/PDFEmbeddedFile.ts#L14)*

The document to which this embedded file belongs.

___

###  ref

• **ref**: *PDFRef*

*Defined in [api/PDFEmbeddedFile.ts:11](https://github.com/Hopding/pdf-lib/blob/6ac676a/src/api/PDFEmbeddedFile.ts#L11)*

The unique reference assigned to this embedded file within the document.

## Methods

###  embed

▸ **embed**(): *Promise‹void›*

*Defined in [api/PDFEmbeddedFile.ts:34](https://github.com/Hopding/pdf-lib/blob/6ac676a/src/api/PDFEmbeddedFile.ts#L34)*

> **NOTE:** You probably don't need to call this method directly. The
> [PDFDocument.save](pdfdocument.md#save) and [PDFDocument.saveAsBase64](pdfdocument.md#saveasbase64) methods will
> automatically ensure all embeddable files get embedded.

Embed this embeddable file in its document.

**Returns:** *Promise‹void›*

Resolves when the embedding is complete.

___

### `Static` of

▸ **of**(`ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md), `embedder`: FileEmbedder): *[PDFEmbeddedFile](pdfembeddedfile.md)‹›*

*Defined in [api/PDFEmbeddedFile.ts:7](https://github.com/Hopding/pdf-lib/blob/6ac676a/src/api/PDFEmbeddedFile.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | PDFRef |
`doc` | [PDFDocument](pdfdocument.md) |
`embedder` | FileEmbedder |

**Returns:** *[PDFEmbeddedFile](pdfembeddedfile.md)‹›*
