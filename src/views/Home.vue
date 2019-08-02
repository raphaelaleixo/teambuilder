<template>
  <main class="">
    <page-header header-title="Let's build|something together">
      We are pretty confident we can challenge your assumptions and help shape a good process through which to develop insights, skills and an extremely satisfying outcome.
    </page-header>
    <div class="wrapper">
      <action-button @trigger="newProject">Assemble your team and tell us your about your project</action-button>
    </div>
  </main>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import ActionButton from '@/components/ActionButton'
  export default {
    name: 'home',
    components: {
      ActionButton,
      PageHeader
    },
    methods: {
      newProject () {
        this.$router.push('newproject');
      }
    }
  }
</script>

<style lang="scss">
</style>
