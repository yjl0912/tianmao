<template>
  <div>
    <div class="list" @click="toDetails">
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i1/619123122/O1CN01gjYKUQ1Yvv5eplL8b_!!2-item_pic.png_400x400q60.jpg  "
        />
        <div>良品铺子鹌鹑蛋小吃零食</div>
        <span>￥25.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="  https://img.alicdn.com/bao/uploaded/i1/2331463956/O1CN01cH2nqC1f5tRQyMfkD_!!2331463956.jpg_400x400q60.jpg "
        />
        <div> 奥克斯煮蛋机自动断电迷你鸡蛋机</div>
        <span>￥29.99</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/O1CN018I8DNz1Rnwy2LicRO_!!6000000002157-2-yinhe.png_400x400q60.jpg "
        />
        <div>小米充电宝移动电源10000毫安</div>
        <span>￥79.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i1/3679282456/O1CN01WcBeuk1U0tKgXTmlV_!!3679282456.jpg_400x400q60.jpg  "
        />
        <div>雀巢咖啡特浓条装蓝山三合一袋</div>
        <span>￥35</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="  https://img.alicdn.com/bao/uploaded/i2/3426460083/O1CN01RGRRSD1CU3ThPeIwb_!!0-item_pic.jpg_400x400q60.jpg "
        />
        <div>美的电饭煲家用4L电饭锅迷你小型1-2人</div>
        <span>￥169</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "g4",
  methods:{
    toDetails(){
      this.$router.push({
           path:'/GoodsDetail'
         })
    }
  }
};
</script>

<style lang="less" scoped>
.item > span{
   color: red;
  font-size: 22px;
}
.item > div {
  font-size: 14px;
  color: 666;
}
.guessyourlike {
  width: 200px;
  height: 200px;
  margin: 0 0 0 5px;
}
.list {
  display: flex;
  margin-left: 95px;
}
.item {
  width: 225px;
  height: 300px;
  background-color: white;
  margin: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
