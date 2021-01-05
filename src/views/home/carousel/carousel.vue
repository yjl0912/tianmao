<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide size">
        <img
          class="img"
          style="width: 740px; height: 464px"
          src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000001596/O1CN015HvqTu1Nf0lo2beBi_!!6000000001596-0-octopus.jpg"
        />
      </div>
      <div class="swiper-slide size">
        <img
          class="img"
          style="width: 740px; height: 464px"
          src="https://gw.alicdn.com/bao/uploaded/i4/725677994/O1CN01scdd5v28vImTBQjpV_!!0-item_pic.jpg"
        />
      </div>
       <div class="swiper-slide size">
        <img
          class="img"
          style="width: 740px; height: 464px"
          src="https://img.alicdn.com/tfs/TB1_1OLxQL0gK0jSZFtXXXQCXXa-1130-500.jpg_q100.jpg_.webp"
        />
      </div>
       <div class="swiper-slide size">
        <img
          class="img"
          style="width: 740px; height: 464px"
          src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000006831/O1CN01ALZhit20KeAvm7wWm_!!6000000006831-0-octopus.jpg"
        />
      </div>
     
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);

export default {
  name: "Carousel",
  components: {},
  methods: {},
  mounted() {
    new Swiper(this.$refs.swiper, {
       // loop: true, // 循环模式选项
      autoplay: {
        // 自动轮播
        delay: 10000, // 轮播间隔时间
        disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
   height: 495px;
   background-color: #E5E5E5;
   padding-left: 250px;
   
}
.swiper-pagination {
  position: absolute;
  left: 0px;
  top: 470px;
}
.swiper-pagination > span {
   border-radius: none;
}
.swiper-slide{
  
   height: 600px;
   margin: 0 auto;
  overflow: hidden;
}
.img {
   width: 1000px !important;
   height: 495px !important;

}
</style>
