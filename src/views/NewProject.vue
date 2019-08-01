<template>
  <main class="">
    <page-header header-title="New Project">
      If you have a digital project in mind, we would be happy to have a chat about how we can help make that happen.
    </page-header>
    <form @submit.prevent="saveProject"
      class="form wrapper">
      <div class="form__item">
        <input id="project-name"
          type="text"
          @change="createId(5)"
          v-model="project.name"
          class="form__input"
          required />
        <label class="form__label"
          for="project-name">Project name</label>
      </div>
      <div class="form__item">
        <textarea id="project-description"
          v-model="project.description"
          class="form__input"
          required />
        <label class="form__label"
        for="project-description">Project description</label>
      </div>
      <member-list @change="updateTeamMembers"/>
      <action-button>Create new project</action-button>
    </form>
  </main>
</template>

<script>
  import { mapActions } from 'vuex';
  import ActionButton from '@/components/ActionButton'
  import MemberList from '@/components/MemberList'
  import PageHeader from '@/components/PageHeader'
  export default {
    name: 'newProject',
    components: {
      ActionButton,
      MemberList,
      PageHeader
    },
    data () {
      return {
        project: {
          name: '',
          description: '',
          team: [],
          url: ''
        }
      }
    },
    methods: {
      ...mapActions(['addProject']),
      updateTeamMembers ($event) {
        this.project.team = $event
      },
      createId (num) {
        const createRandom = (length) => {
          let result = '';
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
        createRandom(5);
        const url = this.project.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '').toLowerCase() + '-' + createRandom(num);
        this.project.url = url;
      },
      async saveProject () {
        await this.addProject(this.project);
        this.$router.push('/project/' + this.project.url);
      }
    },
  }
</script>

<style lang="scss">

</style>