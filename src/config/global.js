export default {
  global: {
    componenteFormativo: 'Modelamiento, análisis y preparación de datos',
    descripcionCurso:
      'El recurso educativo presenta contenidos y técnicas sobre conceptos, teorías y herramientas empleadas en sistematización de datos masivos. Se dan las pautas y contextos sobre los paradigmas más usados para la gestión de información enfocado a la analítica y carga masiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelamiento y gestión de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodologías de diseño y normalización Principios de ACID',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de almacenamiento de datos y consultas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estándares técnicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ordenamiento de datos, indexación y recuperación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.2',
            titulo: 'Entendimiento de la data',
            hash: 't_2_2',
          },
          {
            numero: '2.2',
            titulo: 'Detección de errores y datos faltantes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de variables importantes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Dataset',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La inteligencia de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de las preguntas básicas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metodología de integración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de administración',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de solución de problemas (modelación de datos)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Metodologías de análisis (Kimball, Inmon)',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Verificación de valores y escalas',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Procedimientos almacenados y funciones',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Disparadores',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis exploratorio de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estadística descriptiva y estadística inferencial',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Población y muestra',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Escalas de medida y clasificación de variable',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas de análisis estadístico',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métodos para hacer análisis exploratorio de adtos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Datos univariables',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Datos bivariados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Datos multivariables',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Reglas de negocio',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Tipo de restricciones',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Programación transaccional',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo:
              'Programación de estructuras no lineales, desnormalización, series y dataframes',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo: 'Álgebra relacional',
            hash: 't_5_8',
          },
          {
            numero: '5.9',
            titulo: 'SQL',
            hash: 't_5_9',
          },
          {
            numero: '5.10',
            titulo: 'No SQL',
            hash: 't_5_10',
          },
          {
            numero: '5.11',
            titulo: 'JSON, BSON y XML',
            hash: 't_5_11',
          },
          {
            numero: '5.12',
            titulo: 'DDL, DML, DCL',
            hash: 't_5_12',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estructura y componentes de analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bodega de datos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos estrella',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Copo de nieve',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Constelación',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas para el análisis de datos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Entornos de desarrollo - IDE',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Python',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Librerías',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228138_CF04_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Aplicaciones web',
      referencia: 'Ferrer, J. (2014).<i> Aplicaciones web</i>. RA-MA.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=12589',
    },
    {
      tema: 'Ciclo de vida del <i>software</i>',
      referencia:
        'Hernández, M. y Baquero, L. (2020). <i>Ciclo de vida de desarrollo ágil de software seguro</i>. Fundación Universitaria Los Libertadores.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=22372',
    },
    {
      tema: 'Requisitos',
      referencia: 'iTunes U - UAEH. (2019). <i>Tipos de requerimientos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PUyfzEzSUSg',
    },
    {
      tema: 'Requisitos',
      referencia:
        'CavernaTech. (2019). <i>Requisitos funcionales y no funcionales de software</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Pressman, R. (2010). <i>Ingeniería del software: un enfoque práctico</i>. McGraw-Hill.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=686',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Sommerville, I. (2011). <i>Ingeniería de software</i>. Pearson Educación.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=3313',
    },
  ],
  glosario: [
    {
      termino: 'Información Descriptiva',
      significado:
        'se refiere a las historias que los datos cuentan, se refiere a un histórico de eventos y resultados.',
    },
    {
      termino: 'Información Predictiva ',
      significado:
        'se refiere a los hechos probables que sucederán, esto se realiza basado en datos descriptivos, es decir, datos históricos y procesos matemáticos y/o modelación de Machine Learning.',
    },
    {
      termino: 'Joins ',
      significado:
        'proceso de selección de datos de varias tablas y unirlos en una vista o nueva tabla. Una instrucción de “SQL JOIN” en un comando Select que combina columnas entre una o más tablas en una base de datos.',
    },
    {
      termino: 'Lenguaje DAX ',
      significado:
        'lenguaje específico para gestión de datos creado por Microsoft (Data Analysis Expressions). Se emplea en colecciones de datos en aplicaciones como Excel, Analysis Services y Power BI.',
    },
    {
      termino: 'Lenguaje R ',
      significado:
        'lenguaje de programación para la gestión de datos. Es un lenguaje interpretado que ejecuta las instrucciones directamente sin previa compilación.',
    },
    {
      termino: 'Normalización ',
      significado:
        'la estructura organizada en datos relacionales que cumplen unas reglas de normalización que garantizan la integridad, calidad y optimización en la base de datos.',
    },
    {
      termino: 'Procesadores ',
      significado:
        'CPU (Unidad central de proceso), es el componente del computador y otros dispositivos programables, que interpreta las instrucciones contenidas en los programas y procesa los datos.',
    },
    {
      termino: 'Procesamiento por lotes ',
      significado:
        'al tener muchas cargas de datos y procesamientos, es necesario reunir recursos para que se ejecuten de manera independiente optimizando recursos, de esta manera las tareas se completan periódicamente de manera repetitiva',
    },
    {
      termino: 'RAM ',
      significado:
        'es la memoria temporal o de corto plazo de las computadoras, es la memoria principal de trabajo, los programas y datos se cargan allí para que trabajen más rápidamente.',
    },
    {
      termino: 'Script ',
      significado:
        'se refiere a fragmentos de código de programación que pueden ejecutar una o varias funciones.',
    },
    {
      termino: 'Sistema operativo ',
      significado:
        'es el software principal de las computadoras, se emplea como plataforma para gestionar las aplicaciones, recursos del hardware y entornos gráficos y funcionales.',
    },
    {
      termino: 'Tabular ',
      significado:
        'en estadística, son la recopilación y procesamiento de la información capturada de los instrumentos disponibles al momento de realizar encuestas, toma de datos y otras.',
    },
    {
      termino: 'TI ',
      significado: '(IT) Abreviatura de Tecnología de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boehm, B. (1979). A Spiral Model of Software Development and Enhancement. <i>ACM Software Engineering Notes, 11</i>(4), 22-42.',
    },
    {
      referencia:
        'Durán, A. y Bernárdez, B. (2001). <i>Metodología para el análisis de requisitos de sistemas software</i>. DOCPLAYER.',
      link:
        'https://docplayer.es/9147696-Metodologia-para-el-analisis-de-requisitos-de-sistemas-software.html',
    },
    {
      referencia:
        'Heras del Dedo, R. y Álvarez, A. (2017). <i>Métodos ágiles: Scrum, Kanban, Lean</i>. Difusora Larousse - Anaya Multimedia.',
    },
    {
      referencia:
        'ISO/IEC 12207. (2008). <i>Systems and software engineering - Software life cycle processes</i>. ISO.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en',
    },
    {
      referencia:
        'Penzenstadler, B. (s.f.). <i>Requirements Engineering. CSU Long Beach</i>. California State University Long Beach',
      link: 'https://bit.ly/3rtBKXN',
    },
    {
      referencia:
        'Pfleeger, S. (2002). <i>Ingeniería del software. Teoría y práctica</i>. Prentice Hall.',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). <i>Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. Atsistemas - Consultoría it blog</i>.',
      link:
        'https://www.atsistemas.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. <i>Informes Científicos Técnicos - UNPA, 5</i>(1), 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Sommerville, I. (2011). <i>Ingeniería del software</i>. Addison-Wesley.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES - Norte de Santander',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  CIES - Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Bolaño',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
