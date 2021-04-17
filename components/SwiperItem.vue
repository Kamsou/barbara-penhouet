<template>
  <Swiper class="swiper" :options="swiperOption">
    <SwiperSlide v-for="picture in pictures" :key="picture.index">
      <img :src="picture.src" alt="" />
      <div class="item__overlay">
        <span class="item__alt">{{ picture.alt }}</span>
      </div>
    </SwiperSlide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    pictures: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      swiperOption: {
        // centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        direction: 'horizontal',
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        loop: false,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.swiper-container {
  margin: 30px 0 0 93px;
  height: 100%;
  @media (max-width: $breakpoint-tablet) {
    height: 378px;
    margin: 30px 0 30px 0;
  }
}
.swiper-slide {
  width: auto;
  height: 520px;
  cursor: pointer;
  @media (max-width: $breakpoint-tablet) {
    width: 314px;
    height: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8vw;
  }
  &:hover,
  &:focus {
    .item__overlay {
      z-index: 1;
      opacity: 1;
    }
  }
  img {
    min-width: 200px;
    height: 100%;
    @media (max-width: $breakpoint-tablet) {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.swiper-button-prev, .swiper-button-next {
  display: none;
  @media (max-width: $breakpoint-tablet) {
    display: initial;
  }
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #EF0311;
  border-radius: 50%;
  height: 35px;
  top: 45%;
  width: 35px;
  &::after {
    display: none;
  }
  &:focus {
    outline: none;
  }
}
.swiper-button-prev,
.swiper-container-rtl {
  background-image: url('/images/illustrations-mobile/arrow.svg');
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  background-position: center;
  background-repeat: no-repeat;
  left: 5px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url('/images/illustrations-mobile/arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  left: auto;
  right: 5px;
}

.item__overlay {
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms;
  background-color: rgba(255,255,255,0.65);
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  transition: .3s ease-in-out;
}

.item__alt {
  max-width: 167px;
  font-weight: bold;
  text-align: center;
  font-size: 1.5vw;
  @media (max-width: $breakpoint-tablet) {
    font-size: 5vw;
  }
}

</style>