export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'A NFT universe | Intersolar',
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'assets/img/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'assets/img/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'assets/img/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'assets/img/favicon.ico',
      },
    ],
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Intersolar is a digital universe of solar systems with planets and suns represented as NFTs on the Solana blockchain.',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      lang: 'scss',
      src: '@/assets/scss/main.scss',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-countdown.js',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

  // ESLint
  eslint: {
    fix: true,
  },

  // Stylelint
  stylelint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            ignoreBrowserslistConfig: true,
          },
        ],
      ],
    },
  },

  // Server settings
  server: {
    host: '0.0.0.0',
    port: '80',
  },

  generate: {
    fallback: '404.html',
  },

  loading: false,
};
