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
      <!-- <div class="logo-search">
        <h1 class="logoArea">
          <router-link to="/">
            <img src="./images/logos.png" alt="" />
            <span class="cart-logo">购物车</span>
          </router-link>
        </h1>
        <div class="shop-search">
          <form action="/xxx" class="searchForm" @submit.prevent="search">
            <input type="text" />
            <button>搜索</button>
          </form>
        </div>
      </div> -->
      <!-- 头部第二行 Search搜索 -->
      <!-- <div class="header-buttom">
        <h1 class="logo-area">
          <router-link class="logo" title="淘宝网" to="/">
            <img src="./images/logos.png" alt="" />
          </router-link>
        </h1>
        <div class="search-area">
          <form class="search-form">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="searchText"
            />
            <button class="sui-btn btn-xlarge btn-dander">搜索</button>
          </form>
        </div>
      </div> -->
      <div class="header-buttom">
        <div class="logoArea">
          <img src="./images/logos.png" alt="" />
          <h3>购物车</h3>
        </div>
        <div class="search-area">
          <input type="text" />
          <button>搜索</button>
        </div>
      </div>
      <!-- 购物车列表 -->
      <div class="cart">
        <div class="cart-bar">
          <ul class="switch-cart">
            <li class="cart-shop">
              <span class="spm">全部商品</span>
              <span class="number">84</span>
            </li>
            <li class="cart-shop">
              <span class="spm">降价商品</span>
              <span class="number">0</span>
            </li>
            <li class="cart-shop">
              <span class="spm">库存紧张</span>
              <span class="number">0</span>
            </li>
          </ul>
          <div class="cart-sum">
            <span class="selected">已选商品（不包含运费）</span>
            <span class="pice">0.00</span>
            <span class="settlement">结算</span>
          </div>
        </div>
        <div class="cart-main">
          <div class="cart-table-th">
            <div class="wp">
              <div class="th-chk">
                <input type="checkbox" />
                <div class="select-all">全选</div>
                <div class="td-inner">商品信息</div>
                <div class="ko"></div>
                <div class="td-oper">单价</div>
                <div class="td-oper">数量</div>
                <div class="td-oper">金额</div>
                <div class="td-oper">操作</div>
              </div>
            </div>
          </div>
          <div class="order-all">
            <div class="order-list">
              <div class="shop-info">
                <input type="checkbox" />
                <div class="makepoint">
                  <img src="" alt="" />
                </div>
                <div class="shop-name">
                  <span class="sh-op">店铺：</span>
                  <span class="sh-name">innisfree旗舰店</span>
                </div>
              </div>
            </div>
            <div class="order-content">
              <div class="bundle-list">
                <div class="bundle">
                  <div class="bundle-hd">
                    <div class="td-chk"></div>
                    <div class="bd-title">1月日常99包邮</div>
                    <div class="bd-promos">满99</div>
                  </div>
                  <div class="bundle-main">
                    <div class="item-list">
                      <ul class="item-bu">
                        <li class="bu-tn">
                          <input type="checkbox" />
                        </li>
                        <li class="bu-tn1">
                          <div class="bu-img">
                            <img src="./images/shanfeng.jpg" alt="" />
                            <div class="bu-details">
                              [抢先加购]innisfree/悦诗风吟控油矿物质薄荷定妆散粉持久自然
                            </div>
                          </div>
                        </li>
                        <li class="bu-tn2">
                          <div class="bu-colot">颜色分类:白色</div>
                        </li>
                        <li class="bu-tn3">
                          <div class="bu-pice">￥158.00</div>
                          <div class="bu-pices">￥128.00</div>
                        </li>
                        <li class="bu-tn4">
                          <button class="bu-reduce">-</button>
                          <input type="text" />
                          <button class="plus">+</button>
                        </li>
                        <li class="bu-tn5">
                          <div class="bu-picess">￥128.00</div>
                        </li>
                        <li class="bu-tn6">
                          <div class="bu-a">
                            <a href="##">移入收藏夹</a>
                            <div>
                              <a href="##">删除</a>
                            </div>
                            <a href="##">相似宝贝</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  margin-bottom: 100px;
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
    .header-buttom {
      display: flex;
      justify-content: space-between;
      width: 990px;
      // height: 95px;
      margin: 0 auto;
      padding: 20px;

      .logoArea {
        width: 200px;
        height: 36px;
        display: flex;
        img {
          width: 140px;
          height: 36px;
        }
        h3{
          // text-align: center;
          margin: 0 ;
        }
       
      }
      .search-area {
        width: 515px;
        height: 35px;
        input {
          box-sizing: border-box;
          width: 453px;
          height: 36px;
          border: 4px solid #ea4a36;
          float: left;
          // 表单获取焦点的时候去除轮廓
          &:focus {
            outline: none;
          }
        }
        button {
          height: 36px;
          width: 62px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: right;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
      }
    }
    .cart {
      .cart-bar {
        width: 990px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        border-bottom: 2px solid #e6e6e6;
        .switch-cart {
          margin-left: -20px;
          display: flex;
          list-style: none;
          // font-size: 16px;
          .cart-shop {
            font-size: 16px;
            margin-right: 20px;
            border-right: 1px solid #ccc;
            .number {
              padding: 4px;
              color: salmon;
            }
          }
        }
      }
      .cart-sum {
        float: right;
        height: 25px;
        line-height: 25px;
        margin-top: 14px;
        .selected {
          // width: 120px;
          font-size: 8px;
          display: inline-block;
        }
        .pice {
          margin-right: 6px;
          color: salmon;
          display: inline-block;
        }
        .settlement {
          background: #aaa;
          color: #fff;
          cursor: not-allowed;
          width: 55px;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          font-size: 12px;
          border-radius: 5px;
        }
      }
      .cart-main {
        width: 990px;
        margin: 0 auto;
        .cart-table-th {
          width: 990px;
          height: 50px;
          line-height: 50px;

          .th-chk {
            padding-left: 20px;
            height: 50px;
            display: flex;
            input {
              width: 15px;
              height: 15px;
              margin-top: 18px;
              line-height: 15px;
            }
            .select-all {
              padding-left: 6px;
              font-size: 8px;
            }
            .td-inner {
              font-size: 8px;
              // width: 302px;
              height: 50px;
              padding: 0 100px;
            }
            .ko {
              width: 192px;
              height: 50px;
            }
            .td-oper {
              width: 105px;
              height: 50px;
              font-size: 8px;
              text-align: center;
            }
          }
        }
        .order-all {
          padding-top: 10px;
          .order-list {
            .shop-info {
              display: flex;
              padding-left: 20px;
              .shop-name {
                font-size: 8px;
                padding: 0 8px;
              }
            }
          }
          .order-content {
            width: 100%;
            height: 100%;
            .bundle-list {
              // border: 1px solid #ccc;
              width: 990px;
              height: 200px;
              .bundle {
                height: 38px;
                // border-bottom: 1px solid #ccc;
                .bundle-hd {
                  display: flex;
                  line-height: 38px;
                  border: 1px solid #ccc;
                  border-bottom: none;
                  .bd-title {
                    padding: 0 8px;
                    height: 22px;
                    line-height: 22px;
                    color: #6c6c6c;
                    margin: 8px 20px 8px 50px;
                    background: #e7e7e7;
                    position: relative;
                    font-size: 8px;
                    border-radius: 3px;
                  }
                  .bd-promos {
                    font-size: 12px;
                  }
                }
                .bundle-main {
                  width: 988px;
                  height: 120px;
                  border: 1px solid #ccc;
                  // border-top: none;
                  .item-list {
                    width: 988px;

                    .item-bu {
                      display: flex;
                      padding-left: 0px;
                      margin-left: 1px;
                      li {
                        list-style: none;
                      }
                      .bu-tn {
                        width: 45px;
                        input {
                          margin-left: 20px;
                        }
                      }
                      .bu-tn1 {
                        .bu-img {
                          display: flex;
                          .bu-details {
                            width: 180px;
                            height: 40px;
                            margin: 8px;
                            font-size: 12px;
                          }
                        }
                        img {
                          width: 80px;
                          height: 80px;
                          border: 1px solid #ccc;
                        }
                      }
                      .bu-tn2 {
                        width: 170px;
                        padding: 16px 20px;
                        .bu-colot {
                          font-size: 12px;
                        }
                      }
                      .bu-tn3 {
                        width: 120px;
                        height: 119px;
                      }
                      .bu-tn4 {
                        width: 120px;
                        height: 119px;
                        input {
                          width: 30px;
                        }
                        button {
                          border: none;
                          height: 22px;
                        }
                      }
                      .bu-tn5 {
                        width: 105px;
                        height: 119px;
                        .bu-picess {
                          font-size: 12px;
                          color: salmon;
                        }
                      }
                      .bu-tn6 {
                        width: 85px;
                        padding: 0 0 0 15px;
                        a {
                          text-decoration: none;
                          font-size: 12px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
