<template>
  <div class="my-order">
      <p class="username">我的订单</p>
      <ul class="order-tab">
          <li class="tab-item active">全部订单</li>
          <li class="tab-item">待付款</li>
          <li class="tab-item">待发货</li>
          <li class="tab-item">已发货</li>
          <li class="tab-item">售后单</li>

      </ul>
      <ul class="orderlist">
          <li class="no-order" v-if="orderdata==0"> 暂无相关订单 </li>
          <li class="order-item" v-else>
              <div class="order-list-item" v-for="(item,index) in orderdata" :key="index">
                  <div class="payinfo">
                      <p class="state">{{item.payState?'待发货':'待付款'}}  </p>
                      <span class="order-time">{{calcDate(item.orderTime)}}</span>
                      <span class="split">|</span>
                      <span class="order-num">收货人</span>
                      <span class="split">|</span>
                      <span class="order-num">订单号：{{item.orderTime}}</span>
                    <p class="order-amount">
                        订单金额 ：<span class="amount">￥{{item.finalPrice}}</span>
                    </p>
                  </div>
                  <div class="commdinfo">
                      <div class="commd-list-warpper">
                          <div class="package-warpper">
                              <div class="commd-list" v-for="(i,idx) in item.orderGoods" :key="idx">
                                  <img class="comm-img" :src="i.spec[0].img.url" alt="">
                                  <p class="comm-name">
                                      {{i.goodsName}}
                                  </p>
                                  <p class="comm-spec">
                                      {{i.spec[0].content}}
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="order-opts-warpper">
                          <div class="order-opts">
                              <div class="button button-outline">
                                  订单详情
                              </div>
                              <div class="button button-default">
                                  去付款
                              </div>
                              <p class="surplus-time">
                                  付款剩余时间：
                                  <br>
                                  <span>23小时59分钟</span>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },

    computed:{
        orderdata(){
            if(this.$store.state.orderList.length==0){
                return 0
            }else{
               
                console.log(this.$store.state.orderList)
                return this.$store.state.orderList
            }
        }
    },
    methods:{
        calcDate(c){
                    let str='';
                   
                    let newDate = new Date(c);
                    let year=newDate.getFullYear()
                    let month = newDate.getMonth()+1;
                    let date = newDate.getDate();
                    let day = newDate.getDay();
                    let h = newDate.getHours();
                    let m = newDate.getMinutes();
                    let s = newDate.getSeconds()
                    if(day==0){
                        str='周日'
                    }else if(day==1){
                        str='周一'
                    }else if(day==2){
                        str='周二'
                    }else if(day==3){
                        str='周三'
                    }else if(day==4){
                        str='周四'
                    }else if(day==5){
                        str='周五'
                    }else if(day==6){
                        str='周六'
                    }
                    return `${year} ${month}.${date} ${str} ${h}:${m}:${s} `;
        }

    }
}
</script>

<style scoped>
.button-default{
     width: 120px !important;
    height: 30px!important;
    line-height: 30px!important;
    font-size: 16px!important;
    margin-bottom: 10px!important;
    color: #fff!important;
    border: 1px solid #44a870!important;
    background-color: #44a870!important;
}
.button-outline{
     width: 120px!important;
    height: 30px!important;
    line-height: 30px!important;
    font-size: 16px!important;
    margin-bottom: 10px!important;
    color: #44a870!important;
    border: 1px solid #44a870!important;
    background-color: transparent!important;
}
.button{
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 10px;
}
.order-opts{
    width: 120px;
    text-align: justify;
}
.commd-list{
    position: relative;
    height: 130px;
    width: 729px;
    margin-bottom: 8px;
}

.order-list-item{
    margin-bottom: 20px;
}
.comm-img{
    position: absolute;
    width: 130px;
    height: 130px;
    background-color: #f5f5f5;
}
.comm-name{
    padding: 43px 0 0 138px;
    font-size: 18px;
    color: #484848;
}
.comm-spec{
    padding-left: 138px;
    font-size: 16px;
    color: #a7a7a7;
}
.payinfo{
    position: relative;
    height: 40px;
    border: 1px solid #d2d2d2;
    padding: 20px;
}
.state{
    font-size: 16px;
    color: #44a870;
}
.order-time{
    display: inline-block;
    padding-top: 10px;
    font-size: 14px;
    color: #767676;
}
.split{
    display: inline-block;
    margin: 0 10px;
}
.order-num{
    display: inline-block;
    padding-top: 10px;
    font-size: 14px;
    color: #767676;
}
.order-amount{
        position: absolute;
    right: 20px;
    bottom: 10px;
}
.amount{
    font-size: 20px;
    color: #44a870;
}
.commdinfo{
    position: relative;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid #d2d2d2;
    border-top: 0;
    min-height: 130px;
    padding: 20px;
}
.my-order{
    padding: 22px 20px
}
.username{
    font-size: 22px;
    color: #767676;
    margin-bottom: 20px;
}
.order-tab{
    font-size: 14px;
    color: #8b8b8b;
    font-weight: 700;
    margin-bottom: 10px;
}
.order-tab::after{
    display: block;
    clear: both;
    height: 0;
    content: " ";
}
.tab-item{
    float: left;
    margin-right: 20px;
    cursor: pointer;
}
.tab-item.active{
    color: #44a870;
}
.no-order{
    width: 100%;
    height: 140px;
    text-align: center;
    line-height: 140px;
    border: 1px solid #dedede;
    color: #8b8b8b;
    font-size: 14px;
}
.order-opts-warpper{
    padding-left: 18px;
    width: 158px;
}
</style>