<template>
  <div class="hubPayC" v-show="flag">
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
        <div class="line">
          <div>3</div>
          <span>付款</span>
        </div>
        <div class="line2">
          <div>4</div>
          <span>确认收货</span>
        </div>
      </div>
      <div class="ecode">
        <div>需要支付：<span>{{moneys}}元</span></div>
        <div class="rang">
          <div v-if="deviceStatus == true" class="l">
            <img :src='weixinpayImg' alt="">
            <div>微信支付</div>
          </div>
          <div v-if="deviceStatus == true" class="r">
            <canvas id="alipaycanvas" width="186px" height="190px"></canvas>
            <div>支付宝支付</div>
          </div>
          <div  v-if="deviceStatus == false" class="zhifubao" @click="iphoneClick()">点击调用支付宝进行支付</div>
        </div>

      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
var QRCode = require('qrcode')
  export default {
    props:{
      gohubDetailDatas:{},
      addCoupons:{}
    },
    data() {
      return {
        flag:false,
        gohubDetailData:'', //商品信息
        addCoupon:'', //地址和优惠券
        moneys:'',  //付款金额
        weixinpayImg:'',  //微信付款二维码
        host:window.location.host,
        alipayImg:'', //阿里付款二维码
        deviceStatus:true,  //打开的设备，true = pc端，false = 移动端
      };
    },
    created() {

    },
    watch:{
      flag(e){
        if(e == true){
          this.gohubDetailData = this.gohubDetailDatas;
          this.addCoupon = this.addCoupons;
          this.moneys = this.gohubDetailData.Totalmoney;
          this.weixinpayImg = "/index.php/hy/wechat/pc_wechat_order?uid="+this.addCoupon.address.uid+"&d_id="+this.gohubDetailData.dang+"&j_id="+this.gohubDetailData.id + "&coupon="+(this.addCoupon.coupon.id != undefined? this.addCoupon.coupon.id : '' )+"&sign=" + "123456";
          //this.alipayImg = "http://askxubing.cn" + "/index.php/hy/alipay/pc_alipay_order?uid="+this.addCoupon.address.uid+"&d_id="+this.gohubDetailData.dang+"&j_id="+this.gohubDetailData.id + "&coupon="+(this.addCoupon.coupon.id != undefined? this.addCoupon.coupon.id : '' )+"&sign=" + "123456";
          // 获取支付宝支付二维码
          // this.$get('/index.php/hy/alipay/pc_alipay_order',{
          //     "uid":this.addCoupon.address.uid,
          //     "d_id":this.gohubDetailData.dang,
          //     "j_id":this.gohubDetailData.dang,
          //     "coupon":this.addCoupon.coupon.id != undefined ? this.addCoupon.coupon.id : ''
          // })
          // .then((response) => {
          //   console.log(response)
          //   const div = document.createElement('div')
          //   div.innerHTML = response //此处form就是后台返回接收到的数据
          //   document.body.appendChild(div)
          //   document.forms[0].submit()
          // })
          let weixinpaycanvas = document.getElementById('weixinpaycanvas')
          this.alipayImg = this.host + "/index.php/hy/Alipay/wap_alipay_order?uid="+this.addCoupon.address.uid+"&d_id="+this.gohubDetailData.dang+"&j_id="+this.gohubDetailData.id + "&coupon="+(this.addCoupon.coupon.id != undefined? this.addCoupon.coupon.id : '' )+"&sign=" + "123456";
          let alipaycanvas = document.getElementById('alipaycanvas')
          QRCode.toCanvas(alipaycanvas, this.alipayImg, (error) => {
            if (error) {
              console.log(error)
            } else {
              console.log('success')
            }
          })
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            // 移动端打开
            console.log("移动端打开")
            this.deviceStatus = false;
          } else {
            // PC端打开
            console.log("PC端打开")
            this.deviceStatus = true;
          }
        }
      }
    },
    mounted() {

    },
    methods: {
      show(){
        this.flag=true;
      },
      // 移动端支付宝支付
      iphoneClick(){
        window.location.href = this.alipayImg;
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
    overflow: auto;
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
          .zhifubao{
            flex: 1;
            padding: 0 30px;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            background: #f8f8f8;
            color:#5fcdc7;
            border-radius: 5px;
            font-size: 20px;
            border:1px solid #999;
            margin: 0 auto;
            cursor: pointer;
            &:active{
              background: #5fcdc7;
              color:#fff;
              border-color: #5fcdc7;
            }
          }
          .l,.r{
            width: 180px;
            height: 180px;
            flex: 1;
            text-align: center;
            img{
              height: 194px;
              width: 194px;
              display: inline-block;
              background-color: #f4f4f4;
            }
          }
          .l{
            height: 100%;
          }
          .r{
            div{
              margin-top: 20px;
            }
            #alipaycanvas{
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
          }

        }
      }

    }
  }


</style>
