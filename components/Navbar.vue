<template>
  <div class="page_navbar">
    <img
      class="navbar_logo"
      src="/images/logo.png"
      alt="Barbara Penhouet"
    />
    <Burger class="menu-mobile"/>
    <div class="navbar_menu">
      <div>
        <span data-text="Art">Art</span>
      </div>
      <div>
        <span data-text="Illustrations">Illustrations</span>
      </div>
      <div>
        <span data-text="Intérieur">Intérieur</span>
      </div>
      <div>
        <span data-text="Shop">Shop</span>
      </div>
      <a href="https://www.instagram.com/barbarabara_p/" target="_blank">
        <img
        class="navbar_instagram"
        src="/images/instagram.svg"
        alt="Instagram"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Burger from '@/components/Burger.vue';
  export default {
    components: {
      Burger,
    }
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.page_navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 188px 0 86px;
  height: 15vh;
  @media (max-width: $breakpoint-tablet) {
    padding: 9px 34px 0 23px;
    height: 100%;
  }
  .menu-mobile {
    display: none;
    @media (max-width: $breakpoint-tablet) {
      display: block;
    }
  }
  .navbar_logo {
    width: 16.181vw;
    position: fixed;
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
      width: 35.733vw;
      position: relative;
    }
  }
  .navbar_menu {
    position: fixed;
    right: 148px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 180px;
    z-index: 999;
    @media (max-width: $breakpoint-tablet) {
      position: relative;
      display: none;
    }
    div {
      overflow: hidden;
      &:hover span {
        transform: translateY(-100%);
        transition: 0.5s;
      }
      span {
        display: inline-block;
        transition: 0.5s;
        transform: translateY(0);
        cursor: pointer;
        &::before {
          content: attr(data-text);
          position: absolute;
          transform: translateY(100%);
        }
      }
    }
    img {
      cursor: pointer;
    }
  }
}
</style>