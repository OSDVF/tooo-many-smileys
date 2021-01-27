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
  themeConfig: {
    sidebar: 'auto',
    nextLinks: true,
    prevLinks: true,
    //Nastavení pro editační odkazy
    docsRepo: 'OSDVF/tooo-many-smileys',
    editLinks: true,
    editLinkText: '✨🐱‍💻 Hustokrutopřísný kód stránky',
    editLinkTitle: 'Otevře vám místo, kde budete mít naprostou kontrolu nad těmito stránkami, muhahahahaha',
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
        "text": "📦 Skladiště",
        "link": "/docs/"
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
        "desc": "Kreativní výbuchy 😋",
        "link": "https://poeticke-jelito.webnode.cz/"
      },
      {
        "title": "Budiž ještě více smajlů!",
        "desc": "Pokud se najde nějaký moc šílený programátor, že by chtěl 🤚➕ přiložit tuku k dílu... určitě jo! 😀",
        "link": "https://github.com/OSDVF/tooo-many-smileys",
        "logo": "https://github.githubassets.com/favicons/favicon.png"
      },
      {
        "title": "D&O Softwares",
        "desc": "Ňáké ozvěny minulosti...",
        "link": "http://dosoftwares.8u.cz"
      },
      {
        "title": "ss11mik",
        "desc": "Dlaší Ondra. Kvalita softwaru zaručena 😉",
        "link": "http://ss11mik.webz.cz",
        "logo": "http://ss11mik.webz.cz/img/favicon.ico"
      },
      {
        "title": "Dorost & Mládež Na Rozvoji",
        "desc": "Křesťanská mládež - jako moje boty 😊",
        "link": "https://dorostmladez.cz",
        "logo": "https://site-898728.mozfiles.com/files/898728/banners/21302084/hmmmm.jpg?1286306"
      },
      {
        "title": "Mourina doporučuje",
        "desc": "🐈😹🐱‍👤",
        "logo": "https://http.cat/favicon.png",
        "link": "https://http.cat/"
      }
    ],
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Naposledy aktualizováno",
    startYear: "2021",
    valineConfig: {//Komentářový plugin
      appId: 'k8vrwntDRlUBMnlX9YBLk813-MdYXbMMI',
      appKey: '8IuNgg6cec570qpHI7JsMPkv',
      avatar: 'robohash',
      lang: 'cs',
      langMode: require("./comments-cs"),
      placeholder: 'Ňáký komentář, grammar nazi připomínky...?'
    }
  },
  markdown: {
    "lineNumbers": true
  },
  plugins: {
    '@vuepress/plugin-medium-zoom': {
      selector: '.page img',
      options: {
        background: "#000"
      }
    }
  },
  chainWebpack(config)
  {
    config.devtool = 'inline-cheap-module-source-map'
  }
}