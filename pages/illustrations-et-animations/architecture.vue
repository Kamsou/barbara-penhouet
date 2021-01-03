<template>
  <section class="page-architecture">
    <article class="banner">
      <h2>ARCHITECTURE</h2>
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
$breakpoint-tablet: 1025px;
.page-architecture {
  padding-top: 15vh;
  .banner {
    background: url("/images/painter/painter-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 554px;
    position: relative;
    @media (max-width: $breakpoint-tablet) {
      background: url("/images/painter/painter-1-mobile.jpg");
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
      height: 80vw;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      font-size: 110px;
      color: #FFFFFF;
      width: 900px;
      @media (max-width: $breakpoint-tablet) {
        font-size: 10.800vw;
        color: #EF0311;
        text-align: center;
        max-width: 100%;
      }
    }
  }
}
</style>