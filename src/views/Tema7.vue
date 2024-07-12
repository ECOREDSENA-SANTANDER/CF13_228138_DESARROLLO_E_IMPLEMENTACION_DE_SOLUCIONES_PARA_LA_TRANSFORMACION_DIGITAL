<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Herramientas para el análisis de datos


    .bloque1(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.py-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p Para el proceso de analizar los datos se utiliza una serie de herramientas que se comparten en la siguiente tabla con su función principal:
            .col-lg-2.col-md-5.col-8.px-5.d-none.d-lg-block
              img.mb-0(alt="" src="@/assets/curso/temas/Tema7/1.svg") 


    .col-md-12.mx-auto.mb-5(data-aos="zoom-in-left")
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        span
          |   Variables y escalas
    .row(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.m-auto
        .tabla-a.t-head-cus.color-acento-contenido.mb-5 
          .banner-tabla.text-white
            .thead-Table-3.colorv1.py-3 Herramientas para el análisis de los datos
          table(alt='La tabla presenta herramientas de análisis de datos y sus funciones: Microsoft Power BI ofrece vistas interactivas con acceso a múltiples fuentes; R proporciona análisis estadístico y modelado; SAS permite procesamiento avanzado y toma de decisiones;  Python trabaja con datos estructurados y no estructurados; Excel es popular en empresas para ajustar y analizar datos; Rapid Miner realiza análisis predictivos; Apache Spark procesa grandes volúmenes de datos rápidamente; y Qlik View organiza información compleja de manera comprensible. Estas herramientas se adaptan a diversas necesidades en el análisis de datos. ')
            thead
              tr
                th.text-white.text-left-cus.w-var Herramientas
                th.text-white.text-left-cus Función
            tbody
              tr.bg27
                td.w-var #[b  Microsoft Power BI]
                td Es una herramienta de análisis segura que proporciona una vista interactiva de la información, dando acceso a más de 60 fuentes y compatible con otras aplicaciones.
              tr.bg28
                td #[b  Programación en R]
                td Esta herramienta de análisis permite la estadística y su modelación, se adapta a varias plataformas por medio de más de 11.000 paquetes que se instalan acorde a cada necesidad de forma automática.
              tr.bg27
                td #[b #[i SAS]]
                td Esta herramienta de análisis actúa como lenguaje en la programación, permitiendo que la información sea procesada de forma separada, siendo útil en la gestión de perfilamiento de los clientes, predicción de compras y demás.
              tr.bg28
                td #[b  Python]
                td Es una herramienta diseñada para trabajar sobre objetos y procesar datos de forma funcional y estructurada.
              tr.bg27
                td #[b  Excel]
                td Esta herramienta utilizada por la gran mayoría de empresas es básica; pero muy útil para analizar los datos de los clientes y se puede ajustar gracias a que cuenta con fórmulas internas que permiten generar frecuencias, filtros, combinaciones y demás.
              tr.bg28
                td #[b Rapid Miner]
                td Es una herramienta para realizar análisis predictivos.
              tr.bg27
                td #[b  Apache Spark]
                td Es una herramienta que procesa los datos de forma rápida, con algoritmos que le permiten clasificar la información.
              tr.bg28
                td #[b  Qlik View]
                td Esta herramienta procesa la información comprimiéndola, ahorrando espacio en el disco duro y la asocia relacionando la información por colores según se requiera.
        figcaption Nota: las herramientas vistas en la tabla anterior son buenas opciones para la gestión del análisis de los datos; pero su uso depende de las necesidades de cada entidad.


    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.1 Entornos de desarrollo - #[i IDE]


    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        p.mt-2-cus En este apartado, se mencionan los Entornos de Desarrollo Integrado (#[i IDE]), los cuales ahorran mucho tiempo y esfuerzo a quienes programan en la preparación de las plataformas e instalación de complementos extras que requieren, de esa manera, solo se dedican a programar y dejar todos los recursos necesarios a que se incluyan en estos entornos. Para la gestión de datos se emplean muchos lenguajes de programación, y lenguajes de consulta, lo que implica prácticamente construir códigos enteros para los procesos de datos.
        p #[b Los entornos más eficientes son:]
      .col-sm-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/Tema7/2.png')
    
    .tarjeta--container.row.mb-5.bg16(data-aos="zoom-in-left")
      .col-md.tarjeta-container-nueve.p-md-5
        .row
          .col-sm-12.col-lg-5.justify-content-end.offset-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema7/3.png')
          .col-sm-12.col-lg-6.m-auto
            LineaTiempoD.color-secundario-2
              .row(numero="1" titulo="Google collaborate")
                .col-sm-12.col-lg-12.mb-4.mb-md-0
                  p.mb-3 Entorno completo en línea de Google. Es versátil, fácil y es muy usado en contextos académicos y aprendizaje de lenguajes de programación. 
                  p Sitio: https://colab.research.google.com/
                figure.p-4
                  img.w-50(src='@/assets/curso/temas/Tema7/4.png')

              .row(numero="2" titulo="Jupyter")
                .col-sm-12.col-lg-12.mb-4.mb-md-0
                  p.mb-3 Puede ejecutarse en  Google collaborate, pero tiene su propio entorno llamado  JupyterLab. 
                  p Sitio: https://jupyter.org/
                figure.p-4
                  img.w-50(src='@/assets/curso/temas/Tema7/5.png')

              .row(numero="3" titulo="PyCharm")
                .col-sm-12.col-lg-12.mb-4.mb-md-0
                  p.mb-0 Editor de código muy potente multilenguaje.  
                  p Sitio: https://www.jetbrains.com/es-es/pycharm/
                figure.p-4
                  img.w-50(src='@/assets/curso/temas/Tema7/6.png')

              .row(numero="4" titulo="Anaconda")
                .col-sm-12.col-lg-12.mb-4.mb-md-0
                  p.mb-3 Muy empleada para desarrollar lenguaje R, Python. Maneja grandes volúmenes de datos y diferentes análisis.   
                  p Sitio: https://www.anaconda.com/ products/distribution o https://youtu.be/xrlISRh0MZs (instructivo para instalar anaconda).
                figure.p-4
                  img.w-50(src='@/assets/curso/temas/Tema7/7.png')

              .row(numero="5" titulo="Orange")
                .col-sm-12.col-lg-12.mb-4.mb-md-0
                  p.mb-3 Un #[i IDE] con recursos de #[i ML], visualización de datos. Como la mayoría de código abierto.    
                  p Sitio: https://orangedatamining.com/ download/
                figure.p-4
                  img.w-50(src='@/assets/curso/temas/Tema7/8.png')
              

              
    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.2 Python

    .row.mb-5.justify-content-center.align-items-center
      .col-sm-6.col-lg-2.mb-3
          img(src='@/assets/curso/temas/Tema7/9.png')
      .col-sm-12.col-lg-10
        p.mb-3 Actualmente, es el lenguaje de programación que lidera los desarrollos basados en gestión de datos. En relación con otros lenguajes presenta curva de aprendizaje rápido, cuenta con múltiples librerías que expanden su capacidad y muchos sistemas de manejo de datos e inteligencia artificial lo emplean para codificar sus funcionalidades.
      
    .row.mb-5
      .col-sm-12.col-lg-8.mb-4.mb-md-0.m-auto
        a.anexo.mb-4.mb-lg-0(href="https://py3.codeskulptor.org" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/Tema7/11.svg")
          .anexo__texto
            p #[b Para desarrollar aplicaciones y realizar minería de datos basado en inteligencia artificial puede emplear alguno de los #[i IDE] anteriormente conocido u otros como #[i Code Skulpor]]


    Separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.3 Librerías

    p.mb-4(data-aos="zoom-in-left") Las librerías en los lenguajes de programación son un conjunto de archivos que contienen códigos de programas o funcionalidades que hacen tareas concretas y repetitivas para facilitar la programación. Las librerías se categorizan por el tipo de funcionalidades que presentan, algunas son de tipo estadístico, otras para la visualización de datos, otras para operaciones matemáticas especializadas, etc.





    .tarjeta--container.row.mb-5(data-aos="zoom-in-left")
      .col-md.bg25.p-5
        .row.mb-4
          .col-sm-12.col-lg-7.mb-5.mb-md-0
            h4.mb-5 En Python, las más comunes y útiles son:
            ul.lista-ul--color
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b  Pandas:] para la ciencia de datos es una librería muy usada, pues facilita la manipulación y consulta de datos.
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b  Numpy:] permite generar una estructura de datos universal, lo que se traduce un mejor análisis de datos, y emplea algoritmos muy poderosos para el intercambio de estos datos. Tiene bien desempeño en datos masivos (dependiendo también del #[i hardware]).
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b  Matplotlib:] con esta librería se generan gráficos de calidad para publicar en línea o en archivos como PDF y sin emplear muchas líneas de código. Se pueden generar gráficos de barras, histogramas, series temporales, espectros de potencia, entre muchas más visualizaciones.
            
          .col-sm-12.col-lg-3.d-none.d-lg-block
              img.mt-5-cus(src='@/assets/curso/temas/Tema7/10.png')
          
</template>

<script>
export default {
  name: 'Tema7',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
