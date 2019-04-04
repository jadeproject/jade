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
      <!--<div><input type="text"></div>-->
      <!-- <div>
        <i-select :model.sync="model1" size="small" v-model="value1" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.label">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" size="small" v-model="value2" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.label">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" size="small"  v-model="value3" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.label">{{ item.label }}</i-option>
        </i-select>
      </div> -->
      <div class="addressTxt">
        <input type="text" v-model="value1" placeholder="省份"> - <input type="text" v-model="value2" placeholder="城市"> - <input type="text" v-model="value3" placeholder="区域/县城">
      </div>
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
  export default {
    data() {
      return {
        data2: [{
          value: 'zhejiang',
          label: '浙江',
          children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
              value: 'xihu',
              label: '西湖'
            }]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          disabled: true,
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门'
            }]
          }]
        }],
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: '',
        loginData:{

        },
        value1:'',
        value2:'',
        value3:'',
        address:'',
        contacts:'',
      };
    },
    created() {

    },
    mounted() {
      this.loginData=JSON.parse(window.localStorage.getItem("loginData"));

    },
    methods: {
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
            this.$Message.success("修改成功！");
          }else{
            this.$Message.error(response.msg);
          }
          console.log(response.data);
        })
      }
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
