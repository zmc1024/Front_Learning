<template>
  <div class="page">
    <From></From>
    <p>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </p>

    <!-- 路由动画 -->
    <transition name="fade">
      <!-- 路由入口 -->
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import From from './components/form'
export default {
  data() {
    return {
      
    }
  },
  components: {
   From
  }
}
</script>

<style>
  .fade-enter{      /**动画进入之前 */
    opacity: 0;
  }
  .fade-leave{      /**动画离开 */
    opacity: 1;
  }
  .fade-enter-active{      /**动画进来之时 */
    transition: opacity 1s;     /**transition 过渡 */
  }
  .fade-leave-active{      /**动画离开之时 */
    opacity: 0;
  }
  .page{
    text-align: center;
  }
  p{
    text-align: center;
  }
</style>