<template>
  <div class="shopcart-container">
    <div class="shop-top">
      <div class="shop-header">
        <div class="navigation">
          <a href="##">手机逛淘宝</a>
          <a href="##">淘宝网首页</a>
          <a href="##">我的淘宝</a>
          <a href="##">购物车</a>
          <a href="##">商品分类</a>
          <a href="##">收藏夹</a>
          <a href="##">网站导航</a>
          <a href="##">联系客服</a>
        </div>
      </div>
      <div class="logo-search">
        <div class="shop-logo">
          <h1 class="logoArea">
            <router-link to="/">
              <img src="./images/logos.png" alt="" />
            </router-link>
          </h1>
        </div>
        <div class="shop-search">
          <form action="/xxx" class="searchForm" @submit.prevent="search">
            <input type="text" />
            <button>搜索</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
};
</script>

<style lang="less" scoped>
.shopcart-container {
  .shop-top {
    width: 100%;
    .shop-header {
      width: 100%;
      background: #ececec;
      .navigation {
        width: 990px;
        display: flex;
        margin: 0 auto;
        height: 35px;
        line-height: 35px;
        align-content: center;

        justify-content: space-around;
        a {
          display: inline-block;
          text-decoration: none;
          color: #6c6c6c;
          font-size: 12px;
        }
      }
    }
    .logo-search {
      display: flex;
      .shop-logo {
        width: 60px;
        height: 45px;
        .logoArea {
          float: left;

          .logo {
            img {
              width: 175px;
              margin: 25px 45px;
            }
          }
        }
      }
    }
  }
}
</style>
