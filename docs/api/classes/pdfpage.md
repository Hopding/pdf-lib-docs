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

*Defined in [api/PDFPage.ts:57](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L57)*

___

###  node

• **node**: *`PDFPageLeaf`*

*Defined in [api/PDFPage.ts:55](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L55)*

___

###  ref

• **ref**: *`PDFRef`*

*Defined in [api/PDFPage.ts:56](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L56)*

## Methods

###  drawCircle

▸ **drawCircle**(`options`: [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md)): *void*

*Defined in [api/PDFPage.ts:357](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L357)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawCircleOptions](../interfaces/pdfpagedrawcircleoptions.md) |  {} |

**Returns:** *void*

___

###  drawEllipse

▸ **drawEllipse**(`options`: [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md)): *void*

*Defined in [api/PDFPage.ts:329](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L329)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawEllipseOptions](../interfaces/pdfpagedrawellipseoptions.md) |  {} |

**Returns:** *void*

___

###  drawImage

▸ **drawImage**(`image`: [PDFImage](pdfimage.md), `options`: [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md)): *void*

*Defined in [api/PDFPage.ts:262](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L262)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | - |
`options` | [PDFPageDrawImageOptions](../interfaces/pdfpagedrawimageoptions.md) |  {} |

**Returns:** *void*

___

###  drawRectangle

▸ **drawRectangle**(`options`: [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md)): *void*

*Defined in [api/PDFPage.ts:289](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L289)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawRectangleOptions](../interfaces/pdfpagedrawrectangleoptions.md) |  {} |

**Returns:** *void*

___

###  drawSquare

▸ **drawSquare**(`options`: [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md)): *void*

*Defined in [api/PDFPage.ts:323](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L323)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [PDFPageDrawSquareOptions](../interfaces/pdfpagedrawsquareoptions.md) |  {} |

**Returns:** *void*

___

###  drawText

▸ **drawText**(`text`: string, `options`: [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md)): *void*

*Defined in [api/PDFPage.ts:221](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L221)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`options` | [PDFPageDrawTextOptions](../interfaces/pdfpagedrawtextoptions.md) |  {} |

**Returns:** *void*

___

###  getHeight

▸ **getHeight**(): *number*

*Defined in [api/PDFPage.ts:124](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L124)*

**Returns:** *number*

___

###  getPosition

▸ **getPosition**(): *object*

*Defined in [api/PDFPage.ts:176](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L176)*

**Returns:** *object*

* **x**: *number*

* **y**: *number*

___

###  getRotation

▸ **getRotation**(): *number*

*Defined in [api/PDFPage.ts:85](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L85)*

**Returns:** *number*

___

###  getSize

▸ **getSize**(): *object*

*Defined in [api/PDFPage.ts:109](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L109)*

**Returns:** *object*

* **height**: *number*

* **width**: *number*

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [api/PDFPage.ts:120](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L120)*

**Returns:** *number*

___

###  getX

▸ **getX**(): *number*

*Defined in [api/PDFPage.ts:180](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L180)*

**Returns:** *number*

___

###  getY

▸ **getY**(): *number*

*Defined in [api/PDFPage.ts:184](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L184)*

**Returns:** *number*

___

###  moveDown

▸ **moveDown**(`yDecrease`: number): *void*

*Defined in [api/PDFPage.ts:195](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`yDecrease` | number |

**Returns:** *void*

___

###  moveLeft

▸ **moveLeft**(`xDecrease`: number): *void*

*Defined in [api/PDFPage.ts:205](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`xDecrease` | number |

**Returns:** *void*

___

###  moveRight

▸ **moveRight**(`xIncrease`: number): *void*

*Defined in [api/PDFPage.ts:210](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`xIncrease` | number |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number): *void*

*Defined in [api/PDFPage.ts:188](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`yIncrease`: number): *void*

*Defined in [api/PDFPage.ts:200](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`yIncrease` | number |

**Returns:** *void*

___

###  pushOperators

▸ **pushOperators**(...`operator`: `PDFOperator`[]): *void*

*Defined in [api/PDFPage.ts:215](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`...operator` | `PDFOperator`[] |

**Returns:** *void*

___

###  resetPosition

▸ **resetPosition**(): *void*

*Defined in [api/PDFPage.ts:147](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L147)*

**Returns:** *void*

___

###  setFont

▸ **setFont**(`font`: [PDFFont](pdffont.md)): *void*

*Defined in [api/PDFPage.ts:154](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`font` | [PDFFont](pdffont.md) |

**Returns:** *void*

___

###  setFontColor

▸ **setFontColor**(`fontColor`: [Color](../index.md#color)): *void*

*Defined in [api/PDFPage.ts:166](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`fontColor` | [Color](../index.md#color) |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [api/PDFPage.ts:161](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`fontSize` | number |

**Returns:** *void*

___

###  setHeight

▸ **setHeight**(`height`: number): *void*

*Defined in [api/PDFPage.ts:104](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`height` | number |

**Returns:** *void*

___

###  setLineHeight

▸ **setLineHeight**(`lineHeight`: number): *void*

*Defined in [api/PDFPage.ts:171](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`lineHeight` | number |

**Returns:** *void*

___

###  setRotation

▸ **setRotation**(`angle`: [Rotation](../index.md#rotation)): *void*

*Defined in [api/PDFPage.ts:79](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | [Rotation](../index.md#rotation) |

**Returns:** *void*

___

###  setSize

▸ **setSize**(`width`: number, `height`: number): *void*

*Defined in [api/PDFPage.ts:90](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *void*

___

###  setWidth

▸ **setWidth**(`width`: number): *void*

*Defined in [api/PDFPage.ts:99](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |

**Returns:** *void*

___

###  translateContent

▸ **translateContent**(`x`: number, `y`: number): *void*

*Defined in [api/PDFPage.ts:128](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

### `Static` create

▸ **create**(`doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFPage.ts:47](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*

___

### `Static` of

▸ **of**(`leafNode`: `PDFPageLeaf`, `ref`: `PDFRef`, `doc`: [PDFDocument](pdfdocument.md)): *[PDFPage](pdfpage.md)*

*Defined in [api/PDFPage.ts:44](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/api/PDFPage.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`leafNode` | `PDFPageLeaf` |
`ref` | `PDFRef` |
`doc` | [PDFDocument](pdfdocument.md) |

**Returns:** *[PDFPage](pdfpage.md)*