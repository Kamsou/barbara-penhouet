<template>
  <div ref="smoothscroll" class="page-index">
    <!-- PRELOADER -->
    <div class="loading-page"></div>
    <!-- -->
    <section class="first-bloc-index">
      <div class="arrow-up-mobile">
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
        <video
        ref="videoPlayer"
        muted
        autoplay
        loop
        playsinline
        preload="auto"
        rel="preload"
      >
        <source
          :src="videoUrl"
          type="video/mp4">
      </video>
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
      <div class="text">Barbara P. est une architecte, artiste-peintre et illustratrice vivant à Paris. Elle est diplômée de l’école supérieure d'architecture de Bretagne et a vécu 6 ans à Berlin avant de revenir en France en 2019. Sa sensibilité multi-supports lui permet d'être porteuse de projets singuliers et ambitieux.
        <br><br>
        Barbara accompagne ses clients dans la construction de leurs identités avec un positionnement esthétique fort, car elle se sert de l'art comme outil de communication.
        <br><br>
        Elle a présenté son travail de peintre lors de son exposition «  Peau de silence » (Berlin, Novembre 2018) qui a lieu à la suite d'une résidence de deux mois à la SIM residency, à Reykjavik, Islande (été 2018).
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
        <div class="titles-placement">
          <div class="index-lign-flex case-01">
            <span class="couple-numbers">
              <span>2</span>
              <span>0</span>
              <span>1</span>
              <span>8</span>
            </span>
            <span class="title">PEINTURES</span>
          </div>
          <div class="index-lign-flex case-02">
            <span class="couple-numbers">
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>0</span>
            </span>
            <span class="title">PEINTURES</span>
          </div>
          <div class="index-lign-flex case-03">
            <span class="couple-numbers">
              <span>2</span>
              <span>0</span>
              <span>1</span>
              <span>8</span>
            </span>
            <span class="title">FUSAINS</span>
          </div>
        </div>
      </div>
    </section>
    <section class="four-bloc-index">
      <div class="superposition">
        <img class="img-01" src="/images/index/homme-plongeon.png" alt="homme qui plonge">
        <img class="img-02" src="/images/index/illustrations-animations.png" alt="illustrations et animations">
      </div>
    </section>
    <section class="five-bloc-index">
      <div class="superposition">
        <img class="img-01" src="/images/index/interieur.png" alt="interieur">
        <img class="img-02" src="/images/index/salon.png" alt="un salon dessiné">
        <img class="img-03" src="/images/index/objet-design.png" alt="un objet design">
      </div>
    </section>
    <section class="six-bloc-index">
      <div class="superposition">
        <img class="img-01" src="/images/index/tee-shirt.png" alt="tee-shirt">
        <img class="img-02" src="/images/index/shop.png" alt="shop">
      </div>
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
          <div class="arrow-up" @click="up()">
            <img src="/images/index/arrow.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- <div style="margin-top: 150px; text-align: center">
      <p>Produit 1</p>
      <nuxt-link :to="`/teeshirt/produit1`" style="border: 1px solid #000; width: 20%; margin: 0 auto">
        Acheter
      </nuxt-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: '/images/index/femme-qui-danse.mp4',
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
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.page-index {
  height: 90vh;
  position: relative;
  @media (max-width: $breakpoint-tablet) {
    width: 100%;
    height: 93vh;
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
    background-color: #fff;
    z-index: 1000;
    animation: disappear 2s cubic-bezier(0.895,0.03,0.685,0.22) 1.5s forwards;
    @media (max-width: $breakpoint-tablet) {
      background: url("/images/preloader-mobile.png");
      background-color: #fff;
      z-index: 1000;
    }
  }
  @keyframes disappear{
    0%{
      opacity: 1;
      z-index: 1000;
    }
    100%{
      opacity: 0;
      z-index: -1000
    }
  }
  .first-bloc-index {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0 17vw 0 2.5vw;
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
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
      width: 30vw;
      position: absolute;
      bottom: 0;
      video {
        width: 100%;
        position: relative;
        right: 20%;
        top: 2%;
        @media (max-width: $breakpoint-tablet) {
          width: 69.867vw;
        }
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
      width: 100%;
      font-size: 2.714vw;
      font-weight: bold;
      margin: 7vw auto;
      position: relative;
      @media (max-width: $breakpoint-tablet) {
        display: none;
      }
      .title-placement {
        width: 30vw;
        position: absolute;
        right: 0;
        top: 20%;
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
      'text img';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 10vw 5vw 0 42vw;
    height: 32.429vw;
    @media (max-width: $breakpoint-tablet) {
      grid-template-areas:
      'img'
      'text';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      padding: 0 74px 0 53px;
      height: 167.200vw;
    }
    .text {
      grid-area: text;
      width: 23vw;
      margin: 0 auto;
      font-size: 0.972vw;
      text-align: justify;
      @media (max-width: $breakpoint-tablet) {
        font-size: 2.667vw;
        width: 68.267vw;
      }
    }
    .img {
      grid-area: img;
      @media (max-width: $breakpoint-tablet) {
        margin: 0 auto;
      }
      img {
        width: 22vw;
        @media (max-width: $breakpoint-tablet) {
          width: 68.267vw;
          margin: 65px 0 16px 0;
        }
      }
    }
  }
  .three-bloc-index {
    display: flex;
    padding: 0 17vw 0 2.5vw;
    height: 44.653vw;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      height: 143.467vw;
      padding: 9.600vw 13.067vw 13.600vw 6.400vw;
    }
    .images {
      width: 50%;
      position: relative;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        height: 107.333vw;
      }
      .img-01 {
        width: 36.6vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        @media (max-width: $breakpoint-tablet) {
          width: 82.667vw;
        }
      }
      .img-02 {
        width: 33.4vw;
        position: absolute;
        top: 12vw;
        left: 8vw;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 68.267vw;
          top: 40vw;
        }
      }
    }
    .titles-three-bloc {
      width: 50%;
      font-size: 2.639vw;
      font-weight: bold;
      position: relative;
      top: 25vw;
      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        top: 0;
        padding: 6.400vw 5.333vw 0 11.200vw;
      }
      .titles-placement {
        width: 28.056vw;
        margin: 0 0 0 auto;
        @media (max-width: $breakpoint-tablet) {
          margin: 0;
          width: 100%;
          gap: 2.133vw 5.067vw;
          display: grid;
          grid-template-areas:
            'case1 case2'
            'case3 .';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
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
    height: 54.583vw;
    display: block;
    padding: 0 5.486vw 0 0;
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
        width: 32.361vw;
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
        width: 34.722vw;
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
    height: 54.653vw;
    display: block;
    padding: 5% 0 0 2.361vw;
    @media (max-width: $breakpoint-tablet) {
      height: 146.667vw;
      padding: 0;
    }
    .superposition {
      position: relative;
      display: flex;
      justify-content: flex-start;
      height: 100%;
      .img-01 {
        position: absolute;
        width: 30.625vw;
        z-index: 2;
        bottom: 70%;
        @media (max-width: $breakpoint-tablet) {
          width: 65.067vw;
          bottom: 75%;
          right: 40%;
          transform: rotate(-41.09deg);
        }
      }
      .img-02 {
        position: absolute;
        left: 11%;
        width: 28.472vw;
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
        width: 25.764vw;
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
    height: 32vw;
    display: block;
    padding: 0 7.778vw 0 0;
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
        width: 41.528vw;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 64.533vw;
        }
      }
      .img-02 {
        position: absolute;
        width: 26.736vw;
        top: 80%;
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
    height: 101.389vw;
    display: block;
    padding: 0 0 7.014vw 7.569vw;
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
        width: 100vw;
        z-index: 1;
        @media (max-width: $breakpoint-tablet) {
          width: 113.733vw;
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
          padding: 0 0 5.667vw 2.667vw;
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
              width: 34.722vw;
              font-size: 2.639vw;
              font-weight: bold;
              padding-bottom: 15px;
              @media (max-width: $breakpoint-tablet) {
                font-size: 4vw;
                padding-bottom: 5px;
              }
            }
          }
        }
        .arrow-up {
          margin-right: 10.278vw;
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