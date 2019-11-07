import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: { //相当于组件中的data，用于提供数据  
    dataCart:[],//购物车数据
    buyData:[],//立即购买的商品数据
    xuseraddress:[],//用户地址
    orderList:[] //订单信息
  },
  getters:{ //相当于组件中的computed,用于操作state并提供新数据
    totalInfo(state){
      let total=0; //购物车中的商品数量
      let totalPrice=0; //购物车中的商品总价
      let buyPrice = 0; //立即购买的商品总价
  
      let cstate = state.dataCart;
      let bcstate = state.buyData;
  
      cstate.forEach((val)=>{
        total+=val.count;
        totalPrice+=val.count*val.spec[0].ncPrice;
      });
  
      bcstate.forEach((val)=>{
        buyPrice=val.count*val.spec[0].ncPrice;
      });
  
      return {
        total,
        totalPrice,
        buyPrice
      }
    }
  },
  mutations: { //相当于组件中的methods，负责修改state中的值
      cartAddMut(state,obj){  //购物车添加功能
        
        let cstate = state.dataCart;
        let bool = true;
        cstate.forEach((val)=>{
            if(val.id===obj.id){
                val.count++;
                bool=false;
                return false;
            }
        })
        if(bool){
          Vue.set(obj,'count',1); //响应式的设置方式
          cstate.push(obj);
        }
        // console.log(obj);
      },
      countAdd(state,idx){  //增加购买数量
        let cstate = state.dataCart;
        cstate[idx].count++;
        if(cstate[idx].count>cstate[idx].limit_num){
           cstate[idx].count=cstate[idx].limit_num
        }
          
      },
      countSub(state,idx){  //减少购买数量
        let cstate = state.dataCart;
        cstate[idx].count--;
        if(cstate[idx].count<1){
           cstate[idx].count=1;
        }
      },
      cartDelMut(state,idx){ //购物车删除功能
        state.dataCart.splice(idx,1);
      },

      buyAddMut(state,obj){  //购买的商品数据
          let cstate = state.buyData;
          cstate.length=0;
          cstate.push(obj);
      },
      addressmut(state,data){  //添加地址
        state.xuseraddress.push(data)
      },
      addresschangemut(state,data){ //修改地址
        state.xuseraddress.splice(data.n,1,data.obj)
      },
      addressdelmut(state,n){ //删除地址
        state.xuseraddress.splice(n,1)
      },
      orderInfoMut(state,obj){ //添加订单信息
       
        let date = new Date();   //获取当前时间  
        let nowTime = date.getTime();  //获取时间戳
        Vue.set(obj,'orderTime',nowTime); //设置下单时间
        Vue.set(obj,'orderNo','1191975979853807617'); //设置当前订单号
        Vue.set(obj,'payState',false);//设置支付状态，false表示未付款
        state.orderList.push(obj);
        console.log(obj);
      },
      updatePayState(state){ //修改支付状态
         let  olist=state.orderList;
         olist[olist.length-1].payState=true;
         console.log(olist);
      }


  }
  
})

