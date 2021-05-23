import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import {Routes} from './router/Routes/routes.js';
import VueRouter from 'vue-router';
import {store } from './store/Store.js';
import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookie';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'




Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueCookie);
Vue.use(Vuetify)
 
export  const  vuetify =new Vuetify({
 rtl: true, 
 icons: {
  iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
},
})
Vue.use(VueRouter);
export const router = new VueRouter({
  routes : Routes ,
});


new Vue({
  el:"#app",
  router,
  store,
  vuetify,
  render: h => h(App)
});
