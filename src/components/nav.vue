<template>
  <div data-v-6b052896 class="header">
    <div data-v-6b052896 class="topbar clearfix">
      <div data-v-6b052896 class="w rel">
        <div data-v-6b052896 class="fl">
          <a
            data-v-6b052896
            href="https://www.yestae.com/home"
            class="router-link-exact-active router-link-active"
          >
            <i data-v-6b052896 class="icon-top"></i>
            <span data-v-6b052896 title="大益茶业集团旗下自营电商平台" class="company-text">大益茶业集团旗下自营电商平台</span>
          </a>
        </div>
        <div data-v-6b052896 class="fr right-text">
          <span data-v-6b052896 class="diamonds-part">钻石专区</span>
          <span data-v-6b052896 class="spacer">|</span>
          <span data-v-6b052896 class="download-app">下载APP</span>
        </div>
      </div>
    </div>
    <div data-v-6b052896 class="w rel">
      <!---->
    </div>
    <div data-v-6b052896 class="clearfix clear"></div>
    <div data-v-6b052896 class="head-nav clearfix">
      <div data-v-6b052896 class="for-header-w">
        <div data-v-6b052896 class="w rel">
          <h1 data-v-6b052896 class="logo-title">
            <a data-v-6b052896 href="https://www.yestae.com/home" class="logo"></a>
          </h1>
          <div data-v-6b052896 class="nav-lists">
            <ul data-v-6b052896 class="nav-list">
              <li data-v-6b052896 class="nav-items"
              :class="{'active': nav==0}"
                @click="jump('/home',0)">首页</li>
              <li data-v-6b052896 class="nav-items" @click="jump('/commodity-list',1)"
               :class="{'active': nav==1}"
              >熟茶</li>
              <li data-v-6b052896 class="nav-items">生茶</li>
              <li data-v-6b052896 class="nav-items">茶器</li>
              <li data-v-6b052896 class="nav-items">茶道</li>
              <li data-v-6b052896 class="nav-items">茶庭</li>
              <li data-v-6b052896 class="nav-items">宝盒</li>
              <li data-v-6b052896 class="nav-items">食鲜</li>
            </ul>
            <ul data-v-6b052896 class="opts">
              <li data-v-6b052896 class="search"></li>
              <li data-v-6b052896 class="ucenter" @mouseenter="showuncenterlist=true;showshopcartcomp=false"></li>
              <li data-v-6b052896 class="shop-cart" @mouseenter="showshopcartcomp=true;showuncenterlist=false">
                <!---->
                <div data-v-6b052896="" class="badge" v-if="dataCart.length!=0&&b">{{totalInfo.total}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <div data-v-6b052896 class="toptodown-show-w">
      <ul
        data-v-6b052896
        class="ucenter-list"
        @mouseleave="showuncenterlist=false"
        v-if="showuncenterlist"
      >
        <li data-v-6b052896>
          <a data-v-6b052896 class @click="usercenter">个人中心</a>
        </li>
        <li data-v-6b052896>
          <a data-v-6b052896 class>我的订单</a>
        </li>
        <li data-v-6b052896>
          <a data-v-6b052896 class>我的消息</a>
        </li>

        <li data-v-6b052896 @click="login" v-if="a">登录</li>
        <li data-v-6b052896 @click="logout" v-if="b">退出</li>

      </ul>
      <div
        data-v-6b052896
        class="cart-side shop-cart-comp"
        @mouseleave="showshopcartcomp=false"
        v-if="showshopcartcomp"
      >
        <!---->
       
        
        <div class="side-no-refund" v-if="a">
          <span class="link-login" @click="login">登录</span>后查看
          <br />没有账号？免费
          <span class="link-login" @click="handleReg">注册</span>
        </div>
        <div class="side-no-refund"  v-else-if="dataCart.length==0">
          你的购物车还是空的
          <br />遇到喜欢的茶，要快下手哦
        </div>
         <div class="side-have-refund" v-else-if='b'>
          <ul>
            <li v-for="(item, index) in dataCart" :key="index">
            <a :href="'/commodity-detail/'+item.id" class>
                <img
                  :src="item.slideshowPC[0].url"
                  alt
                  class="refund-pic"
                />
                <span class="refund-title">{{item.goodsName}}</span>
                <span class="refund-specifications">{{item.spec[0].content}}</span>
                <span class="refund-price">￥{{item.spec[0].ncPrice}}&nbsp;x&nbsp;{{item.count}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="side-sum" v-if="b">共计{{totalInfo.total}}件商品</div>
        <button class="side-link-shopping" @click="lookCart" v-if="b">查看我的购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      showshopcartcomp: false,
      showuncenterlist: false,
      nav:0,
      a:true,
      b:false
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    handleReg(){
      this.$router.push({ path: "/reg" });
    },
    logout(){
      this.$router.push({ path: "/" });
      window.localStorage.clear()
    },
    usercenter() {
      this.$router.push({ path: "/usercenter" });
    },
    lookCart(){
        this.$router.push({path:'/shopping/cart'});
    },
    jump(pathurl,n){
      this.nav=n
      this.$router.push({
        path:pathurl
      })
    }
  },
  computed: {
      dataCart(){
          return this.$store.state.dataCart;
      },
      totalInfo(){
          return this.$store.getters.totalInfo;
      },
      
  },
  updated() {
    
         let token = window.localStorage.getItem('token');
         if(token){
           this.a=false
           this.b=true
         }else{
             this.a=true
           this.b=false
         }
      
  },


};
</script>

<style>
</style>