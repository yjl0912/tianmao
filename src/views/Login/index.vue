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
                <div class="portrait">
                  <span class="iconfont icon-user"></span>
                </div>
                <input
                  type="text"
                  placeholder="手机号/会员号/邮箱"
                  v-model="user.phone"
                />
              </div>
              <div class="input-text clearFix">
                <div class="portrait">
                  <span class="iconfont icon-suo1"></span>
                </div>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="user.password"
                />
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
    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
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
      width: 380px;
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
      width: 350px;
      height: 316px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      form {
        margin: 15px 0 18px 0;
        font-size: 12px;
        line-height: 18px;
        .input-text {
          width: 380px;
          display: flex;
          margin-bottom: 22px;
          position: relative;
          .portrait {
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: silver;
            margin-left: 20px;
            .iconfont {
              font-size: 30px;
              margin: 0;
            }
          }

          input {
            width: 276px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-left: none;
            float: left;
            // padding: 6px;
            // margin-left: 20px;
            // margin-bottom: 20px;
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
  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
