<template>
  <div>
    <div class="list" @click="toDetails">
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img20.360buyimg.com/babel/s320x320_jfs/t1/54776/10/11818/406803/5d8d70ddE740043d5/24dd4b7e08b7dd2b.jpg!cc_320x320.webp"
        />
        <div>琪趣 宝宝画板玩具 儿童大号磁性画板涂鸦绘画琪趣</div>
        <span>￥69</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img11.360buyimg.com/babel/s320x320_jfs/t1/145465/6/16904/114659/5fc854a4E806ca120/bb65ac6a5cf2a53f.jpg!cc_320x320.webp"
        />
        <div> 联想(Lenovo)拯救者R7000P 15.6英寸游戏笔记本电脑</div>
        <span>￥8299</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01zFhjHZ1Ew702guP95_!!6000000000415-2-yinhe.png_400x400q60.jpg"
        />
        <div>广西沙糖桔，橘子新鲜水果10斤装</div>
        <span>￥14.5</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i2/196993935/O1CN01haWYBR1ewHACZOQvv_!!2-item_pic.png_400x400q60.jpg"
        />
        <div>优衣库女装长绒</div>
        <span>￥128</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i4/1917047079/O1CN01Om8cVM22AEO0Eh02h_!!1917047079.jpg_400x400q60.jpg "
        />
        <div>Apple苹果/iPhone12</div>
        <span>￥6299</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuessyourLike",
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
