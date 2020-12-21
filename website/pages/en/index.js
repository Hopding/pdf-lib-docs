const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;
const translation = require('../../server/translation.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper">
        <a
          className={`button ${this.props.className || ''}`}
          href={this.props.href}
          target={this.props.target}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};
const pre = '```';

const codeExampleSmallScreen = `${pre}js
import { PDFDocument } from 'pdf-lib'

// PDF Creation
const pdfDoc = await PDFDocument.create()
const page = pdfDoc.addPage()
page.drawText('You can create PDFs!')
const pdfBytes = await pdfDoc.save()

// PDF Modification
const pdfDoc = await PDFDocument.load(...)
const pages = pdfDoc.getPages()
pages[0].drawText('You can modify PDFs too!')
const pdfBytes = await pdfDoc.save()
${pre}`;

const codeExampleLargeScreen = `${pre}js
import { PDFDocument } from 'pdf-lib'

// PDF Creation
const pdfDoc = await PDFDocument.create()
const page = pdfDoc.addPage()
page.drawText('You can create PDFs!')
const pdfBytes = await pdfDoc.save()

// PDF Modification
const pdfDoc = await PDFDocument.load(...)
const pages = pdfDoc.getPages()
pages[0].drawText('You can modify PDFs too!')
const pdfBytes = await pdfDoc.save()
${pre}`;

const quickStart = `${pre}html
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/pdf-lib"></script>
  </head>

  <body>
    <iframe id="pdf" style="width: 100%; height: 100%;"></iframe>
  </body>

  <script>
    createPdf();
    async function createPdf() {
      const pdfDoc = await PDFLib.PDFDocument.create();
      const page = pdfDoc.addPage([350, 400]);
      page.moveTo(110, 200);
      page.drawText('Hello World!');
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      document.getElementById('pdf').src = pdfDataUri;
    }
  </script>
</html>
${pre}`;

const denoQuickStart = `${pre}bash
$ deno run --allow-write https://pdf-lib.js.org/deno/quick_start.ts
${pre}`;

const installNpmModule = `${pre}sh
# With npm
npm install --save pdf-lib

# With yarn
yarn add pdf-lib
${pre}`;

