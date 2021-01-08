<template>
  <div class="container">
    <SideBar />
    <a name="a"></a>
    <Header />
    <Search />
    <Nav />
    <Carousel />
    <a name="b"></a>
    <Catelist />
    <div class="brand">知名品牌</div>
    <Brand />
    <a name="d"></a>
    <Goods1 />
    <a name="e"></a>
    <Goods2 />
    <a name="f"></a>
    <a name="h"></a>
    <span class="guessyourlike">猜你喜欢</span>
    <GuessyourLike />
    <a name="g"></a>
    <g2 />
    <g3 />
    <g4 />
    <a name="a"></a>
    <div class="endtext">END</div>
    <Buttom />
  </div>
</template>

<script>
import Brand from "./brand/brand";
import Carousel from "./carousel/carousel";
import Catelist from "./catelist/catelist";
import Goods1 from "./goods1/goods1";
import Goods2 from "./goods2/goods2";
import GuessyourLike from "./guessyourLike/guessyourLike";
import g2 from './guessyourLike/g2'
import g3 from './guessyourLike/g3'
import g4 from './guessyourLike/g4'
import Header from "./header/header";
import Nav from "./nav/nav";
import Search from "./search/search";
import Buttom from "./buttom/buttom";
import SideBar from "./sideBar/sideBar";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Brand,
    Carousel,
    Catelist,
    Goods1,
    Goods2,
    Header,
    Nav,
    Search,
    GuessyourLike,
    g2,
    g3,
    g4,
    Buttom,
    SideBar,
  },
};
</script>

<style lang="less" scoped>
.brand {
  margin: 20px auto;
  width: 100px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: red;
}
.guessyourlike {
  display: block;
  margin-left: 700px;
}
.endtext {
  margin-left: 700px;
}
</style>
