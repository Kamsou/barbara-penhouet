<template>
  <Swiper class="swiper" :options="swiperOption">
    <!-- <SwiperSlide><img src="/images/painter/painter-4.jpg" alt="painter-2" /></SwiperSlide>
    <SwiperSlide><img src="/images/painter/painter-4.jpg" alt="painter-2" /></SwiperSlide>
    <SwiperSlide><img src="/images/painter/painter-4.jpg" alt="painter-2" /></SwiperSlide>
    <SwiperSlide><img src="/images/painter/painter-4.jpg" alt="painter-2" /></SwiperSlide> -->
    <SwiperSlide v-for="picture in pictures" :key="picture.index">
      <img :src="picture.src" alt="" />
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
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.swiper-container {
  margin: 30px 0;
}
.swiper-slide {
  width: auto;
  height: 456px;
  cursor: pointer;
  @media (max-width: $breakpoint-tablet) {
    width: 314px;
    height: initial;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: auto;
    height: 100%;
    @media (max-width: $breakpoint-tablet) {
      width: 100%;
      height: auto;
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

</style>