import { defineConfig } from 'vitepress'

export default defineConfig({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Floating Vue',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Tooltips & dropdowns made easy',

  cleanUrls: true,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/Akryum/floating-vue/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Akryum/floating-vue' },
    ],
    footer: {
      message: 'Made by Guillaume Chau with ❤️',
    },
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API Reference',
        link: '/api/',
      },
      {
        text: 'Theme editor',
        link: '/theme-editor',
      },
      {
        text: 'Migration',
        items: [
          {
            text: 'From v-tooltip 2',
            link: '/migration/migration-from-v2',
          },
          {
            text: 'From v-tooltip 3 & 4',
            link: '/migration/migration-from-v3',
          },
          {
            text: 'v-tooltip docs',
            link: '/legacy/v2/',
          },
        ],
      },
      {
        text: '💚️ Sponsor',
        link: 'https://github.com/sponsors/Akryum',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Components', link: '/guide/component' },
            { text: 'Directives', link: '/guide/directive' },
            { text: 'Configuration', link: '/guide/config' },
            { text: 'Themes', link: '/guide/themes' },
            { text: 'CSS', link: '/guide/css' },
            { text: 'Custom popper component', link: '/guide/custom-component' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'API Reference', link: '/api/' },
          ],
        },
        {
          text: 'Migration',
          items: [
            {
              text: 'From v-tooltip 2',
              link: '/migration/migration-from-v2',
            },
            {
              text: 'From v-tooltip 3 & 4',
              link: '/migration/migration-from-v3',
            },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
  },
})
