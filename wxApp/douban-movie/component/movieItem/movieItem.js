// component/movieItem/movieItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: {
      type: Object,
      value: {},
      // observer：重新修饰父组件传过来的值
      observer: function(newVal) {
        console.log(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
