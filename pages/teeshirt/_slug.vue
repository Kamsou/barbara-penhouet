<template>
  <div>
    <div
    :data-item-id="product.sku"
    :data-item-name="product.name"
    :data-item-price="product.price"
    :data-item-image="product.image"
    :data-item-url="`https://snipcart-nuxt-pwa.netlify.com/`"
    >
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>