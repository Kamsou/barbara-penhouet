<template>
  <section class="page-painter-2020" ref="smoothscroll">
    <article class="banner">
      <h2 :class="{ fadeSlowly: titleDissapear }">
        PEINTURES 2019-2020
      </h2>
    </article>
    <article class="first-row">
      <div class="text-bloc-1">
        <span class="bold">Le travail de Barbara P.</span> est un savant mélange entre un regard inédit sur les corps en peinture et une explosion de couleur. Dans sa série XXX elle pose son regard sur nos intérieurs, nous invitant à prendre un peu de recul pour observer nos contradictions. 
        <br><br>
        De la préparation de la toile aux temps de séchages, qui varient selon les couleurs mais aussi les saisons, la peinture est une pratique particulièrement longue. Chez Barbara P., elle s’installe sur la toile par de grands aplats d’abord. C’est d’ailleurs de la réserve, cette première sous-couche fine et laissée nue par endroits, que vient la lumière si caractéristique de son travail. Plus les couches se succèdent et s’épaississent, plus sa touche se resserre pour s’approcher des détails et creuser, doucement la profondeur du tableau. 
        <br><br>
        Cette temporalité de la peinture donne à Barbara P. le temps de composer son regard autant que sa toile, de faire des pas de côtés, de prendre un peu de recul et de modeler sa vision tout en se posant à contre courant d’une société consumériste de plus en plus rapide. 
        <br><br>
        Pour Barbara P., peindre c’est prendre le temps d’observer.<br>
        Avec cette série, elle pose justement son regard sur une de nos plus grandes contradictions du moment : celle d’abandonner, consciemment ou non, nos intimités. L’intimité de nos foyers, que l’on montre, que l’on affiche, que l’on présente, que l’on compare et celle de nos corps. Consciemment ou non, la société de la transparence nous atteint toutes et tous. Le regard de l’autre vient juger nos meubles, nos décorations, nos maisons autant que nos corps qui deviennent des objets comme les autres. Au point que nous devenons les témoins de nos propres reflets transformés par les retouches ou les pauses, et les acteurs de nos déformations.
        <br><br>
        <br><br>
        Suite du texte ci dessous
      </div>
      <div class="image-bloc-1">
        <img src="/images/painter/painter-2019-bloc-1.jpg" alt=""/>
      </div>
    </article>
    <article class="second-row">
      <SwiperItem :pictures="pictures" />
    </article>
    <article class="third-row">
      <div class="text-bloc-3">
        C’est là que le regard de Barbara P. change la donne dans l’histoire de la peinture.   
        Les corps qu’elle présente, passent de ce statut d’objet à sujet. Dans des cadres qui sont presque cinématographiques et à mesure qu’elle les peint, Barbara P. redonne à ces corps une place dans l’espace et dans le temps. Les personnages sont captés dans un mouvement léger, presque infime et profondément vivant. D’une manière si subtile que lorsqu’on surprend une poitrine qui se soulève pour respirer, le sursaut d’un sanglot ou le passage d’une brise légère dans l’herbe, on se demande si on ne l’a pas rêvé. 
        <br><br>
        Il se créer une telle proximité, une telle intimité entre le regardeur et la figure au centre de la toile, qu’on se laisse à croire qu’on fait parti de la scène. 
        <br><br>
        XXX de Barbara P. nous invite à regarder nos contradictions avec bienveillance, à les observer, les interroger et les comprendre. Plus que tout, avec cette série, elle nous rend nos corps, nos intérieurs, nos intimités. Avec respect et pudeur, elle nous rappelle, que nous, et nous seuls pouvons décider que faire et que penser de nos reflets. 
        <br><br>
        <br><br>
        Margo Coïc
        <br><br>
        <br><br>
        N'hésitez pas à m'écrire pour recevoir mon portfolio et la liste de prix.
      </div>
      <div class="image-bloc-3">
        <img src="/images/painter/painter-2019-bloc-3.jpg" alt=""/>
      </div>
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
  .bold {
    font-family: 'Work Sans';
    font-weight: 700;
  }
  .first-row {
    font-family: 'Work Sans';
    display: flex;
    justify-content: space-between;
    padding: 186px 95px 63px;
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      padding: 8.800vw 8.533vw;
    }
    .text-bloc-1 {
      text-align: justify;
      max-width: 50%;
      font-size: 14px;
      margin-right: 100px;
      @media (max-width: $breakpoint-tablet) {
        max-width: 100%;
        margin-right: 0;
      }
    }
    .image-bloc-1  {
      max-width: 50%;
      @media (max-width: $breakpoint-tablet) {
        max-width: 100%;
        margin-top: 10px;
      }
      img {
        width: 100%;
      }
    }
  }
  .second-row {
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
  .third-row {
    font-family: 'Work Sans';
    display: flex;
    justify-content: space-between;
    padding: 73px 95px;
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      padding: 8.800vw 8.533vw;
    }
    .text-bloc-3 {
      text-align: justify;
      max-width: 50%;
      font-size: 14px;
      margin-right: 100px;
      @media (max-width: $breakpoint-tablet) {
        max-width: 100%;
        margin-right: 0;
      }
    }
    .image-bloc-3  {
      max-width: 50%;
      @media (max-width: $breakpoint-tablet) {
        max-width: 100%;
        margin-top: 10px;
      }
      img {
        width: 100%;
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