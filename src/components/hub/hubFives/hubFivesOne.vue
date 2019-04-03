<template>
  <div class="info">
    <div class="info_T">
      <div class="info_img">
        <img :src="loginData.avatar" :onerror="imgURL" alt="">
        <div>{{loginData.username}}</div>
      </div>
      <div class="info_Balance">
        <div>账户余额：{{infoData.user.money}}</div>
        <div>提现</div>
      </div>
      <div class="info_deposit">
        <div>押金余额：{{infoData.user.deposit==null?'0':infoData.user.deposit}}</div>
        <!--<div>充值</div>-->
      </div>
      <div class="info_coupon">
        <div>优惠券：{{infoData.user.coupon_count==null?'0':infoData.user.coupon_count}}</div>
        <div>赠送优惠券</div>
      </div>
    </div>
    <div class="infoC">
      <div class="T">
        <div>时间</div>
        <div>类型</div>
        <div>金额</div>
        <div class="dec">备注</div>
      </div>
      <div class="cT">
        <div class="C" v-for="item in infoData.asset">
          <div>{{item.time==null?'--':item.time}}</div>
          <div>
            <span class="in">{{item.title==null?'--':item.title}}</span>
            <!--<span class="out">体现金额</span>-->
          </div>
          <div>{{item.money}}元</div>
          <div>{{item.desc}} </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        // 默认图片
        imgURL:'this.src="' + require('../../../assets/img/m_avatar.png') + '"',
        loginData:{},
        infoData:{}

      };
    },
    created() {

    },
    mounted() {
      this.loginData=JSON.parse(window.localStorage.getItem("loginData"));
      this.$get('/index.php/hy/user/my_asset',{
        "uid":JSON.parse(window.localStorage.getItem("loginData")).id

      }).then((responese)=>{
          this.infoData=responese.data;
        console.log(this.infoData);
      })

    },
    methods: {},
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .info{
    width: 100%;
    height: 100%;
    .info_T{
      padding: 10px;
      background-color: #f4f4f4;
      display: flex;
      .info_img{
        width: 15%;
        padding-left: 20px;

        img{
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
        div{
          font-size: 14px;
          margin-top: 15px;
        }
      }
      .info_Balance,.info_deposit,.info_coupon{
        flex: 1;
        text-align: center;
        font-size: 16px;
        position: relative;
        cursor: pointer;
        div:nth-child(1){
          font-weight: 700;
        }
        div:nth-child(2){
          padding: 10px;
          width: 50%;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          background-color: red;
          position: absolute;
          bottom: 5px;
          left: 50%;
          margin-left: -25%;
        }
      }
      .info_deposit,.info_coupon{
        div:nth-child(2){
          background-color: @bg;
        }
      }
    }
    .infoC{
      height: 80%;
      width: 100%;
      overflow: hidden;
      .T,.C{
        display: flex;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f4f4f4;
        background-color: #fff;
        div{
          text-align: center;
          flex: 1;
          font-size: 14px;
          .in{
            color: green;
          }
          .out{
            color: red;
          }
        }
        div:last-child{
          /*width: 40%;*/
          font-size: 12px;
          line-height: 20px;
          padding-right: 5px;

        }
        .dec{
          line-height: 40px !important;
        }
      }
      .cT{
        /*width: 100%;*/
        height: 85%;
        overflow-y: auto;

      }
      .C{
        border: none;
      }
    }
  }

</style>
