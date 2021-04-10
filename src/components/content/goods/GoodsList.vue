<template>
<div class="GoodsList">
  <GoodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="index">
  </GoodsListItem>
</div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
