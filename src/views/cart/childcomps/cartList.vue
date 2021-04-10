<template>
  <div class="cartList">
    <Scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import cartListItem from "./cartListItem";

  export default {
    name: "cartList",
    components:{
      Scroll,
      cartListItem
    },
    props:{
      cartList:{
        type:Array,
        default(){
          return {}
        }
      }
    },
    activated() {
      // 在每次进入购物车之后需要重新计算heighterscroll的高度
      this.$refs.scroll.refresh()
      // console.log('======')
    }
  }
</script>

<style scoped>
  .cartList {
    height: calc(100% - 44px - 49px - 44px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
