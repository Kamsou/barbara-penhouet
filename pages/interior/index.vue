<template>
  <section class="page-illustrations-animations">
    <div class="title">
      <span>INTERIEUR</span>
    </div>
    <div class="blocs">
      <div class="subject-1">
        <img src="/images/illustrations-animations/index-4.jpg" alt="Architecture et ambiances" />
        <span>ARCHITECTURE & AMBIANCES</span>
      </div>
      <div class="subject-2">
        <img src="/images/illustrations-animations/index-5.jpg" alt="Design et objets" />
        <span>DESIGN & OBJETS</span>
      </div>
    </div>
    <Footer :up="up" />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  export default {
    layout: 'default',
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
.page-illustrations-animations {
  padding-top: 15vh;
  .title {
    padding: 121px 0;
    text-align: center;
    span {
      font-size: 110px;
      font-weight: bold;
    }
  }
  .blocs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

    .subject-1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .subject-2 {
      grid-area: 1 / 2 / 2 / 3;
      filter: opacity(50%);
    }
    .subject-1,
    .subject-2,
    .subject-3 {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 49px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
      }
    }
}
</style>