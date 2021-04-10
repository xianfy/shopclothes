<template>
  <div class="cartListItem">
    <div class="CheckBottom">
      <CheckBottom @click.native="checkBtn" :isCheck="itemInfo.checked"></CheckBottom>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.realPrice}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckBottom from 'components/content/checkBottom/CheckBottom'

  export default {
    name: "cartListItem",
    components:{
      CheckBottom
    },
    props:{
      itemInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkBtn(){
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>

<style scoped>
  .cartListItem {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .CheckBottom {
    /*width: 100%;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .item-price {
    color: orangered;
  }
  .info-bottom {
    margin-top: 30px;
  }
</style>
