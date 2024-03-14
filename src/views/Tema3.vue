<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La inteligencia de negocios

    .bloque1(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.py-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p Cuando el ser humano empezó a diferenciarse de las demás especies, una de las características más importantes, entre otras, es la manera de comportarse socialmente, es decir, cuando las relaciones sociales y comportamentales, entre manadas empezaron a cuidarse, a comunicarse, etc.
            .col-lg-2.col-md-5.col-8.px-5
              img.mb-0(alt="" src="@/assets/curso/temas/Tema3/1.svg")






    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.br-tl-cus(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/2.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Los avances tecnológicos y nuevas posibilidades de la cuarta revolución industrial hacen que este fenómeno se acentúe aún más y las empresas tengan dentro de sus retos la adopción de tecnologías y nuevas maneras de darle valor a los negocios a partir de recursos que generados por sí mismo y otros disponibles de manera pública, todo lo cual puede traducirse en oportunidades y posibilidades gigantes que bien estructuradas podría significar las mejores decisiones y valor a la organización que adopta la tecnología y las nuevas tendencias comerciales.


    p.mb-5(data-aos="zoom-in-left") En forma simple, la inteligencia de negocios es una serie de técnicas, metodologías y herramientas que se integran para convertir los datos en información, luego en conocimiento para al final tomar las mejores decisiones.


    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Identificación de las preguntas básicas

    p.mb-5(data-aos="zoom-in-left") En ocasiones, los proyectos de BI se inician con la motivación de entrar en una ola digital, o estar en la moda de la tecnología, incluso sin tener requisitos o necesidades visibles o al menos conscientes. En caso de que las empresas, especialmente las pymes, no tengan claridad sobre el uso del BI en el negocio, es necesario concienciar a los directivos de que muchos problemas de la organización se deben a la falta de datos instantáneos, actualizados y que reflejan una realidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-8.p-4.bg20.d-flex.justify-content-center.align-items-center
        p Una de las condiciones iniciales más importantes son las preguntas, es decir, qué se necesita saber del negocio, qué decisiones se planea tomar y qué insumos se requieren para la toma de estas decisiones.
        img.px-4.w-75(src='@/assets/curso/temas/Tema3/3.svg', alt='Texto que describa la imagen')


    .row.justify-content-around.align-items-center(data-aos="zoom-in-left")

      .col-sm-12.col-lg-5
        figure
          img(src='@/assets/curso/temas/Tema3/4.png', alt='Texto que describa la imagen')
      .col-sm-12.col-lg-6.mb-4
        p.mb-4.mt-2-cus Otro concepto errado frecuente, en especial en las pymes, es que el indicador más importante y en algunos casos el único, es el dinero que ingresa a la empresa, si bien en los negocios se trata de ganar, existen muchas variables e indicadores adicionales a los ingresos que permiten a las organizaciones avanzar mejor, aumentar su valor a partir de técnicas y conocimiento, y tras todos estos indicadores claves de negocio, deberían reflejarse en el cumplimiento de metas de ingresos y crecimiento del negocio en el tiempo.
        p Los indicadores y la aplicabilidad de la analítica de datos en las organizaciones deben manejarse bajo necesidades reales, preguntas fundamentales y la identificación de qué respuestas requiere el negocio para optimizar los tiempos y asertividad de la toma de decisiones.
      
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Metodología de integración
    
    p.mb-4(data-aos="zoom-in-left") La inteligencia de negocios en sí es una integración de toda la información de la organización, o al menos la más relevante. Tomar diversas fuentes (variabilidad), con información acumulada (volumen) y que además se procesen de manera óptima y rápida (velocidad).

    .tarjeta--container.row.mb-5(data-aos="zoom-in-left")
      .col-md.tarjeta.p-5.text-black
        .row.justify-content-center.mb-4
          .col-6
              img(src='@/assets/curso/temas/Tema3/5.png', alt='Texto que describa la imagen')
        p.bg21.pt-3.pb-3.px-3 Si bien en los libros de consulta y de manera estándar, estas tres V pertenecen al Big Data de manera estricta, también es aplicable a la inteligencia de negocios.
      .col-md.bg24.p-5.text-black
        .row.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/Tema3/6.png', alt='Texto que describa la imagen')
        p.mb-3 Lo primero que se debe evaluar es la integración entre las estrategias de la organización con la implementación de la inteligencia de negocio, como referencia estratégica, cada vez es más importante como apoyo a la gestión y toma de decisiones.
        p La analítica proporciona a las empresas capacidades, tales como ayudar a coordinar proyectos, y horarios, optimizar la asignación de personal, recursos, proporcionar la hoja de ruta para alinear con la estrategia corporativa. [#b El BI cambia datos internos y externos en un formato apropiado proporcionando conocimiento que apoya la toma de decisiones de los procesos o del negocio en general. ]

    p.mb-5(data-aos="zoom-in-left") [#b En la siguiente ilustración se presentan los aspectos a considerar sobre como BI integra todas o varias áreas del negocio: ]
    .row
      .col-sm-12.col-lg-10.m-auto 
        img(data-aos="zoom-in-left")(src='@/assets/curso/temas/Tema3/7.svg', alt='Texto que describa la imagen')


    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Herramientas de administración

    p.mb-4(data-aos="zoom-in-left") Las herramientas disponibles para la implementación de la inteligencia de negocio en las organizaciones, son amplias y cada vez nuevas marcas y técnicas se disputan el mercado.
    .tarjeta--container.mb-5
      .col-md.bg25.p-5.text-black
        h4 Elegir la herramienta adecuada es una variable crítica de éxito, existen múltiples aspectos qué evaluar al momento de decidirse por cuál herramienta emplear. Entre otras razones, se debe hacer análisis de:
          .row
            .col-9.mt-5
              ul.lista-ul--color.mx-4
                li.mb-0.pb-0 
                  i.fa.fa-check
                  p Conexión a todas las fuentes de datos que la organización tiene.

                li.mb-0.pb-0 
                  i.fa.fa-check
                  p  Capacidad de almacenamiento y proceso según el tamaño de los datos y la proyección.

                li.mb-0.pb-0 
                  i.fa.fa-check
                  p  Relación costo-beneficio.

                li.mb-0.pb-0 
                  i.fa.fa-check
                  p  Versatilidad: qué soporta diversas plataformas tanto como sistemas operativos como hardware.

                li.mb-0.pb-0 
                  i.fa.fa-check
                  p  Tendencias y nuevas herramientas empleadas.
            .col-3.mt-5
              figure
                img(src='@/assets/curso/temas/Tema3/8.svg', alt='Texto que describa la imagen')

    h5.mb-5(data-aos="zoom-in-left") A continuación, algunas alternativas disponibles para que las organizaciones puedan emplear con eficiencia proyectos de estas características:

    .row(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="acordion__activo_bg6")
          .row(titulo="SAS INSTITUT")
            .col-md-12.mb-4
              p.mx-5  Empresa multinacional con sede en Carolina del Norte, Estados Unidos. Es uno de los principales fabricantes de software de apoyo empresarial. Fundación 1976.
              p.mx-5 [#b https://www.sas.com/es_co/home.html ]
          .row(titulo="MICROSOFT")
            .col-md-12.mb-4
              p.mx-5  Con sus herramientas de infraestructura en la nube representada por Azure y la introducción de visualizaciones de Power BI dentro de Power Apps y Dynamics 365 aumenta las capacidades analíticas integradas de Microsoft Power Platform.
              p.mx-5 [#b https://www.microsoft.com/es-mx/microsoft-cloud ]
          .row(titulo="ORACLE")
            .col-md-12.mb-4
              p.mx-5  Oracle Analytics Cloud se ha convertido en la herramienta analítica y de informes imprescindible para las pequeñas empresas, más allá de las grandes empresas a las que suele servir.
              p.mx-5 [#b https://www.oracle.com/lad/business-analytics/analytics-services ]
          .row(titulo="INFORMÁTICA")
            .col-md-12.mb-4
              p.mx-5  Integrada con Azure, cuenta con su herramienta Cloud Data Marketplace, diseñada para aumentar de forma intuitiva el intercambio de datos, mejorar la productividad y permitir que las organizaciones tomen decisiones más informadas.
              p.mx-5 [#b https://www.informatica.com/products/cloud-data-integration.html ]
          .row(titulo="QLIK")
            .col-md-12.mb-4
              p.mx-5  Empresa especializada en analítica y procesos ETL, Herramientas especializadas de desde punto inicial al punto final.
              p.mx-5 [#b https://www.qlik.com/es-es/products ]
  
      .col-sm-12.col-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema3/9.png', alt='Texto que describa la imagen')
      
    p.mb-5(data-aos="zoom-in-left") Existen otras más, soportadas con grandes marcas como IBM, Google, Teradata, SAP y otras que si bien no son tan mencionadas en el mercado, son igual de poderosas y confiables.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.4 Técnicas de solución de problemas (modelación de datos)

    p.mb-3(data-aos="zoom-in-left") Si bien existen varias metodologías, todas coinciden en una manera genérica para la solución de un proyecto analítico propuesto por Davenport, con algunas variables
    p.mb-3(data-aos="zoom-in-left") [#b Esta metodología tiene tres grandes etapas: ]

    .row.align-items-center.justify-content-start(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w-60(src='@/assets/curso/temas/Tema3/10.svg', alt='Texto que describa la imagen')
          .tarjeta.bg26
            .p-4
              h5.mb-4 Definición del problema
              p Para reconocer el problema, se debe partir de las necesidades surgidas a partir de la experiencia para tomar una decisión o acción; es decir, qué necesidades o inconvenientes se han tenido cuando la información, reportes o conocimiento de algún dato importante no está disponible en el momento y exactitud para tomar decisiones o ejecutar acciones. Es importante gestionar las expectativas y documentar las necesidades o problemas puntuales.
              p [#b En esta fase, una clave es identificar objetivos que no se cumplen por la falta de un proyecto analítico. ]

    .row.align-items-center.justify-content-start(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w-60(src='@/assets/curso/temas/Tema3/11.svg', alt='Texto que describa la imagen')
          .tarjeta.bg26
            .p-4
              h5.mb-4 Resolviendo el problema
              p.md-3 Después de la primera etapa, donde se tiene claridad de los problemas, el paso siguiente es buscar solución. Por lo general está compuesta de cuatro etapas:
               ul.lista-ul--color.mx-2.mt-4
                li.mb-0.pb-0 
                  i.fa.fa-check
                  p Modelar y seleccionar variables que representan el problema y determinar las variables que forman parte de él.
                li.mb-0.pb-0 
                  i.fa.fa-check
                  p Recopilar datos para identificar dónde se consiguen datos para las variables del modelo.
                li.mb-0.pb-0 
                  i.fa.fa-check
                  p Análisis de datos. Determinar naturaleza, fuentes y gestión para el acceso técnico de la información.
                li.mb-0.pb-0 
                  i.fa.fa-check
                  p Desarrollar componentes técnicos y generación de reportes con información de valor y conocimiento del negocio.

        
    .row.align-items-center.justify-content-start(data-aos="zoom-in-left")
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w-60(src='@/assets/curso/temas/Tema3/12.svg', alt='Texto que describa la imagen')
          .tarjeta.bg26
            .p-4
              h5.mb-4 Comunicación y actuación en función de los datos
              p.md-3 Cuando se generan procesos de analítica, es tan importante, la comunicación y uso de los datos para el negocio como su desarrollo; el paso final de estos proyectos es comunicar y accionar los resultados, es necesario contar una historia a partir de los datos y a partir de ello generar conocimiento para actuar mejor.

  

    p(data-aos="zoom-in-left") La modelación de las soluciones BI, depende de las reglas de negocio y los requisitos o problemas a resolver. En los apartados siguientes se detallan las arquitecturas disponibles y el proceso del tratamiento de datos a partir de una mirada de análisis e inteligencia de negocio.                
        
    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.5 Metodologías de análisis (Kimball, Inmon)

    p(data-aos="zoom-in-left") En lo relacionado a la planeación y diseño de las bodegas de datos (DWH), se plantean dos arquitecturas:

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 300px;').bg-img-blue Modelo Kimball
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue


    .row.mb-5(data-aos="zoom-in-left")
      .col-md-12.bloque-2
        .bloque-texto-b.bloque-texto-b-izquierda.p-4.mb-4.color-der
          .bloque-texto-b__texto
            p.mb-3 La metodología para el diseño de DWH propuesta por Ralph Kimball se centra en copiar las bases de datos transaccionales en un modelo optimizado para consultas de analítica. Para integrar varias áreas o disciplinas del negocio se emplean data marts, que son bases de datos que surgen a partir del proceso de transformación del ETL por cada área o división del negocio.
            br
            br
            p [#b Kimball propone que estos Data Mart ] deben crearse primero para proporcionar capacidades analíticas; en pasos siguientes del flujo de datos se integran en una bodega de datos empresarial de manera integral. Una desventaja de este modelo es que al cambiar los Data Mart se podrían perder dimensiones en los reportes diseñados. Adicionalmente, se podrían presentar datos redundantes en varios Data Mart. No obstante, es el modelo más usado en las soluciones BI, no indicando esto que sea mejor (ver figura).
            
    .col-md-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 1.
        span
          |   Modelo Kimball
      figure
        img(src='@/assets/curso/temas/Tema3/14.png', alt='')

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 300px;').bg-img-blue Modelo Inmon
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue


    .row.mb-5(data-aos="zoom-in-left")
      .col-md-12.bloque-2
        .bloque-texto-b.bloque-texto-b-izquierda.p-4.mb-4.color-der
          .bloque-texto-b__texto
            p.mb-5 No es muy diferente a Kimball, los principios de transformación y carga a los DWH contienen los mismos elementos en su arquitectura, sin embargo, la metodología de Bill Inmon plantea que los data marts deben ir después del almacenamiento de DWH.
            br
            br
            p La metodología Inmon comienza por generar un arreglo de todos los datos corporativos en el DWH, para luego identificar y dividir áreas para la generación de los Data Mart. En este modelo se normalizan más los datos, conteniendo menos redundancia; es un poco más complejo de usar a nivel comercial o abierto, sin embargo, podría ser más administrado en el sentido que se crean los data marts y cada área del negocio podría usarlos creando sus propios cubos de datos o reportes (ver figura).
    .row(data-aos="zoom-in-left")
      .col-md-12.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span
            |  Modelo Inmon.
        figure
          img(src='@/assets/curso/temas/Tema3/16.png', alt='')

    Separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.6 Verificación de valores y escalas

    p.mb-4(data-aos="zoom-in-left") Los cuadros de mando o Dashboard, permiten hacer monitoreo de los procesos mostrando información importante a través de elementos gráficos de fácil entendimiento y con actualizaciones periódicas.
    p.mb-4(data-aos="zoom-in-left") Los valores que presentan deben ser indicadores de procesos, tareas o situaciones importantes para el negocio, su escalabilidad y visualización deben aparecer claramente. Para algunos valores podrían presentarse escalas (ejemplo, valores de ventas), para otros no (ejemplo, comparaciones porcentuales).
    p.mb-4(data-aos="zoom-in-left") [#b Entre los elementos más importantes de los cuadros de mando, su tipo de valor y escalas se pueden mencionar: ]

    .row.mb-5(data-aos="zoom-in-left")
      .col-md-8.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-content-cus(numero="1" titulo="Tablas") se conforma de matriz, presenta múltiples datos, puede ser estática o dinámica según las reglas del negocio y características de la información que representa. Presenta datos estructurados por dimensiones (tipo OLAP) en algunos casos, y su escalabilidad se limita al redondeo de cifras configurando la cantidad de decimales de los datos numéricos flotantes.
          
          p.text-content-cus(numero="2" titulo="Métricas") los valores surgen como resultado de una actividad específica y las medidas son el resultado de estas actividades en su conjunto o segmentación, siguiendo o no una serie de condiciones y operaciones. Por lo general las métricas se denominan KPI.
          
          p.text-content-cus(numero="3" titulo="Listas") comúnmente formadas por KPI. En caso de que el cuadro de mando solo esté formado por este tipo de elemento, se denomina Scorecard.
          
          p.text-content-cus(numero="4" titulo="Gráficos") el fin es mostrar datos con alto impacto visual, que sirva para obtener información acumulativa o calculada. Al igual que las tablas pueden tener múltiples dimensiones, pero se verán con mejor presentación y dimensión los datos. Se debe poner especial atención en el aspecto de la escalabilidad, pues hay datos que por su tamaño deben ser escalados para que se compare y se note las diferencias; sin embargo, ocasionalmente no es siempre recomendable, por ejemplo: un gráfico de barras si muestra la cantidad de dinero vendido, es factible escalar, para que el valor no empiece en 0 (cero), sino por ejemplo en 10 millones (según el tamaño de las cifras), pero si estas barras muestran porcentajes, es necesario que la gráfica siempre empiece desde el 0%, para que se note bien la dimensionalidad de los datos. <br> Este es el elemento más común y de mayor variabilidad, existen múltiples opciones de visualizadores gráficos en diferentes segmentos (barras, circulares, mayas, etc.).

          p.text-content-cus(numero="5" titulo="Mapas") este elemento permite mostrar información geolocalizada. Aplica a los datos de ubicación, de esta manera se dimensiona la ubicación de las cifras que se estén representando

          p.text-content-cus(numero="6" titulo="Alertas visuales") por lo general, al momento de desarrollar los cuadros de mando se pueden incluir a la programación de alertas automáticas con el fin de informar un acontecimiento crítico, ya sea por fechas u otro evento que suceda.

          p.text-content-cus(numero="7" titulo="Menús de navegación") estos elementos visuales, ya sean en texto o botones, facilitan al usuario navegar y realizar operaciones interactivas en los elementos del cuadro de mando.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/Tema3/17.png', alt='Texto que describa la imagen')

        .tarjeta.bg12.p-4.my-5      
          p.mb-0 Ejemplo de componentes de un cuadro de mando o Dashboard:


    Separador

    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.7 Procedimientos almacenados y funciones
    
    p.mb-5(data-aos="zoom-in-left") Desde los motores de bases de datos, se pueden aplicar funciones nativas a los datos, es decir, no todas las condiciones y reglas de negocio se programan en los procesos de programación, pues los motores de bases de datos pueden adaptar además de las consultas estándar SQL, script con lenguajes como: R, Phyton, etc.

    .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.br-tl-cus(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/18.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Desde el diseño de los datos y la analítica se pueden crear y usar una cantidad de funciones, amplias en cantidad y diversidad de usos, entre las más comunes, los expertos en datos aplican consultas de todo tipo empleando condiciones, filtros y contexto de datos; adicionalmente pueden crear medidas que calculen o cuenten elementos de datos, filas calculadas a partir de datos de otras filas o funciones.
          
    Separador

    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.8 Disparadores

    p.mb-5(data-aos="zoom-in-left") Llamados comúnmente Triggers, son sentencias o funciones que se ejecutan cuando se presentan ciertos eventos. Estos eventos pueden ser una condición en el tiempo, una actualización, inserción o borrado de una tabla en un dato específico.
    p.mb-5(data-aos="zoom-in-left") Los disparadores son elementos muy importantes a la hora de automatizar acciones en los datos. La tendencia en los sistemas de información es la automatización y dejar todo lo posible para que las máquinas funcionen de manera autónoma, de esta manera se tendrán acciones en los datos en el momento mismo de realizar una operación que sea el disparador de otras tareas (ver tabla).
    
    .row
      .col-sm-12.col-lg-10.mx-auto.mb-5(data-aos="zoom-in-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span
            |  Ejemplo de Triggers

        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in-left")
          table
            thead
              tr
                th.text-white.text-left-cus Disparador
                th.text-white.text-left-cus Acción
            tbody
              tr.bg27
                td Cuando en la tabla clientes se realiza un insert (cliente nuevo).
                td Enviar correo electrónico con plantilla de bienvenida y resumen de los datos registrados.
              tr.bg28
                td Todos los días cuando el sean las 3:00 A.M.
                td Ejecutar carga de la base de datos transaccional a los almacenamientos para el proceso ETL
        
    p(data-aos="zoom-in-left") En esta tabla se presentan ejemplos de disparadores, para una mejor comprensión.


    
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema3',
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
