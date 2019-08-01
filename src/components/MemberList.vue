<template>
  <div class="team wrapper">
    <h2 class="team__title">The team</h2>
    <p>We build teams to match businesses.</p>
    <div class="team__members members">
      <member-item v-for="member in members"
        :member="member"
        @added="addTeamMember($event)"
        @removed="removeTeamMember($event)"
        :key="member.key" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import MemberItem from '@/components/MemberItem'
  export default {
    components: {
      MemberItem
    },
    data () {
      return {
        team: [],
      }
    },
    computed: {
      ...mapGetters(['members']),
    },
    methods: {
      ...mapActions(['loadMemberList']),
      async getMembers () {
        await this.loadMemberList();
      },
      addTeamMember ($event) {
        this.team.push($event);
        this.$emit('change', this.team);
      },
      removeTeamMember ($event) {
        this.team = this.team.filter(item => item !== $event);
        this.$emit('change', this.team);
      }
    },
    mounted () {
      this.getMembers();
    }
  }
</script>

<style lang="scss">
  .team__title {
    font-family: var(--title-font);
    text-transform: uppercase;
    letter-spacing: -1px;
    margin: 0 0 -0.5em;
  }

  .members {
    display: flex;
    flex-wrap: wrap;
  }
</style>