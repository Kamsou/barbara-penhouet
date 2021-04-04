<template>
  <div class="page-index" ref="smoothscroll">
    <section class="first-bloc-index">
      <div class="arrow-up-mobile" @click="up">
        <img src="/images/index/arrow.svg" alt="">
      </div>
      <div class="title-first-bloc-mobile">
        <div class="title-placement">
          <div class="index-lign-flex">
            <span>BARBARA P.</span>
            <span>STUDIO</span>
          </div>
          <div class="index-lign-flex">
            <span>CREATIF</span>
            <span>BIENVENUE</span>
          </div>
        </div>
      </div>
      <div class="image-first-bloc">
      <img src="/images/index/gif-femme-qui-danse.gif" />
      </div>
      <div class="title-first-bloc">
        <div class="title-placement">
          <div class="index-lign-flex">
            <span>BARBARA</span>
            <span>P.</span>
            <span>STUDIO</span>
          </div>
          <div class="index-lign-flex">
            <span>BIENVENUE</span>
          </div>
        </div>
      </div>
    </section>
    <section class="second-bloc-index">
      <div
        class="biography"
        :class="{ fadeBiography: bioVisible }"
        v-observe-visibility="{
          callback: visibilityChanged,
          once: true,
          intersection: {
            rootMargin: '0px',
          },
        }"
      >
        Barbara P. est artiste et une architecte vivant à Paris. 
        <br><br>
        Elle affectionne les projets transdisciplinaires pour exprimer des identités
        fortes et uniques en accompagnant ses clients dans la construction d’expériences.
        Sa pratique artistique imprègne différents médiums pour raconter ses histoires :
        peinture, objets, lieux de vie, tapisseries, installations, illustrations. 
        <br><br>
        Barbara est diplômée de l’école supérieure d'architecture de Bretagne en 2014.
        Elle part vivre 6 ans à Berlin, avant de s’installer à Paris. Sa dernière exposition
        « Peau de silence » fut présentée à coGalleries Berlin après une immersion en résidence
        à la SIM, Reykjavik. Elle a travaillé avec India Madhavi, Nowadays, Dietrich Untertrifaller et
        Sander& Hofrichter P-SH. Elle est actuellement résidente aux ateliers de la fabrique à Ivry. 
      </div>
      <div class="img">
        <img src="/images/index/barbara-sur-chaise.png" alt="barbara-sur-chaise" />
      </div>
    </section>
    <section class="three-bloc-index">
      <div class="images">
        <img class="img-01" src="/images/index/peintre.png" alt="peintre">
        <img class="img-02" src="/images/index/corps-nus.png" alt="corps nus">
      </div>
      <div class="titles-three-bloc">
        <div class="title-placement">
          <nuxt-link to="/painting-2017-2018/">
            <div class="index-lign-flex case-01">
              <span class="couple-numbers">
                <span>2</span>
                <span>0</span>
                <span>1</span>
                <span>7</span>
                <span>-</span>
                <span>1</span>
                <span>8</span>
              </span>
              <span class="title">PEINTURES</span>
            </div>
          </nuxt-link>
          <nuxt-link to="/painting-2019-2020/">
            <div class="index-lign-flex case-02">
              <span class="couple-numbers">
                <span>2</span>
                <span>0</span>
                <span>1</span>
                <span>9</span>
                <span>-</span>
                <span>2</span>
                <span>0</span>
              </span>
              <span class="title">PEINTURES</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="four-bloc-index">
      <nuxt-link to="/illustrations-et-animations/">
        <div class="superposition">
          <img class="img-01" src="/images/index/homme-plongeon.png" alt="homme qui plonge">
          <img class="img-02" src="/images/index/illustrations-animations.png" alt="illustrations et animations">
        </div>
      </nuxt-link>
    </section>
    <section class="five-bloc-index">
      <div class="superposition">
        <span>Bientôt disponible !</span>
        <img class="img-01" src="/images/index/interieur.png" alt="interieur">
        <img class="img-02" src="/images/index/salon.png" alt="un salon dessiné">
        <img class="img-03" src="/images/index/objet-design.png" alt="un objet design">
      </div>
    </section>
    <section class="six-bloc-index">
      <nuxt-link to="/shop/">
        <div class="superposition">
            <img class="img-01" src="/images/index/tee-shirt.png" alt="tee-shirt">
            <img class="img-02" src="/images/index/shop.png" alt="shop">
        </div>
      </nuxt-link>
    </section>
    <section class="seven-bloc-index">
      <div class="superposition">
        <img class="img-01" src="/images/index/femme-allongee.png" alt="une femme allongée">
        <div class="footer">
          <div class="links">
            <a href="mailto:barbarapenhouetstudio@gmail.com" target="_blank">
              <span>Contact</span>
            </a>
            <a href="https://www.facebook.com/Barbara-P-354201155083653/" target="_blank">
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/barbarabara_p/" target="_blank">
              <span>Instagram</span>
            </a>
          </div>
          <div class="arrow-up" @click="up">
            <img src="/images/index/arrow.svg" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  data() {
    return {
      bioVisible: false,
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
    visibilityChanged (isVisible) {
      this.bioVisible = isVisible
    }
  },
  head() {
    return {
      title: 'Barbara Penhouet',
      description: 'Illustratrice / Architecte',
      link: [
        {
          rel: 'prefetch',
          href: '/images/painter/painter-2.jpg',
          as: 'image',
        },
        {
          rel: 'preload',
          href: '/images/painter/painter-2.jpg',
          as: 'image',
        },
        {
          rel: 'prefetch',
          href: '/images/illustrations-desktop/illu-1.jpg',
          as: 'image',
        },
        {
          rel: 'preload',
          href: '/images/illustrations-desktop/illu-1.jpg',
          as: 'image',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-index {
  max-width: 1440px;
  margin: 0 auto;
  background-color: #FCF3F4;
  position: relative;
  @media (max-width: $breakpoint-tablet) {
    width: 100%;
    height: 100%;
  }
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: url("/images/preloader.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: all 2s;
    z-index: 100000000;
    animation: disappear 4s ease-out 1s forwards;
    @media (max-width: $breakpoint-tablet) {
      background: url("/images/preloader-mobile.png");
      background-color: #fff;
      z-index: 1000;
    }
  }
  @keyframes disappear{
    0%{
      opacity: 1;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  .first-bloc-index {
    width: 100%;
    height: 91vh;
    display: flex;
    position: relative;
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
      height: 82vh;
    }
    .arrow-up-mobile {
      display: none;
      @media (max-width: $breakpoint-tablet) {
        display: block;
        position: fixed;
        bottom: 9.600vw;
        right: 6.933vw;
        z-index: 5;
      }
      img {
        @media (max-width: $breakpoint-tablet) {
          width: 7.200vw;
        }
      }
    }
    .image-first-bloc {
      width: 648px;
      position: absolute;
      bottom: 0;
      img {
        width: 100%;
        position: relative;
        @media (max-width: $breakpoint-tablet) {
          width: 69.867vw;
        }
      }
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
      }
    }
    .title-first-bloc-mobile {
      display: none;
      @media (max-width: $breakpoint-tablet) {
        display: block;
        width: 100%;
        height: 80vh;
        font-size: 4.800vw;
        font-weight: bold;
        margin: 0;
        position: relative;
      }
      .title-placement {
        @media (max-width: $breakpoint-tablet) {
          width: 56.533vw;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .index-lign-flex {
          @media (max-width: $breakpoint-tablet) {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .title-first-bloc {
      font-size: 38px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      right: 18%;
      transform: translateY(-50%);
      @media (max-width: $breakpoint-tablet) {
        display: none;
      }
      .title-placement {
        width: 404px;
        .index-lign-flex {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .second-bloc-index {
    display: grid;
    grid-template-areas:
      'biography img';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 147px 72px 39px 30%;
    height: 100%;
    @media (max-width: $breakpoint-tablet) {
      grid-template-areas:
      'img'
      'biography';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      padding: 0 74px 0 53px;
    }
    .biography {
      grid-area: biography;
      width: 317px;
      font-size: 14px;
      text-align: justify;
      margin-right: 0 39px 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 700ms ease-in-out;
      @media (max-width: $breakpoint-tablet) {
        font-size: 3.200vw;
        width: 68.267vw;
        margin: 0 auto;
      }
    }

    .fadeBiography {
      opacity: 1;
      transform: translateY(0px);
    }
    .img {
      grid-area: img;
      @media (max-width: $breakpoint-tablet) {
        margin: 0 auto;
      }
      img {
        width: 321px;
        
        @media (max-width: $breakpoint-tablet) {
          width: 68.267vw;
          margin: 65px 0 16px 0;
        }
      }
    }
  }
  .three-bloc-index {
    display: flex;
    padding: 39px 0 0;
    height: 643px;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      height: 143.467vw;
      padding: 9.600vw 13.067vw 13.600vw 6.400vw;
    }
    .images {
      width: 50%;
      height: 100%;
      position: relative;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        height: 107.333vw;
      }
      .img-01 {
        width: 527px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        @media (max-width: $breakpoint-tablet) {
          width: 82.667vw;
        }
      }
      .img-02 {
        width: 481px;
        position: absolute;
        top: 177px;
        left: 113px;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 68.267vw;
          top: 38.667vw;
          left: 7.733vw;
        }
      }
    }
    .titles-three-bloc {
      width: 50%;
      font-size: 38px;
      font-weight: bold;
      position: relative;
      top: 100px;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        top: 0;
        padding: 6.400vw 5.333vw 0 11.200vw;
      }
      .title-placement {
        width: 465px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: $breakpoint-tablet) {
          margin: 0;
          width: 100%;
          gap: 2.133vw 7.067vw;
          display: grid;
          grid-template-areas:
            'case1 case2'
            'case3 .';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          padding: 34.667vw 5.067vw 0 10.400vw;
        }
        .index-lign-flex {
          display: flex;
          justify-content: space-between;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
          @media (max-width: $breakpoint-tablet) {
            font-size: 4.800vw;
          }
          .couple-numbers {
            @media (max-width: $breakpoint-tablet) {
              display: flex;
              justify-content: space-between;
            }
          }
        }
        .case-01,
        .case-02,
        .case-03 {
          @media (max-width: $breakpoint-tablet) {
            display: block;
            .title {
              display: block;
            }
          }
        }
        .case-01 {
          @media (max-width: $breakpoint-tablet) {
            grid-area: case1;
          }
        }
        .case-02 {
          @media (max-width: $breakpoint-tablet) {
            grid-area: case2;
          }
        }
        .case-03 {
          @media (max-width: $breakpoint-tablet) {
            grid-area: case3;
          }
        }
      }
    }
  }
  .four-bloc-index {
    height: 786px;
    display: block;
    padding: 0 79px 0 0;
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
      height: 183.467vw;
    }
    .superposition {
      position: relative;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      @media (max-width: $breakpoint-tablet) {
        overflow: hidden;
      }
      .img-01 {
        position: absolute;
        top: 19%;
        right: 11%;
        width: 466px;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 63.467vw;
          top: 30%;
          right: 20%;
        }
      }
      .img-02 {
        position: absolute;
        top: 0;
        width: 500px;
        z-index: 2;
        @media (max-width: $breakpoint-tablet) {
          width: 76.533vw;
          transform: rotate(-13.82deg);
          right: 15px;
          top: 10%;
        }
      }
    }
  }
  .five-bloc-index {
    height: 994px;
    display: block;
    padding: 5% 0 0 2.361vw;
    width: 100%;
    @media (max-width: $breakpoint-tablet) {
      height: 146.667vw;
      padding: 0;
    }
    .superposition {
      position: relative;
      display: flex;
      justify-content: flex-start;
      height: 100%;
      span {
        background-color: #EF0311;
        font-size: 14px;
        position: absolute;
        left: 20%;
        top: 30%;
        padding: 1%;
        color: #FCF3F4;
        z-index: 100;
        @media (max-width: $breakpoint-tablet) {
          font-size: 3.733vw;
          left: 33%;
          top: 25%;
        }
      }
      .img-01 {
        position: absolute;
        width: 441px;
        z-index: 2;
        bottom: 47%;
        @media (max-width: $breakpoint-tablet) {
          width: 65.067vw;
          bottom: 55%;
          right: 27%;
          transform: rotate(-41.09deg);
        }
      }
      .img-02 {
        position: absolute;
        left: 11%;
        width: 410px;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 54.667vw;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .img-03 {
        position: absolute;
        top: 33%;
        left: -2%;
        width: 371px;
        z-index: 3;
        @media (max-width: $breakpoint-tablet) {
          width: 48vw;
          top: 22%;
          left: 0%;
        }
      }
    }
  }
  .six-bloc-index {
    height: 762px;
    display: block;
    padding: 0 122px 0 0;
    @media (max-width: $breakpoint-tablet) {
      height: 85.333vw;
      padding: 0 15.467vw 0 10.133vw;
    }
    .superposition {
      position: relative;
      display: flex;
      justify-content: flex-end;
      @media (max-width: $breakpoint-tablet) {
        justify-content: center;
      }
      height: 100%;
      .img-01 {
        position: absolute;
        width: 598px;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 64.533vw;
        }
      }
      .img-02 {
        position: absolute;
        width: 385px;
        top: 51%;
        right: 16%;
        z-index: 2;
        @media (max-width: $breakpoint-tablet) {
          width: 41.600vw;
          top: -26%;
          right: -10%;
        }
      }
    }
  }
  .seven-bloc-index {
    height: 1460px;
    display: block;
    padding: 0 0 101px 109px;
    @media (max-width: $breakpoint-tablet) {
      height: 121.333vw;
      padding: 0;
    }
    .superposition {
      position: relative;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      .img-01 {
        position: absolute;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 100%;
          bottom: 0;
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        @media (max-width: $breakpoint-tablet) {
          padding: 0 0 5.667vw 3.200vw;
        }
        .links {
          a {
            text-decoration: none;
            color: #EF0311;
            &:hover {
              color: white;
            }
            span {
              display: block;
              width: 501px;
              font-size: 38px;
              font-weight: bold;
              padding-bottom: 15px;
              @media (max-width: $breakpoint-tablet) {
                font-size: 4vw;
                padding-bottom: 5px;
                width: 100%;
              }
            }
          }
        }
        .arrow-up {
          margin-right: 148px;
          cursor: pointer;
          @media (max-width: $breakpoint-tablet) {
            display: none;
          }
        }
      }
    }
  }
}
</style>