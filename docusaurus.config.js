// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Polkadot Study",
  tagline: "Educational Resources for developers",
  favicon:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1340 1410.3' xml:space='preserve'%3E%3Cellipse fill='%23E6007A' cx='663' cy='147.9' rx='254.3' ry='147.9'/%3E%3Cellipse fill='%23E6007A' cx='663' cy='1262.3' rx='254.3' ry='147.9'/%3E%3Cellipse transform='rotate(-60 180.499 426.56)' fill='%23E6007A' cx='180.5' cy='426.5' rx='254.3' ry='148'/%3E%3Cellipse transform='rotate(-60 1145.575 983.768)' fill='%23E6007A' cx='1145.6' cy='983.7' rx='254.3' ry='147.9'/%3E%3Cellipse transform='rotate(-30 180.45 983.72)' fill='%23E6007A' cx='180.5' cy='983.7' rx='148' ry='254.3'/%3E%3Cellipse transform='rotate(-30 1145.522 426.601)' fill='%23E6007A' cx='1145.6' cy='426.6' rx='147.9' ry='254.3'/%3E%3C/svg%3E",

  // Set the production url of your site here
  url: "https://polkadot.study",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PolkadotStudy ", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@niklasp/docusaurus-plugin-content-tutorials",
      {
        id: "tutorials",
        path: "tutorials",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/PolkadotStudy/website/tree/staging/",
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./docs/docs-sidebars.js"),
          editUrl: "https://github.com/PolkadotStudy/website/tree/staging/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/PolkadotStudy/website/tree/staging/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: "G-SDWBSJ1B4F",
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "polkadot-study.png",
      navbar: {
        title: "Polkadot Study",
        logo: {
          alt: "Polkadot Study Logo",
          src: "img/polkadot_pink.svg",
        },
        items: [
          {
            to: "/tutorials/",
            position: "left",
            label: "Tutorials",
          },
          {
            position: "left",
            label: "Substrate Tutorials",
            items: [
              {
                label: "Substrate in Bits",
                to: "/tutorials/substrate-in-bits/",
              },
              {
                label: "Interactive Substrate Tutorials",
                href: "/tutorials/interactive-substrate-tutorials-rusty-crewmates/",
              },
              // ... more items
            ],
          },
          {
            href: "/docs/authors/new-tutorial-on-polkadot-study/intro",
            position: "left",
            label: "For Authors",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "/about",
            label: "About",
            position: "right",
          },
          {
            href: "https://github.com/PolkadotStudy/website",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tutorials: {
        path: "/tutorials",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/PolkadotStudy/website/tree/staging/",
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
        authorsMapPath: require.resolve("./tutorials/authors.yml"),
      },
      announcementBar: {
        id: "support_us",
        content:
          'We are looking for payed authors to write Polkadot developer tutorials <a rel="noopener noreferrer" href="/blog/looking-for-authors">Learn More</a>',
        backgroundColor: "var(--polkadot-pink)",
        textColor: "#eee",
        isCloseable: true,
      },
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      footer: {
        style: "dark",
        copyright: `Copyleft ${new Date().getFullYear()} Polkadot.study - Built with Docusaurus - This is a community site and in no way incorporated with Parity or Polkadot`,
      },
      colorMode: {
        // defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
        ],
      },
    }),
};

module.exports = config;
