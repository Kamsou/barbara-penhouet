<template>
  <div>
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
<style>
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
  background-color: #FCF3F4;
  color: #EF0311;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
