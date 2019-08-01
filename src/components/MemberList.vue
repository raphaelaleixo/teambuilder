<template>
  <div class="team wrapper">
    <h2 class="team__title">The team</h2>
    <p v-if="!listOfMembersExists">We build teams to match businesses.</p>
    <div class="team__filters">
      <div class="team__filter" v-for="(area,index) in areaList" :key="index">
        <input type="checkbox" v-model="areas" :value="area" :id="area"/>
        <label :for="area">{{area}}</label>
      </div>  
    </div>
    <transition-group class="team__members members" name="list-complete" tag="div">
      <member-item v-for="member in filteredMembers"
        :member="member"
        :readonly="listOfMembersExists"
        @added="addTeamMember($event)"
        @removed="removeTeamMember($event)"
        :key="member.key" />
    </transition-group>
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
    props: {
      list: Array
    },
    data () {
      return {
        team: [],
        areas:[]
      }
    },
    computed: {
      ...mapGetters(['members']),
      listOfMembersExists() {
        return this.list && this.list.length > 0
      },
      areaList() {
        let areas = this.membersAvailable.map(item => item.area);
        areas = areas.flat();
        areas = [...new Set(areas)]
        return areas;
      },
      membersAvailable() {
        if (this.listOfMembersExists) {
          return this.members.filter(item => this.list.includes(item.key))
        } else {
          return this.members;
        }
      },
      filteredMembers() {
        return this.membersAvailable.filter(item => this.areas.some(value => item.area.includes(value) ))
      }
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
      this.areas = this.areaList
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
  .list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>