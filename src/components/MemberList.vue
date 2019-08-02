<template>
  <div class="team wrapper">
    <h2 class="team__title">The team</h2>
    <p v-if="!listOfMembersExists">We build teams to match businesses.</p>
    <div class="team__filters">
      <div class="team__filter"
        v-for="(area,index) in areaList"
        :class="{'team__filter--active':areas.includes(area)}"
        :key="index">
        <input type="checkbox"
          class="team__checkbox"
          v-model="areas"
          :value="area"
          :id="area" />
        <label class="team__label"
          :for="area">{{area}}</label>
      </div>
    </div>
    <transition-group class="team__members members"
      name="list-complete"
      tag="div">
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
        areas: []
      }
    },
    computed: {
      ...mapGetters(['members']),
      listOfMembersExists () {
        return this.list && this.list.length > 0
      },
      areaList () {
        let areas = this.membersAvailable.map(item => item.area);
        areas = areas.flat();
        areas = [...new Set(areas)]
        return areas;
      },
      membersAvailable () {
        if (this.listOfMembersExists) {
          return this.members.filter(item => this.list.includes(item.key))
        } else {
          return this.members;
        }
      },
      filteredMembers () {
        return this.membersAvailable.filter(item => this.areas.some(value => item.area.includes(value)))
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
    async mounted () {
      await this.getMembers();
      this.areas = this.areaList
    }
  }
</script>

<style lang="scss">
  .team__title {
    font-family: var(--title-font);
    text-transform: uppercase;
    letter-spacing: -1px;
    margin: 0 0 0em;
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 0 0 2em;
  }
  .list-complete-enter, .list-complete-leave-to
                                                      /* .list-complete-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
  .team__filter {
    background: var(--light-gray);
    display: inline-block;
    margin: 0 1em 1em 0;
    padding: 0.25em 1em;
    transition: all 0.3s ease-out;
    &.team__filter--active {
      background: var(--light-green);
      font-weight: bolder;
      color: var(--dark-blue);
    }
  }
  .team__checkbox {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  .team__label {
    line-height: 1;
  }
</style>