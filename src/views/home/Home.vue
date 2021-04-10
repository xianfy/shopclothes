<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <tabContral :title="['流行','精选','新款']" class="tab_Control"
                @tabClick="tabClick"
                ref="tabControl1" v-show="isTabFixed"></tabContral>
    <Scroll class="content" ref="scroll"
            :probe-type="3"
            @scrollPosition="scrollText"
            :pull-up-load="true"
            @pullingUp="loadMore">
<!--                              如果不写:传值默认传的是一个字符串-->
       <HomeSwiper :banner="banner.list"
                   @swiperImgLoad="swiperImgLoad"></HomeSwiper>
       <HomeRecommends :recommend="recommend.list"></HomeRecommends>
       <HomeFeature></HomeFeature>
       <tabContral :title="['流行','精选','新款']"
                   @tabClick="tabClick"
                   ref="tabControl2"></tabContral>
       <GoodsList :goods="goodsShow"></GoodsList>
<!--      自欺欺人法解决问题  啊哈哈哈哈哈！！！！-->
      <div style="color: white">----富贵贵</div>
    </Scroll>
    <ScrollTop @click.native="scrollTop" v-show="isShow"></ScrollTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import tabContral from "components/content/tabContral/tabContral";
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll";
import ScrollTop from "components/content/scrollTop/scrollTop"

import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommends from "./childcomps/HomeRecommends";
import HomeFeature from "./childcomps/HomeFeature";

import {
  getHomeMultidata,
  getHomeGoods} from "../../network/home";
import {imgListener} from "../../common/mixins";


export default {
    name: "Home",
    components: {
      NavBar,
      tabContral,
      HomeSwiper,
      Scroll,
      ScrollTop,
      HomeRecommends,
      HomeFeature,
      GoodsList
    },
  mixins:[imgListener],
    data(){
      return {
        banner:[],
        recommend:[],
        // result:null
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        // scroll:null
        isShow:false,
        tabCPosition:0,
        isTabFixed:false,
        saveY:0,
      }
    },
  // 这里利用生命周期函数发送请求获取数据
  // 但这里因为是调用的函数，具有函数作用域，所以我们应该把请求回来的数据用个变量保存起来
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
  mounted() {

  },
  // destroyed() {
  //     // 每次路由跳转时会执行destroyed生命周期函数
  //   console.log('我被销毁了')
  // },
  activated() {
    // this.saveY = 1000
    // 将保存的距离作为偏移量
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    // 最好在每次跳转后用refresh()刷新一下
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 将当前的滚动距离保存下来
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.saveY)
    // 当离开home页面时取消home组件事件总线的监听
    this.$bus.$off("itemImageLoad", this.itemImageListener);
  },
  // 在生命周期函数中最好只有函数的调用
  computed:{
      goodsShow(){
        // console.log(this.goods[this.currentType].list)
        return  this.goods[this.currentType].list
      }
  },
  methods:{
      // 事件监听相关方法
    tabClick(index){
      // console.log(index)
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 让两个导航栏实现同步的操作
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // 切换导航栏使其刚好在吸顶的位置
      this.$refs.scroll.scrollTo(0,-this.tabCPosition,0)
    },
      // 网络请求相关方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner
        this.recommend = res.data.recommend
        // console.log(res)
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 如果想要多次下拉产生效果的话，需要在获取数据时调用scroll的finishPullUp方法
        this.$refs.scroll.finishPullUp()
        // console.log(res)
      })
    },
    // 回到顶部
    scrollTop(){
      this.$refs.scroll.scrollTo(0,0,400)
    },
    // 箭头显示隐藏
    scrollText(position){
      // 1、判断scrollTop是否显示
      this.isShow = (-position.y)>100
      // 2、判断tabcontral是否显示
      this.isTabFixed = (-position.y) > this.tabCPosition
    },
    // 下拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    // 监听轮播图加载完成
    swiperImgLoad(){
       this.tabCPosition = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabCPosition)
    }
  }
}


</script>
<!--scoped作用域-->
<style scoped>
  #home {
   position: relative;
    height: 100vh;
    /*top: 44px;*/
    /*left: 0;*/
  }
  .home-nav {
    color: white;
    font-size: 18px;
    font-weight: 700;
    background-color:#FF5777;
    z-index: 1;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab_Control {
    position: relative;
    z-index: 9;
  }
</style>

