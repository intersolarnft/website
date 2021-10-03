export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Your NFT universe | Intersolar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Your NFT universe.',
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
  plugins: [],

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
    publicPath: 'https://intersolarnft.github.io/website/',
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
