<template>
  <div class="page-white">
    <Navbar />
    <Nuxt class="content" />
    <section v-if="seeInputImage" class="enter">
      <div
        class="image-enter"
        :class="imgIsLoaded ? 'image-enter-show' : ''"
        loading="lazy"
        @load="imgLoadedMethod"
      />
      <div class="bloc-text">
        <img class="enter-logo" src="/images/logo.svg" />
        <button class="enter-button" @click="disappears">ENTRER</button>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Navbar from '@/components/Navbar.vue';

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        imgIsLoaded: false
      }
    },
    computed: {
      ...mapState([
        'seeInputImage'
      ])
    },
    methods: {
      disappears() {
        this.$store.commit('isOkayPreload', false)
        document.body.classList.remove("is-blocked");
      },
      imgLoadedMethod () {
        this.imgIsLoaded = true
      },
    },
    mounted() {
      if (this.$route.name === 'index' && this.seeInputImage) {
        document.body.classList.add("is-blocked");
      }
    }
  }
</script>
<style lang="scss">
$breakpoint-tablet: 1025px;

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.is-blocked {
  overflow: hidden;
}

.enter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: white;
}

.image-enter {
  background-size: contain;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-image: url('/images/enter.jpg');
  height: 100vh;
  @media (max-width: $breakpoint-tablet) {
    background-size: cover;
    background-position: right;
  }
}

img.image-enter {
  opacity: 0;
  transition: 3s;
}

img.image-enter-show {
  opacity: 1;
}

.bloc-text {
  position: absolute;
  bottom: 30%;
  right: 10%;
  transform: translateY(-70%);
  width: 517px;
  text-align: center;
  @media (max-width: $breakpoint-tablet) {
      width: 60.7222vw;
      bottom: 0vw;
      right: 18.6666vw;
    }
  .enter-logo {
    width: 517px;
    @media (max-width: $breakpoint-tablet) {
      width: 60.7222vw;
    }
  }

  .enter-button {
    background: transparent;
    border: 1px solid #EF0311;
    color: #EF0311;
    padding: 20px 20px;
    font-weight: bold;
    width: 205px;
    font-size: 20px;
    cursor: pointer;
    transition: all 170ms ease-in-out;
    &:hover {
      background: #EF0311;
      color: #ffffff;
    }
    @media (max-width: $breakpoint-tablet) {
      font-size: 5.3888vw;
      width: 35.8888vw;
      padding: 2.7361vw 5.4305vw;
    }
  }
}

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

body {
  margin: 0;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  padding-top: 10vh;
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
