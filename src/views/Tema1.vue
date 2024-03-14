<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tecnologías de información 

    .bloque1(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.py-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p Las bases de datos son esa colección de datos integrados bajo un contexto o dominio, que contienen datos estructurados que reflejan relaciones, restricciones, validaciones y semánticas que reflejan las condiciones de negocio. Esta colección usa la computación para su almacenamiento y procesamiento.
            .col-lg-2.col-md-5.col-8.px-5
              img.mb-0(alt="" src="@/assets/curso/temas/Tema1/1.svg")
    h5.mb-5(data-aos="zoom-in-left") Los sistemas de base de datos están conformados por los siguientes elementos básicos:

    .row.align-items-center.justify-content-center.mb-4.bg1.p-4(data-aos="zoom-in-left")
      .col-4.p-5
              img(src="@/assets/curso/temas/Tema1/2.png", alt="Texto que describa la imagen")
      .col-8
          LineaTiempoD.color-secundario-2
            p.text-content-cus(numero="1" titulo="Software") Conjunto de programas, rutinas y comandos que permiten ejecutar tareas, tales como procesamiento de datos, lectura de datos y junto con el sistema operativo, se podrá administrar el hardware. Para las bases de datos existen los gestores de datos, ya sea SQL o NoSQL y las aplicaciones que usan los datos.
                    
            p.text-content-cus(numero="2" titulo="Los datos") Son el objetivo principal, al ser información, se podría indicar que hace parte también del software. Su guardado lógico podría ser relacionales (SQL) y NO relacionales (NoSQL). De esto depende la manera en cómo funciona, cómo se procesa y su organización.
                    
            p.text-content-cus(numero="3" titulo="Personal") Son los usuarios que están involucrados en el manejo y aprovechamiento de los datos, si bien hay varios niveles de usuarios, se podría dividir en dos principalmente en: no informáticos (que requieren la información para ejecutar tareas) y los Informáticos (los responsables del diseño y mantenimiento del sistema de bases de datos).        
   
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Metodologías de diseño y normalización Principios de ACID
    
    p(data-aos="zoom-in-left") Antes de existir las bases de datos como se conocen hoy, las primeras gestiones en datos se basaban en procesar archivos, es decir, los registros se traducen en archivos que eran procesados por lotes gestionados por un sistema operativo. Incluso los datos andaban mezclados con los archivos de las aplicaciones, lo que suponía un gran inconveniente pues existía dependencia funcional de los archivos de las aplicaciones, con los archivos del sistema operativo y los datos a guardar. Ello significaba que, si un dato se dañaba, era posible también que se estropeara la aplicación y viceversa.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-8.p-4.bg20.d-flex
        p A mediados de la década de 1970, se propone arquitecturas de diversos niveles para separar las capas según su funcionalidad, así que los Sistemas de Gestión de Bases de Datos (DBMS Data Base Management System) tienen sus capas según el contexto y su funcionamiento es independiente de los sistemas de gestión, de relación de datos, de la conservación de los datos, la interfaz gráfica, etc.
      
        figure.mx-3
          img(src='@/assets/curso/temas/Tema1/3.png', alt='Texto que describa la imagen')

    p(data-aos="zoom-in-left") Todas las bases de datos deben tener unos atributos mínimos que garanticen que las transacciones se ejecuten de manera confiable. Entiéndase transacción como una unidad compuesta por varias tareas, cuyo resultado final debe exigir que se ejecuten todas o ninguna de ellas (Pulido Romero, Escobar Domínguez, & Núñez Pérez, 2019).

    .row(data-aos="zoom-in-left")
      .col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema1/4.png', alt='Texto que describa la imagen')
      .col-md-7
        p.mt-2-cus Un ejemplo frecuente es una App bancaria, la cual se usa para realizar compras, esta acción encarna una cantidad de tareas internas, de manera básica deberá restar de mi cuenta el valor del producto a pagar y a su vez se deberá sumar a la cuenta del vendedor; sería un gran problema si en la acción se debita de la cuenta del comprador y existe una falla del sistema que evita se sume al saldo del vendedor. Para que las transacciones sean confiables, en caso de presentarse fallas en medio de las tareas internas, los datos deberán quedar tal y como estaban antes de iniciar la transacción.
        p Por lo cual, las <b>Propiedades ACID</b> (acrónimo en inglés de cada una de las propiedades que deben tener las bases de datos) son:

    .row.mb-5.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-5.mb-5.he-5-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/5.svg' alt='AvatarTop')
          .tarjeta.bg18
            .text-black.p-4
              h2.text-center.small A (Atomicidad)
              p Las transacciones deben considerarse atómicas, es decir, se deben considerar como una sola. Esto previene que las actualizaciones de la base de datos se hagan de manera parcial o incompleta, esto supondría grandes dificultades, por lo que si no se completa la acción, la transacción completa se rechaza.

      .col-5.mb-5.he-5-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/6.svg' alt='AvatarTop')
          .tarjeta.bg18
            .text-black.p-4
              h2.text-center.small C (Consistencia)
              p Consiste en que una operación no dejará datos incoherentes o incompletos o con problemas que puedan dar resultados ilógicos o ambigüedades
    .row.mb-5.justify-content-center.align-items-center
      .col-5.mb-5.he-5-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/7.svg' alt='AvatarTop')
          .tarjeta.bg18
            .text-black.p-4
              h2.text-center.small I (Aislamiento)
              p Su funcionalidad radica en aislar los datos que hacen parte de la transacción pero que no están confirmados o aún no validados. Funcionan como una especie de datos temporales mientras se ejecuta toda la transacción. Los DBMS ofrecen varios niveles de aislamiento de transacciones según sus tipos

      .col-5.mb-5.he-5-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/8.svg' alt='AvatarTop')
          .tarjeta.bg18
            .text-black.p-4
              h2.text-center.small D (Durabilidad)
              p Es la propiedad para garantizar que una vez se complete la transacción, los datos se actualizan y sean permanentes y confiables.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Técnicas de almacenamiento de datos y consultas

    p(data-aos="zoom-in-left") En la actualidad, se presentan diferentes modelos para la organización y de datos; en esta perspectiva se tomarán las bases de datos desde dos puntos de vista, la arquitectura en relación a la estructura de los datos y el enfoque del diseño.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-8.p-4.bg20.d-flex.justify-content-center.align-items-center
        p Desde el enfoque de la arquitectura y estructura de datos, se refiere a las bases de datos que se pueden diferenciar entre SQL, quienes están basados en tablas relacionadas y NoSQL, cuyo arreglo no se establece por tablas propiamente hablando.
        img.px-3.w-75(src='@/assets/curso/temas/Tema1/9.svg', alt='Texto que describa la imagen')


    p(data-aos="zoom-in-left") Desde el enfoque de la base de datos, se refiere al uso al que se le va a dar a los datos que se almacenan, en este sentido se pueden mencionar principalmente dos:

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='background-color: rgb(8, 49, 66); border-radius: 25px; width: 410px; padding:7px;') Bases de datos relacionales (OLTP)
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg' style='max-width: 55px; left: -10%; position: relative;') 

    p.mb-4(data-aos="zoom-in-left") Se componen de diversas tablas que se asocian entre ellas, según las condiciones del negocio, en este sentido se determina qué entidad, mediante la definición de las cosas y actores que intervienen en el sistema, ejemplo: empleado, cliente, sede, producto, categorías, etc. Las entidades son las tablas, y cada entidad tiene atributos tales como nombre, edad, fecha de nacimiento, nombre de producto, presentación, precio, etc. Los atributos serán entonces los campos que tendrán las tablas.
    p.mb-5(data-aos="zoom-in-left") Cada entidad se relaciona con otra tabla a partir de un atributo o campo en común. Este tipo de bases de datos se emplea para sistemas transaccionales o desarrollo de software donde son aplicaciones o desarrollos que dan solución a un proceso específico del negocio, como sistema de facturación, sistema contable, sistemas de inventarios y compras, etc. Se denomina, OLTP a lo que en español se nombra como Procesamiento de Transacciones En Línea.
    .row
      .col-sm-12.col-md-8.m-auto 
        .row.bg20.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
          .col-2.p-4.d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/Tema1/26.svg', alt='Texto que describa la imagen')
          .col-10.p-4.d-flex.justify-content-center.align-items-center 
            p Uno de los retos más importantes para el gestor y dinamizador de transformación digital en las organizaciones, es la identificación de estos sistemas OLTP, y a partir de su evaluación y preguntas del negocio determinar qué datos se requieren para iniciar su proceso hacia un sistema enfocado a la analítica.
   
    h5.mb-5(data-aos="zoom-in-left") En el siguiente video se presenta un ejemplo de creación de un modelo entidad relación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description



    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='background-color: rgb(8, 49, 66); border-radius: 25px; width: 430px; padding:7px;') Bases de datos Dimensionales  (OLAP)
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg' style='max-width: 55px; left: -10%; position: relative;') 


    
    p.mb-5(data-aos="zoom-in-left") Son los diseños de datos, que están enfocados a los reportes y el conocimiento que está inmerso en los datos, este diseño permite mejorar el desempeño a los motores de bases de datos para el almacenamiento de grandes cantidades de datos. Se usan principalmente para la consolidación de bodegas de datos (Data Warehouse - DWH), que luego serán insumo para crear aplicaciones OLAP (Procesamiento Analítico en Línea) o cubos de datos.
    p.mb-5(data-aos="zoom-in-left") Los cubos de datos son tablas o arreglos de datos que se componen de múltiples dimensiones, están basados en hechos, dimensiones y métricas, estos conceptos se definen a continuación:

    .tarjeta.bg16.p-4.mb-5(data-aos="zoom-in-left")
      SlyderA
        .row.mx-5.px-4.mt-4
          .col-md-7
            h5 Tablas de hechos (Fact)
            p Estas representan eventos que suceden en determinado contexto-tiempo, se caracterizan por permitir analizar los datos con el máximo detalle. Son tablas que no tienen medida y suelen ser las tablas más robustas con miles o millones de registros, además de ser las que más se actualizan. Por esta razón, cuando las transacciones en los sistemas OLTP son de manera masiva, se debe aplicar ingeniería de optimización de hechos, ya sea traer datos por periodo, tablas agregadas, particionadas, etc.
        
          .col-md-4
            figure
              img.w-75(src='@/assets/curso/temas/Tema1/12.svg', alt='Texto que describa la imagen')

        .row.mx-5.px-4.mt-4
          .col-md-7
            h5 Métricas
            p Estas medidas pueden ser conteos, por ejemplo, la participación de una persona en un evento, también se usa en las operaciones aritméticas para sumar totales, descontar impuestos, sacar medias o promedios, etc., se utilizan para determinar contexto, es decir qué tipo de filtros aplicar o no. Suelen ser la parte más compleja, pues además de ser necesario tener el contexto de los datos y tener la modelación de lo que se desea, se debe tener manejo de lenguajes de consulta (SQL, Phyton, R, Dax, etc.).
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema1/13.png', alt='Texto que describa la imagen')

        .row.mx-5.px-4.mt-4
          .col-md-7
            h5 Dimensiones
            p Igual que los hechos, son tablas; sin embargo, no suelen ser tan dinámicas como los hechos, pues las dimensiones recogen los puntos de análisis de un hecho. Por ejemplo, una venta se puede analizar respecto al día de venta, producto, cliente, vendedor, entre otros. Cada uno de estos ejemplos podrían categorizarse como dimensiones, por ejemplo: dimensión tiempo, dimensión productos, dimensión cliente, etc.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema1/14.png', alt='Texto que describa la imagen')




    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3  Estándares técnicos

    p.mb-5(data-aos="zoom-in-left") Tanto para el desarrollo de software como para el diseño de bases de datos, se sugieren unos estándares o convenciones que, si bien no es una norma, se recomienda seguir estas buenas prácticas, en especial porque los proyectos no deben depender de personas, lo que significa que otro profesional que llegue, pueda sentirse familiarizado con los estándares y documentación.

    .bloque-texto-f.bg16.p-5.mb-5(data-aos="zoom-in-left")
      .bloque-texto-f__comillas
      h4.mb-5 Algunos ejemplos de estas convenciones para bases de datos son:

      ul.lista-ul.mx-4
          li.mb-0.pb-0 
            i.fa.fa-check
            p  Los nombres de las bases de datos deben contener el nombre de la empresa seguido del nombre de la aplicación.   
          li.mb-0.pb-0.ml-4-custom 
            i.fas.fa-circle.icon-li-ul
            p.fw-bold Company_nombreaplicacion 

          li.mb-0.pb-0 
            i.fa.fa-check
            p Las tablas se deben nombrar en plural, y debe estar asociado a los datos que se almacenarán   
         
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p.fw-bold   facturas, productos, detalle_facturas 

         
          li.mb-0.pb-0 
            i.fa.fa-check
            p  Por normalización, todas las tablas deben tener una llave primaria la cual debe ser id.   
         
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p.fw-bold    facturas -> facturas_id. productos -> productos_id . usuario -> usuario_id
          li.mb-0.pb-0.mx-3  
            p De esta manera, el campo que se usa como vínculo para la relación foránea con una tabla, debe ser el nombre de dicha tabla en singular seguido del sufijo _id.

         
          li.mb-0.pb-0 
            i.fa.fa-check
            p  Los campos de la tabla deben estar en singular y deben describir los datos almacenados. 
         
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p.fw-bold   usuarios (nombre, email, clave, fecha_nacimiento…)

         
          li.mb-0.pb-0 
            i.fa.fa-check
            p  Los campos con funciones trigger (disparadores) deben estar formadas por el prefijo tgr_ seguida del nombre de la tabla y el nombre del trigger.
         
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p.fw-bold   tgr_productos_actualizar_productos

    P(data-aos="zoom-in-left") Opcionalmente, los nombres pueden estar en inglés, pues la globalización y los trabajos remotos son una realidad y el inglés es el estándar mundial para la programación y desarrollo de bases de datos y aplicaciones.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4  Ordenamiento de datos, indexación y recuperación

    p(data-aos="zoom-in-left") La información se almacena físicamente en tablas y estas a su vez en archivos de datos que, dependiendo del diseño y motor de bases de datos, pueden influir en el desempeño y velocidad de la mismas.


    .row(data-aos="zoom-in-left")
      .col-sm-12.col-md-5
        figure
          img(src='@/assets/curso/temas/Tema1/15.png', alt='Texto que describa la imagen')
      .col-sm-12.col-md-7.mb-4
        p.mt-2-cus Por eso es importante comprender el concepto de <b>“INDEXACIÓN”</b>. Al imagina tomar un libro, del cual se quiere leer un tema específico, ¿cuánto se tardaría buscarlo página por página?, esto sería tedioso e ineficiente. Además se demoraría mucho tiempo, y más aún si el tema está en las últimas páginas. Lo más fácil y obvio es ir al índice, donde se relacionan los temas y se indica el número de hoja, así se llegará más rápido. El principio de indexación de bases de datos parte, más o menos, del mismo principio del índice que se acaba de ilustrar y los administradores de bases de datos pueden gestionar estos índices en las tablas.
      

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-8.p-4.bg20.d-flex.justify-content-center.align-items-center
        p Un índice es un puntero o marca a una fila de una determinada tabla, es una referencia que relaciona el valor que se encuentra en una tabla con el valor determinado en el puntero. Los punteros se emplean para realizar búsquedas; en otras palabras, se pueden elegir qué columnas se hacen merecedoras de que sean buscadas para incluirles el puntero de indexación.
        img.px-4.w-75(src='@/assets/curso/temas/Tema1/16.png', alt='Texto que describa la imagen')

      
    p.mb-4(data-aos="zoom-in-left") Esta técnica ayuda a recuperar o encontrar rápidamente los registros que se tengan de un determinado valor en alguna de las columnas. Por ejemplo, en una tabla de cliente, uno de los valores a buscar sería cédula y nombre, por lo que se le debería aplicar índices a estos campos; sino se aplican índices el valor de la cédula, por ejemplo, se le buscaría en toda la tabla, mientas si se usan los punteros se busca el registro en la columna determinada encontrando más rápidamente el valor buscado.
    h5.mb-5(data-aos="zoom-in-left") Sin embargo, una tabla con muchos índices podría ser contraproducente por el tiempo de procesamiento, y además es importante usar el tipo de índice adecuado, entre los cuales se encuentran:


    .bg16.p-5.mb-5(data-aos="zoom-in-left")
        ul.lista-ul.mx-4
          li.mb-0.pb-0 
            i.fa.fa-check
            p <b>Llave primaria (Primary key): </b> Company_nombreaplicacion 
          li.mb-0.pb-0 
            i.fa.fa-check
            p <b>Campos (UNIQUE): </b> aquellas columnas que se configuran como únicas, por lo general los motores de bases de datos les asignan también índice.
          li.mb-0.pb-0 
            i.fa.fa-check
            p <b>Texto completo (Full Text): </b> hay índices que se asignan a textos completos, son usados si se tiene bases de datos en los que su búsqueda es por temáticas o en los que el usuario tiene idea de qué buscar.
          li.mb-0.pb-0 
            i.fa.fa-check
            p <b>Ordinarios: </b> son aquellos que se puedan asignar manualmente según los criterios del diseñador de la base de datos. .   
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p Para crear índice ordinario através de SQL se emplean estos comando:
          li.mb-0.pb-0.ml-6-custom  
            i.far.fa-circle.icon-li-ul
            p.color-blue CREATE INDEX 
              span.color-black nom_indice ON 
              span.color-green table 
              span.color-black (nom_campo);
          li.mb-0.pb-0.ml-6-custom  
            i.far.fa-circle.icon-li-ul
            p.color-blue CREATE INDEX 
              span.color-black idx_apellido ON 
              span.color-green usuarios 
              span.color-black (apellidos);
          li.mb-0.pb-0 
            i.fa.fa-check
            p <b>Compuestos:</b> Aquellos índices que referencian a dos o más campos.
          li.mb-0.pb-0.ml-4-custom  
            i.fas.fa-circle.icon-li-ul
            p Para crear índice compuesto a través de SQL se emplea estos comandos.
          li.mb-0.pb-0.ml-6-custom  
            i.far.fa-circle.icon-li-ul
            p.color-blue CREATE INDEX 
              span.color-black idx_nombresCompletos ON 
              span.color-green usuarios 
              span.color-black (nombres,apellidos);
      

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-9.p-4.bg20.d-flex.justify-content-center.align-items-center
        img.px-4.w-75(src='@/assets/curso/temas/Tema1/17.png', alt='Texto que describa la imagen')
        p <b>El comando SQL “EXPLAIN”</b>, es muy usado, pues permite adelantarse a la consulta, listando las tablas en el orden que serían leídas. Es decir, muestra cómo se realizará la consulta y permite visualizar la manera en realizar la consulta, esto permite a los diseñadores de bases de datos realizar optimizaciones de ser necesario.
        
    h5.mb-5(data-aos="zoom-in-left") Si se desea saber la manera en cómo el motor de base de datos recupera y obtiene los datos que muestra, se puede realizar el siguiente ejercicio:


    .tarjeta.bg16.p-4.mb-5(data-aos="zoom-in-left")
      SlyderA
        .row.mx-5.px-4.mt-4.justify-content-center.align-items-center.mb-5
          .col-md-6.bg-white-r.p-3
            h5 Con la sentencia: 
            .mt-2.color-blue.ml-4-custom SELECT 
              span.color-black * 
              span.color-blue FROM 
              span.color-black productos 
            h5.mt-2 Muestra todos los campos y datos de la tabla productos.
        
          .col-md-4 
            figure
              img(src='@/assets/curso/temas/Tema1/19.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            h5 Además, se podría aplicar una condición; por ejemplo, que muestre los vehículos que valgan más de 300.000:
            .bg-white-r.p-3.mt-5
              h5 Con la sentencia: 
              .mt-2.color-blue.ml-4-custom SELECT 
                span.color-black * 
                span.color-blue FROM 
                span.color-black producto 
                span.color-blue WHERE 
                span.color-black precio 
                span.color-black > 
                span.color-orange  <b> 300000</b>
              h5.mt-2 Muestra todos los campos que cumplen con la condición.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema1/21.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            h5 A la consulta anterior, al adicionarle EXPLAIN al inicio, se dará un reporte de cómo se realizará la consulta:
            .bg-white-r.p-3.mt-5
              h5.color-blue Ejecución del comando Explain: 
              h5.mt-5 Muestra que se usa un select sencillo, que no tiene particiones de tabla, la búsqueda se realizó entre 10 campos, y que usa el extratipo where.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema1/23.png', alt='Texto que describa la imagen')

        
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            h5 Además de consultas y condiciones, los datos pueden ordenarse a través del comando SQL order by, su aplicación es muy sencilla, a la consulta anterior se le puede dar un orden, en este caso se podría tomar como elemento de orden el mismo precio. Adicional se puede definir si es ascendente ASC o descendente DESC.
            .bg-white-r.p-3.mt-5
              h5 Con la sentencia: 
              .mt-2.color-blue.ml-4-custom.fw-bold SELECT 
                span.color-black * 
                span.color-blue FROM 
                span.color-black producto 
                span.color-blue WHERE 
                span.color-black precio 
                span.color-black > 
                span.color-orange  <b> 300000</b>
              .mt-2.color-blue.ml-4-custom.fw-bold order by 
                span.color-black precio 
                span.color-blue desc 
              h5.mt-3 Muestra que se ordenan los datos de manera descendente.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema1/25.png', alt='Texto que describa la imagen')

    p(data-aos="zoom-in-left") Para la manipulación y consulta de datos, es primordial conocer el lenguaje estándar de consulta de las bases de datos relacionales, se invita para que se amplíe el conocimiento sobre este tema visualizando el siguiente video:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description
       

</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    indicadorTarjetaFlip: true,
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

<style lang="sass">
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
