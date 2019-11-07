<template>
  <div class="uncenterr">
    <div class="userboxx">
      <div class="userboxcon">
        <h2 class="userhead">用户名</h2>
        <div class="memberinfo">
          <p class="ordinary">普卡会员</p>
          <div class="ordinaryinfo">还差10000元可升级为金卡会员

             <a   ><em >金卡权益</em></a>
          </div>
         <div class="yicard">

           大益卡-预存款：
                     <span>￥0.00</span> <a><em>充值</em></a>
         </div>
         <div class="infobottom">
           <p>
             有&nbsp;<em>3</em>&nbsp;张茶票可使用
           </p>
           <span>|</span>
           <p>
             购买、兑换宝盒&nbsp;<em>0</em>&nbsp;份
           </p>
           <span>|</span>
           <p>
             &nbsp;<em>3</em>&nbsp;件商品正使用存茶服务
           </p>
          
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.infobottom{
  padding-top: 10px;
    color: #484848;
    font-size: 14px;
}
.infobottom p{
  color: #484848;
    display: inline-block;
}
.infobottom span{
  display: inline-block;
    margin: 0 20px;
    color: #ececec;
}
a, input, select {
    outline: 0;
    overflow: hidden;
}
a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
em{
      color: #44a870;
    cursor: pointer;
    display: inline-block;
    margin-left: 6px;
}
.uncenterr {
  width: 950px;
  min-height: 815px;
  background-color: #fff;
}
.userboxx {
  width: 100%;
  height: 100%;
  padding: 22px 20px 0;
  box-sizing: border-box;
}
.userboxcon {
  height: 100%;
}
.userhead {
  font-size: 22px;
  color: #767676;
  line-height: 30px;
}
.memberinfo {
  line-height: 20px;
  margin-top: 20px;
  width: 910px;
  height: 177px;
  border: 1px solid #d2d2d2;
  padding: 24px 13px 0;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.ordinary {
  color: #a7a7a7;
  font-size: 20px;
  line-height: 20px;
}
.ordinaryinfo {
  font-size: 14px;
  margin: 12px 0 21px;
  color: #a7a7a7;
}
.yicard{
  color: #767676;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ececec;
}
</style>>

