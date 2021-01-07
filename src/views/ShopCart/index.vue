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
            <span class="selected"
              >已选商品&nbsp;&nbsp;{{ total }}&nbsp;&nbsp;件（不包含运费）</span
            >
            <span class="pice">￥{{ totalPrice }}</span>
            <span class="settlement">结算</span>
          </div>
        </div>
        <div class="cart-main">
          <!-- 商品列表头部 -->
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
          <!-- 商品 -->
          <div class="all">
            <div
              class="order-all"
              v-for="shopCart in shopCartList"
              :key="shopCart.id"
            >
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
                            <input
                              type="checkbox"
                              :checked="shopCart.isChecked"
                              @click="isCheck(shopCart.id)"
                            />
                          </li>
                          <li class="bu-tn1">
                            <div class="bu-img">
                              <img :src="shopCart.imgUrl" alt="" />
                              <div class="bu-details">
                                {{ shopCart.skuName }}
                              </div>
                            </div>
                          </li>
                          <li class="bu-tn2">
                            <div class="bu-colot">
                              颜色分类:{{ shopCart.color }}
                            </div>
                          </li>
                          <li class="bu-tn3">
                            <div class="bu-pice">￥{{ shopCart.price }}</div>
                            <div class="bu-pices">
                              ￥{{ shopCart.skuPrice }}
                            </div>
                          </li>
                          <li class="bu-tn4">
                            <button
                              class="bu-reduce"
                              @click="reduce(shopCart.id)"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              :value="shopCart.skuNum"
                              @input="formatSkuNum"
                            />
                            <button class="plus" @click="plus(shopCart.id)">
                              +
                            </button>
                          </li>
                          <li class="bu-tn5">
                            <div class="bu-picess">
                              ￥{{ shopCart.skuPrice * shopCart.skuNum }}
                            </div>
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
            <!-- <div class="order-all">
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
                            <input type="text" value="1" />
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
            </div> -->
          </div>
        </div>
        <div class="cart-foot">
          <div class="float-bar">
            <div class="float-wrapper">
              <div class="selects-all">
                <div class="cart-checkbox">
                  <input type="checkbox" />
                </div>
                &nbsp;全选
              </div>
              <div class="operations">
                <span class="delete-selected">删除</span>
                <span class="clear-invalid">清除失效宝贝</span>
                <span classi="batch-fav">移入收藏夹</span>
                <span class="batch-share">分享</span>
              </div>
              <div class="float-right">
                <div class="amount-num">
                  <span>已选商品</span>
                  <span class="quantity">{{ total }}</span>
                  <span>件</span>
                </div>
                <div class="price-num">
                  <span class="total">合计（不含运费）：</span>
                  <div class="txt-price">
                    <span>￥{{ totalPrice }}</span>
                  </div>
                </div>
                <div class="btn-area">
                  <span class="settlement">结&nbsp;&nbsp;算</span>
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
// 引入vuex
// import { mapActions } from "vuex";
import { reqGetCartList } from "../../api/shopcart";
export default {
  name: "ShopCart",
  data() {
    return {
      num: 1,
      shopCartList: [],
    };
  },
  // 监视
  watch: {},
  // 计算属性
  computed: {
    // 商品总量
    total() {
      return (
        this.shopCartList
          // 过滤 保留isChecked为1的 已选商品 然后使用 reduce方法进行累加
          .filter((shopCart) => shopCart.isChecked === 1)
          .reduce((p, c) => p + c.skuNum, 0)
      );
    },
    // 商品总价格
    totalPrice() {
      return this.shopCartList
        .filter((shopCart) => shopCart.isChecked === 1)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0);
    },
  },
  methods: {
    reduce(id) {
      this.shopCartList.map((cart) => {
        if (cart.id === id) {
          cart.skuNum--;
        }
        // 判断 输入的数量不能小于1
        if (cart.skuNum < 1) {
          cart.skuNum = 1;
        }
      });
    },
    plus(id) {
      this.shopCartList.map((cart) => {
        if (cart.id === id) {
          cart.skuNum++;
        }
        // 判断输入的数量不能大于10
        if (cart.skuNum > 10) {
          cart.skuNum = 10;
        }
      });
    },
    // 勾选商品的回调
    isCheck(id) {
      this.shopCartList.map((cart) => {
        if (cart.id === id) {
          cart.isChecked = !cart.isChecked;
        }
        if (cart.isChecked) {
          cart.isChecked = 1;
        } else {
          cart.isChecked = 0;
        }
      });
    
    },
    // ...mapActions(["getCartList"]),
    // 格式化数据 手动输入数量
    formatSkuNum(e) {
      // console.log(e.target.value)
      // 使用replace 方法替换掉非法数字 并重新赋值给skuNum
      let skuNum = +e.target.value.replace(/\D+/g, " ");
      // 判断 输入的数量不能小于1
      if (skuNum < 1) {
        skuNum = 1;
        // 判断输入的数量不能大于10
      } else if (skuNum > 10) {
        skuNum = 10;
      }
      // 更新输入的值
      e.target.value = skuNum;
    },
  },
  // 增加 减少 数量
  //   updateCount(skuId, skuNum, count) {
  //     // 判断 如果商品数量小于等于1  减少
  //     if (count <= 1 && skuNum === -1) {
  //       if (window.confirm("您是否是要删除当前商品?")) {
  //         // 是就删除
  //       }
  //       // 不是就return
  //       return;
  //     }
  //     // 判断 如果商品大于等于10
  //     if (count >= 10 && skuNum === 1) {
  //       alert("超出库存了");
  //       return;
  //     }
  //     this.update();
  //   },
  // },
  // 生命周期
  async mounted() {
    const result = await reqGetCartList();
    // console.log(result);
    this.shopCartList = result;
    // console.log(this.shopCartList);
  },
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
        h3 {
          // text-align: center;
          margin: 0;
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

          .spm {
            font-weight: 700;
          }
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
                  height: 135px;
                  border: 1px solid #ccc;
                  // border-top: none;
                  .item-list {
                    width: 988px;
                    margin-top: -16px;
                    .item-bu {
                      display: flex;
                      padding-left: 0px;
                      padding-top: 16px;
                      margin-left: 1px;
                      // background-color: #f0f0f0;
                      background-color: #fcfcfc;
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
                        .bu-pice {
                          color: #9c9c9c;
                          text-decoration: line-through;
                          font-family: Arial;
                        }
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
                          // font-size: 16px;
                          // color: salmon;
                          color: #f40;
                          font-weight: 600;
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
  // 底部 结算
  .cart-foot {
    // margin-top: -22px;
    .float-bar {
      .float-wrapper {
        width: 990px;
        height: 50px;
        margin: 0 auto;
        background: #e5e5e5;
        overflow: hidden;
        display: flex;
        .selects-all {
          display: flex;
          // width: 50px;
          height: 50px;
          font-size: 12px;
          line-height: 50px;
          padding-left: 4px;
          margin-right: 10px;
          .cart-checkbox {
            padding: 2px 4px 0 0;
          }
        }
      }
    }
  }
  .operations {
    // margin-left: 20px;
    width: 280px;
    height: 50px;
    line-height: 50px;
    margin-top: -2px;
    span {
      display: inline-block;
      text-decoration: none;
      font-size: 12px;
      height: 50px;
      margin-left: 26px;
    }
  }
  .float-right {
    // width: 300px;
    display: flex;
    margin-left: auto;
    span {
      display: inline-block;
    }
    .amount-num {
      display: flex;
      height: 48px;
      line-height: 48px;
      font-size: 12px;
      span {
        margin-left: 6px;
      }
      .quantity {
        font-weight: 600;
        font-size: 18px;
        color: #f40;
      }
      .total {
        // width: 108px;
        margin: 0;
      }
    }
    .price-num {
      display: flex;
      font-size: 12px;
      margin-left: 50px;
      .total {
        height: 48px;
        line-height: 48px;
      }
      .txt-price {
        height: 50px;
        line-height: 50px;
        span {
          font-weight: 700;
          font-size: 20px;
          padding: 0 3px;
          color: #f40;
        }
      }
    }
    .btn-area {
      // margin-left: 50px;
      width: 120px;
      height: 50px;
      .settlement {
        background: #b0b0b0;
        color: #fff;
        border-left: 1px solid #e7e7e7;
        width: 119px;
        cursor: not-allowed;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
      }
    }
  }
}
</style>
