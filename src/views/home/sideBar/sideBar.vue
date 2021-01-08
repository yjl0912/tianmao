<template>
  <div>
    <div :class="Bar ? 'sideBarscroll' : 'sideBar'">
      <div class="sideBaritem sideBarHeader">系统导航</div>
      <a class="sideBaritem" href="#a"  >物品分类</a>
      <a class="sideBaritem" href="#b" >知名品牌</a>
      <a class="sideBaritem" href="#d">潮电酷玩</a>
      <a class="sideBaritem" href="#e">美丽人生</a>
      <a class="sideBaritem" href="#f">打造爱巢</a>
      <a class="sideBaritem" href="#g">户外出行</a>
      <a class="sideBaritem" href="#h">猜你喜欢</a>
      <a class="sideBaritem" href="#">回到顶部</a>
    </div>

    <div class= 'top' :class="Bar ? 'topBarscroll' : ' topBar'">
      <div class="logo"><span>TMALL</span><span>天猫</span></div>
      <div class="inputdiv">
        <input
          class="input"
          placeholder="搜索 天猫 商品/品牌/店铺"
          type="text"
          v-model="inputValue"
        />
        <button class="button" @click="toDetails">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      Bar: false,
      top:0,
      inputValue:''
    };
  },
  methods: {
    toDetails(){
      if(this.inputValue!=''){
        this.$router.push({
          path:'/GoodsDetail'
        })
      }
    },
    handleScroll() {
      this.top = window.pageYOffset; //兼容不同的浏览器
      //js不能连等
      if (this.top < 1500) {
        this.Bar = false;
      } else {
        this.Bar = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); //监听滚动事件
  },
};
</script>

<style lang="less" scoped>
.red{
  background-color: #FF7811;
}
.sideBaritem:hover{
  background-color: greenyellow;
}
.logo{
    position: absolute;
    z-index:21 ;
}
.top{
    position: relative;
}
.button {
  width: 60px;
  height: 30px;
  background-color: #ff0036;
  outline: none;
  border: 1px solid #ff0036;
  color: white;
  font-size: 20px;
}
.logo,
.inputdiv {
  margin-left: 150px;
  font-size: 20px;
  color: white;
  position:absolute;

}
.inputdiv{
    left:400px
}

.input {
  width: 500px;
  height: 25px;
  outline: none;
  border: 1px solid #fe0c3f;
  font-size: 12px;
}
.topBar {
  display: none;
}
.topBarscroll {
 
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgba(255, 0, 0, 0.7);
  position: fixed;
   display: block;
   z-index: 20;

}

.sideBar {
  display: none;
}
.sideBarscroll {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 300px;
  left: 70px;
}
.sideBaritem {
  width: 35px;
  height: 35px;
  vertical-align: middle;
  text-align: center;
  background-color: #626262;
  font-size: 12px;
  margin: 1px 0;
  color: white;
  text-decoration-line: none;
}
.sideBarHeader {
  background-color: #ff0036;
}
</style>
