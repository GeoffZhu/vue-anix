import Vue from 'vue'
import App from './App.vue'
import anix from '../src/'

Vue.use(anix)

new Vue({
  el: '#app',
  render: h => h(App)
})
