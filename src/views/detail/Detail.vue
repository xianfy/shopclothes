<template>
<div class="Detail">
  <DetailNavBar class="Detail-nav" @titleItemClick="titleItemClick" ref="nav"></DetailNavBar>
  <Scroll class="content" ref="scroll" :probe-type="3" @scrollPosition="scrollPosition">
    <DetailSwiper :top-images="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailShopImage :detail-info="detailInfo" @imgLoad="imgLoad"></DetailShopImage>
    <DetailParamInfo ref="param" :param-info="paramInfo"></DetailParamInfo>
    <DetailCommentInfo ref="comment" :comment-info="commentInfo"></DetailCommentInfo>
    <GoodsList ref="recommend" :goods="recommendInfo"></GoodsList>
    <div style="color: white">
      啦啦啦</div>
  </Scroll>
    <DetailBottomNavbar @addToCart="addToCart"></DetailBottomNavbar>
  <ScrollTop @click.native="scrollTop" v-show="isShow"></ScrollTop>
<!--  <Toast :message="message" :is-show="show"></Toast>-->
</div>
</template>

<script>
  import DetailNavBar from './childcomps/DetailNavbar'
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailBaseInfo from "./childcomps/DetailBaseInfo";
  import DetailShopInfo from "./childcomps/DetailShopInfo";
  import DetailShopImage from "./childcomps/DetailShopImage";
  import DetailParamInfo from "./childcomps/DetailParamInfo";
  import DetailCommentInfo from "./childcomps/DetailCommentInfo";
  import DetailBottomNavbar from './childcomps/DetailBottomNavbar';
  import Toast from "../../components/common/toast/Toast";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getDetail, Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
  import {imgListener,goTopListener} from "../../common/mixins";
  import {debounce} from "../../common/utils";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailShopImage,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomNavbar,
      Scroll,
      GoodsList,
      Toast
    },
    mixins:[imgListener,goTopListener],
    data(){
      return{
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendInfo:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0,
        // message:'',
        // show:false
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        const data = res.result
        // 1、轮播图数据
        this.topImages = data.itemInfo.topImages
        // 2、商品详情数据展示
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3、店铺详情展示
        this.shop = new Shop(data.shopInfo)
        // 4、详情信息
        this.detailInfo = data.detailInfo
        // 5、商品参数详情
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // 6、评论数据展示
        // 此处要判断是否有评论从而来渲染组件
        if (data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
      })
      // 获取推荐数据
      getRecommend().then(res => {
        // console.log(res)
        this.recommendInfo = res.data.list
      })

      // 做防抖处理
      this.getThemeTopY = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.param.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          this.themeTopYs.push(Number.MAX_VALUE)

          // console.log(this.themeTopYs)
      },100)
    },
    mounted() {
    },
    destroyed() {
      // 离开当前页面时销毁这个函数
      this.$bus.$off("itemImageLoad", this.itemImageListener);
    },
    methods:{
      ...mapActions(['addCart']),
      imgLoad(){
        // const refresh = debounce(this.$refs.scroll.refresh,50)
        //   refresh()
        this.refresh()
        this.getThemeTopY()
      },
      titleItemClick(index){
      // console.log(index)
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      scrollPosition(position){
        const positionY = -position.y

        let length = this.themeTopYs.length
        // hack写法
        for (let i=0; i<length-1;i++){
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        // 普通写法
        // for (let i=0; i<length; i++){
        //   if (this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) ||
        //     (i === length-1 && positionY >= this.themeTopYs[i]))){
        //     this.currentIndex = i
        //     console.log(this.currentIndex)
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        // }
        this.topIsShow(position)
      },
      addToCart(){
        // 1、用来保存商品信息
        const product = {}
        // 2、将所要展示的信息加入到对象中
        product.iid = this.iid;
        product.imgURL = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc;
        product.realPrice = this.goods.realPrice;
        // 3、将商品加入到购物车中
        // 在点击加入购物车显示一个弹窗，此时应该是数据已经添加完成后弹窗
        // 返回的是一个Promise对象，根据不同的商品状态来弹出不同的toast
        // this.$store.dispatch('addCart',product).then(res => {
        //   console.log(res)
        // })
        // 这里又用到了map映射
        this.addCart(product).then(res => {
          // console.log(res)
          // 传入弹窗数据与状态
          // this.message = res
          // this.show = true
          // // 设置定时器在指定时间消失
          // setTimeout(()=>{
          //   this.show = false
          //   this.message = ''
          // },500)

          // 封装的组件
          this.$toast.show(res)
          // console.log(this.$toast)
        })
      }
    }
  }
</script>

<style scoped>
  .Detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }
  .Detail-nav {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .content {
    height: calc(100% - 44px - 49px);
    /*overflow: hidden;*/
  }
</style>
