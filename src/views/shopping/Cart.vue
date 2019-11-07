<template>
  <div class="shopping-cart">
    <div class="cart-progress" v-if="dataCart.length!=0">
      <div class="cart-progress-step1">购物车</div>
      <div class="cart-progress-step2">填写订单</div>
      <div class="cart-progress-step3">完成支付</div>
      <div class="cart-progress-line">
        <div class="cart-progress-line-step1"></div>
      </div>
    </div>
    <div class="shopping-no-goods" v-if="dataCart.length==0">
      <div class="description-outer w">
        <p class="description">你的购物车还是空的</p>
        <p class="description-more">遇到喜欢的茶，要快下手哦</p>
      </div>
      <div class="recommend w">
        <p class="recommend-title">你可能会喜欢</p>
        <div class="recommend-goods">
          <ul class="home-commd-list">
            <li class="home-commd-card">
              <a href="/commodity-detail/f5b2ebf0a7b85ebe2bc1842a576fca01" class>
                <img
                  src="https://image-ebs.yestae.com/goods/20190312/bfa35fc507c766d9a737d48da82a1235.jpg"
                  alt
                  class="card-img"
                />
                <div class="card-info">
                  <p class="card-title one-line">甜醇</p>
                  <p class="card-subtitle one-line">1901 · 300g</p>
                  <p class="card-price">¥128</p>
                </div>
              </a>
            </li>
            <li class="home-commd-card">
              <a href="/commodity-detail/582af5d6dc634fce6672e7e26c4c429b" class>
                <img
                  src="https://image-ebs.yestae.com/goods/20181113/d5693d177a2dc74a741a9f2167c3ca05.jpg"
                  alt
                  class="card-img"
                />
                <div class="card-info">
                  <p class="card-title one-line">金丹</p>
                  <p class="card-subtitle one-line">1801 · 120g</p>
                  <p class="card-price">¥198</p>
                </div>
              </a>
            </li>
            <li class="home-commd-card">
              <a href="/commodity-detail/c64a46af834e0c3689c5e3f0f2811ab9" class>
                <img
                  src="https://image-ebs.yestae.com/goods/20190731/81d73f3e57b4a314b5f988b073a53b5a.png"
                  alt
                  class="card-img"
                />
                <div class="card-info">
                  <p class="card-title one-line">秋硕壶</p>
                  <p class="card-subtitle one-line">180cc</p>
                  <p class="card-price">¥1380</p>
                </div>
              </a>
            </li>
            <li class="home-commd-card last-one">
              <a href="/commodity-detail/8e9d00691cdcafcf3c3897beb37dbc4a" class>
                <img
                  src="https://image-ebs.yestae.com/goods/20180113/263684ee638c4e2deb2a3fc73d0138d7.png"
                  alt
                  class="card-img"
                />
                <div class="card-info">
                  <p class="card-title one-line">7572</p>
                  <p class="card-subtitle one-line">1801 · 150g</p>
                  <p class="card-price">¥58</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shopping-have-goods" v-else>
      <div class="goods-detail w">
        <div class="goods-list">
          <table>
            <thead>
              <tr>
                <th>商品名称</th>
                <th></th>
                <th>规格</th>
                <th>数量</th>
                <th>价格</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dataCart" :key="index">
                <td class="goods-pic-outer">
                  <img
                    :src="item.slideshowPC[0].url"
                    alt
                    class="goods-pic"
                  />
                </td>
                <td class="goods-name">{{item.goodsName}}</td>
                <td class="goods-spec">{{item.spec[0].content}}</td>
                <td class="goods-numbox">
                  <div data-v-3f2d3300 class="numbox">
                    <span data-v-3f2d3300 class="reduce-btn"
                        :class="item.count>1?'':'limit'"
                        @click="countSub(index)"
                    ></span>
                    <input data-v-3f2d3300 :value="item.count" type="text" maxlength="2" class="num-input" />
                    <span data-v-3f2d3300 class="add-btn"  @click="countAdd(index)"></span>
                    <!---->
                  </div>
                </td>
                <td class="goods-price">￥{{item.spec[0].ncPrice}}</td>
                <td class="goods-delete-outer">
                  <div class="goods-delete">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACEElEQVRIS8VVz8vTQBB9szS1S6z1oiLev5tH/xRvihcVtVA8GNTgj7VKVGKpFCqCXkRv/ikevXn3oF6stWxtwo5sSUr6mU2aD9EcEkjy9s28mXlDyC6lVAuAUUqZ/N1BnkopAUAopVKLJ3uLomjP87xzQojvnue9HQwG3w5y+GQyOZYkyXljzNEkSd6FYfiJbOS+798DEAJIiei1lPJWv9//2YRkOp0e1lo/YeaLAKwa0WKxGFoC0e12rxtjIgCHiIgBPJNSDnclyQ63Qd5gZqvKLyFEOJ/Pn68lsqmtVqv7AK7ZHzKSF8w8DILga1UmcRwfJyKLvVrEttvtB1bqNYG9SqJIiOiVlPKmK5MM85SZLwHwbGBEFHc6nYc5ZkNQILE6XnYBKgJaZQFt1W+LwIJdKRfl2uWfPJA/CPJMlsvlXWYOsqJt5LLftdaVshRrVkrgkst2VwbOu6VUlp0IKuRCk05zZlBRTDSZlf9L4OiWvyNR2RCVFLl2GJ1tqrUuesumW7I23RrGKu/6t4O2i7c09a4qs6sdosIO2HjXfrnWBE28Zb9112EpjmOfiB4z85U6B3XtBYfVv2Tm2zQajfaY+QMzHwFQK0sNSbG7fhDRGRqPxyfTNH1PRKcBvGHmR3VbzEWSyXUHwAVm/thqtc6ud3Kv1zthjOkaYz4HQbBosuxLauILIU4JIeaz2ezLb654+e/ePz9tAAAAAElFTkSuQmCC"
                      height="24"
                      width="24"
                      alt
                      class="goods-delete-btn"
                      @click="haddleDel(index)"
                    />
                  </div>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div class="goods-sum">
          <p class="goods-sum-description">商品小计:</p>
          <span class="goods-sum-price">¥{{totalInfo.totalPrice}}</span>
          <button class="goods-sum-submit" @click="handleOrder">去下单</button>
        </div>
      </div>
    </div>
    <div class="invalid-goods w" style="display: none;">
      <p class="headline">失效商品</p>
      <div class="goods-detail">
        <div class="goods-list">
          <table>
            <thead>
              <tr>
                <th>商品名称</th>
                <th></th>
                <th>规格</th>
                <th>数量</th>
                <th>价格</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="goods-sum">
          <button class="goods-sum-clear button-outline">全部清除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
      dataCart(){
        return this.$store.state.dataCart
      },
      totalInfo(){
            return this.$store.getters.totalInfo;
      }
    },
    methods: {
        countAdd(idx){
            this.$store.commit('countAdd',idx);
        },
        countSub(idx){
            this.$store.commit('countSub',idx);
        },
        haddleDel(idx){
           this.$store.commit('cartDelMut',idx);
        },
        handleOrder(){
          this.$router.push({path:'/shopping/balance/-1'})
        }
    },
};
</script>

<style>
</style>