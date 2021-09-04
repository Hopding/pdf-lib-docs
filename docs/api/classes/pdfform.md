---
id: "pdfform"
title: "PDFForm"
sidebar_label: "PDFForm"
---

[pdf-lib](../index.md) › [PDFForm](pdfform.md)

Represents the interactive form of a [PDFDocument](pdfdocument.md).

Interactive forms (sometimes called _AcroForms_) are collections of fields
designed to gather information from a user. A PDF document may contains any
number of fields that appear on various pages, all of which make up a single,
global interactive form spanning the entire document. This means that
instances of [PDFDocument](pdfdocument.md) shall contain at most one [PDFForm](pdfform.md).

The fields of an interactive form are represented by [PDFField](pdffield.md) instances.

## Hierarchy

* **PDFForm**

## Index

### Properties

* [acroForm](pdfform.md#acroform)
* [doc](pdfform.md#doc)

### Methods

* [createButton](pdfform.md#createbutton)
* [createCheckBox](pdfform.md#createcheckbox)
* [createDropdown](pdfform.md#createdropdown)
* [createOptionList](pdfform.md#createoptionlist)
* [createRadioGroup](pdfform.md#createradiogroup)
* [createTextField](pdfform.md#createtextfield)
* [deleteXFA](pdfform.md#deletexfa)
* [fieldIsDirty](pdfform.md#fieldisdirty)
* [flatten](pdfform.md#flatten)
* [getButton](pdfform.md#getbutton)
* [getCheckBox](pdfform.md#getcheckbox)
* [getDefaultFont](pdfform.md#getdefaultfont)
* [getDropdown](pdfform.md#getdropdown)
* [getField](pdfform.md#getfield)
* [getFieldMaybe](pdfform.md#getfieldmaybe)
* [getFields](pdfform.md#getfields)
* [getOptionList](pdfform.md#getoptionlist)
* [getRadioGroup](pdfform.md#getradiogroup)
* [getSignature](pdfform.md#getsignature)
* [getTextField](pdfform.md#gettextfield)
* [hasXFA](pdfform.md#hasxfa)
* [markFieldAsClean](pdfform.md#markfieldasclean)
* [markFieldAsDirty](pdfform.md#markfieldasdirty)
* [removeField](pdfform.md#removefield)
* [updateFieldAppearances](pdfform.md#updatefieldappearances)
* [of](pdfform.md#static-of)

## Properties

###  acroForm

• **acroForm**: *PDFAcroForm*

*Defined in [api/form/PDFForm.ts:76](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L76)*

The low-level PDFAcroForm wrapped by this form.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Defined in [api/form/PDFForm.ts:79](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L79)*

The document to which this form belongs.

## Methods

###  createButton

▸ **createButton**(`name`: string): *[PDFButton](pdfbutton.md)*

*Defined in [api/form/PDFForm.ts:347](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L347)*

Create a new button field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const button = form.createButton('cool.new.button')

button.addToPage('Do Stuff', font, page)
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new button. |

**Returns:** *[PDFButton](pdfbutton.md)*

The new button field.

___

###  createCheckBox

▸ **createCheckBox**(`name`: string): *[PDFCheckBox](pdfcheckbox.md)*

*Defined in [api/form/PDFForm.ts:377](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L377)*

Create a new check box field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const checkBox = form.createCheckBox('cool.new.checkBox')

checkBox.addToPage(page)
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new check box. |

**Returns:** *[PDFCheckBox](pdfcheckbox.md)*

The new check box field.

___

###  createDropdown

▸ **createDropdown**(`name`: string): *[PDFDropdown](pdfdropdown.md)*

*Defined in [api/form/PDFForm.ts:407](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L407)*

Create a new dropdown field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const dropdown = form.createDropdown('cool.new.dropdown')

dropdown.addToPage(font, page)
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new dropdown. |

**Returns:** *[PDFDropdown](pdfdropdown.md)*

The new dropdown field.

___

###  createOptionList

▸ **createOptionList**(`name`: string): *[PDFOptionList](pdfoptionlist.md)*

*Defined in [api/form/PDFForm.ts:437](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L437)*

Create a new option list field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const optionList = form.createOptionList('cool.new.optionList')

optionList.addToPage(font, page)
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new option list. |

**Returns:** *[PDFOptionList](pdfoptionlist.md)*

The new option list field.

___

###  createRadioGroup

▸ **createRadioGroup**(`name`: string): *[PDFRadioGroup](pdfradiogroup.md)*

*Defined in [api/form/PDFForm.ts:468](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L468)*

Create a new radio group field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const radioGroup = form.createRadioGroup('cool.new.radioGroup')

radioGroup.addOptionToPage('is-dog', page, { y: 0 })
radioGroup.addOptionToPage('is-cat', page, { y: 75 })
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new radio group. |

**Returns:** *[PDFRadioGroup](pdfradiogroup.md)*

The new radio group field.

___

###  createTextField

▸ **createTextField**(`name`: string): *[PDFTextField](pdftextfield.md)*

*Defined in [api/form/PDFForm.ts:502](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L502)*

Create a new text field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const textField = form.createTextField('cool.new.textField')

textField.addToPage(font, page)
```
An error will be thrown if a field already exists with the provided name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The fully qualified name for the new radio group. |

**Returns:** *[PDFTextField](pdftextfield.md)*

The new radio group field.

___

###  deleteXFA

▸ **deleteXFA**(): *void*

*Defined in [api/form/PDFForm.ts:124](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L124)*

Disconnect the XFA data from this [PDFForm](pdfform.md) (if any exists). This will
force readers to fallback to standard fields if the [PDFDocument](pdfdocument.md)
contains any. For example:

For example:
```js
const form = pdfDoc.getForm()
form.deleteXFA()
```

**Returns:** *void*

___

###  fieldIsDirty

▸ **fieldIsDirty**(`fieldRef`: PDFRef): *boolean*

*Defined in [api/form/PDFForm.ts:686](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L686)*

Returns `true` is the specified field has been marked as dirty.
```js
const form = pdfDoc.getForm()
const field = form.getField('foo.bar')
if (form.fieldIsDirty(field.ref)) console.log('Field is dirty')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fieldRef` | PDFRef | The reference to the field that should be checked. |

**Returns:** *boolean*

Whether or not the specified field is dirty.

___

###  flatten

▸ **flatten**(`options`: [FlattenOptions](../interfaces/flattenoptions.md)): *void*

*Defined in [api/form/PDFForm.ts:537](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L537)*

Flatten all fields in this [PDFForm](pdfform.md).

Flattening a form field will take the current appearance for each of that
field's widgets and make them part of their page's content stream. All form
fields and annotations associated are then removed. Note that once a form
has been flattened its fields can no longer be accessed or edited.

This operation is often used after filling form fields to ensure a
consistent appearance across different PDF readers and/or printers.
Another common use case is to copy a template document with form fields
into another document. In this scenario you would load the template
document, fill its fields, flatten it, and then copy its pages into the
recipient document - the filled fields will be copied over.

For example:
```js
const form = pdfDoc.getForm();
form.flatten();
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [FlattenOptions](../interfaces/flattenoptions.md) | { updateFieldAppearances: true } |

**Returns:** *void*

___

###  getButton

▸ **getButton**(`name`: string): *[PDFButton](pdfbutton.md)*

*Defined in [api/form/PDFForm.ts:202](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L202)*

Get the button field in this [PDFForm](pdfform.md) with the given name. For example:
```js
const form = pdfDoc.getForm()
const button = form.getButton('Page1.Foo.Button[0]')
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a button.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified button name. |

**Returns:** *[PDFButton](pdfbutton.md)*

The button with the specified name.

___

###  getCheckBox

▸ **getCheckBox**(`name`: string): *[PDFCheckBox](pdfcheckbox.md)*

*Defined in [api/form/PDFForm.ts:222](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L222)*

Get the check box field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const checkBox = form.getCheckBox('Page1.Foo.CheckBox[0]')
checkBox.check()
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a check box.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified check box name. |

**Returns:** *[PDFCheckBox](pdfcheckbox.md)*

The check box with the specified name.

___

###  getDefaultFont

▸ **getDefaultFont**(): *[PDFFont](pdffont.md)‹›*

*Defined in [api/form/PDFForm.ts:691](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L691)*

**Returns:** *[PDFFont](pdffont.md)‹›*

___

###  getDropdown

▸ **getDropdown**(`name`: string): *[PDFDropdown](pdfdropdown.md)*

*Defined in [api/form/PDFForm.ts:243](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L243)*

Get the dropdown field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const dropdown = form.getDropdown('Page1.Foo.Dropdown[0]')
const options = dropdown.getOptions()
dropdown.select(options[0])
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a dropdown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified dropdown name. |

**Returns:** *[PDFDropdown](pdfdropdown.md)*

The dropdown with the specified name.

___

###  getField

▸ **getField**(`name`: string): *[PDFField](pdffield.md)*

*Defined in [api/form/PDFForm.ts:184](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L184)*

Get the field in this [PDFForm](pdfform.md) with the given name. For example:
```js
const form = pdfDoc.getForm()
const field = form.getField('Page1.Foo.Bar[0]')
```
If no field exists with the provided name, an error will be thrown.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified field name. |

**Returns:** *[PDFField](pdffield.md)*

The field with the specified name.

___

###  getFieldMaybe

▸ **getFieldMaybe**(`name`: string): *[PDFField](pdffield.md) | undefined*

*Defined in [api/form/PDFForm.ts:164](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L164)*

Get the field in this [PDFForm](pdfform.md) with the given name. For example:
```js
const form = pdfDoc.getForm()
const field = form.getFieldMaybe('Page1.Foo.Bar[0]')
if (field) console.log('Field exists!')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified field name. |

**Returns:** *[PDFField](pdffield.md) | undefined*

The field with the specified name, if one exists.

___

###  getFields

▸ **getFields**(): *[PDFField](pdffield.md)[]*

*Defined in [api/form/PDFForm.ts:141](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L141)*

Get all fields contained in this [PDFForm](pdfform.md). For example:
```js
const form = pdfDoc.getForm()
const fields = form.getFields()
fields.forEach(field => {
  const type = field.constructor.name
  const name = field.getName()
  console.log(`${type}: ${name}`)
})
```

**Returns:** *[PDFField](pdffield.md)[]*

An array of all fields in this form.

___

###  getOptionList

▸ **getOptionList**(`name`: string): *[PDFOptionList](pdfoptionlist.md)*

*Defined in [api/form/PDFForm.ts:264](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L264)*

Get the option list field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const optionList = form.getOptionList('Page1.Foo.OptionList[0]')
const options = optionList.getOptions()
optionList.select(options[0])
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not an option list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified option list name. |

**Returns:** *[PDFOptionList](pdfoptionlist.md)*

The option list with the specified name.

___

###  getRadioGroup

▸ **getRadioGroup**(`name`: string): *[PDFRadioGroup](pdfradiogroup.md)*

*Defined in [api/form/PDFForm.ts:285](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L285)*

Get the radio group field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const radioGroup = form.getRadioGroup('Page1.Foo.RadioGroup[0]')
const options = radioGroup.getOptions()
dropdown.select(options[0])
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a radio group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified radio group name. |

**Returns:** *[PDFRadioGroup](pdfradiogroup.md)*

The radio group with the specified name.

___

###  getSignature

▸ **getSignature**(`name`: string): *[PDFSignature](pdfsignature.md)*

*Defined in [api/form/PDFForm.ts:304](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L304)*

Get the signature field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const signature = form.getSignature('Page1.Foo.Signature[0]')
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a signature.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified signature name. |

**Returns:** *[PDFSignature](pdfsignature.md)*

The signature with the specified name.

___

###  getTextField

▸ **getTextField**(`name`: string): *[PDFTextField](pdftextfield.md)*

*Defined in [api/form/PDFForm.ts:324](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L324)*

Get the text field in this [PDFForm](pdfform.md) with the given name.
For example:
```js
const form = pdfDoc.getForm()
const textField = form.getTextField('Page1.Foo.TextField[0]')
textField.setText('Are you designed to act or to be acted upon?')
```
An error will be thrown if no field exists with the provided name, or if
the field exists but is not a text field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A fully qualified text field name. |

**Returns:** *[PDFTextField](pdftextfield.md)*

The text field with the specified name.

___

###  hasXFA

▸ **hasXFA**(): *boolean*

*Defined in [api/form/PDFForm.ts:109](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L109)*

Returns `true` if this [PDFForm](pdfform.md) has XFA data. Most PDFs with form
fields do not use XFA as it is not widely supported by PDF readers.

> `pdf-lib` does not support creation, modification, or reading of XFA
> fields.

For example:
```js
const form = pdfDoc.getForm()
if (form.hasXFA()) console.log('PDF has XFA data')
```

**Returns:** *boolean*

Whether or not this form has XFA data.

___

###  markFieldAsClean

▸ **markFieldAsClean**(`fieldRef`: PDFRef): *void*

*Defined in [api/form/PDFForm.ts:671](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L671)*

Mark a field as dirty. This will cause its appearance streams to not be
updated by [PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances).
```js
const form = pdfDoc.getForm()
const field = form.getField('foo.bar')
form.markFieldAsClean(field.ref)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fieldRef` | PDFRef | The reference to the field that should be marked.  |

**Returns:** *void*

___

###  markFieldAsDirty

▸ **markFieldAsDirty**(`fieldRef`: PDFRef): *void*

*Defined in [api/form/PDFForm.ts:656](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L656)*

Mark a field as dirty. This will cause its appearance streams to be
updated by [PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances).
```js
const form = pdfDoc.getForm()
const field = form.getField('foo.bar')
form.markFieldAsDirty(field.ref)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fieldRef` | PDFRef | The reference to the field that should be marked.  |

**Returns:** *void*

___

###  removeField

▸ **removeField**(`field`: [PDFField](pdffield.md)): *void*

*Defined in [api/form/PDFForm.ts:583](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L583)*

Remove a field from this [PDFForm](pdfform.md).

For example:
```js
const form = pdfDoc.getForm();
const ageField = form.getFields().find(x => x.getName() === 'Age');
form.removeField(ageField);
```

**Parameters:**

Name | Type |
------ | ------ |
`field` | [PDFField](pdffield.md) |

**Returns:** *void*

___

###  updateFieldAppearances

▸ **updateFieldAppearances**(`font?`: [PDFFont](pdffont.md)): *void*

*Defined in [api/form/PDFForm.ts:631](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L631)*

Update the appearance streams for all widgets of all fields in this
[PDFForm](pdfform.md). Appearance streams will only be created for a widget if it
does not have any existing appearance streams, or the field's value has
changed (e.g. by calling [PDFTextField.setText](pdftextfield.md#settext) or
[PDFDropdown.select](pdfdropdown.md#select)).

For example:
```js
const courier = await pdfDoc.embedFont(StandardFonts.Courier)
const form = pdfDoc.getForm()
form.updateFieldAppearances(courier)
```

**IMPORTANT:** The default value for the `font` parameter is
[StandardFonts.Helvetica](../enums/standardfonts.md#helvetica). Note that this is a WinAnsi font. This means
that encoding errors will be thrown if any fields contain text with
characters outside the WinAnsi character set (the latin alphabet).

Embedding a custom font and passing that as the `font`
parameter allows you to generate appearance streams with non WinAnsi
characters (assuming your custom font supports them).

> **NOTE:** The [PDFDocument.save](pdfdocument.md#save) method will call this method to
> update appearances automatically if a form was accessed via the
> [PDFDocument.getForm](pdfdocument.md#getform) method prior to saving.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font?` | [PDFFont](pdffont.md) | Optionally, the font to use when creating new appearances.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroForm`: PDFAcroForm, `doc`: [PDFDocument](pdfdocument.md)): *[PDFForm](pdfform.md)‹›*

*Defined in [api/form/PDFForm.ts:72](https://github.com/Hopding/pdf-lib/blob/e10290a/src/api/form/PDFForm.ts#L72)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFDocument.getForm](pdfdocument.md#getform) method, which will create an
> instance of [PDFForm](pdfform.md) for you.

Create an instance of [PDFForm](pdfform.md) from an existing acroForm and embedder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroForm` | PDFAcroForm | The underlying `PDFAcroForm` for this form. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which the form will belong.  |

**Returns:** *[PDFForm](pdfform.md)‹›*
