<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @click='toDetails'>
      <h2 class="all">全部商品分类</h2>
     
      <transition name="search">
        <div class="sort">
          <div class="all-sort-list2" > 
            <div class="item bo" v-for="(item1,index1) in catelist" :key='index1'>
              <h3>
                <!-- 一级分类名称 -->
                <a>{{item1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix" >
                <div class="subitem" >
                  <dl class="fore" v-for="(item2,index2) in item1.categoryChild"  :key="index2">
                    <dt >
                      <!-- 二级分类名称 -->
                      <a>{{item2.categoryName}}</a>
                    </dt>
                    <dd  >
                      <!-- 三级分类名称 -->
                      <em v-for="(item3,index3) in item2.categoryChild"  :key="index3">
                        <a>{{item3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { reqGetCatelist } from '../../../api/catelist'
export default {
  name: "Catelist",
  data() {
    return {
      catelist:{}
    };
  },
  computed: {},
  methods: {
    toDetails(){
      this.$router.push({
        path:'/GoodsDetail'
      })
    }
  },
   async mounted() {
      reqGetCatelist()
      setTimeout(()=>{
        this.catelist = JSON.parse(localStorage.getItem('catelist'));
      },1000)
      
  },
};
</script>

<style  lang="less" scoped>
.item > h3 > a {
  color: white !important;
}
.type-nav {
  // border-bottom: 2px solid #e1251b;
  height: 0px;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    top:-541px;
    left: 10px;
    z-index: 20000;

    .all {
      width: 210px;
      height: 35px;
      background-color: #e1251b;
      line-height: 35px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: white;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 496px;
      position: absolute;
      background: rgba(60,37,23, 0.6);
      z-index: 999;
      // 控制显示隐藏过渡效果
      &.search-enter-active {
        transition: height 0.5s;
        overflow: hidden;
      }
      &.search-enter {
        height: 0px;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 870px;
            height: 495px;
            overflow: hidden;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

               dt {
                  float: left;
                  width: 80px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
