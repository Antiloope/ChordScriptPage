export const lang = {
  icon: ['assets/en.png', 'assets/es.png'],
  header_tutorial: ['Tutorial', 'Tutorial'],
  header_docs: ['Docs', 'Documentación'],
  header_downloads: ['Downloads', 'Descargas'],
  header_contribute: ['Contribute!', 'Participa!'],
  home_btn_what_is: ['What is ChordScript?', '¿Qué es ChordScript?'],
  home_btn_get_started: ['Get started', 'Primeros pasos'],
  home_welcome_title: ['Welcome to ChordScript page!', '¡Bienvenido a ChordScript!'],
  docs_text: [
      {
        text: 'To see most recent documentation visit the wiki',
        go: 'Wiki documentation'
      },
      {
        text: 'Para ver la documentación mas actualizada visita la wiki',
        go: 'Documentación'
      }
  ],
  home_title_1: ['Music + Programming = CS', 'Music + Programming = CS'],
  home_text_1: [
    'ChordScript is a programming language for music programming and live coding. It allows you to create your own sounds and compose full songs!',
    'ChordScript es un lenguaje de programación para hacer música y para live coding. Puedes crear tus propios sonidos e incluso componer canciones completas!'],
  home_title_2: ['Educational', 'Educativo'],
  home_text_2: [
    'You don\'t know about programming? Are you new in music? No problem! The Tutorial is prepared for anyone wanting to learn.',
    '¿No sabes programación? ¿La música siempre fue una asignatura pendiente? No hay problema! El Tutorial esta preparado para cualquiera con ganas de aprender.'],
  footer_links: [
    [
      {name: 'Tutorial', reference: '/tutorial'},
      {name: 'Downloads', reference: '/downloads'},
      {name: 'About', reference: '/about'},
      {name: 'Contribute', reference: '/contribute'},
      {name: 'FAQ', reference: '/FAQ'},
      ],
    [
      {name: 'Tutorial', reference: '/tutorial'},
      {name: 'Descargas', reference: '/downloads'},
      {name: 'Sobre CS', reference: '/about'},
      {name: 'Contribuir', reference: '/contribute'},
      {name: 'FAQ', reference: '/FAQ'},
    ]
  ],
  footer_description: [
    'ChordScript code is licensed under GPL v3.0. Documentation under CC BY-NC-SA 4.0. Some icons designed by ',
    'El código de ChordScript está lisenciado con GPL v3.0. Documentación: CC BY-NC-SA 4.0. Algunos iconos diseñados por  '
  ],
  downloads_windows: [
    {
      title: 'Download on Windows',
      desc: 'Click the button to download the latest release of the installer for windows. ' +
        'When you install the product, it also creates a maintenance tool that allows you to keep ChordScript always updated!',
      button: {
        text: 'Download',
        href: 'https://github.com/Antiloope/ChordScript/releases/download/v0.2.3-beta/ChordScriptInstaller.exe'
      }
    },
    {
      title: 'Descarga para Windows',
      desc: 'Haz click en el boton para descargar la utima version del instalador para windows. ' +
        'Junto con el programa, se instala una herramienta de mantenimiento que te permite mantener ChordScript siempre actualizado!',
      button: {
        text: 'Descargar',
        href: 'https://github.com/Antiloope/ChordScript/releases/download/v0.2.3-beta/ChordScriptInstaller.exe'
      }
    }
  ],
  downloads_other: [
    {
      title: 'Download on Linux / MacOS',
      desc: 'There are not an official installer for Linux or Mac. We hope to get one soon. ' +
        'Meanwhile, you can go to the guide for building from source code.',
      button: {
        text: 'Build instructions',
        href: 'https://github.com/Antiloope/ChordScript#building'
      }
    },
    {
      title: 'Descarga para Linux / MacOS',
      desc: 'Todavia no hay un instalador oficial para Linux ni MacOS, esperamos pronto tener uno. ' +
        'Hasta entonces, puedes ir a la guia para compilación del codigo fuente',
      button: {
        text: 'Guia de compilación',
        href: 'https://github.com/Antiloope/ChordScript#building'
      }
    }
  ],
  downloads_sources: [
    {
      title: 'Download source code',
      desc: 'You can download the source code of ChordScript or go to the GitHub repo to get it from there',
      button: {
        text: 'Source code',
        href: 'https://github.com/Antiloope/ChordScript/archive/v0.2.0-beta.zip'
      }
    },
    {
      title: 'Descarga el código fuente',
      desc: 'Puedes descargar el código fuente de ChordScript o ir al repositorio de GitHub para descargarlo desde allí',
      button: {
        text: 'Código fuente',
        href: 'https://github.com/Antiloope/ChordScript/archive/v0.2.0-beta.zip'
      }
    }
  ],
  tutorial_main: [
    {
      inProgress: 'Work in progress!',
      title: 'Welcome to ChordScript tutorial',
      cards: [
        {
          text1: 'The tutorial starts with a series of questions in order to design the best customized learning experience for you.',
          text2: 'With your answers, this page creates a recommended path to go over the tutorial sections. In this way, you will not have to repeat topics or access sections that are very advanced for your initial knowledge',
          text3: 'Answering the questions, will not take you more than 3 minutes.'
        },
        {
          title: 'Let\'s start the tutorial!',
          href: '/tutorial',
          text: 'Go to the questions'
        },
        {
          title: 'If you want to go directly to a particular section',
          href: '/tutorial/sections',
          text: 'All sections'
        }
      ],
    },
    {
      inProgress: '¡Página en obra!',
      title: 'Bienvenido al tutorial de ChordScript',
      cards: [
        {
          text1: 'El tutorial consiste en una serie de preguntas que sirven para diseñar la mejor experiencia de aprendizaje personalizada para vos.',
          text2: 'Con tus respuestas, la pagina crea un camino para recorrer las secciones del tutorial. De esta forma, no tendrás repetir temas ni acceder a secciones que son muy avanzadas para tu conocimiento inicial',
          text3: 'Responder las preguntas no te llevará mas de 3 minutos.'
        },
        {
          title: '¡Empecemos!',
          href: '/tutorial',
          text: 'Ir a las preguntas'
        },
        {
          title: 'O si prefieres ir directamente a una sección en particular',
          href: '/tutorial/sections',
          text: 'Todas las secciones'
        }
      ],
    }
  ],
  tutorial_sections: [
    {
      titles: ['Tutorial sections', 'Introduction', 'Core', 'Expert'],
      intro: [
        {
          title: 'About ChordScript',
          description: 'Understanding what ChordScript is',
          items: [],
        },
        {
          title: 'Installation',
          description: 'Installation process and how to use the maintenance tool',
          items: [],
        },
        {
          title: 'First sounds',
          description: 'Creating your first sounds!',
          items: [],
        }
      ],
      core: [
        {
          title: 'Something',
          description: 'Brief explanation',
          items: [],
        },
        {
          title: 'Something',
          description: 'Brief explanation',
          items: [],
        }
      ],
      expert: [
        {
          title: 'Something',
          description: 'Brief explanation',
          items: [],
        },
        {
          title: 'Something',
          description: 'Brief explanation',
          items: [],
        }
      ],
    },
    {
      titles: ['Secciones del tutorial', 'Introducción', 'Nucleo', 'Experto'],
      intro: [
        {
          title: 'Sobre ChordScript',
          description: 'Entendiendo que es ChordScript',
          items: [],
        },
        {
          title: 'Instalación',
          description: 'Proceso de instalación y uso de la herramienta de mantenimiento',
          items: [],
        },
        {
          title: 'Primeros sonidos',
          description: 'Creando tus primeros sonidos!',
          items: [],
        }
      ],
      core: [
        {
          title: 'Algo',
          description: 'Explicación',
          items: [],
        },
        {
          title: 'Algo',
          description: 'Explicación',
          items: [],
        }
      ],
      expert: [
        {
          title: 'Algo',
          description: 'Explicación',
          items: [],
        },
        {
          title: 'Algo',
          description: 'Explicación',
          items: [],
        }
      ],
    }
  ],
};
