import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import pkg from './package.json';
import 'dotenv/config';

const config: Config = {
  title: pkg.config.name,
  tagline: '👻👻👻',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  future: {
    v4: true,
  },
  url: pkg.config.website,
  baseUrl: '/',
  organizationName: pkg.config.github.organiztionName,
  projectName: pkg.config.github.projectName,
  deploymentBranch: pkg.config.github.branch,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.1.0'
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: process.env.APP_ID ?? '',
      apiKey: process.env.API_KEY ?? '',
      indexName: process.env.INDEX_NAME ?? '',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Perona',
      logo: {
        alt: 'Logo',
        src: 'img/logo.jpg',
      },
      items: [{
        type: 'docsVersionDropdown',
        versions: ['current'],
        position: 'right'
      },],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua', 'rust']

    },
  } satisfies Preset.ThemeConfig,
};

export default config;
