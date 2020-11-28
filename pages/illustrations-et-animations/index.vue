<template>
  <section class="page-illustrations-animations">
    <div class="title">
      <span>ILLUSTRATIONS & ANIMATIONS</span>
    </div>
    <div class="blocs">
      <div class="subject-1">
        <img src="/images/illustrations-animations/index-1.jpg" alt="L'humain" />
        <span>L’HUMAIN</span>
      </div>
      <div class="subject-2">
        <img src="/images/illustrations-animations/index-2.jpg" alt="Architecture" />
        <span>ARCHITECTURE</span>
      </div>
      <div class="subject-3">
        <img src="/images/illustrations-animations/index-3.jpg" alt="Jardins" />
        <span>JARDINS</span>
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
    }
  }
</script>

<style lang="scss" scoped>
.page-illustrations-animations {
  padding-top: 15vh;
  width: 100%;
  .title {
    padding: 8.403vw 0;
    text-align: center;
    span {
      font-size: 7.639vw;
      font-weight: bold;
    }
  }
  .blocs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    .subject-3 {
      grid-area: 1 / 3 / 2 / 4;
      filter: opacity(50%);
    }
    .subject-1,
    .subject-2,
    .subject-3 {
      position: relative;
      width: 100%;
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
      }
    }
}
</style>