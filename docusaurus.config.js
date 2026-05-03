// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open Logiks",
  tagline: "Logiks React Components are cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://openlogiks.github.io",
  baseUrl: "/Logiks2-Documents/",

  organizationName: "OpenLogiks",
  projectName: "Logiks2-Documents",
  trailingSlash: true,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "./docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Home",
        logo: {
          alt: "Home",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            label: "Docs",
            sidebarId: "tutorialSidebar",
            position: "left",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/LogiksReactPlugins/Logiks2-Documents",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/intro",
              },
              {
                label: "API Reference",
                to: "/intro",
              },
            ],
          },
          {
            title: "Repos",
            items: [
              {
                label: "Reports",
                href: "https://github.com/LogiksReactPlugins/LogiksReports",
              },
              {
                label: "Forms",
                href: "https://github.com/LogiksReactPlugins/LogiksForms",
              },
              {
                label: "Infoviews",
                href: "https://github.com/LogiksReactPlugins/LogiksInfoview",
              },
              {
                label: "Navigation",
                href: "https://github.com/LogiksReactPlugins/navigator",
              },
              {
                label: "Dashboards",
                href: "https://github.com/LogiksReactPlugins/LogiksDashboard",
              },
              {
                label: "Charts",
                href: "https://github.com/LogiksReactPlugins/LogiksCharts",
              },
            ],
          },
          {
            title: "Development",
            items: [
              {
                label: "Report a Bug",
                href: "https://github.com/LogiksReactPlugins/LogiksReports",
              },
              {
                label: "Report Security Issue",
                href: "https://github.com/LogiksReactPlugins/LogiksReports",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/LogiksReactPlugins",
              },
            ],
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
