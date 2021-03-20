<template>
  <div class="about">
    这是aboout页面
    <ul>
      <li>
        <!-- vue route传递参数 -->
        <router-link :to="{name:'Detail', params: {username: '张三'}}">张三</router-link>
      </li>
      <li>
        <!-- 动态更改to属性，需使用v-bind 即: -->
        <router-link :to="{name:'Detail', params: {username: '李四'}}">李四</router-link>
      </li>
      <li>
        <!-- vue route借助url传递参数 -->
        <router-link to="/detail王五">王五</router-link>
      </li>
      <li>
        <router-link to="/hello">赵二</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>