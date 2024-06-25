<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis exploratorio de datos
    
    .bloque1.mb-0(data-aos="zoom-in-left")
      .bloque-texto-b.color-secundario.pt-4.mb-0
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-10.col-12.mb-4.mg-lg-0
              p La analítica basa sus procesos en conceptos estadísticos apoyados de herramientas tecnológicas, tanto para el procesamiento de los datos (muchos datos de entrada, procesados en el menor tiempo posible) como para la presentación o visualización de los mismos, en este apartado se señalan algunos conceptos teóricos, fundamentados en la matemática para luego aplicar analítica de datos.
            .col-lg-2.col-md-5.col-8.px-5.d-none.d-lg-block
              img.mb-0(alt="" src="@/assets/curso/temas/Tema4/1.svg") 


    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Estadística descriptiva y estadística inferencial

    p.mb-5 Son los métodos mediante los cuales se presenta la información y pueden clasificarse en:



    .row.align-items-center.justify-content-start(data-aos="zoom-in-left")
      .col-sm-12.col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.w-60.d-none.d-lg-block(src='@/assets/curso/temas/Tema4/2.svg', alt='Texto que describa la imagen')
          .tarjeta.bg26
            .p-4
              h5.md-2 Estadística descriptiva:
              p.md-3 son los datos que se pueden representar a partir de tablas, gráficos y otros recursos. Describe fenómenos, por ejemplo cuando se pregunta la edad a un grupo de personas, se podría realizar tabla o gráfico con estos resultados y definir medidas descriptivas como edad promedio, edades más frecuentes, etc.
              p La analítica usa principalmente este tipo de estadística, pues parte de que no se tienen conocimientos previos ni supuestos verdaderos, describe fenómenos que pasan en el negocio, además, por lo general se tienen todos los datos disponibles para los reportes, por lo que pocas veces se emplean muestras poblacionales.




    .row.align-items-center.justify-content-start(data-aos="zoom-in-left")
      .col-sm-12.col-lg-11
        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img.w-60.d-none.d-lg-block(src='@/assets/curso/temas/Tema4/3.svg', alt='Texto que describa la imagen')
          .tarjeta.bg26
            .p-4
              h5.md-2 Inferencia estadística:
              p.md-3 a partir de métodos, se pueden realizar conclusiones, tomar decisiones, estimaciones o predicciones sobre una población o universo, con base a datos de una muestra. Para la aplicación de estadística inferencial, se tratarán algunos parámetros matemáticos para la aplicación de este modelo estadístico.


    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Población y muestra

    p Para  la aplicación de estadística inferencial, se tratarán algunos parámetros matemáticos para la aplicación de este modelo estadístico que se ilustran a continuación: 
    .row
      .col-md-12.mx-auto.mb-5(data-aos="zoom-in-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span
            |  Características de una muestra adecuada.
    .row.mb-5
      .col-sm-12.col-lg-10.m-auto
        figure
          img(src='@/assets/curso/temas/Tema4/4.svg', alt='La ilustración destaca que una muestra adecuada debe ser tanto representativa, reflejando las características de la población y el tipo de muestra, como adecuada, asegurando que el tamaño de la muestra sea suficientemente significativo para el análisis.')

    p.mb-5(data-aos="zoom-in-left") Este tipo de estadística se aplica cuando, la posblación o el universo objeto de estudio es muy grande e imposible de aplicar estadística descriptiva o aplicar instrumento a todo, o cuando no hay exactitud del número de población o universo. Para estos casos, se deberá aplicar la estadística inferencial donde se pueden realizar afirmaciones sobre una población basado en los resultados de una muestra.

    .row(data-aos="zoom-in-left") 
      .col-sm-12.col-lg-10.bg29.p-4.mb-0.m-auto    
          .row.justify-content-center.align-items-center
            .col-md-2.d-none.d-lg-block
              figure.mx-7
                img(src='@/assets/curso/temas/Tema4/5.png', alt='Texto que describa la imagen')
            .col-sm-12.col-lg-8
              p #[b Es importante ] no establecer divorcios entre la estadística descriptiva y la inferencial, ambas son necesarias, pues la inferencial usa los datos descriptivos para llevar a conclusiones generales.


    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 Escalas de medida y clasificación de variable
    
    p.mb-4 Las escalas de medición son procesos de comparación y dimensionalidad, que da cuenta de un valor que signifique sus proporciones. Una variable, es un elemento que cambia y que al hacer parte de un conjunto puede afectar.
    p.mb-5 Las escalas se convierten en algo real a través de las preguntas que se utilizan para recolectar la información aplicando la escala. (Domínguez, 2017). Existen cuatro escalas primarias de medición: nominal, ordinal, intervalo y radio; algunas escalas más sofisticadas como las escalas multicontenido o multipropósito, en la siguiente tabla se describen las categorías.

    
    .row
      .col-sm-12.col-lg-10.m-auto
        .mx-auto.mb-5(data-aos="zoom-in-left")
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span
              |   Variables y escalas

        .tabla-a.color-acento-contenido.mb-0(data-aos="zoom-in-left")
          table(alt='La tabla describe las diferentes escalas de variables y sus características. Las variables categóricas pueden ser nominales, que clasifican los elementos del conjunto para distribuirlos en grupos, u ordinales, que también clasifican elementos, pero permiten mediciones comparativas. Las variables métricas pueden ser de intervalo, que cuantifican y califican numéricamente los objetos y permiten mediciones simples con escalas continuas, y de razón, que también cuantifican y califican numéricamente pero utilizan escalas discontinuas y resuelven el problema del cero absoluto. ')
            thead
              tr
                th.text-white.text-left-cus Variables
                th.text-white.text-left-cus Escala
                th.text-white.text-left-cus Descripción
            tbody
              tr.bg27
                td Categoria
                td Nominal 
                td Clasifica los elementos del conjunto para distribuirlos en grupos.
              tr.bg28
                td 
                td Ordinal
                td También clasifica elementos, pero además permite hacer escalas de medición comparativa.
              tr.bg27
                td Metrica
                td Intervalo 
                td Cuantifica y califica numéricamente los objetos de la categoría. 
                  ul.lista-ul.mx-4.mt-3 
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul 
                      p Permite hacer mediciones simples. 
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul   
                      p Utiliza escalas continuas. 
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul   
                      p No tiene cero por lo que usualmente aplica escalas pares; la más común es de 1 a 10. Cuando la escala no tiene un punto neutral, como si lo tiene una escala impar, el investigador estaría forzando una respuesta negativa o positiva del participante. De 1 a 5 es negativa y de 6 a 10 es positiva.
              tr.bg28
                td 
                td Radio
                td Cuantifica y califica numéricamente los objetos de la categoría.  
                  ul.lista-ul.mx-4.mt-3 
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul 
                      p Permite Permite hacer mediciones simples.  
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul 
                      p Utiliza escalas discontinuas.
                    li.mb-0.pb-0
                      i.fas.fa-circle.icon-li-ul 
                      p Resuelve el problema del cero por lo que usualmente aplica escalas impares; las más comunes son de 1 a 5 o de 1 a 7.

     
    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.4 Técnicas de análisis estadístico

    .row.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        p.mt-2-cus Mencionar parte de las técnicas estadísticas sería un muy extenso y no bastaría un fragmento de un recurso de formación, sin embargo, para efectos de contexto y orientación hacia la analítica de datos y soluciones BI, es fundamental señalar que el análisis estadístico se asocia con las técnicas y prácticas propias del <i>Big data</i> y la inteligencia de negocios.
        p.md-3 Pero desde el enfoque propiamente, la utilidad estadística está inmersa como fundamento en el conocimiento de las áreas y en todas las decisiones incluso las decisiones no técnicas y simples, de manera implícita se trae a la mente procesos estadísticos (ejemplo: al pasar una calle, debes verificar variables como flujo de carros, velocidad, estado de la vía, distancia del punto A al punto B, etc.).
        p #[b Para todo negocio, es importante tener en cuenta datos financieros y de consumo (consultar figura). ]
      .col-sm-12.col-lg-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/Tema4/6.png', alt='Texto que describa la imagen')
    .row.mb-5.align-items-center.justify-content-center
      .col-sm-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span
            |  Índice de precios del consumidor
        figure
          img(src='@/assets/curso/temas/Tema4/7.png', alt='La ilustración presenta el índice de precios al consumidor (IPC) total y por división para junio de 2023. El gráfico de barras destaca las variaciones porcentuales en diferentes categorías, como alimentos y bebidas no alcohólicas, bebidas alcohólicas y tabaco, prendas de vestir y calzado, y transporte, entre otros. Se observa que el transporte tiene la mayor variación positiva, mientras que las prendas de vestir y calzado presentan una variación negativa. La línea roja horizontal indica el promedio general de las variaciones en el IPC. La fuente de la información es el Banco de la República. ')
          figcaption Nota. Banco de la República (2022).

    p.mb-5(data-aos="zoom-in-left") En la imagen anterior se presentan los índices de precios, en los que se nota la inflación y consumo de la población en Colombia. Se nota que las bebidas alcohólicas y tabaco tuvieron estabilidad de precios a lo largo del mes de julio. Siendo el calzado y prendas de vestir las que más tuvieron variación en sus precios, seguido de los alimentos.

    .row.mb-5(data-aos="zoom-in-left")
      .col-md-2.mb-4.mb-md-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/Tema4/8.png', alt='Texto que describa la imagen')
      .col-sm-12.col-lg-9
        p.md-3 Con esta información, el negocio podría ir tomando decisiones y estableciendo enfoques comerciales, mirar cómo está su sector en el país y de esa manera ir orientando su análisis de negocio. Además, existen indicadores propios de las organizaciones, tales como la medición de desempeño de los colaboradores en áreas específicas, validar los datos financieros, los tiempos de procesos, comparar sedes, definir conocimiento específico y general del negocio.#[b  Por lo que la estadística toma un papel muy importante, para ello se mencionarán las principales características de la estadística: ]

    p.mb-4(data-aos="zoom-in-left") #[b Como principio fundamental la estadística contiene los siguientes componentes: ]
      
    .tarjeta.bg16.p-4.mb-5(data-aos="zoom-in-left")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 Objetivo y preguntas
            p Para empezar a hacer uso de la estadística, es fundamental definir la intencionalidad de lo que se desea saber, comprobar o medir. En otras palabras, definir con claridad las preguntas que se desean responder.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema4/9.png', alt='Texto que describa la imagen')
            
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 Recopilación de los datos
            p Según la necesidad u objetivo del ejercicio estadístico, es necesario identificar y si no existe, diseñar la herramienta o instrumento para la recopilación de los datos. Verificar si los sistemas de información tienen los datos requeridos, implementar encuestas, o métodos de observación sistemática.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema4/10.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 Procesar los datos
            p Cuando se tengan los datos recopilados de manera sistémica, es importante tener claridad de qué hacer con ellos. Tener los datos y ya ocasionalmente no responde las preguntas requeridas si el proceso no está claro. Es fundamental interpretar y entender los datos para definir las fórmulas matemáticas y las mediciones para aplicar las operaciones a estos datos. Las operaciones estadísticas más comunes y simples son: Promedios, sumas, conteos, segmentación, porcentajes, variables, tiempo, etc.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema4/11.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 Analizar los datos
            p Este análisis, el cual se presenta junto a la presentación de datos, está basado en la interpretación y comprensión de la información que hay en los datos presentados. Se definen también con medidas como desviaciones, comprobaciones estadísticas, proyecciones futuras, entre otras operaciones para determinar el estado de lo que se ha trazado desde los objetivos y preguntas.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema4/12.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 Conclusión y acciones
            p Si bien la estadística no se centra en las acciones, el fin es dar un conocimiento del negocio para que se use como insumo en la toma acertada de decisiones.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/Tema4/13.png', alt='Texto que describa la imagen')


    p(data-aos="zoom-in-left") La estadística es entonces, un conjunto de métodos y teorías aplicadas a la recolección, descripción y análisis de datos, los cuales constituyen evidencia numérica para la toma de decisiones en condiciones de incertidumbre.

</template>

<script>
export default {
  name: 'Tema4',
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
