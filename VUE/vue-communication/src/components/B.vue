<template>
  <div class="wrap">
    BBBBBBBBBBBBBB {{msg}}
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (e)=> {      //跨组件通信接收
      console.log(e);
      this.msg = e;
    })
  }
}
</script>

<style>

</style>