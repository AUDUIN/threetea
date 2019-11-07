<template>
  <div class="home">
 
    		<div class="home-cont">
							<div class="banner">
								 <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
								    <!-- slides -->
								    <swiper-slide  class="swiper-item" v-for="(item,index) in homedata.banner" :key="index">	
										<img :src="item.img.url">
									</swiper-slide>
								   
								    <!-- Optional controls -->
								    <div class="swiper-pagination"  slot="pagination"></div>
								    <div class="swiper-button-prev" slot="button-prev"></div>
								    <div class="swiper-button-next" slot="button-next"></div>
								  </swiper>
							</div>
							<div class="home-comm-list w">
								<div class="title">新品推荐</div>
								<div class="sub-title">每一款新品都是我们精心准备</div>
								<ul class="new-list">
									<li class="comm-item" v-for="(item,index) in gcdata.goods" :key="index">  <router-link 
                    :to="'/commodity-detail/'+item.id"
                  >
										 target="_blank"><img alt="" class="comm-img" 
											 :src="item.img.url" lazy="loaded">
											<div class="info">
												<p class="com-tit one-line">{{item.name}}</p>
												<p class="com-subtit one-line">{{item.param}}</p>
												<p class="com-price">¥{{item.ncPrice}}</p>
											</div>
										</router-link></li>
										</ul>
							</div>
							<div class="home-comm-list w" v-for="(item,index) in normalgoods" :key="index">
								<div class="title">{{item.title}}</div>
								<div class="sub-title">{{item.subTitle}}</div> <a 
								 class="link-img" ><img alt="" 
									 :src="item.goods[0].img.url" lazy="loaded"></a>
								<!---->
								<ul class="home-commd-list">
									<!---->
									<li class="home-commd-card " 
									v-for="(i,idx) in item.goods" :key="idx"
									:class="{'last-one':idx%4==0}"
									:style='{display:idx0(idx)}'
									><a ><img alt="" class="card-img" 
											 :src="i.img.url" lazy="loaded">
											<div class="card-info">
												<p class="card-title one-line">{{i.name}}</p>
												<p class="card-subtitle one-line">{{i.params}}</p>
												<p class="card-price">¥{{i.ncPrice}}</p>
											</div>
										</a></li>
										</ul>
							</div>
								</div>
				

  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  name: 'home',
  data(){
	  return{
		   swiperOption: {
					pagination:'swiper-pagination',
					init:true,
					// loop:true,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper 
　　				observeParents:true,//修改swiper的父元素时，自动初始化swiper 
					autoplay: {
						delay: 1500,
						stopOnLastSlide: false,
						disableOnInteraction: false
					},
					speed:1000,
					// slidesPerView: 'auto',
		          },

			homedata:{},
			gcdata:{},
			normalgoods:{},
			
	  }
  },
  created() {
	  this.fn();
  },
  computed: {
	  swiper() {
    return this.$refs.mySwiper.swiper;
  }
  },
  updated() {
  console.log(this.topBanner);
  if (this.topBanner.length>1) {
    console.log(this.swiper);
    this.swiper.init();
  }
},
  methods: {
	   idx0(idx){
		  if(idx==0){
			  return "none"
		  }
	  },
    fn(){
       this.$axios({
                    url:'/test/api/PC0301',
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data:'cateId=9c43e98e287bd85f66e98b3bb49e87e1&page=1&perPage=28&type=1&uid=&sid='
                }).then((res)=>{ 
					console.log(res);
					this.homedata= res.data.datas.homeData;
					this.gcdata=res.data.datas.homeData.newgoods;
					this.normalgoods=res.data.datas.homeData.normalgoods
                });
    }
  },
    components: {
     swiper,
    swiperSlide
  },
}
</script>
<style>

	.banner	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>