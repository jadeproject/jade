<template>
  <div class="hubFives">
    <div class="title">
      <div v-for="(item,index) in peple_title" :class="{'curren':currenIndex==index}" @click="select(item,index)">{{item.val}}</div>
    </div>
    <div class="rangContent">
      <hub-fives-one v-if="tt==0"></hub-fives-one>
      <hub-fives-two v-if="tt==1"></hub-fives-two>
      <hub-fives-three v-if="tt==2"></hub-fives-three>
      <hub-fives-four v-if="tt==3"></hub-fives-four>
    </div>
    <hub-pay-ok ref="showPayOk_flag" ></hub-pay-ok>
  </div>

</template>

<script type="text/ecmascript-6">
  import hubFivesOne from './hubFivesOne'
  import hubFivesTwo from './hubFivesTwo'
  import hubFivesThree from './hubFivesThree'
  import hubFivesFour from './hubFivesFour'
  import hubPayOk from  './hubPayOk'
  export default {
    data() {
      return {
        peple_title:[
          {
            val:'个人中心',
            type:1
          },
          {
            val:'个人信息',
            type:2
          },
          {
            val:'账户安全',
            type:3
          },
          {
            val:'地址设置',
            type:4
          }
        ],
        tt:0
      };
    },
    computed:{
      currenIndex(){
        return this.tt
      }
    },
    created() {

    },
    mounted() {
      // 支付成功回调事件
      if(this.$GQ("pay") && this.$GQ("id") && this.$GQ("username")){
        this.$refs.showPayOk_flag.show();
      }
    },
    methods: {
      select(item,index){
        this.tt=index;
      }
    },
    components: {
      hubFivesOne,
      hubFivesTwo,
      hubFivesThree,
      hubFivesFour,
      hubPayOk
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .hubFives{
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    border: 1px solid #ededed;
    box-shadow: 2px 2px 2px 2px #ededed;
    .title{
      height: 40px;
      width: 100%;
      line-height: 40px;
      display:flex;
      font-size: 16px;
      div{
        flex: 1;
        text-align: center;
        border-bottom: 1px solid #f4f4f4;
        cursor: pointer;
        &.curren{
          color: @bg;
        }
      }

    }
    .rangContent{
      width: 100%;
      height: 100%;


    }
  }


</style>
