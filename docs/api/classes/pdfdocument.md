---
id: "pdfdocument"
title: "PDFDocument"
sidebar_label: "PDFDocument"
---

[pdf-lib](../index.md) › [PDFDocument](pdfdocument.md)

Represents a PDF document.

## Hierarchy

* **PDFDocument**

## Index

### Properties

* [catalog](pdfdocument.md#catalog)
* [context](pdfdocument.md#context)
* [defaultWordBreaks](pdfdocument.md#defaultwordbreaks)
* [isEncrypted](pdfdocument.md#isencrypted)

### Methods

* [addJavaScript](pdfdocument.md#addjavascript)
* [addPage](pdfdocument.md#addpage)
* [attach](pdfdocument.md#attach)
* [copyPages](pdfdocument.md#copypages)
* [embedFont](pdfdocument.md#embedfont)
* [embedJpg](pdfdocument.md#embedjpg)
* [embedPage](pdfdocument.md#embedpage)
* [embedPages](pdfdocument.md#embedpages)
* [embedPdf](pdfdocument.md#embedpdf)
* [embedPng](pdfdocument.md#embedpng)
* [embedStandardFont](pdfdocument.md#embedstandardfont)
* [findPageForAnnotationRef](pdfdocument.md#findpageforannotationref)
* [flush](pdfdocument.md#flush)
* [getAuthor](pdfdocument.md#getauthor)
* [getCreationDate](pdfdocument.md#getcreationdate)
* [getCreator](pdfdocument.md#getcreator)
* [getForm](pdfdocument.md#getform)
* [getKeywords](pdfdocument.md#getkeywords)
* [getModificationDate](pdfdocument.md#getmodificationdate)
* [getPage](pdfdocument.md#getpage)
* [getPageCount](pdfdocument.md#getpagecount)
* [getPageIndices](pdfdocument.md#getpageindices)
* [getPages](pdfdocument.md#getpages)
* [getProducer](pdfdocument.md#getproducer)
* [getSubject](pdfdocument.md#getsubject)
* [getTitle](pdfdocument.md#gettitle)
* [insertPage](pdfdocument.md#insertpage)
* [registerFontkit](pdfdocument.md#registerfontkit)
* [removePage](pdfdocument.md#removepage)
* [save](pdfdocument.md#save)
* [saveAsBase64](pdfdocument.md#saveasbase64)
* [setAuthor](pdfdocument.md#setauthor)
* [setCreationDate](pdfdocument.md#setcreationdate)
* [setCreator](pdfdocument.md#setcreator)
* [setKeywords](pdfdocument.md#setkeywords)
* [setLanguage](pdfdocument.md#setlanguage)
* [setModificationDate](pdfdocument.md#setmodificationdate)
* [setProducer](pdfdocument.md#setproducer)
* [setSubject](pdfdocument.md#setsubject)
* [setTitle](pdfdocument.md#settitle)
* [create](pdfdocument.md#static-create)
* [load](pdfdocument.md#static-load)

## Properties

###  catalog

• **catalog**: *PDFCatalog*

*Defined in [api/PDFDocument.ts:173](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L173)*

The catalog of this document.

___

###  context

• **context**: *PDFContext*

*Defined in [api/PDFDocument.ts:170](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L170)*

The low-level context of this document.

___

###  defaultWordBreaks

• **defaultWordBreaks**: *string[]* = [' ']

*Defined in [api/PDFDocument.ts:179](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L179)*

The default word breaks used in PDFPage.drawText

___

###  isEncrypted

• **isEncrypted**: *boolean*

*Defined in [api/PDFDocument.ts:176](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L176)*

Whether or not this document is encrypted.

## Methods

###  addJavaScript

▸ **addJavaScript**(`name`: string, `script`: string): *void*

*Defined in [api/PDFDocument.ts:762](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L762)*

Add JavaScript to this document. The supplied `script` is executed when the
document is opened. The `script` can be used to perform some operation
when the document is opened (e.g. logging to the console), or it can be
used to define a function that can be referenced later in a JavaScript
action. For example:
```js
// Show "Hello World!" in the console when the PDF is opened
pdfDoc.addJavaScript(
  'main',
  'console.show(); console.println("Hello World!");'
);

// Define a function named "foo" that can be called in JavaScript Actions
pdfDoc.addJavaScript(
  'foo',
  'function foo() { return "foo"; }'
);
```
See the [JavaScript for Acrobat API Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)
for details.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the script. Must be unique per document. |
`script` | string | The JavaScript to execute.  |

**Returns:** *void*

___

###  addPage

▸ **addPage**(`page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFDocument.ts:644](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L644)*

Add a page to the end of this document. This method accepts three
different value types for the `page` parameter:

| Type               | Behavior                                                                            |
| ------------------ | ----------------------------------------------------------------------------------- |
| `undefined`        | Create a new page and add it to the end of this document                            |
| `[number, number]` | Create a new page with the given dimensions and add it to the end of this document  |
| `PDFPage`          | Add the existing page to the end of this document                                   |

For example:
```js
// page=undefined
const newPage = pdfDoc.addPage()

// page=[number, number]
import { PageSizes } from 'pdf-lib'
const newPage1 = pdfDoc.addPage(PageSizes.A7)
const newPage2 = pdfDoc.addPage(PageSizes.Letter)
const newPage3 = pdfDoc.addPage([500, 750])

// page=PDFPage
const pdfDoc1 = await PDFDocument.create()
const pdfDoc2 = await PDFDocument.load(...)
const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
pdfDoc1.addPage(existingPage)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page?` | [PDFPage](pdfpage.md) &#124; [number, number] | Optionally, the desired dimensions or existing page. |

**Returns:** *[PDFPage](pdfpage.md)*

The newly created (or existing) page.

___

###  attach

▸ **attach**(`attachment`: string | Uint8Array | ArrayBuffer, `name`: string, `options`: [AttachmentOptions](../interfaces/attachmentoptions.md)): *Promise‹void›*

*Defined in [api/PDFDocument.ts:828](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L828)*

Add an attachment to this document. Attachments are visible in the
"Attachments" panel of Adobe Acrobat and some other PDF readers. Any
type of file can be added as an attachment. This includes, but is not
limited to, `.png`, `.jpg`, `.pdf`, `.csv`, `.docx`, and `.xlsx` files.

The input data can be provided in multiple formats:

| Type          | Contents                                                       |
| ------------- | -------------------------------------------------------------- |
| `string`      | A base64 encoded string (or data URI) containing an attachment |
| `Uint8Array`  | The raw bytes of an attachment                                 |
| `ArrayBuffer` | The raw bytes of an attachment                                 |

For example:
```js
// attachment=string
await pdfDoc.attach('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...', 'cat_riding_unicorn.jpg', {
  mimeType: 'image/jpeg',
  description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
  creationDate: new Date('2019/12/01'),
  modificationDate: new Date('2020/04/19'),
})
await pdfDoc.attach('data:image/jpeg;base64,/9j/4AAQ...', 'cat_riding_unicorn.jpg', {
  mimeType: 'image/jpeg',
  description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
  creationDate: new Date('2019/12/01'),
  modificationDate: new Date('2020/04/19'),
})

// attachment=Uint8Array
import fs from 'fs'
const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
await pdfDoc.attach(uint8Array, 'cat_riding_unicorn.jpg', {
  mimeType: 'image/jpeg',
  description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
  creationDate: new Date('2019/12/01'),
  modificationDate: new Date('2020/04/19'),
})

// attachment=ArrayBuffer
const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
await pdfDoc.attach(arrayBuffer, 'cat_riding_unicorn.jpg', {
  mimeType: 'image/jpeg',
  description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
  creationDate: new Date('2019/12/01'),
  modificationDate: new Date('2020/04/19'),
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`attachment` | string &#124; Uint8Array &#124; ArrayBuffer | - | The input data containing the file to be attached. |
`name` | string | - | The name of the file to be attached. |
`options` | [AttachmentOptions](../interfaces/attachmentoptions.md) | {} | - |

**Returns:** *Promise‹void›*

Resolves when the attachment is complete.

___

###  copyPages

▸ **copyPages**(`srcDoc`: [PDFDocument](pdfdocument.md), `indices`: number[]): *Promise‹[PDFPage](pdfpage.md)[]›*

*Defined in [api/PDFDocument.ts:722](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L722)*

Copy pages from a source document into this document. Allows pages to be
copied between different [PDFDocument](pdfdocument.md) instances. For example:
```js
const pdfDoc = await PDFDocument.create()
const srcDoc = await PDFDocument.load(...)

const copiedPages = await pdfDoc.copyPages(srcDoc, [0, 3, 89])
const [firstPage, fourthPage, ninetiethPage] = copiedPages;

pdfDoc.addPage(fourthPage)
pdfDoc.insertPage(0, ninetiethPage)
pdfDoc.addPage(firstPage)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`srcDoc` | [PDFDocument](pdfdocument.md) | The document from which pages should be copied. |
`indices` | number[] | The indices of the pages that should be copied. |

**Returns:** *Promise‹[PDFPage](pdfpage.md)[]›*

Resolves with an array of pages copied into this document.

___

###  embedFont

▸ **embedFont**(`font`: [StandardFonts](../enums/standardfonts.md) | string | Uint8Array | ArrayBuffer, `options`: [EmbedFontOptions](../interfaces/embedfontoptions.md)): *Promise‹[PDFFont](pdffont.md)›*

*Defined in [api/PDFDocument.ts:890](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L890)*

Embed a font into this document. The input data can be provided in multiple
formats:

| Type            | Contents                                                |
| --------------- | ------------------------------------------------------- |
| `StandardFonts` | One of the standard 14 fonts                            |
| `string`        | A base64 encoded string (or data URI) containing a font |
| `Uint8Array`    | The raw bytes of a font                                 |
| `ArrayBuffer`   | The raw bytes of a font                                 |

For example:
```js
// font=StandardFonts
import { StandardFonts } from 'pdf-lib'
const font1 = await pdfDoc.embedFont(StandardFonts.Helvetica)

// font=string
const font2 = await pdfDoc.embedFont('AAEAAAAVAQAABABQRFNJRx/upe...')
const font3 = await pdfDoc.embedFont('data:font/opentype;base64,AAEAAA...')

// font=Uint8Array
import fs from 'fs'
const font4 = await pdfDoc.embedFont(fs.readFileSync('Ubuntu-R.ttf'))

// font=ArrayBuffer
const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
const ubuntuBytes = await fetch(url).then(res => res.arrayBuffer())
const font5 = await pdfDoc.embedFont(ubuntuBytes)
```
See also: [registerFontkit](pdfdocument.md#registerfontkit)

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`font` | [StandardFonts](../enums/standardfonts.md) &#124; string &#124; Uint8Array &#124; ArrayBuffer | - | The input data for a font. |
`options` | [EmbedFontOptions](../interfaces/embedfontoptions.md) | {} | The options to be used when embedding the font. |

**Returns:** *Promise‹[PDFFont](pdffont.md)›*

Resolves with the embedded font.

___

###  embedJpg

▸ **embedJpg**(`jpg`: string | Uint8Array | ArrayBuffer): *Promise‹[PDFImage](pdfimage.md)›*

*Defined in [api/PDFDocument.ts:982](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L982)*

Embed a JPEG image into this document. The input data can be provided in
multiple formats:

| Type          | Contents                                                      |
| ------------- | ------------------------------------------------------------- |
| `string`      | A base64 encoded string (or data URI) containing a JPEG image |
| `Uint8Array`  | The raw bytes of a JPEG image                                 |
| `ArrayBuffer` | The raw bytes of a JPEG image                                 |

For example:
```js
// jpg=string
const image1 = await pdfDoc.embedJpg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...')
const image2 = await pdfDoc.embedJpg('data:image/jpeg;base64,/9j/4AAQ...')

// jpg=Uint8Array
import fs from 'fs'
const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
const image3 = await pdfDoc.embedJpg(uint8Array)

// jpg=ArrayBuffer
const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
const image4 = await pdfDoc.embedJpg(arrayBuffer)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jpg` | string &#124; Uint8Array &#124; ArrayBuffer | The input data for a JPEG image. |

**Returns:** *Promise‹[PDFImage](pdfimage.md)›*

Resolves with the embedded image.

___

###  embedPage

▸ **embedPage**(`page`: [PDFPage](pdfpage.md), `boundingBox?`: PageBoundingBox, `transformationMatrix?`: [TransformationMatrix](../index.md#transformationmatrix)): *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)›*

*Defined in [api/PDFDocument.ts:1104](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1104)*

Embed a single PDF page into this document.

For example:
```js
const pdfDoc = await PDFDocument.create()

const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
const sourcePdfPage = sourcePdfDoc.getPages()[73]

const embeddedPage = await pdfDoc.embedPage(
  sourcePdfPage,

  // Clip a section of the source page so that we only embed part of it
  { left: 100, right: 450, bottom: 330, top: 570 },

  // Translate all drawings of the embedded page by (10, 200) units
  [1, 0, 0, 1, 10, 200],
)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page` | [PDFPage](pdfpage.md) | The page to be embedded. |
`boundingBox?` | PageBoundingBox |  Optionally, an area of the source page that should be embedded (defaults to entire page). |
`transformationMatrix?` | [TransformationMatrix](../index.md#transformationmatrix) |  Optionally, a transformation matrix that is always applied to the embedded page anywhere it is drawn. |

**Returns:** *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)›*

Resolves with the embedded pdf page.

___

###  embedPages

▸ **embedPages**(`pages`: [PDFPage](pdfpage.md)[], `boundingBoxes`: undefined | PageBoundingBox[], `transformationMatrices`: undefined | [number, number, number, number, number, number][]): *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)‹›[]›*

*Defined in [api/PDFDocument.ts:1146](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1146)*

Embed one or more PDF pages into this document.

For example:
```js
const pdfDoc = await PDFDocument.create()

const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
const sourcePdfDoc = await PDFDocument.load(sourceBuffer)

const page1 = sourcePdfDoc.getPages()[0]
const page2 = sourcePdfDoc.getPages()[52]
const page3 = sourcePdfDoc.getPages()[73]

const embeddedPages = await pdfDoc.embedPages([page1, page2, page3])
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pages` | [PDFPage](pdfpage.md)[] | - | - |
`boundingBoxes` | undefined &#124; PageBoundingBox[] | [] |  Optionally, an array of clipping boundaries - one for each page (defaults to entirety of each page). |
`transformationMatrices` | undefined &#124; [number, number, number, number, number, number][] | [] |  Optionally, an array of transformation matrices - one for each page (each page's transformation will apply anywhere it is drawn). |

**Returns:** *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)‹›[]›*

Resolves with an array of the embedded pdf pages.

___

###  embedPdf

▸ **embedPdf**(`pdf`: string | Uint8Array | ArrayBuffer | [PDFDocument](pdfdocument.md), `indices`: number[]): *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)[]›*

*Defined in [api/PDFDocument.ts:1052](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1052)*

Embed one or more PDF pages into this document.

For example:
```js
const pdfDoc = await PDFDocument.create()

const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())

// Embed page 74 of `sourcePdf` into `pdfDoc`
const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, [73])
```

See [PDFDocument.load](pdfdocument.md#static-load) for examples of the allowed input data formats.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pdf` | string &#124; Uint8Array &#124; ArrayBuffer &#124; [PDFDocument](pdfdocument.md) | - | The input data containing a PDF document. |
`indices` | number[] | [0] | The indices of the pages that should be embedded. |

**Returns:** *Promise‹[PDFEmbeddedPage](pdfembeddedpage.md)[]›*

Resolves with an array of the embedded pages.

___

###  embedPng

▸ **embedPng**(`png`: string | Uint8Array | ArrayBuffer): *Promise‹[PDFImage](pdfimage.md)›*

*Defined in [api/PDFDocument.ts:1022](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1022)*

Embed a PNG image into this document. The input data can be provided in
multiple formats:

| Type          | Contents                                                     |
| ------------- | ------------------------------------------------------------ |
| `string`      | A base64 encoded string (or data URI) containing a PNG image |
| `Uint8Array`  | The raw bytes of a PNG image                                 |
| `ArrayBuffer` | The raw bytes of a PNG image                                 |

For example:
```js
// png=string
const image1 = await pdfDoc.embedPng('iVBORw0KGgoAAAANSUhEUgAAAlgAAAF3...')
const image2 = await pdfDoc.embedPng('data:image/png;base64,iVBORw0KGg...')

// png=Uint8Array
import fs from 'fs'
const uint8Array = fs.readFileSync('small_mario.png')
const image3 = await pdfDoc.embedPng(uint8Array)

// png=ArrayBuffer
const url = 'https://pdf-lib.js.org/assets/small_mario.png'
const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
const image4 = await pdfDoc.embedPng(arrayBuffer)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`png` | string &#124; Uint8Array &#124; ArrayBuffer | The input data for a PNG image. |

**Returns:** *Promise‹[PDFImage](pdfimage.md)›*

Resolves with the embedded image.

___

###  embedStandardFont

▸ **embedStandardFont**(`font`: [StandardFonts](../enums/standardfonts.md), `customName?`: undefined | string): *[PDFFont](pdffont.md)*

*Defined in [api/PDFDocument.ts:937](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L937)*

Embed a standard font into this document.
For example:
```js
import { StandardFonts } from 'pdf-lib'
const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [StandardFonts](../enums/standardfonts.md) | The standard font to be embedded. |
`customName?` | undefined &#124; string | The name to be used when embedding the font. |

**Returns:** *[PDFFont](pdffont.md)*

The embedded font.

___

###  findPageForAnnotationRef

▸ **findPageForAnnotationRef**(`ref`: PDFRef): *[PDFPage](pdfpage.md) | undefined*

*Defined in [api/PDFDocument.ts:1268](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1268)*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | PDFRef |

**Returns:** *[PDFPage](pdfpage.md) | undefined*

___

###  flush

▸ **flush**(): *Promise‹void›*

*Defined in [api/PDFDocument.ts:1195](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1195)*

> **NOTE:** You shouldn't need to call this method directly. The [save](pdfdocument.md#save)
> and [saveAsBase64](pdfdocument.md#saveasbase64) methods will automatically ensure that all embedded
> assets are flushed before serializing the document.

Flush all embedded fonts, PDF pages, and images to this document's
[context](pdfdocument.md#context).

**Returns:** *Promise‹void›*

Resolves when the flush is complete.

___

###  getAuthor

▸ **getAuthor**(): *string | undefined*

*Defined in [api/PDFDocument.ts:288](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L288)*

Get this document's author metadata. The author appears in the
"Document Properties" section of most PDF readers. For example:
```js
const author = pdfDoc.getAuthor()
```

**Returns:** *string | undefined*

A string containing the author of this document, if it has one.

___

###  getCreationDate

▸ **getCreationDate**(): *Date | undefined*

*Defined in [api/PDFDocument.ts:364](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L364)*

Get this document's creation date metadata. The creation date appears in
the "Document Properties" section of most PDF readers. For example:
```js
const creationDate = pdfDoc.getCreationDate()
```

**Returns:** *Date | undefined*

A Date containing the creation date of this document,
         if it has one.

___

###  getCreator

▸ **getCreator**(): *string | undefined*

*Defined in [api/PDFDocument.ts:333](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L333)*

Get this document's creator metadata. The creator appears in the
"Document Properties" section of most PDF readers. For example:
```js
const creator = pdfDoc.getCreator()
```

**Returns:** *string | undefined*

A string containing the creator of this document, if it has one.

___

###  getForm

▸ **getForm**(): *[PDFForm](pdfform.md)*

*Defined in [api/PDFDocument.ts:254](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L254)*

Get the [PDFForm](pdfform.md) containing all interactive fields for this document.
For example:
```js
const form = pdfDoc.getForm()
const fields = form.getFields()
fields.forEach(field => {
  const type = field.constructor.name
  const name = field.getName()
  console.log(`${type}: ${name}`)
})
```

**Returns:** *[PDFForm](pdfform.md)*

The form for this document.

___

###  getKeywords

▸ **getKeywords**(): *string | undefined*

*Defined in [api/PDFDocument.ts:318](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L318)*

Get this document's keywords metadata. The keywords appear in the
"Document Properties" section of most PDF readers. For example:
```js
const keywords = pdfDoc.getKeywords()
```

**Returns:** *string | undefined*

A string containing the keywords of this document, if it has any.

___

###  getModificationDate

▸ **getModificationDate**(): *Date | undefined*

*Defined in [api/PDFDocument.ts:381](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L381)*

Get this document's modification date metadata. The modification date
appears in the "Document Properties" section of most PDF readers.
For example:
```js
const modification = pdfDoc.getModificationDate()
```

**Returns:** *Date | undefined*

A Date containing the modification date of this document,
         if it has one.

___

###  getPage

▸ **getPage**(`index`: number): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFDocument.ts:569](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L569)*

Get the page rendered at a particular `index` of the document. For example:
```js
pdfDoc.getPage(0)   // The first page of the document
pdfDoc.getPage(2)   // The third page of the document
pdfDoc.getPage(197) // The 198th page of the document
```

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[PDFPage](pdfpage.md)*

The [PDFPage](pdfpage.md) rendered at the given `index` of the document.

___

###  getPageCount

▸ **getPageCount**(): *number*

*Defined in [api/PDFDocument.ts:539](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L539)*

Get the number of pages contained in this document. For example:
```js
const totalPages = pdfDoc.getPageCount()
```

**Returns:** *number*

The number of pages in this document.

___

###  getPageIndices

▸ **getPageIndices**(): *number[]*

*Defined in [api/PDFDocument.ts:590](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L590)*

Get an array of indices for all the pages contained in this document. The
array will contain a range of integers from
`0..pdfDoc.getPageCount() - 1`. For example:
```js
const pdfDoc = await PDFDocument.create()
pdfDoc.addPage()
pdfDoc.addPage()
pdfDoc.addPage()

const indices = pdfDoc.getPageIndices()
indices // => [0, 1, 2]
```

**Returns:** *number[]*

An array of indices for all pages contained in this document.

___

###  getPages

▸ **getPages**(): *[PDFPage](pdfpage.md)[]*

*Defined in [api/PDFDocument.ts:556](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L556)*

Get an array of all the pages contained in this document. The pages are
stored in the array in the same order that they are rendered in the
document. For example:
```js
const pages = pdfDoc.getPages()
pages[0]   // The first page of the document
pages[2]   // The third page of the document
pages[197] // The 198th page of the document
```

**Returns:** *[PDFPage](pdfpage.md)[]*

An array of all the pages contained in this document.

___

###  getProducer

▸ **getProducer**(): *string | undefined*

*Defined in [api/PDFDocument.ts:348](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L348)*

Get this document's producer metadata. The producer appears in the
"Document Properties" section of most PDF readers. For example:
```js
const producer = pdfDoc.getProducer()
```

**Returns:** *string | undefined*

A string containing the producer of this document, if it has one.

___

###  getSubject

▸ **getSubject**(): *string | undefined*

*Defined in [api/PDFDocument.ts:303](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L303)*

Get this document's subject metadata. The subject appears in the
"Document Properties" section of most PDF readers. For example:
```js
const subject = pdfDoc.getSubject()
```

**Returns:** *string | undefined*

A string containing the subject of this document, if it has one.

___

###  getTitle

▸ **getTitle**(): *string | undefined*

*Defined in [api/PDFDocument.ts:273](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L273)*

Get this document's title metadata. The title appears in the
"Document Properties" section of most PDF readers. For example:
```js
const title = pdfDoc.getTitle()
```

**Returns:** *string | undefined*

A string containing the title of this document, if it has one.

___

###  insertPage

▸ **insertPage**(`index`: number, `page?`: [PDFPage](pdfpage.md) | [number, number]): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFDocument.ts:681](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L681)*

Insert a page at a given index within this document. This method accepts
three different value types for the `page` parameter:

| Type               | Behavior                                                                       |
| ------------------ | ------------------------------------------------------------------------------ |
| `undefined`        | Create a new page and insert it into this document                             |
| `[number, number]` | Create a new page with the given dimensions and insert it into this document   |
| `PDFPage`          | Insert the existing page into this document                                    |

For example:
```js
// page=undefined
const newPage = pdfDoc.insertPage(2)

// page=[number, number]
import { PageSizes } from 'pdf-lib'
const newPage1 = pdfDoc.insertPage(2, PageSizes.A7)
const newPage2 = pdfDoc.insertPage(0, PageSizes.Letter)
const newPage3 = pdfDoc.insertPage(198, [500, 750])

// page=PDFPage
const pdfDoc1 = await PDFDocument.create()
const pdfDoc2 = await PDFDocument.load(...)
const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
pdfDoc1.insertPage(0, existingPage)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The index at which the page should be inserted (zero-based). |
`page?` | [PDFPage](pdfpage.md) &#124; [number, number] | Optionally, the desired dimensions or existing page. |

**Returns:** *[PDFPage](pdfpage.md)*

The newly created (or existing) page.

___

###  registerFontkit

▸ **registerFontkit**(`fontkit`: Fontkit): *void*

*Defined in [api/PDFDocument.ts:236](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L236)*

Register a fontkit instance. This must be done before custom fonts can
be embedded. See [here](https://github.com/Hopding/pdf-lib/tree/master#fontkit-installation)
for instructions on how to install and register a fontkit instance.

> You do **not** need to call this method to embed standard fonts.

For example:
```js
import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

const pdfDoc = await PDFDocument.create()
pdfDoc.registerFontkit(fontkit)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontkit` | Fontkit | The fontkit instance to be registered.  |

**Returns:** *void*

___

###  removePage

▸ **removePage**(`index`: number): *void*

*Defined in [api/PDFDocument.ts:605](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L605)*

Remove the page at a given index from this document. For example:
```js
pdfDoc.removePage(0)   // Remove the first page of the document
pdfDoc.removePage(2)   // Remove the third page of the document
pdfDoc.removePage(197) // Remove the 198th page of the document
```
Once a page has been removed, it will no longer be rendered at that index
in the document.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The index of the page to be removed.  |

**Returns:** *void*

___

###  save

▸ **save**(`options`: [SaveOptions](../interfaces/saveoptions.md)): *Promise‹Uint8Array›*

*Defined in [api/PDFDocument.ts:1219](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1219)*

Serialize this document to an array of bytes making up a PDF file.
For example:
```js
const pdfBytes = await pdfDoc.save()
```

There are a number of things you can do with the serialized document,
depending on the JavaScript environment you're running in:
* Write it to a file in Node or React Native
* Download it as a Blob in the browser
* Render it in an `iframe`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [SaveOptions](../interfaces/saveoptions.md) | {} | The options to be used when saving the document. |

**Returns:** *Promise‹Uint8Array›*

Resolves with the bytes of the serialized document.

___

###  saveAsBase64

▸ **saveAsBase64**(`options`: [Base64SaveOptions](../interfaces/base64saveoptions.md)): *Promise‹string›*

*Defined in [api/PDFDocument.ts:1260](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L1260)*

Serialize this document to a base64 encoded string or data URI making up a
PDF file. For example:
```js
const base64String = await pdfDoc.saveAsBase64()
base64String // => 'JVBERi0xLjcKJYGBgYEKC...'

const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true })
base64DataUri // => 'data:application/pdf;base64,JVBERi0xLjcKJYGBgYEKC...'
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [Base64SaveOptions](../interfaces/base64saveoptions.md) | {} | The options to be used when saving the document. |

**Returns:** *Promise‹string›*

Resolves with a base64 encoded string or data URI of the
         serialized document.

___

###  setAuthor

▸ **setAuthor**(`author`: string): *void*

*Defined in [api/PDFDocument.ts:425](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L425)*

Set this document's author metadata. The author will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setAuthor('Humpty Dumpty')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`author` | string | The author of this document.  |

**Returns:** *void*

___

###  setCreationDate

▸ **setCreationDate**(`creationDate`: Date): *void*

*Defined in [api/PDFDocument.ts:511](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L511)*

Set this document's creation date metadata. The creation date will appear
in the "Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setCreationDate(new Date())
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`creationDate` | Date | The date this document was created.  |

**Returns:** *void*

___

###  setCreator

▸ **setCreator**(`creator`: string): *void*

*Defined in [api/PDFDocument.ts:467](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L467)*

Set this document's creator metadata. The creator will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setCreator('PDF App 9000 🤖')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`creator` | string | The creator of this document.  |

**Returns:** *void*

___

###  setKeywords

▸ **setKeywords**(`keywords`: string[]): *void*

*Defined in [api/PDFDocument.ts:453](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L453)*

Set this document's keyword metadata. These keywords will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keywords` | string[] | An array of keywords associated with this document.  |

**Returns:** *void*

___

###  setLanguage

▸ **setLanguage**(`language`: string): *void*

*Defined in [api/PDFDocument.ts:497](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L497)*

Set this document's language metadata. The language will appear in the
"Document Properties" section of some PDF readers. For example:
```js
pdfDoc.setLanguage('en-us')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`language` | string | An RFC 3066 _Language-Tag_ denoting the language of this                 document, or an empty string if the language is unknown.  |

**Returns:** *void*

___

###  setModificationDate

▸ **setModificationDate**(`modificationDate`: Date): *void*

*Defined in [api/PDFDocument.ts:526](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L526)*

Set this document's modification date metadata. The modification date will
appear in the "Document Properties" section of most PDF readers. For
example:
```js
pdfDoc.setModificationDate(new Date())
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modificationDate` | Date | The date this document was last modified.  |

**Returns:** *void*

___

###  setProducer

▸ **setProducer**(`producer`: string): *void*

*Defined in [api/PDFDocument.ts:481](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L481)*

Set this document's producer metadata. The producer will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setProducer('PDF App 9000 🤖')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`producer` | string | The producer of this document.  |

**Returns:** *void*

___

###  setSubject

▸ **setSubject**(`subject`: string): *void*

*Defined in [api/PDFDocument.ts:439](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L439)*

Set this document's subject metadata. The subject will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subject` | string | The subject of this document.  |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: string, `options?`: [SetTitleOptions](../interfaces/settitleoptions.md)): *void*

*Defined in [api/PDFDocument.ts:405](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L405)*

Set this document's title metadata. The title will appear in the
"Document Properties" section of most PDF readers. For example:
```js
pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
```

To display the title in the window's title bar, set the
`showInWindowTitleBar` option to `true` (works for _most_ PDF readers).
For example:
```js
pdfDoc.setTitle('🥚 The Life of an Egg 🍳', { showInWindowTitleBar: true })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The title of this document. |
`options?` | [SetTitleOptions](../interfaces/settitleoptions.md) | The options to be used when setting the title.  |

**Returns:** *void*

___

### `Static` create

▸ **create**(`options`: [CreateOptions](../interfaces/createoptions.md)): *Promise‹[PDFDocument](pdfdocument.md)‹››*

*Defined in [api/PDFDocument.ts:157](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L157)*

Create a new [PDFDocument](pdfdocument.md).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CreateOptions](../interfaces/createoptions.md) | {} |

**Returns:** *Promise‹[PDFDocument](pdfdocument.md)‹››*

Resolves with the newly created document.

___

### `Static` load

▸ **load**(`pdf`: string | Uint8Array | ArrayBuffer, `options`: [LoadOptions](../interfaces/loadoptions.md)): *Promise‹[PDFDocument](pdfdocument.md)‹››*

*Defined in [api/PDFDocument.ts:126](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/PDFDocument.ts#L126)*

Load an existing [PDFDocument](pdfdocument.md). The input data can be provided in
multiple formats:

| Type          | Contents                                               |
| ------------- | ------------------------------------------------------ |
| `string`      | A base64 encoded string (or data URI) containing a PDF |
| `Uint8Array`  | The raw bytes of a PDF                                 |
| `ArrayBuffer` | The raw bytes of a PDF                                 |

For example:
```js
import { PDFDocument } from 'pdf-lib'

// pdf=string
const base64 =
 'JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbm' +
 'd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc0MjCwUjE4WQNC4Q' +
 '6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQ' +
 'ztFEKyuEK0uFxDuAAOERdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRl' +
 'ciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoID' +
 'IxNQo+PgpzdHJlYW0KeJxVj9GqwjAMhu/zFHkBzTo3nCCCiiKIHPEICuJF3cKoSCu2E8/b' +
 '20wPIr1p8v9/8kVhgilmGfawX2CGaVrgcAi0/bsy0lrX7IGWpvJ4iJYEN3gEmrrGBlQwGs' +
 'HHO9VBX1wNrxAqMX87RBD5xpJuddqwd82tjAHxzV1U5LPgy52DKXWnr1Lheg+j/c/pzGVr' +
 'iqV0VlwZPXGPCJjElw/ybkwUmeoWgxesDXGhHJC/D/iikp1Av80ptKU0FdBEe25pPihAM1' +
 'u6ytgaaWfs2Hrz35CJT1+EWmAKZW5kc3RyZWFtCmVuZG9iagoKNyAwIG9iago8PAovU2l6' +
 'ZSA4Ci9Sb290IDIgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9UeXBlIC9YUmVmCi9MZW' +
 '5ndGggMzgKL1cgWyAxIDIgMiBdCi9JbmRleCBbIDAgOCBdCj4+CnN0cmVhbQp4nBXEwREA' +
 'EBAEsCwz3vrvRmOOyyOoGhZdutHN2MT55fIAVocD+AplbmRzdHJlYW0KZW5kb2JqCgpzdG' +
 'FydHhyZWYKNTEwCiUlRU9G'

const dataUri = 'data:application/pdf;base64,' + base64

const pdfDoc1 = await PDFDocument.load(base64)
const pdfDoc2 = await PDFDocument.load(dataUri)

// pdf=Uint8Array
import fs from 'fs'
const uint8Array = fs.readFileSync('with_update_sections.pdf')
const pdfDoc3 = await PDFDocument.load(uint8Array)

// pdf=ArrayBuffer
const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
const pdfDoc4 = await PDFDocument.load(arrayBuffer)

```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`pdf` | string &#124; Uint8Array &#124; ArrayBuffer | - | The input data containing a PDF document. |
`options` | [LoadOptions](../interfaces/loadoptions.md) | {} | The options to be used when loading the document. |

**Returns:** *Promise‹[PDFDocument](pdfdocument.md)‹››*

Resolves with a document loaded from the input.
