import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import Routes from './routes.js'
import VueRouter from 'vue-router'
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAfxu1U2TjLFftT4Au8Ybdzj3cNun28lZk',
    libraries: 'places',
  }
});
Vue.use(VueEllipseProgress)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
