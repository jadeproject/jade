<template>
  <div class="peple_Info clearfix">
    <div class="left_p">
      <div>用户名：</div>
      <!--<div><i>*</i>客户名称：</div>-->
      <div><i>*</i>填写地址：</div>
      <div><i>*</i>详细地址：</div>
      <div><i>*</i>联系人：</div>
      <div><i>*</i>手机号码：</div>
      <!--<div><i>*</i>邮箱：</div>-->
    </div>
    <div class="right_p">
      <div>{{loginData.username}}</div>
<!--      <div><input type="text"></div>-->
     <div>
        <i-select @on-change="getshi" :model.sync="model1" size="small" v-model="value1" style="width:70px;margin-top: 0px">
          <i-option  v-for="item in shenData" :value="item.name" :key="item.id">{{ item.name }}</i-option>
        </i-select>
        <i-select  @on-change="getxian" :model.sync="model2" size="small" v-model="value2" style="width:70px;margin-top: 0px">
          <i-option v-for="item in shiData" :value="item.name" >{{ item.name }}</i-option>
        </i-select>
        <i-select :model.sync="model3" size="small"  v-model="value3" style="width:70px;margin-top: 0px">
          <i-option v-for="item in xianData" :value="item.name">{{ item.name }}</i-option>
        </i-select>
      </div>
<!--      <div class="addressTxt">-->
<!--        <input type="text" v-model="value1" placeholder="省份"> - <input type="text" v-model="value2" placeholder="城市"> - <input type="text" v-model="value3" placeholder="区域/县城">-->
<!--      </div>-->
      <div><input type="text" v-model="address"></div>
      <div><input type="text" v-model="contacts"></div>
      <div class="phone_inp">{{loginData.mobile}} <span>已验证</span></div>
      <!--<div> <div><input type="text"></div></div>-->

      <div class="btn" @click="subM">提交</div>
    </div>
<!---->
  </div>

</template>

<script type="text/ecmascript-6">
  import {reloadOne} from "../../../../common/GetJS";

  export default {
    data() {
      return {

        cityList: [
          // {
          //   value: 'beijing',
          //   label: '北京市'
          // },
          // {
          //   value: 'shanghai',
          //   label: '上海市'
          // },
          // {
          //   value: 'shenzhen',
          //   label: '深圳市'
          // },
          // {
          //   value: 'hangzhou',
          //   label: '杭州市'
          // },
          // {
          //   value: 'nanjing',
          //   label: '南京市'
          // },
          // {
          //   value: 'chongqing',
          //   label: '重庆市'
          // }
        ],
        model1: '',
        model2: '',
        model3: '',
        loginData:{},
        value1:'',
        value2:'',
        value3:'',
        address:'',
        contacts:'',
        shenData:[],
        shiData:[],
        xianData:[],
        shenid:'',
        shiid:'',
        xianid:''
      };
    },
    created() {

    },
    mounted() {
      this.loginData=JSON.parse(window.localStorage.getItem("loginData"));
      this.getSSX('1','0');
      // 默认
      // this.
      // 获取个人信息
     this.$get('/index.php/hy/user/my_person',{
       "uid":JSON.parse(window.localStorage.getItem("loginData")).id
     }).then((response)=>{
       console.log(response.data);
       this.value1=response.data.city.sheng.name;
       this.value2=response.data.city.shi.name;
       this.value3=response.data.city.xian.name;
       this.shenid=response.data.city.sheng.id;
       this.shiid=response.data.city.shi.id;
       this.contacts=response.data.contacts;
       this.address=response.data.address;


      // 获取市
       this.$get('/index.php/hy/code/sheng',{
         type:'2',
         pid:this.shenid
       }).then((responese)=>{
         this.shiData=responese.data;
       })
       // 获取县
       this.$get('/index.php/hy/code/sheng',{
         type:'2',
         pid:this.shiid
       }).then((responese)=>{
         this.xianData=responese.data;
       })
       // this.value1.name="北京"
     })

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
        this.value2='';
        this.value3='';
        this.shenData.find((item)=>{
         if(item.name == this.value1){
           // 获取市
           this.$get('/index.php/hy/code/sheng',{
             type:'2',
             pid:item.id

           }).then((responese)=>{
             this.shiData=responese.data;
           })
         }
        })
      },
      getxian(){
        this.shiData.find((item)=>{
          if(item.name=this.value2){
            // 获取市
            this.$get('/index.php/hy/code/sheng',{
              type:'2',
              pid:item.id

            }).then((responese)=>{
              this.xianData=responese.data;
            })
          }
        })

      },
      subM(){
        if(this.value1 == "" || this.value2 == "" || this.value3 == "" ||this.address == "" || this.contacts == ""){
          this.$Message.error("输入不能为空");
          return;
        }
        this.$get('/index.php/hy/user/my_person',{
          "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
          "city":this.value1+','+this.value2+','+this.value3,
          "address":this.address,
          "contacts":this.contacts,
        }).then((response)=>{
          if(response.code == 200){
            this.$Message.success(response.msg);
            // window.location.reload();

          }else{
            this.$Message.error(response.msg);
          }
          console.log(response.data);
        })
      },

    },
    components: {}
  };




</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .peple_Info{
    padding: 20px;
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
        margin-top: 25px;
        height: 30px;
        i{
          color: red;
        }
      }
    }
    .right_p{
      float: left;
      margin-left: 20px;
      div{
        margin-top: 25px;
        height: 30px;
      }
      .addressTxt{
        input{
          width: 120px;
        }
      }
      .phone_inp{
        margin-top: 25px;
      }


      input{
        border-right: none;
        border-top: none;
        border-left: none;
        outline: none;
      }
      span{
        color: red;
        font-size: 14px;
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
        // margin-left: -30px;
      }
    }
  }


</style>
