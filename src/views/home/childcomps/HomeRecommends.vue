<template>
<div id="HomeRecommends">
  <div v-for="(item,index) in recommend" :key="index" class="recommends-items">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
    <h2>{{item.title}}</h2>
  </div>
</div>
</template>

<script>
  export default {
    name: "HomeRecommends",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
#HomeRecommends {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding:10px 0px 30px;
  border-bottom: 5px solid #CCCCCC;
}
.recommends-items {
  flex: 1;
}
.recommends-items img {
  width: 90%;
  margin-bottom: 10px;
}
</style>
