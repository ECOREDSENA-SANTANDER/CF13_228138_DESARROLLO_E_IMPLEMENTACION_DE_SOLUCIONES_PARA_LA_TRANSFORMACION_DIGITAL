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
            titulo:
              'Metodologías de diseño y normalización Principios de <i>ACID</i>',
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
            numero: '2.1',
            titulo: 'Entendimiento de la data',
            hash: 't_2_1',
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
            titulo: '<i>Dataset</i>',
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
            titulo: 'Metodologías de análisis (<i>Kimball, Inmon</i>)',
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
            titulo: '<i>SQL</i>',
            hash: 't_5_9',
          },
          {
            numero: '5.10',
            titulo: '<i>No SQL</i>',
            hash: 't_5_10',
          },
          {
            numero: '5.11',
            titulo: '<i>JSON, BSON y XML</i>',
            hash: 't_5_11',
          },
          {
            numero: '5.12',
            titulo: '<i>DDL, DML, DCL</i>',
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
        titulo: 'Herramientas para el análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Entornos de desarrollo - <i>IDE</i>',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: '<i>Python</i>',
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
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
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
      tema: '1. Modelamiento y gestión de bases de datos',
      referencia:
        'Quintana, G. (2014). Aprende <i>SQL</i>. Universitat Jaume I. Servei de Comunicació i Publicacions. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53252',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53252',
    },
    {
      tema: '1.2 Técnicas de almacenamiento de datos y consultas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Aplicando el MER con herramienta Día || Cardinalidad modelo entidad relación. SENA. https://youtu.be/KcORNp2A3yg',
      tipo: 'Video',
      link: 'https://youtu.be/KcORNp2A3yg',
    },
    {
      tema: '2.2 Detección de errores y datos faltantes',
      referencia:
        'Codificandobits. (s.f). Mapa paso a paso manejo datos faltantes. Blog. https://www.codificandobits.com/descargas/ dl_202100618_mapa_pasos_manejo_datos_faltantes.pdf',
      tipo: 'Guía',
      link:
        'https://www.codificandobits.com/descargas/dl_202100618_mapa_pasos_manejo_datos_faltantes.pdf',
    },
    {
      tema: '2.3 Identificación de variables importantes',
      referencia:
        'Sotaquirá, M. (2021). Guía completa para el manejo de datos faltantes. Blog. https://www.codificandobits.com/blog/manejo-datos-faltantes/',
      tipo: 'Artículo',
      link: 'https://www.codificandobits.com/blog/manejo-datos-faltantes/',
    },
    {
      tema: '3.7 Procedimientos almacenados y funciones',
      referencia:
        'Calbimonte, D. (2019). Funciones frente a los procedimientos almacenados en <i>SQL Server</i>. https://www.sqlshack.com/es/funciones-frente-a-los-procedimientos-almacenados-en-sql-server/',
      tipo: 'Tutorial',
      link:
        'https://www.sqlshack.com/es/funciones-frente-a-los-procedimientos-almacenados-en-sql-server/',
    },
    {
      tema: '4. Análisis exploratorio de datos',
      referencia:
        'Codificandobits. (s.f). Guía paso a paso análisis exploratorio. Blog. https://www.codificandobits.com/descargas/ dl_202100611_mapa_pasos_analisis_exploratorio.pdf',
      tipo: 'Mapa conceptual',
      link:
        'https://www.codificandobits.com/descargas/dl_202100611_mapa_pasos_analisis_exploratorio.pdf',
    },
    {
      tema: '5.8 Algebra relacional',
      referencia:
        'Cidecam. (2021). Algebra Relacional. Página web. http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/ libro14/33_algebra_relacional.html',
      tipo: 'Artículo',
      link:
        'http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro14/33_algebra_relacional.html',
    },
    {
      tema: '7.3 Librerías',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Manejo de datos con Pandas. SENA. https://youtu.be/P6LmIUMJg3U',
      tipo: 'Vídeo',
      link: 'https://youtu.be/P6LmIUMJg3U',
    },
  ],
  glosario: [
    {
      termino: 'Información Descriptiva',
      significado:
        'se refiere a las historias que los datos cuentan, se refiere a un histórico de eventos y resultados.',
    },
    {
      termino: 'Información Predictiva',
      significado:
        'se refiere a los hechos probables que sucederán, esto se realiza basado en datos descriptivos, es decir, datos históricos y procesos matemáticos y/o modelación de Machine Learning.',
    },
    {
      termino: '<i>Joins</i>',
      significado:
        'proceso de selección de datos de varias tablas y unirlos en una vista o nueva tabla. Una instrucción de “SQL JOIN” en un comando Select que combina columnas entre una o más tablas en una base de datos.',
    },
    {
      termino: 'Lenguaje <i>DAX</i>',
      significado:
        'lenguaje específico para gestión de datos creado por Microsoft (Data Analysis Expressions). Se emplea en colecciones de datos en aplicaciones como Excel, <i>Analysis Services y Power BI.</i>',
    },
    {
      termino: 'Lenguaje <i>R</i>',
      significado:
        'lenguaje de programación para la gestión de datos. Es un lenguaje interpretado que ejecuta las instrucciones directamente sin previa compilación.',
    },
    {
      termino: 'Normalización',
      significado:
        'la estructura organizada en datos relacionales que cumplen unas reglas de normalización que garantizan la integridad, calidad y optimización en la base de datos.',
    },
    {
      termino: 'Procesadores',
      significado:
        'CPU (Unidad central de proceso), es el componente del computador y otros dispositivos programables, que interpreta las instrucciones contenidas en los programas y procesa los datos.',
    },
    {
      termino: 'Procesamiento por lotes',
      significado:
        'al tener muchas cargas de datos y procesamientos, es necesario reunir recursos para que se ejecuten de manera independiente optimizando recursos, de esta manera las tareas se completan periódicamente de manera repetitiva',
    },
    {
      termino: '<i>RAM</i>',
      significado:
        'es la memoria temporal o de corto plazo de las computadoras, es la memoria principal de trabajo, los programas y datos se cargan allí para que trabajen más rápidamente.',
    },
    {
      termino: '<i>Script</i>',
      significado:
        'se refiere a fragmentos de código de programación que pueden ejecutar una o varias funciones.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        'es el <i>software</i> principal de las computadoras, se emplea como plataforma para gestionar las aplicaciones, recursos del hardware y entornos gráficos y funcionales.',
    },
    {
      termino: 'Tabular',
      significado:
        'en estadística, son la recopilación y procesamiento de la información capturada de los instrumentos disponibles al momento de realizar encuestas, toma de datos y otras.',
    },
    {
      termino: '<i>TI</i>',
      significado: '(IT) Abreviatura de Tecnología de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (2022). Sistema de información económica de la Gerencia Técnica.',
      link:
        'https://totoro.banrep.gov.co/analytics/saw.dll?Portal&PortalPath=%2Fshared%2FDashboards_T%2FD_Estad%C3%ADsticas%2FEstad%C3%ADsticas&NQUser=publico&NQPassword=publico123&lang=es&page=Precios%20e%20inflaci%C3%B3n',
    },

    {
      referencia:
        'Conza, A. (15 de abril de 2018). ESTÁNDARES PARA DISEÑO E IMPLEMENTACIÓN DE BASES DE DATOS RELACIONALES. Obtenido de',
      link: 'http://adrianconza.com/estandares-de-bases-de-datos/',
    },

    {
      referencia:
        'Curto Díaz, J. (2016). Introducción al Business Intelligence. Barcelona: Editorial UOC. Obtenido de',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/101030',
    },

    {
      referencia:
        'Díaz, J. C. (2016). Organizaciones orientadas al dato: transformando las organizaciones hacia una cultura analítica. Barcelona: Editorial UOC. Obtenido de',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58609',
    },

    {
      referencia:
        'Fernández, J. (2021). Escalas de medición de las variables: nominal, ordinal, intervalo y razón.',
      link: 'https://youtu.be/XNuIqSfCskQ',
    },

    {
      referencia:
        'Gawande, S. (2020). iCEDQ Torana INC. Obtenido de 6 Dimensions of Data Quality, Examples, and Measurement:',
      link: 'https://icedq.com/6-data-quality-dimensions',
    },

    {
      referencia:
        'Ommi, A. K. (18 de 02 de 2018). Introduction to Data and Information. Obtenido de MyCloudWiki:',
      link: 'https://www.mycloudwiki.com/san/data-and-information-basics/',
    },

    {
      referencia:
        'Pang, A., Markovski, M., & Ristik, M. (22 de septiembre de 2022). Los 10 principales proveedores de <i>software</i> de análisis y BI, tamaño del mercado y pronóstico del mercado 2021-2026. Obtenido de Apps Run the World:',
      link:
        'https://www.appsruntheworld.com/top-10-analytics-and-bi-software-vendors-and-market-forecast/',
    },

    {
      referencia:
        'Pulido Romero, E., Escobar Dominguez, O., & Núñez Pérez, J. (2019). Bases de datos. México DF: Grupo Editorial Patria. Obtenido de',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283',
    },

    {
      referencia:
        'Velthuis, M. P. (2019). Calidad de datos. Bogotá: Ediciones de la U. Obtenido de',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9094',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
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
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios  CIES ',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios  CIES',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora Para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
}
