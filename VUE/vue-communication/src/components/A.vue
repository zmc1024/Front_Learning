<template>
  <div class="wrap">
    AAAAAAAAA
    <button @click="sendA">click</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      item: '我是组件A里面的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)     //跨组件通信发送
    }
  }
}
</script>

<style>

</style>