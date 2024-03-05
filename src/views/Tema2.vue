<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Preparación de datos


    .row.mt-5.mb-5
      .col-11
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p Las bases de datos son esa colección de datos integrados bajo un contexto o dominio, que contienen datos estructurados que reflejan relaciones, restricciones, validaciones y semánticas que reflejan las condiciones de negocio. Esta colección usa la computación para su almacenamiento y procesamiento.
            p.mt-3 <b>Los sistemas de base de datos están conformados por los siguientes elementos básicos:</b>
      .col-1.px-0
        figure
          img(src="@/assets/curso/temas/Tema2/1.svg", alt="Texto que describa la imagen").floating


    .tarjeta.fab.p-4.mb-5
      
      .row.justify-content-around.align-items-center

        .col-md-2
          figure
            img(src='@/assets/curso/temas/Tema2/2.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4
          p Desde ese mismo momento, la información y la manera de configurar los datos a través del proceso comunicativo (transmisor, emisor, canal, mensaje y contexto) llevan a que aparezcan diversas formas de información y datos, incluso miles de mensajes de las primeras civilizaciones han quedado guardados por miles de años hasta nuestros días a través de pinturas, esculturas y símbolos.
        
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            h4.mb-4 Datos
            figure
              img(src='@/assets/curso/temas/Tema2/3.png', alt='Texto que describa la imagen')
      .col-md.fad.p-5
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            h4.mb-4 Información
            figure
              img(src='@/assets/curso/temas/Tema2/4.png', alt='Texto que describa la imagen')

    p.md-4 Bajo el contexto técnico, los datos en la era moderna se guardan a través de máquinas digitales a partir de la implementación de Bases de datos (BD).

    p.md-4 <b>Se invita a visualizar el siguiente video donde se profundiza en la diferencia entre dato e información:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description      
    
          
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Entendimiento de la data

    .row
      .col-md-6
        p.md-3 Existen varios puntos de vista de cómo mirar y analizar los datos, para empezar, los datos corresponden a los registros de transacciones o cosas que se hacen en base a un proceso de negocio. En la analítica los datos representan mucho más que la facilidad o apoyo a los procesos, significa conocimiento, evaluación, medición y mejorar las decisiones que den valor al negocio a partir de cada proceso.
        p Conocer su naturaleza y características es trascendental para los proyectos BI, donde la calidad de los datos <b>(Data quality - DQ)</b>, se define como la facultad de los datos para el objetivo definido de un usuario u organización. Esto es subjetivo, ya que el concepto de calidad podría ser relativo a los estándares definidos por las expectativas de las organizaciones o usuarios (Gawande, 2020).
      .col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema2/5.png', alt='Texto que describa la imagen')

      
    .row
      .col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema2/6.png', alt='Texto que describa la imagen')
      .col-md-6
        p.md-3 El objetivo final de los datos es brindar conocimiento del negocio, de una manera técnica y fiel a la realidad, en una palabra, los reportes deben ser siempre <b>CONFIABLES</b>; una unidad diminuta de información, equivalente a elementos microscópicos en medio de los océanos de información como un único registro, en uno de los campos, de alguna tabla que componga el sistema (por ejemplo, <b>FECHA DE NACIMIENTO</b>); la colección de estos registros diversos debe tener, desde el momento de capturar los datos, una programación de validación que garantice
        p el registro de datos tenga aspectos como: tipo de dato según la naturaleza del registro, formato uniforme aceptado por todo el sistema, que el dato sea válido por reglas de negocio y naturaleza del proceso, entre otros.
      

    p.md-4 La calidad de los datos toma aún mayor fuerza para aplicar validaciones con regularidad, cuando se habla de ecosistemas de datos, donde convergen diversas infraestructuras de datos y se interrelacionan datos compartidos.
    p.md-4 Se puede definir, que las bases de datos presentan calidad en los datos si cumplen seis dimensiones: exactitud, completitud, consistencia, unicidad, disponibilidad y validez. Sin embargo, esta clasificación no está universalmente aceptada, por lo cual se adicionan otras dimensiones: actualizado, conformidad, integridad y precisión, que complementan las dimensiones DQ.
    p.md-4 <b>A continuación, se presenta la descripción de cada una de estas dimensiones, que son medibles y que definen la calidad de los datos o Data Quality:</b>
    

    .tarjeta.tarjeta-linea-tiempo-c.p-4.mb-5.md-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Exactitud")
          .col-md-8.mb-4.mb-md-0
            p Grado en que los datos representan la realidad. Por ejemplo, si un candidato para una entrevista de trabajo tiene una dirección de entrevista incorrecta, no podrá asistir hasta que obtenga la dirección correcta.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/7.png', alt='Texto que describa la imagen')

          
        .row(titulo="Complenitud")
          .col-md-8.mb-4.mb-md-0
            p Se establece como el porcentaje de datos poblados frente a la posibilidad de cumplimiento del 100%. Con frecuencia, se escucha, “el dato no se encuentra”. Por ejemplo, el departamento de marketing quiere enviar email a clientes, pero el funcionario de entrada de datos no completó la dirección de correo.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/8.png', alt='Texto que describa la imagen') 


        .row(titulo="Consistencia")
          .col-md-8.mb-4.mb-md-0
            p Es la cercanía y uniformidad de los datos con otras tablas o un conjunto de datos de referencia. Por ejemplo cuando en el campo “SEXO”, se espera hombre, mujer y desconocido, en algunas tablas aparece como M, F. o Masculino, Femenino, o Male, Female, Unknows, etc. Es importante unificar o conciliar todos los sistemas.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/9.png', alt='Texto que describa la imagen')

        .row(titulo="Unicidad")
          .col-md-8.mb-4.mb-md-0
            p Se refiere al número de veces que un objeto o evento se registra. Se espera que un hecho o entidad sea registrado una sola vez. No deberían existir datos duplicados, esto genera conteos o reportes erróneos.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/10.png', alt='Texto que describa la imagen')

        .row(titulo="Validez")
          .col-md-8.mb-4.mb-md-0
            p Se refiere a la proximidad del valor de los datos a valores predeterminados o un cálculo. Por lo general esta propiedad debe programarse o configurarse. Validez basada en reglas comerciales o cálculo (columnas o campos calculados de precios netos, total a pagar, descuentos, etc.) siguiendo las reglas de negocio.
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/11.png', alt='Texto que describa la imagen')


        .row(titulo="Puntualidad")
          .col-md-8.mb-4.mb-md-0
            p Se refiere a la exactitud entre el evento real y el registrado. Existen rangos de puntualidad, algunos sistemas requieren datos en minutos, otros en horas y otros negocios en días sin importar horas o incluso meses sin importar días (dependiendo de la granularidad).
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/12.png', alt='Texto que describa la imagen') 


        .row(titulo="Actualizado")
          .col-md-8.mb-4.mb-md-0
            p Se refiere a los estados del mundo real frente al estado capturado en los datos. Si los estados no se actualizan, los datos pierden calidad. Por ejemplo: Dirección cambiada: Si un cliente actualiza su dirección, los datos registrados pierden vigencia.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/13.png', alt='Texto que describa la imagen')

        .row(titulo="Conformidad")
          .col-md-8.mb-4.mb-md-0
            p Los datos con los mismos atributos deben representarse en un formato y tipos de datos iguales. Conformidad de formato: se espera que la fecha siga el formato ‘MM/DD/AAAA’. Para los humanos, los datos en la tabla parecen correctos, pero para la computadora, los cambios en el formato de los datos causarán caos.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/14.png', alt='Texto que describa la imagen')

        .row(titulo="Integridad")
          .col-md-8.mb-4.mb-md-0
            p Se refiere al grado de coherencia en que se implementa restricciones relacionales definida entre dos tablas. Integridad referencial: en la tabla padre, siempre debe existir una tabla de datos hijo. Por ejemplo: un pedido debe tener id de cliente como clave foránea.
        
          .col-md-2
            figure
              img(src='@/assets/curso/temas/Tema2/15.png', alt='Texto que describa la imagen')


    p.md-4 <b>Además, es necesario reconocer la importancia de las pruebas de integridad de datos:</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Detección de errores y datos faltantes

    p.md-4 Uno de los mayores desafíos para la analítica es lidiar con sistemas de información que fueron diseñados por fuera de los dominios de la centralización, o estándares de calidad y validación que garanticen un óptimo resultado.

    .row.mb-5
      .col-lg-6.mb-5.mb-lg-0
        h3.titulo-tercero
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Cuando los sistemas de información no son capaces de digitalizar eficaz y eficientemente la realidad del negocio, y capturan el nivel adecuado de detalle necesario, no almacenan dichos datos garantizando que no se producen pérdidas sintácticas ni semánticas, no procesan los datos de acuerdo con las reglas de negocio, o no muestran los resultados de los análisis a los usuarios, entonces se producen “no-conformidades” en el ciclo de vida de los datos 
            i.fas.fa-quote-right
            p <b>(Velthuis, 2019).</b>
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema2/16.png', alt='Texto que describa la imagen')
      
    .row
      .col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema2/17.png', alt='Texto que describa la imagen')
      .col-md-6
        p.md-3 Para la exploración y la determinación de datos faltantes se debe tener presente que en gran parte del tiempo que se invierte en los procesos de analítica tiene la relación con la limpieza, depuración y mejora de la calidad de los datos y las dos maneras más comunes de gestionar los datos faltantes son: la eliminación y la imputación.
        p El objetivo es que los sistemas de uso analítico tengan los datos completos independiente del tipo de faltantes, y después de los análisis realizados para determinar los faltantes, y en vista de que no existe manera de calcularlos o sacarlos de otras fuentes, los datos que faltan en medio del conjunto se pueden gestionar, principalmente con las dos siguientes opciones:

    .row
      .col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/Tema2/18.png', alt='Texto que describa la imagen')

    p <b>Es la más sencilla, se puede tomar de dos maneras:</b>

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta-container-uno.p-5.text-black
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema2/19.png', alt='Texto que describa la imagen')
        h4.text-center Eliminación de la lista
        p Se remueve todo el registro de datos a los que le falta algún dato, esto tiene la desventaja que perdería otro tipo de datos, de otras columnas que sí están los datos, lo que llevaría a mayor margen de error en los reportes y dependiendo de la cantidad de datos faltantes, puede generar pérdida significativa de información.
      .col-md.tarjeta-container-dos.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema2/20.png', alt='Texto que describa la imagen')
        h4.text-center Eliminación por pares
        p A diferencia del anterior, solo pone en Nulos aquellos valores que faltan, conservando el resto de la fina, sin embargo, para modelos BI o ML podría presentar inconvenientes, pues hay medidas u operaciones que requieren la completitud de los datos.

    .row.md-4
      .col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/Tema2/21.png', alt='Texto que describa la imagen')

    p.md-4 Esta técnica está basada en estimar los valores faltantes en relación a los datos disponibles de la misma columna, en este caso, se hace uso de la estadística inferencial (más adelante se detalla), la idea es que los datos completados no interfieran en la media ni desviación del conjunto de datos. Este tipo de completitud se aplica a datos numéricos, ya sean tipo enteros o flotantes. Hay dos maneras de aplicar la imputación o reemplazo del dato:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta-container-uno.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema2/22.png', alt='Texto que describa la imagen')
        h4.text-center Imputación por media
        p Consiste simplemente en crear un cálculo entre los valores conocidos de la columna y ponerlo en el faltante. La desventaja es que se podrían reemplazar muchos valores faltantes con un único valor, lo que afecta la distribución de los datos.
      .col-md.tarjeta-container-dos.p-5.text-black
        .row.justify-content-around.align-items-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema2/23.png', alt='Texto que describa la imagen')
        h4.text-center Imputación por regresión
        p El dato que falta se reemplaza con un valor calculado a partir de modelos de regresión, los cuales calculan el dato a imputar tomando el registro completo (todos los campos) de los datos faltantes con otros registros con datos completos, de esa manera se predicen los datos desconocidos.



    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Identificación de variables importantes

    p.md-3 Para iniciar la toma de requerimientos para proyectos BI, se debe tener en cuenta que la inteligencia de negocios (Business Intelligence) no es una tecnología; podría denominarse más como una técnica o metodología que podría emplear una o varias herramientas tecnológicas integradas.
    p <b>Por lo cual es importante, aplicar las siguientes técnicas para la identificación de las variables:</b>


    .row
      .col-md-5
        AcordionA.mb-5(tipo="a" clase-tarjeta="acordion__inactivo")
          .row(titulo="Conocer la organización (observación y lectura)")
            .col-md-9.mb-4.mb-md-0
              p Si es un profesional que está vinculado a la empresa o una persona que le realizará un trabajo a un cliente, lo primero es conocer bien la empresa y el contexto al cual se le realizará el proyecto de BI. Incluyendo el mercado, la competencia, etc.
          .row(titulo="Entrevista")
            .col-md-9.mb-4.mb-md-0
              p En la fase inicial se deben centrar en aspectos estratégicos, se debe dejar a un lado, todo lo relacionado con tecnología, es por ello, que ocasionalmente las entrevistas con los responsables de TI podrían ser poco fructíferas; las entrevistas de requerimientos deben estar enfocadas a las áreas que definen el rumbo del negocio, tales como la financiera, la gerencia, planeación, etc. Las preguntas deben estar enfocadas hacia las necesidades, lleva casos de uso de otras experiencias y determinar si para el área entrevistada aplican y cómo se adaptan en el caso particular.
          .row(titulo="Encuestas")
            .col-md-9.mb-4.mb-md-0
              p Actualmente las encuestas online son fáciles de crear, tienen más alcance, hay mayor control, es más cómodo para el encuestado y es más fácil de tabular. En este sentido, las preguntas, al igual que la entrevista, debe estar orientada a las variables clave y necesidad.
          .row(titulo="Bus dimensional")
            .col-md-9.mb-4.mb-md-0
              p A partir de la toma de requisitos y necesidades, se debe identificar elementos comunes. Es decir, definir elementos que en varios procesos se repiten o usan la misma información.
          .row(titulo="Dar prioridad a los procesos")
            .col-md-9.mb-4.mb-md-0
              p Se debe elegir empezar con los procesos que más impacto tienen para la organización e ir avanzando hacia las áreas y procesos menos indispensables.
          .row(titulo="Seleccionar las herramientas adecuadas")
            .col-md-9.mb-4.mb-md-0
              p Es otro elemento para garantizar la satisfacción de los usuarios finales, pues cuando las herramientas no cubren funcionalmente las expectativas, la solución BI podría ser poco efectiva.
          .row(titulo="Capacitación y cultura")
            .col-md-9.mb-4.mb-md-0
              p El elemento más importante en la transformación digital y la adopción con éxito de nuevas soluciones, dependen de un gran porcentaje de la capacidad y convencimiento de uso. Los usuarios deben estar comprometidos con el proyecto, las políticas corporativas deben estar enfocadas en este aspecto, es muy importante revisar las políticas, si es necesario actualizarlas hacia una nueva realidad hacerlo. Es necesario garantizar las capacitaciones y campañas hacia la cultura de los datos.
  
      .col-md-6.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema2/24.png', alt='Texto que describa la imagen')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Dataset
    
    p Se denomina al conjunto de datos, lo que traduce una colección de información en una sola tabla. donde cada campo representa una variable particular.
    p A diferencia de una base de datos donde se conforma una estructura con múltiples tablas que se relacionan, los Dataset contienen todo en una única tabla.

    .tarjeta--container.row.mb-5.md-4
      .col-6
        figure
          img(src='@/assets/curso/temas/Tema2/25.png', alt='Texto que describa la imagen')
      .col-md.tarjeta-container-tres.p-5.text-black
        p.md-3 Algunas soluciones analíticas están basadas en Datasets, es decir, que desde los sistemas relacionales se exportan e incluyen los datos asociados de varias tablas a través de Joins, donde se consolidan los datos. Esta solución no es muy recomendada en la actualidad, pues a medida que los datos se incrementan esta tabla que contiene todos los datos se hace inmanejable y poco eficiente para los motores de bases de datos.
        p Una de las definiciones y análisis iniciales más importantes a la hora de identificar las fuentes de datos es la manera o arquitectura en que se almacena la información. Según como se almacenan y gestionan los datos digitales, estos pueden clasificarse en términos generales como datos estructurados o semiestructurados (Ommi, 2018).

    p.mb-5 <b>A continuación se presentan los tipos de datos en los orígenes para los modelos analíticos:</b>

    ImagenInfografica.color-secundario.mb-5.md-5

      template(v-slot:imagen)
        figure
          img.imagen-punto-2(src='@/assets/curso/temas/Tema2/26.png', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-infografica.p-3(x="33%" y="16%")
        p.mb-2 No tiene un modelo de información y no está organizado en ningún formato específico. Se almacena como archivos y datos sueltos. Ejemplos: - Archivos de texto y videos. - El cuerpo del mensaje de un correo electrónico. 
        p <b>Más del 90% de la información disponible está en este tipo.</b>
      .tarjeta.tarjeta-infografica.p-3(x="29%" y="42%")
        p.mb-2 No presentan una estructura definida como en los datos estructurados, pero sí presentan una organización definida en sus metadatos donde describen los objetos y sus relaciones, y que en algunos casos están aceptados por convención. Ejemplos: - 
        p <b>Formatos HTML, XML o JSON. -</b>
        p <b>Correos electrónicos.</b>

      .tarjeta.tarjeta-infografica.p-3(x="23%" y="85%")
        p.mb-2 Datos que se almacenan en bases de datos relacionales como SQL, Oracle etc. Los datos se organizan en filas y columnas dentro de tablas con nombres. Ejemplo: 
        p <b>- Base de datos gestión de facturación.</b>
    
    p La mayoría de los datos generados por todos los usuarios están clasificados como no estructurados, esto indica que se componen de información difícil de clasificar y ordenar, conformada por archivos sueltos o producidos de manera general como documentos, videos y audios.

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

<style lang="sass">
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
