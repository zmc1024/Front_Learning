<template>
  <div class="hi">
    <p @click="sendHI">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'hi,welcome',
      hiMsg: '我是Hi组件的数据'
    }
  },
  methods: {
    sendHI () {
      this.$emit("sendHi", this.hiMsg)
    }
  }
}
</script>

<style>

</style>