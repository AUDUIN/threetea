<template>
  
        <div data-v-56d52916 class="delivery" data-v-2d9cad36>
          <div class="delivery-title">收货信息</div>
          <div class="delivery-info" >
            <div class="delivery-info-list">
              <ul>
                <li class="click-border" v-for="(item,index) in getaddress" :key="index">
                  <p class="name">{{item.name}}</p>
                  <p class="phone">{{item.phone}}</p>
                  <p class="address">{{item.city[0]}}&nbsp;{{item.city[1]}}&nbsp;{{item.city[2]}}&nbsp;{{item.address}}</p>
                  <a href="javascript:;" class="default">默认</a>
                  <a href="javascript:;" @click="editaddress(index)" class="default edit" >编辑 |</a>
                  <a href="javascript:;" 
                  @click="del(index)"
                  class="default delete" 
                  >删除</a>
                </li>
              </ul>
            </div>
            <div
              class="delivery-info-add"
              @click="addinfo"
              :style="showedit?'display:none':''"
            >新增收货信息</div>
            <div class="delivery-info-edit" :style="!showedit?'display:none':''">
              <div data-v-21fc093a class="validate-input name" maxlength="10">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength
                    placeholder="输入收货人姓名"
                    autocomplete="new-password"
					v-model="useraddress.name"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input phone" maxlength="13">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength
                    placeholder="输入收货人电话"
                    autocomplete="new-password"
					v-model="useraddress.phone"
                  />
                </div>
                <!---->
              </div>
              <div data-v-21fc093a class="validate-input area" @click="edit=1">
                <div data-v-21fc093a class="input-warpper">
                  <input
                    data-v-21fc093a
                    type="password"
                    style="display: none; width: 0px; height: 0px;"
                  />
                  <input
                    data-v-21fc093a
                    type="text"
                    maxlength
                    placeholder="选择配送区域"
                    v-model="cityname"
                    disabled="disabled"
                    autocomplete="new-password"
                  />
                </div>
                <!---->
              </div>
              <div class="area" @click="edit=1;fn(0,0);cityname=[]"></div>
              <div class="delivery-cascade" :style="edit==1?'':'display:none'">
                <i @click="edit=0" class="delivery-cascade-close"></i>
                <div class="delivery-cascade-content">
                  <ul class="headline">
                    <li class="headline-active">选择省份</li>
                    <li class style="display: none;">选择城市</li>
                    <li class style="display: none;">选择区县</li>
                  </ul>
                  <div class="content">
                    <ul class="content-province">
                      <li
                        v-for="(item,index) in cdata.cities"
                        @click="fn(item.cityCodeId,item.name)"
                        :key="index"
                      >{{item.name}}</li>
                    </ul>
                    <ul class="content-city" style="display: none;"></ul>
                    <ul class="content-area" style="display: none;"></ul>
                  </div>
                </div>
              </div>
              <div data-v-7e41e68c class="validate-textarea area-detail">
                <div data-v-7e41e68c class="textarea-warpper">
                  <textarea data-v-7e41e68c maxlength="50" placeholder="输入详细收货地址"
				  v-model="useraddress.address"
				  ></textarea>
                  <p data-v-7e41e68c class="length-limit">
                    <span data-v-7e41e68c class>0</span>/50
                  </p>
                </div>
                <!---->
              </div>
              <div class="defalut-address defalut-address-checkbox-check">
                <input
                  type="checkbox"
                  id="defalut-address-check"
                  checked="checked"
                  class="defalut-address-checkbox"
                />
                <label for="defalut-address-check">设为默认地址</label>
              </div>
              <button class="confirm" @click="upaddress">确&nbsp;&nbsp;&nbsp;&nbsp;认</button>
              <button class="cancle" @click="showedit=false;cityname=[]">取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
            </div>
          </div>
        </div>
     

</template>

<script>
export default {
  data() {
    return {
      showedit: false,
      edit: 0,
      pid: 0,
      cdata: null,
      cityname: [],
      useraddress: {
		  name:'',
		  phone:'',
		  address:'',
	  },
    addoredit:0,
    editnum:0,
    };
  },
  methods: {
    addinfo() {
	  this.showedit = !this.showedit;
	  this.useraddress={
		   name:'',
		  phone:'',
		  address:'',
	  },
	  this.cityname=[];
	  this.addoredit=0
    },
    fn(n, name) {
      if (name != 0) {
        this.cityname.push(name);
      }
      // console.log(this.cityname);
      this.$axios({
        url: "/test/api/PC0205",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: `pid=${n}&uid=1189875054616039425&sid=45c140e56c684b9b8cccc77923da4683`
      }).then(res => {
        // console.log(res.data.datas);
        if (res.data.datas.cities.length == 0) {
          this.edit = 0;
        }
        this.cdata = res.data.datas;
      });
	},
	upaddress(){
		if(this.addoredit==0){
		// console.log('添加')
		let obj = JSON.parse(JSON.stringify(this.useraddress)) 
		obj.city=this.cityname 
		this.$store.commit('addressmut',obj);	
		}else{
      // console.log('修改');
      let obj = JSON.parse(JSON.stringify(this.useraddress)) 
    obj.city=this.cityname 
    let n = this.editnum
    // console.log(n)
		this.$store.commit('addresschangemut',{n,obj});	
		}
	this.showedit=false
	},
	editaddress(n){
    this.showedit=true;
    this.addoredit=1;
    this.useraddress.name= this.getaddress[n].name;
    this.useraddress.phone=this.getaddress[n].phone;
    this.useraddress.address=this.getaddress[n].address;
    this.cityname=this.getaddress[n].city
    // console.log(this.getaddress[n]);
    this.editnum=n;
    // console.log(this.editnum)
    },
    del(n){
      this.$store.commit('addressdelmut',n);
    }
  },
  created() {
    this.$axios({
      url: "/test/api/PC0205",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: `pid=0&uid=1189875054616039425&sid=45c140e56c684b9b8cccc77923da4683`
    }).then(res => {
      // console.log(res.data.datas);
      this.cdata = res.data.datas;
    });
  },
  computed: {
	  getaddress(){
		 return this.$store.state.xuseraddress
	  }
  },
};
</script>

<style scoped>
.edit{
	display: none;
}
.delete{
	display: none !important;

}
.delivery-info-list .click-border:hover .edit{
	display: block
}
.delivery-info-list .click-border:hover .delete{
	display: block !important;
}

</style>