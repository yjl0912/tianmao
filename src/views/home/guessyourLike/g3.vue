<template>
  <div>
    <div class="list" @click="toDetails">
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01eDT1ZV1D8okltiMuJ_!!6000000000172-2-yinhe.png_400x400q60.jpg "
        />
        <div>百草味炭烧腰果100g坚果干果每日休闲</div>
        <span>￥39.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/i4/725677994/O1CN01hSChdL28vImqCenSN_!!2-item_pic.png_400x400q60.jpg"
        />
        <div> 三只松鼠手剥巴旦木120g特产炒货扁桃仁</div>
        <span>￥58.0</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01DeiQOU26ryhAi7A4O_!!6000000007716-2-yinhe.png_400x400q60.jpg"
        />
        <div>绿光膜苹果11钢化膜iphone12手机pro全</div>
        <span>￥16.0</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN010A1B3928vImOmXWBn_!!2-item_pic.png_400x400q60.jpg "
        />
        <div>正宗柳州螺蛳粉300g</div>
        <span>￥40</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/i1/2204180797163/O1CN01FWT9CZ22mha0sgW2E_!!2204180797163.jpg_400x400q60.jpg "
        />
        <div>苏泊尔电热加热水龙头即热式免安装速热</div>
        <span>￥149</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "g3",
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
