<template>
  <div class="hubPayC" v-show="flag" @click="hide() ">
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

</template>

<script type="text/ecmascript-6">
var QRCode = require('qrcode')
  export default {
    props:{
      gohubDetailDatas:{},
    },
    data() {
      return {
        flag:false,
        gohubDetailData:'', //商品信息
        moneys:'1',  //付款金额
        weixinpayImg:'',  //微信付款二维码
        host: "http://"+window.location.host,
        alipayImg:'', //阿里付款二维码
        deviceStatus:true,  //打开的设备，true = pc端，false = 移动端
      };
    },
    created() {

    },
    watch:{
      flag(e){
        console.log(this.gohubDetailDatas )
        if(e == true){
          this.gohubDetailData = this.gohubDetailDatas;
          this.weixinpayImg = this.host + "/index.php/hy/wechat/pc_weixin_one?uid="+this.gohubDetailData.uid+"&sign=" + "123456";
          let weixinpaycanvas = document.getElementById('weixinpaycanvas')
          this.alipayImg = this.host + "/index.php/hy/alipay/wap_alipay_one?uid="+this.gohubDetailData.uid+"&sign=" + "123456";
          console.log(this.alipayImg)
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
            this.deviceStatus = false;
          } else {
            // PC端打开
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
      hide(){
        this.flag=false;
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
    background-color: rgba(0,0,0,0.3);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
  }
  @media \0screen\,screen\9 {/* 只支持IE6、7、8 */
    .hubPayC{
      background-color:#000000;
      filter:Alpha(opacity=50);
      position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
      *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
    }
  }
  .hubPayC{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    color: #fff;
    .ecode{
      padding: 20px;
      margin-top: 50px;
      text-align: center;
      line-height: 30px;
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
            height: 182px;
            width: 182px;
            display: inline-block;
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


</style>
