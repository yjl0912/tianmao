<template>
  <div class="Contain">
    <div class="header">
      <div class="header-left">TMALL天猫</div>
      <div class="header-right">
        <input placeholder="无效的输入内容" />
        <button>搜天猫</button>
      </div>
    </div>
    <div class="goods">
      <div class="goodsimage">
        <div>
          <div class="smallimage">
            <img
              :src="
                skuInfo.skuImageList && skuInfo.skuImageList[current]
                  ? skuInfo.skuImageList[current].imgUrl
                  : '../../../public/image/yanyuqing.jpg'
              "
              alt=""
              ref="event"
            />
          </div>
        </div>

        <div class="event" @mousemove="handleMove"></div>
        <div class="mask" ref="mask"></div>
        <div class="bigimage">
          <img
            :src="
              skuInfo.skuImageList && skuInfo.skuImageList[current]
                ? skuInfo.skuImageList[current].imgUrl
                : '../../../public/image/yanyuqing.jpg'
            "
            alt=""
            ref="bigImg"
          />
        </div>

        <!-- 图片轮播 -->
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(skuImage, index) in skuInfo.skuImageList"
              :key="skuImage.id"
              @click="upcurrent(index)"
            >
              <img :src="skuImage.imgUrl" alt="" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="goodsdetail">
        <span class="goodstitle">
          华为nova5i【现货当天发+送碎屏险】Huawei/华为nova
          5i手机官方旗舰店nova6新品nova5ipro直降nova6se正品5G</span
        >
        <div class="goodsprice">
          <div class="goodsprice-name">价格</div>
          <div class="goodsprice-money">$1628.00</div>
        </div>
        <div class="transport">
          <div class="transport-money">运费</div>
          <div class="transport-address">广东深圳至平顶山</div>
        </div>
        <div class="phonesale">
          <div class="phonesale-count">月销量 <span>1000++</span></div>
          <div class="phonesale-comment">累计评价<span>1867</span></div>
          <div class="phonesale-mark">送天猫积分<span>162</span></div>
        </div>
        <div
          class="network"
          v-for="spuSale in spuSaleAttrList"
          :key="spuSale.id"
        >
          <div class="network-type">{{ spuSale.saleAttrName }}</div>
          <div
            class="netType"
            v-for="spusale in spuSale.spuSaleAttrValueList"
            :key="spusale.id"
          >
            <div
              class="netType-1"
              :class="spusale.isChecked === '1' ? 'active' : ''"
              @click="changeColor(spusale, spuSale.spuSaleAttrValueList)"
            >
              {{ spusale.saleAttrValueName }}
            </div>
          </div>
        </div>
        <div class="buy">
          <div class="buy-count">数量</div>
          <input type="text" :value="num" />
          <div class="buy-change">
            <div class="buy-plus" @click="plus">↑</div>
            <div class="buy-decrease" @click="decrease">↓</div>
          </div>
          <div class="buy-save">库存70件</div>
        </div>
        <div class="footer">
          <div class="footer-buy"  @click="toPay">立即购买</div>
          <div class="footer-shopcart" @click='toshopcart'>加入购物车</div>
        </div>
      </div>
    </div>
    <div class="buyperson">
      <div class="buyperson-item">买主实物展示</div>
      <div class="buyperson-img1">
        <img src="../../../public/image/shiwu3.gif" alt="" />
        <img src="../../../public/image/shiwu5.gif" alt="" />
      </div>
      <div class="buyperson-img2">
        <img src="../../../public/image/shiwu1.gif" alt="" />
        <img src="../../../public/image/shiwu4.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
