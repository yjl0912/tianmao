<template>
  <div>
    <ShopCart />
    <Login />
  </div>
</template>

<script>
import Login from "./views/Login";
import ShopCart from "./views/ShopCart";
export default {
  name: "App",
  components: {
    Login,
    ShopCart,
  },
};
</script>

<style>
</style>
