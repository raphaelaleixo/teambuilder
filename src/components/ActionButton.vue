<template>
  <button @click="emitTrigger"
    class="action-button">
    <slot />
  </button>
</template>

<script>
  export default {
    methods: {
      emitTrigger () {
        this.$emit('trigger');
      }
    }
  }
</script>

<style lang="scss">
  .action-button {
    color: inherit;
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    font-weight: bolder;
    text-decoration: none;
    position: relative;
    padding-right: 1em;
    &:after {
      content: "";
      display: inline-block;
      top: 0;
      right: 0;
      width: 0.5em;
      height: 0.5em;
      border: 2px solid;
      border-bottom: none;
      border-left: none;
      transform: translate(0.25em, 0) rotate(45deg);
      transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
    &:hover {
      text-decoration: underline;
      &:after {
        transform: translate(0.5em, 0) rotate(45deg);
      }
    }
  }
</style>