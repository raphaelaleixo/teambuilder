import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import store from './store/store';
import { routes } from './router';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
