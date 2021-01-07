<template>
  <div>
    <div class="login-bg">
      <div class="content">
        <div class="title">
          <h2>注册</h2>
        </div>
        <div class="form-box">
          <div class="login-center">
            <span class="t-name">手机号：</span>
            <input type="text" name="" id="tel_num" class="inp phone-inp" value=""
                   placeholder="请输入您的手机号" v-model="inputValue1"
                   @blur="yanzheng1"
            />
            <div class="text1" v-if="text1">{{ text1 }}</div>

          </div>
          <div class="login-center">
            <span class="t-name">注册密码：</span><input type="password" name="" id="code_num" class="inp code-inp"
                                                    value="" placeholder="请输入您的密码" v-model="inputValue2"
                                                    @blur="yanzheng2"/>
            <div class="text1" v-if="text2">{{ text2 }}</div>
            <div class="get-code">

            </div>
          </div>
          <div class="login-center">
            <span class="t-name">确认密码：</span><input type="password" name="" id="code_num" class="inp code-inp"
                                                    value="" placeholder="请确认您的验密码" v-model="inputValue3"
                                                    @blur="yanzheng3"/>
            <div class="text1" v-if="text3">{{ text3 }}</div>
            <div class="get-code">

            </div>
          </div>
          <div class="login-center">
            <span class="t-name">验证码：</span><input type="text" name="" id="code_num" class="inp code-inp"
                                                   value="" placeholder="请输入您的验证码" v-model="inputValue4"
                                                   @blur="yanzheng4"/>
            <div class="text1" v-if="text4">{{ text4 }}</div>
            <div class="get-code">
              <span class="code-btn" >获取验证码</span>
            </div>
          </div>
          <div class="login-button">完成注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verify",
  data() {
    return {
      inputValue1: '',
      text1: '',
      inputValue2: '',
      text2: '',
      inputValue3: '',
      text3: '',
      inputValue4: '',
      text4: '',
    }
  },
  methods: {
    yanzheng1() {
      let zhengze1 = /^1[3|4|5|7|8][0-9]{9}$/
      let result = zhengze1.test(this.inputValue1)
      if (!result) {
        this.text1 = '！请输入正确的手机号'
      }
    },
    yanzheng2() {
      let zhengze2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      let result2 = zhengze2.test(this.inputValue2)
      if (!result2) {
        this.text2 = '!请输入正确的密码'
      }
    },
    yanzheng3() {
      let zhengze3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      let result3 = zhengze3.test(this.inputValue3)
      if (!result3) {
        this.text3 = '!请输入相同的密码'
      }
    },
    yanzheng4() {
      let zhengze4 = /^[a-zA-Z0-9]{6}$/
      let result4 = zhengze4.test(this.inputValue4)
      if (!result4) {
        this.text4 = '!请输入正确的验证码'
      }
    }
  }
}


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

.login-bg {
  height: 100%;
  background-image: linear-gradient(160deg, #b100ff 20%, #00b3ff 80%);
  position: relative;
}

.content {
  position: absolute;
  width: 320px;
  height: 400px;
  background: rgba(255, 255, 255, .9);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -160px;

  padding: 10px 20px;
  box-sizing: border-box;
}

.title h2 {
  font-size: 22px;
  line-height: 60px;
  color: #333;
  font-weight: bold;
  text-align: center;
}

.login-center {
  height: 50px;
  border-radius: 5px;
  border: 1px solid #00ACED;
  margin-bottom: 30px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
}

.login-center .t-name {
  font-size: 14px;
  float: left;
  height: 100%;

}

.login-center .inp {
  font-size: 14px;
  float: left;
  border: none;
  background: transparent;
  height: 100%;
  outline: none;
}

.login-center .inp.code-inp {
  width: 120px;
}

.login-center .get-code {
  float: right;
  height: 100%;
}

.login-center .get-code .code-btn {
  color: #a07941;
  font-size: 12px;
  /*border: 1px solid #a07941;*/
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  position:fixed;
  top: 195px;
  left: 581px;

}

.login-button {
  background-color: #1e90ff;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

}

.text1 {
  width: 400px;
  height: 70px;
  color: red;
  position: relative;
  top: 0px;
  left: 115px;
}
</style>