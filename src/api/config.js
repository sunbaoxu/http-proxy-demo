import axios from 'axios'
import {host} from './baseUrl'
axios.defaults.timeout = 30000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


//请求拦截
axios.interceptors.request.use((config) => {

  return config
},(error)=>{
  console.log('请求异常');
})

axios.interceptors.response.use((response) => {
  
  return response
},(error)=>{
  console.log('请求异常');
})

export function fetch(url, params,type,config) {
  return new Promise((resolve, reject) => {
    if (type === 'post') {
      axios.post(host+url, params,config)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    } else{
      axios.get(host+url,{params})
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

