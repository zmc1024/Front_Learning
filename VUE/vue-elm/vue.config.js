module.exports = {    //跨域代理问题处理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ustbhuangyi.com/sell/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
