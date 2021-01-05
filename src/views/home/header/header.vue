<template>
  <div>
    <div class="container">
      <div class="headerLeft">
        喵, 欢迎来到天猫 <a href="">请登录</a> <a href="">免费注册</a>
      </div>
      <div class="headerRight">
        <a href="#" class="item" data-id='1' @mouseenter="mouseenter" @mouseleave='mouseleave'>我的淘宝</a>
        <a href="#" class="item">购物车</a>
        <a href="#" class="item"  data-id='2' @mouseenter="mouseenter" @mouseleave='mouseleave'>收藏夹</a>
        <a href="#" class="item" data-id='3' @mouseenter="mouseenter" @mouseleave='mouseleave'>手机版</a>
        <a href="#" class="item">淘宝版</a>
        <a href="#" class="item">商家支持</a>
        <a href="#" class="item">网站导航</a>
        <div  :class="showid==1?'baby2':'baby1' ">
          <div>已买到的宝贝</div>
          <div>已卖出的宝贝</div>
        </div>
         <div  :class="showid==2?'shouchang2':'shouchang1' " >
          <div>收藏的宝贝</div>
          <div>收藏的店铺</div>
        </div>
        <div  :class="showid==3?'shaoma2':'shaoma1' " >
          <img src='https://img.alicdn.com/tfs/TB1vJ0POwTqK1RjSZPhXXXfOFXa-175-215.png'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      showid:''
    }
  },
  methods:{
    mouseenter(e){
     console.log(e.target.dataset.id)
    this.showid = e.target.dataset.id
    },
    mouseleave(){
      this.showid = ''
    }
  }
};
</script>

<style lang="less" scoped>
.baby1 , .shouchang1 , .shaoma1{
  display: none;
}

.baby2{
  display: block;
  width: 80px;
  height: 60px;
  background-color: white;
  border: 1px solid #666;
  position: absolute;
  top: 30px;
  left:-5px ;
  z-index: 1;
  text-align: center;
}
.shouchang2{
  display: block;
  width: 80px;
  height: 60px;
  background-color: white;
  border: 1px solid #666;
  position: absolute;
  top: 30px;
  left: 115px;
  z-index: 1;
  text-align: center;
}
.shaoma2{
  display: block;
  width: 160px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: turquoise;
  position: absolute;
  top: 30px;
  left: 120px;
  z-index: 10000;
}
.headerLeft > a {
  color: #666;
  text-decoration-line: none;
}
.headerLeft > a:hover {
  color: red;
  cursor: pointer;
}

.container {
  font-size: 10px;
  height: 32px;
  background-color: #f2f2f2;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
}
.headerLeft {
  margin-left: 150px;
}
.headerRight {
  display: flex;
  margin-right: 150px;
  position: relative;
}
.item {
  padding: 0 10px;
  text-decoration-line: none;
  color: #666;
  display: inline-block;
}
.item:hover {
  color: red;
}
</style>
