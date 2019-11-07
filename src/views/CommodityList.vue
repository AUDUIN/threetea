<template>
  
  <div class="commodity-list">
    <img :src="cateDetail.categoryBanner.url" style="width:100%"/>
    <div class="comm-list-con">
      <div  class="list-title">
        <div  class="w">
          <h1  class="title-h1">{{cateDetail.categoryAbName}}</h1>
          <div  class="title-con">
            <span  data-type="1" class="title-list" :class="{'title-list-active':isShow[0]}" @click="loadFn(1)">综合排序</span>
            <span  data-type="2" class="title-list" :class="{'title-list-active':isShow[1]}" @click="loadFn(2)">销量排序</span>
            <span  data-type="3" class="title-list" :class="{'title-list-active':isShow[2]}" @click="loadFn(3)">新品优先</span>
            <span  data-type="5" class="title-list" :class="{'title-list-active':isShow[3]}" @click="loadFn(4)">
              价格排序
              <div  class="price-up" :class="{'price-up-active':upBool}"></div>
              <div  class="price-down" :class="{'price-down-active':downBool}"></div>
            </span>
          </div>
        </div>
      </div>
      
      <div  class="list-img">
        <div  class="w">
        
              <ul  class="home-commd-list">
            
                <li  class="home-commd-card" v-for="(item, index) in goodsList" :key="index">
                  <router-link 
                    :to="'/commodity-detail/'+item.id"
                  >
                    <img
                      :src="item.img.url"
                      alt
                      class="card-img"
                    />
                    <div class="card-info">
                      <p class="card-title one-line">{{item.name}}</p>
                      <p  class="card-subtitle one-line">{{item.param}}</p>
                      <p class="card-price">￥{{item.ncPrice}}</p>
                    </div>
                  </router-link>
                </li>
            
              </ul>
           
        </div>
      </div>
     
    </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      isShow:[true,false,false,false],
      cateDetail:null,
      goodsList:[],
      upBool:false,
      downBool:false,
      i:0,
      
    }
  },
  methods: {

    loadFn(n) {
        this.isShow.forEach((val,i) => {
          this.isShow[i]=false;
        });
        this.upBool=false,
        this.downBool=false,

        this.isShow[n-1]=true;
        
        if(n===4){
          this.i++;
          if(this.i%2==1){
            this.downBool=true;
          }else{
            this.upBool=true;
            n=n+1;
          }
        }
        this.renderData(n);
    },

    renderData(m){
      this.$axios({
          url:'/test/api/PC0401',
          method:'POST',
          headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: `cateId=9c43e98e287bd85f66e98b3bb49e87e1&page=1&perPage=28&type=${m}&uid=&sid=`
          
      }).then((res)=>{ 
          this.cateDetail=res.data.datas.cateDetail;
          this.goodsList=res.data.datas.goodsList;
      });
    }
  },
  created() {
      this.renderData(1);
      
  },
};
</script>

