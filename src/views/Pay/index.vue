<template>
  <div>
    <div class="head">
      <div class="head-1">
        <img src="../../assets/imags/T13IFgXjlaXXXXXXXX.png" alt="">
        <div class="head-to">| 我的收银台</div>
        <div class="head-3">中国大陆</div>
        <div class="head-4">支付宝账户：1800066260</div>
        <div class="head-5"><a href="">| 找人代付</a></div>
        <div class="head-6">| 唯一热线：95188</div>
      </div>
    </div>
    <div class="QR code">
      <div class="code-1">
        <div class="code-2">
          <img src="../../assets/imags/下载.png" alt="">
        </div>
        <div class="code-3">天猫Tmall -- 美特斯邦威短袖polo衫男2020新款夏季情侣装宽松潮流半袖女士上衣<br>
          卖家昵称：美特斯邦威官方网店
        </div>
        <div class="code-4">支付：108元</div>
      </div>
    </div>
    <div class="hua">
      <div class="hua-1">
        <div class="hua-2">花呗</div>
        <div class="hua-3">:推荐</div>
        <div class="hua-4">支付：108元</div>
      </div>
    </div>
    <div class="button">
      <div class="button-1">
        <form class="button-2">
          添加银行：
          <select class="button-b">
            <option>中国银行</option>
            <option>建设银行</option>
            <option>农业银行</option>
            <option>交通银行</option>
          </select>
        </form>
        <span>  添加快捷/银行支付：<input class="button-a" type="text" placeholder="请输入您的卡号"v-model="inputValue1"
        @blur="yanzheng1"/></span>
        <div class="text1" v-if="text1">{{ text1 }}</div>

      </div>
    </div>
    <div class="an">安全设置检测成功！无需短信校验。</div>

    <div class="link">支付宝支付密码 :<input type="password" id="pwd" value="" class="inputzs_gbook_9" runat="server" v-model="inputValue2"
                                      @blur="yanzheng2"/></div>
    <div class="text1" v-if="text2">{{ text2 }}</div>


    <button style="color: #ff4a00;display: flex;margin-left: 20px">确认付款</button>
    <hr>
    <a href="" style="font-size: 8px;color: darkgray;margin-left: 420px">ICP证：沪B2-20150087</a>
    <div class="img"><img src="../../assets/imags/IASErdnJnLbiMvSoxkaQ.png" alt=""></div>
  </div>
</template>

<script>


  export default {
  name: "index",

  data() {
    return {
      inputValue2: '',
      text2: '',
      inputValue1: '',
      text1: '',
    }
  },
  methods: {
    yanzheng2() {
      let zhengze2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      let result2 = zhengze2.test(this.inputValue2)
      if (!result2) {
        this.text2 = '!请输入正确的密码'
      }
    },
    yanzheng1() {
      let zhengze1 = /^([1-9]{1})(\d{14}|\d{18})$/
      let result1 = zhengze1.test(this.inputValue1)
      if (!result1) {
        this.text1 = '!请输入正确的银行卡号'
      }
    },
  }
}

</script>

<style scoped>
.head {
  height: 70px;
  display: flex;
  border: 1px solid #00ACED;
  background-color: #1e90ff;
}

.head .head-1 {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.head img {
  width: 88px;
  height: 30px;
  margin-right: 20px;

}

.head .head-to {
  font-size: 18px;
  margin-right: 20px;
}

.head .head-3 {
  color: #5b6a6f;
  margin-right: 200px;
}

.head .head-4 {
  margin-top: 5px;
  font-size: 13px;
  margin-right: 45px;
}

.head .head-5 {
  margin-right: 66px;
}

.head .head-6 {
  font-size: 15px;
  color: #ff4a00;
}

.code {
  margin-top: 0px;
  height: 190px;
  display: flex;
  border: 1px solid #dedede;
  background-color: #dedede;

}

.code-1 {
  display: flex;
  margin-left: 20px;
  margin-top: 40px;
}

.code-2 img {
  margin-right: 30px;
  width: 100px;
  height: 100px;
}

.code-3 {
  margin-top: 30px;
  font-size: 12px;
  margin-right: 240px;
}

.code-4 {
  margin-top: 30px;
  font-size: 22px;
}

.hua {
  margin-top: -40px;
  border: 1px solid azure;
  background-color: azure;
  height: 90px;
  display: flex;

}

.hua-1 {
  display: flex;
  margin-left: 20px;
  margin-top: 40px;
}

.hua-2 {
  color: #00b3ff;
  margin-right: 30px;

}

.hua-3 {
  height: 30px;
  color: red;
  margin-top: -1px;
  margin-right: 600px;
}

.hua-4 {
  margin-top: 3px;
  margin-left: 125px;

}

.button {
  margin-top: 20px;
  width: 1000px;
  height: 90px;
  display: flex;
  margin-right: 130px;
  border: 1px solid #dedede;
  background-color: #dedede;

}

.button-1 {
  display: flex;
  margin-left: 20px;
  margin-top: 40px;
}

.button-a {
  width: 200px;
  height: 30px;
}

.button-b {
  margin-right: 30px;
  width: 200px;
  height: 30px;
}

.an {
  display: flex;
  margin-left: 20px;
  color: #00ACED;
}

.link {
  display: flex;
  margin-left: 20px;
  color: red;
}

.img {
  margin-top: 100px;
  margin-left: 300px;
}
.text1 {
  position: relative;
  top: 4px;
  left:137px;
  color: #ff0036;
}
</style>