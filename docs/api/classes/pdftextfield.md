---
id: "pdftextfield"
title: "PDFTextField"
sidebar_label: "PDFTextField"
---

[pdf-lib](../index.md) › [PDFTextField](pdftextfield.md)

Represents a text field of a [PDFForm](pdfform.md).

[PDFTextField](pdftextfield.md) fields are boxes that display text entered by the user. The
purpose of a text field is to enable users to enter text or view text values
in the document prefilled by software. Users can click on a text field and
input text via their keyboard. Some text fields allow multiple lines of text
to be entered (see [PDFTextField.isMultiline](pdftextfield.md#ismultiline)).

## Hierarchy

* [PDFField](pdffield.md)

  ↳ **PDFTextField**

## Index

### Properties

* [acroField](pdftextfield.md#acrofield)
* [doc](pdftextfield.md#doc)
* [ref](pdftextfield.md#ref)

### Methods

* [addToPage](pdftextfield.md#addtopage)
* [defaultUpdateAppearances](pdftextfield.md#defaultupdateappearances)
* [disableCombing](pdftextfield.md#disablecombing)
* [disableExporting](pdftextfield.md#disableexporting)
* [disableFileSelection](pdftextfield.md#disablefileselection)
* [disableMultiline](pdftextfield.md#disablemultiline)
* [disablePassword](pdftextfield.md#disablepassword)
* [disableReadOnly](pdftextfield.md#disablereadonly)
* [disableRequired](pdftextfield.md#disablerequired)
* [disableRichFormatting](pdftextfield.md#disablerichformatting)
* [disableScrolling](pdftextfield.md#disablescrolling)
* [disableSpellChecking](pdftextfield.md#disablespellchecking)
* [enableCombing](pdftextfield.md#enablecombing)
* [enableExporting](pdftextfield.md#enableexporting)
* [enableFileSelection](pdftextfield.md#enablefileselection)
* [enableMultiline](pdftextfield.md#enablemultiline)
* [enablePassword](pdftextfield.md#enablepassword)
* [enableReadOnly](pdftextfield.md#enablereadonly)
* [enableRequired](pdftextfield.md#enablerequired)
* [enableRichFormatting](pdftextfield.md#enablerichformatting)
* [enableScrolling](pdftextfield.md#enablescrolling)
* [enableSpellChecking](pdftextfield.md#enablespellchecking)
* [getAlignment](pdftextfield.md#getalignment)
* [getMaxLength](pdftextfield.md#getmaxlength)
* [getName](pdftextfield.md#getname)
* [getText](pdftextfield.md#gettext)
* [isCombed](pdftextfield.md#iscombed)
* [isExported](pdftextfield.md#isexported)
* [isFileSelector](pdftextfield.md#isfileselector)
* [isMultiline](pdftextfield.md#ismultiline)
* [isPassword](pdftextfield.md#ispassword)
* [isReadOnly](pdftextfield.md#isreadonly)
* [isRequired](pdftextfield.md#isrequired)
* [isRichFormatted](pdftextfield.md#isrichformatted)
* [isScrollable](pdftextfield.md#isscrollable)
* [isSpellChecked](pdftextfield.md#isspellchecked)
* [needsAppearancesUpdate](pdftextfield.md#needsappearancesupdate)
* [removeMaxLength](pdftextfield.md#removemaxlength)
* [setAlignment](pdftextfield.md#setalignment)
* [setFontSize](pdftextfield.md#setfontsize)
* [setImage](pdftextfield.md#setimage)
* [setMaxLength](pdftextfield.md#setmaxlength)
* [setText](pdftextfield.md#settext)
* [updateAppearances](pdftextfield.md#updateappearances)
* [of](pdftextfield.md#static-of)

## Properties

###  acroField

• **acroField**: *PDFAcroText*

*Overrides [PDFField](pdffield.md).[acroField](pdffield.md#acrofield)*

*Defined in [api/form/PDFTextField.ts:65](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L65)*

The low-level PDFAcroText wrapped by this text field.

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

▸ **addToPage**(`page`: [PDFPage](pdfpage.md), `options?`: [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md)): *void*

*Defined in [api/form/PDFTextField.ts:710](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L710)*

Show this text field on the specified page. For example:
```js
const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
const page = pdfDoc.addPage()

const form = pdfDoc.getForm()
const textField = form.createTextField('best.gundam')
textField.setText('Exia')

textField.addToPage(page, {
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
This will create a new widget for this text field.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`page` | [PDFPage](pdfpage.md) | The page to which this text field widget should be added. |
`options?` | [FieldAppearanceOptions](../interfaces/fieldappearanceoptions.md) | The options to be used when adding this text field widget.  |

**Returns:** *void*

___

###  defaultUpdateAppearances

▸ **defaultUpdateAppearances**(`font`: [PDFFont](pdffont.md)): *void*

*Overrides void*

*Defined in [api/form/PDFTextField.ts:781](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L781)*

Update the appearance streams for each of this text field's widgets using
the default appearance provider for text fields. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const textField = form.getTextField('some.text.field')
textField.defaultUpdateAppearances(helvetica)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams.  |

**Returns:** *void*

___

###  disableCombing

▸ **disableCombing**(): *void*

*Defined in [api/form/PDFTextField.ts:634](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L634)*

Turn off combing for this text field. For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableCombing()
```
See [PDFTextField.isCombed](pdftextfield.md#iscombed) and [PDFTextField.enableCombing](pdftextfield.md#enablecombing) for more
information about what combing is.

This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

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

###  disableFileSelection

▸ **disableFileSelection**(): *void*

*Defined in [api/form/PDFTextField.ts:474](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L474)*

Indicate that this text field is **not** intended to store a file path.
For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableFileSelection()
```

**Returns:** *void*

___

###  disableMultiline

▸ **disableMultiline**(): *void*

*Defined in [api/form/PDFTextField.ts:386](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L386)*

Display each line of text on the same line when this field is displayed
in a PDF reader. For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableMultiline()
```
This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

**Returns:** *void*

___

###  disablePassword

▸ **disablePassword**(): *void*

*Defined in [api/form/PDFTextField.ts:435](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L435)*

Indicate that this text field is **not** intended for storing a secure
password. For example:
```js
const textField = form.getTextField('some.text.field')
textField.disablePassword()
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

###  disableRichFormatting

▸ **disableRichFormatting**(): *void*

*Defined in [api/form/PDFTextField.ts:679](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L679)*

Indicate that this is a standard text field that does not XFA data (rich
text). For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableRichFormatting()
```

**Returns:** *void*

___

###  disableScrolling

▸ **disableScrolling**(): *void*

*Defined in [api/form/PDFTextField.ts:553](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L553)*

Do not allow PDF readers to present a scroll bar to the user when the
contents of this text field do not fit within its view bounds. For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableScrolling()
```

**Returns:** *void*

___

###  disableSpellChecking

▸ **disableSpellChecking**(): *void*

*Defined in [api/form/PDFTextField.ts:512](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L512)*

Do not allow PDF readers to spell check the text entered in this field.
For example:
```js
const textField = form.getTextField('some.text.field')
textField.disableSpellChecking()
```

**Returns:** *void*

___

###  enableCombing

▸ **enableCombing**(): *void*

*Defined in [api/form/PDFTextField.ts:607](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L607)*

Split this field into `n` equal size cells with one character in each
(where `n` is equal to the max length of the text field). This will cause
all characters in the field to be displayed an equal distance apart from
one another. For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableCombing()
```

In addition to calling this method, text fields must have a max length
defined in order to be combed (see [PDFTextField.setMaxLength](pdftextfield.md#setmaxlength)).

This method will also call the following three methods internally:
* [PDFTextField.disableMultiline](pdftextfield.md#disablemultiline)
* [PDFTextField.disablePassword](pdftextfield.md#disablepassword)
* [PDFTextField.disableFileSelection](pdftextfield.md#disablefileselection)

This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

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

###  enableFileSelection

▸ **enableFileSelection**(): *void*

*Defined in [api/form/PDFTextField.ts:462](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L462)*

Indicate that this text field is intended to store a file path. The
contents of the file stored at that path should be submitted as the value
of the field. For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableFileSelection()
```

**Returns:** *void*

___

###  enableMultiline

▸ **enableMultiline**(): *void*

*Defined in [api/form/PDFTextField.ts:371](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L371)*

Display each line of text on a new line when this field is displayed in a
PDF reader. For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableMultiline()
```
This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

**Returns:** *void*

___

###  enablePassword

▸ **enablePassword**(): *void*

*Defined in [api/form/PDFTextField.ts:423](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L423)*

Indicate that this text field is intended for storing a secure password.
For example:
```js
const textField = form.getTextField('some.text.field')
textField.enablePassword()
```
Values entered into password text fields should not be displayed on the
screen by PDF readers. Most PDF readers will display the value as
asterisks or bullets. PDF readers should never store values entered by the
user into password text fields. Similarly, applications should not
write data to a password text field.

**Please note that this method does not cause entered values to be
encrypted or secured in any way! It simply sets a flag that PDF software
and readers can access to determine the _purpose_ of this field.**

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

###  enableRichFormatting

▸ **enableRichFormatting**(): *void*

*Defined in [api/form/PDFTextField.ts:667](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L667)*

Indicate that this field contains XFA data - or rich text. For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableRichFormatting()
```
Note that `pdf-lib` does not support reading or writing rich text fields.
Nor do most PDF readers and writers. Rich text fields are based on XFA
(XML Forms Architecture). Relatively few PDFs use rich text fields or XFA.
Unlike PDF itself, XFA is not an ISO standard. XFA has been deprecated in
PDF 2.0:
* https://en.wikipedia.org/wiki/XFA
* http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/

**Returns:** *void*

___

###  enableScrolling

▸ **enableScrolling**(): *void*

*Defined in [api/form/PDFTextField.ts:541](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L541)*

Allow PDF readers to present a scroll bar to the user when the contents
of this text field do not fit within its view bounds. For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableScrolling()
```
A horizontal scroll bar should be shown for singleline fields. A vertical
scroll bar should be shown for multiline fields.

**Returns:** *void*

___

###  enableSpellChecking

▸ **enableSpellChecking**(): *void*

*Defined in [api/form/PDFTextField.ts:500](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L500)*

Allow PDF readers to spell check the text entered in this field.
For example:
```js
const textField = form.getTextField('some.text.field')
textField.enableSpellChecking()
```

**Returns:** *void*

___

###  getAlignment

▸ **getAlignment**(): *[TextAlignment](../enums/textalignment.md)*

*Defined in [api/form/PDFTextField.ts:180](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L180)*

Get the alignment for this text field. This value represents the
justification of the text when it is displayed to the user in PDF readers.
There are three possible alignments: left, center, and right. For example:
```js
const textField = form.getTextField('some.text.field')
const alignment = textField.getAlignment()
if (alignment === TextAlignment.Left) console.log('Text is left justified')
if (alignment === TextAlignment.Center) console.log('Text is centered')
if (alignment === TextAlignment.Right) console.log('Text is right justified')
```

**Returns:** *[TextAlignment](../enums/textalignment.md)*

The alignment of this text field.

___

###  getMaxLength

▸ **getMaxLength**(): *number | undefined*

*Defined in [api/form/PDFTextField.ts:232](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L232)*

Get the maximum length of this field. This value represents the maximum
number of characters that can be typed into this field by the user. If
this field does not have a maximum length, `undefined` is returned.
For example:
```js
const textField = form.getTextField('some.text.field')
const maxLength = textField.getMaxLength()
if (maxLength === undefined) console.log('No max length')
else console.log(`Max length is ${maxLength}`)
```

**Returns:** *number | undefined*

The maximum number of characters allowed in this field, or
         `undefined` if no limit exists.

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

###  getText

▸ **getText**(): *string | undefined*

*Defined in [api/form/PDFTextField.ts:103](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L103)*

Get the text that this field contains. This text is visible to users who
view this field in a PDF reader.

For example:
```js
const textField = form.getTextField('some.text.field')
const text = textField.getText()
console.log('Text field contents:', text)
```

Note that if this text field contains no underlying value, `undefined`
will be returned. Text fields may also contain an underlying value that
is simply an empty string (`''`). This detail is largely irrelevant for
most applications. In general, you'll want to treat both cases the same
way and simply consider the text field to be empty. In either case, the
text field will appear empty to users when viewed in a PDF reader.

An error will be thrown if this is a rich text field. `pdf-lib` does not
support reading rich text fields. Nor do most PDF readers and writers.
Rich text fields are based on XFA (XML Forms Architecture). Relatively few
PDFs use rich text fields or XFA. Unlike PDF itself, XFA is not an ISO
standard. XFA has been deprecated in PDF 2.0:
* https://en.wikipedia.org/wiki/XFA
* http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/

**Returns:** *string | undefined*

The text contained in this text field.

___

###  isCombed

▸ **isCombed**(): *boolean*

*Defined in [api/form/PDFTextField.ts:576](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L576)*

Returns `true` if this is a combed text field. This means that the field
is split into `n` equal size cells with one character in each (where `n`
is equal to the max length of the text field). The result is that all
characters in this field are displayed an equal distance apart from one
another. See [PDFTextField.enableCombing](pdftextfield.md#enablecombing) and
[PDFTextField.disableCombing](pdftextfield.md#disablecombing). For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isCombed()) console.log('Combing is enabled')
```
Note that in order for a text field to be combed, the following must be
true (in addition to enabling combing):
* It must not be a multiline field (see [PDFTextField.isMultiline](pdftextfield.md#ismultiline))
* It must not be a password field (see [PDFTextField.isPassword](pdftextfield.md#ispassword))
* It must not be a file selector field (see [PDFTextField.isFileSelector](pdftextfield.md#isfileselector))
* It must have a max length defined (see [PDFTextField.setMaxLength](pdftextfield.md#setmaxlength))

**Returns:** *boolean*

Whether or not this field is combed.

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

###  isFileSelector

▸ **isFileSelector**(): *boolean*

*Defined in [api/form/PDFTextField.ts:449](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L449)*

Returns `true` if the contents of this text field represent a file path.
See [PDFTextField.enableFileSelection](pdftextfield.md#enablefileselection) and
[PDFTextField.disableFileSelection](pdftextfield.md#disablefileselection). For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isFileSelector()) console.log('Is a file selector')
```

**Returns:** *boolean*

Whether or not this field should contain file paths.

___

###  isMultiline

▸ **isMultiline**(): *boolean*

*Defined in [api/form/PDFTextField.ts:357](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L357)*

Returns `true` if each line of text is shown on a new line when this
field is displayed in a PDF reader. The alternative is that all lines of
text are merged onto a single line when displayed. See
[PDFTextField.enableMultiline](pdftextfield.md#enablemultiline) and [PDFTextField.disableMultiline](pdftextfield.md#disablemultiline).
For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isMultiline()) console.log('Multiline is enabled')
```

**Returns:** *boolean*

Whether or not this is a multiline text field.

___

###  isPassword

▸ **isPassword**(): *boolean*

*Defined in [api/form/PDFTextField.ts:402](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L402)*

Returns `true` if this is a password text field. This means that the field
is intended for storing a secure password. See
[PDFTextField.enablePassword](pdftextfield.md#enablepassword) and [PDFTextField.disablePassword](pdftextfield.md#disablepassword).
For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isPassword()) console.log('Password is enabled')
```

**Returns:** *boolean*

Whether or not this is a password text field.

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

###  isRichFormatted

▸ **isRichFormatted**(): *boolean*

*Defined in [api/form/PDFTextField.ts:649](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L649)*

Returns `true` if this text field contains rich text. See
[PDFTextField.enableRichFormatting](pdftextfield.md#enablerichformatting) and
[PDFTextField.disableRichFormatting](pdftextfield.md#disablerichformatting). For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isRichFormatted()) console.log('Rich formatting enabled')
```

**Returns:** *boolean*

Whether or not this field contains rich text.

___

###  isScrollable

▸ **isScrollable**(): *boolean*

*Defined in [api/form/PDFTextField.ts:527](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L527)*

Returns `true` if PDF readers should allow the user to scroll the text
field when its contents do not fit within the field's view bounds. See
[PDFTextField.enableScrolling](pdftextfield.md#enablescrolling) and [PDFTextField.disableScrolling](pdftextfield.md#disablescrolling).
For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isScrollable()) console.log('Scrolling is enabled')
```

**Returns:** *boolean*

Whether or not the field is scrollable in PDF readers.

___

###  isSpellChecked

▸ **isSpellChecked**(): *boolean*

*Defined in [api/form/PDFTextField.ts:488](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L488)*

Returns `true` if the text entered in this field should be spell checked
by PDF readers. See [PDFTextField.enableSpellChecking](pdftextfield.md#enablespellchecking) and
[PDFTextField.disableSpellChecking](pdftextfield.md#disablespellchecking). For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.isSpellChecked()) console.log('Spell checking is enabled')
```

**Returns:** *boolean*

Whether or not this field should be spell checked.

___

###  needsAppearancesUpdate

▸ **needsAppearancesUpdate**(): *boolean*

*Overrides void*

*Defined in [api/form/PDFTextField.ts:757](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L757)*

Returns `true` if this text field has been marked as dirty, or if any of
this text field's widgets do not have an appearance stream. For example:
```js
const textField = form.getTextField('some.text.field')
if (textField.needsAppearancesUpdate()) console.log('Needs update')
```

**Returns:** *boolean*

Whether or not this text field needs an appearance update.

___

###  removeMaxLength

▸ **removeMaxLength**(): *void*

*Defined in [api/form/PDFTextField.ts:281](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L281)*

Remove the maximum length for this text field. This allows any number of
characters to be typed into this field by the user. For example:
```js
const textField = form.getTextField('some.text.field')
textField.removeMaxLength()
```
Calling this method is equivalent to passing `undefined` to
[PDFTextField.setMaxLength](pdftextfield.md#setmaxlength).

**Returns:** *void*

___

###  setAlignment

▸ **setAlignment**(`alignment`: [TextAlignment](../enums/textalignment.md)): *void*

*Defined in [api/form/PDFTextField.ts:212](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L212)*

Set the alignment for this text field. This will determine the
justification of the text when it is displayed to the user in PDF readers.
There are three possible alignments: left, center, and right. For example:
```js
const textField = form.getTextField('some.text.field')

// Text will be left justified when displayed
textField.setAlignment(TextAlignment.Left)

// Text will be centered when displayed
textField.setAlignment(TextAlignment.Center)

// Text will be right justified when displayed
textField.setAlignment(TextAlignment.Right)
```
This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`alignment` | [TextAlignment](../enums/textalignment.md) | The alignment for this text field.  |

**Returns:** *void*

___

###  setFontSize

▸ **setFontSize**(`fontSize`: number): *void*

*Defined in [api/form/PDFTextField.ts:339](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L339)*

Set the font size for this field. Larger font sizes will result in larger
text being displayed when PDF readers render this text field. Font sizes
may be integer or floating point numbers. Supplying a negative font size
will cause this method to throw an error.

For example:
```js
const textField = form.getTextField('some.text.field')
textField.setFontSize(4)
textField.setFontSize(15.7)
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

▸ **setImage**(`image`: [PDFImage](pdfimage.md)): *void*

*Defined in [api/form/PDFTextField.ts:296](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L296)*

Display an image inside the bounds of this text field's widgets. For example:
```js
const pngImage = await pdfDoc.embedPng(...)
const textField = form.getTextField('some.text.field')
textField.setImage(pngImage)
```
This will update the appearances streams for each of this text field's widgets.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`image` | [PDFImage](pdfimage.md) | The image that should be displayed.  |

**Returns:** *void*

___

###  setMaxLength

▸ **setMaxLength**(`maxLength?`: undefined | number): *void*

*Defined in [api/form/PDFTextField.ts:255](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L255)*

Set the maximum length of this field. This limits the number of characters
that can be typed into this field by the user. This also limits the length
of the string that can be passed to [PDFTextField.setText](pdftextfield.md#settext). This limit
can be removed by passing `undefined` as `maxLength`. For example:
```js
const textField = form.getTextField('some.text.field')

// Allow between 0 and 5 characters to be entered
textField.setMaxLength(5)

// Allow any number of characters to be entered
textField.setMaxLength(undefined)
```
This method will mark this text field as dirty. See
[PDFTextField.setText](pdftextfield.md#settext) for more details about what this means.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxLength?` | undefined &#124; number | The maximum number of characters allowed in this field, or                  `undefined` to remove the limit.  |

**Returns:** *void*

___

###  setText

▸ **setText**(`text`: string | undefined): *void*

*Defined in [api/form/PDFTextField.ts:149](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L149)*

Set the text for this field. This operation is analogous to a human user
clicking on the text field in a PDF reader and typing in text via their
keyboard. This method will update the underlying state of the text field
to indicate what text has been set. PDF libraries and readers will be able
to extract these values from the saved document and determine what text
was set.

For example:
```js
const textField = form.getTextField('best.superhero.text.field')
textField.setText('One Punch Man')
```

This method will mark this text field as dirty, causing its appearance
streams to be updated when either [PDFDocument.save](pdfdocument.md#save) or
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) is called. The updated streams will
display the text this field contains inside the widgets of this text
field.

**IMPORTANT:** The default font used to update appearance streams is
[StandardFonts.Helvetica](../enums/standardfonts.md#helvetica). Note that this is a WinAnsi font. This means
that encoding errors will be thrown if this field contains text outside
the WinAnsi character set (the latin alphabet).

Embedding a custom font and passing it to
[PDFForm.updateFieldAppearances](pdfform.md#updatefieldappearances) or [PDFTextField.updateAppearances](pdftextfield.md#updateappearances)
allows you to generate appearance streams with characters outside the
latin alphabet (assuming the custom font supports them).

If this is a rich text field, it will be converted to a standard text
field in order to set the text. `pdf-lib` does not support writing rich
text strings. Nor do most PDF readers and writers. See
[PDFTextField.getText](pdftextfield.md#gettext) for more information about rich text fields and
their deprecation in PDF 2.0.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string &#124; undefined | The text this field should contain.  |

**Returns:** *void*

___

###  updateAppearances

▸ **updateAppearances**(`font`: [PDFFont](pdffont.md), `provider?`: [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFTextField](pdftextfield.md)›): *void*

*Defined in [api/form/PDFTextField.ts:802](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L802)*

Update the appearance streams for each of this text field's widgets using
the given appearance provider. If no `provider` is passed, the default
appearance provider for text fields will be used. For example:
```js
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
const textField = form.getTextField('some.text.field')
textField.updateAppearances(helvetica, (field, widget, font) => {
  ...
  return drawTextField(...)
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`font` | [PDFFont](pdffont.md) | The font to be used for creating the appearance streams. |
`provider?` | [AppearanceProviderFor](../index.md#appearanceproviderfor)‹[PDFTextField](pdftextfield.md)› | Optionally, the appearance provider to be used for                 generating the contents of the appearance streams.  |

**Returns:** *void*

___

### `Static` of

▸ **of**(`acroText`: PDFAcroText, `ref`: PDFRef, `doc`: [PDFDocument](pdfdocument.md)): *[PDFTextField](pdftextfield.md)‹›*

*Defined in [api/form/PDFTextField.ts:61](https://github.com/Hopding/pdf-lib/blob/b8a44bd/src/api/form/PDFTextField.ts#L61)*

> **NOTE:** You probably don't want to call this method directly. Instead,
> consider using the [PDFForm.getTextField](pdfform.md#gettextfield) method, which will create an
> instance of [PDFTextField](pdftextfield.md) for you.

Create an instance of [PDFTextField](pdftextfield.md) from an existing acroText and ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`acroText` | PDFAcroText | The underlying `PDFAcroText` for this text field. |
`ref` | PDFRef | The unique reference for this text field. |
`doc` | [PDFDocument](pdfdocument.md) | The document to which this text field will belong.  |

**Returns:** *[PDFTextField](pdftextfield.md)‹›*
