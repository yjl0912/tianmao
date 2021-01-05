<template>
  <div class="container">
    <span>潮电酷玩</span> <span>ELECTRONICS</span>
    <div class="left">
      <img
        src=" https://img.alicdn.com/tps/i4/TB1sgSzhFcJL1JjSZFOwu3WlXXa.png"
      />
      <div class="text1">明星同款</div>
      <div class="text2">畅想音乐耳机发烧友</div>
    </div>
    <div class="top">
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/3461000086/O1CN01UKi7km1CVQcevUMtZ_!!0-item_pic.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i1/2111544756/O1CN01A5VvM21l0IGcfn0tc_!!2111544756.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i3/2099164071/O1CN01b14HzL1fwYtpTLTBK_!!0-item_pic.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i4/1773705656/O1CN01HfyKWT1reUmq31ngW_!!0-item_pic.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
    </div>
    <div class="buttom">
      <div class="item">
        <img
          class="goodsimg"
          src=" https://gw.alicdn.com/bao/uploaded/i1/1629284890/TB2fSTQrVkoBKNjSZFEXXbrEVXa_!!1629284890-0-item_pic.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://gw.alicdn.com/bao/uploaded/i4/650568026/O1CN01aaEACf299xTXd3ss3_!!0-item_pic.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://img.alicdn.com/bao/uploaded/i3/2772080898/O1CN01xuz7dm1IVKIGjFVni_!!2-item_pic.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
      <div class="item">
        <img
          class="goodsimg"
          src="https://img.alicdn.com/bao/uploaded/bao/upload/O1CN01wZbics1FOVZ8WDgUH_!!6000000000477-2-yinhe.png_400x400q60.jpg"
        />
        <div>JEEP/吉普男士冬季棉衣翻领时尚休闲夹克男纯色加绒加厚外套男装</div>
        <span>￥366</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
};
</script>

<style lang="less" scoped>
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
  background-color: rgba(1,1,1,0.5);
  color: white;
  font-size: 20px;
  text-align: left;
  
}
.left > img {
  width: 235px;
  height: 625px;
}
.left > img:hover{
  filter:brightness(105%)
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
