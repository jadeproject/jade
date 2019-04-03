<template>
  <div class="peple_Info clearfix">
    <div class="left_p">
      <div>收货人：</div>
      <div><i>*</i>所在地区：</div>
      <div><i>*</i>详细地址：</div>
      <div><i>*</i>固定电话(选填)：</div>
      <div><i>*</i>手机号：</div>
      <div><i>*</i>邮箱：</div>
      <div><i>*</i>紧急联系人：</div>
      <div><i>*</i>联系人电话：</div>

    </div>
    <div class="right_p">
      <div><input type="text" v-model="name"></div>
      <div><Cascader :data="data2"  v-model="value2"></Cascader></div>
      <div><input type="text" v-model="addressD"></div>
      <div><input type="text" v-model="phoneD"></div>
      <div><input type="text" v-model="phone"></div>
      <div><input type="text" v-model="em"></div>
      <div><input type="text" v-model="jjName"></div>
      <div> <div><input type="text" v-model="jjPhone"></div></div>
    </div>
    <div class="btn" @click="btnAddress">保存收货人信息</div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value2: [],
        data2: [{
          value: '浙江',
          label: '浙江',
          children: [{
            value: '杭州',
            label: '杭州',
            children: [{
              value: '西湖',
              label: '西湖'
            }]
          }]
        }, {
          value: '江苏',
          label: '江苏',
          disabled: true,
          children: [{
            value: '南京',
            label: '南京',
            children: [{
              value: '中华门',
              label: '中华门'
            }]
          }]
        }],
        name:'',
        address:'',
        addressD:'',
        phone:'',
        phoneD:'',
        em:'',
        jjName:'',
        jjPhone:''

      };
    },
    created() {

    },
    mounted() {
      console.log(this.value2);


    },
    methods: {
      btnAddress(){
        console.log(this.value2);
        // 拼接地址入参
        this.address=`${this.value2[0]},${this.value2[1]},${this.value2[2]}`
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
            if(response.code==200){
              this.$Message.info('提交数据成功');
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
      margin-left: -60px;
    }

  }


</style>
