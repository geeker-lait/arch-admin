// 配置elementUI
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import _ from 'loadsh'

Vue.prototype._ = _;


let config ={
  API_BASE_URL : process.env.BASE_URL,
  API_TIMEOUT :6000,
  GEO_SERVER:process.env.GEO_SERVER,
  AMC_BASE_URL:process.env.BASE_URL,
  AMC_REDIRECT_URI:process.env.PROD
}

Vue.prototype.$CONFIG = config


export default config
