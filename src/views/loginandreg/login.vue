<template>
  <div class="login-cont">
    <div class="login-tabs">
      <div class="tab-item tab-l active">密码登录</div>
      <span class="split"></span>
      <span class="tab-item">|</span>
      <div class="tab-item tab-r">短信登录</div>
    </div>
    <form class="login-form">
      <div class="validate-input">
        <div class="input-warpper">
          <input type="text" v-model="userinfo.username" placeholder="账户" />
        </div>
      </div>
      <div class="validate-input">
        <div class="input-warpper">
          <input type="password" v-model="userinfo.pwd" placeholder="密码" />
        </div>
      </div>
      <div class="button button-default login-btn" @click="handleLogin">登 录</div>
    </form>
    <div class="login-other">
      <p class="register">
        没有账号？
        <button class="register-link">
          <a href="/reg">立即注册</a>
        </button>
      </p>
      <p class="forgot">忘记密码</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      userinfo: {
        username: "",
        pwd: ""
      }
    };
  },
  methods: {
    // handleLogin() {
      // let { username, pwd } = this.userinfo;
      // let data = `username=${username}&pwd=${pwd}`;
      // let data = `username=${this.username}&pwd=${this.pwd}`
      // axios.get('/users/login?'+data).then((result)=>{
      //     console.log(result)
      // }) 原先
      // axios.get("http://localhost:3000/users/reg/page/token?" + data).then(res => {
      //   console.log(res);
      //   window.localStorage.setItem("token", res.data.data);
      //   this.$router.push({ path: "/" });
      // });
        // window.localStorage.setItem('logininfo',1)

    // },

    handleLogin(){
      let { username, pwd } = this.userinfo;
                      let regData = `username=${username}&pwd=${pwd}`;
                      this.$axios({
                        url:'http://localhost:3004/users/login?'+regData,
                        method:'get',                  
                      }).then((res)=>{
                          // console.log(res);
                        window.localStorage.setItem('token',res.data.data);
                        this.$router.push({path:'/home'});
                      })
        },
  }
};
</script>

<style>
body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  background-color: #f2f2f2;
  font: 12px/1.5 PingFangSC-Regular, Microsoft YaHei, Heiti SC, tahoma, arial,
    Hiragino Sans GB, \\\5b8b\4f53, "sans-serif";
  color: #666;
}

* {
  margin: 0;
  padding: 0;
}

.login-cont .login-tabs {
  position: relative;
  padding-top: 30px;
  text-align: center;
  height: 33px;
  line-height: 33px;
}

.login-cont {
  position: relative;
  width: 740px;
  height: 480px;
  background-color: #efefef;
  margin: 60px auto;
}
/* 盒子顶部激活样式和密码登录 */
.login-cont .login-tabs .tab-item.active {
  color: #44a870;
}

.login-cont .login-tabs .tab-l {
  left: 250px;
}

.validate-input .input-warpper {
  width: 100%;
  border: none;
  height: 100%;
  font-size: 14px;
  color: #484848;
  background-color: transparent;
}

button,
input,
select,
textarea {
  margin: 0;
  outline-offset: 0;
  outline-style: none;
  outline-width: 0;
  -webkit-font-smoothing: inherit;
  background-image: none;
}

a,
input,
select {
  outline: 0;
  overflow: hidden;
}

input {
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}

.validate-input .input-warpper input {
  width: 100%;
  border: none;
  height: 100%;
  font-size: 14px;
  background-color: transparent;
}

.login .login-cont .login-form .validate-input > .input-warpper {
  border: 1px solid #fff;
}

.validate-input .input-warpper {
  width: 268px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 0 15px;
}

.login-cont .login-form .login-btn {
  width: 298px;
  height: 38px;
  line-height: 40px;
  margin-top: 40px;
  font-weight: 700;
}

/* 短信登录样式 */
.login-cont .login-tabs .tab-item {
  position: absolute;
  font-size: 24px;
  color: #8b8b8b;
  top: 30px;
  cursor: pointer;
  font-weight: 700;
}

.login-cont .login-tabs .tab-r {
  right: 250px;
}

/* 盒子顶部样式 */
.login-cont .login-tabs {
  position: relative;
  padding-top: 30px;
  text-align: center;
  height: 33px;
  line-height: 33px;
}

/* 用户名密码大盒子样式 */
.login-cont .login-form {
  width: 300px;
  margin: 0 auto;
  padding-top: 25px;
}

/* 没有账号 */
.login-cont .login-other {
  position: relative;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0;
}

.login-cont .login-other .register {
  font-size: 14px;
  color: #434242;
  letter-spacing: 2px;
}

/* 立即注册 */
.login-cont .login-other .register .register-link {
  color: #44a870;
  text-decoration: none;
}

/* 忘记密码 */
.login-cont .login-other .forgot {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  color: #44a870;
  cursor: pointer;
}
/* 确认按钮 */
.login-cont .login-form .button.button-default.login-btn {
  background-color: #348d5b;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  border: 1px solid #44a870;
  box-shadow: none;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
}
.login-cont .login-form .validate-input {
  margin-bottom: 20px;
}
</style>