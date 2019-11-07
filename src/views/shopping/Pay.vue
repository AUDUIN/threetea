<template>
  <div class="shopping-pay">
    <div class="cart-progress">
      <div class="cart-progress-step1">购物车</div>
      <div class="cart-progress-step2 cart-progress-step2-active">填写订单</div>
      <div class="cart-progress-step3 cart-progress-step3-active">完成支付</div>
      <div class="cart-progress-line">
        <div class="cart-progress-line-step3"></div>
      </div>
    </div>
    <div class="pay w">
      <div class="pay-headline">选择支付方式</div>
      <div class="pay-info">
        <div class="detail">
          实际支付金额
          <span>￥{{handlePay}}</span>，剩余付款时间&nbsp;
          <span>23小时53分钟</span>
        </div>
        <div class="type">
          <ul>
            <li class="taetea-pay active">
              <div class="taetea-pay-info">
                <p class="taetea-pay-info-title">大益卡-预存款</p>
                <div class="taetea-pay-info-balance">
                  余额不足：
                  <span>￥0.00</span>
                  <a href="/shopping-related/wallet" class>
                    <button class="taetea-pay-recharge">充值</button>
                  </a>
                </div>
              </div>
            </li>
            <li class="wechat">
              <div class="wechat-title">微信支付</div>
            </li>
            <li class="alipay">
              <div class="alipay-title">支付宝</div>
            </li>
            <li class="card">
              <div class="card-title">银行卡快捷支付</div>
            </li>
          </ul>
        </div>
        <div class="confirm">
          <button class="button-default pay-confirm " @click="confirmPay">确&nbsp;&nbsp;&nbsp;&nbsp;认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    handlePay(){
        let orderData = this.$store.state.orderList;
        return orderData[orderData.length-1].finalPrice;
    }
  },
  methods: {
    confirmPay(){
       this.$store.commit('updatePayState');
    }
  },
};
</script>

<style>
</style>