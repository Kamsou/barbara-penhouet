<template>
  <div>
    <div v-for="product in products" :key="product.id">
    <button
    class="buy-button snipcart-add-item"
    :data-item-id="product.sku"
    :data-item-name="product.name"
    :data-item-price="product.price" 
    :data-item-url="`http://localhost:3000/`"
    >
    J'en veux
    </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            sku: 'product-1',
            name: 'Poney',
            price: '100'
          },
          {
            id: 2,
            sku: 'product-2',
            name: 'Poney',
            price: '200'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>