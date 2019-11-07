<template>
  <div class="commodity-detail">
    <div class="w">
      <div class="detail-t">
        <div class="l fl">
          <img
            :src="goodsDetail.slideshowPC[0].url"
            alt
            class
          />
        </div>
        <div class="r fl">
          <div class="title">{{goodsDetail.goodsName}}</div>
          <div class="subtitle">{{goodsDetail.subTitle}}</div>
          <div class="spec">
            <div>
              <div class="spec-list click-border">
                <div class="product">
                  <p class="product-title">{{goodsDetail.spec[0].content}}</p>
                  <div class="gold-price">
                    尊享会员价¥{{goodsDetail.spec[0].gcPrice}} |
                    <span class="primary-c pointer">立即开通</span>
                  </div>
                </div>
                <div class="price">
                  <em class="price-tips">￥</em>{{goodsDetail.spec[0].ncPrice}}
                </div>
              </div>
            </div>
          </div>
          <div class="num">
            <div class="num-title fl">数量</div>
            <div data-v-3f2d3300 class="numbox num-box-detail">
              <span data-v-3f2d3300 class="reduce-btn" 
                    :class="num>1?'':'limit'"
                    @click="num--;if(num<=1){num=1}"
               ></span>
              <input v-model="num" data-v-3f2d3300 type="text" maxlength="2" class="num-input"/>
              <span data-v-3f2d3300 class="add-btn"
                @click="num++"
              ></span>
              <!---->
            </div>
          </div>
          <div class="service">
            <h3>服务</h3>
            <ul>
              <li class="fl">• 无忧售后</li>
            </ul>
            <ul>
              <li class="fl">• 满199包邮</li>
            </ul>
          </div>
          <div class="commodity-btn-box">
            <div>
              <div>
                <div class="button button-default btn buy-btn fl" @click="handleOrder">立即购买</div>
                <div class="button button-outline btn fr" @click="handleAdd">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-b">
        <h1 class="detail-b-title">商品详情</h1>
        <div class="detail-con">
          <div class="box-inline">
            <p class="line" v-for="(item, index) in goodsDetail.property" :key="index">• {{item.propName}}：{{item.propValue}}</p>
            
          </div>
        </div>
        <div class="detail-img-box" v-html="goodsDetail.detailHtmlPC">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num:1,
            goodsDetail:''
        }
    },
    methods: {
        handleAdd(){
            let token = window.localStorage.getItem("token")
            if(token){
                 for(let i=0;i<this.num;i++){
                this.$store.commit('cartAddMut',this.goodsDetail);
            }
            }else{
                this.$router.push({path:"/login"})
            }
           
        },
        handleOrder(){
            this.$router.push({path:`/shopping/balance/${this.num}`});
            let buydata = this.goodsDetail;
            buydata.count = this.num;
            this.$store.commit('buyAddMut',buydata);
        }
    },
    created() {
        let idx = this.$route.params.id;
        this.$axios({
            url:'/test/api/PC0402/',
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `goodsId=${idx}&uid=&sid=`
            
        }).then((res)=>{ 
            this.goodsDetail=res.data.datas.goodsDetail;
            
        });
    },
};
</script>

