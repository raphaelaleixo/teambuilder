<template>
  <header class="header wrapper">
    <signifly class="header__logo" />
    <h1 class="header__title">{{titleComposed.text}}
      <span class="header__highlight">{{titleComposed.highlight}}</span>
    </h1>
    <p class="header__text">
      <slot />
    </p>
  </header>
</template>

<script>
  import Signifly from '@/components/Signifly';
  export default {
    components: {
      Signifly
    },
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
  .header {
    position: relative;
  }
  .header__logo {
    width: 5em;
    position: absolute;
    top: 0;
    right: 0;
  }
  .header__title {
    font-family: var(--title-font);
    text-transform: uppercase;
    font-size: 4em;
    letter-spacing: -1px;
    line-height: 1;
    margin: 1em 0 0;
    padding-right: 6rem;
  }
  .header__highlight {
    display: block;
    color: var(--green);
  }
</style>