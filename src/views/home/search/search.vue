<template>
  <div class="container">
    <img
      class="logo"
      src="https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png"
    />
    <div class="right">
      <input
        class="searchInput"
        type="text"
        placeholder="搜索天猫 商品/商铺/品牌"
        v-model="inputValue"
      />
      <button class="button" @click='search'>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
      return{
        inputValue:''
      }
  },
  methods:{
    search(){
       if(this.inputValue !=''){
         this.$router.push({
           path:'/GoodsDetail'
         })
       }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 130px;
  display: flex;
   background-color: white;
  line-height: 130px;
  justify-content: space-between;
  padding-left: 150px;
  
}
.right{
 margin-right:400px ;
}
.logo {
  width: 240px;
  height: 130px;
  margin: 8px 25px;
  display: inline-block;
}

.searchInput {
  width: 447px;
  height: 37px;
  outline: none;
  border: 2px solid #ff0036;
}
.button {
  width: 132px;
  height: 42px;
  background-color: #ff0036;
  outline: none;
  border: 1px solid #ff0036;
  color: white;
  font-size: 20px;
  position: relative;
  top: 3px;
  left: 0;
}
</style>
