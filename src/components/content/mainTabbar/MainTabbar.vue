<template>
  <tabbar>
    <tabbarItem path="/Home" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/Category" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/Profile" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
  import tabbar from '../../common/tabbar/tabbar'
  import tabbarItem from '../../common/tabbar/tabbarItem'

  export default {
    name: "MainTabbar",
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>

<style scoped>

</style>
