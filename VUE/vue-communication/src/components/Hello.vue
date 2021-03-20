<template>
  <div class="hello">
    {{message}}
    <hr />
    {{fromHi}}
    <button @click="send">发送</button>    <!-- 子组件向父组件通信，需借助事件驱动 -->
  </div>
</template>

<script>
export default {
  props: ['message','fromHi'],       // 父组件向子组件通信
  data () {
    return {
      msg: '我是子组件里面的数据'         // 子组件向父组件通信，需借助事件驱动
    }
  },
  methods: {
    send () {
      // this为vue实例，$emit为内置api，第一个参数为 向外发散的方法名，第二个参数为数据
      this.$emit('sendData', this.msg)
    }
  }
}
</script>

<style>
.hello{
  color: brown;
  font-size: 20px;
  /* width: 100px;
  height: 50px;
  border: 2px dotted darkgreen;
  margin: 0 auto; */
}
</style>