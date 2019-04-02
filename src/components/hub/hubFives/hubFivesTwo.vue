<template>
  <div class="peple_Info clearfix">
    <div class="left_p">
      <div>用户名：</div>
      <div><i>*</i>客户名称：</div>
      <div><i>*</i>填写地址：</div>
      <div><i>*</i>详细地址：</div>
      <div><i>*</i>联系人：</div>
      <div><i>*</i>手机号码：</div>
      <div><i>*</i>邮箱：</div>
    </div>
    <div class="right_p">
      <div>王小明</div>
      <div><input type="text"></div>
      <div><Cascader :data="data2"></Cascader></div>
      <div><input type="text"></div>
      <div><input type="text"></div>
      <div>13480****083 <span>已验证</span></div>
      <div> <div><input type="text"></div></div>
    </div>
    <div class="btn">提交</div>

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
        }]
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {},
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
        margin-top: 20px;
      }
      input{
        border-right: none;
        border-top: none;
        border-left: none;
        outline: none;
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
