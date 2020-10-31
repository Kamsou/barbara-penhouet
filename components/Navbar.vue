<template>
  <div class="page_navbar">
    <img
      class="navbar_logo"
      src="/images/logo.svg"
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
.page_navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 188px 0 86px;
  height: 15vh;
  .navbar_menu {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 180px;
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