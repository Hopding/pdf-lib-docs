---
id: pdfpage
title: PDFPage
sidebar_label: PDFPage
---

[PDFPage](pdfpage.md) /

Represents a single page of a [PDFDocument](pdfdocument.md).

## Hierarchy

* **PDFPage**

## Index

### Properties

* [doc](pdfpage.md#doc)
* [node](pdfpage.md#node)
* [ref](pdfpage.md#ref)

### Methods

* [drawCircle](pdfpage.md#drawcircle)
* [drawEllipse](pdfpage.md#drawellipse)
* [drawImage](pdfpage.md#drawimage)
* [drawRectangle](pdfpage.md#drawrectangle)
* [drawSquare](pdfpage.md#drawsquare)
* [drawText](pdfpage.md#drawtext)
* [getHeight](pdfpage.md#getheight)
* [getPosition](pdfpage.md#getposition)
* [getRotation](pdfpage.md#getrotation)
* [getSize](pdfpage.md#getsize)
* [getWidth](pdfpage.md#getwidth)
* [getX](pdfpage.md#getx)
* [getY](pdfpage.md#gety)
* [moveDown](pdfpage.md#movedown)
* [moveLeft](pdfpage.md#moveleft)
* [moveRight](pdfpage.md#moveright)
* [moveTo](pdfpage.md#moveto)
* [moveUp](pdfpage.md#moveup)
* [pushOperators](pdfpage.md#pushoperators)
* [resetPosition](pdfpage.md#resetposition)
* [setFont](pdfpage.md#setfont)
* [setFontColor](pdfpage.md#setfontcolor)
* [setFontSize](pdfpage.md#setfontsize)
* [setHeight](pdfpage.md#setheight)
* [setLineHeight](pdfpage.md#setlineheight)
* [setRotation](pdfpage.md#setrotation)
* [setSize](pdfpage.md#setsize)
* [setWidth](pdfpage.md#setwidth)
* [translateContent](pdfpage.md#translatecontent)
* [create](pdfpage.md#static-create)
* [of](pdfpage.md#static-of)

## Properties

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [PDFPage.ts:85](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L85)*

The document to which this page belongs.

___

###  node

• **node**: *`PDFPageLeaf`*

*Defined in [PDFPage.ts:79](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L79)*

The low-level PDFDictionary wrapped by this page.

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [PDFPage.ts:82](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L82)*

The unique reference assigned to this page within the document.

## Methods

###  drawCircle

▸ **drawCircle**(`options`: [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md)): *void*

*Defined in [PDFPage.ts:800](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L800)*

Draw a circle on this page. For example:
```js
import { grayscale, rgb } from 'pdf-lib'

page.drawCircle({
  x: 200,
  y: 150,
  size: 100,
  borderWidth: 5,
  borderColor: grayscale(0.5),
  color: rgb(0.75, 0.2, 0.2)
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md) |  {} | The options to be used when drawing the ellipse.  |

**Returns:** *void*

___

###  drawEllipse

▸ **drawEllipse**(`options`: [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md)): *void*

*Defined in [PDFPage.ts:756](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L756)*

Draw an ellipse on this page. For example:
```js
import { grayscale, rgb } from 'pdf-lib'

page.drawEllipse({
  x: 200,
  y: 75,
  xScale: 100,
  yScale: 50,
  borderWidth: 5,
  borderColor: grayscale(0.5),
  color: rgb(0.75, 0.2, 0.2)
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md) |  {} | The options to be used when drawing the ellipse.  |

**Returns:** *void*

___

###  drawImage

▸ **drawImage**(`image`: [PDFImage](pdfimage.md), `options`: [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md)): *void*

*Defined in [PDFPage.ts:636](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L636)*

Draw an image on this page. For example:
```js
import { degrees } from 'pdf-lib'

const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())

const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
const jpgDims = jpgImage.scale(0.5)

const page = pdfDoc.addPage()

page.drawImage(jpgImage, {
  x: 25,
  y: 25,
  width: jpgDims.width,
  height: jpgDims.height,
  rotate: degrees(30)
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | - | The image to be drawn. |
`options` | [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md) |  {} | The options to be used when drawing the image.  |

**Returns:** *void*

___

###  drawRectangle

▸ **drawRectangle**(`options`: [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md)): *void*

*Defined in [PDFPage.ts:682](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L682)*

Draw a rectangle on this page. For example:
```js
import { degrees, grayscale, rgb } from 'pdf-lib'

page.drawRectangle({
  x: 25,
  y: 75,
  width: 250,
  height: 75,
  rotate: degrees(-15),
  borderWidth: 5,
  borderColor: grayscale(0.5),
  color: rgb(0.75, 0.2, 0.2)
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md) |  {} | The options to be used when drawing the rectangle.  |

**Returns:** *void*

___

###  drawSquare

▸ **drawSquare**(`options`: [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md)): *void*

*Defined in [PDFPage.ts:733](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L733)*

Draw a square on this page. For example:
```js
import { degrees, grayscale, rgb } from 'pdf-lib'

page.drawSquare({
  x: 25,
  y: 75,
  size: 100,
  rotate: degrees(-15),
  borderWidth: 5,
  borderColor: grayscale(0.5),
  color: rgb(0.75, 0.2, 0.2)
})
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md) |  {} | The options to be used when drawing the square.  |

**Returns:** *void*

___

###  drawText

▸ **drawText**(`text`: string, `options`: [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md)): *void*

*Defined in [PDFPage.ts:572](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L572)*

Draw one or more lines of text on this page. For example:
```js
import { StandardFonts, rgb } from 'pdf-lib'

const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

const page = pdfDoc.addPage()

page.setFont(helveticaFont)

page.moveTo(5, 200)
page.drawText('The Life of an Egg', { size: 36 })

page.moveDown(36)
page.drawText('An Epic Tale of Woe', { size: 30 })

page.drawText(
  `Humpty Dumpty sat on a wall \n` +
  `Humpty Dumpty had a great fall; \n` +
  `All the king's horses and all the king's men \n` +
  `Couldn't put Humpty together again. \n`,
  {
    x: 25,
    y: 100,
    font: timesRomanFont,
    size: 24,
    color: rgb(1, 0, 0),
    lineHeight: 24,
  },
)
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`text` | string | - | The text to be drawn. |
`options` | [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md) |  {} | The options to be used when drawing the text.  |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Defined in [PDFPage.ts:223](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L223)*

Get this page's height. For example:
```js
const height = page.getHeight()
```

**Returns:** *number*

The height of the page.

___

###  getPosition

▸ **getPosition**(): *object*

*Defined in [PDFPage.ts:382](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L382)*

Get the default position of this page. For example:
```js
const { x, y } = page.getPosition()
```

**Returns:** *object*

The default position of the page.

___

###  getRotation

▸ **getRotation**(): *[Rotation](../index.md#rotation)*

*Defined in [PDFPage.ts:134](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L134)*

Get this page's rotation angle in degrees. For example:
```js
const rotationAngle = page.getRotation().angle;
```

**Returns:** *[Rotation](../index.md#rotation)*

The rotation angle of the page in degrees (always a multiple of
         90 degrees).

___

###  getSize

▸ **getSize**(): *object*

*Defined in [PDFPage.ts:194](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L194)*

Get this page's width and height. For example:
```js
const { width, height } = page.getSize()
```

**Returns:** *object*

The width and height of the page.

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [PDFPage.ts:212](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L212)*

Get this page's width. For example:
```js
const width = page.getWidth()
```

**Returns:** *number*

The width of the page.

___

###  getX

▸ **getX**(): *number*

*Defined in [PDFPage.ts:393](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L393)*

Get the default x coordinate of this page. For example:
```js
const x = page.getX()
```

**Returns:** *number*

The default x coordinate of the page.

___

###  getY

▸ **getY**(): *number*

*Defined in [PDFPage.ts:404](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L404)*

Get the default y coordinate of this page. For example:
```js
const y = page.getY()
```

**Returns:** *number*

The default y coordinate of the page.

___

###  moveDown

▸ **moveDown**(`yDecrease`: number): *void*

*Defined in [PDFPage.ts:443](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L443)*

Change the default position of this page to be further down the y-axis.
For example:
```js
page.moveTo(50, 50)
page.drawText('I will be drawn at (50, 50)')

page.moveDown(10)
page.drawText('I will be drawn at (50, 40)')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`yDecrease` | number | The amount by which the page's default position along the                  y-axis should be decreased.  |

**Returns:** *void*

___

###  moveLeft

▸ **moveLeft**(`xDecrease`: number): *void*

*Defined in [PDFPage.ts:479](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L479)*

Change the default position of this page to be further left on the x-axis.
For example:
```js
page.moveTo(50, 50)
page.drawText('I will be drawn at (50, 50)')

page.moveLeft(10)
page.drawText('I will be drawn at (40, 50)')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xDecrease` | number | The amount by which the page's default position along the                  x-axis should be decreased.  |

**Returns:** *void*

___

###  moveRight

▸ **moveRight**(`xIncrease`: number): *void*

*Defined in [PDFPage.ts:496](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L496)*

Change the default position of this page to be further right on the y-axis.
```js
page.moveTo(50, 50)
page.drawText('I will be drawn at (50, 50)')

page.moveRight(10)
page.drawText('I will be drawn at (60, 50)')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`xIncrease` | number | The amount by which the page's default position along the                  x-axis should be increased.  |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number): *void*

*Defined in [PDFPage.ts:423](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L423)*

Change the default position of this page. For example:
```js
page.moveTo(0, 0)
page.drawText('I will be drawn at the origin')

page.moveTo(0, 25)
page.drawText('I will be drawn 25 units up')

page.moveTo(25, 25)
page.drawText('I will be drawn 25 units up and 25 units to the right')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The new default position on the x-axis for this page. |
`y` | number | The new default position on the y-axis for this page.  |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`yIncrease`: number): *void*

*Defined in [PDFPage.ts:461](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L461)*

Change the default position of this page to be further up the y-axis.
For example:
```js
page.moveTo(50, 50)
page.drawText('I will be drawn at (50, 50)')

page.moveUp(10)
page.drawText('I will be drawn at (50, 60)')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`yIncrease` | number | The amount by which the page's default position along the                  y-axis should be increased.  |

**Returns:** *void*

___

###  pushOperators

▸ **pushOperators**(...`operator`: `PDFOperator`[]): *void*

*Defined in [PDFPage.ts:530](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L530)*

Push one or more operators to the end of this page's current content
stream. For example:
```js
import {
  pushGraphicsState,
  moveTo,
  lineTo,
  closePath,
  setFillingColor,
  rgb,
  fill,
  popGraphicsState,
} from 'pdf-lib'

// Draw a green triangle in the lower-left corner of the page
page.pushOperators(
  pushGraphicsState(),
  moveTo(0, 0),
  lineTo(100, 0),
  lineTo(50, 100),
  closePath(),
  setFillingColor(rgb(0.0, 1.0, 0.0)),
  fill(),
  popGraphicsState(),
)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...operator` | `PDFOperator`[] | The operators to be pushed.  |

**Returns:** *void*

___

###  resetPosition

▸ **resetPosition**(): *void*

*Defined in [PDFPage.ts:280](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L280)*

Reset the x and y coordinates of this page to `(0, 0)`. This operation is
often useful after calling [translateContent](pdfpage.md#translatecontent). For example:
```js
// Shift the page's contents up and to the right by 50 units
page.translateContent(50, 50)

// This text will shifted - it will be drawn at (50, 50)
page.drawText('I am shifted')

// Move back to (0, 0)
page.resetPosition()

// This text will not be shifted - it will be drawn at (0, 0)
page.drawText('I am not shifted')
```

**Returns:** *void*

___

###  setFont

▸ **setFont**(`font`: [PDFFont](pdffont.md)): *void*

*Defined in [PDFPage.ts:306](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L306)*

Choose a default font for this page. The default font will be used whenever
text is drawn on this page and no font is specified. For example:
```js
import { StandardFonts } from 'pdf-lib'

const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
const courierFont = await pdfDoc.embedFont(StandardFonts.Courier)

const page = pdfDoc.addPage()

page.setFont(helveticaFont)
page.drawText('I will be drawn in Helvetica')

page.setFont(timesRomanFont)
page.drawText('I will be drawn in Courier', { font: courierFont })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The default font to be used when drawing text on this page.  |

**Returns:** *void*

___

###  setFontColor

▸ **setFontColor**(`fontColor`: [Color](../index.md#color)): *void*

*Defined in [PDFPage.ts:349](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L349)*

Choose a default font color for this page. The default font color will be
used whenever text is drawn on this page and no font color is specified.
For example:
```js
import { rgb, cmyk, grayscale } from 'pdf-lib'

page.setFontColor(rgb(0.97, 0.02, 0.97))
page.drawText('I will be drawn in pink')

page.setFontColor(cmyk(0.4, 0.7, 0.39, 0.15))
page.drawText('I will be drawn in gray', { color: grayscale(0.5) })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontColor` | [Color](../index.md#color) | The default font color to be used when drawing text on                  this page.  |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [PDFPage.ts:328](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L328)*

Choose a default font size for this page. The default font size will be
used whenever text is drawn on this page and no font size is specified.
For example:
```js
page.setFontSize(12)
page.drawText('I will be drawn in size 12')

page.setFontSize(36)
page.drawText('I will be drawn in size 24', { fontSize: 24 })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontSize` | number | The default font size to be used when drawing text on this                 page.  |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Defined in [PDFPage.ts:182](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L182)*

Resize this page by increasing or decreasing its height. For example:
```js
page.setHeight(500)
page.setHeight(page.getWidth() + 100)
page.setHeight(page.getWidth() - 100)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`height` | number | The new height of the page.  |

**Returns:** *void*

___

###  setLineHeight

▸ **setLineHeight**(`lineHeight`: number): *void*

*Defined in [PDFPage.ts:370](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L370)*

Choose a default line height for this page. The default line height will be
used whenever text is drawn on this page and no line height is specified.
For example:
```js
page.setLineHeight(12);
page.drawText('These lines will be vertically \n separated by 12 units')

page.setLineHeight(36);
page.drawText('These lines will be vertically \n separated by 24 units', {
  lineHeight: 24
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lineHeight` | number | The default line height to be used when drawing text on                   this page.  |

**Returns:** *void*

___

###  setRotation

▸ **setRotation**(`angle`: [Rotation](../index.md#rotation)): *void*

*Defined in [PDFPage.ts:120](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L120)*

Rotate this page by a multiple of 90 degrees. For example:
```js
import { degrees } from 'pdf-lib'

page.setRotation(degrees(-90))
page.setRotation(degrees(0))
page.setRotation(degrees(90))
page.setRotation(degrees(180))
page.setRotation(degrees(270))
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | [Rotation](../index.md#rotation) | The angle to rotate this page.  |

**Returns:** *void*

___

###  setSize

▸ **setSize**(`width`: number, `height`: number): *void*

*Defined in [PDFPage.ts:150](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L150)*

Resize this page by increasing or decreasing its width and height. For
example:
```js
page.setSize(250, 500)
page.setSize(page.getWidth() + 50, page.getHeight() + 100)
page.setSize(page.getWidth() - 50, page.getHeight() - 100)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | The new width of the page. |
`height` | number | The new height of the page.  |

**Returns:** *void*

___

###  setWidth

▸ **setWidth**(`width`: number): *void*

*Defined in [PDFPage.ts:168](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L168)*

Resize this page by increasing or decreasing its width. For example:
```js
page.setWidth(250)
page.setWidth(page.getWidth() + 50)
page.setWidth(page.getWidth() - 50)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | The new width of the page.  |

**Returns:** *void*

___

###  translateContent

▸ **translateContent**(`x`: number, `y`: number): *void*

*Defined in [PDFPage.ts:244](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L244)*

Translate this page's content to a new location on the page. This operation
is often useful after resizing the page with [setSize](pdfpage.md#setsize). For example:
```js
// Add 50 units of whitespace to the top and right of the page
page.setSize(page.getWidth() + 50, page.getHeight() + 50)

// Move the page's content from the lower-left corner of the page
// to the top-right corner.
page.translateContent(50, 50)

// Now there are 50 units of whitespace to the left and bottom of the page
```
See also: [resetPosition](pdfpage.md#resetposition)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The new position on the x-axis for this page's content. |
`y` | number | The new position on the y-axis for this page's content.  |

**Returns:** *void*

___

### `Static` create

▸ **create**(`doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:70](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L70)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.addPage](pdfdocument.md#addpage) and [PDFDocument.insertPage](pdfdocument.md#insertpage)
> methods, which can create instances of [PDFPage](pdfpage.md) for you.

Create an instance of [PDFPage](pdfpage.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the page will belong.  |

**Returns:** *[PDFPage](pdfpage.md)*

___

### `Static` of

▸ **of**(`leafNode`: `PDFPageLeaf`, `ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:58](https://github.com/Hopding/pdf-lib/blob/4a46ddb/src/api/PDFPage.ts#L58)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.addPage](pdfdocument.md#addpage) and [PDFDocument.insertPage](pdfdocument.md#insertpage)
> methods, which can create instances of [PDFPage](pdfpage.md) for you.

Create an instance of [PDFPage](pdfpage.md) from an existing leaf node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`leafNode` | `PDFPageLeaf` | The leaf node to be wrapped. |
`ref` | `PDFRef` | The unique reference for the page. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the page will belong.  |

**Returns:** *[PDFPage](pdfpage.md)*