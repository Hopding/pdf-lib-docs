---
id: "pdfsignature"
title: "PDFSignature"
sidebar_label: "PDFSignature"
---

[pdf-lib](../index.md) › [PDFSignature](pdfsignature.md)

Represents a signature field of a [PDFForm](pdfform.md).

[PDFSignature](pdfsignature.md) fields are digital signatures. `pdf-lib` does not
currently provide any specialized APIs for creating digital signatures or
reading the contents of existing digital signatures.

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFSignature**

## Index

### Properties

* [acroField](pdfsignature.md#acrofield)
* [doc](pdfsignature.md#doc)
* [ref](pdfsignature.md#ref)

### Methods

* [disableExporting](pdfsignature.md#disableexporting)
* [disableReadOnly](pdfsignature.md#disablereadonly)
* [disableRequired](pdfsignature.md#disablerequired)
* [enableExporting](pdfsignature.md#enableexporting)
* [enableReadOnly](pdfsignature.md#enablereadonly)
* [enableRequired](pdfsignature.md#enablerequired)
* [getName](pdfsignature.md#getname)
* [isExported](pdfsignature.md#isexported)
* [isReadOnly](pdfsignature.md#isreadonly)
* [isRequired](pdfsignature.md#isrequired)
* [needsAppearancesUpdate](pdfsignature.md#needsappearancesupdate)
* [of](pdfsignature.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroSignature*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFSignature.ts:34](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFSignature.ts#L34)*

The low-level PDFAcroSignature wrapped by this signature.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Inherited from [PDFField](pdffield.md).[doc](pdffield.md#doc)*

*Defined in [api/form/PDFField.ts:97](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L97)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Inherited from [PDFField](pdffield.md).[ref](pdffield.md#ref)*

*Defined in [api/form/PDFField.ts:94](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L94)*

The unique reference assigned to this field within the document.

## Methods

###  disableExporting

▸ **disableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[disableExporting](pdffield.md#disableexporting)*

*Defined in [api/form/PDFField.ts:252](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L252)*

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

*Defined in [api/form/PDFField.ts:175](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L175)*

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

*Defined in [api/form/PDFField.ts:213](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L213)*

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

*Defined in [api/form/PDFField.ts:240](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L240)*

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

*Defined in [api/form/PDFField.ts:163](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L163)*

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

*Defined in [api/form/PDFField.ts:201](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L201)*

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

*Defined in [api/form/PDFField.ts:133](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L133)*

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

*Defined in [api/form/PDFField.ts:228](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L228)*

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

*Defined in [api/form/PDFField.ts:148](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L148)*

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

*Defined in [api/form/PDFField.ts:189](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFField.ts#L189)*

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

*Defined in [api/form/PDFSignature.ts:50](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFSignature.ts#L50)*

**Returns:** *boolean*

___

### `Static` of

▸ **of**(`acroSignature`: PDFAcroSignature, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFSignature](pdfsignature.md)‹›*

*Defined in [api/form/PDFSignature.ts:27](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFSignature.ts#L27)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getSignature](pdfform.md#getsignature) method, which will create an
> instance of [PDFSignature](pdfsignature.md) for you.

Create an instance of [PDFSignature](pdfsignature.md) from an existing acroSignature and
ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroSignature` | PDFAcroSignature | The underlying `PDFAcroSignature` for this signature. |
`ref` | PDFRef | The unique reference for this signature. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this signature will belong.  |

**Returns:** *[PDFSignature](pdfsignature.md)‹›*
