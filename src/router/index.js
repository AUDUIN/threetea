import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../components/nav'
import usercenter from '../views/usercenter'
import centeraddress from '../views/centeraddress'
import userinfo from '../views/userinfo'
import CommodityList from '../views/CommodityList'
import CommodityDetail from '../views/CommodityDetail'
import Cart from '../views/shopping/Cart'
import Balance from '../views/shopping/Balance'
import Pay from '../views/shopping/Pay'
import CenterOrder from '../views/CenterOrder'
import login from '../views/loginandreg/login'
import reg from '../views/loginandreg/register'
import $axios from 'axios'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components:{ 
      nav:Nav,
     default:Home
    },
    alias:'/home'
  },
  {
    path:'/login',
    name: 'login',
    components:{
      nav:Nav,
      default:login
    }
  },
  {
    path:'/usercenter',
    name: 'usercenter',
    components:{
      nav:Nav,
      default:usercenter
    },
    beforeEnter: (to, from, next) => {
      // ...
      let token = window.localStorage.getItem('token');
      if(token){
      $axios.get('http://localhost:3004/users/token/verify?token='+token).then((res)=>{
              if(res.data.code===1){
                next();
              }else{
                next({path:'/login'});
              }
        })
        next();
      }else{
        next({path:'/login'});
      }
    },
    children:[
      {
        path:'/',
        components:{
          default:userinfo
        }
      },
      {
        path:'address',
        components:{
          default:centeraddress
        }
      },
      {
        path:'CenterOrder',
        components:{
          default:CenterOrder
        }
      }
    ],
    
  },
  {
    path: '/commodity-list',
    name: 'commodity-list',
    components: {
      nav:Nav,
      default:CommodityList
    }
  },
  {
    path: '/commodity-detail/:id',
    name: 'commodity-detail',
    components: {
      nav:Nav,
      default:CommodityDetail
    }
  },
  {
    path: '/shopping/cart',
    name: 'cart',
    components: {
      nav:Nav,
      default:Cart
    },

  },
  {
    path: '/shopping/balance/:num',
    name: 'balance',
    components: {
      nav:Nav,
      default:Balance
    },
    beforeEnter: (to, from, next) => {
      // ...
      let token = window.localStorage.getItem('token');
      if(token){
      $axios.get('http://localhost:3004/users/token/verify?token='+token).then((res)=>{
              if(res.data.code===1){
                next();
              }else{
                next({path:'/login'});
              }
        })
        next();
      }else{
        next({path:'/login'});
      }
    },
  },
 
	{
	    path: '/shopping/pay',
	    name: 'pay',
	    components: {
	      nav:Nav,
	      default:Pay
	    }
  },
  {
    path:'/reg',
    components:{
      nav:Nav,
      default:reg
    }
  }
  
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
