<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Proveedores de servicio en la nube 
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.my-3
        p.mb-5 Debido a la masificación y cada vez mayor adopción de tecnologías de cloud computing, han sido muchos los nuevos proveedores que han ido surgiendo y posicionando sus ofertas de servicios, sin embargo, en el mundo occidental podemos mencionar los siguientes como los más grandes y más importantes proveedores de servicios en la nube.
        .bg17.p-4.mb-3(data-aos="fade-left") 
          p.mb-3 Los proveedores de <b>servicios cloud</b> han surgido para ofrecer a las organizaciones soluciones innovadoras, de vanguardia, contempla funcionalidades tanto técnicas, que benefician la disponibilidad, así como herramientas para la gestión de los activos de información, a partir de modelos de negocio basados en servicios con componentes modulares. 
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-2.my-3
              .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
                img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/99.svg', alt='')
                .wd-80-cus
                  p.ml-1-custom Supervisión 
            .col-lg-2.my-3
              .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
                img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
                .wd-80-cus
                  p.ml-1-custom Supervisión 
            .col-lg-2.my-3
              .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
                img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
                .wd-80-cus
                  p.ml-1-custom Supervisión 

            .col-lg-2.my-3
              .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
                img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
                .wd-80-cus
                  p.ml-1-custom Supervisió
              
            .col-lg-2.my-3
              .bg11.d-flex.px-3.he-2-cus.align-items-center.justify-content-center.flex-column
                img.img-a.img-t.bg12.px-1.py-2(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
                .wd-80-cus
                  p.ml-1-custom Supervisión 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/102.png', alt='')
    p.mb-5 Los siguientes fueron considerados los principales proveedores de servicios en la nube en el año 2021: 
    SlyderA(tipo="b").slider-a-custom.mb-5
        .row.align-items-center.justify-content-center
          .col-lg-6.col-md-12.my-3
            h4.mb-4 Controles CIS v8
            p Los controles CIS son una propuesta de controles de seguridad específicos y con los cuales se busca endurecer las acciones defensivas y así prevenir incidentes que afecten los activos de información.
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-md-12.my-3
            h4.mb-4 En qué se basan los controles CIS v8
            p Esta propuesta está basada en múltiples marcos de seguridad, lo que permite abordar diferentes puntos de vista y, asimismo, recoge las mejores propuestas de seguridad.
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-6.col-md-12.my-3
            h4.mb-4 Estructuración de CIS v8
            p Los controles CIS están estructurados en 18 controles y 153 salvaguardas, distribuidos en 3 grupos de implementación.
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='') 
    .row.justify-content-center.align-items-center(data-aos="flip-down")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Proveedores de servicios en la nube
                  p.mb-0 Conozca más sobre los proveedores de servicios en la nube consultando la página “Public Cloud Services Comparison”, que encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link
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
