---
id: "pdffield"
title: "PDFField"
sidebar_label: "PDFField"
---

[pdf-lib](../index.md) › [PDFField](pdffield.md)

Represents a field of a [PDFForm](pdfform.md).

This class is effectively abstract. All fields in a [PDFForm](pdfform.md) will
actually be an instance of a subclass of this class.

Note that each field in a PDF is represented by a single field object.
However, a given field object may be rendered at multiple locations within
the document (across one or more pages). The rendering of a field is
controlled by its widgets. Each widget causes its field to be displayed at a
particular location in the document.

Most of the time each field in a PDF has only a single widget, and thus is
only rendered once. However, if a field is rendered multiple times, it will
have multiple widgets - one for each location it is rendered.

This abstraction of field objects and widgets is defined in the PDF
specification and dictates how PDF files store fields and where they are
to be rendered.

## Hierarchy

* **PDFField**

  ↳ [PDFButton](pdfbutton.md)

  ↳ [PDFCheckBox](pdfcheckbox.md)

  ↳ [PDFDropdown](pdfdropdown.md)

  ↳ [PDFOptionList](pdfoptionlist.md)

  ↳ [PDFRadioGroup](pdfradiogroup.md)

  ↳ [PDFSignature](pdfsignature.md)

  ↳ [PDFTextField](pdftextfield.md)

## Index

### Properties

* [acroField](pdffield.md#acrofield)
* [doc](pdffield.md#doc)
* [ref](pdffield.md#ref)

### Methods

* [disableExporting](pdffield.md#disableexporting)
* [disableReadOnly](pdffield.md#disablereadonly)
* [disableRequired](pdffield.md#disablerequired)
* [enableExporting](pdffield.md#enableexporting)
* [enableReadOnly](pdffield.md#enablereadonly)
* [enableRequired](pdffield.md#enablerequired)
* [getName](pdffield.md#getname)
* [isExported](pdffield.md#isexported)
* [isReadOnly](pdffield.md#isreadonly)
* [isRequired](pdffield.md#isrequired)

## Properties

###  acroField

• **acroField**: *PDFAcroField*

*Defined in [api/form/PDFField.ts:74](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L74)*

The low-level PDFAcroField wrapped by this field.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/form/PDFField.ts:80](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L80)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Defined in [api/form/PDFField.ts:77](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L77)*

The unique reference assigned to this field within the document.

## Methods

###  disableExporting

▸ **disableExporting**(): *void*

*Defined in [api/form/PDFField.ts:235](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L235)*

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

*Defined in [api/form/PDFField.ts:158](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L158)*

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

*Defined in [api/form/PDFField.ts:196](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L196)*

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

*Defined in [api/form/PDFField.ts:223](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L223)*

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

*Defined in [api/form/PDFField.ts:146](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L146)*

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

*Defined in [api/form/PDFField.ts:184](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L184)*

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

*Defined in [api/form/PDFField.ts:116](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L116)*

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

*Defined in [api/form/PDFField.ts:211](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L211)*

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

*Defined in [api/form/PDFField.ts:131](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L131)*

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

*Defined in [api/form/PDFField.ts:172](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L172)*

Returns `true` if this field must have a value when the form is submitted.
See [PDFField.enableRequired](pdffield.md#enablerequired) and [PDFField.disableRequired](pdffield.md#disablerequired).
For example:
```js
const field = form.getField('some.field')
if (field.isRequired()) console.log('Field is required')
```

**Returns:** *boolean*

Whether or not this field is required.
