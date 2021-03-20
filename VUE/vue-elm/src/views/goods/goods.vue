<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">  <!--ref: 让vue拿dom结构-->
        <ul>
          <li class="menu-item" :class="{'current' : currentIndex === index}" @click="selectMenu(index)" v-for="(item,index) in goods" :key="index">
            <span class="text">
              <span class="icon" v-if="item.type > 0"></span>
              <SupportIco v-if="item.type > 0" :size = 3 :type = item.type></SupportIco>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" ref="foodList" v-for="(item,index) in goods" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(food,idx) in item.foods" :key="idx">
                <div class="icon">
                  <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!-- + -->
                  <div class="cartcontrol-wrapper">
                    <cartControl :food="food"></cartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车 -->
    <shopCart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopCart>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/Support-ico'
import {getGoods} from '@/api/index'
import BScroll from 'better-scroll'
import shopCart from '@/components/shopCart/shopCart'
import cartControl from '@/components/cart-control/cart-control'

export default {
  data () {
    return {
      goods: [],
      // currentIndex: 0,
      listHeight: [],     //每个菜系的高度
      scrollY: 0          //页面滚动的距离
    }
  },
  methods:{
    // 点击左侧dom
    selectMenu(idx){
      // this.currentIndex = idx
      let foodList = this.$refs.foodList
      let el = foodList[idx]
      this.foodsWrapper.scrollToElement(el,500)   //滚动到指定的目标元素
    },
    // 页面滚动
    _initScroll(){
      // this.$refs.xxx  vue拿到dom结构
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsWrapper = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3  //滚动时属性放开
      })
      this.foodsWrapper.on('scroll', pos => {   //监听一个滚动事件
        console.log(pos);
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    // 计算每个菜系的高度
    _calculateHeight() {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for(let i = 0; i<foodList.length; i++){
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    } 
  },
  props: {
    seller: {
      type: Object
    }
  },
  
  created() {
    getGoods().then((res)=>{
      console.log(res);
      this.goods = res
      this.$nextTick(()=>{    //只会在dom渲染完成之后执行
        this._initScroll()
        this._calculateHeight()
      })
    })
  },
  components:{
    SupportIco,
    shopCart,
    cartControl
  },
  // 计算属性：数据源的属性发生变化会自动执行
  computed: {
    currentIndex() {
      for(let i = 0; i< this.listHeight.length; i++){
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i+1]
        if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
          return i
        }
      }
      return 0
    },
    selectFoods() {
      let foods = []
      for(let good of this.goods){
        if(good.foods){
          for(let food of good.foods){
            if(food.count){
              foods.push(food)
            }
          }
        }
      }
      return foods
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable.styl';
.goods
  display flex
  position absolute
  top 177px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display flex
      text-align center
      justify-content center
      width 60px
      height 54px
      padding 0 10px
      line-height 14px
      align-items center
      font-size $fontsize-small
      &.current
        background #fff
        font-weight 700
  .foods-wrapper
    flex 1
    .title
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9ddee;
      font-size: $fontsize-small;
      color rgb(147,153,159)
      background $color-background-ssss = #f3f5f7
    .food-item
      position: relative;
      display flex
      margin 18px
      padding-bottom: 18px;
      &:last-child
        margin-bottom: 0;
      .icon
        flex 0 0 57px
        margin-right: 10px;
        img
          width: 100%;
      .content 
        flex 1
        .name 
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra 
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc 
          line-height 12px
          margin-bottom 8px
        .extra 
          .count 
            margin-right 12px
        .price 
          font-weight 700
          line-height 24px
          .now 
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old 
            text-decoration line-through    // 文本修饰元素
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right: 0;
          bottom: 12px;
</style>
