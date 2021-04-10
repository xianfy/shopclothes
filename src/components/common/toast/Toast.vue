<template>
  <div class="Toast" v-show="isShow">
    <div class="toastPop">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message:'默认显示',
        isShow:false
      }
    },
    methods:{
      show(message,duration=1000){
          this.message = message
          this.isShow = true
        setTimeout(()=>{
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .Toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.8);
    border-radius: 3px;
    z-index: 999;
  }
  .toastPop {
    padding: 8px 10px;
  }
</style>
