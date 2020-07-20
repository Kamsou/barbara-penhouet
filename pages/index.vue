<template>
  <div>
    <h2 v-for="(contact, index) in allContacts" :key="index">
      {{contact.paragraphe}}
    </h2>
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