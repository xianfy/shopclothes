<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="DetailShopImage">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="detail-item" >
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
           :src="item"
           @load="imgLoad"
           alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailShopImage",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
  .desc {
    margin: 15px 5px;
    font-size: 14px;
    color: #333333;
    border-bottom: 5px solid #F2F5F8;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;/*超出3行部分显示省略号，去掉该属性 显示全部*/
    -webkit-box-orient: vertical;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .detail-item img {
    width: 100%;
    vertical-align: middle;
  }
</style>
