---
id: "pdfcheckbox"
title: "PDFCheckBox"
sidebar_label: "PDFCheckBox"
---

[pdf-lib](../index.md) › [PDFCheckBox](pdfcheckbox.md)

Represents a check box field of a [PDFForm](pdfform.md).

[PDFCheckBox](pdfcheckbox.md) fields are interactive boxes that users can click with their
mouse. This type of [PDFField](pdffield.md) has two states: `on` and `off`. The purpose
of a check box is to enable users to select from one or more options, where
each option is represented by a single check box. Check boxes are typically
square in shape and display a check mark when they are in the `on` state.

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFCheckBox**

## Index

### Properties

* [acroField](pdfcheckbox.md#acrofield)
* [doc](pdfcheckbox.md#doc)
* [ref](pdfcheckbox.md#ref)

### Methods

* [addToPage](pdfcheckbox.md#addtopage)
* [check](pdfcheckbox.md#check)
* [defaultUpdateAppearances](pdfcheckbox.md#defaultupdateappearances)
* [disableExporting](pdfcheckbox.md#disableexporting)
* [disableReadOnly](pdfcheckbox.md#disablereadonly)
* [disableRequired](pdfcheckbox.md#disablerequired)
* [enableExporting](pdfcheckbox.md#enableexporting)
* [enableReadOnly](pdfcheckbox.md#enablereadonly)
* [enableRequired](pdfcheckbox.md#enablerequired)
* [getName](pdfcheckbox.md#getname)
* [isChecked](pdfcheckbox.md#ischecked)
* [isExported](pdfcheckbox.md#isexported)
* [isReadOnly](pdfcheckbox.md#isreadonly)
* [isRequired](pdfcheckbox.md#isrequired)
* [needsAppearancesUpdate](pdfcheckbox.md#needsappearancesupdate)
* [uncheck](pdfcheckbox.md#uncheck)
* [updateAppearances](pdfcheckbox.md#updateappearances)
* [of](pdfcheckbox.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroCheckBox*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFCheckBox.ts:49](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L49)*

The low-level PDFAcroCheckBox wrapped by this check box.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Inherited from [PDFField](pdffield.md).[doc](pdffield.md#doc)*

*Defined in [api/form/PDFField.ts:81](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L81)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Inherited from [PDFField](pdffield.md).[ref](pdffield.md#ref)*

*Defined in [api/form/PDFField.ts:78](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L78)*

The unique reference assigned to this field within the document.

## Methods

###  addToPage

▸ **addToPage**(`page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFCheckBox.ts:150](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L150)*

Show this check box on the specified page. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const checkBox = form.createCheckBox('some.checkBox.field')

checkBox.addToPage(page, {
  x: 50,
  y: 75,
  width: 25,
  height: 25,
  textColor: rgb(1, 0, 0),
  backgroundColor: rgb(0, 1, 0),
  borderColor: rgb(0, 0, 1),
  borderWidth: 2,
  rotate: degrees(90),
})
```
This will create a new widget for this check box field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page` | [PDFPage](pdfpage.md) | The page to which this check box widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding this check box widget.  |

**Returns:** *void*

___

###  check

▸ **check**(): *void*

*Defined in [api/form/PDFCheckBox.ts:84](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L84)*

Mark this check box. This operation is analogous to a human user clicking
a check box to fill it in a PDF reader. This method will update the
underlying state of the check box field to indicate it has been selected.
PDF libraries and readers will be able to extract this value from the
saved document and determine that it was selected.

For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
checkBox.check()
```

This method will mark this check box as dirty, causing its appearance
streams to be updated when either [PDFDocument.save](pdfdocument.md#save) or
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) is called. The updated appearance
streams will display a check mark inside the widgets of this check box
field.

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(): *void*

*Overrides void*

*Defined in [api/form/PDFCheckBox.ts:215](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L215)*

Update the appearance streams for each of this check box's widgets using
the default appearance provider for check boxes. For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
checkBox.defaultUpdateAppearances()
```

**Returns:** *void*

___

###  disableExporting

▸ **disableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[disableExporting](pdffield.md#disableexporting)*

*Defined in [api/form/PDFField.ts:236](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L236)*

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

*Defined in [api/form/PDFField.ts:159](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L159)*

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

*Defined in [api/form/PDFField.ts:197](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L197)*

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

*Defined in [api/form/PDFField.ts:224](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L224)*

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

*Defined in [api/form/PDFField.ts:147](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L147)*

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

*Defined in [api/form/PDFField.ts:185](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L185)*

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

*Defined in [api/form/PDFField.ts:117](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L117)*

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

###  isChecked

▸ **isChecked**(): *boolean*

*Defined in [api/form/PDFCheckBox.ts:120](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L120)*

Returns `true` if this check box is selected (either by a human user via
a PDF reader, or else programmatically via software). For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
if (checkBox.isChecked()) console.log('check box is selected')
```

**Returns:** *boolean*

Whether or not this check box is selected.

___

###  isExported

▸ **isExported**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isExported](pdffield.md#isexported)*

*Defined in [api/form/PDFField.ts:212](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L212)*

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

*Defined in [api/form/PDFField.ts:132](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L132)*

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

*Defined in [api/form/PDFField.ts:173](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFField.ts#L173)*

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

*Defined in [api/form/PDFCheckBox.ts:195](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L195)*

Returns `true` if any of this check box's widgets do not have an
appearance stream for its current state. For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
if (checkBox.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this check box needs an appearance update.

___

###  uncheck

▸ **uncheck**(): *void*

*Defined in [api/form/PDFCheckBox.ts:106](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L106)*

Clears this check box. This operation is analogous to a human user clicking
a check box to unmark it in a PDF reader. This method will update the
underlying state of the check box field to indicate it has been deselected.
PDF libraries and readers will be able to extract this value from the
saved document and determine that it was not selected.

For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
checkBox.uncheck()
```

This method will mark this check box as dirty. See [PDFCheckBox.check](pdfcheckbox.md#check)
for more details about what this means.

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFCheckBox](pdfcheckbox.md)›): *void*

*Defined in [api/form/PDFCheckBox.ts:236](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L236)*

Update the appearance streams for each of this check box's widgets using
the given appearance provider. If no `provider` is passed, the default
appearance provider for check boxs will be used. For example:
```js
const checkBox = form.getCheckBox('some.checkBox.field')
checkBox.updateAppearances((field, widget) => {
  ...
  return {
    normal: { on: drawCheckBox(...), off: drawCheckBox(...) },
    down: { on: drawCheckBox(...), off: drawCheckBox(...) },
  }
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFCheckBox](pdfcheckbox.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroCheckBox`: PDFAcroCheckBox, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFCheckBox](pdfcheckbox.md)‹›*

*Defined in [api/form/PDFCheckBox.ts:45](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFCheckBox.ts#L45)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getCheckBox](pdfform.md#getcheckbox) method, which will create an
> instance of [PDFCheckBox](pdfcheckbox.md) for you.

Create an instance of [PDFCheckBox](pdfcheckbox.md) from an existing acroCheckBox and ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroCheckBox` | PDFAcroCheckBox | The underlying `PDFAcroCheckBox` for this check box. |
`ref` | PDFRef | The unique reference for this check box. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this check box will belong.  |

**Returns:** *[PDFCheckBox](pdfcheckbox.md)‹›*
