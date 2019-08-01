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
    padding: 0 2em 5em;
  }
  p {
    max-width: 75ch;
  }
  .wrapper {
    margin: 0 auto;
    max-width: 65em;
  }
</style>
