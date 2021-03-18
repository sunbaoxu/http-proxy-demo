import { fetch } from './config.js';
import {
  
} from './baseUrl';
export default {
  //post 请求
  getAFn(params) { return fetch(`bus-api/ceshi/a`, params, 'post') },
  //get 请求
  getBFn(params) { return fetch(`bus-api/ceshi/b`, params) },
} 
