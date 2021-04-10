<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot>
    </slot>
  </div>
</div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,
      })
      // 代码严谨写法
      if (this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scrollPosition', position)
        })
      }

      if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){
        // console.log('1111')
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
.wrapper {
  /*height: 300px;*/
  /*height: 100%;*/
}
</style>
