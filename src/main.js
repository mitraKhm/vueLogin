import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import {Routes} from './router/Routes/routes.js';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import {store } from './store/Store.js';
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuelidate);


Vue.use(VueRouter);
const router = new VueRouter({
  routes : Routes ,
});

new Vue({
  el:"#app",
  router,
  store,
  vuetify,
  render: h => h(App)
});
