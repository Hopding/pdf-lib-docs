---
id: "pdfdropdown"
title: "PDFDropdown"
sidebar_label: "PDFDropdown"
---

[pdf-lib](../index.md) › [PDFDropdown](pdfdropdown.md)

Represents a dropdown field of a [PDFForm](pdfform.md).

[PDFDropdown](pdfdropdown.md) fields are interactive text boxes that display a single
element (the currently selected value). The purpose of a dropdown is to
enable users to select a single option from a set of possible options. Users
can click on a dropdown to view the full list of options it provides.
Clicking on an option in the list will cause it to be selected and displayed
in the dropdown's text box. Some dropdowns allow users to enter text
directly into the box from their keyboard, rather than only being allowed to
choose an option from the list (see [PDFDropdown.isEditable](pdfdropdown.md#iseditable)).

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFDropdown**

## Index

### Properties

* [acroField](pdfdropdown.md#acrofield)
* [doc](pdfdropdown.md#doc)
* [ref](pdfdropdown.md#ref)

### Methods

* [addOptions](pdfdropdown.md#addoptions)
* [addToPage](pdfdropdown.md#addtopage)
* [clear](pdfdropdown.md#clear)
* [defaultUpdateAppearances](pdfdropdown.md#defaultupdateappearances)
* [disableEditing](pdfdropdown.md#disableediting)
* [disableExporting](pdfdropdown.md#disableexporting)
* [disableMultiselect](pdfdropdown.md#disablemultiselect)
* [disableReadOnly](pdfdropdown.md#disablereadonly)
* [disableRequired](pdfdropdown.md#disablerequired)
* [disableSelectOnClick](pdfdropdown.md#disableselectonclick)
* [disableSorting](pdfdropdown.md#disablesorting)
* [disableSpellChecking](pdfdropdown.md#disablespellchecking)
* [enableEditing](pdfdropdown.md#enableediting)
* [enableExporting](pdfdropdown.md#enableexporting)
* [enableMultiselect](pdfdropdown.md#enablemultiselect)
* [enableReadOnly](pdfdropdown.md#enablereadonly)
* [enableRequired](pdfdropdown.md#enablerequired)
* [enableSelectOnClick](pdfdropdown.md#enableselectonclick)
* [enableSorting](pdfdropdown.md#enablesorting)
* [enableSpellChecking](pdfdropdown.md#enablespellchecking)
* [getName](pdfdropdown.md#getname)
* [getOptions](pdfdropdown.md#getoptions)
* [getSelected](pdfdropdown.md#getselected)
* [isEditable](pdfdropdown.md#iseditable)
* [isExported](pdfdropdown.md#isexported)
* [isMultiselect](pdfdropdown.md#ismultiselect)
* [isReadOnly](pdfdropdown.md#isreadonly)
* [isRequired](pdfdropdown.md#isrequired)
* [isSelectOnClick](pdfdropdown.md#isselectonclick)
* [isSorted](pdfdropdown.md#issorted)
* [isSpellChecked](pdfdropdown.md#isspellchecked)
* [needsAppearancesUpdate](pdfdropdown.md#needsappearancesupdate)
* [select](pdfdropdown.md#select)
* [setOptions](pdfdropdown.md#setoptions)
* [updateAppearances](pdfdropdown.md#updateappearances)
* [of](pdfdropdown.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroComboBox*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFDropdown.ts:55](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L55)*

The low-level PDFAcroComboBox wrapped by this dropdown.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Inherited from [PDFField](pdffield.md).[doc](pdffield.md#doc)*

*Defined in [api/form/PDFField.ts:80](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L80)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Inherited from [PDFField](pdffield.md).[ref](pdffield.md#ref)*

*Defined in [api/form/PDFField.ts:77](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L77)*

The unique reference assigned to this field within the document.

## Methods

###  addOptions

▸ **addOptions**(`options`: string | string[]): *void*

*Defined in [api/form/PDFDropdown.ts:157](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L157)*

Add to the list of options that are available for this dropdown. Users
will be able to select these values in a PDF reader. In addition to the
values passed as `options`, any preexisting options for this dropdown will
still be available for users to select.
For example:
```js
const dropdown = form.getDropdown('rockets.dropdown')
dropdown.addOptions(['Saturn IV', 'Falcon Heavy'])
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | string &#124; string[] | New options that should be available in this dropdown.  |

**Returns:** *void*

___

###  addToPage

▸ **addToPage**(`page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFDropdown.ts:503](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L503)*

Show this dropdown on the specified page. For example:
```js
const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const dropdown = form.createDropdown('best.gundam')
dropdown.setOptions(['Exia', 'Dynames'])
dropdown.select('Exia')

dropdown.addToPage(page, {
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
This will create a new widget for this dropdown field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page` | [PDFPage](pdfpage.md) | The page to which this dropdown widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding this dropdown widget.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [api/form/PDFDropdown.ts:261](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L261)*

Clear all selected values for this dropdown. This operation is equivalent
to selecting an empty list. This method will update the underlying state
of the dropdown to indicate that no values have been selected.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.clear()
```
This method will mark this text field as dirty. See [PDFDropdown.select](pdfdropdown.md#select)
for more details about what this means.

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(`font`: [PDFFont](pdffont.md)): *void*

*Overrides void*

*Defined in [api/form/PDFDropdown.ts:572](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L572)*

Update the appearance streams for each of this dropdown's widgets using
the default appearance provider for dropdowns. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.defaultUpdateAppearances(helvetica)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams.  |

**Returns:** *void*

___

###  disableEditing

▸ **disableEditing**(): *void*

*Defined in [api/form/PDFDropdown.ts:308](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L308)*

Do not allow users to edit the selected value of this dropdown in PDF
readers with their keyboard. This will constrain the selected value of
this dropdown to the list of available options. Users will only be able
to select an option from that list.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.disableEditing()
```

**Returns:** *void*

___

###  disableExporting

▸ **disableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[disableExporting](pdffield.md#disableexporting)*

*Defined in [api/form/PDFField.ts:235](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L235)*

Indicate that this field's value should **not** be exported when the form
is submitted in a PDF reader. For example:
```js
const field = form.getField('some.field')
field.disableExporting()
```

**Returns:** *void*

___

###  disableMultiselect

▸ **disableMultiselect**(): *void*

*Defined in [api/form/PDFDropdown.ts:387](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L387)*

Do not allow users to select more than one option from this dropdown's
option list. For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.disableMultiselect()
```

**Returns:** *void*

___

###  disableReadOnly

▸ **disableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[disableReadOnly](pdffield.md#disablereadonly)*

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

*Inherited from [PDFField](pdffield.md).[disableRequired](pdffield.md#disablerequired)*

*Defined in [api/form/PDFField.ts:196](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L196)*

Do not require this field to have a value when the form is submitted.
For example:
```js
const field = form.getField('some.field')
field.disableRequired()
```

**Returns:** *void*

___

###  disableSelectOnClick

▸ **disableSelectOnClick**(): *void*

*Defined in [api/form/PDFDropdown.ts:471](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L471)*

Wait to store the option selected by a user until they leave this dropdown
field (by clicking outside of it - on another field, for example).
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.disableSelectOnClick()
```

**Returns:** *void*

___

###  disableSorting

▸ **disableSorting**(): *void*

*Defined in [api/form/PDFDropdown.ts:349](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L349)*

Do not always display the option list of this dropdown in alphabetical
order. Instead, display the options in whichever order they were added
to the list. For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.disableSorting()
```

**Returns:** *void*

___

###  disableSpellChecking

▸ **disableSpellChecking**(): *void*

*Defined in [api/form/PDFDropdown.ts:427](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L427)*

Do not allow PDF readers to spell check the selected option of this
dropdown. For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.disableSpellChecking()
```

**Returns:** *void*

___

###  enableEditing

▸ **enableEditing**(): *void*

*Defined in [api/form/PDFDropdown.ts:293](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L293)*

Allow users to edit the selected value of this dropdown in PDF readers
with their keyboard. This means that the selected value of this dropdown
will not be constrained by the list of available options. However, if this
dropdown has any available options, users will still be allowed to select
from that list.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.enableEditing()
```

**Returns:** *void*

___

###  enableExporting

▸ **enableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[enableExporting](pdffield.md#enableexporting)*

*Defined in [api/form/PDFField.ts:223](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L223)*

Indicate that this field's value should be exported when the form is
submitted in a PDF reader. For example:
```js
const field = form.getField('some.field')
field.enableExporting()
```

**Returns:** *void*

___

###  enableMultiselect

▸ **enableMultiselect**(): *void*

*Defined in [api/form/PDFDropdown.ts:375](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L375)*

Allow users to select more than one option from this dropdown's option
list. For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.enableMultiselect()
```

**Returns:** *void*

___

###  enableReadOnly

▸ **enableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[enableReadOnly](pdffield.md#enablereadonly)*

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

*Inherited from [PDFField](pdffield.md).[enableRequired](pdffield.md#enablerequired)*

*Defined in [api/form/PDFField.ts:184](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFField.ts#L184)*

Require this field to have a value when the form is submitted.
For example:
```js
const field = form.getField('some.field')
field.enableRequired()
```

**Returns:** *void*

___

###  enableSelectOnClick

▸ **enableSelectOnClick**(): *void*

*Defined in [api/form/PDFDropdown.ts:458](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L458)*

Store the option selected by a user immediately after the user clicks the
option. Do not wait for the user to leave this dropdown field (by clicking
outside of it - on another field, for example). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.enableSelectOnClick()
```

**Returns:** *void*

___

###  enableSorting

▸ **enableSorting**(): *void*

*Defined in [api/form/PDFDropdown.ts:336](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L336)*

Always display the option list of this dropdown in alphabetical order,
irrespective of the order in which the options were added to this dropdown.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.enableSorting()
```

**Returns:** *void*

___

###  enableSpellChecking

▸ **enableSpellChecking**(): *void*

*Defined in [api/form/PDFDropdown.ts:415](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L415)*

Allow PDF readers to spell check the selected option of this dropdown.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.enableSpellChecking()
```

**Returns:** *void*

___

###  getName

▸ **getName**(): *string*

*Inherited from [PDFField](pdffield.md).[getName](pdffield.md#getname)*

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

###  getOptions

▸ **getOptions**(): *string[]*

*Defined in [api/form/PDFDropdown.ts:82](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L82)*

Get the list of available options for this dropdown. These options will be
displayed to users who click on this dropdown in a PDF reader.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
const options = dropdown.getOptions()
console.log('Dropdown options:', options)
```

**Returns:** *string[]*

The options for this dropdown.

___

###  getSelected

▸ **getSelected**(): *string[]*

*Defined in [api/form/PDFDropdown.ts:111](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L111)*

Get the selected options for this dropdown. These are the values that were
selected by a human user via a PDF reader, or programatically via
software.
For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
const selections = dropdown.getSelected()
console.log('Dropdown selections:', selections)
```
> **NOTE:** Note that PDF readers only display one selected option when
> rendering dropdowns. However, the PDF specification does allow for
> multiple values to be selected in a dropdown. As such, the `pdf-lib`
> API supports this. However, in most cases the array returned by this
> method will contain only a single element (or no elements).

**Returns:** *string[]*

The selected options in this dropdown.

___

###  isEditable

▸ **isEditable**(): *boolean*

*Defined in [api/form/PDFDropdown.ts:277](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L277)*

Returns `true` if users are allowed to edit the selected value of this
dropdown directly and are not constrained by the list of available
options. See [PDFDropdown.enableEditing](pdfdropdown.md#enableediting) and
[PDFDropdown.disableEditing](pdfdropdown.md#disableediting). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.isEditable()) console.log('Editing is enabled')
```

**Returns:** *boolean*

Whether or not this dropdown is editable.

___

###  isExported

▸ **isExported**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isExported](pdffield.md#isexported)*

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

###  isMultiselect

▸ **isMultiselect**(): *boolean*

*Defined in [api/form/PDFDropdown.ts:363](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L363)*

Returns `true` if multiple options can be selected from this dropdown's
option list. See [PDFDropdown.enableMultiselect](pdfdropdown.md#enablemultiselect) and
[PDFDropdown.disableMultiselect](pdfdropdown.md#disablemultiselect). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.isMultiselect()) console.log('Multiselect is enabled')
```

**Returns:** *boolean*

Whether or not multiple options can be selected.

___

###  isReadOnly

▸ **isReadOnly**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isReadOnly](pdffield.md#isreadonly)*

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

*Inherited from [PDFField](pdffield.md).[isRequired](pdffield.md#isrequired)*

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

___

###  isSelectOnClick

▸ **isSelectOnClick**(): *boolean*

*Defined in [api/form/PDFDropdown.ts:445](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L445)*

Returns `true` if the option selected by a user is stored, or "committed",
when the user clicks the option. The alternative is that the user's
selection is stored when the user leaves this dropdown field (by clicking
outside of it - on another field, for example). See
[PDFDropdown.enableSelectOnClick](pdfdropdown.md#enableselectonclick) and
[PDFDropdown.disableSelectOnClick](pdfdropdown.md#disableselectonclick). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.isSelectOnClick()) console.log('Select on click is enabled')
```

**Returns:** *boolean*

Whether or not options are selected immediately after they are
         clicked.

___

###  isSorted

▸ **isSorted**(): *boolean*

*Defined in [api/form/PDFDropdown.ts:323](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L323)*

Returns `true` if the option list of this dropdown is always displayed
in alphabetical order, irrespective of the order in which the options
were added to the dropdown. See [PDFDropdown.enableSorting](pdfdropdown.md#enablesorting) and
[PDFDropdown.disableSorting](pdfdropdown.md#disablesorting). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.isSorted()) console.log('Sorting is enabled')
```

**Returns:** *boolean*

Whether or not this dropdown's options are sorted.

___

###  isSpellChecked

▸ **isSpellChecked**(): *boolean*

*Defined in [api/form/PDFDropdown.ts:403](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L403)*

Returns `true` if the selected option should be spell checked by PDF
readers. Spell checking will only be performed if this dropdown allows
editing (see [PDFDropdown.isEditable](pdfdropdown.md#iseditable)). See
[PDFDropdown.enableSpellChecking](pdfdropdown.md#enablespellchecking) and
[PDFDropdown.disableSpellChecking](pdfdropdown.md#disablespellchecking). For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.isSpellChecked()) console.log('Spell checking is enabled')
```

**Returns:** *boolean*

Whether or not this dropdown can be spell checked.

___

###  needsAppearancesUpdate

▸ **needsAppearancesUpdate**(): *boolean*

*Overrides void*

*Defined in [api/form/PDFDropdown.ts:548](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L548)*

Returns `true` if this dropdown has been marked as dirty, or if any of
this dropdown's widgets do not have an appearance stream. For example:
```js
const dropdown = form.getDropdown('some.dropdown.field')
if (dropdown.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this dropdown needs an appearance update.

___

###  select

▸ **select**(`options`: string | string[], `merge`: boolean): *void*

*Defined in [api/form/PDFDropdown.ts:218](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L218)*

Select one or more values for this dropdown. This operation is analogous
to a human user opening the dropdown in a PDF reader and clicking on a
value to select it. This method will update the underlying state of the
dropdown to indicate which values have been selected. PDF libraries and
readers will be able to extract these values from the saved document and
determine which values were selected.

For example:
```js
const dropdown = form.getDropdown('best.superhero.dropdown')
dropdown.select('One Punch Man')
```

This method will mark this dropdown as dirty, causing its appearance
streams to be updated when either [PDFDocument.save](pdfdocument.md#save) or
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) is called. The updated streams will
display the selected option inside the widgets of this dropdown.

**IMPORTANT:** The default font used to update appearance streams is
[StandardFonts.Helvetica](../enums/standardfonts.md#helvetica). Note that this is a WinAnsi font. This means
that encoding errors will be thrown if the selected option for this field
contains characters outside the WinAnsi character set (the latin alphabet).

Embedding a custom font and passing it to
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) or [PDFDropdown.updateAppearances](pdfdropdown.md#updateappearances)
allows you to generate appearance streams with characters outside the
latin alphabet (assuming the custom font supports them).

Selecting an option that does not exist in this dropdown's option list
(see [PDFDropdown.getOptions](pdfdropdown.md#getoptions)) will enable editing on this dropdown
(see [PDFDropdown.enableEditing](pdfdropdown.md#enableediting)).

> **NOTE:** PDF readers only display one selected option when rendering
> dropdowns. However, the PDF specification does allow for multiple values
> to be selected in a dropdown. As such, the `pdf-lib` API supports this.
> However, it is not recommended to select more than one value with this
> method, as only one will be visible. [PDFOptionList](pdfoptionlist.md) fields are better
> suited for displaying multiple selected values.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | string &#124; string[] | - | The options to be selected. |
`merge` | boolean | false | Whether or not existing selections should be preserved.  |

**Returns:** *void*

___

###  setOptions

▸ **setOptions**(`options`: string[]): *void*

*Defined in [api/form/PDFDropdown.ts:135](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L135)*

Set the list of options that are available for this dropdown. These are
the values that will be available for users to select when they view this
dropdown in a PDF reader. Note that preexisting options for this dropdown
will be removed. Only the values passed as `options` will be available to
select.
For example:
```js
const dropdown = form.getDropdown('planets.dropdown')
dropdown.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | string[] | The options that should be available in this dropdown.  |

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`font`: [PDFFont](pdffont.md), `provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFDropdown](pdfdropdown.md)›): *void*

*Defined in [api/form/PDFDropdown.ts:593](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L593)*

Update the appearance streams for each of this dropdown's widgets using
the given appearance provider. If no `provider` is passed, the default
appearance provider for dropdowns will be used. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const dropdown = form.getDropdown('some.dropdown.field')
dropdown.updateAppearances(helvetica, (field, widget, font) => {
  ...
  return drawTextField(...)
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams. |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFDropdown](pdfdropdown.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroComboBox`: PDFAcroComboBox, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFDropdown](pdfdropdown.md)‹›*

*Defined in [api/form/PDFDropdown.ts:51](https://github.com/Hopding/pdf-lib/blob/aa457ba/src/api/form/PDFDropdown.ts#L51)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getDropdown](pdfform.md#getdropdown) method, which will create an
> instance of [PDFDropdown](pdfdropdown.md) for you.

Create an instance of [PDFDropdown](pdfdropdown.md) from an existing acroComboBox and ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroComboBox` | PDFAcroComboBox | The underlying `PDFAcroComboBox` for this dropdown. |
`ref` | PDFRef | The unique reference for this dropdown. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this dropdown will belong.  |

**Returns:** *[PDFDropdown](pdfdropdown.md)‹›*
