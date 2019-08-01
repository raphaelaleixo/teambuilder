<template>
  <header class="header wrapper">
    <h1 class="header__title">{{titleComposed.text}}
      <span class="header__highlight">{{titleComposed.highlight}}</span>
    </h1>
    <p class="header__text">
      <slot />
    </p>
  </header>
</template>

<script>
  export default {
    props: {
      headerTitle: String
    },
    computed: {
      titleComposed () {
        const title = this.headerTitle.split('|');
        return {
          text: title[0],
          highlight: title[1]
        }
      }
    }
  }
</script>

<style lang="scss">
</style>