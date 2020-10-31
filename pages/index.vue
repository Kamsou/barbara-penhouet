<template>
  <div class="page_index">
    <!-- PRELOADER -->
    <div class="loading-page"></div>
    <!-- -->
    <div class="index_bloc">
      <div class="index_lign_flex">
        <span>BARBARA</span>
        <span>P</span>
        <span>.</span>
      </div>
      <div class="index_lign_flex">
        <span>CREATIVE</span>
        <span>STUDIO</span>
      </div>
      <div class="index_lign_flex">
        <span>BASED</span>
        <span>IN</span>
        <span>PARIS</span>
      </div>
    </div>
    <!-- <h1>Contact</h1>
    <h2 v-for="(contact, index) in allContacts" :key="index">
      {{contact.paragraphe}}
    </h2> -->

    <div style="margin-top: 150px; text-align: center">
      <p>Produit 1</p>
      <nuxt-link :to="`/teeshirt/produit1`" style="border: 1px solid #000; width: 20%; margin: 0 auto">
        Acheter
      </nuxt-link>
    </div>
  </div>
</template>

<script>

  import allContacts from '~/queries/getContact.gql';

  export default {
    apollo: {
      allContacts: {
        prefetch: true,
        query: allContacts
      },
    }
  }
</script>

<style lang="scss" scoped>
.page_index {
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: url("/images/preloader.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: all 2s;
    background-color: #fff;
    animation: disappear 2s cubic-bezier(0.895,0.03,0.685,0.22) 1.5s forwards;
  }
  @keyframes disappear{
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  .index_bloc {
    width: 30vw;
    font-size: 2.714vw;
    font-weight: bold;
    margin: 100px auto;
    .index_lign_flex {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>