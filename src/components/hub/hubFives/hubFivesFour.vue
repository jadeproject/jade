<template>
  <div class="peple_Info clearfix">
    <div class="left_p">
      <div>收货人：</div>
      <div><i>*</i>所在地区：</div>
      <div><i>*</i>详细地址：</div>
      <div><i>*</i>固定电话(选填)：</div>
      <div><i>*</i>手机号：</div>
<!--      <div><i>*</i>邮箱：</div>-->
      <div><i>*</i>紧急联系人：</div>
      <div><i>*</i>联系人电话：</div>

    </div>
    <div class="right_p">
      <div><input type="text" v-model="name"></div>
      <div>
        <i-select @on-change="getshi" :model.sync="model1" size="small" v-model="value1" style="width:70px;margin-top: 0px">
          <i-option  v-for="item in shenData" :value="item" >{{ item.name }}</i-option>
        </i-select>
        <i-select  @on-change="getxian" :model.sync="model2" size="small" v-model="value2" style="width:70px;margin-top: 0px">
          <i-option v-for="item in shiData" :value="item">{{ item.name }}</i-option>
        </i-select>
        <i-select :model.sync="model3" size="small"  v-model="value3" style="width:70px;margin-top: 0px">
          <i-option v-for="item in xianData" :value="item">{{ item.name }}</i-option>
        </i-select>
      </div>
<!--      <div class="addressTxt">-->
<!--        <input type="text" v-model="value1" placeholder="省份"> - <input type="text" v-model="value2" placeholder="城市"> - <input type="text" v-model="value3" placeholder="区域/县城">-->
<!--      </div>-->
      <div><input type="text" v-model="addressD"></div>
      <div><input type="text" v-model="phoneD"></div>
      <div><input type="text" v-model="phone"></div>
<!--      <div><input type="text" v-model="em"></div>-->
      <div><input type="text" v-model="jjName"></div>
      <div> <div><input type="text" v-model="jjPhone"></div></div>
      <div class="btn" @click="btnAddress">保存收货人信息</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value2: [],
        cityList: [

        ],
        model1: '',
        value1:'',
        value2:'',
        value3:'',
        name:'',
        address:'',
        addressD:'',
        phone:'',
        phoneD:'',
        em:'',
        jjName:'',
        jjPhone:'',
        shenData:[],
        shiData:[],
        xianData:[]

      };
    },
    created() {

    },
    mounted() {
      console.log(this.value2)
      this.getSSX('1','0');
    },
    methods: {
      getSSX(type,id){
        // 获取省
        this.$get('/index.php/hy/code/sheng',{
          type:type,
          pid:id
        }).then((responese)=>{

          this.shenData=responese.data;
        })
      },
      getshi(){
        // 获取市
        this.$get('/index.php/hy/code/sheng',{
          type:'2',
          pid:this.value1.id

        }).then((responese)=>{
          this.shiData=responese.data;
        })
      },
      getxian(){
        // 获取市
        this.$get('/index.php/hy/code/sheng',{
          type:'2',
          pid:this.value2.id

        }).then((responese)=>{
          this.xianData=responese.data;
        })
      },
      btnAddress(){
        console.log(this.value2);
        // 拼接地址入参
        this.address=`${this.value1.name},${this.value2.name},${this.value3.name}`
        if(this.name==''){
          this.$Message.info('请输人姓名')
        }else if(this.phone==''){
          this.$Message.info('请输入手机号')
        }else if(this.value2.length==0){
          this.$Message.info('请选择地址');
        }else {
          this.$get('/index.php/hy/user/add_address',{
            "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
            "name":this.name,
            "mobile":this.phone,
            'city':this.address,
            'address':this.addressD
          }).then((response)=>{
            if(response.code == 200){
            this.$Message.success("提交数据成功");
            }else{
              this.$Message.error(response.msg);
            }
          })
        }
      }
    },
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .peple_Info{
    padding: 0px 20px 20px 20px;
    display: flex;
    position: relative;
    height: 90%;
    width: 100%;
    .left_p{
      width: 25%;
      text-align: right;
      height: 100%;
      float: left;
      div{
        height: 30px;
        margin-top: 20px;
        i{
          color: red;
        }
      }
    }
    .right_p{
      float: left;
      margin-left: 20px;
      div{
        height: 30px;
        margin-top: 20px;
      }
      .addressTxt{
        input{
          width: 120px;
        }
      }
      input{
        border-right: none;
        border-top: none;
        border-left: none;
        outline: none;
      }
      .btn{
        width: 243px;
        height: 40px;
        padding: 10px 30px;
        text-align: center;
        // position: absolute;
        // left: 50%;
        // bottom: 10px;
        /*margin-left: -50%;*/
        background-color: @bg;
        color: #fff;
        // margin-left: -60px;
      }
    }


  }


</style>
