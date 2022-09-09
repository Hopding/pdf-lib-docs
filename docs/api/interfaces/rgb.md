---
id: "rgb"
title: "RGB"
sidebar_label: "RGB"
---

[pdf-lib](../index.md) › [RGB](rgb.md)

Red, Green and Blue. Each color consists of 8 bits (1 byte) having a
value which goes from 0 to 255. Therefore pdf-lib expresses colors as
fractional values between 0 and 1. You can divide each of your color
component values by 255 to produce the correct fractional value. For
example:

```
rgb(0 / 255, 74 / 255, 153 / 255)
```

## Hierarchy

* **RGB**

## Index

### Properties

* [blue](rgb.md#blue)
* [green](rgb.md#green)
* [red](rgb.md#red)
* [type](rgb.md#type)

## Properties

###  blue

• **blue**: *number*

*Defined in [api/colors.ts:26](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/colors.ts#L26)*

___

###  green

• **green**: *number*

*Defined in [api/colors.ts:25](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/colors.ts#L25)*

___

###  red

• **red**: *number*

*Defined in [api/colors.ts:24](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/colors.ts#L24)*

___

###  type

• **type**: *[RGB](../enums/colortypes.md#rgb)*

*Defined in [api/colors.ts:23](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/colors.ts#L23)*