const createDocumentSnippet = `${pre}js
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

async function createPdf() {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  const fontSize = 30
  page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  })

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const modifyDocumentSnippet = `${pre}js
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function modifyPdf() {
  const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  })

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const createFormSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function createForm() {
  const pdfDoc = await PDFDocument.create()

  const page = pdfDoc.addPage([550, 750])

  const form = pdfDoc.getForm()

  page.drawText('Enter your favorite superhero:', { x: 50, y: 700, size: 20 })

  const superheroField = form.createTextField('favorite.superhero')
  superheroField.setText('One Punch Man')
  superheroField.addToPage(page, { x: 55, y: 640 })

  page.drawText('Select your favorite rocket:', { x: 50, y: 600, size: 20 })

  page.drawText('Falcon Heavy', { x: 120, y: 560, size: 18 })
  page.drawText('Saturn IV', { x: 120, y: 500, size: 18 })
  page.drawText('Delta IV Heavy', { x: 340, y: 560, size: 18 })
  page.drawText('Space Launch System', { x: 340, y: 500, size: 18 })

  const rocketField = form.createRadioGroup('favorite.rocket')
  rocketField.addOptionToPage('Falcon Heavy', page, { x: 55, y: 540 })
  rocketField.addOptionToPage('Saturn IV', page, { x: 55, y: 480 })
  rocketField.addOptionToPage('Delta IV Heavy', page, { x: 275, y: 540 })
  rocketField.addOptionToPage('Space Launch System', page, { x: 275, y: 480 })
  rocketField.select('Saturn IV')

  page.drawText('Select your favorite gundams:', { x: 50, y: 440, size: 20 })

  page.drawText('Exia', { x: 120, y: 400, size: 18 })
  page.drawText('Kyrios', { x: 120, y: 340, size: 18 })
  page.drawText('Virtue', { x: 340, y: 400, size: 18 })
  page.drawText('Dynames', { x: 340, y: 340, size: 18 })

  const exiaField = form.createCheckBox('gundam.exia')
  const kyriosField = form.createCheckBox('gundam.kyrios')
  const virtueField = form.createCheckBox('gundam.virtue')
  const dynamesField = form.createCheckBox('gundam.dynames')

  exiaField.addToPage(page, { x: 55, y: 380 })
  kyriosField.addToPage(page, { x: 55, y: 320 })
  virtueField.addToPage(page, { x: 275, y: 380 })
  dynamesField.addToPage(page, { x: 275, y: 320 })

  exiaField.check()
  dynamesField.check()

  page.drawText('Select your favorite planet*:', { x: 50, y: 280, size: 20 })

  const planetsField = form.createDropdown('favorite.planet')
  planetsField.addOptions(['Venus', 'Earth', 'Mars', 'Pluto'])
  planetsField.select('Pluto')
  planetsField.addToPage(page, { x: 55, y: 220 })

  page.drawText('Select your favorite person:', { x: 50, y: 180, size: 18 })

  const personField = form.createOptionList('favorite.person')
  personField.addOptions([
    'Julius Caesar',
    'Ada Lovelace',
    'Cleopatra',
    'Aaron Burr',
    'Mark Antony',
  ])
  personField.select('Ada Lovelace')
  personField.addToPage(page, { x: 55, y: 70 })

  page.drawText(\`* Pluto should be a planet too!\`, { x: 15, y: 15, size: 15 })

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const fillFormSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function fillForm() {
  const formUrl = 'https://pdf-lib.js.org/assets/dod_character.pdf'
  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  const marioUrl = 'https://pdf-lib.js.org/assets/small_mario.png'
  const marioImageBytes = await fetch(marioUrl).then(res => res.arrayBuffer())

  const emblemUrl = 'https://pdf-lib.js.org/assets/mario_emblem.png'
  const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(formPdfBytes)

  const marioImage = await pdfDoc.embedPng(marioImageBytes)
  const emblemImage = await pdfDoc.embedPng(emblemImageBytes)

  const form = pdfDoc.getForm()

  const nameField = form.getTextField('CharacterName 2')
  const ageField = form.getTextField('Age')
  const heightField = form.getTextField('Height')
  const weightField = form.getTextField('Weight')
  const eyesField = form.getTextField('Eyes')
  const skinField = form.getTextField('Skin')
  const hairField = form.getTextField('Hair')

  const alliesField = form.getTextField('Allies')
  const factionField = form.getTextField('FactionName')
  const backstoryField = form.getTextField('Backstory')
  const traitsField = form.getTextField('Feat+Traits')
  const treasureField = form.getTextField('Treasure')

  const characterImageField = form.getButton('CHARACTER IMAGE')
  const factionImageField = form.getButton('Faction Symbol Image')

  nameField.setText('Mario')
  ageField.setText('24 years')
  heightField.setText(\`5' 1"\`)
  weightField.setText('196 lbs')
  eyesField.setText('blue')
  skinField.setText('white')
  hairField.setText('brown')

  characterImageField.setImage(marioImage)

  alliesField.setText(
    [
      \`Allies:\`,
      \`  • Princess Daisy\`,
      \`  • Princess Peach\`,
      \`  • Rosalina\`,
      \`  • Geno\`,
      \`  • Luigi\`,
      \`  • Donkey Kong\`,
      \`  • Yoshi\`,
      \`  • Diddy Kong\`,
      \`\`,
      \`Organizations:\`,
      \`  • Italian Plumbers Association\`,
    ].join('\\n'),
  )

  factionField.setText(\`Mario's Emblem\`)

  factionImageField.setImage(emblemImage)

  backstoryField.setText(
    [
      \`Mario is a fictional character in the Mario video game franchise, \`,
      \`owned by Nintendo and created by Japanese video game designer Shigeru \`,
      \`Miyamoto. Serving as the company's mascot and the eponymous \`,
      \`protagonist of the series, Mario has appeared in over 200 video games \`,
      \`since his creation. Depicted as a short, pudgy, Italian plumber who \`,
      \`resides in the Mushroom Kingdom, his adventures generally center \`,
      \`upon rescuing Princess Peach from the Koopa villain Bowser. His \`,
      \`younger brother and sidekick is Luigi.\`,
    ].join('\\n'),
  )

  traitsField.setText(
    [
      \`Mario can use three basic three power-ups:\`,
      \`  • the Super Mushroom, which causes Mario to grow larger\`,
      \`  • the Fire Flower, which allows Mario to throw fireballs\`,
      \`  • the Starman, which gives Mario temporary invincibility\`,
    ].join('\\n'),
  )

  treasureField.setText(['• Gold coins', '• Treasure chests'].join('\\n'))

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const flattenFormSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function flattenForm() {
  const formUrl = 'https://pdf-lib.js.org/assets/form_to_flatten.pdf'
  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(formPdfBytes)

  const form = pdfDoc.getForm()

  form.getTextField('Text1').setText('Some Text');
  form.getRadioGroup('Group2').select('Choice1');
  form.getRadioGroup('Group3').select('Choice3');
  form.getRadioGroup('Group4').select('Choice1');
  form.getCheckBox('Check Box3').check();
  form.getCheckBox('Check Box4').uncheck();
  form.getDropdown('Dropdown7').select('Infinity');
  form.getOptionList('List Box6').select('Honda');

  form.flatten();

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const copyPagesSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function copyPages() {
  const url1 = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  const url2 = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'

  const firstDonorPdfBytes = await fetch(url1).then(res => res.arrayBuffer())
  const secondDonorPdfBytes = await fetch(url2).then(res => res.arrayBuffer())

  const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
  const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)

  const pdfDoc = await PDFDocument.create();

  const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])
  const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [742])

  pdfDoc.addPage(firstDonorPage)
  pdfDoc.insertPage(0, secondDonorPage)

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const embedPngAndJpegImagesSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function embedImages() {
  const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
  const pngUrl = 'https://pdf-lib.js.org/assets/minions_banana_alpha.png'

  const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
  const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())

  const pdfDoc = await PDFDocument.create()

  const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
  const pngImage = await pdfDoc.embedPng(pngImageBytes)

  const jpgDims = jpgImage.scale(0.5)
  const pngDims = pngImage.scale(0.5)

  const page = pdfDoc.addPage()

  page.drawImage(jpgImage, {
    x: page.getWidth() / 2 - jpgDims.width / 2,
    y: page.getHeight() / 2 - jpgDims.height / 2 + 250,
    width: jpgDims.width,
    height: jpgDims.height,
  })
  page.drawImage(pngImage, {
    x: page.getWidth() / 2 - pngDims.width / 2 + 75,
    y: page.getHeight() / 2 - pngDims.height + 250,
    width: pngDims.width,
    height: pngDims.height,
  })

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const embedPdfPagesSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function embedPdfPages() {
  const flagUrl = 'https://pdf-lib.js.org/assets/american_flag.pdf';
  const constitutionUrl = 'https://pdf-lib.js.org/assets/us_constitution.pdf';

  const flagPdfBytes = await fetch(flagUrl).then((res) => res.arrayBuffer());
  const constitutionPdfBytes = await fetch(constitutionUrl).then((res) =>
    res.arrayBuffer(),
  );

  const pdfDoc = await PDFDocument.create();

  const [americanFlag] = await pdfDoc.embedPdf(flagPdfBytes);

  const usConstitutionPdf = await PDFDocument.load(constitutionPdfBytes);
  const preamble = await pdfDoc.embedPage(usConstitutionPdf.getPages()[1], {
    left: 55,
    bottom: 485,
    right: 300,
    top: 575,
  });

  const americanFlagDims = americanFlag.scale(0.3);
  const preambleDims = preamble.scale(2.25);

  const page = pdfDoc.addPage();

  page.drawPage(americanFlag, {
    ...americanFlagDims,
    x: page.getWidth() / 2 - americanFlagDims.width / 2,
    y: page.getHeight() - americanFlagDims.height - 150,
  });
  page.drawPage(preamble, {
    ...preambleDims,
    x: page.getWidth() / 2 - preambleDims.width / 2,
    y: page.getHeight() / 2 - preambleDims.height / 2 - 50,
  });

  const pdfBytes = await pdfDoc.save();
}
${pre}`;

const embedFontAndMeasureTextSnippet = `${pre}js
import { PDFDocument, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

async function embedFontAndMeasureText() {
  const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
  const fontBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.create()

  pdfDoc.registerFontkit(fontkit)
  const customFont = await pdfDoc.embedFont(fontBytes)

  const page = pdfDoc.addPage()

  const text = 'This is text in an embedded font!'
  const textSize = 35
  const textWidth = customFont.widthOfTextAtSize(text, textSize)
  const textHeight = customFont.heightAtSize(textSize)

  page.drawText(text, {
    x: 40,
    y: 450,
    size: textSize,
    font: customFont,
    color: rgb(0, 0.53, 0.71),
  })
  page.drawRectangle({
    x: 40,
    y: 450,
    width: textWidth,
    height: textHeight,
    borderColor: rgb(1, 0, 0),
    borderWidth: 1.5,
  })

  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const addAttachmentsSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function addAttachments() {
  const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
  const pdfUrl = 'https://pdf-lib.js.org/assets/us_constitution.pdf';

  const jpgAttachmentBytes = await fetch(jpgUrl).then(res => res.arrayBuffer())
  const pdfAttachmentBytes = await fetch(pdfUrl).then(res => res.arrayBuffer())
  
  const pdfDoc = await PDFDocument.create()
  
  await pdfDoc.attach(jpgAttachmentBytes, 'cat_riding_unicorn.jpg', {
    mimeType: 'image/jpeg',
    description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
    creationDate: new Date('2019/12/01'),
    modificationDate: new Date('2020/04/19'),
  })
  
  await pdfDoc.attach(pdfAttachmentBytes, 'us_constitution.pdf', {
    mimeType: 'application/pdf',
    description: 'Constitution of the United States 🇺🇸🦅',
    creationDate: new Date('1787/09/17'),
    modificationDate: new Date('1992/05/07'),
  })
  
  const page = pdfDoc.addPage();
  page.drawText('This PDF has two attachments', { x: 135, y: 415 })
  
  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const setDocumentMetadataSnippet = `${pre}js
import { PDFDocument, StandardFonts } from 'pdf-lib'

async function setDocumentMetadata() {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
  const page = pdfDoc.addPage([500, 600])
  page.setFont(timesRomanFont)
  page.drawText('The Life of an Egg', { x: 60, y: 500, size: 50 })
  page.drawText('An Epic Tale of Woe', { x: 125, y: 460, size: 25 })
  
  // Note that these fields are visible in the "Document Properties" section of 
  // most PDF readers.
  pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
  pdfDoc.setAuthor('Humpty Dumpty')
  pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
  pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
  pdfDoc.setProducer('PDF App 9000 🤖')
  pdfDoc.setCreator('pdf-lib (https://github.com/Hopding/pdf-lib)')
  pdfDoc.setCreationDate(new Date('2018-06-24T01:58:37.228Z'))
  pdfDoc.setModificationDate(new Date('2019-12-21T07:00:11.000Z'))
  
  const pdfBytes = await pdfDoc.save()
}
${pre}`;

const readDocumentMetadataSnippet = `${pre}js
import { PDFDocument } from 'pdf-lib'

async function readDocumentMetadata() {
  const url = 'https://pdf-lib.js.org/assets/with_cropbox.pdf'
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes, { 
    updateMetadata: false 
  })
  
  console.log('Title:', pdfDoc.getTitle())
  console.log('Author:', pdfDoc.getAuthor())
  console.log('Subject:', pdfDoc.getSubject())
  console.log('Creator:', pdfDoc.getCreator())
  console.log('Keywords:', pdfDoc.getKeywords())
  console.log('Producer:', pdfDoc.getProducer())
  console.log('Creation Date:', pdfDoc.getCreationDate())
  console.log('Modification Date:', pdfDoc.getModificationDate())
}
${pre}`;

const readDocumentMetadataOutput = `${pre}
Title: Microsoft Word - Basic Curriculum Vitae example.doc
Author: Administrator
Subject: undefined
Creator: PScript5.dll Version 5.2
Keywords: undefined
Producer: Acrobat Distiller 8.1.0 (Windows)
Creation Date: 2010-07-29T14:26:00.000Z
Modification Date: 2010-07-29T14:26:00.000Z
${pre}`;

const drawSvgPathsSnippet = `${pre}js
import { PDFDocument, rgb } from 'pdf-lib'

async function drawSvgPaths() {
  const svgPath =
    'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'
  
  const pdfDoc = await PDFDocument.create()
  
  const page = pdfDoc.addPage()
  page.moveTo(100, page.getHeight() - 5)
  
  page.moveDown(25)
  page.drawSvgPath(svgPath)
  
  page.moveDown(200)
  page.drawSvgPath(svgPath, { borderColor: rgb(0, 1, 0), borderWidth: 5 })
  
  page.moveDown(200)
  page.drawSvgPath(svgPath, { color: rgb(1, 0, 0) })
  
  page.moveDown(200)
  page.drawSvgPath(svgPath, { scale: 0.5 })
  
  const pdfBytes = await pdfDoc.save()
}
${pre}`;

class HomeSplash extends React.Component {
  render() {
    let promoSection = (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">
            <Button className="getStarted" href={'#examples'}>
              <translate>Examples</translate>
            </Button>
            <Button href={'#install'}>Install</Button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="homeContainer">
        <div className="homeWrapperWrapper">
          <div className="wrapper homeWrapper">
            <div className="projectTitle">
              <img
                style={{ maxHeight: '250px', objectFit: 'contain' }}
                alt={siteConfig.title}
                src={`${siteConfig.baseUrl}img/logo-full.svg`}
              />
            </div>

            <div className="homeWrapperInner">
              <div className="homeCodeSnippet">
                <MarkdownBlock>{codeExampleSmallScreen}</MarkdownBlock>
                <MarkdownBlock>{codeExampleLargeScreen}</MarkdownBlock>
              </div>
              <div className="homeTagLine">
                {translation[this.props.language]['localized-strings'].tagline}
              </div>
            </div>

            {promoSection}
          </div>
        </div>
      </div>
    );
  }
}

const Pdf = ({ id = Math.round(Math.random() * 10000000), url }) => (
  <React.Fragment>
    <iframe id={id} className="card" />
    <script
      dangerouslySetInnerHTML={{
        __html: `document.getElementById('${id}').src = '/viewer?url=${url}'`,
      }}
    />
  </React.Fragment>
);

const JsFiddle = ({ url }) => (
  <a
    style={{
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: '#0084ff',
    }}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <JsFiddleSvg />
    <span style={{ paddingLeft: '5px' }}>Try the JSFiddle demo</span>
  </a>
);

const JsFiddleSvg = () => (
  <svg
    style={{ height: '33px', width: '46px', stroke: '#0084ff' }}
    width="46px"
    height="33px"
    viewBox="0 0 46 33"
  >
    <g strokeWidth="1.6" fill="none" fillRule="evenodd">
      <path
        d="M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473"
        id="Oval-1"
        strokeLinecap="round"
      ></path>
      <path
        d="M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603"
        id="Oval-1-Copy"
        strokeLinecap="round"
      ></path>
      <path
        d="M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

// prettier-ignore
const SectionHeader = ({ type = 'h2', children = '' }) => {
  const id = children.toLowerCase().replace(/\s+/g, '-');
  const header = (
      type === 'h2' ? <h2 className="splashSectionHeader">{children}</h2>
    : type === 'h3' ? <h3 className="splashSectionHeader">{children}</h3> 
    : null
  );
  return (
    <div className="splashAnchorContainer">
      <div id={id} className="anchor" />
      <a href={`#${id}`}>{header}</a>
    </div>
  );
};

