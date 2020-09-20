<template>
  <div class="page_navbar">
    <img
      class="navbar_logo"
      src="/images/logo.svg"
      alt="Barbara Penhouet"
    />
    <div class="navbar_menu">
      <div>
        <span data-text="Painter">Painter</span>
      </div>
      <div>
        <span data-text="Illustrations">Illustrations</span>
      </div>
      <div>
        <span data-text="Interior">Interior</span>
      </div>
      <div>
        <span data-text="Shop">Shop</span>
      </div>
      <img
        class="navbar_mail"
        src="/images/mail.svg"
        alt="Mail"
      />
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
  padding: 50px 162px 0 90px;
  .navbar_menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 50px;
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