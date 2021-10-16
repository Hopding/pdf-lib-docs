---
id: "pdfbutton"
title: "PDFButton"
sidebar_label: "PDFButton"
---

[pdf-lib](../index.md) › [PDFButton](pdfbutton.md)

Represents a button field of a [PDFForm](pdfform.md).

[PDFButton](pdfbutton.md) fields are interactive controls that users can click with their
mouse. This type of [PDFField](pdffield.md) is not stateful. The purpose of a button
is to perform an action when the user clicks on it, such as opening a print
modal or resetting the form. Buttons are typically rectangular in shape and
have a text label describing the action that they perform when clicked.

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFButton**

## Index

### Properties

* [acroField](pdfbutton.md#acrofield)
* [doc](pdfbutton.md#doc)
* [ref](pdfbutton.md#ref)

### Methods

* [addToPage](pdfbutton.md#addtopage)
* [defaultUpdateAppearances](pdfbutton.md#defaultupdateappearances)
* [disableExporting](pdfbutton.md#disableexporting)
* [disableReadOnly](pdfbutton.md#disablereadonly)
* [disableRequired](pdfbutton.md#disablerequired)
* [enableExporting](pdfbutton.md#enableexporting)
* [enableReadOnly](pdfbutton.md#enablereadonly)
* [enableRequired](pdfbutton.md#enablerequired)
* [getName](pdfbutton.md#getname)
* [isExported](pdfbutton.md#isexported)
* [isReadOnly](pdfbutton.md#isreadonly)
* [isRequired](pdfbutton.md#isrequired)
* [needsAppearancesUpdate](pdfbutton.md#needsappearancesupdate)
* [setFontSize](pdfbutton.md#setfontsize)
* [setImage](pdfbutton.md#setimage)
* [updateAppearances](pdfbutton.md#updateappearances)
* [of](pdfbutton.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroPushButton*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFButton.ts:54](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L54)*

The low-level PDFAcroPushButton wrapped by this button.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Inherited from [PDFField](pdffield.md).[doc](pdffield.md#doc)*

*Defined in [api/form/PDFField.ts:92](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L92)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Inherited from [PDFField](pdffield.md).[ref](pdffield.md#ref)*

*Defined in [api/form/PDFField.ts:89](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L89)*

The unique reference assigned to this field within the document.

## Methods

###  addToPage

▸ **addToPage**(`text`: string, `page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFButton.ts:149](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L149)*

Show this button on the specified page with the given text. For example:
```js
const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const button = form.createButton('some.button.field')

button.addToPage('Do Stuff', page, {
  x: 50,
  y: 75,
  width: 200,
  height: 100,
  textColor: rgb(1, 0, 0),
  backgroundColor: rgb(0, 1, 0),
  borderColor: rgb(0, 0, 1),
  borderWidth: 2,
  rotate: degrees(90),
  font: ubuntuFont,
})
```
This will create a new widget for this button field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text to be displayed for this button widget. |
`page` | [PDFPage](pdfpage.md) | The page to which this button widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding this button widget.  |

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(`font`: [PDFFont](pdffont.md)): *void*

*Overrides void*

*Defined in [api/form/PDFButton.ts:220](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L220)*

Update the appearance streams for each of this button's widgets using
the default appearance provider for buttons. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const button = form.getButton('some.button.field')
button.defaultUpdateAppearances(helvetica)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams.  |

**Returns:** *void*

___

###  disableExporting

▸ **disableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[disableExporting](pdffield.md#disableexporting)*

*Defined in [api/form/PDFField.ts:247](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L247)*

Indicate that this field's value should **not** be exported when the form
is submitted in a PDF reader. For example:
```js
const field = form.getField('some.field')
field.disableExporting()
```

**Returns:** *void*

___

###  disableReadOnly

▸ **disableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[disableReadOnly](pdffield.md#disablereadonly)*

*Defined in [api/form/PDFField.ts:170](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L170)*

Allow users to interact with this field and change its value in PDF
readers via mouse and keyboard input. For example:
```js
const field = form.getField('some.field')
field.disableReadOnly()
```

**Returns:** *void*

___

###  disableRequired

▸ **disableRequired**(): *void*

*Inherited from [PDFField](pdffield.md).[disableRequired](pdffield.md#disablerequired)*

*Defined in [api/form/PDFField.ts:208](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L208)*

Do not require this field to have a value when the form is submitted.
For example:
```js
const field = form.getField('some.field')
field.disableRequired()
```

**Returns:** *void*

___

###  enableExporting

▸ **enableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[enableExporting](pdffield.md#enableexporting)*

*Defined in [api/form/PDFField.ts:235](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L235)*

Indicate that this field's value should be exported when the form is
submitted in a PDF reader. For example:
```js
const field = form.getField('some.field')
field.enableExporting()
```

**Returns:** *void*

___

###  enableReadOnly

▸ **enableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[enableReadOnly](pdffield.md#enablereadonly)*

*Defined in [api/form/PDFField.ts:158](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L158)*

Prevent PDF readers from allowing users to interact with this field or
change its value. The field will not respond to mouse or keyboard input.
For example:
```js
const field = form.getField('some.field')
field.enableReadOnly()
```
Useful for fields whose values are computed, imported from a database, or
prefilled by software before being displayed to the user.

**Returns:** *void*

___

###  enableRequired

▸ **enableRequired**(): *void*

*Inherited from [PDFField](pdffield.md).[enableRequired](pdffield.md#enablerequired)*

*Defined in [api/form/PDFField.ts:196](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L196)*

Require this field to have a value when the form is submitted.
For example:
```js
const field = form.getField('some.field')
field.enableRequired()
```

**Returns:** *void*

___

###  getName

▸ **getName**(): *string*

*Inherited from [PDFField](pdffield.md).[getName](pdffield.md#getname)*

*Defined in [api/form/PDFField.ts:128](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L128)*

Get the fully qualified name of this field. For example:
```js
const fields = form.getFields()
fields.forEach(field => {
  const name = field.getName()
  console.log('Field name:', name)
})
```
Note that PDF fields are structured as a tree. Each field is the
descendent of a series of ancestor nodes all the way up to the form node,
which is always the root of the tree. Each node in the tree (except for
the form node) has a partial name. Partial names can be composed of any
unicode characters except a period (`.`). The fully qualified name of a
field is composed of the partial names of all its ancestors joined
with periods. This means that splitting the fully qualified name on
periods and taking the last element of the resulting array will give you
the partial name of a specific field.

**Returns:** *string*

The fully qualified name of this field.

___

###  isExported

▸ **isExported**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isExported](pdffield.md#isexported)*

*Defined in [api/form/PDFField.ts:223](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L223)*

Returns `true` if this field's value should be exported when the form is
submitted. See [PDFField.enableExporting](pdffield.md#enableexporting) and
[PDFField.disableExporting](pdffield.md#disableexporting).
For example:
```js
const field = form.getField('some.field')
if (field.isExported()) console.log('Exporting is enabled')
```

**Returns:** *boolean*

Whether or not this field's value should be exported.

___

###  isReadOnly

▸ **isReadOnly**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isReadOnly](pdffield.md#isreadonly)*

*Defined in [api/form/PDFField.ts:143](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L143)*

Returns `true` if this field is read only. This means that PDF readers
will not allow users to interact with the field or change its value. See
[PDFField.enableReadOnly](pdffield.md#enablereadonly) and [PDFField.disableReadOnly](pdffield.md#disablereadonly).
For example:
```js
const field = form.getField('some.field')
if (field.isReadOnly()) console.log('Read only is enabled')
```

**Returns:** *boolean*

Whether or not this is a read only field.

___

###  isRequired

▸ **isRequired**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isRequired](pdffield.md#isrequired)*

*Defined in [api/form/PDFField.ts:184](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFField.ts#L184)*

Returns `true` if this field must have a value when the form is submitted.
See [PDFField.enableRequired](pdffield.md#enablerequired) and [PDFField.disableRequired](pdffield.md#disablerequired).
For example:
```js
const field = form.getField('some.field')
if (field.isRequired()) console.log('Field is required')
```

**Returns:** *boolean*

Whether or not this field is required.

___

###  needsAppearancesUpdate

▸ **needsAppearancesUpdate**(): *boolean*

*Overrides void*

*Defined in [api/form/PDFButton.ts:196](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L196)*

Returns `true` if this button has been marked as dirty, or if any of this
button's widgets do not have an appearance stream. For example:
```js
const button = form.getButton('some.button.field')
if (button.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this button needs an appearance update.

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [api/form/PDFButton.ts:116](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L116)*

Set the font size for this field. Larger font sizes will result in larger
text being displayed when PDF readers render this button. Font sizes may
be integer or floating point numbers. Supplying a negative font size will
cause this method to throw an error.

For example:
```js
const button = form.getButton('some.button.field')
button.setFontSize(4)
button.setFontSize(15.7)
```

> This method depends upon the existence of a default appearance
> (`/DA`) string. If this field does not have a default appearance string,
> or that string does not contain a font size (via the `Tf` operator),
> then this method will throw an error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontSize` | number | The font size to be used when rendering text in this field.  |

**Returns:** *void*

___

###  setImage

▸ **setImage**(`image`: [PDFImage](pdfimage.md), `alignment`: [ImageAlignment](../enums/imagealignment.md)): *void*

*Defined in [api/form/PDFButton.ts:81](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L81)*

Display an image inside the bounds of this button's widgets. For example:
```js
const pngImage = await pdfDoc.embedPng(...)
const button = form.getButton('some.button.field')
button.setImage(pngImage, ImageAlignment.Center)
```
This will update the appearances streams for each of this button's widgets.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | - | The image that should be displayed. |
`alignment` | [ImageAlignment](../enums/imagealignment.md) | ImageAlignment.Center | The alignment of the image.  |

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`font`: [PDFFont](pdffont.md), `provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFButton](pdfbutton.md)›): *void*

*Defined in [api/form/PDFButton.ts:244](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L244)*

Update the appearance streams for each of this button's widgets using
the given appearance provider. If no `provider` is passed, the default
appearance provider for buttons will be used. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const button = form.getButton('some.button.field')
button.updateAppearances(helvetica, (field, widget, font) => {
  ...
  return {
    normal: drawButton(...),
    down: drawButton(...),
  }
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams. |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFButton](pdfbutton.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroPushButton`: PDFAcroPushButton, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFButton](pdfbutton.md)‹›*

*Defined in [api/form/PDFButton.ts:47](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFButton.ts#L47)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getButton](pdfform.md#getbutton) method, which will create an
> instance of [PDFButton](pdfbutton.md) for you.

Create an instance of [PDFButton](pdfbutton.md) from an existing acroPushButton and ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroPushButton` | PDFAcroPushButton | The underlying `PDFAcroPushButton` for this button. |
`ref` | PDFRef | The unique reference for this button. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this button will belong.  |

**Returns:** *[PDFButton](pdfbutton.md)‹›*
