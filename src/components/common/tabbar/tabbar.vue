<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #eeeaea;
    height: 49px;
    box-shadow: 0px -2px 5px rgba(100,100,100,0.5);
  }
</style>
