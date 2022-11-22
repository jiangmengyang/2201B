import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'echarts';
import ECharts from 'vue-echarts'

Vue.component('ECharts',ECharts)
import '../src/assets/common.css'
// import echarts from "echarts"
// // import * as echarts from "echartst"
// //引入vue-echarts
// // import VueEcharts from 'vue-echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
