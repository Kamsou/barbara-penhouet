<template>
  <div class="page-shop">
    <div class="item" v-for="product in products" :key="product.id">
      <nuxt-link :to="`/shop/${product.id}`">
        <img :src="product.img" />
      </nuxt-link>
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price }} EUR</h4>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            id: 0,
            img: '/images/shop/products/shop-0.jpg',
            name: 'T-SHIRT IMPRIME- xx NAME',
            price: 40,
          },
          {
            id: 1,
            img: '/images/shop/products/shop-1.jpg',
            name: 'T-SHIRT IMPRIME- xx NAME',
            price: 15,
          },
          {
            id: 2,
            img: '/images/shop/products/shop-2.jpg',
            name: 'FOULARD- xx NAME',
            price: 60,
          },
          {
            id: 3,
            img: '/images/shop/products/shop-3.jpg',
            name: 'FOULARD- xx NAME',
            price: 60,
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-shop {
  display: flex;
  justify-content: center;
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