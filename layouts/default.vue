<template>
  <div class="page-white">
    <Navbar />
    <Nuxt class="content" />
    <div id="snipcart" :data-api-key="apiKey"></div>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        apiKey: process.env.SNIPCART_API_KEY || 'MjMyMzQ5Y2EtNTA0Yi00YWQ0LTlkNGEtMTY5MGFhN2ExOTVhNjM3MzMxODY5ODY3OTIyMDk0'
      }
    }
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
  background-color: #FCF3F4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  padding-top: 15vh;
  @media (max-width: $breakpoint-tablet) {
    padding-top: 14vw;
  }
}

.page-white {
  background-color: #FCF3F4;
  color: #EF0311;
  height: 100%;
  width: 100%;
  @media (min-width: $breakpoint-tablet) {
    max-width: 1440px;
    margin: 0 auto;
  }
}

a {
  text-decoration: none;
  color: #EF0311;
}
</style>
