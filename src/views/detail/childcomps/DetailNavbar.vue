<template>
<div class="DetailNavbar">
  <NavBar>
    <div slot="left" class="back" @click="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titleTop">
      <div v-for="(item,index) in titleTop"
           class="titleTop-item"
           :class="{active:index==currentIndex}" @click="detailClick(index)">{{item}}</div>
    </div>
  </NavBar>
</div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNavbar",
    components:{
      NavBar
    },
    data(){
      return {
        titleTop:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      detailClick(index){
        this.currentIndex = index
        this.$emit('titleItemClick',index)
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .titleTop {
    display: flex;
  }
  .titleTop-item {
    flex: 1;
    font-size: 15px;
  }
  .back img {
    width: 15px;
    height: 15px;
    margin-top: 15px;
  }
  .active {
    color: #ff4d6c;
  }
</style>
