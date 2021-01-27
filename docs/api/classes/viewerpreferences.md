---
id: "viewerpreferences"
title: "ViewerPreferences"
sidebar_label: "ViewerPreferences"
---

[pdf-lib](../index.md) › [ViewerPreferences](viewerpreferences.md)

## Hierarchy

* **ViewerPreferences**

## Index

### Methods

* [getCenterWindow](viewerpreferences.md#getcenterwindow)
* [getDisplayDocTitle](viewerpreferences.md#getdisplaydoctitle)
* [getDuplex](viewerpreferences.md#getduplex)
* [getFitWindow](viewerpreferences.md#getfitwindow)
* [getHideMenubar](viewerpreferences.md#gethidemenubar)
* [getHideToolbar](viewerpreferences.md#gethidetoolbar)
* [getHideWindowUI](viewerpreferences.md#gethidewindowui)
* [getNonFullScreenPageMode](viewerpreferences.md#getnonfullscreenpagemode)
* [getNumCopies](viewerpreferences.md#getnumcopies)
* [getPickTrayByPDFSize](viewerpreferences.md#getpicktraybypdfsize)
* [getPrintPageRange](viewerpreferences.md#getprintpagerange)
* [getPrintScaling](viewerpreferences.md#getprintscaling)
* [getReadingDirection](viewerpreferences.md#getreadingdirection)
* [setCenterWindow](viewerpreferences.md#setcenterwindow)
* [setDisplayDocTitle](viewerpreferences.md#setdisplaydoctitle)
* [setDuplex](viewerpreferences.md#setduplex)
* [setFitWindow](viewerpreferences.md#setfitwindow)
* [setHideMenubar](viewerpreferences.md#sethidemenubar)
* [setHideToolbar](viewerpreferences.md#sethidetoolbar)
* [setHideWindowUI](viewerpreferences.md#sethidewindowui)
* [setNonFullScreenPageMode](viewerpreferences.md#setnonfullscreenpagemode)
* [setNumCopies](viewerpreferences.md#setnumcopies)
* [setPickTrayByPDFSize](viewerpreferences.md#setpicktraybypdfsize)
* [setPrintPageRange](viewerpreferences.md#setprintpagerange)
* [setPrintScaling](viewerpreferences.md#setprintscaling)
* [setReadingDirection](viewerpreferences.md#setreadingdirection)

## Methods

###  getCenterWindow

▸ **getCenterWindow**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:239](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L239)*

Returns `true` if PDF readers should position the document's window in the
center of the screen.

**Returns:** *boolean*

Whether or not to center the document window.

___

###  getDisplayDocTitle

▸ **getDisplayDocTitle**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:250](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L250)*

Returns `true` if the window's title bar should display the document
`Title`, taken from the document metadata (see [PDFDocument.getTitle](pdfdocument.md#gettitle)).
Returns `false` if the title bar should instead display the filename of the
PDF file.

**Returns:** *boolean*

Whether to display the document title.

___

###  getDuplex

▸ **getDuplex**(): *[Duplex](../enums/duplex.md) | undefined*

*Defined in [core/interactive/ViewerPreferences.ts:288](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L288)*

Returns the paper handling option that should be used when printing the
file from the print dialog.

**Returns:** *[Duplex](../enums/duplex.md) | undefined*

The paper handling option.

___

###  getFitWindow

▸ **getFitWindow**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:230](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L230)*

Returns `true` if PDF readers should resize the document's window to fit
the size of the first displayed page.

**Returns:** *boolean*

Whether or not the window should be resized to fit.

___

###  getHideMenubar

▸ **getHideMenubar**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:211](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L211)*

Returns `true` if PDF readers should hide the menu bar when displaying this
document.

**Returns:** *boolean*

Whether or not the menu bar should be hidden.

___

###  getHideToolbar

▸ **getHideToolbar**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:202](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L202)*

Returns `true` if PDF readers should hide the toolbar menus when displaying
this document.

**Returns:** *boolean*

Whether or not toolbars should be hidden.

___

###  getHideWindowUI

▸ **getHideWindowUI**(): *boolean*

*Defined in [core/interactive/ViewerPreferences.ts:221](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L221)*

Returns `true` if PDF readers should hide the user interface elements in
the document's window (such as scroll bars and navigation controls),
leaving only the document's contents displayed.

**Returns:** *boolean*

Whether or not user interface elements should be hidden.

___

###  getNonFullScreenPageMode

▸ **getNonFullScreenPageMode**(): *[NonFullScreenPageMode](../enums/nonfullscreenpagemode.md)*

*Defined in [core/interactive/ViewerPreferences.ts:259](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L259)*

Returns the page mode, which tells the PDF reader how to display the
document after exiting full-screen mode.

**Returns:** *[NonFullScreenPageMode](../enums/nonfullscreenpagemode.md)*

The page mode after exiting full-screen mode.

___

###  getNumCopies

▸ **getNumCopies**(): *number*

*Defined in [core/interactive/ViewerPreferences.ts:343](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L343)*

Returns the number of copies to be printed when the print dialog is opened
for this document.

**Returns:** *number*

The default number of copies to be printed.

___

###  getPickTrayByPDFSize

▸ **getPickTrayByPDFSize**(): *boolean | undefined*

*Defined in [core/interactive/ViewerPreferences.ts:299](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L299)*

Returns `true` if the PDF page size should be used to select the input
paper tray.

**Returns:** *boolean | undefined*

Whether or not the PDF page size should be used to select the
         input paper tray.

___

###  getPrintPageRange

▸ **getPrintPageRange**(): *[PageRange](../interfaces/pagerange.md)[]*

*Defined in [core/interactive/ViewerPreferences.ts:320](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L320)*

Returns an array of page number ranges, which are the values used to
initialize the print dialog box when the file is printed. Each range
specifies the first (`start`) and last (`end`) pages in a sub-range of
pages to be printed. The first page of the PDF file is denoted by 0.
For example:
```js
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
const includesPage3 = viewerPrefs
  .getPrintRanges()
  .some(pr => pr.start =< 2 && pr.end >= 2)
if (includesPage3) console.log('printRange includes page 3')
```

**Returns:** *[PageRange](../interfaces/pagerange.md)[]*

An array of objects, each with the properties `start` and `end`,
         denoting page indices. If not, specified an empty array is
         returned.

___

###  getPrintScaling

▸ **getPrintScaling**(): *[PrintScaling](../enums/printscaling.md)*

*Defined in [core/interactive/ViewerPreferences.ts:278](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L278)*

Returns the page scaling option that the PDF reader should select when the
print dialog is displayed.

**Returns:** *[PrintScaling](../enums/printscaling.md)*

The page scaling option.

___

###  getReadingDirection

▸ **getReadingDirection**(): *[ReadingDirection](../enums/readingdirection.md)*

*Defined in [core/interactive/ViewerPreferences.ts:268](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L268)*

Returns the predominant reading order for text.

**Returns:** *[ReadingDirection](../enums/readingdirection.md)*

The text reading order.

___

###  setCenterWindow

▸ **setCenterWindow**(`centerWindow`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:393](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L393)*

Choose whether the PDF reader should position the document's window in the
center of the screen.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`centerWindow` | boolean | `true` if the window should be centered.  |

**Returns:** *void*

___

###  setDisplayDocTitle

▸ **setDisplayDocTitle**(`displayTitle`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:404](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L404)*

Choose whether the window's title bar should display the document `Title`
taken from the document metadata (see [PDFDocument.setTitle](pdfdocument.md#settitle)). If
`false`, the title bar should instead display the PDF filename.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`displayTitle` | boolean | `true` if the document title should be displayed.  |

**Returns:** *void*

___

###  setDuplex

▸ **setDuplex**(`duplex`: [Duplex](../enums/duplex.md)): *void*

*Defined in [core/interactive/ViewerPreferences.ts:501](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L501)*

Choose the paper handling option that should be selected by default in the
print dialog.

For example:
```js
import { PDFDocument, Duplex } from 'pdf-lib'

const pdfDoc = await PDFDocument.create()
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
viewerPrefs.setDuplex(Duplex.DuplexFlipShortEdge)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`duplex` | [Duplex](../enums/duplex.md) | The double or single sided printing option.  |

**Returns:** *void*

___

###  setFitWindow

▸ **setFitWindow**(`fitWindow`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:383](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L383)*

Choose whether the PDF reader should resize the document's window to fit
the size of the first displayed page.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fitWindow` | boolean | `true` if the window should be resized.  |

**Returns:** *void*

___

###  setHideMenubar

▸ **setHideMenubar**(`hideMenubar`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:362](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L362)*

Choose whether the PDF reader's menu bar should be hidden while the
document is active.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hideMenubar` | boolean | `true` if the menu bar should be hidden.  |

**Returns:** *void*

___

###  setHideToolbar

▸ **setHideToolbar**(`hideToolbar`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:352](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L352)*

Choose whether the PDF reader's toolbars should be hidden while the
document is active.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hideToolbar` | boolean | `true` if the toolbar should be hidden.  |

**Returns:** *void*

___

###  setHideWindowUI

▸ **setHideWindowUI**(`hideWindowUI`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:373](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L373)*

Choose whether the PDF reader should hide user interface elements in the
document's window (such as scroll bars and navigation controls), leaving
only the document's contents displayed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hideWindowUI` | boolean | `true` if the user interface elements should be hidden.  |

**Returns:** *void*

___

###  setNonFullScreenPageMode

▸ **setNonFullScreenPageMode**(`nonFullScreenPageMode`: [NonFullScreenPageMode](../enums/nonfullscreenpagemode.md)): *void*

*Defined in [core/interactive/ViewerPreferences.ts:431](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L431)*

Choose how the PDF reader should display the document upon exiting
full-screen mode. This entry is meaningful only if the value of the
`PageMode` entry in the document's [[PDFCatalog]] is `FullScreen`.

For example:
```js
import { PDFDocument, NonFullScreenPageMode, PDFName } from 'pdf-lib'

const pdfDoc = await PDFDocument.create()

// Set the PageMode
pdfDoc.catalog.set(PDFName.of('PageMode'),PDFName.of('FullScreen'))

// Set what happens when full-screen is closed
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
viewerPrefs.setNonFullScreenPageMode(NonFullScreenPageMode.UseOutlines)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nonFullScreenPageMode` | [NonFullScreenPageMode](../enums/nonfullscreenpagemode.md) | How the document should be displayed upon                              exiting full screen mode.  |

**Returns:** *void*

___

###  setNumCopies

▸ **setNumCopies**(`numCopies`: number): *void*

*Defined in [core/interactive/ViewerPreferences.ts:571](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L571)*

Choose the default number of copies to be printed when the print dialog is
opened for this file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`numCopies` | number | The default number of copies.  |

**Returns:** *void*

___

###  setPickTrayByPDFSize

▸ **setPickTrayByPDFSize**(`pickTrayByPDFSize`: boolean): *void*

*Defined in [core/interactive/ViewerPreferences.ts:520](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L520)*

Choose whether the PDF document's page size should be used to select the
input paper tray when printing. This setting influences only the preset
values used to populate the print dialog presented by a PDF reader.

If PickTrayByPDFSize is true, the check box in the print dialog associated
with input paper tray should be checked. This setting has no effect on
operating systems that do not provide the ability to pick the input tray
by size.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pickTrayByPDFSize` | boolean | `true` if the document's page size should be used                          to select the input paper tray.  |

**Returns:** *void*

___

###  setPrintPageRange

▸ **setPrintPageRange**(`printPageRange`: [PageRange](../interfaces/pagerange.md)[] | [PageRange](../interfaces/pagerange.md)): *void*

*Defined in [core/interactive/ViewerPreferences.ts:551](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L551)*

Choose the page numbers used to initialize the print dialog box when the
file is printed. The first page of the PDF file is denoted by 0.

For example:
```js
import { PDFDocument } from 'pdf-lib'

const pdfDoc = await PDFDocument.create()
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()

// We can set the default print range to only the first page
viewerPrefs.setPrintPageRange({ start: 0, end: 0 })

// Or we can supply noncontiguous ranges (e.g. pages 1, 3, and 5-7)
viewerPrefs.setPrintPageRange([
  { start: 0, end: 0 },
  { start: 2, end: 2 },
  { start: 4, end: 6 },
])
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`printPageRange` | [PageRange](../interfaces/pagerange.md)[] &#124; [PageRange](../interfaces/pagerange.md) | An object or array of objects, each with the                       properties `start` and `end`, denoting a range of                       page indices.  |

**Returns:** *void*

___

###  setPrintScaling

▸ **setPrintScaling**(`printScaling`: [PrintScaling](../enums/printscaling.md)): *void*

*Defined in [core/interactive/ViewerPreferences.ts:480](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L480)*

Choose the page scaling option that should be selected when a print dialog
is displayed for this document.

For example:
```js
import { PDFDocument, PrintScaling } from 'pdf-lib'

const pdfDoc = await PDFDocument.create()
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
viewerPrefs.setPrintScaling(PrintScaling.None)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`printScaling` | [PrintScaling](../enums/printscaling.md) | The print scaling option.  |

**Returns:** *void*

___

###  setReadingDirection

▸ **setReadingDirection**(`readingDirection`: [ReadingDirection](../enums/readingdirection.md)): *void*

*Defined in [core/interactive/ViewerPreferences.ts:459](https://github.com/Hopding/pdf-lib/blob/d213f92/src/core/interactive/ViewerPreferences.ts#L459)*

Choose the predominant reading order for text.

This entry has no direct effect on the document's contents or page
numbering, but may be used to determine the relative positioning of pages
when displayed side by side or printed n-up.

For example:
```js
import { PDFDocument, ReadingDirection } from 'pdf-lib'

const pdfDoc = await PDFDocument.create()
const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
viewerPrefs.setReadingDirection(ReadingDirection.R2L)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`readingDirection` | [ReadingDirection](../enums/readingdirection.md) | The reading order for text.  |

**Returns:** *void*