Swiper.use(Navigation);
import { mapGetters, mapActions } from "vuex";
export default {
  name: "GoodsDetail",
  data() {
    return {
      num: 1,
      current: 0,
    };
  },
  methods: {
    toshopcart(){
      this.$router.push({
        path:'/shopcart'
      })
    },
    toPay(){
      this.$router.push({
        path:'/paydetail'
      })
    },
    ...mapActions(["getProductDetail"]),
    decrease() {
      if (this.num < 1) {
        this.num = 1;
      }
      this.num--;
    },
    plus() {
      if (this.num > 70) return;
      this.num++;
    },
    handleMove() {
      /*  开关*/
      /* event是小图大小 */
      this.maskwidth = this.$refs.event.clientWidth / 2;
      /*   console.log(this.maskwidth); */
      const { offsetX, offsetY } = event;
      /*  console.log(offsetX, offsetY); */
      const maskwidth = this.maskwidth;
      /* console.log(maskwidth); */
      let left = 0;
      let top = 0;
      left = offsetX - maskwidth / 2;
      top = offsetY - maskwidth / 2;
      if (left < 20) {
        left = 20;
      } else if (left > maskwidth) {
        left = maskwidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > maskwidth + 20) {
        top = maskwidth + 20;
      }
      const maskDiv = this.$refs.mask;
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";

      const bigImg = this.$refs.bigImg;
      bigImg.style.left = -2 * left + "px";
      bigImg.style.top = -2 * top + "px";
    },
    upcurrent(index) {
      this.current = index;
    },
    changeColor(spusale, spuSaleAttrValueList) {
      if (spusale.isChecked === "1") return;
      spuSaleAttrValueList.forEach(
        (spuSaleAttr) => (spuSaleAttr.isChecked = "0")
      );
      spusale.isChecked = "1";
    },
  },
  computed: {
    ...mapGetters(["categoryView", "spuSaleAttrList", "skuInfo"]),
  },
  watch: {
    skuInfo() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 3, // 每页显示轮播图的数量
          spaceBetween: 30, // 轮播图间距
          slidesPerGroup: 3, // 切换时切换轮播图的数量
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
  mounted() {
    this.getProductDetail(123);
  },
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
.Contain {
  width: 100%;
}
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c8baaa;
}
.header-left {
  color: #ff0036;
  font-weight: 400;
  width: 140px;
  height: 60px;
  line-height: 60px;
  align-content: center;
  margin-bottom: 18px;
}
.header-right {
  width: 458px;
  height: 60px;
}
.header-right input {
  width: 367px;
  height: 22px;
  align-items: center;
  line-height: 29px;
  margin-top: 20px;
  border: solid #ff0036;
  border-right: none;
  outline: none;
}
.header-right button {
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background-color: #ff0036;
  letter-spacing: 0;
  border: none;
}
.goods {
  display: flex;
  position: relative;
}
.goodsimage {
  width: 500px;
  height: 560px;
}
.smallimage {
  width: 418px;
  background-color: #fff;
  margin: 20px;
}
.smallimage img {
  width: 418px;
  height: 418px;
}

.bigimage {
  width: 418px;
  height: 418px;
  overflow: hidden;
  position: absolute;
  left: 458px;
  top: 0px;
  display: none;
}
.bigimage img {
  width: 936px;
  height: 936px;
  position: absolute;
}
.mask {
  width: 214px;
  height: 214px;
  background-color: #8dd4fe;
  opacity: 0.6;
  position: absolute;
  left: 0px;
  top: 0px;
  display: none;
}
.swiper-slide {
  width: 123px;
}
.swiper-slide img {
  width: 60px;
  height: 60px;
  margin-left: 30px;
}
.swiper-button-next,
.swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background: rgb(235, 235, 235);
  border: 1px solid rgb(204, 204, 204);
  top: 0;
  margin-top: 0;
  &::after {
    font-size: 12px;
  }
}
.goodsdetail {
  width: 530px;
  height: 560px;
}
.goodstitle {
  display: block;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.goodsprice {
  display: flex;
  width: 440px;
  height: 30px;
  margin: 8px 0;
  background-color: #f0efef;
}
.goodsprice-name {
  color: #999;
  font-size: 12px;
  text-align: left;
  width: 69px;
  /* margin: 0 0 0 8px; */
  margin-bottom: 8px;
  height: 30px;
  line-height: 30px;
}
.goodsprice-money {
  color: #ff0036;
  font-size: 24px;
  font-weight: bolder;
  line-height: 30px;
}
.transport {
  display: flex;
}
.transport-money {
  color: #999;
  font-size: 12px;
  text-align: left;
  margin: 10px 50px 10px 0;
}
.transport-address {
  color: #333;
  font-size: 12px;
  margin-top: 10px;
}
.phonesale {
  display: flex;
  border: 1px dotted #c9c9c9;
  margin: 10px 0;
  justify-content: space-around;
}
.phonesale-count,
.phonesale-comment,
.phonesale-mark {
  line-height: 16px;
  height: 16px;
  color: #999;
  text-align: center;
  font-size: 12px;
  margin-right: 20px;
  border-right: 1px solid;
  margin: 10px 20px 10px 10px;
}
.phonesale span {
  color: #ff0036;
  margin-right: 20px;
}
.network {
  display: flex;
  width: 500px;
  height: 42px;
}
.network-type {
  color: #838383;
  text-align: left;
  margin-top: 20px;
  font-size: 12px;
  width: 66px;
  flex-shrink: 0;
}
.netType {
  display: flex;
}
.netType-1,
.netType-2,
.netType-3,
.netType-4 {
  border: 2px solid #ff0036;
  text-align: center;
  color: #000;
  background-color: #fff;
  line-height: 28px;
  height: 28px;
  font-size: 12px;
  margin: 10px 20px 10px 10px;
  width: 60px;
}
.active {
  background-color: yellow;
}
.buy {
  display: flex;
  margin-top: 20px;
}
.buy-count {
  color: #838383;
  text-align: left;
  font-size: 12px;
  width: 66px;
  margin-top: 5px;
}
.buy input {
  font-size: 12px;
  height: 24px;
  border: 1px solid #a7a6ac;
  width: 36px;
  color: #666;
  outline: none;
}
.buy-plus,
.buy-decrease {
  width: 16px;
  height: 12px;
  border: 1px solid #a7a6ab;
  font-size: 16px;
  cursor: pointer;
  line-height: 12px;
  overflow: hidden;
  text-align: center;
}
.buy-save {
  color: #878787;
  margin-left: 18px;
  font-size: 16px;
}
.footer {
  display: flex;
}
.footer-buy,
.footer-shopcart {
  width: 178px;
  background-color: #ffeded;
  border: 1px solid #ff0036;
  color: #5e464b;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  margin-top: 50px;
}
.footer-shopcart {
  background-color: #ff0036;
  color: #fff;
  margin-left: 20px;
}
.buyperson-item {
  font-size: 16px;
  margin-left: 75px;
  background-color: #ffeded;
}
.buyperson-img1,
.buyperson-img2 {
  display: flex;
}
.buyperson .buyperson-img1 img,
.buyperson .buyperson-img2 img {
  margin-left: 75px;
  width: 580px;
  height: 305px;
}
.buyperson-img2 {
  margin-top: 20px;
}
.event:hover ~ .mask {
  display: block;
}
.event:hover ~ .bigimage {
  display: block;
}
.event {
  width: 418px;
  height: 418px;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 998;
}
</style>
