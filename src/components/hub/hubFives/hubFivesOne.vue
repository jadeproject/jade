<template>
  <div class="info" v-if="flag">
    <div class="info_T">
      <div class="info_img">
        <img :src="loginData.avatar" :onerror="imgURL" alt="">
        <div>{{loginData.username}}</div>
      </div>
      <div class="info_Balance">
        <div>账户余额：{{infoData.user.money}}</div>
        <div @click="handleRender">提现</div>
      </div>
      <div class="info_deposit">
        <div>押金余额：{{infoData.user.deposit==null?'0':infoData.user.deposit}}</div>
        <!--<div>充值</div>-->
      </div>
      <div class="info_coupon">
        <div>优惠券：{{infoData.user.coupon_count==null?'0':infoData.user.coupon_count}}</div>
        <div @click="cup_cli">赠送优惠券</div>
        <div class="ercode" v-if="erFlag">
          <img :src="`http://askxubing.cn/index.php/hy/user/f_coupon?uid=${loginData.id}&sign=123456`" alt="">
        </div>
      </div>
    </div>
    <div class="pay_txt" @click="gopay()">0元租1元得 <span class="iconfont">&#xe65e;</span></div>
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
          <div>{{item.desc}}</div>
        </div>
      </div>
    </div>


    <hub-pay-t ref="showPay_flag" :gohubDetailDatas="gohubDetailData"></hub-pay-t>
  </div>
</template>

<script type="text/ecmascript-6">
  import hubPayT from './hubPayT'

  export default {
    data() {
      return {
        flag: false,
        // 默认图片
        imgURL: 'this.src="' + require('../../../assets/img/m_avatar.png') + '"',
        loginData: {},
        infoData: {},
        erFlag: false,
        gohubDetailData: {},
        value: ''
      };
    },
    created() {

    },
    mounted() {
      this.loginData = JSON.parse(window.localStorage.getItem("loginData"));
      this.$get('/index.php/hy/user/my_asset', {
        "uid": JSON.parse(window.localStorage.getItem("loginData")).id

      }).then((responese) => {
        this.flag = true;
        this.infoData = responese.data;
      })

    },
    methods: {
      // 赠送优惠券
      cup_cli() {
        this.erFlag = !this.erFlag;
        this.$get('/index.php/hy/user/f_coupon', {
          "uid": JSON.parse(window.localStorage.getItem("loginData")).id
        }).then((response) => {
          response.data
        })
      },
      gopay(data) {
        // 是否参与过0元活动
        this.$get('/index.php/hy/user/is_one', {
          "uid": JSON.parse(window.localStorage.getItem("loginData")).id
        }).then((response) => {
          if (response.code == 200) {
            this.$refs.showPay_flag.show();
            this.gohubDetailData.uid = JSON.parse(window.localStorage.getItem("loginData")).id;
          } else {
            this.$Message.info(response.msg);
          }
        })
      },
      handleRender() {
        this.$Modal.confirm({
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入体现金额，体现金额必须大于>0.1'
              },
              on: {
                input: (val) => {
                  this.value = val;
                }
              }
            })
          },
          onOk: ()=> {
            if (this.value==''){
              this.$Message.info('请输入体现金额');
            }else {
              // 体现接口
              this.$get('/index.php/hy/user/user_tixian',{
                "uid": JSON.parse(window.localStorage.getItem("loginData")).id,
                "num":this.value
              }).then((response)=>{
                if(response.code==200){
                  this.$Message.info('体现成功');
                }
              })
            }

          }
        })
        // alert(111);
      }
    }
    ,
    components: {
      hubPayT
    }
  }
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";

  .info {
    width: 100%;
    height: 100%;
    position: relative;

    .info_T {
      padding: 10px;
      background-color: #f4f4f4;
      display: flex;

      .info_img {
        width: 15%;
        padding-left: 20px;

        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }

        div {
          font-size: 14px;
          margin-top: 15px;
        }
      }

      .info_Balance, .info_deposit, .info_coupon {
        flex: 1;
        text-align: center;
        font-size: 16px;
        position: relative;
        cursor: pointer;

        div:nth-child(1) {
          font-weight: 700;
        }

        div:nth-child(2) {
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

        .ercode {
          height: 200px;
          width: 200px;
          position: absolute;
          left: 50%;
          margin-left: -100px;
          top: 90px;

          img {
            height: 100%;
            width: 100%;
          }
        }
      }

      .info_deposit, .info_coupon {
        div:nth-child(2) {
          background-color: @bg;
        }
      }
    }

    .pay_txt {
      font-size: 18px;
      color: #fff;
      background-color: #5fcdc7;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      text-align: right;
      border-top: 1px solid #fff;

      .iconfont {
        font-size: 20px;
      }
    }

    .infoC {
      height: 80%;
      width: 100%;
      overflow: hidden;

      .T, .C {
        display: flex;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f4f4f4;
        background-color: #fff;

        div {
          text-align: center;
          flex: 1;
          font-size: 14px;

          .in {
            color: green;
          }

          .out {
            color: red;
          }
        }

        div:last-child {
          /*width: 40%;*/
          font-size: 12px;
          line-height: 20px;
          padding-right: 5px;

        }

        .dec {
          line-height: 40px !important;
        }
      }

      .cT {
        /*width: 100%;*/
        height: 85%;
        overflow-y: auto;
        padding-bottom: 30px;

      }

      .C {
        border: none;
      }
    }
  }

</style>
