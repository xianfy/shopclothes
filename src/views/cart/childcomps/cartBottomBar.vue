<template>
  <div class="cartBottomBar">
    <div class="allSelect">
<!--                  isCheck监听全选按钮的状态  @click.native用来为其绑定事件使其有       -->
      <CheckBottom :isCheck="allCheck" @click.native="checkAll"></CheckBottom>
    </div>
    <span>全选</span>
    <div class="allPrice">
      合计: <span>¥{{allPrice}}</span>
    </div>
    <div class="allCount" @click="checkPay">
      结算({{allCount}})
    </div>
  </div>
</template>

<script>
  import CheckBottom from "components/content/checkBottom/CheckBottom";
  // 引入getters来转化为计算属性
  import {mapGetters} from 'vuex'

  export default {
    name: "cartBottomBar",
    components:{
      CheckBottom
    },
    computed:{
      ...mapGetters(['cartList']),
      // 计算总价格
      allPrice(){
        return this.cartList.filter(item => {
          return item.checked  // 返回的是选中的数组对象
        }).reduce((preValue,item) => {
          return preValue += item.realPrice * item.count //每次得到选中的数组对象将其价格叠加
        },0).toFixed(2) // 小数点后保留小数位
      },
      // 计算总数
      allCount(){
        // 返回被选中的数组的长度
        return this.cartList.filter(item => item.checked).length
      },
      allCheck(){
        // 首先判断购物车中是否有商品 无商品不选中
        if (this.cartList.length === 0) return  false
        // 根据数组的find方法来判断是否有商品被选中 只要有商品未被选中则全选按钮就不选中
        // return !this.$store.state.cartList.filter(item => !item.checked).length
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods:{
      checkAll() {
        // 当点击的时候用我们开始的计算属性判断商品的选中状态
        if (this.allCheck){
          this.cartList.forEach(item => item.checked = false)
        }else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      checkPay(){
        if(!this.allCheck){
          this.$toast.show('请选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .cartBottomBar {
    display: flex;
    height: 44px;
    background-color: #dcdcdc;
    font-size: 14px;
  }
  .cartBottomBar span {
    line-height: 44px;
  }
  .allSelect {
    position: relative;
    left: 10px;
    top: 12px;
    width: 40px;
  }
  .allPrice {
    flex: 1;
    margin-left: 20px;
    line-height: 44px;
    color: #000000;
  }
  .allPrice span {
    color: orangered;
    font-weight: 700;
  }
  .allCount {
    width: 85px;
    line-height: 44px;
    text-align: center;
    background-color: orangered;
    color: white;
  }
</style>
