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

*Defined in [PDFPage.ts:65](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L65)*

The document to which this page belongs.

___

###  node

• **node**: *`PDFPageLeaf`*

*Defined in [PDFPage.ts:59](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L59)*

The low-level PDFDictionary wrapped by this page.

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [PDFPage.ts:62](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L62)*

The unique reference assigned to this page within the document.

## Methods

###  drawCircle

▸ **drawCircle**(`options`: [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md)): *void*

*Defined in [PDFPage.ts:487](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L487)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md) |  {} |

**Returns:** *void*

___

###  drawEllipse

▸ **drawEllipse**(`options`: [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md)): *void*

*Defined in [PDFPage.ts:459](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L459)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md) |  {} |

**Returns:** *void*

___

###  drawImage

▸ **drawImage**(`image`: [PDFImage](pdfimage.md), `options`: [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md)): *void*

*Defined in [PDFPage.ts:392](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L392)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | - |
`options` | [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md) |  {} |

**Returns:** *void*

___

###  drawRectangle

▸ **drawRectangle**(`options`: [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md)): *void*

*Defined in [PDFPage.ts:419](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L419)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md) |  {} |

**Returns:** *void*

___

###  drawSquare

▸ **drawSquare**(`options`: [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md)): *void*

*Defined in [PDFPage.ts:453](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L453)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md) |  {} |

**Returns:** *void*

___

###  drawText

▸ **drawText**(`text`: string, `options`: [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md)): *void*

*Defined in [PDFPage.ts:351](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L351)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`options` | [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md) |  {} |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Defined in [PDFPage.ts:203](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L203)*

Get this page's height. For example:
```js
const height = page.getHeight()
```

**Returns:** *number*

The height of the page.

___

###  getPosition

▸ **getPosition**(): *object*

*Defined in [PDFPage.ts:306](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L306)*

**Returns:** *object*

___

###  getRotation

▸ **getRotation**(): *[Rotation](../index.md#rotation)*

*Defined in [PDFPage.ts:114](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L114)*

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

*Defined in [PDFPage.ts:174](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L174)*

Get this page's width and height. For example:
```js
const { width, height } = page.getSize()
```

**Returns:** *object*

The width and height of the page.

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [PDFPage.ts:192](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L192)*

Get this page's width. For example:
```js
const width = page.getWidth()
```

**Returns:** *number*

The width of the page.

___

###  getX

▸ **getX**(): *number*

*Defined in [PDFPage.ts:310](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L310)*

**Returns:** *number*

___

###  getY

▸ **getY**(): *number*

*Defined in [PDFPage.ts:314](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L314)*

**Returns:** *number*

___

###  moveDown

▸ **moveDown**(`yDecrease`: number): *void*

*Defined in [PDFPage.ts:325](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`yDecrease` | number |

**Returns:** *void*

___

###  moveLeft

▸ **moveLeft**(`xDecrease`: number): *void*

*Defined in [PDFPage.ts:335](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L335)*

**Parameters:**

Name | Type |
------ | ------ |
`xDecrease` | number |

**Returns:** *void*

___

###  moveRight

▸ **moveRight**(`xIncrease`: number): *void*

*Defined in [PDFPage.ts:340](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`xIncrease` | number |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number): *void*

*Defined in [PDFPage.ts:318](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`yIncrease`: number): *void*

*Defined in [PDFPage.ts:330](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L330)*

**Parameters:**

Name | Type |
------ | ------ |
`yIncrease` | number |

**Returns:** *void*

___

###  pushOperators

▸ **pushOperators**(...`operator`: `PDFOperator`[]): *void*

*Defined in [PDFPage.ts:345](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L345)*

**Parameters:**

Name | Type |
------ | ------ |
`...operator` | `PDFOperator`[] |

**Returns:** *void*

___

###  resetPosition

▸ **resetPosition**(): *void*

*Defined in [PDFPage.ts:259](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L259)*

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

*Defined in [PDFPage.ts:283](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L283)*

Choose a default font for this page. The default font will be used whenever
text is drawn on this page and no font is specified. For example:
```js
import { StandardFonts } from 'pdf-lib'

const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
const courierFont = await pdfDoc.embedFont(StandardFonts.Courier)

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

*Defined in [PDFPage.ts:296](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`fontColor` | [Color](../index.md#color) |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [PDFPage.ts:291](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L291)*

**Parameters:**

Name | Type |
------ | ------ |
`fontSize` | number |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Defined in [PDFPage.ts:162](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L162)*

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

*Defined in [PDFPage.ts:301](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`lineHeight` | number |

**Returns:** *void*

___

###  setRotation

▸ **setRotation**(`angle`: [Rotation](../index.md#rotation)): *void*

*Defined in [PDFPage.ts:100](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L100)*

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

*Defined in [PDFPage.ts:130](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L130)*

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

*Defined in [PDFPage.ts:148](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L148)*

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

*Defined in [PDFPage.ts:223](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L223)*

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

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The new position on the x-axis for this page's content. |
`y` | number | The new position on the y-axis for this page's content.  |

**Returns:** *void*

___

### `Static` create

▸ **create**(`doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:50](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*

___

### `Static` of

▸ **of**(`leafNode`: `PDFPageLeaf`, `ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:47](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`leafNode` | `PDFPageLeaf` |
`ref` | `PDFRef` |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*