<template>
  <div class="shopping-balance">
    <div class="cart-progress">
      <div class="cart-progress-step1">购物车</div>
      <div class="cart-progress-step2 cart-progress-step2-active">填写订单</div>
      <div class="cart-progress-step3">完成支付</div>
      <div class="cart-progress-line">
        <div class="cart-progress-line-step2"></div>
      </div>
    </div>
    <div class="delivery w">
     <!-- 地址 -->
        <Address></Address>
    </div>
    <div class="goods w">
      <div class="goods-list">
        <table>
          <thead>
            <tr>
              <th>商品名称</th>
              <th></th>
              <th>规格</th>
              <th>数量</th>
              <th>价格</th>
              <!---->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in productData" :key="index">
              <td class="goods-pic-outer">
                <img
                  :src="item.slideshowPC[0].url"
                  alt
                  class="goods-pic"
                />
              </td>
              <td class="goods-name">{{item.goodsName}}</td>
              <td class="goods-spec">{{item.spec[0].content}}</td>
              <td class="goods-ammount">{{item.count}}</td>
              <td class="goods-price">￥{{item.spec[0].ncPrice}}</td>
              <!---->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="coupon">
        <p class="coupon-headline">茶票优惠</p>
        <span class="coupon-sum">-￥0.00</span>
        <!---->
        <div class="coupon-add" style="display: none;">
          仅显示当前可用茶票&nbsp;
          <button class="coupon-add-spread">添加茶票</button>
        </div>
        <div class="coupon-add-info" style="display: none;">
          <div data-v-21fc093a class="validate-input coupon-add-input">
            <div data-v-21fc093a class="input-warpper">
              <input
                data-v-21fc093a
                type="password"
                style="display: none; width: 0px; height: 0px;"
              />
              <input
                data-v-21fc093a
                type="text"
                maxlength="30"
                placeholder="输入茶票兑换码，不区分大小写"
                autocomplete="new-password"
              />
            </div>
            <!---->
          </div>
          <button class="button-default coupon-add-btn">添&nbsp;&nbsp;&nbsp;&nbsp;加</button>
        </div>
      </div>
      <div class="invoice">
        <p class="invoice-headline">开票信息</p>
        <p class="invoice-savetea" style="display: none;">开票金额=茶叶购买费用+存茶服务费用</p>
        <div class="invoice-list" style="display: none;">
          <ul></ul>
        </div>
        <div class="invoice-add-spread" style="display: none;">新增开票信息</div>
        <div class="invoice-add" style="display: none;">
          <div class="invoice-add-info">
            <div class="dropdown">
              <div data-v-05a3b770 class="dropdown-list type" currentindex="0" value="0">
                <div data-v-05a3b770 class="selected">
                  电子普通发票
                  <i data-v-05a3b770 class="icon icon-dropdown"></i>
                </div>
                <!---->
              </div>
              <div data-v-05a3b770 class="dropdown-list personal" currentindex="0" value="0">
                <div data-v-05a3b770 class="selected">
                  个人
                  <i data-v-05a3b770 class="icon icon-dropdown"></i>
                </div>
                <!---->
              </div>
            </div>
            <div class="invoice-add-ele-company">
              <div data-v-21fc093a class="validate-input name">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="10"
                    placeholder="输入姓名，可不填"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input phone">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="11"
                    placeholder="输入收票人手机号码"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input email">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="30"
                    placeholder="输入收票人邮箱：用于接收电子发票"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
            </div>
            <div class="invoice-add-ele-person" style="display: none;">
              <div data-v-21fc093a class="validate-input companyName">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="32"
                    placeholder="*输入单位名称"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input taxpayerIdentityNumber">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="20"
                    placeholder="*输入纳税人识别号或社会信用号"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input phone">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="11"
                    placeholder="*输入收票人手机号码"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input email">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="30"
                    placeholder="*输入邮箱，用于接收电子发票"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
            </div>
            <div class="invoice-add-special" style="display: none;">
              <div data-v-21fc093a class="validate-input companyName">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="32"
                    placeholder="*输入单位名称"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input taxpayerIdentityNumber">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="20"
                    placeholder="*输入纳税人识别号或社会信用号"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input specialCompanyTel">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="13"
                    placeholder="*输入公司注册电话(仅限大陆地区)"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input specialCompanyAddr">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="50"
                    placeholder="*输入公司注册地址"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input specialCompanyBank">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="50"
                    placeholder="*输入开户银行"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input specialBankAccount">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength="25"
                    placeholder="*输入银行账号"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
            </div>
            <div class="invoice-add-btn">
              <button class="button-default invoice-add-confirm">确认</button>
              <button class="button-outline invoice-add-cancle">取消</button>
            </div>
          </div>
          <div class="invoice-add-description">
            <p>
              电子普通发票是税局认可的有效凭证，其法律效力、基本用途及适用规定同纸质发票。
              <br />确认收货后，您可直接下载电子发票，打印即可报销。
            </p>
            <br />
            <p>
              开票须知：
              <br />1.开票金额为用户实际支付的金额（不含礼品卡与不支持该发票类型的商品实付金额）。
              <br />2.电子发票可在确认收货后，在订单详情页下载。
              <br />3.未随箱寄出的纸质发票，会在发货后15-30个工作日内单独寄出。
              <br />4.单笔订单只支持开具一种类型的发票。
            </p>
            <button class="invoice-add-description-link">更多发票常见问题</button>
          </div>
        </div>
      </div>
      <div class="remark">
        <p class="remark-headline">备注信息</p>
        <div style="display: none;">
          <div data-v-7e41e68c class="validate-textarea remark-detail" maxlength="100">
            <div data-v-7e41e68c class="textarea-warpper">
              <textarea data-v-7e41e68c maxlength="100" placeholder></textarea>
              <p data-v-7e41e68c class="length-limit">
                <span data-v-7e41e68c class>0</span>/100
              </p>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="total">
        <div class="total-detail">
          <p class="total-detail-total-key">商品总金额</p>
          <!---->
          <span class="total-detail-total-value">￥{{finalPrice}}</span>
          <p class="total-detail-discount-key">优惠金额</p>
          <span class="total-detail-discount-value">-￥0.00</span>
          <p class="total-detail-freight-key">
            运费
            <span>(满199包邮)</span>
          </p>
          <span class="total-detail-freight-value">￥0.00</span>
        </div>
        <div class="total-sum">
          <p class="total-sum-deal-key">应付总额：</p>
          <span class="total-sum-deal-value">￥{{finalPrice}}</span>
        </div>
        <button class="button-default total-payment-btn" @click="handlePay">去付款</button>
      </div>
    </div>
  </div>
</template>

<script>
import Address from '@/views/Address'
export default {
  components:{
    Address
  },
  data() {
    return {
      finalPrice:''
    }
  },
  computed: {
      productData() {
        let getNum=this.$route.params.num;
        let productdata =''
        if(getNum==-1){
            productdata = this.$store.state.dataCart;
            this.finalPrice = this.$store.getters.totalInfo.totalPrice;
        }else{
            productdata = this.$store.state.buyData;
            this.finalPrice = this.$store.getters.totalInfo.buyPrice;
        }
        // console.log(productdata);
        return productdata;
    }
  },
  methods: {
    handlePay(){
      let addressInfo = this.$store.state.xuseraddress;
      // console.log(addressInfo);
      if(addressInfo.length!=0){
          let orderInfo={};
          orderInfo.orderGoods = this.productData;
          orderInfo.finalPrice = this.finalPrice;
          this.$store.commit('orderInfoMut',orderInfo);
          this.$router.push({path:'/shopping/pay'});
      }else{
          alert('请先填写收货信息');
      }
      
    }
  },
};
</script>

<style>
</style>