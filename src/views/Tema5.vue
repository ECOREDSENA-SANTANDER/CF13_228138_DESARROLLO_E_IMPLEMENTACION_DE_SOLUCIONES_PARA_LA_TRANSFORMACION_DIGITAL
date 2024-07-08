<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métodos para hacer análisis exploratorio de datos

    .bloque1(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.py-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p La exploración de datos es sin duda, una de las tareas más importantes, pero también es una de las más complejas, especialmente para iniciar su exploración. La primera tarea es tener idea de la manera como están los datos, identificar las variables más importantes, la manera en cómo se relacionan o no unas con otras, tamaño de los datos, determinar si se presentan patrones, cálculos, qué calidad tienen estos datos, etc.
            .col-lg-2.col-md-5.col-8.px-5.d-none.d-lg-block
              img.mb-0(alt="" src="@/assets/curso/temas/Tema5/1.svg") 
    h5.mb-0(data-aos="zoom-in-left") Puede ser una tarea dispendiosa pero necesaria antes de emprender procesos técnicos de inteligencia de negocios.
    Separador


    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Datos univariables

    p(data-aos="zoom-in-left") Son los datos que solo se ocupan de una sola variable, por lo tanto, este tipo de datos son la forma más sencilla de analizar, pues la información se ocupa de una sola cantidad que cambia de registro a registro. Describe los datos y encuentra los patrones que se puedan presentar.
    
    .row.justify-content-around.align-items-center.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .cajon.color-acento-contenido.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-sm-2.col-lg-1.col-md-12.d-none.d-lg-block
              img(src="@/assets/curso/temas/Tema5/2.svg", alt="Texto que describa la imagen")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 #[b Por ejemplo: ] la altura de las personas. En este caso la única variable es la altura y su análisis se centra en determinar la media, el máximo, mínimo, moda, etc.

    Separador


    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Datos bivariados

    p.mb-5(data-aos="zoom-in-left") Son aquellos datos que involucran dos variables. Su análisis toma causas y resultados asociados para conocer la relación entre las dos variables.

    .row.justify-content-around.align-items-center.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .cajon.color-acento-contenido.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-sm-2.col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/temas/Tema5/3.svg", alt="Texto que describa la imagen")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[b Un ejemplo ] de datos bivariados puede ser la temperatura del ambiente en un día y las ventas de helados.




    Separador


    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Datos multivariables.

    p.mb-5(data-aos="zoom-in-left") Similar al anterior (bivariado) pero contiene más de dos variables dependientes.

    .row.justify-content-around.align-items-center.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .cajon.color-acento-contenido.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/temas/Tema5/4.svg", alt="Texto que describa la imagen")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0.fw-bold Su análisis suele ser más robusto según los objetivos planteados del análisis de este tipo de datos, se puede emplear análisis de regresión, el análisis de ruta, el análisis factorial, etc.


    Separador


    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.4 Reglas de negocio

    p.mb-0(data-aos="zoom-in-left") Desde el punto de vista de programación, el cual debe coincidir con el negocio, son las condiciones asociadas a las tareas que forman los procesos. Las reglas no son la normatividad de las empresas, se refiere más a los requisitos o necesidades y cómo los sistemas de información satisfacen estos requisitos bajo las reglas y condiciones técnicas necesarias.



    .tarjeta--container.row.mb-0.bg31(data-aos="zoom-in-left")
      .col-md.tarjeta-container-siete.p-5
        .row.mb-0
          h4.mb-3 Las reglas de negocio se basan en las políticas de las organizaciones, en metodologías ágiles como el Scrum, las reglas de negocio se plasman en historias de usuarios.
          p.mb-4 #[b Por ejemplo: ]
          ul.lista-ul--color.mx-4
            li.mb-0.pb-0 
              i.fa.fa-check
              p  #[b Como] cliente.
            li.mb-0.pb-0 
              i.fa.fa-check
              p  #[b Quiero] pagar los artículos del carrito de compras.
            li.mb-0.pb-0 
              i.fa.fa-check
              p  #[b Para] recibirlos en casa.
          p.mb-4 En medio de este requerimiento, es posible que existan políticas de la organización que restrinjan la acción solicitada, pues podrían existir otras reglas que indiquen (figura 5)
            ul.lista-ul--color.mx-4.mt-3
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b Como ] propietario de la tienda online.
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b Quiero ] rechazar compras fuera de Colombia con pedidos inferiores a $300.000 pesos.
              li.mb-0.pb-0 
                i.fa.fa-check
                p  #[b Para ] evitar gastos de envío que hacen la compra no rentable.
        .row.justify-content-around.align-items-center.mb-3
          .col-sm-12.col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5.
              span
                |   Características de una muestra adecuada.
            figure
              img(src='@/assets/curso/temas/Tema5/5.svg', alt='La ilustración presenta una política de segmentación de clientes basada en sus compras anuales, clasificándolos en tres categorías: "Golden" para aquellos cuyas compras superan los $2,000,000 al año, "Premium" para compras superiores a $1,000,000, y "Plata" para compras que exceden los $500,000. ')
        p.mb-0 A estas reglas de negocio, a menudo se les denomina también Lógica de negocio.


    Separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.5 Tipo de restricciones

    p.mb-4(data-aos="zoom-in-left") Las restricciones limitan las acciones que el sistema o los usuarios pueden realizar. Las reglas por lo general son restrictivas, es decir, se debe o no se debe hacer algo a no ser que cumpla condiciones como roles de usuarios, valores previos, etc. Las restricciones, no deben convertirse en inconvenientes al usuario o sistema y los mensajes que se generan deben ser muy claros.
    p(data-aos="zoom-in-left") #[b Existen diferentes tipos, que se detallan a continuación: ]

    .tarjeta--container.row.mb-0(data-aos="zoom-in-left")
      .col-md.tarjeta.bg22.p-5.text-black
        h4.text-center.mb-5 Validación de datos
        .row.justify-content-around.align-items-center.mb-4
          .col-8
            figure
              img.m-auto(src='@/assets/curso/temas/Tema5/6.svg')
        p.text-center Son aquellas que vienen como norma del tipo y formato de datos, esto se hace para garantizar la calidad y completitud de la información.
      .col-md.tarjeta.bg5.p-5.text-black
        h4.text-center.mb-5  Políticas de la organización
        .row.justify-content-around.align-items-center.mb-4
          .col-8
            figure
              img.w-75.m-auto(src='@/assets/curso/temas/Tema5/7.svg')
        p.text-center Son aquellas que surgen a partir de las reglas de negocio y su naturaleza surge a partir del funcionamiento de los procesos. Por lo general se programan en procedimientos o algoritmos programados que evalúan las condiciones y restricciones previas.
      .col-md.tarjeta.bg22.p-5.text-black
        h4.text-center.mb-5  Normatividad regulatoria
        .row.justify-content-around.align-items-center.mb-4
          .col-8
            figure
              img.w-75.m-auto(src='@/assets/curso/temas/Tema5/104.svg')
        p.text-center Muchas condiciones provienen de regulaciones del gobierno, según el sector del negocio y las regulaciones que por ley existen. Un ejemplo podrían ser los sistemas de formación y certificación de los centros de entrenamiento para certificar trabajo seguro en alturas a trabajadores, entre otras restricciones un instructor no podrá tener más de 35 alumnos por cada grupo.

    

    Separador

    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.6 Programación transaccional

    p.mb-5(data-aos="zoom-in-left") Su característica principal en las organizaciones, son las aplicaciones que emplean bases de datos, estas pueden ser #[i SQL o NoSQL], pero indistintamente, son datos que se asocian y presentan dependencia entre sí.

    .row.mb-0(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.justify-content-center.align-items-center.m-auto
        .container-card
          .first-card 
            p.w-75-cus Los datos que surgen de estos sistemas son fuentes para los procesos analíticos, los cuales toman varios programas transaccionales.
          .second-card.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema5/8.png')

    Separador

    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.7 Programación de estructuras no lineales, desnormalización, series y #[i dataframes]

    p(data-aos="zoom-in-left") En una estructura lineal, cada elemento sólo puede ir enlazado al siguiente o al anterior. A las estructuras de datos no lineales se les llama también estructuras de datos multienlazadas y tiene las siguientes características:


    .row.mb-0.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema5/16.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .text-black.p-4
              h4.text-center.mt-4 Enlazado
              p.he-6-cus Cada elemento puede estar enlazado a cualquier otro componente.
      .col-sm-12.col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema5/9.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-3
            .text-black.p-4
              h4.text-center.mt-4 Sucesores
              p.he-6-cus Se trata de estructuras de datos en las que cada elemento puede tener varios sucesores y/o varios predecesores.

      .col-sm-12.col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema5/10.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido-4
            .text-black.p-4
              h4.text-center.mt-4 Estructura
              p.he-6-cus Su aplicación se hace en estructuras de árbol o grafos.
      


    Separador

    #t_5_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.8 Álgebra relacional

    .row.mb-0(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        p.mb-3.mt-2-cus Es el área del álgebra que usa métodos para crear nuevas relaciones a partir de unas ya existentes. Todas las operaciones sobre tablas relacionales a través de un lenguaje de manipulación de datos están bajo este esquema.
        p.mb-3 Emplea operadores y otros elementos del álgebra, existen entre otros operadores de proyección, selección, unión, diferencias intersecciones, divisiones, etc.
        p #[b Este tipo de operaciones son muy usadas en los procesos ETL. ]
      .col-sm-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema5/11.png')

    p.mb-3(data-aos="zoom-in-left") #[b Por eso es importante tener presente las siguientes recomendaciones entregadas en el video Manipular los datos:   ]

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description






    Separador

    #t_5_9.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.9 #[i SQL]

    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema5/12.png')
      .col-sm-12.col-lg-7
        p.mb-3.mt-2-cus #[b #[i SQL ](por sus siglas en inglés #[i Structured Query Language; ]] en español lenguaje de consulta estructurada) es un lenguaje que da acceso a un sistema de gestión de bases de datos relacionales que permite especificar diversos tipos de operaciones en ellos.
        p.mb-3 Es un lenguaje estándar consolidado por el Instituto Americano de Normas (ANSI) y por la Organización de Estándares Internacional (ISO). Está compuesto por comandos, cláusulas, operadores y funciones de agregado
      

 
    
    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.justify-content-center.align-items-center.m-auto
        .container-card
          .first-card 
            p.w-75-cus Es el lenguaje “natural” para el manejo y consulta de datos, todos los sistemas relacionales por lo general, lo emplean para la manipulación de datos complementando con otros lenguajes.
          .second-card.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema5/13.png')


    p.mb-3(data-aos="zoom-in-left") Existen varios motores de bases de datos con núcleo #[i SQL], entre los más conocidos #[i MySQL] de uso libre y otra distribución licenciada por #[i Oracle]. #[b En el siguiente video se presenta las ventajas de #[i Mysql:] ]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    p.mb-0(data-aos="zoom-in-left") #[i SQL server] pertenece a la casa de Microsoft, con sus herramientas integradas que dan mucho poder para el almacenamiento y proceso de datos. 
    p.mb-4(data-aos="zoom-in-left") #[b En el siguiente video se presentan los comandos de #[i SQL] para la creación de una base de datos y para la realización de consultas en esta: ]

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    Separador

    #t_5_10.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.10 #[i No SQL]

    p.mb-3(data-aos="zoom-in-left") Son un tipo de bases de datos cuyo almacenamiento de datos no se realiza en tablas propiamente dicha. Presentan una estructura particular tipo <i>SON o BSON</i>, que consiste en un arreglo de datos por jerarquías, tiene la ventaja sobre las bases de datos relacionales que su desempeño de búsquedas y cargue de datos son más veloces, además, se podría definir que son más flexibles es sus datos y cambios de estructuras que se puedan presentar. Para el manejo de <i>Big data</i> y grandes cantidades de datos son muy empleadas
    p.mb-4(data-aos="zoom-in-left") #[b En siguiente video se explican las ventajas de las bases de datos no relacionales o #[i No SQL:] ]

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    Separador

    #t_5_11.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.11 <i>JSON, BSON y XML</i>

    p.mb-0(data-aos="zoom-in-left") Uno de los desafíos técnicos es la integración entre sistemas de información y la manera en cómo enviar y recibir datos de otras aplicaciones.
    p.mb-5(data-aos="zoom-in-left") Para ello se desarrollaron diversas maneras, entre las más comunes son:

    TabsC.color-acento-contenido(data-aos="zoom-in-left")
      .py-3.py-md-4(titulo="<i>JSON</i>")
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-7.mb-4.mb-md-0.justify-content-center.align-items-center
            p Este estándar se comunica entre sistemas con estructuras y objetos de información básica en código basado en navegador web.
            p.mt-3.fw-bold Ejemplo de estructura <i>JSON</i>:
            p.mt-3.p-4.bg26 De esta manera, se almacenan los datos en Bases de datos #[i NoSQL] y se intercambian datos entre sistemas de información.
          .col-sm-12.col-lg-3
            figure
              img(src='@/assets/curso/temas/Tema5/14.png')
      
      .py-3.py-md-4(titulo="<i>BSON</i>")
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-10.mb-4
            p.mb-4 Este estándar se comunica entre sistemas con estructuras y objetos de información básica en código basado en navegador web. Ejemplo de estructura <i>JSON</i>:


      .py-3.py-md-4(titulo="<i>XML</i>")
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-10.mb-4.mb-md-0
            p.mb-4 Son archivos propiamente dicho, está basado en el lenguaje <i>XML</i>, usado para guardar e intercambiar datos estructurados a través de sistemas web.

    .row.justify-content-around.align-items-center.mt-5
      .col-sm-12.col-lg-8
        .cajon.color-acento-contenido-3.py-4.px-5.mb-0
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-center Estos lenguajes y sus archivos derivados mejoran el uso de datos y la forma en que se estructura en Internet, mientras que el <i>HTML</i> se encarga del aspecto visual y estilo de la información.
    

    Separador

    #t_5_12.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.12 <i>DDL, DML, DC</i>

    p.mb-5(data-aos="zoom-in-left") Las bases de datos emplean diferentes tipos de lenguajes y también de allí se derivan archivos necesarios para que los motores de bases de datos funcionen y conserven la información física y lógicamente. Estas son:


    .row(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="acordion__activo_bg6")
          .row(titulo="<i>Data Definition Language</i> (<i>DDL</i>)")
            .col-md-12.mb-4.mb-md-0
              p.mx-5 Lenguaje de definición de datos: es el encargado de definir estructuras de datos proporcionado por los sistemas gestores de bases de datos permitiendo a los programadores de las bases de datos enfocar y definir estructuras, las más importantes son: #[i CREATE] (crear tablas o bases de datos), #[i ALTER] (cambiar o redefinir tablas o campos), #[i DROP] (Limpiar tablas, eliminar objetos, índices, etc.).
          .row(titulo="<i>Data Manipulation Language</i> (<i>DML</i>)")
            .col-md-12.mb-4.mb-md-0
              .mx-5 
                p Lenguaje de Manipulación de Datos: permite a los motores de datos instrucciones de #[i SQL], otorga a los usuarios introducir datos para luego ejecutar tareas de consultas o modificación de los datos en las tablas especificadas. Los elementos que se utilizan para manipular los datos son: 
                p.ml-1-cus - SELECT. Sentencia para realizar consultas sobre los datos.
                p.ml-1-cus - INSERT. Permite insertar valores en una tabla.
                p.ml-1-cus - UPDATE. Modificar los valores de uno o varios registros.
                p.ml-1-cus - DELETE. Eliminar registros de una tabla.
          .row(titulo="<i>Data Control Language</i> (<i>DCL</i>)")
            .col-md-12.mb-4.mb-md-0
              .mx-5 
                p Lenguaje de Control de Datos: permiten administrar base de datos, controlar el acceso a los objetos, es decir, podemos otorgar o denegar permisos a uno o más roles para realizar determinadas tareas. Los comandos para controlar los permisos son los siguientes: 
                p.ml-1-cus - GRANT. Permite asignar permisos. 
                p.ml-1-cus - REVOKE. Elimina los permisos asignados.
      .col-sm-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema5/15.png')


</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema5',
  components: { SlyderF },
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
