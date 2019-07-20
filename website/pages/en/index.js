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

// fake, static, responsive refmt, lol. See reason.css homeCodeSnippet logic
const codeExampleSmallScreen = `${pre}js
import { PDFDocument } from 'pdf-lib'

// PDF Creation
const pdfDoc = await PDFDocument.create()
const page = newPdf.addPage()
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
const page = newPdf.addPage()
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
    <script src="https://unpkg.com/pdf-lib@beta"></script>
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
  const timesRomanFont = await pdfDoc.embedFont(
    StandardFonts.TimesRoman
  )
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

/* <div
  className="card"
  data-pdf="/assets/create_document.pdf"
  data-scale="0.75"
/> */

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
                      documents. Draw text, images, and vector graphics. Even
                      embed your own fonts!
                    </translate>
                  ),
                },
                {
                  title: <translate>Pure JavaScript</translate>,
                  content: (
                    <translate>
                      Written in TypeScript and compiled to pure JavaScript with
                      no native dependencies. Works in any JavaScript runtime,
                      including browsers, Node, and even React Native.
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
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container
            background="light"
            className="quickStartAndExamples homeCodeSnippet"
          >
            <div>
              <h2>
                <translate>Quick Start</translate>
              </h2>
              <MarkdownBlock>{quickStart}</MarkdownBlock>
              <translate>
                Save this snippet as an HTML file and load it in your browser to
                get up and running with pdf-lib as quickly as possible!
              </translate>
            </div>

            {/* TODO: Add iframe here */}
            {/* <iframe src="data:text/html;charset=utf-8;base64,PGh0bWw+DQogIDxoZWFkPg0KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPg0KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9wZGYtbGliQGJldGEiPjwvc2NyaXB0Pg0KICA8L2hlYWQ+DQoNCiAgPGJvZHk+DQogICAgPGlmcmFtZSBpZD0icGRmIiBzdHlsZT0id2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjwvaWZyYW1lPg0KICA8L2JvZHk+DQoNCiAgPHNjcmlwdD4NCiAgICBjcmVhdGVQZGYoKTsNCiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQZGYoKSB7DQogICAgICBjb25zdCBwZGZEb2MgPSBhd2FpdCBQREZMaWIuUERGRG9jdW1lbnQuY3JlYXRlKCk7DQogICAgICBjb25zdCBwYWdlID0gcGRmRG9jLmFkZFBhZ2UoWzM1MCwgNDAwXSk7DQogICAgICBwYWdlLm1vdmVUbygxMTAsIDIwMCk7DQogICAgICBwYWdlLmRyYXdUZXh0KCdIZWxsbyBXb3JsZCEnKTsNCiAgICAgIGNvbnN0IHBkZkRhdGFVcmkgPSBhd2FpdCBwZGZEb2Muc2F2ZUFzQmFzZTY0KHsgZGF0YVVyaTogdHJ1ZSB9KTsNCiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYnKS5zcmMgPSBwZGZEYXRhVXJpOw0KICAgIH0NCiAgPC9zY3JpcHQ+DQo8L2h0bWw+" /> */}
          </Container>

          <Container
            id="install"
            background="light"
            className="quickStartAndExamples homeCodeSnippet"
          >
            <div>
              <h2>
                <translate>Install</translate>
              </h2>
              <h3>
                <translate>NPM Module</translate>
              </h3>
              <p>
                If you are using <a href="https://www.npmjs.com/">npm</a> or{' '}
                <a href="https://yarnpkg.com/lang/en/">yarn</a> as your package
                manager:
                <MarkdownBlock>{installNpmModule}</MarkdownBlock>
              </p>
              <h3>
                <translate>UMD Module</translate>
              </h3>
              <p>
                If you aren't using a package manager, UMD modules are available
                on the {}
                <a href="https://unpkg.com/#/">unpkg</a> CDN:
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
                </ul>
              </p>
            </div>
          </Container>

          <Container id="examples">
            <div className="examplesOuterContainer">
              <div className="examplesInnerContainer">
                <h2>Create Document</h2>
                <MarkdownBlock>{createDocumentSnippet}</MarkdownBlock>
                <Pdf url="/assets/create_document.pdf" />

                <h2>Copy Pages</h2>
                <MarkdownBlock>{createDocumentSnippet}</MarkdownBlock>
                <Pdf url="/assets/copy_pages.pdf" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
