<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estructuras y componentes de analítica de datos

    .row.mt-5.mb-5
      .col-4.px-0
        figure
          img(src="@/assets/curso/temas/Tema6/1.svg", alt="Texto que describa la imagen").floating
      .col-6
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-3 A continuación, este apartado se emplea para dar una breve introducción a elementos muy importantes a hora de aplicar inteligencia de negocios. Se describe a modo conceptual, algunos elementos de las bodegas de datos y sus topologías.
            p La estructura completa de la analítica tiene dos extremos donde fluyen y se transforman los datos, desde los orígenes, pasando por un proceso de carga al sistema analítico, limpieza de datos, optimización de datos para ser guardados de forma consolidada y completa en un arreglo de bases de datos denominado Bodega de datos, pero acá no acaba el flujo, el final es la explotación de datos traducidos en reportes, cubos de datos u otros usos como minería de datos.
      
    p.mb-4 <b>Con el siguiente video, se comprenderá mejor lo que hace referencia mediante la analítica de datos:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1. Bodega de datos

    p.mb-4 La información de las organizaciones proviene de fuentes de datos heterogéneas, muchas veces sin estar integradas, por lo cual tener reportes e información dispersa por áreas de la organización es un asunto que en la actualidad no debería presentarse, pues el fin de la inteligencia de negocios es facilitar el proceso y la disponibilidad de la información más relevante del negocio; para lograr esto se hace necesario centralizar los datos a través de bodegas de datos o Data Warehouse (DWH).

    .row.justify-content-center.align-items-center.mb-5
      .col-8.p-4.fab.d-flex
        p La bodega de datos es entonces una estructura diseñada y desarrollada para almacenar y procesar datos de múltiples fuentes y centralizarlas para la elaboración de reportes y datos analíticos.
      
        figure.mx-7
          img(src='@/assets/curso/temas/Tema6/2.png', alt='Texto que describa la imagen')


    .row.mb-5.justify-content-center.align-items-center
      .col-md-5.col-lg.mb-5.mb-lg-0
        img(src='@/assets/curso/temas/Tema6/3.png' alt='AvatarTop')
      .col-md-5.col-lg.mb-5.mb-lg-0
        p.mb-4 Las bodegas de datos son el corazón de la inteligencia de negocios, allí se almacena de manera incremental toda la información producida por la organización, cuando se establecen desarrollos completos de analítica de datos, se hace necesario contar con infraestructura y gestión de almacenamiento igual de robustas que den respuesta a las exigencias de la cantidad y variedad de datos que se presentan. Para grandes empresas, es posible que se cuente con especialistas para cada proceso del flujo de datos, así mismo el almacenamiento de las bodegas de datos requiere especialistas en gestión de bases de datos y manejar muy bien las arquitecturas y disposición de la información en los diversos clústeres de datos que se puedan emplear. 
        p Esta estructura contiene diversas tablas de hechos y dimensiones, que permiten estructurar la información de tal manera que se pueda visualizar de una mejor manera, las tablas que componen la bodega de datos se pueden presentar en diversos diseños, como tipo estrella, copo de nieve, constelaciones, etc.


    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2 Tipos estrella

    p.mb-4 Es aquella que cuyas dimensiones se relacionan directamente con la tabla de hechos, se representa de la siguiente manera (ver figura): 

    .row.justify-content-around.align-items-center.mb-3
      .col-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6.
          em DWH Tipo Estrella
        figure
          img(src='@/assets/curso/temas/Tema6/4.png', alt='')

    p.mb-4 Como se visualiza en la gráfica, muchas tablas giran alrededor de la tabla principal que es la tabla de hechos, que por lo general, contiene las claves primarias de las dimensiones que se asocian, así como las cifras o medidas realizadas previas en el proceso ETL.


    Separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.3 Copo de nieve

    p.mb-4 La topología copo de nieve o Snowflake se presenta frecuentemente, cuando las dimensiones cuentan con otras familias o categorías que obligan a incluir subdimensiones para completar la información. Ejemplo de esto es cuando existe una dimensión Productos, es muy frecuente que exista la dimensión Categorías. Esta última se conecta a la tabla de hechos a través de Productos que está en medio. Se representa de la siguiente manera (ver figura):

    .row.justify-content-around.align-items-center.mb-3
      .col-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          em DWH Snowflake
        figure
          img(src='@/assets/curso/temas/Tema6/5.png', alt='')

    p.mb-4 En este caso, al igual que con la topología de estrella, los hechos se relacionan con las dimensiones a partir de las claves de las tablas que lo circundan, sin embargo, en este caso se pueden presentar más niveles donde una dimensión pueda contener una clave foránea de otra tabla. En ese sentido, como se ve en el ejemplo, la dimensión_categoria se asocia a los hechos a través de una tabla en medio llamada dimension_producto.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.4 Constelación

    p.mb-4 Similar a la topología copo de nieve, sin embargo, se presenta cuando hay más de dos niveles de relación. Es decir, hay más de una tabla en medio entre una dimensión y la tabla de hechos. Esta arquitectura no es muy común y es poco eficiente, pues ya los diseños dimensionales se van desdibujando un poco y comienzan más a parecerse a estructuras transaccionales que multidimensionales.
    p Al sumar muchos datos en tablas de hechos y dimensiones, más el procesamiento que implica la lectura y escritura de datos con muchas relaciones de tablas y todo de manera masiva, no hace muy veloz estas arquitecturas, ocasionalmente algunas soluciones traen las tablas del sistema transaccional a las bodegas de datos sin procesos ETL, implicando mucha carga para los sistemas de reportes ocasionando su colapso en algunas herramientas de visualización de datos.
     
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
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

<style lang="sass"></style>
