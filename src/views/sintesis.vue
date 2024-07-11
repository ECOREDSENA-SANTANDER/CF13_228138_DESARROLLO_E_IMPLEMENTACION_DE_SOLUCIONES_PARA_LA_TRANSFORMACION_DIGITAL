<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 En el siguiente diagrama se expone la síntesis de la complejidad de la gestión y preparación de datos, destacando componentes como #[i hardware], #[i software], datos y personas. Se abordan métodos de intercambio de datos #[i web], incluyendo JSON, BSON y XML, y principios de transacciones como atomicidad y consistencia, asimismo se detallan lenguajes #[i SQL] específicos (DDL, DML, DCL) y entornos de desarrollo #[i IDE] como Google Collaborate, Jupyter y PyCharm, resaltando las interconexiones necesarias para un análisis y preparación de datos efectivos.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La documentación técnica se da bajo el contexto técnico y sus requisitos, que a su vez responden a la orientación web y/o de software, teniendo en cuenta los estándares y las buenas prácticas documentales.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
