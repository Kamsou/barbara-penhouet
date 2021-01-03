<template>
  <section>
    <section class="page-illustrations-animations">
      <div class="title">
        <span>ILLUSTRATIONS & ANIMATIONS</span>
      </div>
      <div class="blocs">
        
          <div :class="`subject-${subject.id}`" v-for="subject in subjects" :key="subject.slug">
            <nuxt-link :to="`/illustrations-et-animations/${subject.slug}`">
              <img :src="subject.img" alt="">
              <span>{{ subject.name }}</span>
            </nuxt-link>
          </div>
      </div>
    </section>
    <Footer class="footer-illustrations" :up="up" />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  export default {
    layout: 'default',
    components: {
      Footer,
    },
    data() {
      return {
        subjects: [
          {
            id: 1,
            slug: 'l-humain',
            img: '/images/illustrations-animations/index-1.jpg',
            name: 'L’HUMAIN',
          },
          {
            id: 2,
            slug: 'architecture',
            img: '/images/illustrations-animations/index-2.jpg',
            name: 'ARCHITECTURE',
          },
          {
            id: 3,
            slug: 'jardins',
            img: '/images/illustrations-animations/index-3.jpg',
            name: 'JARDINS',
          },
        ],
      }
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
$breakpoint-tablet: 1025px;

.page-illustrations-animations {
  padding-top: 15vh;
  .title {
    padding: 8.403vw 0;
    text-align: center;
    span {
      font-size: clamp(6.250vw, 7.639vw, 9.722vw);
      font-weight: bold;
      @media (min-width: $breakpoint-tablet) {
        font-size: 110px;
      }
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
        font-size: clamp(3.3vw, 3.3vw, 5vw);
        font-weight: bold;
        color: #ffffff;
      }
    }
}
.footer-illustrations {
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (min-width: $breakpoint-tablet) {
    position: initial;
  }
}
</style>