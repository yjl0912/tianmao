<template>
  <div class="container" @click="toDetails">
    <span class="span1">美丽人生</span> <span>FASHION & BEAUTY</span>
    <div class="left">
      <img
        src=" https://img.alicdn.com/tps/i4/TB1U8CRhKEJL1JjSZFGwu16OXXa.png"
      />
      <div class="text1">焕新换型</div>
      <div class="text2">时尚女装，优雅而知性</div>
    </div>
    <div class="top">
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i4/2200796057976/O1CN01yA9Wap28n3epjxyU3_!!0-item_pic.jpg"
        />
        <div>男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥175</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/2453987611/O1CN016QvxjD265t4IDLOMp_!!0-item_pic.jpg"
        />
        <div>大毛领派克服女濑兔毛内丹2020新款皮草</div>
        <span>￥700</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/2958646529/O1CN01nueKzS1y6KXmffkDm_!!0-item_pic.jpg"
        />
        <div>骆驼动感男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚男鞋</div>
        <span>￥298</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/1859451766/O1CN01GISkn41Ous2W45evy_!!0-item_pic.jpg"
        />
        <div>花花公子宝宝女斜挎包2020新款链条包</div>
        <span>￥239</span>
      </div>
    </div>
    <div class="buttom">
      <div class="item">
        <img
          class="goodsimg"
          src=" https://gw.alicdn.com/bao/uploaded/i2/451154145/O1CN01XEUAht1gUSKQRVE5U_!!0-item_pic.jpg"
        />
        <div>自然堂护手霜套装葡萄不睡保湿滋润防裂</div>
        <span>￥19</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/3459055162/O1CN01JYv2OP1o0F1rHIH1L_!!0-item_pic.jpg"
        />
        <div>一生所爱，专属定制，女款18k钨金戒指</div>
        <span>￥375</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src=" https://gw.alicdn.com/bao/uploaded/i1/3876508607/O1CN01ppfKwO2DS3YCit3Rx_!!0-item_pic.jpg "
        />
        <div>华为gt2带尼龙替换带watchgt编制腕带</div>
        <span>96</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src=" https://gw.alicdn.com/bao/uploaded/i1/2568345169/O1CN016Fu61K1o3RqhKG71Q_!!0-item_pic.jpg"
        />
        <div>红心蒸汽挂烫机家用</div>
        <span>￥349</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods2",
  methods:{
    toDetails() {
      this.$router.push({
           path:'/GoodsDetail'
         })
    }
  }
};
</script>

<style lang="less" scoped>
 .span1{
  font-size: 20px;
  color: red;
}
.text1 {
  width: 70px;
  height: 64px;
  position: absolute;
  top: 400px;
  left: 0px;
  background-color: #010101;
  color: white;
  font-size: 20px;
  text-align: left;
}
.text2 {
  width: 128px;
  height: 64px;
  position: absolute;
  top: 400px;
  left: 70px;
  background-color: rgba(1, 1, 1, 0.5);
  color: white;
  font-size: 20px;
  text-align: left;
}
.left > img {
  width: 235px;
  height: 625px;
}
.left > img:hover {
  filter: brightness(105%);
}
.item > span {
  color: red;
  font-size: 22px;
}
.item > div {
  font-size: 14px;
  color: #666;
}
.goodsimg {
  width: 200px;
  height: 200px;
  margin-left: 18px;
}
.container {
  position: relative;
  margin-left: 110px;
  margin-bottom: 50px;
}
.left {
  width: 235px;
  height: 625px;
  // background-color: aqua;
  position: relative;
}
.top {
  display: flex;
  // background-color:#bfa;
  position: absolute;
  top: 20px;
  left: 258px;
}
.buttom {
  display: flex;
  //  background-color: hotpink;
  position: absolute;
  top: 337px;
  left: 258px;
}
.item {
  width: 236px;
  height: 302px;
  background-color: white;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>
