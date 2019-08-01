<template>
  <main>
    <page-header header-title="New Member"/>
    <form class="form wrapper" @submit.prevent="addMember(newMember)">
      <div class="form__item">
        <input
          type="text"
          class="form__input"
          name="name"
          placeholder="name"
          v-model="newMember.name"
        >
      </div>
      <div class="form__item">
        <input type="checkbox" id="consultant" v-model="newMember.area" value="consultant"/>
        <label for="consultant">consultant</label>
        <input type="checkbox" id="designers" v-model="newMember.area" value="designers"/>
        <label for="designers">designers</label>
        <input type="checkbox" id="tech" v-model="newMember.area" value="tech"/>
        <label for="tech">tech</label>
        <input type="checkbox" id="film" v-model="newMember.area" value="film"/>
        <label for="film">film</label>
        <input type="checkbox" id="administration" v-model="newMember.area" value="administration"/>
        <label for="administration">administration</label>
      </div>
      <div class="form__item">
        <input
          type="text"
          class="form__input"
          name="jobtitle"
          placeholder="jobtitle"
          v-model="newMember.jobtitle"
        >
      </div>
      <div class="form__item">
        <input
          type="text"
          class="form__input"
          name="picture"
          placeholder="picture"
          v-model="newMember.picture"
        >
      </div>
      <div class="form__item">
        <input
          type="tel"
          class="form__input"
          name="phone"
          placeholder="phone"
          v-model="newMember.phone"
        >
      </div>
      <div class="form__item">
        <input
          type="email"
          class="form__input"
          name="email"
          placeholder="email"
          v-model="newMember.email"
        >
      </div>
      <div class="form__item">
        <textarea name="bio" class="form__input" placeholder="bio" v-model="newMember.bio"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import PageHeader from "@/components/PageHeader";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      newMember: {
        name: "",
        area: [],
        jobtitle: "",
        picture: "",
        tel: "",
        email: "",
        bio: ""
      }
    };
  },
  methods: {
    ...mapActions(['addMember']),
  }
};
</script>