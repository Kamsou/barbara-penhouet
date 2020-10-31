<template>
  <div class="page_navbar">
    <img
      class="navbar_logo"
      src="/images/logo.png"
      alt="Barbara Penhouet"
    />
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
        <img
        class="navbar_instagram"
        src="/images/instagram.svg"
        alt="Instagram"
      />
    </div>
  </div>
</template>

<script>
  export default {
    
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
  .navbar_logo {
    width: 16.181vw;
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
      width: 35.733vw;
    }
  }
  .navbar_menu {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 180px;
    @media (max-width: $breakpoint-tablet) {
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
        &::before {
          content: attr(data-text);
          position: absolute;
          transform: translateY(100%);
        }
      }
    }
  }
}
</style>