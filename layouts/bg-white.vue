<template>
  <div class="page">
    <Navbar />
    <Nuxt />
    <div id="snipcart" data-api-key="MjMyMzQ5Y2EtNTA0Yi00YWQ0LTlkNGEtMTY5MGFhN2ExOTVhNjM3MzMxODY5ODY3OTIyMDk0" hidden></div>
    <script src="https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js"></script>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    components: {
      Navbar
    },
  }
</script>
<style lang="scss">
$breakpoint-tablet: 1025px;
html {
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: block;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  background-color: #ffffff;
  color: #EF0311;
  height: 100%;
  @media (min-width: $breakpoint-tablet) {
    width: 1440px;
    margin: 0 auto;
  }
}

a {
  text-decoration: none;
  color: #EF0311;
}
</style>
