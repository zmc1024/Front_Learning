<template>
  <div class="about">
    <p>当前温度：{{temperture.num}}</p>
    <p>推荐穿衣：{{suggest}}</p>

    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      temperture: {
        num: 9
      },
      suggest: ''
    }
  },
  methods: {
    add () {
      this.temperture.num += 5
    },
    reduce () {
      this.temperture.num -= 5
    }
  },
  // 计算属性，计算出来的东西会记录缓存
  computed: {
    newCount () {
      return (this.count + 10) ** 2
    }
    // suggest () {
    //   if (this.template <= -1) {
    //     return '羽绒服'
    //   } else if (this.template < 14) {
    //     return '棉袄'
    //   } else if (this.template < 24) {
    //     return '夹克'
    //   } else {
    //     return '短袖'
    //   }
    // }
  },
  // 监听属性(可以监听数据源里的任何一个数据)监听到值发生变化时才会执行,不会记录缓存
  watch: {
    'temperture.num': {
      handler (newVal, oldVal) {
        if (newVal <= -1) {
          this.suggest = '羽绒服'
        } else if (newVal <= 14) {
          this.suggest = '棉袄'
        } else if (newVal <= 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '短袖'
        }
      },
      // 让temperture先立即执行一次
      immediate: true,
      // 深度监听，监听temperture所有的值
      deep: true
    },
    temperture: {
      handler (newVal, oldVal) {
        console.log(newVal.num, oldVal)
        if (newVal <= -1) {
          this.suggest = '羽绒服'
        } else if (newVal <= 14) {
          this.suggest = '棉袄'
        } else if (newVal <= 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '短袖'
        }
      },
      // 让temperture先立即执行一次
      immediate: true,
      // 深度监听，监听temperture所有的值
      deep: true
    }
    // temperture (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   if (newVal <= -1) {
    //     this.suggest = '羽绒服'
    //   } else if (newVal <= 14) {
    //     this.suggest = '棉袄'
    //   } else if (newVal <= 24) {
    //     this.suggest = '夹克'
    //   } else {
    //     this.suggest = '短袖'
    //   }
    // }
  }
}
</script>

<style>

</style>
