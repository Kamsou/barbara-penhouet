<template>
  <div v-if="loading" class="loading-page"></div>
</template>

<script>
  export default {
    name: 'Preloader',
    data() {
      return {
        loading: false,
      }
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
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
}
</style>