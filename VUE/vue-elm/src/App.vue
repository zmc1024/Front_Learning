<template>
  <div id="app">
    <!-- 父组件向子组件通信: -->
    <v-header :seller="seller"></v-header>  

    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>  

    <div class="page">
      <!-- 无需点击事件，路由传参 -->
      <router-view :seller="seller"></router-view>
    </div>
    
  </div>
</template>

<script>
import header from '@/components/header/Header'
import {getSeller} from '@/api/index'
import qs from 'query-string'

export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    'v-header': header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller);
      // 对象的拼接，后两个拼接传到第一个再赋值
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl'
.tab
  width: 100%;
  display flex
  height: 36px;
  line-height: 36px;
  &-wrapper
    flex 1
    text-align center
    a
      width: 100%;
      display inline-block
      color #666
      text-decoration: none;
    .router-link-exact-active
      color $color-red
      border-bottom: 2px solid $color-red;

</style>