// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "One Step",
  tagline: "Python Programming - Data Science - Machine Learning",
  url: "https://onestep-electron.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "OneStep-elecTRON", // Usually your GitHub org/user name.
  projectName: "onestep-electron.github.io", // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/OneStep-elecTRON/onestep-electron.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "One Step",
        logo: {
          alt: "onestep-logo",
          src: "img/logo-allblack-half.png",
        },
        items: [
          {
            to: "docs/machine-learning-tracks",
            label: "ML Tracks",
            position: "left",
          },
          {
            to: "docs/python-crash-course",
            label: "Python Crash Course",
            position: "left",
          },
          {
            href:
              "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
            label: "GitHub",
            position: "right",
          },
          {
            to: "/me",
            label: "My Account",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Machine Learning",
            items: [
              {
                label: "Easy Track",
                to: "docs/EasyTrack/",
              },
              {
                label: "Intermediate Track",
                to: "docs/IntermediateTrack/",
              },
              {
                label: "Advanced Track",
                to: "docs/AdvancedTrack/",
              },
            ],
          },
          {
            title: "Python",
            items: [
              {
                label: "Crash Course",
                href: "docs/python-crash-course",
              },
            ],
          },
          {
            title: "Data Science",
            items: [
              {
                label: "Coming Soon",
                href:
                  "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} One Step, Inc. Built with Docusaurus.`,
      },
      metadata: [
        {
          name: "description",
          content:
            "A community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed with ❤️ at elecTRON.",
        },
        {
          name: "og:description",
          content:
            "A community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed with ❤️ at elecTRON.",
        },
        {
          name: "og:title",
          content: "OneStep - ML",
        },
        {
          name: "og:site_name",
          content:
            "A community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed with ❤️ at elecTRON.",
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
