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
        content:
          'As comprehensive as possible a list of tech companies that have sex-work-exclusive polices in their Terms of Service.'
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
                const readFile = fs.readFileSync(
                  `./assets/content/companies/${file}`,
                  'utf-8'
                )
                // return require(`./assets/content/companies/${file}`)
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
