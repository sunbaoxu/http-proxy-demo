<template>
  <div class="home">
    <button class="btn" @click="getAFn">post跨域请求</button>
    <button class="btn" @click="getBFn">get跨域请求</button>

    <ul>
      <li>请求状态：{{obj.message}} </li>
      <li>返回值 ：{{obj.data}}</li>
    </ul>
  </div>
</template>

<script>
import api from '$api'
export default {
  name: 'Home',
  data (){
    return {
      obj :{}
    }
  },
  methods :{
    //post 请求
    getAFn (){
      api.getAFn().then((e)=>{
          this.obj = e
      })
    },
    //get 请求
    getBFn (){
      api.getBFn().then((e)=>{
        this.obj = e
      })
    }
  }
}
</script>
