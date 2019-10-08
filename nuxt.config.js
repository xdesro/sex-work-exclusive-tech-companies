import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: 'Tech Companies That Discriminate Against Sex Workers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        itemprop: 'description',
        content: pkg.headMeta.description
      },
      { name: 'theme-color', content: pkg.headMeta.themeColor },
      { name: 'msapplication-TileColor', content: pkg.headMeta.themeColor },
      { name: 'image', content: pkg.headMeta.imageUrl },
      { itemprop: 'name', content: pkg.headMeta.title },
      { itemprop: 'image', content: pkg.headMeta.imageUrl },
      { name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: pkg.headMeta.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.headMeta.description
      },
      { name: 'twitter:site', content: pkg.headMeta.twitter },
      { name: 'twitter:creator', content: pkg.headMeta.twitter },
      { name: 'twitter:image:src', content: pkg.headMeta.imageUrl },
      { hid: 'og:title', name: 'og:title', content: pkg.headMeta.title },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.headMeta.description
      },
      { name: 'og:image', content: pkg.headMeta.imageUrl },
      { hid: 'og:url', name: 'og:url', content: pkg.headMeta.siteUrl },
      { name: 'og:site_name', content: pkg.headMeta.title },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' }
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
                const readFile = fs.readFileSync(
                  `./assets/content/companies/${file}`,
                  'utf-8'
                )
                return readFile
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
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      })
    }
  }
}
