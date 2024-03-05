<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Herramientas para el análisis de datos


    .row.mt-5.mb-5
      .col-11
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p Para el proceso de analizar los datos se utiliza una serie de herramientas que se comparten en la siguiente tabla con su función principal:
      .col-1.px-0
        figure
          img(src="@/assets/curso/temas/Tema7/1.svg", alt="Texto que describa la imagen").floating 


    .col-md-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        em  Variables y escalas

    .tabla-a.color-acento-contenido.mb-5 
      table
        thead.banner-tabla.text-white
          th Herramientas para el análisis de los datos
        thead
          tr
            th.text-white Herramientas
            th.text-white Función
        tbody
          tr.primer-tr
            td <b>Microsoft Power BI</b>
            td Es una herramienta de análisis segura que proporciona una vista interactiva de la información, dando acceso a más de 60 fuentes y compatible con otras aplicaciones.
          tr.segundo-tr
            td <b>Programación en R</b>
            td Esta herramienta de análisis permite la estadística y su modelación, se adapta a varias plataformas por medio de más de 11.000 paquetes que se instalan acorde a cada necesidad de forma automática.
          tr.primer-tr
            td <b>SAS</b>
            td Esta herramienta de análisis actúa como lenguaje en la programación, permitiendo que la información sea procesada de forma separada, siendo útil en la gestión de perfilamiento de los clientes, predicción de compras y demás.
          tr.segundo-tr
            td <b>Python</b>
            td Es una herramienta diseñada para trabajar sobre objetos y procesar datos de forma funcional y estructurada.
          tr.primer-tr
            td <b>Excel</b>
            td Esta herramienta utilizada por la gran mayoría de empresas es básica; pero muy útil para analizar los datos de los clientes y se puede ajustar gracias a que cuenta con fórmulas internas que permiten generar frecuencias, filtros, combinaciones y demás.
          tr.segundo-tr
            td <b>Rapid Miner</b>
            td Es una herramienta para realizar análisis predictivos.
            tr.primer-tr
            td <b>Apache Spark</b>
            td Es una herramienta que procesa los datos de forma rápida, con algoritmos que le permiten clasificar la información.
          tr.segundo-tr
            td <b>Qlik View</b>
            td Esta herramienta procesa la información comprimiéndola, ahorrando espacio en el disco duro y la asocia relacionando la información por colores según se requiera.
    figcaption Nota: las herramientas vistas en la tabla anterior son buenas opciones para la gestión del análisis de los datos; pero su uso depende de las necesidades de cada entidad.


    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.1 Entornos de desarrollo - IDE


    .row.mb-5.justify-content-center.align-items-center
      .col-md-6
        p.mb-3 En este apartado, se mencionan los Entornos de Desarrollo Integrado (IDE), los cuales ahorran mucho tiempo y esfuerzo a quienes programan en la preparación de las plataformas e instalación de complementos extras que requieren, de esa manera, solo se dedican a programar y dejar todos los recursos necesarios a que se incluyan en estos entornos. Para la gestión de datos se emplean muchos lenguajes de programación, y lenguajes de consulta, lo que implica prácticamente construir códigos enteros para los procesos de datos.
        p <b>Los entornos más eficientes son:</b>
      .col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema7/2.png', alt='Texto que describa la imagen')








    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta-container-nueve.p-5
        .row.mb-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema7/3.png', alt='Texto que describa la imagen')
          .col-md-6.mb-5.mb-md-0
            LineaTiempoD.color-secundario
              .row(numero="1" titulo="Google collaborate")
                .col-md-8.mb-4.mb-md-0
                  p.text-small.mb-3 Entorno completo en línea de Google. Es versátil, fácil y es muy usado en contextos académicos y aprendizaje de lenguajes de programación. 
                  p Sitio: https://colab.research.google.com/
                figure.p-4
                  img(src='@/assets/curso/temas/Tema7/4.png', alt='Texto que describa la imagen')

              .row(numero="2" titulo="Jupyter")
                .col-md-8.mb-4.mb-md-0
                  p.text-small.mb-3 Puede ejecutarse en Google Collaborate, pero tiene su propio entorno llamado JupyterLab 
                  p Sitio: https://jupyter.org/
                figure.p-4
                  img(src='@/assets/curso/temas/Tema7/5.png', alt='Texto que describa la imagen')

              .row(numero="3" titulo="PyCharm")
                .col-md-8.mb-4.mb-md-0
                  p.text-small.mb-0 Editor de código muy potente multilenguaje.  
                  p Sitio: https://www.jetbrains.com/es-es/pycharm/
                figure.p-4
                  img(src='@/assets/curso/temas/Tema7/6.png', alt='Texto que describa la imagen')

              .row(numero="4" titulo="Anaconda")
                .col-md-8.mb-4.mb-md-0
                  p.text-small.mb-3 Muy empleada para desarrollar lenguaje R, Phyton. Maneja grandes volúmenes de datos y diferentes análisis.   
                  p Sitio: https://www.anaconda.com/products/distribution o https://youtu.be/xrlISRh0MZs (instructivo para instalar anaconda)
                figure.p-4
                  img(src='@/assets/curso/temas/Tema7/7.png', alt='Texto que describa la imagen')

              .row(numero="5" titulo="Orange")
                .col-md-8.mb-4.mb-md-0
                  p.text-small.mb-3 Un IDE con recursos de ML, visualización de datos. Como la mayoría de código abierto.    
                  p Sitio: https://orangedatamining.com/download/
                figure.p-4
                  img(src='@/assets/curso/temas/Tema7/8.png', alt='Texto que describa la imagen')
              

              
    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.2 Python

    .row.mb-5.justify-content-center.align-items-center
      .col-md-3.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema7/9.png', alt='Texto que describa la imagen')
      .col-md-8
        p.mb-3 Actualmente, es el lenguaje de programación que lidera los desarrollos basados en gestión de datos. En relación con otros lenguajes presenta curva de aprendizaje rápido, cuenta con múltiples librerías que expanden su capacidad y muchos sistemas de manejo de datos e inteligencia artificial lo emplean para codificar sus funcionalidades.
      
    .row.mb-5
      .col-md-8.mb-4.mb-md-0
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Para desarrollar aplicaciones y realizar minería de datos basado en inteligencia artificial puede emplear alguno de los IDE anteriormente conocido u otros como Code Skulpor</b>


    Separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.3 Librerías

    p.mb-4 Las librerías en los lenguajes de programación son un conjunto de archivos que contienen códigos de programas o funcionalidades que hacen tareas concretas y repetitivas para facilitar la programación. Las librerías se categorizan por el tipo de funcionalidades que presentan, algunas son de tipo estadístico, otras para la visualización de datos, otras para operaciones matemáticas especializadas, etc.





    .tarjeta--container.row.mb-5
      .col-md.tarjeta-container-siete.p-5
        .row.mb-4
          .col-md-6.mb-5.mb-md-0
            h4.mb-5 En Phyton, las más comunes y útiles son:
            p.mb-4 <b>Por ejemplo:</b>
            i.fas.fa-check.me-2.mb-1 Pandas: para la ciencia de datos es una librería muy usada, pues facilita la manipulación y consulta de datos.
            i.fas.fa-check.me-2.mb-1 Numpy: permite generar una estructura de datos universal, lo que se traduce un mejor análisis de datos, y emplea algoritmos muy poderosos para el intercambio de estos datos. Tiene bien desempeño en datos masivos (dependiendo también del hardware).
            i.fas.fa-check.me-2.mb-4 Matplotlib: con esta librería se generan gráficos de calidad para publicar en línea o en archivos como PDF y sin emplear muchas líneas de código. Se pueden generar gráficos de barras, histogramas, series temporales, espectros de potencia, entre muchas más visualizaciones.
            
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema7/10.png', alt='Texto que describa la imagen')
          
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

<style lang="sass">
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
