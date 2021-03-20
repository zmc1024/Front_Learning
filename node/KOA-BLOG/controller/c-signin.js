// 登录函数
exports.postSigin = async ctx => {
  // ctx.render：ctx去渲染一个signin
  await ctx.render('signin', {
    session: ctx.session    // 模板文件生效
  })
}