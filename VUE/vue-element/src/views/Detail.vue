<template>
  <div class="detail">
    {{$route.params.username}}的个人信息
    
    <!-- 页面跳转第三种方式:编程式导航跳转 -->
    <button @click="goBack">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.push({path: '/', query: {id: 123}})     //参数会拼接在url，不安全，但可以持久化参数
      // this.$router.push({name: 'Home', params: {id:321}})
    }
  }
}
</script>

<style>

</style>