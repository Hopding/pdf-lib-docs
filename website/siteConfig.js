/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  cname: 'pdf-lib.js.org',

  highlight: {
    theme: 'github',
    //   // hljs: function (hljs) {
    //   //   hljs.registerLanguage('reason', reasonHighlightJs)
    //   // }
  },
  separateCss: ['/viewer'],

  title: 'PDF-LIB', // Title for your website.
  tagline: ' Create and modify PDF documents in any JavaScript environment.',
  url: 'https://Hopding.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'pdf-lib',
  organizationName: 'Hopding',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'api/index', label: 'API' },
    { page: 'docs/help', label: 'Help' },
    { href: 'https://github.com/Hopding/pdf-lib', label: 'GitHub' },
    { search: true },
  ],

  /* path to images for header/footer */
  // headerIcon: 'img/logo-outline.svg',
  footerIcon: 'img/logo-outline.svg',
  favicon: 'img/logo3.png',

  /* Colors for website */
  colors: {
    primaryColor: '#d50000',
    secondaryColor: '#ff5252',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Andrew Dillon`,

  // highlight: {
  // Highlight.js theme to use for syntax highlighting in code blocks.
  // theme: 'default',
  // },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['/js/pdf.min.js_2.1.266', '/js/renderPdfs.js'],
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '8b43e0374ae7123101a06b90cca8f4ed',
    indexName: 'pdf-lib',
    algoliaOptions: {}, // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