const ExampleHeader = ({ title, jsFiddleUrl }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
    }}
  >
    <SectionHeader>{title}</SectionHeader>
    {jsFiddleUrl && <JsFiddle url={jsFiddleUrl} />}
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container>
            <GridBlock
              align="center"
              contents={[
                {
                  title: <translate>Create and Modify</translate>,
                  content: (
                    <translate>
                      Create PDF documents from scratch, or modify existing PDF
                      documents. Draw text, images, and vector graphics. Embed
                      your own fonts. Even embed and draw pages from other PDFs.
                    </translate>
                  ),
                },
                {
                  title: <translate>Pure JavaScript</translate>,
                  content: (
                    <translate>
                      Written in TypeScript and compiled to pure JavaScript with
                      no native dependencies. Works in any JavaScript runtime,
                      including browsers, Node, Deno, and even React Native.
                    </translate>
                  ),
                },
                {
                  title: <translate>Split and Merge</translate>,
                  content: (
                    <translate>
                      Add, insert, and remove pages. Split a single PDF into
                      separate ones. Or merge multiple PDFs into a single
                      document.
                    </translate>
                  ),
                },
                {
                  title: <translate>Fill Forms</translate>,
                  content: (
                    <translate>
                      Create new forms or fill and read existing fields. Check
                      boxes, buttons, radio groups, dropdowns, option lists, and
                      text fields are all supported.
                    </translate>
                  ),
                },
              ]}
              layout="fourColumn"
            />
          </Container>
          <Container>
            <blockquote>
              <a
                href="https://github.com/Hopding/pdf-lib#features"
                target="_blank"
                rel="noopener noreferrer"
              >
                <translate>View the full feature set</translate>
              </a>
            </blockquote>
          </Container>

          <Container
            background="light"
            className="quickStartAndExamples homeCodeSnippet"
          >
            <div>
              <SectionHeader>
                <translate>Quick Start</translate>
              </SectionHeader>
              <MarkdownBlock>{quickStart}</MarkdownBlock>
              <translate>
                Save this snippet as an HTML file and load it in your browser to
                get up and running with pdf-lib as quickly as possible.
              </translate>
            </div>

            {/* TODO: Add iframe here */}
            {/* <iframe src="data:text/html;charset=utf-8;base64,PGh0bWw+DQogIDxoZWFkPg0KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPg0KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9wZGYtbGliQGJldGEiPjwvc2NyaXB0Pg0KICA8L2hlYWQ+DQoNCiAgPGJvZHk+DQogICAgPGlmcmFtZSBpZD0icGRmIiBzdHlsZT0id2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjwvaWZyYW1lPg0KICA8L2JvZHk+DQoNCiAgPHNjcmlwdD4NCiAgICBjcmVhdGVQZGYoKTsNCiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZGYoKSB7DQogICAgICBjb25zdCBwZGZEb2MgPSBhd2FpdCBQREZMaWIuUERGRG9jdW1lbnQuY3JlYXRlKCk7DQogICAgICBjb25zdCBwYWdlID0gcGRmRG9jLmFkZFBhZ2UoWzM1MCwgNDAwXSk7DQogICAgICBwYWdlLm1vdmVUbygxMTAsIDIwMCk7DQogICAgICBwYWdlLmRyYXdUZXh0KCdIZWxsbyBXb3JsZCEnKTsNCiAgICAgIGNvbnN0IHBkZkRhdGFVcmkgPSBhd2FpdCBwZGZEb2Muc2F2ZUFzQmFzZTY0KHsgZGF0YVVyaTogdHJ1ZSB9KTsNCiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYnKS5zcmMgPSBwZGZEYXRhVXJpOw0KICAgIH0NCiAgPC9zY3JpcHQ+DQo8L2h0bWw+" /> */}
          </Container>

          <Container
            background="light"
            className="quickStartAndExamples homeCodeSnippet"
          >
            <div>
              <SectionHeader>
                <translate>Deno</translate>
              </SectionHeader>
              <MarkdownBlock>{denoQuickStart}</MarkdownBlock>
              <translate>
                If you are using Deno, then try running the above command in
                your terminal to quickly create a PDF document! 🦕
              </translate>
            </div>
          </Container>

          <Container
            id="install"
            background="light"
            className="quickStartAndExamples homeCodeSnippet"
          >
            <div>
              <SectionHeader>
                <translate>Install</translate>
              </SectionHeader>
              <SectionHeader type="h3">
                <translate>NPM Module</translate>
              </SectionHeader>
              <p>
                If you are using <a href="https://www.npmjs.com/">npm</a> or{' '}
                <a href="https://yarnpkg.com/lang/en/">yarn</a> as your package
                manager:
                <MarkdownBlock>{installNpmModule}</MarkdownBlock>
              </p>
              <SectionHeader type="h3">
                <translate>UMD Module</translate>
              </SectionHeader>
              <p>
                If you aren't using a package manager, UMD modules are available
                on the {}
                <a href="https://unpkg.com/#/">unpkg</a> and{' '}
                <a href="https://www.jsdelivr.com/">jsDelivr</a> CDNs:
                <ul>
                  <li>
                    <a href="https://unpkg.com/pdf-lib/dist/pdf-lib.js">
                      https://unpkg.com/pdf-lib/dist/pdf-lib.js
                    </a>
                  </li>
                  <li>
                    <a href="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js">
                      https://unpkg.com/pdf-lib/dist/pdf-lib.min.js
                    </a>
                  </li>
                  <li>
                    <a href="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.js">
                      https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.js
                    </a>
                  </li>
                  <li>
                    <a href="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js">
                      https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js
                    </a>
                  </li>
                </ul>
              </p>
              <blockquote>
                <strong>NOTE:</strong> if you are using the CDN scripts in
                production, you should include a specific version number in the
                URL, for example:
                <ul>
                  <li>
                    <a href="https://unpkg.com/pdf-lib@1.4.0/dist/pdf-lib.min.js">
                      https://unpkg.com/pdf-lib@1.4.0/dist/pdf-lib.min.js
                    </a>
                  </li>
                  <li>
                    <a href="https://cdn.jsdelivr.net/npm/pdf-lib@1.4.0/dist/pdf-lib.min.js">
                      https://cdn.jsdelivr.net/npm/pdf-lib@1.4.0/dist/pdf-lib.min.js
                    </a>
                  </li>
                </ul>
              </blockquote>
            </div>
          </Container>

          <Container id="examples">
            <div className="examplesOuterContainer">
              <div className="examplesInnerContainer">
                <ExampleHeader
                  title="Create Document"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/rxwsc8f5/13/"
                />
                <MarkdownBlock>{createDocumentSnippet}</MarkdownBlock>
                <Pdf url="/assets/create_document.pdf" />

                <ExampleHeader
                  title="Modify Document"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/64zajhge/1/"
                />
                <MarkdownBlock>{modifyDocumentSnippet}</MarkdownBlock>
                <Pdf url="/assets/modify_document.pdf" />

                <ExampleHeader
                  title="Create Form"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/bct7vngL/4/"
                />
                <MarkdownBlock>{createFormSnippet}</MarkdownBlock>
                <Pdf url="/assets/create_form.pdf" />

                <ExampleHeader
                  title="Fill Form"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/0mwfqkv6/3/"
                />
                <MarkdownBlock>{fillFormSnippet}</MarkdownBlock>
                <Pdf url="/assets/fill_form.pdf" />

                <ExampleHeader
                  title="Flatten Form"
                  // jsFiddleUrl="https://jsfiddle.net/Hopding/0mwfqkv6/3/"
                />
                <MarkdownBlock>{flattenFormSnippet}</MarkdownBlock>
                <Pdf url="/assets/flatten_form.pdf" />

                <ExampleHeader
                  title="Copy Pages"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/ybank8s9/2/"
                />
                <MarkdownBlock>{copyPagesSnippet}</MarkdownBlock>
                <Pdf url="/assets/copy_pages.pdf" />

                <ExampleHeader
                  title="Embed PNG and JPEG Images"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/bcya43ju/5/"
                />
                <MarkdownBlock>{embedPngAndJpegImagesSnippet}</MarkdownBlock>
                <Pdf url="/assets/embed_png_and_jpeg_images.pdf" />

                <ExampleHeader
                  title="Embed PDF Pages"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/Lyb16ocj/13/"
                />
                <MarkdownBlock>{embedPdfPagesSnippet}</MarkdownBlock>
                <Pdf url="/assets/embed_pdf_pages.pdf" />

                <ExampleHeader
                  title="Embed Font and Measure Text"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/rgu6ca59/2/"
                />
                <p>
                  <a href="https://github.com/Hopding/pdf-lib/tree/Rewrite#fontkit-installation">
                    <translate>The </translate>
                    <code>@pdf-lib/fontkit</code> {}
                    <translate>
                      module must be installed to embed custom fonts.
                    </translate>
                  </a>
                </p>
                <MarkdownBlock>{embedFontAndMeasureTextSnippet}</MarkdownBlock>
                <Pdf url="/assets/embed_font_and_measure_text.pdf" />

                <ExampleHeader
                  title="Add Attachments"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/9snL63wj/5/"
                />
                <MarkdownBlock>{addAttachmentsSnippet}</MarkdownBlock>
                <blockquote>
                  Note that only some PDF readers can view attachments. This
                  includes Adobe Reader, Foxit Reader, and Firefox.
                </blockquote>
                <Pdf url="/assets/add_attachments.pdf" />

                <ExampleHeader
                  title="Set Document Metadata"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/vcwmfnbe/2/"
                />
                <MarkdownBlock>{setDocumentMetadataSnippet}</MarkdownBlock>
                <Pdf url="/assets/set_document_metadata.pdf" />

                <ExampleHeader
                  title="Read Document Metadata"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/eg8rfz3k/16/"
                />
                <MarkdownBlock>{readDocumentMetadataSnippet}</MarkdownBlock>
                <p>This script outputs the following:</p>
                <MarkdownBlock>{readDocumentMetadataOutput}</MarkdownBlock>

                <ExampleHeader
                  title="Draw SVG Paths"
                  jsFiddleUrl="https://jsfiddle.net/Hopding/bwaomr9h/2/"
                />
                <MarkdownBlock>{drawSvgPathsSnippet}</MarkdownBlock>
                <Pdf url="/assets/draw_svg_paths.pdf" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
