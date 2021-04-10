<template>
<div id="tabContral">
  <div v-for="(item,index) in title" :key="index"
       class="tabContral-item"
       :class="{active: index===currentIndex}"
      @click="tabContralClick(index)">
    <span>
    {{item}}
  </span>
  </div>
</div>
</template>

<script>
  export default {
    name: "tabContral",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      tabContralClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
#tabContral {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  font-weight: 700;
  background-color: #ffffff;
}
.tabContral-item {
  flex: 1;
}
.tabContral-item span {
  padding:5px;
}
.active {
  color: #bd362f;
}
.active span {
  border-bottom: 2px solid #bd362f;
}
</style>
