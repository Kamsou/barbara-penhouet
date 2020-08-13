<template>
  <div>
    <h1>Contact</h1>
    <h2 v-for="(contact, index) in allContacts" :key="index">
      {{contact.paragraphe}}
    </h2>

    <div style="margin-top: 150px; text-align: center">
      <p>Produit 1</p>
      <nuxt-link :to="`/teeshirt/produit1`" style="border: 1px solid #000; width: 20%; margin: 0 auto">acheter</nuxt-link>
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

</style>