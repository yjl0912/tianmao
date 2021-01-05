<template>
  <div>
    <!--  <PayDetail></PayDetail> -->
    <GoodsDetail></GoodsDetail>
  </div>
</template>

<script>
import GoodsDetail from "./views/GoodsDetail";
/* import PayDetail from "./views/PayDetail"; */
export default {
  name: "App",
  components: { /* PayDetail */ GoodsDetail },
};
</script>

<style>
</style>
