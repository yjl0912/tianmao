<template>
  <div>
    <div class="list">
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01AAl2tD1tRKdneDBKB_!!6000000005898-2-yinhe.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01GqZb6q1quEmmBHxGI_!!6000000005555-2-yinhe.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01GU9wXt1vejScc1nx7_!!6000000006198-2-yinhe.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src="https://img.alicdn.com/bao/uploaded/i2/196993935/O1CN01haWYBR1ewHACZOQvv_!!2-item_pic.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="guessyourlike"
          src=" https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01zFhjHZ1Ew702guP95_!!6000000000415-2-yinhe.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuessyourLike",
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
