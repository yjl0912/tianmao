<template>
  <div>
    <div class="list" @click="toDetails">
      <div class="item">
        <img
          class="guessyourlike"
          src="   https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01xT8Yyy1oY8RVmx9r6_!!6000000005236-2-yinhe.png_400x400q60.jpg "
        />
        <div>维达棉立体美压花抽纸3层100抽6包</div>
        <span>￥29.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/TB1YmPsH1L2gK0jSZPhXXahvXXa.png_400x400q60.jpg "
        />
        <div> 维达无心卷纸4层78克10卷中棒卫生</div>
        <span>￥39.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01IAWf911LPJyTRxQey_!!6000000001291-2-yinhe.png_400x400q60.jpg  "
        />
        <div>百草味麻辣零食大礼包</div>
        <span>￥39.9</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/TB1_gzhHYr1gK0jSZR0XXbP8XXa.png_400x400q60.jpg  "
        />
        <div>walch/韦鲁斯抑菌洗手液525ml</div>
        <span>￥20</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="  https://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01bMrRrI28vIn67AZdE_!!2-item_pic.png_400x400q60.jpg "
        />
        <div>三只松鼠手撕面包1kg整箱网红零食礼包</div>
        <span>￥29.9</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "g2",
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
