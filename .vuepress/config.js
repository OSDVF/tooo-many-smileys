module.exports = {
  title: "Příliš mnoho smajlíků",
  description: "Taková polička pro odkládání věcí, které mě, nebo někoho jiného jednou napadly, nebo je někdo zažil",
  dest: "public",
  head: [
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "/ikony/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/ikony/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/ikony/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/ikony/site.webmanifest"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/ikony/safari-pinned-tab.svg",
        "color": "#3e51af"
      }
    ],
    [
      "link",
      {
        "rel": "shortcut icon",
        "href": "/ikony/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3e51af"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-config",
        "content": "/ikony/browserconfig.xml"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3e51af"
      }
    ]
  ],
  theme: "reco",
  themeConfig: require("./themeConfig"),
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4, 5] },
    extractHeaders: ['h2','h3','h4','h5'],
    extendMarkdown: (md) => {
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-decorate'))
      md.use(require('markdown-it-sub-alt'))
    }
  },
  plugins: {
    '@vuepress/plugin-medium-zoom': {
      selector: '.page img',
      options: {
        background: "#000"
      }
    },
    'sitemap': {
      hostname: 'http://prilismnohosmajliku.wz.cz'
    },
  },
  chainWebpack(config)
  {
    config.devtool = 'inline-cheap-module-source-map'
  }
}