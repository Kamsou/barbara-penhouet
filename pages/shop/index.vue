<template>
  <section ref="smoothscroll">
    <div class="page-shop">
      <div class="item" v-for="product in shop.products" :key="product.id">
        <nuxt-link :to="`/shop/${product.id}`">
          <img :src="product.image.url" />
        </nuxt-link>
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }} EUR</h4>
      </div>
    </div>
    <Footer :up="up"/>
  </section>
</template>

<script>
  export default {
    layout: 'default',
    async asyncData({ $prismic, error }) {
      const shop = (
        await $prismic.api.getSingle('shop')
      ).data
      if (shop) {
        return { shop }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
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
    },
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-shop {
  display: flex;
  flex-wrap: wrap;
  column-gap: 71px;
  row-gap: 74px;
  width: 100%;
  padding: 220px 124px;
  @media (max-width: $breakpoint-tablet) {
    column-gap: 5.333vw;
    justify-content: space-between;
    row-gap: 5.333vw;
    padding: 21.333vw 8.800vw;
  }
  .item {
    width: 350px;
    text-align: center;
    font-size: 14px;
    @media (max-width: $breakpoint-tablet) {
      width: 38.400vw;
      font-size: 2.133vw;
    }
    a img {
      width: 100%;
    }
    h3 {
      font-weight: 400;
      padding-top: 10px;
    }
    h4 {
      font-weight: bold;
    }
  }
}
</style>