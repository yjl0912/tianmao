<template>
<div class='outercontainer' >
  <div class="container">
    <img
      class="img"
      src="https://img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png "
    />
    <img
      class="img"
      src=" https://img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png "
    />
    <a class="nav" href='#'>天猫会员</a>
    <a class="nav" href='#'>电器城</a>
    <a class="nav" href='#'>喵鲜生</a>
    <a class="nav" href='#'>医药馆</a>
    <a class="nav" href='#'>魅力惠</a>
    <a class="nav" href='#'>飞猪旅行</a>
    <a class="nav" href='#'>苏宁易购</a>
  </div>
  <div class="border"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="less" scoped>
.border{
  height: 0px;
  border:1px solid red;
}
.nav {
  height: 35px;
  cursor: pointer;
  float: left;
  padding: 0 8px;
  font-weight: 500;
  font-size: 16px;
  display: block;
  color: #333;
  letter-spacing: normal;
  position: relative;
  text-decoration-line: none;
}
.nav:hover{
    color:#ff0036  ;
  
}
.container {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-left: 370px;
  background-color: 100%;
}

.img {
  width: 100px;
  height: 30px;
  margin-top: 5px;
  display: block;
  padding: 0 10px;
}
.outercontainer{
  width: 100%;
  background-color: white;
}
</style>
