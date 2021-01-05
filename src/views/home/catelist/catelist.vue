<template>
  <div>
    <div
      class="catelist"
      @mouseenter="listShow = true"
      @mouseleave="listShow = false"
    >
      <div class="listheader">商品分类</div>
      <div class="list">女装/内衣</div>
      <div class="list">男装/运动户外</div>
      <div class="list">女鞋/男鞋/箱包</div>
      <div class="list">美妆/个人护理</div>
      <div class="list">腕表/眼镜/珠宝首饰</div>
      <div class="list">手机/数码/电脑办公</div>
      <div class="list">母婴玩具</div>
      <div class="list">零食/茶酒/进口食品</div>
      <div class="list">生鲜水果</div>
      <div class="list">大家电/生活电器</div>
      <div class="list">家具建材</div>
      <div class="list">汽车/配件/用品</div>
      <div class="list">家纺/家饰/鲜花</div>
      <div class="list">医药保健</div>
      <div class="list">厨具/收纳/宠物</div>
      <div class="list">图书音像</div>
    </div>

    <div :class="listShow ? 'bigshow' : 'bighide'" class="bigblock">
      <div :class="listShow ? 'smallshow' : 'smallhide'">
        <div class='detailsContainer'>
          <div class="product2"><span>热门手机</span>></div>
          <div class="product3">
            <span>小米</span>
            <span>iPhone</span>
            <span>魅族</span>
            <span>荣耀</span>
            <span>乐视</span>
            <span>OPPO</span>
            <span>vivo</span>
            <span>三星</span>
            <span>华为</span>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  name: "Catelist",
  data() {
    return {
      listShow: false,
    };
  },
};
</script>

<style lang="less" scoped>
.product2{
  color: black;
  font-weight: 700;
}
.product3{
  padding: 0 30px;
}
.product3 > span{
  padding-right: 10px;
  color: #666;
}
.detailsContainer{
  display: flex;
  padding-top: 20px;
  padding-left: 30px;

}

.bigblock {
  position: absolute;
  top: 203px;
  left: 360px;
  z-index: 3;
}
.smallshow {
  display: block;
  width: 700px;
  height: 498px;
  background-color: white;
}
.smallhide {
  display: none;
}
.bigshow {
  display: block;
  width: 900px;
  height: 498px;
  background-color: #f5f5f5;
}
.catelist {
  position: absolute;
  top: 168px;
  left: 160px;
  z-index: 2;
}
.list {
  width: 170px;
  height: 31px;
  line-height: 31px;
  color: white;
  background-color: rgba(44, 44, 44, 0.5);
  padding-left: 30px;
}
.list:hover {
  background-color: white;
  color: #fc2e01;
}
.list::after :hover {
  display: block;
  width: 200px;
  height: 200px;
  background-color: turquoise;
}
.listheader {
  height: 36px;
  line-height: 36px;
  font-weight: 700;
  background-color: red;
  color: white;
  padding-left: 30px;
}
// .wrapper::before {
//   /* 需要显示的内容为空 */
//   content: "";
//   /* color: #fff; */
//   display: none;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.3) url(success.png) no-repeat center;
//   background-size: 30px 30px;
// }
// .wrapper:hover::before {
//   display: block;
// }
</style>
