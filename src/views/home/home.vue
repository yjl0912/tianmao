<template>
  <div class="container">
    <SideBar />
    <Header />
    <Search />
    <Nav />
    <a name='a'></a>
    <Carousel />
    <a name='b'></a>
    <Catelist />
    <a name='c'></a>
    <Brand />
    <a name='d'></a>
    <Goods />
    <a name='e'></a>
    <Goods />
    <a name='f'></a>
    <span class="guessyourlike">猜你喜欢</span>
    <GuessyourLike />
    <a name='g'></a>
    <GuessyourLike />
    <GuessyourLike />
    <GuessyourLike />
    <a name='a'></a>
    <div class="endtext">END</div>
    <a name='h'></a>
    <Buttom />

  </div>
</template>

<script>
import Brand from "./brand/brand";
import Carousel from "./carousel/carousel";
import Catelist from "./catelist/catelist";
import Goods from "./goods/goods";
import GuessyourLike from "./guessyourLike/guessyourLike";
import Header from "./header/header";
import Nav from "./nav/nav";
import Search from "./search/search";
import Buttom from "./buttom/buttom";
import SideBar from './sideBar/sideBar'

export default {
  name: "Home",
  components: {
    Brand,
    Carousel,
    Catelist,
    Goods,
    Header,
    Nav,
    Search,
    GuessyourLike,
    Buttom,
    SideBar
  },
};
</script>

<style lang="less" scoped>
.guessyourlike {
  display: block;
  margin-left: 700px;
}
.endtext {
    margin-left: 700px;
}
</style>
