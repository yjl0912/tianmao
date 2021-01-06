
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./views/home/home";
// import GoodsDetail from "./views/GoodsDetail";

export default {
  name: "App",
  components: {
    // Home,
    // GoodsDetail,
  },
  mounted() {
    this.$router.push({
      path: "/",
    });
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>
