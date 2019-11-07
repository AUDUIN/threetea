<template>
<div data-v-56d52916="" class="delivery">
  <div data-v-2d9cad36="" data-v-56d52916="" class="ucenter-layout w mb20">
      <div data-v-32d2b36c="" data-v-2d9cad36="" class="left-bar">
								<h2 data-v-32d2b36c="" class="menu-title" @click="act=0" >
									<router-link :class="{'active':act==0}"  data-v-32d2b36c="" to="/usercenter">个人中心</router-link>
								</h2>
								<dl data-v-32d2b36c="" class="menu-list"><dt data-v-32d2b36c="" class="menu-name">我的订单</dt>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-wait-pay"></i> <span
										 data-v-32d2b36c="">待付款</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-wait-ship"></i> <span
										 data-v-32d2b36c="">待发货</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-shipped"></i> <span
										 data-v-32d2b36c="">已发货</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-after-sales"></i> <span
										 data-v-32d2b36c="">售后单</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"
									@click="act=2;jump('/usercenter/CenterOrder')" 
									:class="{'active':act==2}"
									><i data-v-32d2b36c="" class="icon icon-all-order"></i> <span
										 data-v-32d2b36c="">全部订单</span></dd>
								</dl>
								<dl data-v-32d2b36c="" class="menu-list"><dt data-v-32d2b36c="" class="menu-name">账号相关</dt>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-user-info"></i> <span
										 data-v-32d2b36c="">个人信息</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-phone"></i> <span
										 data-v-32d2b36c="">认证手机号</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-password"></i> <span
										 data-v-32d2b36c="">登录密码</span></dd>
								</dl>
								<dl data-v-32d2b36c="" class="menu-list"><dt data-v-32d2b36c="" class="menu-name">购物相关</dt>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-coupon"></i> <span
										 data-v-32d2b36c="">茶票</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-wallet"></i> <span
										 data-v-32d2b36c="">钱包</span></dd>
									<dd data-v-32d2b36c="" class="menu-item " @click="act=1;
									jump('/usercenter/address')
									" :class="{'active':act==1}"
									
									><i data-v-32d2b36c="" class="icon icon-address"></i>
										
										<span data-v-32d2b36c="">收货信息</span>
											</dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-invoice"></i> <span
										 data-v-32d2b36c="">开票信息</span></dd>
								</dl>
								<dl data-v-32d2b36c="" class="menu-list"><dt data-v-32d2b36c="" class="menu-name">益友服务</dt>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-honorable"></i> <span
										 data-v-32d2b36c="">尊享服务</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-gold"></i> <span
										 data-v-32d2b36c="">金卡会员</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-box"></i> <span
										 data-v-32d2b36c="">大益宝盒</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-service"></i> <span
										 data-v-32d2b36c="">存茶服务</span></dd>
									<dd data-v-32d2b36c="" class="menu-item"><i data-v-32d2b36c="" class="icon icon-message"></i> <span
										 data-v-32d2b36c="">站内消息</span></dd>
								</dl>
		</div>

<div data-v-2d9cad36 class="right-cont">
<router-view>

</router-view>

</div>

  
  
  </div>  
  </div> 
</template>

<script>


export default {
	data() {
		return {
			isactive:true,
			act:0
		}
	},
	methods: {
		isshow(){
			this.isactive=true
		},
		jump(pathurl){
			this.$router.push({
				path:pathurl
			})
		}
	},
}
</script>

<style>
    
</style>