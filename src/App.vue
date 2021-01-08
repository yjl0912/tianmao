
<template>
  <div id="app">
    <router-view></router-view>


  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$router.push({
      path:"/",
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
