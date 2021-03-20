const router = require('koa-router')()
const userServe = require('./../controllers/mySqlConfig.js')

router.prefix('/users')

// 注册接口
router.post('/userRegister', async(ctx, next) => {
  // 接收前端传的参数
  let _nickname = ctx.request.body.nickname
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  // console.log(_nickname,_username,_userpwd)

  if(!_nickname || !_username || !_userpwd) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码或昵称不能为空'
    }
    return
  }
  // 校验账户在数据库是否存在
  await userServe.findUser(_username).then(async (res) => {
    // console.log(res);
    // 判断账户是否存在
    if(res.length) {
      ctx.body = {
        code: '80003',
        mess: '账户已存在，不允许注册'
      }
    } else {  
      // 账号不存在注册
      await userServe.insertUser([_username,_userpwd,_nickname]).then(res => {
        console.log(res);
        let r = '';
        if(res.affectedRows != 0) {
          r = 'ok';
          ctx.body = {  
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error';
          ctx.body = {  
            code: '80004',
            data: r,
            mess: '注册失败'
          }
        }
      }).catch(err => {
        ctx.body = {  //向前端返回
          code: '80002',
          data: err
        }
      })
    }
  })
})

// 用户登录接口
router.post('/userLogin', async(ctx, next) => {
  // 接收前端传的参数
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd

  // 把参数拿到数据库里查询
  await userServe.userLogin(_username,_userpwd).then(res => {
    console.log(res);
    let r = '';
    if(res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {  //向前端返回
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {  //向前端输出
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {  //向前端返回
      code: '80002',
      data: err
    }
  })
}) 

// 查找对应的文章列表
router.post('/findNoteListByType', async(ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userServe.findNoteListByType(note_type).then(res => {
    // console.log(res);
    let r = '';
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {  
        code: '80004',
        data: r,
        mess: '查询错误'
      }
    }
  }).catch(err => {
    ctx.body = {  //向前端返回
      code: '80002',
      data: err
    }
  })
})

// 根据id查找文章详情
router.post('/findNoteDetailById', async(ctx, next) => {
  let note_id = ctx.request.body.note_id
  await userServe.findNoteDetailById(note_id).then(res => {
    // console.log(res)
    let r = '';
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {  
        code: '80004',
        data: r,
        mess: '查询错误'
      }
    }
  }).catch(err => {
    ctx.body = {  
      code: '80002',
      data: err
    }
  })
})


// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

module.exports = router
