<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  :root {
    --text-font: "Noto Sans";
    --title-font: "Oswald";
    --green: #90e3b6;
    --light-green: rgb(216, 255, 235);
    --light-gray: #e0e3e5;
    --blue: #4f00cf;
    --dark-blue: #091426;
  }
  * {
    box-sizing: border-box;
  }
  [v-cloak] {
    display: none;
  }
  body {
    font: normal 16px/1.6 var(--text-font);
    margin: 0;
    padding: 0 2em 15em;
  }
  p {
    max-width: 75ch;
  }
  .wrapper {
    margin: 0 auto;
    max-width: 65em;
  }
  .form__item {
    position: relative;
    margin: 0 0 1em;
  }

  .form__input {
    display: block;
    width: 100%;
    max-width: 75ch;
    padding: 1.5em;
    font-family: var(--text-font);
    font-size: 1em;
    border: none;
    background: var(--light-gray);
    resize: vertical;
  }

  .form__label {
    font-family: var(--title-font);
    text-transform: uppercase;
    position: absolute;
    font-size: 1em;
    top: 1.35rem;
    left: 1.5rem;
    transform-origin: 0 0;
    transition: transform 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    .form__input:focus + &,
    .form__input:valid + & {
      color: var(--blue);
      transform: scale(0.65) translateY(-1.45em);
    }
  }
</style>
