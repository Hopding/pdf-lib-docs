---
id: "pdfradiogroup"
title: "PDFRadioGroup"
sidebar_label: "PDFRadioGroup"
---

[pdf-lib](../index.md) › [PDFRadioGroup](pdfradiogroup.md)

Represents a radio group field of a [PDFForm](pdfform.md).

[PDFRadioGroup](pdfradiogroup.md) fields are collections of radio buttons. The purpose of a
radio group is to enable users to select one option from a set of mutually
exclusive choices. Each choice in a radio group is represented by a radio
button. Radio buttons each have two states: `on` and `off`. At most one
radio button in a group may be in the `on` state at any time. Users can
click on a radio button to select it (and thereby automatically deselect any
other radio button that might have already been selected). Some radio
groups allow users to toggle a selected radio button `off` by clicking on
it (see [PDFRadioGroup.isOffToggleable](pdfradiogroup.md#isofftoggleable)).

Note that some radio groups allow multiple radio buttons to be in the `on`
state at the same type **if** they represent the same underlying value (see
[PDFRadioGroup.isMutuallyExclusive](pdfradiogroup.md#ismutuallyexclusive)).

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFRadioGroup**

## Index

### Properties

* [acroField](pdfradiogroup.md#acrofield)
* [doc](pdfradiogroup.md#doc)
* [ref](pdfradiogroup.md#ref)

### Methods

* [addOptionToPage](pdfradiogroup.md#addoptiontopage)
* [clear](pdfradiogroup.md#clear)
* [defaultUpdateAppearances](pdfradiogroup.md#defaultupdateappearances)
* [disableExporting](pdfradiogroup.md#disableexporting)
* [disableMutualExclusion](pdfradiogroup.md#disablemutualexclusion)
* [disableOffToggling](pdfradiogroup.md#disableofftoggling)
* [disableReadOnly](pdfradiogroup.md#disablereadonly)
* [disableRequired](pdfradiogroup.md#disablerequired)
* [enableExporting](pdfradiogroup.md#enableexporting)
* [enableMutualExclusion](pdfradiogroup.md#enablemutualexclusion)
* [enableOffToggling](pdfradiogroup.md#enableofftoggling)
* [enableReadOnly](pdfradiogroup.md#enablereadonly)
* [enableRequired](pdfradiogroup.md#enablerequired)
* [getName](pdfradiogroup.md#getname)
* [getOptions](pdfradiogroup.md#getoptions)
* [getSelected](pdfradiogroup.md#getselected)
* [isExported](pdfradiogroup.md#isexported)
* [isMutuallyExclusive](pdfradiogroup.md#ismutuallyexclusive)
* [isOffToggleable](pdfradiogroup.md#isofftoggleable)
* [isReadOnly](pdfradiogroup.md#isreadonly)
* [isRequired](pdfradiogroup.md#isrequired)
* [needsAppearancesUpdate](pdfradiogroup.md#needsappearancesupdate)
* [select](pdfradiogroup.md#select)
* [updateAppearances](pdfradiogroup.md#updateappearances)
* [of](pdfradiogroup.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroRadioButton*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFRadioGroup.ts:64](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L64)*

The low-level PDFAcroRadioButton wrapped by this radio group.

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

###  addOptionToPage

▸ **addOptionToPage**(`option`: string, `page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFRadioGroup.ts:352](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L352)*

Add a new radio button to this group on the specified page. For example:
```js
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const radioGroup = form.createRadioGroup('best.gundam')

const options = {
  x: 50,
  width: 25,
  height: 25,
  textColor: rgb(1, 0, 0),
  backgroundColor: rgb(0, 1, 0),
  borderColor: rgb(0, 0, 1),
  borderWidth: 2,
  rotate: degrees(90),
}

radioGroup.addOptionToPage('Exia', page, { ...options, y: 50 })
radioGroup.addOptionToPage('Dynames', page, { ...options, y: 110 })
```
This will create a new radio button widget for this radio group field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | string | The option that the radio button widget represents. |
`page` | [PDFPage](pdfpage.md) | The page to which the radio button widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding the radio button widget.  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [api/form/PDFRadioGroup.ts:222](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L222)*

Clear any selected option for this dropdown. This will result in all
radio buttons in this group being toggled off. This method will update
the underlying state of the dropdown to indicate that no radio buttons
have been selected.
For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.clear()
```
This method will mark this radio group as dirty. See
[PDFRadioGroup.select](pdfradiogroup.md#select) for more details about what this means.

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(): *void*

*Overrides void*

*Defined in [api/form/PDFRadioGroup.ts:419](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L419)*

Update the appearance streams for each of this group's radio button widgets
using the default appearance provider for radio groups. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.defaultUpdateAppearances()
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

###  disableMutualExclusion

▸ **disableMutualExclusion**(): *void*

*Defined in [api/form/PDFRadioGroup.ts:321](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L321)*

When the user clicks a radio button in this group only it will be selected.
No other radio buttons in the group will be selected, even if they share
the same underlying value. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.disableMutualExclusion()
```
Note that this option must be disabled prior to adding options to the
radio group. It does not currently apply retroactively to existing
radio buttons in the group.

**Returns:** *void*

___

###  disableOffToggling

▸ **disableOffToggling**(): *void*

*Defined in [api/form/PDFRadioGroup.ts:270](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L270)*

Prevent users from clicking on selected radio buttons in this group to
toggle them off. Clicking on a selected radio button will have no effect.
The only way to deselect a selected radio button is to click on a
different radio button in the group. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.disableOffToggling()
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

###  enableMutualExclusion

▸ **enableMutualExclusion**(): *void*

*Defined in [api/form/PDFRadioGroup.ts:305](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L305)*

When the user clicks a radio button in this group it will be selected. In
addition, any other radio buttons in this group that share the same
underlying value will also be selected. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.enableMutualExclusion()
```
Note that this option must be enabled prior to adding options to the
radio group. It does not currently apply retroactively to existing
radio buttons in the group.

**Returns:** *void*

___

###  enableOffToggling

▸ **enableOffToggling**(): *void*

*Defined in [api/form/PDFRadioGroup.ts:256](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L256)*

Allow users to click on selected radio buttons in this group to toggle
them off. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.enableOffToggling()
```
> **NOTE:** This feature is documented in the PDF specification
> (Table 226). However, most PDF readers do not respect this option and
> prevent users from toggling radio buttons off even when it is enabled.
> At the time of this writing (9/6/2020) Mac's Preview software did
> respect the option. Adobe Acrobat, Foxit Reader, and Google Chrome did
> not.

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

###  getOptions

▸ **getOptions**(): *string[]*

*Defined in [api/form/PDFRadioGroup.ts:93](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L93)*

Get the list of available options for this radio group. Each option is
represented by a radio button. These radio buttons are displayed at
various locations in the document, potentially on different pages (though
typically they are stacked horizontally or vertically on the same page).
For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
const options = radioGroup.getOptions()
console.log('Radio Group options:', options)
```

**Returns:** *string[]*

The options for this radio group.

___

###  getSelected

▸ **getSelected**(): *string | undefined*

*Defined in [api/form/PDFRadioGroup.ts:124](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L124)*

Get the selected option for this radio group. The selected option is
represented by the radio button in this group that is turned on. At most
one radio button in a group can be selected. If no buttons in this group
are selected, `undefined` is returned.
For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
const selected = radioGroup.getSelected()
console.log('Selected radio button:', selected)
```

**Returns:** *string | undefined*

The selected option for this radio group.

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

###  isMutuallyExclusive

▸ **isMutuallyExclusive**(): *boolean*

*Defined in [api/form/PDFRadioGroup.ts:289](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L289)*

Returns `true` if the radio buttons in this group are mutually exclusive.
This means that when the user selects a radio button, only that specific
button will be turned on. Even if other radio buttons in the group
represent the same value, they will not be enabled. The alternative to
this is that clicking a radio button will select that button along with
any other radio buttons in the group that share the same value. See
[PDFRadioGroup.enableMutualExclusion](pdfradiogroup.md#enablemutualexclusion) and
[PDFRadioGroup.disableMutualExclusion](pdfradiogroup.md#disablemutualexclusion).
For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
if (radioGroup.isMutuallyExclusive()) console.log('Mutual exclusion is enabled')
```

**Returns:** *boolean*

___

###  isOffToggleable

▸ **isOffToggleable**(): *boolean*

*Defined in [api/form/PDFRadioGroup.ts:238](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L238)*

Returns `true` if users can click on radio buttons in this group to toggle
them off. The alternative is that once a user clicks on a radio button
to select it, the only way to deselect it is by selecting on another radio
button in the group. See [PDFRadioGroup.enableOffToggling](pdfradiogroup.md#enableofftoggling) and
[PDFRadioGroup.disableOffToggling](pdfradiogroup.md#disableofftoggling). For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
if (radioGroup.isOffToggleable()) console.log('Off toggling is enabled')
```

**Returns:** *boolean*

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

*Defined in [api/form/PDFRadioGroup.ts:399](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L399)*

Returns `true` if any of this group's radio button widgets do not have an
appearance stream for their current state. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
if (radioGroup.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this radio group needs an appearance update.

___

###  select

▸ **select**(`option`: string): *void*

*Defined in [api/form/PDFRadioGroup.ts:185](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L185)*

Select an option for this radio group. This operation is analogous to a
human user clicking one of the radio buttons in this group via a PDF
reader to toggle it on. This method will update the underlying state of
the radio group to indicate which option has been selected. PDF libraries
and readers will be able to extract this value from the saved document and
determine which option was selected.

For example:
```js
const radioGroup = form.getRadioGroup('best.superhero.radioGroup')
radioGroup.select('One Punch Man')
```

This method will mark this radio group as dirty, causing its appearance
streams to be updated when either [PDFDocument.save](pdfdocument.md#save) or
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) is called. The updated appearance
streams will display a dot inside the widget of this check box field
that represents the selected option.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | string | The option to be selected.  |

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFRadioGroup](pdfradiogroup.md)›): *void*

*Defined in [api/form/PDFRadioGroup.ts:446](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L446)*

Update the appearance streams for each of this group's radio button widgets
using the given appearance provider. If no `provider` is passed, the
default appearance provider for radio groups will be used. For example:
```js
const radioGroup = form.getRadioGroup('some.radioGroup.field')
radioGroup.updateAppearances((field, widget) => {
  ...
  return {
    normal: { on: drawRadioButton(...), off: drawRadioButton(...) },
    down: { on: drawRadioButton(...), off: drawRadioButton(...) },
  }
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFRadioGroup](pdfradiogroup.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroRadioButton`: PDFAcroRadioButton, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFRadioGroup](pdfradiogroup.md)‹›*

*Defined in [api/form/PDFRadioGroup.ts:57](https://github.com/Hopding/pdf-lib/blob/30d2aa2/src/api/form/PDFRadioGroup.ts#L57)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getOptionList](pdfform.md#getoptionlist) method, which will create an
> instance of [PDFOptionList](pdfoptionlist.md) for you.

Create an instance of [PDFOptionList](pdfoptionlist.md) from an existing acroRadioButton
and ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroRadioButton` | PDFAcroRadioButton | The underlying `PDFAcroRadioButton` for this                        radio group. |
`ref` | PDFRef | The unique reference for this radio group. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this radio group will belong.  |

**Returns:** *[PDFRadioGroup](pdfradiogroup.md)‹›*
