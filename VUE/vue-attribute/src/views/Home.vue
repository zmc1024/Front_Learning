<template>
  <div class="home">
    <p>num: {{num}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    console.log('我是原生的created')
  },
  updated () {
    console.log('数据发生变化--原生')
  },
  // 混入属性：代码混入，放在局部使用，当原生方法与混入方法重名时，混入方法不使用
  mixins: [addLog],
  // 扩展属性，扩展，允许重复定义，当原生方法与扩展方法重名时，扩展方法不使用
  extends: app,
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>

<style>

</style>
