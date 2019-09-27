export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      return [
        {
          route: '/',
          payload: {
            meta: require(`./assets/content/meta.json`),
            companies: fs
              .readdirSync('./assets/content/companies')
              .map(file => {
                return require(`./assets/content/companies/${file}`)
              })
          }
        }
      ]
    }
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  build: {
    extend(config, ctx) {}
  }
}
