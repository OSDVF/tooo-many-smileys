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
        "name":"msapplication-TileColor",
        "content":"#3e51af"
      }
    ],
    [
      "meta",
      {
        "name":"msapplication-config",
        "content":"/ikony/browserconfig.xml"
      }
    ],
    [
      "meta",
      {
        "name":"theme-color",
        "content":"#3e51af"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        "text": "Všecky srandy",
        "link": "/",
      },
      {
        "text": "😎👉📈 Časová osa",
        "link": "/timeline/",
      },
      {
        "text": "🤦‍♂️ Kdo to tu splácal",
        "link": "/docs/about"
      },
      {
        "text": "💡 Kontakt",
        "link": "/docs/contact"
      }
    ],
    type: "SmileysHome",
    noFoundPageByTencent: false,
    friendLink: [
      {
        "title": "Poetické jelito",
        "desc": "Kreativní výbuchy",
        "link": "https://poeticke-jelito.webnode.cz/"
      },
    ],
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Naposledy aktualizováno",
    startYear: "2021",
  },
  markdown: {
    "lineNumbers": true
  },
  plugins: {
    '@vuepress/plugin-medium-zoom': {
      selector: '.page img'
    },
  },
}