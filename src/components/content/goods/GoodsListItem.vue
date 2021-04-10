<template>
<div class="GoodsListItem goods-item" @click="detail">
  <img v-lazy="showImage" alt="" @load="imgLoad">
<!--  这里的v-lazy使用了图片的懒加载-->
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        // 因为从首页到详情页，首页的数据被保存了，其一直为真，所以这里我们先判断判断详情页是否有数据
        // 如果详情页有则说明在详情页，如果没有则说明在首页
        return  this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imgLoad(){
        // console.log('------')
        // 利用了时间总线$bus,$bus是未定义的所以需要创建一个vue实例进行事件的监听，
        // 并向其原型添加一个$bus

        // 此处因为因为涉及到了组件的复用，所以其内部一些方法函数需要对当下情况作出一些判断
        //首页与详情页在监听图片加载完之后的refresh刷新
        // 1、我们可以使用路由来做条件从而对不同页面发送不同的事件
        // if(this.$route.path.indexOf('/find')){
        //   this.$bus.$emit('homeItemImageLoad')
        // }else if(this.$route.path.indexOf('/chat')){
        //   this.$bus.$emit('detailItemImageLoad')
        // }
        this.$bus.$emit('itemImageLoad')
      },
      detail(){
        this.$router.push('/detail/'+ this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    float: left;
    margin-left: 1%;
    padding-bottom: 10px;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    height: 259px;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    margin: 10px 0px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #FF5777;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
