import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './style/common.css'
import GoodsItem from '@/components/GoodsItem'

// import Vant from 'vant'
// import 'vant/lib/index.css'

import './utils/vant-ui'
Vue.config.productionTip = false
Vue.component('GoodsItem', GoodsItem)
// Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
