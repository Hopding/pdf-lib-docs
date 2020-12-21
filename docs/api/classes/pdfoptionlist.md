---
id: "pdfoptionlist"
title: "PDFOptionList"
sidebar_label: "PDFOptionList"
---

[pdf-lib](../index.md) › [PDFOptionList](pdfoptionlist.md)

Represents an option list field of a [PDFForm](pdfform.md).

[PDFOptionList](pdfoptionlist.md) fields are interactive lists of options. The purpose of an
option list is to enable users to select one or more options from a set of
possible options. Users are able to see the full set of options without
first having to click on the field (though scrolling may be necessary).
Clicking an option in the list will cause it to be selected and displayed
with a highlighted background. Some option lists allow users to select
more than one option (see [PDFOptionList.isMultiselect](pdfoptionlist.md#ismultiselect)).

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFOptionList**

## Index

### Properties

* [acroField](pdfoptionlist.md#acrofield)
* [doc](pdfoptionlist.md#doc)
* [ref](pdfoptionlist.md#ref)

### Methods

* [addOptions](pdfoptionlist.md#addoptions)
* [addToPage](pdfoptionlist.md#addtopage)
* [clear](pdfoptionlist.md#clear)
* [defaultUpdateAppearances](pdfoptionlist.md#defaultupdateappearances)
* [disableExporting](pdfoptionlist.md#disableexporting)
* [disableMultiselect](pdfoptionlist.md#disablemultiselect)
* [disableReadOnly](pdfoptionlist.md#disablereadonly)
* [disableRequired](pdfoptionlist.md#disablerequired)
* [disableSelectOnClick](pdfoptionlist.md#disableselectonclick)
* [disableSorting](pdfoptionlist.md#disablesorting)
* [enableExporting](pdfoptionlist.md#enableexporting)
* [enableMultiselect](pdfoptionlist.md#enablemultiselect)
* [enableReadOnly](pdfoptionlist.md#enablereadonly)
* [enableRequired](pdfoptionlist.md#enablerequired)
* [enableSelectOnClick](pdfoptionlist.md#enableselectonclick)
* [enableSorting](pdfoptionlist.md#enablesorting)
* [getName](pdfoptionlist.md#getname)
* [getOptions](pdfoptionlist.md#getoptions)
* [getSelected](pdfoptionlist.md#getselected)
* [isExported](pdfoptionlist.md#isexported)
* [isMultiselect](pdfoptionlist.md#ismultiselect)
* [isReadOnly](pdfoptionlist.md#isreadonly)
* [isRequired](pdfoptionlist.md#isrequired)
* [isSelectOnClick](pdfoptionlist.md#isselectonclick)
* [isSorted](pdfoptionlist.md#issorted)
* [needsAppearancesUpdate](pdfoptionlist.md#needsappearancesupdate)
* [select](pdfoptionlist.md#select)
* [setOptions](pdfoptionlist.md#setoptions)
* [updateAppearances](pdfoptionlist.md#updateappearances)
* [of](pdfoptionlist.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroListBox*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFOptionList.ts:55](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L55)*

The low-level PDFAcroListBox wrapped by this option list.

___

###  doc

• **doc**: *[PDFDocument](pdfdocument.md)*

*Inherited from [PDFField](pdffield.md).[doc](pdffield.md#doc)*

*Defined in [api/form/PDFField.ts:96](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L96)*

The document to which this field belongs.

___

###  ref

• **ref**: *PDFRef*

*Inherited from [PDFField](pdffield.md).[ref](pdffield.md#ref)*

*Defined in [api/form/PDFField.ts:93](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L93)*

The unique reference assigned to this field within the document.

## Methods

###  addOptions

▸ **addOptions**(`options`: string | string[]): *void*

*Defined in [api/form/PDFOptionList.ts:171](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L171)*

Add to the list of options that are available for this option list. Users
will be able to select these values in a PDF reader. In addition to the
values passed as `options`, any preexisting options for this option list
will still be available for users to select.
For example:
```js
const optionList = form.getOptionList('rockets.optionList')
optionList.addOptions(['Saturn IV', 'Falcon Heavy'])
```
This method will mark this option list as dirty. See
[PDFOptionList.setOptions](pdfoptionlist.md#setoptions) for more details about what this means.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | string &#124; string[] | New options that should be available in this option list.  |

**Returns:** *void*

___

###  addToPage

▸ **addToPage**(`page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFOptionList.ts:406](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L406)*

Show this option list on the specified page. For example:
```js
const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const optionList = form.createOptionList('best.gundams')
optionList.setOptions(['Exia', 'Dynames', 'Kyrios', 'Virtue'])
optionList.select(['Exia', 'Virtue'])

optionList.addToPage(page, {
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
This will create a new widget for this option list field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page` | [PDFPage](pdfpage.md) | The page to which this option list widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding this option list widget.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [api/form/PDFOptionList.ts:249](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L249)*

Clear all selected values for this option list. This operation is
equivalent to selecting an empty list. This method will update the
underlying state of the option list to indicate that no values have been
selected.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.clear()
```
This method will mark this option list as dirty. See
[PDFOptionList.setOptions](pdfoptionlist.md#setoptions) for more details about what this means.

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(`font`: [PDFFont](pdffont.md)): *void*

*Overrides void*

*Defined in [api/form/PDFOptionList.ts:475](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L475)*

Update the appearance streams for each of this option list's widgets using
the default appearance provider for option lists. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const optionList = form.getOptionList('some.optionList.field')
optionList.defaultUpdateAppearances(helvetica)
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

*Defined in [api/form/PDFField.ts:251](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L251)*

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

*Defined in [api/form/PDFOptionList.ts:330](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L330)*

Do not allow users to select more than one option from this option list.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.disableMultiselect()
```

**Returns:** *void*

___

###  disableReadOnly

▸ **disableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[disableReadOnly](pdffield.md#disablereadonly)*

*Defined in [api/form/PDFField.ts:174](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L174)*

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

*Defined in [api/form/PDFField.ts:212](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L212)*

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

*Defined in [api/form/PDFOptionList.ts:374](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L374)*

Wait to store the option selected by a user until they leave this option
list field (by clicking outside of it - on another field, for example).
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.disableSelectOnClick()
```

**Returns:** *void*

___

###  disableSorting

▸ **disableSorting**(): *void*

*Defined in [api/form/PDFOptionList.ts:292](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L292)*

Do not always display the options of this option list in alphabetical
order. Instead, display the options in whichever order they were added
to this option list. For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.disableSorting()
```

**Returns:** *void*

___

###  enableExporting

▸ **enableExporting**(): *void*

*Inherited from [PDFField](pdffield.md).[enableExporting](pdffield.md#enableexporting)*

*Defined in [api/form/PDFField.ts:239](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L239)*

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

*Defined in [api/form/PDFOptionList.ts:318](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L318)*

Allow users to select more than one option from this option list.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.enableMultiselect()
```

**Returns:** *void*

___

###  enableReadOnly

▸ **enableReadOnly**(): *void*

*Inherited from [PDFField](pdffield.md).[enableReadOnly](pdffield.md#enablereadonly)*

*Defined in [api/form/PDFField.ts:162](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L162)*

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

*Defined in [api/form/PDFField.ts:200](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L200)*

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

*Defined in [api/form/PDFOptionList.ts:361](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L361)*

Store the option selected by a user immediately after the user clicks the
option. Do not wait for the user to leave this option list field (by
clicking outside of it - on another field, for example). For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.enableSelectOnClick()
```

**Returns:** *void*

___

###  enableSorting

▸ **enableSorting**(): *void*

*Defined in [api/form/PDFOptionList.ts:279](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L279)*

Always display the options of this option list in alphabetical order,
irrespective of the order in which the options were added to this option
list.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
optionList.enableSorting()
```

**Returns:** *void*

___

###  getName

▸ **getName**(): *string*

*Inherited from [PDFField](pdffield.md).[getName](pdffield.md#getname)*

*Defined in [api/form/PDFField.ts:132](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L132)*

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

*Defined in [api/form/PDFOptionList.ts:80](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L80)*

Get the list of available options for this option list. These options will
be displayed to users who view this option list in a PDF reader.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
const options = optionList.getOptions()
console.log('Option List options:', options)
```

**Returns:** *string[]*

The options for this option list.

___

###  getSelected

▸ **getSelected**(): *string[]*

*Defined in [api/form/PDFOptionList.ts:104](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L104)*

Get the selected options for this option list. These are the values that
were selected by a human user via a PDF reader, or programatically via
software.
For example:
```js
const optionList = form.getOptionList('some.optionList.field')
const selections = optionList.getSelected()
console.log('Option List selections:', selections)
```

**Returns:** *string[]*

The selected options for this option list.

___

###  isExported

▸ **isExported**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isExported](pdffield.md#isexported)*

*Defined in [api/form/PDFField.ts:227](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L227)*

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

*Defined in [api/form/PDFOptionList.ts:306](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L306)*

Returns `true` if multiple options can be selected from this option list.
See [PDFOptionList.enableMultiselect](pdfoptionlist.md#enablemultiselect) and
[PDFOptionList.disableMultiselect](pdfoptionlist.md#disablemultiselect). For example:
```js
const optionList = form.getOptionList('some.optionList.field')
if (optionList.isMultiselect()) console.log('Multiselect is enabled')
```

**Returns:** *boolean*

Whether or not multiple options can be selected.

___

###  isReadOnly

▸ **isReadOnly**(): *boolean*

*Inherited from [PDFField](pdffield.md).[isReadOnly](pdffield.md#isreadonly)*

*Defined in [api/form/PDFField.ts:147](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L147)*

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

*Defined in [api/form/PDFField.ts:188](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFField.ts#L188)*

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

*Defined in [api/form/PDFOptionList.ts:348](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L348)*

Returns `true` if the option selected by a user is stored, or "committed",
when the user clicks the option. The alternative is that the user's
selection is stored when the user leaves this option list field (by
clicking outside of it - on another field, for example). See
[PDFOptionList.enableSelectOnClick](pdfoptionlist.md#enableselectonclick) and
[PDFOptionList.disableSelectOnClick](pdfoptionlist.md#disableselectonclick). For example:
```js
const optionList = form.getOptionList('some.optionList.field')
if (optionList.isSelectOnClick()) console.log('Select on click is enabled')
```

**Returns:** *boolean*

Whether or not options are selected immediately after they are
         clicked.

___

###  isSorted

▸ **isSorted**(): *boolean*

*Defined in [api/form/PDFOptionList.ts:265](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L265)*

Returns `true` if the options of this option list are always displayed
in alphabetical order, irrespective of the order in which the options
were added to the option list. See [PDFOptionList.enableSorting](pdfoptionlist.md#enablesorting) and
[PDFOptionList.disableSorting](pdfoptionlist.md#disablesorting). For example:
```js
const optionList = form.getOptionList('some.optionList.field')
if (optionList.isSorted()) console.log('Sorting is enabled')
```

**Returns:** *boolean*

Whether or not this option list is sorted.

___

###  needsAppearancesUpdate

▸ **needsAppearancesUpdate**(): *boolean*

*Overrides void*

*Defined in [api/form/PDFOptionList.ts:451](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L451)*

Returns `true` if this option list has been marked as dirty, or if any of
this option list's widgets do not have an appearance stream. For example:
```js
const optionList = form.getOptionList('some.optionList.field')
if (optionList.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this option list needs an appearance update.

___

###  select

▸ **select**(`options`: string | string[], `merge`: boolean): *void*

*Defined in [api/form/PDFOptionList.ts:208](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L208)*

Select one or more values for this option list. This operation is analogous
to a human user opening the option list in a PDF reader and clicking on one
or more values to select them. This method will update the underlying state
of the option list to indicate which values have been selected. PDF
libraries and readers will be able to extract these values from the saved
document and determine which values were selected.
For example:
```js
const optionList = form.getOptionList('best.superheroes.optionList')
optionList.select(['One Punch Man', 'Iron Man'])
```
This method will mark this option list as dirty. See
[PDFOptionList.setOptions](pdfoptionlist.md#setoptions) for more details about what this means.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | string &#124; string[] | - | The options to be selected. |
`merge` | boolean | false | Whether or not existing selections should be preserved.  |

**Returns:** *void*

___

###  setOptions

▸ **setOptions**(`options`: string[]): *void*

*Defined in [api/form/PDFOptionList.ts:146](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L146)*

Set the list of options that are available for this option list. These are
the values that will be available for users to select when they view this
option list in a PDF reader. Note that preexisting options for this
option list will be removed. Only the values passed as `options` will be
available to select.

For example:
```js
const optionList = form.getOptionList('planets.optionList')
optionList.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
```

This method will mark this option list as dirty, causing its appearance
streams to be updated when either [PDFDocument.save](pdfdocument.md#save) or
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) is called. The updated streams will
display the options this field contains inside the widgets of this text
field (with selected options highlighted).

**IMPORTANT:** The default font used to update appearance streams is
[StandardFonts.Helvetica](../enums/standardfonts.md#helvetica). Note that this is a WinAnsi font. This means
that encoding errors will be thrown if this field contains any options
with characters outside the WinAnsi character set (the latin alphabet).

Embedding a custom font and passing it to
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) or [PDFOptionList.updateAppearances](pdfoptionlist.md#updateappearances)
allows you to generate appearance streams with characters outside the
latin alphabet (assuming the custom font supports them).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | string[] | The options that should be available in this option list.  |

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`font`: [PDFFont](pdffont.md), `provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFOptionList](pdfoptionlist.md)›): *void*

*Defined in [api/form/PDFOptionList.ts:496](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L496)*

Update the appearance streams for each of this option list's widgets using
the given appearance provider. If no `provider` is passed, the default
appearance provider for option lists will be used. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const optionList = form.getOptionList('some.optionList.field')
optionList.updateAppearances(helvetica, (field, widget, font) => {
  ...
  return drawOptionList(...)
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams. |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFOptionList](pdfoptionlist.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroListBox`: PDFAcroListBox, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFOptionList](pdfoptionlist.md)‹›*

*Defined in [api/form/PDFOptionList.ts:51](https://github.com/Hopding/pdf-lib/blob/c957768/src/api/form/PDFOptionList.ts#L51)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getOptionList](pdfform.md#getoptionlist) method, which will create
> an instance of [PDFOptionList](pdfoptionlist.md) for you.

Create an instance of [PDFOptionList](pdfoptionlist.md) from an existing acroListBox and
ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroListBox` | PDFAcroListBox | - |
`ref` | PDFRef | The unique reference for this option list. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this option list will belong.  |

**Returns:** *[PDFOptionList](pdfoptionlist.md)‹›*
