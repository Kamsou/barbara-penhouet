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
  margin-top: 30px;
}
.swiper-slide {
  width: 394px;
  cursor: pointer;
  @media (max-width: $breakpoint-tablet) {
    width: 314px;
  }
  img {
    width: 100%;
    @media (max-width: $breakpoint-tablet) {
      width: 100%;
    }
  }
}
.swiper-button-prev, .swiper-button-next {
  display: none;
  @media (max-width: $breakpoint-tablet) {
    display: initial;
  }
}

</style>