<template>
  <div class="count">
    <h3>{{$store.state.a.count}}</h3>     <!-- 拿数据源的数据 -->
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <p>
      <!-- 提交mutationsd的方法 -->
      <button @click="addAction(5)">add</button>    
      <button @click="$store.commit('reduce')">reduce</button>  
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  // computed: {
  //   newCount() {
  //     return this.$store.state.count * 2
  //   }
  // }
  data() {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count * 3
  // })

  // 取到store的对象到这里用
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods: {
    test() {},
    // 解构，将方法掏出来放到methods里使用
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>