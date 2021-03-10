<template>
  <section class="page-painter-2020" ref="smoothscroll">
    <article class="banner">
      <h2 :class="{ fadeSlowly: titleDissapear }">
        PEINTURES 2019-2020
      </h2>
    </article>
    <article class="first-row">
      <!-- <div class="column-1">
        <span>Peintures 2019 - 2020: Texte en construction.. </span>
      </div> -->
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
          },
          {
            src: '/images/painter/slider-2019/2.jpg',
          },
          {
            src: '/images/painter/slider-2019/3.jpg',
          },
          {
            src: '/images/painter/slider-2019/4.jpg',
          },
          {
            src: '/images/painter/slider-2019/5.jpg',
          },
          {
            src: '/images/painter/slider-2019/6.jpg',
          },
          {
            src: '/images/painter/slider-2019/7.jpg',
          },
          {
            src: '/images/painter/slider-2019/8.jpg',
          },
          {
            src: '/images/painter/slider-2019/10.jpg',
          },
          {
            src: '/images/painter/slider-2019/11.jpg',
          },
          {
            src: '/images/painter/slider-2019/12.jpg',
          },
          {
            src: '/images/painter/slider-2019/13.jpg',
          },
          {
            src: '/images/painter/slider-2019/14.jpeg',
          },
          {
            src: '/images/painter/slider-2019/15.jpeg',
          },
          {
            src: '/images/painter/slider-2019/16.jpeg',
          },
          {
            src: '/images/painter/slider-2019/17.jpg',
          },
          {
            src: '/images/painter/slider-2019/18.jpg',
          },
          {
            src: '/images/painter/slider-2019/19.jpg',
          },
          {
            src: '/images/painter/slider-2019/20.jpg',
          },
          {
            src: '/images/painter/slider-2019/21.jpg',
          },
          {
            src: '/images/painter/slider-2019/22.jpg',
          },
          {
            src: '/images/painter/slider-2019/23.jpg',
          },
          {
            src: '/images/painter/slider-2019/24.jpg',
          },
          {
            src: '/images/painter/slider-2019/27.jpg',
          },
          {
            src: '/images/painter/slider-2019/28.jpg',
          },
          {
            src: '/images/painter/slider-2019/29.jpg',
          },
          {
            src: '/images/painter/slider-2019/30.jpg',
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
    }
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