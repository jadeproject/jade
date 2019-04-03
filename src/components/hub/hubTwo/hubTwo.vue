<template>
  <div class="payOrder">
    <div class="title">
      所有订单
    </div>
    <div class="itemKey">
      <span>订单号</span>
      <span>产品名称</span>
      <span>玉石名称</span>
      <span>押金/租金</span>
      <span>数量</span>
      <span>实付款</span>
      <span>租赁时间</span>
      <span>抽奖编号</span>
      <span>交易状态</span>
    </div>
    <div class="rang_content">
      <div class="itemC" v-for="item in order">
        <span>{{item.id}}</span>
        <span>{{item.dang}}</span>
        <span>{{item.jade_name}}</span>
        <span>{{item.money}}</span>
        <span>1件</span>
        <span>{{item.payment}}</span>
        <span>{{item.time}}</span>
        <span>{{item.number}}<i v-if="item.prize=='1'">中奖</i></span>
        <span>{{item.status}}</span>
      </div>


    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        order:[]
      };
    },
    created() {

    },
    mounted() {
      this.$get('/index.php/hy/user/my_order',{
        // "uid":JSON.parse(window.localStorage.getItem("loginData")).id
        "uid":'7'
      }).then((response)=>{
        this.order=response.data
      })

    },
    methods: {},
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .payOrder{
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title{
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: @bg;
      color: #fff;
    }
    .itemKey,.itemC{
      height: 40px;
      line-height: 40px;
      display: flex;
      border-bottom: 1px solid #f4f4f4;
      font-size: 18px;
      font-weight: 700;
      padding: 0 10px;
      span{
        flex: 1;
        text-align: center;
      }
      span:nth-child(7){

      }

    }
    .rang_content{
      height: 88%;
      width: 100%;
      overflow: auto;
      padding-bottom: 30px;
      background-color: #fff;
      .itemC{
        font-weight: 400;
        font-size: 10px;
        padding: 6px 0;
        line-height: 22px;
        span:nth-child(4),span:nth-child(5),span:nth-child(6),span:nth-child(8){
          color: @bg;
          i{
            background-color: red;
            padding: 3px;
            color: #fff;
            border-radius: 10px;
          }
        }

        span:nth-child(7){
          line-height: 10px;
          /*padding: 5px 0;*/
          font-size: 10px !important;
          width: 100px !important;
        }
        span:nth-child(4){
          line-height: 15px;
        }

      }
    }

  }


</style>
