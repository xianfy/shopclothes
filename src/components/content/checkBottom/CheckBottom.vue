<template>
  <div class="CheckBottom" :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>

export default {
  name: "CheckBottom",
  props:{
    isCheck:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
  .CheckBottom {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .check {
    background-color: red;
    border-color: red;
  }
</style>
