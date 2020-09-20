<template>
  <div class="page_navbar">
    <img
      class="navbar_logo"
      src="/images/logo.svg"
      alt="Barbara Penhouet"
    />
    <div class="navbar_menu">
      <span>Painter</span>
      <span>Illustrations</span>
      <span>Interior</span>
      <span>Shop</span>
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
  }
}
</style>