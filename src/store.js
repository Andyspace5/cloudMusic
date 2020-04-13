import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home'
import rank from '@/store/rank'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: home,
    rank: rank
  }
})
