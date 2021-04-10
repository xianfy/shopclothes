import {debounce} from "./utils";

export const imgListener = {
  data(){
    return {
      itemImageListener:null,
      refresh:null
    }
  },
  mounted() {
    // 监听img图片加载完成
    // 防抖动，减少刷新频率
    this.refresh = debounce(this.$refs.scroll.refresh,50)

    this.itemImageListener = () => {
      // this.$refs.scroll.refresh()
      this.refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImageListener)
  }
}

import ScrollTop from "../components/content/scrollTop/scrollTop"
// 回到顶部的混入
export const goTopListener = {
  components:{
    ScrollTop,
  },
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    // 回到顶部
    scrollTop(){
      this.$refs.scroll.scrollTo(0,0,400)
    },
    topIsShow(position){
      // 1、判断scrollTop是否显示
      this.isShow = (-position.y)>100
    }
  }
}
