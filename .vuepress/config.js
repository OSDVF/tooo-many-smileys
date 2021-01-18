module.exports = {
  title: "Příliš mnoho smajlíků",
  description: "Taková polička pro odkládání věcí, které mě, nebo někoho jiného jednou napadly, nebo je někdo zažil",
  dest: "public",
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
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
        "text": "🤓👉📈 Časová osa",
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
    startYear: "2020",
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: 'Články',
            tag: 'Nálepky',
            category: 'Kategorie',
            friendLink: 'Když se budete hodně nudit'
          },
          pagation: {
            prev: 'Předchozí',
            next: 'Následující',
            go: 'Otevřít',
            jump: 'Ukázat'
          }
        }
      }
    }
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