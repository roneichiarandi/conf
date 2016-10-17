module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Dev Paraná Conference",
      description: "2016",
      date: "26 de Novembro",
      logo: "themes/devparana-conf-2016/img/logo.svg",
      // If your event is free, just comment this line
      price: "",
      venue: "SEBRAE MARINGÁ",
      address: "Av. Bento Munhoz da Rocha Neto, 1116 - Zona 7",
      city: "Maringá",
      state: "Paraná",
      keyMapApi: "AIzaSyDWpbeLbFKUPzCBv-7oce-ANxdo1mzvGaw"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Participar",
        link: "#eventick"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "devparana-conf-2016",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      // 'schedule',
      'eventick',
      'sponsors',
      'partners',
      'location'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO DO EVENTO",
      speakers: "OS PALESTRANTES",
      schedule: "CRONOGRAMA",
      sponsors: "PATROCINADORES",
      partners: "APOIO",
      eventick: "FAÇA SUA INSCRIÇÃO",
      contact: "CONTATO"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast / test",
        time: "9h00"
      },
      {
        name: "Maujor",
        photo: "themes/devparana-conf-2016/img/speakers/maujor.jpg",
        bio: "",
        company: "Dinossauro do CSS",
        link: {
          href: "http://twitter.com/maujor",
          text: "@maujor"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Edson Yanaga",
        photo: "themes/devparana-conf-2016/img/speakers/yanaga.jpg",
        bio: "",
        company: "Red Hat",
        link: {
          href: "http://github.com/yanaga",
          text: "@yanaga"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Jaydson Aguiar",
        photo: "themes/devparana-conf-2016/img/speakers/jaydson.jpg",
        bio: "Jaydson Gomes tem +de 12 anos de experiência em desenvolvimento Web.",
        company: "Nasc",
        link: {
          href: "http://twitter.com/jaydson",
          text: "@jaydson"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Guilherme Berghauser",
        photo: "themes/devparana-conf-2016/img/speakers/torto.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://twitter.com/tortoyo",
          text: "@tortoyo"
        },
        presentation: {
          title: "",
          description: "",
          time: ""
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Submissão",
        photo: "themes/devparana-conf-2016/img/submission-speaker.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://goo.gl/forms/mcZqPhchXt9U2wnp2",
          text: "Clique aqui"
        },
        presentation: {
          title: "",
          description: "",
          time: ""
        }
      },
      {
        name: "Submissão",
        photo: "themes/devparana-conf-2016/img/submission-speaker-2.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://goo.gl/forms/mcZqPhchXt9U2wnp2",
          text: "Clique aqui"
        },
        presentation: {
          title: "",
          description: "",
          time: ""
        }
      },
      {
        name: "Submissão",
        photo: "themes/devparana-conf-2016/img/submission-speaker.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://goo.gl/forms/mcZqPhchXt9U2wnp2",
          text: "Clique aqui"
        },
        presentation: {
          title: "",
          description: "",
          time: ""
        }
      },
      {
        name: "Submissão",
        photo: "themes/devparana-conf-2016/img/submission-speaker-2.jpg",
        bio: "",
        company: "",
        link: {
          href: "https://goo.gl/forms/mcZqPhchXt9U2wnp2",
          text: "Clique aqui"
        },
        presentation: {
          title: "",
          description: "",
          time: ""
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Sicredi União",
        logo: "themes/devparana-conf-2016/img/sicredi.png",
        url: "http://sicredi.com.br"
      },
      {
        name: "RedHat",
        logo: "themes/devparana-conf-2016/img/redhat.png",
        url: "http://redhat.com"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "SEBRAE Maringá",
        logo: "themes/devparana-conf-2016/img/sebrae.png",
        url: "http://www.sebraepr.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
