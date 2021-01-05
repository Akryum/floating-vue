const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'v-tooltip',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Tooltips & dropdowns made easy',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Akryum/v-tooltip',
    editLinks: true,
    docsDir: 'packages/docs',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API Reference',
        link: '/api/'
      },
      {
        text: '💚️ Sponsor',
        link: 'https://github.com/sponsors/Akryum'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'installation',
            'directive',
            'component',
            'config',
            'themes',
            'custom-component',
            'migration'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@kawarimidoll/tailwind',
    'vuepress-plugin-smooth-scroll'
  ]
}
