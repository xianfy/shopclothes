<template>
  <Swiper class="Swiper-height">
    <SwiperItem v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.Swiper-height {
  height: 250px;
}
</style>
