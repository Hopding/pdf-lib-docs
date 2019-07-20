---
id: pdfpage
title: PDFPage
sidebar_label: PDFPage
---

[PDFPage](pdfpage.md) /

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

*Defined in [PDFPage.ts:59](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L59)*

The document to which this page belongs.

___

###  node

• **node**: *`PDFPageLeaf`*

*Defined in [PDFPage.ts:55](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L55)*

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [PDFPage.ts:56](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L56)*

## Methods

###  drawCircle

▸ **drawCircle**(`options`: [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md)): *void*

*Defined in [PDFPage.ts:372](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L372)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md) |  {} |

**Returns:** *void*

___

###  drawEllipse

▸ **drawEllipse**(`options`: [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md)): *void*

*Defined in [PDFPage.ts:344](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L344)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md) |  {} |

**Returns:** *void*

___

###  drawImage

▸ **drawImage**(`image`: [PDFImage](pdfimage.md), `options`: [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md)): *void*

*Defined in [PDFPage.ts:277](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L277)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | - |
`options` | [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md) |  {} |

**Returns:** *void*

___

###  drawRectangle

▸ **drawRectangle**(`options`: [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md)): *void*

*Defined in [PDFPage.ts:304](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L304)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md) |  {} |

**Returns:** *void*

___

###  drawSquare

▸ **drawSquare**(`options`: [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md)): *void*

*Defined in [PDFPage.ts:338](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L338)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md) |  {} |

**Returns:** *void*

___

###  drawText

▸ **drawText**(`text`: string, `options`: [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md)): *void*

*Defined in [PDFPage.ts:236](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L236)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`options` | [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md) |  {} |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Defined in [PDFPage.ts:139](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L139)*

**Returns:** *number*

___

###  getPosition

▸ **getPosition**(): *object*

*Defined in [PDFPage.ts:191](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L191)*

**Returns:** *object*

___

###  getRotation

▸ **getRotation**(): *number*

*Defined in [PDFPage.ts:100](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L100)*

**Returns:** *number*

___

###  getSize

▸ **getSize**(): *object*

*Defined in [PDFPage.ts:124](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L124)*

**Returns:** *object*

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [PDFPage.ts:135](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L135)*

**Returns:** *number*

___

###  getX

▸ **getX**(): *number*

*Defined in [PDFPage.ts:195](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L195)*

**Returns:** *number*

___

###  getY

▸ **getY**(): *number*

*Defined in [PDFPage.ts:199](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L199)*

**Returns:** *number*

___

###  moveDown

▸ **moveDown**(`yDecrease`: number): *void*

*Defined in [PDFPage.ts:210](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`yDecrease` | number |

**Returns:** *void*

___

###  moveLeft

▸ **moveLeft**(`xDecrease`: number): *void*

*Defined in [PDFPage.ts:220](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`xDecrease` | number |

**Returns:** *void*

___

###  moveRight

▸ **moveRight**(`xIncrease`: number): *void*

*Defined in [PDFPage.ts:225](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`xIncrease` | number |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number): *void*

*Defined in [PDFPage.ts:203](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`yIncrease`: number): *void*

*Defined in [PDFPage.ts:215](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`yIncrease` | number |

**Returns:** *void*

___

###  pushOperators

▸ **pushOperators**(...`operator`: `PDFOperator`[]): *void*

*Defined in [PDFPage.ts:230](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`...operator` | `PDFOperator`[] |

**Returns:** *void*

___

###  resetPosition

▸ **resetPosition**(): *void*

*Defined in [PDFPage.ts:162](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L162)*

**Returns:** *void*

___

###  setFont

▸ **setFont**(`font`: [PDFFont](pdffont.md)): *void*

*Defined in [PDFPage.ts:169](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`font` | [PDFFont](pdffont.md) |

**Returns:** *void*

___

###  setFontColor

▸ **setFontColor**(`fontColor`: [Color](../index.md#color)): *void*

*Defined in [PDFPage.ts:181](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`fontColor` | [Color](../index.md#color) |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [PDFPage.ts:176](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`fontSize` | number |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Defined in [PDFPage.ts:119](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`height` | number |

**Returns:** *void*

___

###  setLineHeight

▸ **setLineHeight**(`lineHeight`: number): *void*

*Defined in [PDFPage.ts:186](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`lineHeight` | number |

**Returns:** *void*

___

###  setRotation

▸ **setRotation**(`angle`: [Rotation](../index.md#rotation)): *void*

*Defined in [PDFPage.ts:94](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L94)*

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

*Defined in [PDFPage.ts:105](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *void*

___

###  setWidth

▸ **setWidth**(`width`: number): *void*

*Defined in [PDFPage.ts:114](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |

**Returns:** *void*

___

###  translateContent

▸ **translateContent**(`x`: number, `y`: number): *void*

*Defined in [PDFPage.ts:143](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

### `Static` create

▸ **create**(`doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:47](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*

___

### `Static` of

▸ **of**(`leafNode`: `PDFPageLeaf`, `ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [PDFPage.ts:44](https://github.com/Hopding/pdf-lib/blob/14e8645/src/api/PDFPage.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`leafNode` | `PDFPageLeaf` |
`ref` | `PDFRef` |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*