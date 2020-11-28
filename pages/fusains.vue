<template>
  <section class="page-fusains" ref="smoothscroll">
    <article class="banner">
      <h2>FUSAINS</h2>
    </article>
    <article class="first-row">
      <div class="column-1">
        <span>IMPRESSIONS ET PETITES FICTIONS</span>
        <p>Un corps, le corps, nos corps. Barbara P. se plait à arpenter les territoires complexes du corps, ses intérieurs, ses extérieurs,      ses mouvances, ses formes, ses textures. Le vide se faufilant, des discussions homme-homme, homme-espace, homme-nature, homme-temps, figuration-abstraction apparaissent.  En tant que peintre et architecte les « espaces d'entre deux » et leur exploration sont déterminants dans son travail.</p>
      </div>
    </article>
    <article class="second-row">
      <img src="/images/fusains/fusain-2.jpg" alt="painter-2" />
    </article>
    <article class="three-row">
      <img src="/images/fusains/fusain-3.jpg" alt="painter-2" />
    </article>
    <article class="four-row">
      <img src="/images/fusains/fusain-4.jpg" alt="painter-2" />
      <img src="/images/fusains/fusain-5.jpg" alt="painter-2" />
    </article>
    <article class="five-row">
      <img src="/images/fusains/fusain-6.jpg" alt="painter-2" />
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
      }
    }
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-fusains {
  padding-top: 15vh;
  .banner {
    background: url("/images/fusains/fusain-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 554px;
    position: relative;
    @media (max-width: $breakpoint-tablet) {
      background: url("/images/fusains/fusain-1.jpg");
      background-position: initial;
      background-size: cover;
      background-repeat: no-repeat;
      height: 80vw;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 110px;
      color: #EF0311;
      @media (max-width: $breakpoint-tablet) {
        font-size: 12.800vw;
        color: #EF0311;
        text-align: center;
      }
    }
  }
  .first-row {
    display: flex;
    padding: 33px 100px;
    max-width: 100%;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      padding: 8.800vw 8.533vw;
    }
    .column-1 {
      width: 554px;
      color: #EF0311;
      padding-right: 55px;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        padding-right: 0;
      }
      span {
        font-size: 20px;
        font-weight: bold;
        @media (max-width: $breakpoint-tablet) {
          text-align: justify;
          font-size: 3.733vw;
        }
      }
      p {
        font-size: 14px;
        padding-top: 25px;
        @media (max-width: $breakpoint-tablet) {
          text-align: justify;
          font-size: 2.667vw;
        }
      }
    }
  }
  .second-row {
    padding: 15px 100px;
    width: 506px;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      padding: 0 8.533vw 10.133vw;
      width: 100%;
    }
      img {
        width: 100%;
        height: auto;
        @media (max-width: $breakpoint-tablet) {
          width: 100%;
          height: 100%;
        }
      }
  }
  .three-row {
    @media (max-width: $breakpoint-tablet) {
      height: 66.933vw;
    }
    img {
      width: 100%;
      height: 66.933vw;
    }
  }
  .four-row {
    background-color: #004721;
    display: flex;
    column-gap: 50px;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    padding: 24px 116px 30px;
    @media (max-width: $breakpoint-tablet) {
      padding: 8vw 9.600vw 13.333vw;
    }
    :first-child {
      @media (max-width: $breakpoint-tablet) {
        display: none;
      }
    }
    img {
      max-width: 50%;
      @media (max-width: $breakpoint-tablet) {
        max-width: 100%;
      }
    }
  }
  .five-row {
    display: flex;
    margin: 41px 0;
    @media (max-width: $breakpoint-tablet) {
      margin: 3.733vw 0;
    }
    img {
      width: 100%;
    }
  }
}
</style>