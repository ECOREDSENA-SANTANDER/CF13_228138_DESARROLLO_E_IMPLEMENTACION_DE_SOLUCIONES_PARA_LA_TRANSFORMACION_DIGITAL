<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Preparación de datos

    .bloque1(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.py-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p Cuando el ser humano empezó a diferenciarse de las demás especies, una de las características más importantes, entre otras, es la manera de comportarse socialmente, es decir, cuando las relaciones sociales y comportamentales, entre manadas empezaron a cuidarse, a comunicarse, etc.
            .col-lg-2.col-md-5.col-8.px-5.d-none.d-lg-block
              img.mb-0(alt="" src="@/assets/curso/temas/Tema2/1.svg")

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.p-4.bg20.d-flex.justify-content-center.align-items-center
        img.mx-3.w-50.d-none.d-lg-block(src='@/assets/curso/temas/Tema2/2.svg')
        p Desde ese mismo momento, la información y la manera de configurar los datos a través del proceso comunicativo (transmisor, emisor, canal, mensaje y contexto) llevan a que aparezcan diversas formas de información y datos, incluso miles de mensajes de las primeras civilizaciones han quedado guardadas por miles de años hasta nuestros días a través de pinturas, esculturas y símbolos.

    .row(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema2/3.png')
      .col-sm-12.col-md-12.col-lg-7
        p Bajo este contexto, es importante recordar la diferencia entre datos e información. Cuando las civilizaciones descubren mensajes de humanos antiguos, no hay manera de interpretar un mensaje, ante los ojos no entrenados esos mensajes solo son símbolos con valor artístico, a partir del conocimiento antropológico los mensajes representan cosas, pero realmente serían solo datos (símbolos) sin información (no interpretados).
        p.fw-bold En conclusión, los datos no son un asunto nuevo que surge, a partir de la misma evolución humana se van volviendo de igual manera complejos y bastos a medida que las civilizaciones avanzan. 
  
    .row.mb-5.justify-content-center.align-items-center.vs-card.pos-fix-card
      .col-sm-12.col-lg-5.bg18.text-center.p-5
        h4.mb-5 Datos
        img.w-50.m-auto(src='@/assets/curso/temas/Tema2/27.svg')

      .col-sm-12.col-lg-5.bg12.text-center.p-5.ml-1-custom
        h4.mb-5 Información
        img.w-50.m-auto(src='@/assets/curso/temas/Tema2/28.svg')

    .row.mb-5.justify-content-center.align-items-center.m-auto
      .col-sm-12.col-lg-10.bg32.justify-content-center.align-items-center
        p.p-4.fw-bold Por lo que bajo el contexto digital y tecnológico actual los datos se convierten en un asunto de estudio profundo y técnico, pues el desarrollo humano y productivo tiene como plataforma principal, el uso de los datos para volverse en información, así mismo, la información deberá convertirse en conocimiento y este conocimiento es el componente principal para tomar acciones sobre la realidad.

    p(data-aos="zoom-in-left") Bajo el contexto técnico, los datos en la era moderna se guardan a través de máquinas digitales a partir de la implementación de Bases de datos (BD).
    h5.mb-5(data-aos="zoom-in-left") Para ampliar información se recomienda ir al siguiente video donde se profundiza en la diferencia entre datos e información: 
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kZ0zSWq5IN0" title="Datos e informacion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. SENA 2024.      
    
          
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Entendimiento de la #[i data]

    .row(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-6
        p.md-3.mt-3 Existen varios puntos de vista de cómo mirar y analizar los datos, para empezar, los datos corresponden a los registros de transacciones o cosas que se hacen en base a un proceso de negocio. En la analítica los datos representan mucho más que la facilidad o apoyo a los procesos, significa conocimiento, evaluación, medición y mejorar las decisiones que den valor al negocio a partir de cada proceso.
        p Conocer su naturaleza y características es trascendental para los proyectos #[i BI], donde la calidad de los datos #[b #[i (Data quality - DQ)]], se define como la facultad de los datos para el objetivo definido de un usuario u organización. Esto es subjetivo, ya que el concepto de calidad podría ser relativo a los estándares definidos por las expectativas de las organizaciones o usuarios (Gawande, 2020).
      .col-sm-12.col-md-12.col-lg-6.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema2/5.png')

      
    .row.mb-5.align-items-center
      .col-sm-12.col-md-12.col-lg-6.mb-4.mb-md-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/Tema2/6.png')
      .col-sm-12.col-md-12.col-lg-6
        p.my-0 El objetivo final de los datos es brindar conocimiento del negocio, de una manera técnica y fiel a la realidad, en una palabra, los reportes deben ser siempre #[b CONFIABLES]; una unidad diminuta de información, equivalente a elementos microscópicos en medio de los océanos de información como un único registro, en uno de los campos, de alguna tabla que componga el sistema (por ejemplo, #[b FECHA DE NACIMIENTO]); la colección de estos registros diversos debe tener, desde el momento de capturar los datos, una programación de validación que garantice el registro de datos tenga aspectos como: tipo de dato según la naturaleza del registro, formato uniforme aceptado por todo el sistema, que el dato sea válido por reglas de negocio y naturaleza del proceso, entre otros.
      

    p(data-aos="zoom-in-left") La calidad de los datos toma aún mayor fuerza para aplicar validaciones con regularidad, cuando se habla de ecosistemas de datos, donde convergen diversas infraestructuras de datos y se interrelacionan datos compartidos.
    p(data-aos="zoom-in-left") Se puede definir, que las bases de datos presentan calidad en los datos si cumplen seis dimensiones: exactitud, completitud, consistencia, unicidad, disponibilidad y validez. Sin embargo, esta clasificación no está universalmente aceptada, por lo cual se adicionan otras dimensiones: actualizado, conformidad, integridad y precisión, que complementan las dimensiones #[i DQ].
    h5.mb-5(data-aos="zoom-in-left") A continuación, se presenta la descripción de cada una de estas dimensiones, que son medibles y que definen la calidad de los datos o #[i Data Quality]:
    

    .tarjeta.tarjeta-linea-tiempo-c.p-4.mb-5.bg21(data-aos="zoom-in-left")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Exactitud").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Grado en que los datos representan la realidad. Por ejemplo, si un candidato para una entrevista de trabajo tiene una dirección de entrevista incorrecta, no podrá asistir hasta que obtenga la dirección correcta.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/7.png')

          
        .row(titulo="Completitud").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se establece como el porcentaje de datos poblados frente a la posibilidad de cumplimiento del 100%. Con frecuencia, se escucha, “el dato no se encuentra”. Por ejemplo, el departamento de #[i marketing] quiere enviar #[i email] a clientes, pero el funcionario de entrada de datos no completó la dirección de correo.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/8.png') 


        .row(titulo="Consistencia").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Es la cercanía y uniformidad de los datos con otras tablas o un conjunto de datos de referencia. Por ejemplo, cuando en el campo “SEXO”, se espera hombre, mujer y desconocido, en algunas tablas aparece como M, F. o Masculino, Femenino, o #[i Male, Female, Unknows], etc. Es importante unificar o conciliar todos los sistemas.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/9.png')

        .row(titulo="Unicidad").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se refiere al número de veces que un objeto o evento se registra. Se espera que un hecho o entidad sea registrado una sola vez. No deberían existir datos duplicados, esto genera conteos o reportes erróneos.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/10.png')

        .row(titulo="Validez").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se refiere a la proximidad del valor de los datos a valores predeterminados o un cálculo. Por lo general esta propiedad debe programarse o configurarse. Validez basada en reglas comerciales o cálculo (columnas o campos calculados de precios netos, total a pagar, descuentos, etc.) siguiendo las reglas de negocio.
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/11.png')


        .row(titulo="Puntualidad").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se refiere a la exactitud entre el evento real y el registrado. Existen rangos de puntualidad, algunos sistemas requieren datos en minutos, otros en horas y otros negocios en días sin importar horas o incluso meses sin importar días (dependiendo de la granularidad).
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/12.png') 


        .row(titulo="Actualizado").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se refiere a los estados del mundo real frente al estado capturado en los datos. Si los estados no se actualizan, los datos pierden calidad. Por ejemplo: Dirección cambiada: Si un cliente actualiza su dirección, los datos registrados pierden vigencia.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/13.png')

        .row(titulo="Conformidad").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Los datos con los mismos atributos deben representarse en un formato y tipos de datos iguales. Conformidad de formato: se espera que la fecha siga el formato ‘MM/DD/AAAA’. Para los humanos, los datos en la tabla parecen correctos, pero para la computadora, los cambios en el formato de los datos causarán caos.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/14.png')

        .row(titulo="Integridad").mx-5-cus.py-3.bg-white-r.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
            p Se refiere al grado de coherencia en que se implementa restricciones relacionales definida entre dos tablas. Integridad referencial: en la tabla padre, siempre debe existir una tabla de datos hijo. Por ejemplo: un pedido debe tener id de cliente como clave foránea.
        
          .col-sm-12.col-md-12.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/Tema2/15.png')


    h5.mb-5(data-aos="zoom-in-left") Además, es necesario reconocer la importancia de las pruebas de integridad de datos:

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5AZvbfUcv9c" title="Entendimiento de la data" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. SENA 2024.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Detección de errores y datos faltantes

    p(data-aos="zoom-in-left") Uno de los mayores desafíos para la analítica es lidiar con sistemas de información que fueron diseñados por fuera de los dominios de la centralización, o estándares de calidad y validación que garanticen un óptimo resultado.
    
    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10.my-3
        .bloque-texto-b.color-terciario.py-4
          .bloque-texto-b__texto.d-flex
            i.quote-cus.fas.fa-quote-left
            .flex-column
              p.mb-2.d-block Cuando los sistemas de información no son capaces de digitalizar eficaz y eficientemente la realidad del negocio, y capturan el nivel adecuado de detalle necesario, no almacenan dichos datos garantizando que no se producen pérdidas sintácticas ni semánticas, no procesan los datos de acuerdo con las reglas de negocio, o no listan los resultados de los análisis a los usuarios, entonces se producen “no-conformidades” en el ciclo de vida de los datos.
              h5.d-flex.justify-content-end.d-block.mb-0 #[br](Velthuis, 2019). 
                  i.quote-cus.fas.fa-quote-right
      .col-sm-12.col-lg-2.align-items-end.d-none.d-lg-block.mr-0
          img.w-75.mt-5(src='@/assets/curso/temas/Tema2/16.svg')
      
    .row(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema2/17.png')
      .col-sm-12.col-md-12.col-lg-7
        p.md-3.mt-2-cus Para la exploración y la determinación de datos faltantes se debe tener presente que en gran parte del tiempo que se invierte en los procesos de analítica tiene la relación con la limpieza, depuración y mejora de la calidad de los datos y las dos maneras más comunes de gestionar los datos faltantes son: la eliminación y la imputación.
        p El objetivo es que los sistemas de uso analítico tengan los datos completos independiente del tipo de faltantes, y después de los análisis realizados para determinar los faltantes, y en vista de que no existe manera de calcularlos o sacarlos de otras fuentes, los datos que faltan en medio del conjunto se pueden gestionar, principalmente con las dos siguientes opciones:

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 160px;').bg-img-blue Descarte
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue 


    h5.mb-5(data-aos="zoom-in-left") Es la más sencilla, se puede tomar de dos maneras:

    .tarjeta--container.row.mb-5(data-aos="zoom-in-left")
      .col-md.tarjeta.bg22.p-5.text-black
        .row.justify-content-center.mb-4
          .col-12
            figure
              img.h-img-card-cus(src='@/assets/curso/temas/Tema2/19.png')
        h4.text-center Eliminación de la lista
        p Se remueve todo el registro de datos a los que le falta algún dato, esto tiene la desventaja que perdería otro tipo de datos, de otras columnas que sí están los datos, lo que llevaría a mayor margen de error en los reportes y dependiendo de la cantidad de datos faltantes, puede generar pérdida significativa de información.
      .col-md.tarjeta.bg5.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-12
            figure
              img.h-img-card-cus(src='@/assets/curso/temas/Tema2/20.png')
        h4.text-center Eliminación por pares
        p A diferencia del anterior, solo pone en Nulos aquellos valores que faltan, conservando el resto de la fina, sin embargo, para modelos #[i BI] o #[i ML] podría presentar inconvenientes, pues hay medidas u operaciones que requieren la completitud de los datos.

    .mb-4.d-flex.bg-img-title(data-aos="zoom-in-left")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.aos-init.aos-animate(style='width: 200px;').bg-img-blue Imputación
        img.col-lg.d-flex.aos-init.aos-animate(src='@/assets/curso/temas/103.svg').icon-blue


    p(data-aos="zoom-in-left") Esta técnica está basada en estimar los valores faltantes en relación a los datos disponibles de la misma columna, en este caso, se hace uso de la estadística inferencial (más adelante se detalla), la idea es que los datos completados no interfieran en la media ni desviación del conjunto de datos. Este tipo de completitud se aplica a datos numéricos, ya sean tipo enteros o flotantes. Hay dos maneras de aplicar la imputación o reemplazo del dato:
    
    .tarjeta--container.row(data-aos="zoom-in-left")
      .col-md.tarjeta.bg22.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-12
            figure
              img.h-img-card-cus(src='@/assets/curso/temas/Tema2/22.png')
        h4.text-center Imputación por media
        p Consiste simplemente en crear un cálculo entre los valores conocidos de la columna y ponerlo en el faltante. La desventaja es que se podrían reemplazar muchos valores faltantes con un único valor, lo que afecta la distribución de los datos.
      .col-md.tarjeta.bg5.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-12
            figure
              img.h-img-card-cus(src='@/assets/curso/temas/Tema2/23.png')
        h4.text-center Imputación por regresión
        p El dato que falta se reemplaza con un valor calculado a partir de modelos de regresión, los cuales calculan el dato a imputar tomando el registro completo (todos los campos) de los datos faltantes con otros registros con datos completos, de esa manera se predicen los datos desconocidos.



    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Identificación de variables importantes

    p.mb-3(data-aos="zoom-in-left") Para iniciar la toma de requerimientos para proyectos #[i BI], se debe tener en cuenta que la inteligencia de negocios (#[i Business Intelligence]) no es una tecnología; podría denominarse más como una técnica o metodología que podría emplear una o varias herramientas tecnológicas integradas.
    h5.mb-5(data-aos="zoom-in-left") Por lo cual es importante, aplicar las siguientes técnicas para la identificación de las variables:


    .row(data-aos="zoom-in-left")
      .col-sm-12.col-md-12.col-lg-7
        AcordionA.mb-0(tipo="a" clase-tarjeta="acordion__activo_bg6")
          .row(titulo="Conocer la organización (observación y lectura)")
            .col-md-12.mb-4
              p.mx-5 Si es un profesional que está vinculado a la empresa o una persona que le realizará un trabajo a un cliente, lo primero es conocer bien la empresa y el contexto al cual se le realizará el proyecto de #[i BI]. Incluyendo el mercado, la competencia, etc.
          .row(titulo="Entrevista")
            .col-md-12.mb-4
              p.mx-5 En la fase inicial se deben centrar en aspectos estratégicos, se debe dejar a un lado, todo lo relacionado con tecnología, es por ello, que ocasionalmente las entrevistas con los responsables de #[i TI] podrían ser poco fructíferas; las entrevistas de requerimientos deben estar enfocadas a las áreas que definen el rumbo del negocio, tales como la financiera, la gerencia, planeación, etc. Las preguntas deben estar enfocadas hacia las necesidades, lleva casos de uso de otras experiencias y determinar si para el área entrevistada aplican y cómo se adaptan en el caso particular.
          .row(titulo="Encuestas")
            .col-md-12.mb-4
              p.mx-5 Actualmente las encuestas online son fáciles de crear, tienen más alcance, hay mayor control, es más cómodo para el encuestado y es más fácil de tabular. En este sentido, las preguntas, al igual que la entrevista, debe estar orientada a las variables clave y necesidad.
          .row(titulo="Bus dimensional")
            .col-md-12.mb-4
              p.mx-5 A partir de la toma de requisitos y necesidades, se debe identificar elementos comunes. Es decir, definir elementos que en varios procesos se repiten o usan la misma información.
          .row(titulo="Dar prioridad a los procesos")
            .col-md-12.mb-4
              p.mx-5 Se debe elegir empezar con los procesos que más impacto tienen para la organización e ir avanzando hacia las áreas y procesos menos indispensables.
          .row(titulo="Seleccionar las herramientas adecuadas")
            .col-md-12.mb-4
              p.mx-5 Es otro elemento para garantizar la satisfacción de los usuarios finales, pues cuando las herramientas no cubren funcionalmente las expectativas, la solución #[i BI] podría ser poco efectiva.
          .row(titulo="Capacitación y cultura")
            .col-md-12.mb-0
              p.mx-5 El elemento más importante en la transformación digital y la adopción con éxito de nuevas soluciones, dependen de un gran porcentaje de la capacidad y convencimiento de uso. Los usuarios deben estar comprometidos con el proyecto, las políticas corporativas deben estar enfocadas en este aspecto, es muy importante revisar las políticas, si es necesario actualizarlas hacia una nueva realidad hacerlo. Es necesario garantizar las capacitaciones y campañas hacia la cultura de los datos.
  
      .col-sm-12.col-md-12.col-lg-5.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema2/24.png')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 #[i Dataset]
    
    p.mb-0(data-aos="zoom-in-left") Se denomina al conjunto de datos, lo que traduce una colección de información en una sola tabla; donde cada campo representa una variable particular.
    p(data-aos="zoom-in-left") A diferencia de una base de datos donde se conforma una estructura con múltiples tablas que se relacionan, los #[i Dataset] contienen todo en una única tabla.

    .tarjeta--container.row.mb-0
      .col-sm-12.col-lg-5.mt-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema2/25.png')
      .col-sm-12.col-lg-7.p-4.text-black
        p.mb-4 Algunas soluciones analíticas están basadas en #[i Datasets], es decir, que desde los sistemas relacionales se exportan e incluyen los datos asociados de varias tablas a través de #[i Joins], donde se consolidan los datos. Esta solución no es muy recomendada en la actualidad, pues a medida que los datos se incrementan esta tabla que contiene todos los datos se hace inmanejable y poco eficiente para los motores de bases de datos.
        .cajon.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mt-4.px-3 Una de las definiciones y análisis iniciales más importantes a la hora de identificar las fuentes de datos es la manera o arquitectura en que se almacena la información. Según como se almacenan y gestionan los datos digitales, estos pueden clasificarse en términos generales como datos estructurados o semiestructurados (Ommi, 2018).
    p.mb-5(data-aos="zoom-in-left") #[b A continuación se presentan los tipos de datos en los orígenes para los modelos analíticos:]

    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        ImagenInfografica.color-acento-botones.mb-5 
          template(v-slot:imagen)
            figure
              img.imagen-punto-2(src='@/assets/curso/temas/Tema2/26.svg', alt='La imagen presenta una pirámide invertida que clasifica los tipos de datos utilizados en modelos analíticos en tres categorías: no estructurados (sin estructura definida, como textos y multimedia), semi estructurados (con una organización parcial, como HTML, XML, JSON y correos electrónicos), y estructurados (con una estructura clara y rígida, como en bases de datos relacionales y hojas de cálculo). Los datos estructurados se encuentran en la base por su alta organización, mientras que los no estructurados están en la cima debido a su falta de estructura, con los semi estructurados en el medio. ')

          .tarjeta.tarjeta-infografica.py-4.px-5(x="91%" y="16%" numero="1")
            p.mb-2 No tiene un modelo de información y no está organizado en ningún formato específico. Se almacena como archivos y datos sueltos. 
            p.mt-4.mb-2 Ejemplos: 
            ul.lista-ul.mb-4
              li.mb-0.pb-0 
                i.fa.fa-check.ul-li-color
                p.mb-0 #[b Archivos de texto y videos.] 
              li.mb-0.pb-0 
                i.fa.fa-check.ul-li-color
                p.mb-0 #[b El cuerpo del mensaje de un correo electrónico.]
            p #[b Más del 90% de la información disponible está en este tipo.]
          .tarjeta.tarjeta-infografica.py-4.px-5(x="81%" y="42%" numero="2")
            p.mb-2 No presentan una estructura definida como en los datos estructurados, pero sí presentan una organización definida en sus metadatos donde describen los objetos y sus relaciones, y que en algunos casos están aceptados por convención. 
            p.mt-4.mb-2 Ejemplos: 
            ul.lista-ul.mb-4
              li.mb-0.pb-0 
                i.fa.fa-check.ul-li-color
                p.mb-0 #[b Formatos #[i HTML, XML o JSON.]]
              li.mb-0.pb-0 
                i.fa.fa-check.ul-li-color
                p.mb-0 #[b Correos electrónicos.]

          .tarjeta.tarjeta-infografica.py-4.px-5(x="67%" y="75%" numero="3")
            p.mb-2 Datos que se almacenan en bases de datos relacionales como #[i SQL], #[i Oracle] etc. Los datos se organizan en filas y columnas dentro de tablas con nombres. 
            p.mt-4.mb-2 Ejemplo:  
            ul.lista-ul.mb-4
              li.mb-0.pb-0 
                i.fa.fa-check.ul-li-color
                p.mb-0  #[b  Base de datos gestión de facturación.]
      
    p(data-aos="zoom-in-left") La mayoría de los datos generados por todos los usuarios están clasificados como no estructurados, esto indica que se componen de información difícil de clasificar y ordenar, conformada por archivos sueltos o producidos de manera general como documentos, videos y audios.

</template>

<script>
export default {
  name: 'Tema2',
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
