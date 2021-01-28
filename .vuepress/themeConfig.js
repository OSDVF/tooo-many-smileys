module.exports = {
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
        "desc": "Pokud se najde nějaký moc šílený programátor, že by chtěl 🤚➕ přiložit tuku k dílu... určitě jo! 😀 Neprogramátoři prosím čumněte na stránku 💡 Kontakt",
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
        "desc": "Dlaší Ondra. Kvalita softwaru zaručena 🐧",
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
      placeholder: 'Ňáký veřejný komentář, grammar nazi připomínky...?'
    }
}