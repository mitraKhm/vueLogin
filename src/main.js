import Vue from 'vue'
import App from './App.vue'
import {Routes} from './router/Routes/routes.js'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false


Vue.use(VueRouter);
const router = new VueRouter({
  routes : Routes ,
});

new Vue({
  el:"#app",
  router,
  vuetify,
  render: h => h(App)
});
