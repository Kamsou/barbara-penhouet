<template>
  <div>
    <h2 v-for="(contact, index) in allContacts" :key="index">
      {{contact.paragraphe}}
    </h2>
  </div>
</template>

<script>

  import gql from 'graphql-tag'

  export default {
    apollo: {
      allContacts: gql`{
        allContacts {
          paragraphe  
        }
      }`
    }
  }
</script>

<style lang="scss" scoped>

</style>