<style>
    .commodity-detail {
        background-color: #fff;
    }
   .commodity-detail .detail-t {
        overflow: hidden;
    }
    .commodity-detail .detail-t .l {
        position: relative;
        width: 460px;
        height: 460px;
    }

    .fl {
        float: left;
    }
    .commodity-detail .detail-t .l img {
        position: absolute;
        width: 460px;
        height: 460px;
    }

    fieldset, img {
        border: 0;
    }
    .commodity-detail .detail-t .r {
        overflow: hidden;
        margin-top: 40px;
        margin-left: 118px;
        width: 430px;
    }
    .commodity-detail .detail-t .r .title {
        width: 383px;
        color: #484848;
        font-size: 36px;
        line-height: 50px;
    }
    .commodity-detail .detail-t .r .subtitle {
        margin-bottom: 30px;
        color: #767676;
        font-size: 14px;
    }
    .commodity-detail .detail-t .r .click-border {
        position: relative;
        overflow: hidden;
        border: 1px solid #44a870;
    }

    .commodity-detail .detail-t .r .spec-list {
        position: relative;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 16px 20px;
        width: 430px;
        height: 80px;
        border: 1px solid #d6d6d6;
        border-radius: 2px;
        color: #000;
    }
    .commodity-detail .detail-t .r .click-border:after {
        position: absolute;
        right: -6px;
        bottom: -6px;
        width: 13px;
        height: 13px;
        background-color: #44a870;
        content: "";
        transform: rotate(45deg);
    }
    .commodity-detail .detail-t .r .spec-list .product-title {
        overflow: hidden;
        width: 52%;
        color: #484848;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        line-height: 28px;
        -o-text-overflow: ellipsis;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .commodity-detail .detail-t .r .spec-list .gold-price {
        display: inline-block;
        color: #767676;
        font-size: 12px;
        line-height: 17px;
    }
    .primary-c {
        color: #44a870;
    }
    .pointer {
        cursor: pointer;
    }
    .commodity-detail .detail-t .r .spec-list .price {
        position: absolute;
        top: 50%;
        right: 20px;
        color: #44a870;
        font-size: 32px;
        transform: translatey(-50%);
    }
    .commodity-detail .detail-t .r .spec-list .price em {
        font-size: 16px;
    }

    .commodity-detail .price-tips {
        font-style: normal;
    }
    .commodity-detail .detail-t .r .num {
        position: relative;
        overflow: hidden;
        padding: 22px 0 24px;
        font-size: 14px;
    }
    .commodity-detail .detail-t .r .num .num-title {
        margin-top: 2px;
        margin-right: 30px;
        color: #585858;
    }

    .commodity-detail .detail-t .r .num .num-box-detail {
        position: absolute;
        left: 48px;
    }
    .numbox[data-v-3f2d3300] {
        position: relative;
        width: 83px;
        height: 26px;
        font-size: 0;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .numbox .reduce-btn.limit[data-v-3f2d3300] {
        background-image: url(../assets/img/sub.png);
    }
    .numbox .reduce-btn[data-v-3f2d3300] {
        background-image: url(../assets/img/sub2.png);
    }
    
    btn[data-v-3f2d3300] {
        display: inline-block;
        width: 26px;
        height: 26px;
        background-size: 26px 26px;
        vertical-align: middle;
        cursor: pointer;
    }
    .numbox .num-input[data-v-3f2d3300] {
        width: 31px;
        height: 20px;
        line-height: 20px;
        color: #44a870;
        font-size: 14px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        border: none;
        font-family: PingFangSC-Regular,Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,\\\5B8B\4F53,"sans-serif";
    }
    button[data-v-3f2d3300], input[data-v-3f2d3300], select[data-v-3f2d3300], textarea[data-v-3f2d3300] {
        margin: 0;
        outline-offset: 0;
        outline-style: none;
        outline-width: 0;
        -webkit-font-smoothing: inherit;
        background-image: none;
    }
    a[data-v-3f2d3300], input[data-v-3f2d3300], select[data-v-3f2d3300] {
        outline: 0;
        overflow: hidden;
    }
    input {
        /* -webkit-writing-mode: horizontal-tb !important; */
        text-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        -webkit-appearance: textfield;
        background-color: white;
        -webkit-rtl-ordering: logical;
        cursor: text;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 0px;
        border-width: 2px;
        border-style: inset;
        border-color: initial;
        border-image: initial;
        }
        .numbox .add-btn[data-v-3f2d3300] {
            background-image: url(../assets/img/add.png);
        }
        .numbox .add-btn[data-v-3f2d3300], .numbox .reduce-btn[data-v-3f2d3300] {
            display: inline-block;
            width: 26px;
            height: 26px;
            background-size: 26px 26px;
            vertical-align: middle;
            cursor: pointer;
        }
        .commodity-detail .detail-t .r .service {
            overflow: hidden;
            padding: 11px 0;
            border-top: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
            color: #767676;
            font-size: 14px;
            line-height: 20px;
            cursor: pointer;
        }
        h3 {
            display: block;
            font-size: 1.17em;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }
        ul {
            display: block;
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 40px;
        }
        .commodity-detail .detail-t .r .service li {
            margin-right: 10px;
            list-style: none;
        }
        li {
            display: list-item;
            text-align: -webkit-match-parent;
        }
       .commodity-detail .detail-t .r .commodity-btn-box {
            margin-top: 30px;
        }
        .commodity-detail .detail-t .r .commodity-btn-box .btn {
            display: inline-block;
            width: 198px;
        }
        .button.button-default, button.button-default {
            width: 238px;
            height: 48px;
            line-height: 48px;
            font-size: 18px;
            color: #fff;
            border: 1px solid #44a870;
            background-color: #44a870;
        }
        .button, button {
            border: none;
            background: none;
            box-shadow: none;
            color: red;
            cursor: pointer;
            text-align: center;
            border-radius: 2px;
        }
        .fr {
            float: right;
        }
        .button.button-outline, button.button-outline {
            width: 238px;
            height: 48px;
            line-height: 48px;
            font-size: 18px;
            color: #44a870;
            border: 1px solid #44a870;
            background-color: transparent;
        }
        .commodity-detail .detail-b .detail-b-title {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ececec;
            color: #484848;
            font-size: 30px;
        }
        .commodity-detail .detail-b .detail-con {
            overflow: hidden;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ececec;
        }
        .commodity-detail .detail-b .detail-con .box-inline {
            float: left;
            min-width: 400px;
            color: #767676;
            line-height: 22px;
        }
        .commodity-detail .detail-b .detail-con .box-inline .line {
            display: inline-block;
            margin-bottom: 10px;
            width: 600px;
            height: 22px;
            font-size: 16px;
            line-height: 22px;
        }
        .commodity-detail .detail-img-box {
            text-align: center;
        }
        .commodity-detail .detail-img-box img {
            display: block;
            width: 100%;
        }
        .button.button-default.activated, .button.button-default:active, .button.button-default:hover, button.button-default.activated, button.button-default:active, button.button-default:hover {
            border-color: #348d5b;
            background-color: #348d5b;
        }
        .button.button-outline.activated, .button.button-outline:active, .button.button-outline:hover, button.button-outline.activated, button.button-outline:active, button.button-outline:hover {
            border-color: #44a870;
            background-color: rgba(68,168,112,.2);
        }
</style>