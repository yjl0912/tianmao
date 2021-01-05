<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/home/home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {

}
body{
  margin: 0;
  padding: 0;
 
  background-color: #f5f5f5;
 
}
</style>
