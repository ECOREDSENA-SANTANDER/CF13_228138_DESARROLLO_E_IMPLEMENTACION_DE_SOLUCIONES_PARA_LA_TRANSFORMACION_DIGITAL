<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')
      .col-lg-8
        .cajon.color-secundario.p-5.mb-4.mt-2-cus
          p.my-3 En este componente se abordarán los conceptos y fundamentos de la inteligencia de negocios, con el fin de realizar el modelado, análisis y preparación de datos. Para una comprensión más detallada, se expone el siguiente video:  
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UH5ofnorJ4Y" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. SENA 2024.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
