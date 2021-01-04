<template>
  <div class="login-container">
    <!-- 头部 -->
    <div class="login-top">
      <div class="header">
        <a href="##">
          <img class="tm-logo" src="./images/logo.png" alt="" />
        </a>
      </div>
    </div>
    <!-- 背景 -->
    <div class="logo-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab">
            <li>
              <a href="##" style="border-right: 0">密码登录</a>
            </li>
            <li>
              <a href="##" class="current">短信登录</a>
            </li>
          </ul>
          <div class="content">
            <form action="##">
              <div class="input-text clearFix">
                <i></i>
                <input type="text" placeholder="手机号/会员号/邮箱" />
              </div>
              <div class="input-text clearFix">
                <i class="pwd"></i>
                <input type="password" placeholder="请输入密码" />
              </div>
              <button class="btn">登录</button>
              <div class="setting clearFix">
                <a href="##">忘记密码</a>
                <a href="##">忘记用户名</a>
                <a href="##">免费注册</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.login-container {
  .login-top {
    width: 100%;
    height: 100%;
    .header {
      padding: 10px 0px;
      width: 1190px;
      // height: 88px;
      margin: auto;
      .tm-logo {
        width: 190px;
        height: 27px;
        margin-top: 8px;
      }
    }
  }
  .logo-wrap {
    // height: 600px; a80601
    background-color: #a80601;
    .login {
      width: 1190px;
      height: 600px;
      background: url(./images/loginbg.jpg) no-repeat;
    }
    .loginform {
      width: 420px;
      height: 406px;
      box-sizing: border-box;
      background: #fff;
      float: right;
      top: 90px;
      position: relative;
      padding: 20px;
    }
    .tab {
      li {
        width: 50%;
        float: left;
        text-align: center;
        display: inline;
        a {
          font-size: 20px;
          width: 100%;
          display: block;
          height: 50px;
          line-height: 50px;
          font-weight: 700;
          color: #333;
          // border: 1px solid #ddd;
          box-sizing: border-box;
          text-decoration: none;
        }
        .current {
          border-bottom: none;
          border-top-color: #28a3e2;
          color: #e1251b;
        }
      }
    }
    .content {
      width: 380px;
      height: 316px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      form {
        margin: 15px 0 18px 0;
        font-size: 12px;
        line-height: 18px;
        .input-text {
          margin-bottom: 22px;
          position: relative;
          input {
            width: 300px;
            height: 32px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-left: none;
            float: left;
            // padding: 6px;
            margin-left: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 22px;
            padding-right: 8px;
            padding-left: 8px;
          }
        }
        .setting {
          float: right;
          padding: 20px;
          a {
            padding-right: 10px;
            font-size: 12px;
            color: #6c6c6c;
            text-decoration: none;
          }
        }
      }
    }
    .btn {
      background-color: #e1251b;
      padding: 6px;
      border-radius: 0;
      font-size: 16px;
      font-family: 微软雅黑;
      word-spacing: 4px;
      border: 1px solid #e1251b;
      color: red#fff;
      width: 300px;
      height: 36px;
      margin-top: 25px;
      outline: none;
      margin-left: 36px;
      border-radius: 5px;
    }
  }
}
</style>
