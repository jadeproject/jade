<template>
  <div class="hubPayC" v-if="flag">
    <div class="titleT">订单支付</div>
    <div class="address">
      <div class="title">Hi,小明</div>
      <div class="line_type">
        <div class="line">
          <div>1</div>
          <span>立即租</span>
        </div>
        <div class="line">
          <div>2</div>
          <span>签合同</span>
        </div>
        <div class="line2">
          <div>3</div>
          <span>付款</span>
        </div>
        <div class="line2">
          <div>4</div>
          <span>确认收货</span>
        </div>
      </div>
      <div class="ecode">
        <div>需要支付：<span>1000元</span></div>
        <div class="rang">
          <div class="l">
            <img src="../../../assets/img/m_avatar.png" alt="">
            <div>微信支付</div>
          </div>
          <div class="r">
            <img src="../../../assets/img/m_avatar.png" alt="">
            <div>支付宝支付</div>
          </div>
        </div>

      </div>

    </div>



  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        flag:false
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      show(){
        this.flag=true;
      }
    },
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .hubPayC{
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .titleT{
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
      background-color: @bg;
      color: #fff;
    }
    .address{
      padding:20px;
      height: 100%;
      width: 100%;
      position: relative;

      .title{
        font-size: 20px;
      }
      .line_type{
        margin-top: 40px;
        margin-left: 20%;
        .line,.line2{
          height: 4px;
          width: 100px;
          background-color: @bg;
          position: relative;
          display: inline-block;
          margin: 0;
          padding: 0;
          div{
            height: 20px;
            width: 20px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -10px;
            margin-top: -10px;
            color: #fff;
            background-color: @bg;
            text-align: center;
            line-height: 20px;

          }
          span{
            position: absolute;
            left: 40%;
            top: 50%;
            margin-left: -10px;
            margin-top: 20px;
            font-size: 14px;
          }
        }
        .line2{
          background-color: #999;
          div{
            color: #fff;
            background-color: #999;
          }
        }
      }
      .ecode{
        padding: 20px;
        border: 1px dashed #999;
        margin-top: 50px;
        div:nth-child(1){
          height: 40px;
          line-height: 40px;
          text-align: center;
          span{
            color: red;
          }
        }
        .rang{
          margin-top: 20px;
          display: flex;

          .l,.r{
            flex: 1;
            text-align: center;
            img{
              height: 100px;
              width: 100px;
              background-color: red;
            }
          }
          .l{
            height: 100%;
          }
          .r{
            div{
              margin-top: 20px;
            }
          }

        }
      }

    }
  }


</style>
