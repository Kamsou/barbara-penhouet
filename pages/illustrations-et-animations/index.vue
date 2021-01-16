<template>
  <section>
    <article class="page-illustrations-animations">
      <div class="title">
        <span>ILLUSTRATIONS & ANIMATIONS</span>
        <div class="image-1">
          <img src="/images/illustrations-desktop/illu-1.jpg" alt=""/>
        </div>
      </div>
    </article>
    <article>
      <div class="flex row-2">
        <div>
          <img src="/images/illustrations-desktop/illu-2.jpg" alt=""/>
        </div>
        <div>
          <img class="illu-3" src="/images/illustrations-desktop/illu-3.jpg" alt=""/>
        </div>
      </div>
      <div class="flex row-3">
        <div>
          <img src="/images/illustrations-desktop/illu-4.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/illustrations-desktop/illu-5.jpg" alt=""/>
        </div>
      </div>
      <div class="global-row-4">
        <img class="row-4" src="/images/illustrations-desktop/illu-6.jpg" alt=""/>
      </div>
      <div class="flex row-5">
        <div>
          <img src="/images/illustrations-desktop/illu-7.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/illustrations-desktop/illu-8.jpg" alt=""/>
        </div>
      </div>
      <div class="global-row-5-6">
        <img class="row-5-6" src="/images/illustrations-mobile/mosaique2.jpg" alt=""/>
      </div>
      <div class="flex row-6">
        <div>
          <img src="/images/illustrations-desktop/illu-9.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/illustrations-desktop/illu-10.jpg" alt=""/>
        </div>
      </div>
      <div class="row-7">
        <div class="flex">
          <div class="image-11">
            <img src="/images/illustrations-desktop/illu-11.jpg" alt=""/>
          </div>
          <div class="image-12">
            <img src="/images/illustrations-desktop/illu-12.jpg" alt=""/>
          </div>
        </div>
        <div class="image-13">
          <img src="/images/illustrations-desktop/illu-13.jpg" alt=""/>
        </div>
      </div>
    </article>
    <Footer class="footer-illustrations" :up="up" />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  export default {
    layout: 'bg-white',
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
.content {
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: $breakpoint-tablet) {
    max-width: 100%;
  }
  .page-illustrations-animations {
    max-height: 615px;
    @media (max-width: $breakpoint-tablet) {
      height: 84vw;
      margin: 0 auto;
    }
    .title {
      text-align: center;
      position: relative;
      max-height: 564px;
      @media (max-width: $breakpoint-tablet) {
        height: 84vw;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10.6vw;
        font-weight: bold;
        z-index: 2;
        width: 100%;
        line-height: 34.6vw;
            height: 100%;
        @media (min-width: $breakpoint-tablet) {
          font-size: 110px;
          line-height: 130px;
        }
      }
      .image-1 {
        max-width: 1440px;
        max-height: 564px;
        @media (max-width: $breakpoint-tablet) {
          height: 84vw;
          overflow: hidden;
        }
        img {
          max-width: 100%;
          max-height: 564px;
          @media (max-width: $breakpoint-tablet) {
            height: 100%;
            max-width: initial;
          }
        }
      }
    }
  }
  article {
    margin-top: 36px;
    .flex {
      display: flex;
    }
    .row-2 {
      padding: 0 100px 36px;
      @media (max-width: $breakpoint-tablet) {
        padding: 0 4.8vw 7.73vw;
      }
      :nth-child(1) {
        max-width: 542px;
        margin-right: 62px;
        @media (max-width: $breakpoint-tablet) {
          max-width: 69.3vw;
          margin-right: 0;
        }
        img {
          width: 100%;
        }
      }
      :nth-child(2) {
        max-width: 353px;
        @media (max-width: $breakpoint-tablet) {
          width: 34.6vw;
          background-image: url('/images/illustrations-desktop/illu-5.jpg');
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: 150%;
        }
        .illu-3 {
          width: 100%;
          @media (max-width: $breakpoint-tablet) {
            display: none;
          }
        }
      }
    }
    .row-3 {
      padding: 0 100px 36px;
      justify-content: space-between;
      @media (max-width: $breakpoint-tablet) {
        padding: 0 12vw 5.06vw;
      }
      :nth-child(1) {
        max-width: 417px;
        @media (max-width: $breakpoint-tablet) {
          max-width: 78.6vw;
        }
        img {
          width: 100%;
        }
      }
      :nth-child(2) {
        max-width: 460px;
        @media (max-width: $breakpoint-tablet) {
          display: none;
        }
        img {
          width: 100%;
        }
      }
    }
    .global-row-4 {
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        background-image: url('/images/illustrations-mobile/mosaique1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 154.93vw;
        margin-bottom: 5.06vw;
      }
      .row-4 {
        margin-bottom: 36px;
        max-width: 100%;
        @media (max-width: $breakpoint-tablet) {
          display: none;
        }
      }
    }
    .global-row-5-6 {
      display: none;
      @media (max-width: $breakpoint-tablet) {
        display: initial;
        width: 100%;
        margin-top: 5.06vw;
        height: 154.93vw;
      }
      .row-5-6 {
        @media (max-width: $breakpoint-tablet) {
          width: 100%;
        }
      }
    }
    .row-5 {
      height: 1043px;
      position: relative;
      justify-content: space-between;
      padding: 0 100px;
      @media (max-width: $breakpoint-tablet) {
        padding: 0 5.06vw 5.06vw;
        height: 121.8vw;
      }
      :nth-child(1) {
        max-width: 596px;
        margin-right: 64px;
        position: relative;
        top: 200px;
        @media (max-width: $breakpoint-tablet) {
          width: 56.53vw;
          margin-right: 0;
          top: auto;
        }
        img {
          width: 100%;
          @media (max-width: $breakpoint-tablet) {
            position: absolute;
            bottom: 0;
            width: 144%;
          }
        }
      }
      :nth-child(2) {
        max-width: 598px;
        bottom: 200px;
        position: relative;
        @media (max-width: $breakpoint-tablet) {
          width: 61.8vw;
          bottom: 0;
        }
        img {
          width: 100%;
          @media (max-width: $breakpoint-tablet) {
            position: absolute;
            top: 0;
            width: 121%;
            right: 0vw;
          }
        }
      }
    }
    .row-6 {
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 36px 100px;
      @media (max-width: $breakpoint-tablet) {
        padding: 9.6vw 7.19vw;
      }
      :nth-child(1) {
        max-width: 585px;
        margin-right: 52px;
        @media (max-width: $breakpoint-tablet) {
          width: 42.4vw;
          margin-right: 2.6vw;
        }
        img {
          width: 100%;
        }
      }
      :nth-child(2) {
        max-width: 598px;
        @media (max-width: $breakpoint-tablet) {
          width: 42.4vw;
        }
        img {
          width: 100%;
        }
      }
    }
    .row-7 {
      .flex {
        position: relative;
        justify-content: space-between;
        padding: 0 52px 0 39px;
        @media (max-width: $breakpoint-tablet) {
          padding: 0 5.3vw 0 0;
        }
        .image-11 {
          max-width: 366px;
          margin-right: 400px;
          @media (max-width: $breakpoint-tablet) {
            width: 33.3vw;
            margin-right: 20.8vw;
          }
          img {
            width: 100%;
          }
        }
        .image-12 {
          max-width: 613px;
          z-index: 1;
          @media (max-width: $breakpoint-tablet) {
            width: 42.6vw;
          }
          img {
            width: 100%;
          }
        }
      }
      .image-13 {
        max-width: 1050px;
        z-index: 0;
        margin-right: 383px;
        @media (max-width: $breakpoint-tablet) {
          width: 93.8vw;
          margin-right: 0;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
.footer-illustrations {
  position: initial;
}
</style>