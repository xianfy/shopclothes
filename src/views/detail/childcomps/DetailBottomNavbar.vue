<template>
  <div class="DetailBottomNavbar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
        <div class="cart" @click="addCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomNavbar",
    methods:{
      addCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .DetailBottomNavbar {
    display: flex;
    height: 49px;
    background-color: #ffffff;
    position: relative;
  }
  .bar-left {
    flex: 1;
    display: flex;
    line-height: 49px;
    font-size: 14px;
    text-align: center;
  }
  .bar-left>div {
    flex: 1;
  }
  .bar-right {
    flex: 1;
    display: flex;
    line-height: 49px;
    text-align: center;
  }
  .bar-right div {
    flex: 1;
  }
  .text {
    color: #424242;
    font-size: 13px;
    position: relative;
    bottom: 18px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
  .cart {
    font-size: 14px;
    color: #000000;
    background-color: #FFE817;
  }
  .buy {
    font-size: 14px;
    color: #ffffff;
    background-color: #FF6699;
  }

</style>
