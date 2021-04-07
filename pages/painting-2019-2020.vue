<template>
  <section class="page-painter-2020" ref="smoothscroll">
    <article class="banner">
      <h2 :class="{ fadeSlowly: titleDissapear }">
        PEINTURES 2019-2020
      </h2>
    </article>
    <article class="first-row">
    </article>
    <article class="second-row">
      <SwiperItem :pictures="pictures" />
    </article>
    <Footer :up="up" />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue'
import SwiperItem from '../components/SwiperItem.vue'
  export default {
    scrollToTop: true,
    layout: 'bg-white',
    components: {
      Footer,
      SwiperItem,
    },
    data() {
      return {
        titleDissapear: false,
        pictures: [
          {
            src: '/images/painter/slider-2019/1.jpg',
            alt: '15h50 2020 Oil on canvas, 90 x 70 cm',
          },
          {
            src: '/images/painter/slider-2019/2.jpg',
            alt: '17h45 2020 Oil on canvas, 145 x 125 cm',
          },
          {
            src: '/images/painter/slider-2019/3.jpg',
            alt: '17h02 2020 Oil on canvas, 155 x 135 cm',
          },
          {
            src: '/images/painter/slider-2019/4.jpg',
            alt: 'Atelier',
          },
          {
            src: '/images/painter/slider-2019/5.jpg',
            alt: '8h17 2020 Oil on canvas, 120 x 90 cm',
          },
          {
            src: '/images/painter/slider-2019/6.jpg',
            alt: '7h25 2020 Oil on canvas, 90 x 70 cm',
          },
          {
            src: '/images/painter/slider-2019/7.jpg',
            alt: '12h30 2020 Oil on canvas, 25 x 19 cm',
          },
          {
            src: '/images/painter/slider-2019/8.jpg',
            alt: '11h30 2020 Oil on canvas, 150 x 125 cm',
          },
          {
            src: '/images/painter/slider-2019/10.jpg',
            alt: '21h23 2020 Oil on canvas, 90 x 70 cm',
          },
          {
            src: '/images/painter/slider-2019/11.jpg',
            alt: '16h07 2020 Oil on canvas, 30 x 24 cm',
          },
          {
            src: '/images/painter/slider-2019/13.jpg',
            alt: '14h30 2020 Oil on canvas, 90 x 70 cm',
          },
          {
            src: '/images/painter/slider-2019/14.jpeg',
            alt: '14h34 2020 Oil on canvas, 25 x 19 cm',
          },
          {
            src: '/images/painter/slider-2019/15.jpeg',
            alt: '13h30 2020 Oil on canvas, 25 x 19 cm',
          },
          {
            src: '/images/painter/slider-2019/16.jpeg',
            alt: 'En suspens 2020 Oil on canvas, 150 x 120cm',
          },
          {
            src: '/images/painter/slider-2019/18.jpg',
            alt: '17h01 2020 Oil on canvas, 155 x 125 cm',
          },
          {
            src: '/images/painter/slider-2019/19.jpg',
          },
          {
            src: '/images/painter/slider-2019/20.jpg',
            alt: '',
          },
          {
            src: '/images/painter/slider-2019/21.jpg',
            alt: '',
          },
          {
            src: '/images/painter/slider-2019/17.jpg',
            alt: '14h40 2020 Oil on canvas, 30 x 24 cm',
          },
          {
            src: '/images/painter/slider-2019/22.jpg',
            alt: '',
          },
          {
            src: '/images/painter/slider-2019/23.jpg',
            alt: '',
          },
          {
            src: '/images/painter/slider-2019/24.jpg',
            alt: '',
          },
          {
            src: '/images/painter/slider-2019/25.jpg',
            alt: '',
          },
        ]
      }
    },
    created () {
      if (process.client) { 
          window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.client) { 
          window.removeEventListener('scroll', this.handleScroll);
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
      handleScroll () {
        if (window.scrollY > 50) {
          this.titleDissapear = true
        }
      }
    },
    head() {
      return {
        title: 'Barbara Penhouet - Peintures 2019-2020',
      }
    },
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-painter-2020 {
  padding-top: 15vh;
  @media (max-width: $breakpoint-tablet) {
    padding-top: 10vh;
  }
  .banner {
    background: url("/images/painter/painter-5.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 842px;
    position: relative;
    @media (max-width: $breakpoint-tablet) {
      background: url("/images/painter/painter-5.jpg");
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
      height: 160vw;
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
        font-size: 12.800vw;
        color: #EF0311;
        text-align: center;
        width: 100%;
      }
    }
  }
  .first-row {
    display: flex;
    padding: 33px 100px;
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      padding: 8.800vw 8.533vw;
    }
    .column-1 {
      width: 50%;
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
    .column-2 {
      width: 50%;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        margin-top: 6.667vw;
      }
      img {
        width: 100%;
      }
    }
  }
  .second-row{
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: $breakpoint-tablet) {
      max-width: 100%;
    }
    .title-loop {
      font-size: 20px;
      font-weight: bold;
      padding: 0 100px;
      @media (max-width: $breakpoint-tablet) {
        text-align: justify;
        font-size: 3.733vw;
        padding: 8.800vw 8.533vw;
      }
    }
  }
}

.fadeSlowly {
  animation: fadein 1s ease-in-out forwards;
}

@keyframes fadein {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>