<style scoped>
    .commodity-list-banner{
        width: 100%;
    }
    .commodity-list .list-title{
        /* padding-bottom: 3px; */
        border-bottom: 1px solid #d6d6d6;
    }
    .w {
        margin: auto;
        width: 1200px;
    }
    .commodity-list .list-title .title-h1{
        font-size: 32px;
        color: #767676;
        line-height: 45px;
        margin-bottom: 10px;
        padding-top: 20px;
        font-weight: bold;
    }
    .commodity-list .list-title .title-con{
        padding-bottom: 10px;
        font-size: 14px;
    }
    .commodity-list .list-title .title-h1 {
        font-size: 32px;
        color: #767676;
        line-height: 45px;
        margin-bottom: 10px;
        padding-top: 20px;
    }
    .commodity-list .list-title .title-con {
        padding-bottom: 10px;
        font-size: 14px;
    }
    .commodity-list .list-title .title-con .title-list {
        margin-right: 35px;
        cursor: pointer;
        padding-bottom: 10px;
        position: relative;
    }
    .commodity-list .list-title .title-con .title-list .price-up {
            position: absolute;
            width: 14px;
            height: 14px;
            top: -3px;
            left: 62px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAJBJREFUKBVjYBgFgygEmHG55f///4w/fvywO3r06ENsahixCVZUVDj8+/dvNVBOhJGR0b6zs/MQujomdAGYJqCGYCYmJkegzWvLy8vt0NWhOBVZE8iWI0eOPLC1tT0N1LzGzs7uFJAPdzbcxsrKSnuQ85iZmUOQndbR0XEAaHPo379/16DbShQfZDBRCgkpAgA6tkGoXpb4lgAAAABJRU5ErkJggg==);
    }
    .commodity-list .list-title .title-con .title-list .price-up-active{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAIBJREFUKBVjYBgFQyEE/v//z+i2stgOl1sZsUl4rC5x+PP372oGhv8iTIzM9rvCew+hq2NCF4BpYmJkCmZhZnH89//fWmw2o9iIrAlmC0yMkYkhZHdY/0GYRXAbXVcV2oOcB1IA0wRStCO05wALM3Po/38Ma2CaSKJBBpOkAZdiAFyhN9AhrJqlAAAAAElFTkSuQmCC);
    }
    .commodity-list .list-title .title-con .title-list .price-down {
            position: absolute;
            width: 14px;
            height: 14px;
            top: 9px;
            left: 62px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAH1JREFUKBVjYKAGqKystCfWHCZkhX///l1TUVHhgCwGYoMMLCsre41sMIpGZmbmkH///q1G1lxeXm4HMpCJiSm0vb39IMxQRhgDRoMU/v//fy1IIZD+B2N3dHQcgKkB0RgaQYJQzSDT34AMQNcEUoMTQDVjNRinplGJgQoBAOXeN9/N2mmqAAAAAElFTkSuQmCC);
    }
    .commodity-list .list-title .title-con .title-list .price-down-active{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAINJREFUKBVjYKAGcF1VaE+sOUzICv//Y1jjsbrEAVkMxAYZ6LKi8DWywSgaGZkYQv78/bsaWbPbymI7kIEszMyhu8P6D8IMZYQxYDRI4b///9aCFP4DMmDsHaE9B2BqQDSGRpAgRPNfoOmMb0AGoGsCqcEJwE78/x+rwTg1jUoMVAgAAK6rNcLlmqlEAAAAAElFTkSuQmCC);
    }
    .commodity-list .list-title .title-con .title-list-active {
        color: #44A870;
        border-bottom: 2px solid #44A870;
    }
    /*
 * 分类商品列表 / 搜索结果商品列表通用样式
 *
 */
    .list-img{
        padding-bottom: 20px;
        
    }
    .home-commd-list{
        zoom: 1;
        overflow: hidden;
    }
    .home-commd-list .home-commd-card{
        background-color: #fff;
        margin-right: 12px;
        float: left;
        text-align: center;
        width: 291px;
        margin-top: 12px;
    }
    .home-commd-list .home-commd-card:nth-child(4n){
        margin-right: 0;
    }
    .home-commd-list .home-commd-card .card-img{
        width: 100%;
        height: 291px;
        display: block;
        background-color: #ececec;
    }
    .home-commd-list .home-commd-card .card-info{
        position: relative;
        top: -12px;
        padding: 0 20px 16px;
    }
    .home-commd-list .home-commd-card .card-title{
        font-size: 16px;
        color: #353535;
        height: 24px;
        overflow: hidden;
    }
    .home-commd-list .home-commd-card .card-subtitle{
        font-size: 14px;
        color: #7a7a7a;
        margin-bottom: 8px;
        height: 21px;
        overflow: hidden;
    }
    .one-line{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
    }
    .home-commd-list .home-commd-card .card-price{
        font-size: 18px;
        color: #44a870;
    }
    .card-hover:hover, .home-commd-list .home-commd-card:hover, .home-commd-list .may-like-card:hover, .list-img .img-con-shadow, .may-like-list .home-commd-card:hover, .may-like-list .may-like-card:hover {
        box-shadow: 0 17px 50px 0 rgba(0,0,0,.19);
        transform: translate3d(0,-2px,0);
        transition: all .3s cubic-bezier(.55,0,.1,1);
    }
</style>