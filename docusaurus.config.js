// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'bohr.io docs',
  tagline: 'bohr.io documentation',
  url: 'https://docs.bohr.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bohr-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bohr-io/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/bohr-io/docs',
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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'bohr.io',
      logo: {
        alt: 'bohr.io logo',
        src: 'img/favicon.ico',
        href: 'https://bohr.io',
        target: '_parent'
      },
      items: [
        {
          type: 'doc',
          docId: 'start',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://blog.bohr.io',
          label: 'Blog', position: 'left'
        },
        {
          to: 'https://bohr.io/login',
          target: '_parent',
          //label: 'Signup',
          html: '<img src="/img/github.svg" alt="Github" width="20" height="20" style="vertical-align: middle;"> Login',
          position: 'right',
          className: 'button button--default button--lg bohr-login-button'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/p3hhfGg2Uy',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bohr_io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.bohr.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bohr-io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} bohr.io.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    hotjar: {
      applicationId: '3244310',
    },
  }),

  plugins: [
    'docusaurus-plugin-hotjar',
  ]
};

module.exports = config;
