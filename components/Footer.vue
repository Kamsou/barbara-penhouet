<template>
  <section>
    <div class="footer">
      <div class="links">
        <a href="mailto:barbarapenhouetstudio@gmail.com" target="_blank">
          <span>Contact</span>
        </a>
        <a href="https://www.facebook.com/Barbara-P-354201155083653/" target="_blank">
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/barbarap._illustration/" target="_blank">
          <span>Instagram</span>
        </a>
      </div>
      <div class="arrow-up" @click="up">
        <img src="/images/index/arrow.svg" alt="">
      </div>
      <div class="arrow-up-mobile" @click="up">
        <img src="/images/index/arrow.svg" alt="">
      </div>
    </div>
    <div class="footer-admin">
      <span>Politique de confidentalité</span>
      <span>Mentions Légales</span>
      <span>CGV</span>
      <span>
        Développement:
        <a
          class="footer-underline"
          href="https://camillecoutens.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Camille Coutens
        </a>
      </span>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      up: {
        type: Function,
        default: () => {}
      },
    },
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  z-index: 2;
  padding: 207px 90px 90px;
  @media (max-width: $breakpoint-tablet) {
    padding: 0 0 5.667vw 8.800vw;
  }
  .links {
    a {
      text-decoration: none;
      color: #EF0311;
      &:hover {
        color: white;
      }
      span {
        display: block;
        width: 501px;
        font-size: 38px;
        font-weight: bold;
        padding-bottom: 15px;
        @media (max-width: $breakpoint-tablet) {
          font-size: 4vw;
          padding-bottom: 5px;
          width: 100%;
        }
      }
    }
  }
  .arrow-up {
    margin-right: 20px;
    cursor: pointer;
    @media (max-width: $breakpoint-tablet) {
      display: none;
    }
  }
  .arrow-up-mobile {
    display: none;
    @media (max-width: $breakpoint-tablet) {
      display: block;
      position: fixed;
      bottom: 9.600vw;
      right: 6.933vw;
      z-index: 5;
    }
    img {
      @media (max-width: $breakpoint-tablet) {
        width: 7.200vw;
      }
    }
  }
}
.footer-admin {
  display: block;
  padding: 0 8vw 5.333vw;
  font-size: 4.200vw;
  @media (min-width: $breakpoint-tablet) {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  span {
    display: block;
    margin-bottom: 4vw;
  }
}

.footer-underline {
  &:hover {
    text-decoration: underline;
  }
}
</style>