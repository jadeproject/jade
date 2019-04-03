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
      <div>
        <i-select :model.sync="model1" size="small" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" size="small" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" size="small" style="width:70px;margin-top: 10px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
      </div>
      <div><input type="text"></div>
      <div><input type="text"></div>
      <div class="phone_inp">{{loginData.mobile}} <span>已验证</span></div>
      <!--<div> <div><input type="text"></div></div>-->
    </div>
    <div class="btn" @click="subM">提交</div>
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

        }
      };
    },
    created() {

    },
    mounted() {
      this.loginData=JSON.parse(window.localStorage.getItem("loginData"));

    },
    methods: {
      subM(){
        this.$get('/index.php/hy/user/my_person',{

        }).then((response)=>{
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
      width: 20%;
      text-align: right;
      height: 100%;
      float: left;
      div{
        margin-top: 25px;
        i{
          color: red;
        }
      }
    }
    .right_p{
      float: left;
      margin-left: 20px;
      div{
        margin-top: 18px;
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

    }
    .btn{
      padding: 10px 30px;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: 10px;
      /*margin-left: -50%;*/
      background-color: @bg;
      color: #fff;
      margin-left: -30px;
    }

  }


</style>
