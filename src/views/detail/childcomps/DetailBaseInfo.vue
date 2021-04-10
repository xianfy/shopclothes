<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
<!--      <span class="info-service-item" v-for="(item,index) in goods.services" :key="index">-->
<!--        <img :src="item.icon">-->
<!--        <span>{{item.name}}</span>-->
<!--      </span>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info-title {
    margin: 15px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;/*超出3行部分显示省略号，去掉该属性 显示全部*/
    -webkit-box-orient: vertical;
  }
  .base-info {
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .n-price {
    color: #FF5777;
    font-size: 22px;
    margin-left: 15px;
  }
  .o-price {
    color: #999999;
    margin-left:5px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 12px;
    padding: 3px 6px;
    color: #fff;
    background-color: #FF5777;
    border-radius: 8px;
    /*margin-left: 2px;*/
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
