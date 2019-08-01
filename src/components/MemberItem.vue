<template>
  <div class="member__item"
    :style="{'background-image':'url('+member.picture+')'}">
    <input type="checkbox"
      v-if="!readonly"
      @change="toggleMember"
      v-model="added" />
    <h3 class="member__name">{{member.name}}</h3>
    <p class="member__jobtitle">{{member.jobtitle}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      member: Object,
      readonly: Boolean
    },
    data () {
      return {
        added: false
      }
    },
    methods: {
      toggleMember () {
        if (this.added)
          this.$emit('added', this.member.key);
        else
          this.$emit('removed', this.member.key);
      }
    }
  }
</script>

<style lang="scss">
  .member__item {
    width: calc(25% - 1em);
    margin: 0 1em 1em 0;
    padding: 1em;
    transition: all 1s;
  }
</style>