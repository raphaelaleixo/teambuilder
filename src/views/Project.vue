<template>
  <main class="">
    <page-header v-cloak
      :header-title="'project:|'+activeProject.name">
      {{activeProject.description}}
    </page-header>
    <member-list :list="activeProject.team"/>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import MemberList from '@/components/MemberList'
  import PageHeader from '@/components/PageHeader'
  export default {
    name: 'newProject',
    components: {
      MemberList,
      PageHeader
    },
    computed: {
      ...mapGetters(['activeProject']),
      routeParams () {
        return this.$route.params.id;
      }
    },
    methods: {
      ...mapActions(['loadActiveProject']),
      async loadProject () {
        await this.loadActiveProject(this.routeParams);
      }
    },
    mounted () {
      this.loadProject();
    }
  }
</script>

<style lang="scss">
</style>