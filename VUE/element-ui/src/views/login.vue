<template>
  <div class="login">
    <div class="login-container">
      <h2>字节后台管理系统</h2>
      <div class="wrap">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="username"
        >
        </el-input>
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          show-password
        ></el-input>
        <el-button type="primary" @click="Login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    Login(){
      if(this.username=="admin" && this.password=="123456"){
        this.$router.push({name: 'home', params: {user: this.username}})
        // 存储到本地
        localStorage.setItem('user', this.username)
      }
    }
  }
};
</script>

<style>
.login {
  height: 100vh; /* vh:媒体设备高度，100vh显示器全高度 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中，容器要有高度才能垂直居中 */
}
.login-container {
  width: 300px;
  height: 260px;
  box-shadow: 0px 0px 5px #999;
  border-radius: 5px;
  text-align: center;
}
.wrap {
  padding: 10px 50px;
}
input {
  margin: 5px 0;
}
</style>