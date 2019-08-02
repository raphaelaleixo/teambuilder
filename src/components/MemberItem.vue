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
      <a class="member__open-bio"
        href="#"
        @click.prevent="showBio">show bio</a>
    </div>
    <div class="member__bio bio"
      @keyup.esc="hideBio"
      :class="{'bio--show':bio}">
      <div class="bio__wrapper">
        <a href="#"
          class="bio__close"
          @click.prevent="hideBio">close</a>
        <h3 class="bio__name">{{member.name}}</h3>
        <p class="bio__meta">{{member.jobtitle}}</p>
        <p class="bio__meta">{{member.phone}}</p>
        <p class="bio__meta">{{member.email}}</p>
        <p class="bio__info"
          v-html="member.bio"></p>
      </div>
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
        added: false,
        bio: false
      }
    },
    methods: {
      toggleMember () {
        if (this.added)
          this.$emit('added', this.member.key);
        else
          this.$emit('removed', this.member.key);
      },
      showBio () {
        this.bio = true;
      },
      hideBio () {
        this.bio = false;
      }
    }
  }
</script>

<style lang="scss">
  .member__item {
    background-color: var(--green);
    background-position: top left;
    background-repeat: no-repeat;
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
      background-size: cover;
      width: calc(50% - 0.5em);
      height: 15em;
      &:nth-child(4n) {
        margin-right: 1em;
      }
      &:nth-child(2n) {
        margin-right: 0em;
      }
    }
    @media screen and (max-width: 400px) {
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

  .member__jobtitle,
  .member__bio {
    margin: 0;
    font-size: 0.8em;
  }

  .member__open-bio {
    color: var(--blue);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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
  .bio {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-out;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--green);
      opacity: 0.7;
    }
    &.bio--show {
      opacity: 1;
      pointer-events: all;
    }
  }
  .bio__wrapper {
    height: 50vh;
    width: 50vw;
    max-width: 75ch;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    z-index: 2;
    overflow: auto;
    padding: 2em;
    line-height: 1.6;
  }

  .bio__close {
    position: absolute;
    right: 2em;
    top: 2em;
    font-family: var(--title-font);
    color: var(--blue);
    text-transform: uppercase;
    text-decoration: none;
  }

  .bio__name {
    margin: 0;
    font-size: 2em;
    font-family: var(--title-font);
    text-transform: uppercase;
  }

  .bio__meta {
    margin: 0;
  }
</style>