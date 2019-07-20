---
id: path
title: Path
sidebar_label: Path
---

[Path](path.md) /

Path objects are returned by glyphs and represent the actual vector outlines
for each glyph in the font. Paths can be converted to SVG path data strings,
or to functions that can be applied to render the path to a graphics context.

## Hierarchy

* **Path**

## Index

### Properties

* [bbox](path.md#bbox)
* [cbox](path.md#cbox)

### Methods

* [bezierCurveTo](path.md#beziercurveto)
* [closePath](path.md#closepath)
* [lineTo](path.md#lineto)
* [moveTo](path.md#moveto)
* [quadraticCurveTo](path.md#quadraticcurveto)
* [toFunction](path.md#tofunction)
* [toSVG](path.md#tosvg)

## Properties

###  bbox

• **bbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:25](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L25)*

This property represents the path’s bounding box, i.e. the smallest
rectangle that contains the entire path shape. This is the exact
bounding box, taking into account control points that may be outside the
visible shape.

___

###  cbox

• **cbox**: *[BoundingBox](boundingbox.md)*

*Defined in [types/fontkit.ts:34](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L34)*

This property represents the path’s control box. It is like the
bounding box, but it includes all points of the path, including control
points of bezier segments. It is much faster to compute than the real
bounding box, but less accurate if there are control points outside of the
visible shape.

## Methods

###  bezierCurveTo

▸ **bezierCurveTo**(`cp1x`: number, `cp1y`: number, `cp2x`: number, `cp2y`: number, `x`: number, `y`: number): *void*

*Defined in [types/fontkit.ts:57](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L57)*

Adds a bezier curve to the path from the current point to the
given x, y coordinates using cp1x, cp1y and cp2x, cp2y as control points.

**Parameters:**

Name | Type |
------ | ------ |
`cp1x` | number |
`cp1y` | number |
`cp2x` | number |
`cp2y` | number |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  closePath

▸ **closePath**(): *void*

*Defined in [types/fontkit.ts:70](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L70)*

Closes the current sub-path by drawing a straight line back to the
starting point.

**Returns:** *void*

___

###  lineTo

▸ **lineTo**(`x`: number, `y`: number): *void*

*Defined in [types/fontkit.ts:45](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L45)*

Adds a line to the path from the current point to the
given x, y coordinates.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  moveTo

▸ **moveTo**(`x`: number, `y`: number): *void*

*Defined in [types/fontkit.ts:39](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L39)*

Moves the virtual pen to the given x, y coordinates.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`: number, `cpy`: number, `x`: number, `y`: number): *void*

*Defined in [types/fontkit.ts:51](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L51)*

Adds a quadratic curve to the path from the current point to the
given x, y coordinates using cpx, cpy as a control point.

**Parameters:**

Name | Type |
------ | ------ |
`cpx` | number |
`cpy` | number |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  toFunction

▸ **toFunction**(): *`Function`*

*Defined in [types/fontkit.ts:76](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L76)*

Compiles the path to a JavaScript function that can be applied with a
graphics context in order to render the path.

**Returns:** *`Function`*

___

###  toSVG

▸ **toSVG**(): *string*

*Defined in [types/fontkit.ts:81](https://github.com/Hopding/pdf-lib/blob/57dc8a4/src/types/fontkit.ts#L81)*

Converts the path to an SVG path data string.

**Returns:** *string*