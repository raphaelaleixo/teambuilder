<template>
  <div class="member__item"
    :class="{'member__item--added':added}"
    :style="{'background-image':'url('+member.picture+')'}">
    <input type="checkbox"
      v-if="!readonly"
      :id="'member'+member.key"
      class="member__add"
      @change="toggleMember"
      v-model="added" />
    <label :for="'member'+member.key"
      v-if="!readonly"
      class="member__add--label"
      title="add to the team">add to the team</label>
    <div class="member__info">
      <h3 class="member__name">{{member.name}}</h3>
      <p class="member__jobtitle">{{member.jobtitle}}</p>
    </div>
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
    background-color: var(--green);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    width: calc(25% - 0.75em);
    margin: 0 1em 1em 0;
    padding: 1em;
    transition: all 1s;
    position: relative;
    height: 10em;
    line-height: 1.1;
    &:nth-child(4n) {
      margin-right: 0;
    }
    &.member__item--added {
      box-shadow: inset 0 0 0 0.5em var(--green);
    }
    @media screen and (max-width: 1024px) {
      width: calc(50% - 0.5em);
      height: 15em;
      &:nth-child(4n) {
        margin-right: 1em;
      }
      &:nth-child(2n) {
        margin-right: 0em;
      }
    }
    @media screen and (max-width: 1024px) {
      width: calc(100%);
      margin: 0 0 1em;
    }
  }

  .member__info {
    width: 50%;
  }

  .member__name {
    font-family: var(--title-font);
    text-transform: uppercase;
    font-size: 1em;
    margin: 0;
  }

  .member__jobtitle {
    margin: 0;
    font-size: 0.8em;
  }

  .member__add {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }

  .member__add--label {
    display: block;
    text-indent: -9999px;
    background: #fff;
    width: 1.5em;
    height: 1.5em;
    margin: 0 0 0.5em;
    position: relative;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      width: 80%;
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: var(--green);
      transition: transform 0.3s ease-out;
    }
    .member__add:checked + &:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
</style>