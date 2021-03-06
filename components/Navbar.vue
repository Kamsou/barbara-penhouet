<template>
  <section class="fixed">
    <div class="page_navbar">
      <nuxt-link to="/" class="logo-link">
        <img
          class="navbar_logo"
          src="/images/logo.png"
          alt="Barbara Penhouet"
        />
      </nuxt-link>
      <Burger class="menu-mobile"/>
      <div class="navbar_menu">
        <nuxt-link class="relative" to="/painting-2017-2018/">
          <div class="menu-painter">
            <span data-text="Peinture">Peinture</span>
          </div>
          <div class="sub-menu">
            <ul class="sub-menu-titles">
              <li>
                <nuxt-link to="/painting-2019-2020/">
                  Peintures 2019-20
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/painting-2017-2018/">
                  Peintures 2017-18
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nuxt-link>
        <nuxt-link to="/illustrations-et-animations/">
          <div>
            <span data-text="Illustrations">Illustrations</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/shop/">
          <div>
            <span data-text="Shop">Shop</span>
          </div>
        </nuxt-link>
        <a href="https://www.instagram.com/barbarabara_p/" rel="noopener noreferrer" target="_blank">
          <img
          class="navbar_instagram"
          src="/images/instagram.svg"
          alt="Instagram"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Burger from '@/components/Burger.vue';
  export default {
    components: {
      Burger,
    }, 
  }
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1025px;
.fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 10;
  .page_navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    @media (max-width: $breakpoint-tablet) {
      padding: 9px 34px 0 23px;
      height: 100%;
      width: 100%;
    }
    .menu-mobile {
      display: none;
      @media (max-width: $breakpoint-tablet) {
        display: block;
      }
    }
    .logo-link {
      width: 30%;
      .navbar_logo {
        max-width: 336px;
        margin-right: 193px;
        @media (max-width: $breakpoint-tablet) {
          padding: 0;
          width: 35.733vw;
          position: relative;
        }
      }
    }
    .navbar_menu {
      width: 677px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
}

.relative {
  position: relative;
}

.sub-menu {
  position: absolute;
  top: 100%;
  padding: 0 20px 20px 10px;
  left: -10px;
  opacity: 0;
  min-width: 200px;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;
}

.sub-menu-titles {
  list-style: none;
  padding: 0;
}

.sub-menu-titles li {
  padding-top: 20px;
}

.relative:hover .sub-menu {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
</style>