<template>
  <section>
    <div class="page-product">
      <img :src="products[id].img" alt="" />
      <div class="details-product">
        <span class="product-title">{{ products[id].name }}</span>
        <span class="product-price">{{ products[id].price }} € TTC</span>
        <span class="product-description">T-shirt blanc Barbara Penhouet</span>
        <span class="product-description">Print brodé de la série “nom de la série”</span>
        <span class="product-description">Fabriqué en France. 100% coton.</span>
        <div class="product-sizes">
          <span>XS</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
        </div>
        <button
        class="buy-button snipcart-add-item"
        :data-item-id="products[id].sku"
        :data-item-name="products[id].name"
        :data-item-price="products[id].price"
        :data-item-url="products[id].url" 
        :data-item-image="products[id].img"
        data-item-description="T-shirt blanc Barbara Penhouet"
        data-item-custom1-name="Taille"
        data-item-custom1-options="XS|S|M|L"
        >
          AJOUTER AU PANIER
        </button>
        <div class="product-delivery">LIVRAISON ET RETOUR
          <br/><br/>
          Nous livrons partout dans le monde!
          Compter en moyenne 5 jours ouvrés pour recevoir son colis en France métropolitaine, et en moyenne 10 jours ouvrés pour recevoir son colis dans les autres pays.
          <br/><br/>
          Nous acceptons les retours, échanges et remboursements. Voir les conditions
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
  import Footer from '@/components/Footer.vue';
  export default {
    components: {
      Footer
    },
    layout: 'default',
    data() {
      return {
        id: this.$route.params.id,
        products: [
          {
            sku: 0,
            img: '/images/shop/products/shop-0.jpg',
            name: 'T-SHIRT IMPRIME- xx NAME',
            price: 40,
            url: '/shop/0'
          },
          {
            sku: 1,
            img: '/images/shop/products/shop-1.jpg',
            name: 'T-SHIRT IMPRIME- xx NAME',
            price: 15,
          },
          {
            sku: 2,
            img: '/images/shop/products/shop-2.jpg',
            name: 'FOULARD- xx NAME',
            price: 60,
          },
          {
            sku: 3,
            img: '/images/shop/products/shop-3.jpg',
            name: 'FOULARD- xx NAME',
            price: 60,
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;

.page-product {
  @media (max-width: $breakpoint-tablet) {
    padding: 7.200vw 18.933vw;
  }
  img {
    @media (max-width: $breakpoint-tablet) {
      width: 64vw;
    }
  }
  .details-product {
    @media (max-width: $breakpoint-tablet) {
      width: 49.600vw;
      margin: 0 auto;
      padding-top: 10.667vw;
    }
    span {
      @media (max-width: $breakpoint-tablet) {
        display: block;
      }
    }
    .product-title {
      @media (max-width: $breakpoint-tablet) {
        font-size: 5.333vw;
        font-weight: bold;
      }
    }
    .product-price {
      @media (max-width: $breakpoint-tablet) {
        font-size: 4vw;
        font-weight: bold;
        padding: 5.600vw 0 3.733vw;
      }
    }
    .product-description {
      @media (max-width: $breakpoint-tablet) {
        font-size: 2.667vw;
      }
    }
    .product-sizes {
      @media (max-width: $breakpoint-tablet) {
        display: flex;
        justify-content: space-between;
        padding: 4vw 0;
      }
      span {
        @media (max-width: $breakpoint-tablet) {
          border: 1px solid #EF0311;
          width: 9.867vw;
          height: 8.533vw;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 5.333vw;
        }
      }
    }
    button {
      background-color: #EF0311;
      color: #ffffff;
      border: none;
      width: 100%;
      height: 7.733vw;
      font-size: 2.667vw;
      margin-bottom: 6.400vw;
    }
    .product-delivery {
      color: #000000;
      font-size: 2.667vw;
    }
  }
}
</style>