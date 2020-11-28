<template>
  <section class="page-l-humain">
    <article class="banner">
      <h2>L'HUMAIN</h2>
    </article>
    <article class="first-row">
      <div class="column-1">
        <span>PEAU DE SILENCE</span>
        <p>Un corps, le corps, nos corps. Barbara P. se plait à arpenter les territoires complexes du corps, ses intérieurs, ses extérieurs,      ses mouvances, ses formes, ses textures. Le vide se faufilant, des discussions homme-homme, homme-espace, homme-nature, homme-temps, figuration-abstraction apparaissent.  En tant que peintre et architecte les « espaces d'entre deux » et leur exploration sont déterminants dans son travail.
          <br/><br/>
          Les lutteurs et les danceurs dansent pradoxalement entre l'attirance et répulsion de l'autre. Ce point d'équilibre entre l'individualité de l'homme et son besoin d'être ensemble est l'essence du travail de Barbara qu'elle tente de chorégraphier.
          <br/><br/>
          On ne peut construire le vide, à l’instar du bonheur, de l’harmonie,de l’intimité ou du silence. Il tient sa raison d’être en suspension de la présences de d’autres éléments. 
          À l’image de la rue symbole de démocratie et de liberté, mes représentations sont une ode au vivre ensemble par le silence de l’interstice, incluant ses amours et désamours.</p>
      </div>
      <div class="column-2">
        <img src="/images/painter/painter-2.jpg" alt="painter-2" />
      </div>
    </article>
    <article class="second-row">
      <div class="column-1">
        <img src="/images/painter/painter-3.jpg" alt="painter-2" />
      </div>
      <div class="column-2">
        <img src="/images/painter/painter-4.jpg" alt="painter-2" />
      </div>
    </article>
    <Footer :up="up" />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  export default {
    layout: 'bg-white',
    components: {
      Footer,
    },
    methods: {
      up() {
        const myEl = this.$refs.smoothscroll
        this.$smoothScroll({
          scrollTo: myEl,
          duration: 2000,
          updateHistory: false,
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
.page-l-humain {
  padding-top: 15vh;
  .banner {
    background: url("/images/painter/painter-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 554px;
    position: relative;
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 110px;
      color: #FFFFFF;
    }
  }
  .first-row {
    display: flex;
    padding: 33px 100px;
    max-width: 100%;
    .column-1 {
      width: 50%;
      color: #EF0311;
      padding-right: 55px;
      span {
        font-size: 20px;
        font-weight: bold;
      }
      p {
        font-size: 14px;
        padding-top: 25px;
      }
    }
    .column-2 {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
  .second-row {
    column-gap: 24px;
    display: flex;
    margin: 33px 0;
    padding: 0 100px;
    .column-1,
    .column-2 {
      width: 50%;
      img {
        width: auto;
        height: 44.097vw;
      }
    }
  }
}
</style>