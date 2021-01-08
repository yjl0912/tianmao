<template>
  <div>
    <div class="head">
      <ol>
        <ul>
          <li class="active">

            <span class="tsl">设置用户名</span>
          </li>

          <li>

            <span class="tsl">填写账户信息</span>
          </li>

          <li>

            <span class="tsl">设置支付方式</span>
          </li>
          <li>

            <span class="tsl">注册成功</span>
          </li>
        </ul>
      </ol>

    </div>
    <div class="verify">
      <h3>
        注册协议
      </h3>

      <div>
        <p>
          <strong>[审核阅读]</strong>
          您在申请注册流程中点击同意前，应当认真阅读以下协议。
          <strong>请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</strong>
        </p>
        <p>
          "1、"
          <strong>与您约定免除或限制责任的条款；</strong>
        </p>
        <p>
          "2、"
          <strong>与您约定免除或限制责任的条款；</strong>
        </p>
        <p>
          "3、"
          <strong>其他以粗体下划线标识的重要条款。</strong>
        </p>
      
        <p>
          <strong>[特别提示]</strong>
          "当你按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理
        </p>
        <div id='test'>

          <button class="left" @click="link">同意协议</button>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "Registered",
  methods: {
    link() {
      this.$router.push({
        path: "/verify"
      })
    }
  }

}
</script>

<style scoped>
.head {
  margin: 0;
  padding: 0;
}

ol {
  width: 790px;
  height:50px ;
  margin: 0 auto;
}

.tsl {
  transform: translateX(135%);
  font-weight: 700;
  margin: 0 auto;
  padding: 0;
}

ol li {
  display: inline;
  float: left;
  padding-left: 70px;
  height: 46px;
  font-size: 16px;
}

.verify {
  width: 680px;
  margin: 0 auto;
  padding: 20px;
  color: #3e3e3e;
  border: 2px solid #dedede;
  border-top: 2px solid #ff4a00;
  background-color: #FFF;
  z-index: 999999;

}

.left {
  font-weight: 700;
  font-size: 20px;
  transform: translateX(135%);
  background: #ff0036;
  min-width: 180px;
  margin: 0;
  zoom: 1;
  *display: inline;
  height: 36px;
  padding: 0 20px;
  color: #FFF;
  text-align: center;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}


</style>