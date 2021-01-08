<template>
  <div class="container">
    <div class="white">
      <!-- 文字部分 -->
      <div class="text">
        <div>
          <div>优</div>
          <div>品质保障</div>
          <div>品质护航 购物无忧</div>
        </div>
        <div>
          <div>七</div>
          <div>七天无理由退换货</div>
          <div>为您提供售后无忧保障</div>
        </div>
        <div>
          <div>特</div>
          <div>特色服务体验</div>
          <div>为您呈现不一样的服务</div>
        </div>
        <div>
          <div>帮</div>
          <div>帮助中心</div>
          <div>您的购物指南</div>
        </div>
        <img class="bottomCat" src='https://img.alicdn.com/tfs/TB1dl28RXXXXXbzaFXXXXXXXXXX-136-50.png'/>
      </div>
      <!-- dl部分 -->
      <div class="dlcontainer">
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>开通支付宝</dd>
          <dd>支付宝充值</dd>
        </dl>
        <dl>
          <dt>天猫保障</dt>
          <dd>售后规则</dd>
          <dd>缺货赔付</dd>
          <dd>支付宝充值</dd>
        </dl>
        <dl>
          <dt>天猫保障</dt>
          <dd>售后规则</dd>
          <dd>缺货赔付</dd>
          <dd>支付宝充值</dd>
        </dl>
        <dl>
          <dt>手机天猫</dt>
          <dd>
            <img
              class="erweima"
              src="https://img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png"
            />
          </dd>
        </dl>
      </div>
    </div>
    <div class="black">
      <div>
        <a href="#">关于天猫</a>
        <a href="#">帮助中心</a>
        <a href="#">开放平台</a>
        <a href="#">诚聘英才</a>
        <a href="#">联系我们</a>
      </div>
      <div>
        <a href="#">阿里巴巴集团|</a>
        <a href="#">淘宝网|</a>
        <a href="#">天猫|</a>
        <a href="#">聚划算|</a>
        <a href="#">全球速卖通|</a>
      </div>
      <div>
        <a href="#">市场名称登记证：工商网市字3301004119号</a>
      </div>
      <div>
        <a href="#"><img src='https://img.alicdn.com/tfs/TB1MQX3cBr0gK0jSZFnXXbRRXXa-65-70.gif' /></a>
        <a href="#"><img src='https://img.alicdn.com/tps/i1/TB13mgzHXXXXXbjXVXXzby4IVXX-80-30.jpg' /></a>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttom",
};
</script>

<style lang="less" scoped>
.bottomCat{
  width: 80px;
  height: 40px;
  position: relative;
  top:73px;
  left: -950px;
}
.white {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid red;
}
.text {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 50px 100px;
}
.erweima {
  width: 100px;
  height: 100px;
}
.dlcontainer {
  display: flex;
  width: 1000px;
  justify-content: space-around;
  margin: 0 auto;
}
.dlcontainer > dl > dd {
  padding: 0;
  margin: 0;
}
.black{
    width: 100%;
    background-color: black;
    color: white;
}
.black > div{
    width: 1000px;
    margin: 0 auto;
}
.black > div >a{
    color: white;
    margin: 0 10px;
    text-decoration-line: none;
    font-size: 12px;
}
</style>
