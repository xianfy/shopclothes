<template>
<div class="Cart">
<!--  1、购物车-->
  <NavBar class="Cart-Nav">
    <div slot="center">购物车({{cartCount}})</div>
  </NavBar>
<!--  2、商品列表-->
  <cartList :cart-list="cartList"></cartList>
<!--  3、底部选项卡-->
  <cartBottomBar class="bottom-bar"></cartBottomBar>
</div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import cartList from "./childcomps/cartList";
  import cartBottomBar from "./childcomps/cartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      cartList,
      cartBottomBar
    },
    computed:{
      ...mapGetters(['cartList','cartCount'])
    }
  }
</script>

<style scoped>
  .Cart-Nav {
    background-color: #FF5777;
    font-weight: 700;
    color: white;
  }
  .Cart {
    height: 100vh;
  }
  .bottom-bar {

  }
</style>
