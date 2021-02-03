module.exports = {
  title: "One Step",
  tagline: "Everything ML.",
  url: "https://onestep-electron.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "OneStep-elecTRON", // Usually your GitHub org/user name.
  projectName: "onestep-electron.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "One Step",
      logo: {
        alt: "onestep-logo",
        src: "img/logo-allblack-half.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
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
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/OneStep-elecTRON/onestep-electron.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} One Step, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/OneStep-elecTRON/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/OneStep-elecTRON/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
