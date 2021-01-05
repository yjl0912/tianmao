<template>
  <div class="Contain">
    <div class="header">
      <div class="header-lift">
        <img src="../../../public/image/tianmao.png" alt="" />
      </div>
      <div class="header-right">
        <img src="../../../public/image/tianmaochaoshi.png" alt="" />
      </div>
    </div>
    <div class="address-more">
      <div class="adress">
        <div class="adress-option">选择收货地址</div>
        <div class="adress-card">
          <div class="address-person">
            <span>火星</span>
            <span>M78星云</span>
            <span>（史帅乐收）</span>
          </div>
          <div class="address-res">
            <span>送不到打死</span>
          </div>
        </div>
      </div>
      <div class="adress">
        <div class="adress-option">选择收货地址</div>
        <div class="adress-card">
          <div class="address-person">
            <span>五星阳光会所</span>
            <span>桑拿</span>
            <span>（骚亮收）</span>
          </div>
          <div class="address-res">
            <span>靓妞来送</span>
          </div>
        </div>
      </div>
      <div class="adress">
        <div class="adress-option">选择收货地址</div>
        <div class="adress-card">
          <div class="address-person">
            <span>职业干饭人</span>
            <span>铁铁的</span>
            <span>（怀泳收）</span>
          </div>
          <div class="address-res">
            <span>靓妞来送</span>
          </div>
        </div>
      </div>
    </div>
    <div class="address-new">使用新地址</div>
    <div class="order">确认订单信息</div>
    <div class="goods-table">
      <div class="goods-tilte1">店铺宝贝</div>
      <div class="goods-tilte2">商品属性</div>
      <div class="goods-tilte3">单价</div>
      <div class="goods-tilte4">数量</div>
      <div class="goods-tilte5">优惠方式</div>
      <div class="goods-tilte6">小计</div>
    </div>
    <div class="goods-sale">
      <div class="goods-img">
        <img src="../../../public/image/chaoshi.png" alt="" />
      </div>
      <div class="goods-wenzi">店铺：天猫超市</div>
    </div>
    <div class="sale-buy">
      <div class="sale-img">
        <img src="../../../public/image/mitaohong.jpg" alt="" />
      </div>
      <div class="sale-attribute">商品精美，用着舒心</div>
      <div class="sale-tast">精装手机</div>
      <div class="sale-price">8900</div>
      <div class="sale-count">2</div>
      <div class="sale-sum">17800.00</div>
    </div>

    <div class="sale-buy">
      <div class="sale-img">
        <img src="../../../public/image/mitaohong.jpg" alt="" />
      </div>
      <div class="sale-attribute">商品精美，用着舒心</div>
      <div class="sale-tast">精装手机</div>
      <div class="sale-price">8900</div>
      <div class="sale-count">2</div>
      <div class="sale-sum">17800.00</div>
    </div>
    <div class="exprese">
      <div class="exprese-1">运送方式：</div>
      <div class="exprese-2">快递</div>
      <div>免邮</div>
      <div class="exprese-3">如需快马加鞭另加费用，没钱免谈</div>
    </div>
    <div class="buypeice">
      <div class="buypeice-weight">总重量：260</div>
      <div class="buypeice-price">实付款：<span>$17800</span></div>
      <div class="buypeice-adress">寄至M78星云</div>
      <div class="buypeice-person">收货人：史帅乐</div>
    </div>
    <button class="btn">提交订单</button>
    <div class="footer">
      <div class="footer-left">
        <img src="../../../public/image/tianmao.png" alt="" />
      </div>
      <div class="footer-right">
        <img src="../../../public/image/tianmaochaoshi.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayDetail",
};
</script>

<style lang="less" scoped>
.Contain {
  width: 100%;
  height: 100%;
}
.header,
.footer {
  width: 1200px;
  height: 64px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
.address-more {
  display: flex;
  width: 1200px;
  height: 110px;
  margin: 0 auto;
}
.adress {
  width: 240px;
  margin-right: 60px;
  background: url(../../../public/image/fangkuang.png) no-repeat;
}
.address-option {
  margin: 10px;
}
.address-person {
  margin: 10px;
  color: #666;
  cursor: pointer;
}
.address-res {
  margin-left: 10px;
  color: #666;
  cursor: pointer;
}
.address-new {
  border-radius: 3px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border-width: 1px;
  color: #333;
  border-color: #a0a2ad;
  background-color: #f2f3f7;
  width: 70px;
  margin: 20px 0 10px 75px;
  cursor: pointer;
}
.order {
  margin-left: 75px;
  line-height: 25px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
}
.goods-table {
  display: flex;
  justify-content: space-around;
  margin: 30px auto 10px;
  border-bottom: 3px solid #b2d1ff;
  width: 1200px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
}
.goods-sale {
  display: flex;
  width: 1200px;
  margin-left: 75px;
  border-bottom: 1px dotted #b2d1ff;
}
.goods-img img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.goods-wenzi {
  font-size: 12px;
}
.sale-buy {
  display: flex;
  width: 1200px;
  border-bottom: 1px dotted #b2d1ff;
  margin: 10px 0 10px 75px;
}
.sale-buy img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.sale-attribute {
  width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-right: 50px;
}
.sale-tast {
  width: 120px;
  color: #3c3c3c;
  font-size: 12px;
  margin-right: 50px;
}
.sale-price {
  color: #3c3c3c;
  width: 120px;
  font-size: 12px;
  text-align: center;
  margin-right: 65px;
}
.sale-count {
  color: #3c3c3c;
  width: 120px;
  font-size: 12px;
  text-align: center;
  margin-right: 280px;
}
.sale-sum {
  color: #3c3c3c;
  width: 120px;
  font-size: 12px;
  text-align: center;
}
.exprese {
  display: flex;
  margin-left: 75px;
  width: 1200px;
  height: 139px;
  border-top: 1px solid rgb(255, 255, 255);
  background-color: rgb(242, 247, 255);
  justify-content: space-around;
  align-items: center;
}
.buypeice {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 3px solid #ff0036;
  width: 450px;
}
.buypeice-weight {
  color: #999;
  text-align: right;
  font-size: 12px;
  width: 415px;
  height: 18px;
  margin: 10px 0 5px;
}
.buypeice-price {
  width: 415px;
  height: 39px;
  text-align: right;
  margin: 10px 0;
  font-weight: 700;
  color: #333;
  font-size: 12px;
}
.buypeice-price span {
  font: 700 26px tahoma;
  color: rgb(255, 0, 54);
}
.buypeice-adress,
.buypeice-person {
  height: 15px;
  width: 415px;
  text-align: right;
  font-size: 12px;
}
button {
  position: absolute;
  right: 60px;
  top: 880px;
  width: 182px;
  height: 39px;
  vertical-align: middle;
  line-height: 39px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  background: #dd2727;
  outline: none;
  color: #fff;
}
.footer {
  margin-top: 250px;
}
</style>
