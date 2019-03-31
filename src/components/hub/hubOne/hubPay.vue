<template>
    <div class="hubPayC" v-if="flag">
      <div class="address">
          <div class="title">选择地址:</div>
          <div class="select">
            <ul class="clearfix">
              <li>
                <div class="info_h">
                  <span>广东省广州市</span>
                  <span>小明（收）</span>
                </div>
                <div class="info_d">
                  万林会万林国际中心
                </div>
                <div class="info_d">
                  电话：13480333098
                </div>

              </li>
              <li>
                <div class="info_h">
                  <span>广东省广州市</span>
                  <span>小明（收）</span>
                </div>
                <div class="info_d">
                  万林会万林国际中心
                </div>
                <div class="info_d">
                  电话：13480333098
                </div>
              </li>
              <li>
                <div class="info_h">
                  <span>广东省广州市</span>
                  <span>小明（收）</span>
                </div>
                <div class="info_d">
                  万林会万林国际中心
                </div>
                <div class="info_d">
                  电话：13480333098
                </div>

              </li>
              <li>
                <div class="info_h">
                  <span>广东省广州市</span>
                  <span>小明（收）</span>
                </div>
                <div class="info_d">
                  万林会万林国际中心
                </div>
                <div class="info_d">
                  电话：13480333098
                </div>
              </li>
              <!--<li>-->
                <!--<div class="info_h">-->
                  <!--<span>广东省广州市</span>-->
                  <!--<span>小明（收）</span>-->
                <!--</div>-->
                <!--<div class="info_d">-->
                  <!--万林会万林国际中心-->
                <!--</div>-->
                <!--<div class="info_d">-->
                  <!--电话：13480333098-->
                <!--</div>-->

              <!--</li>-->
            </ul>
          </div>
        <div class="youhui">
          <ul class="clearfix">
            <li>
              <img src="../../../assets/img/m_avatar.png" alt="">
              <div class="rang"></div>
              <div class="dec">
                <div>优惠券</div>
              </div>
            </li>
            <li>
              <img src="../../../assets/img/m_avatar.png" alt="">
              <div class="rang"></div>
              <div class="dec">
                <div>优惠券</div>
              </div>
            </li>
            <li>
              <img src="../../../assets/img/m_avatar.png" alt="">
              <div class="rang"></div>
              <div class="dec">
                <div>优惠券</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="paySubmint">
          <div class="header_p">
            <div>实付款：<span>998元</span></div>
            <div>收件人：<span>小明</span></div>
            <div>收件地址：<span>万林会万林国际中心</span></div>
          </div>
          <div class="btn" @click="sub">提交订单</div>

        </div>
      </div>



    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              flag:false,
              showPayT_data:{
                key:1
              }
            };
        },
        created() {

        },
        mounted() {

        },
        methods: {
          show(){
            this.flag=true;
          },
          sub(){
            this.$emit('showPayT',this.showPayT_data)
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
    padding: 20px;
    .address{
      height: 100%;
      width: 100%;
      position: relative;
      .title{
        font-size: 20px;
      }
      .select{
        margin-top: 10px;
        width: 100%;
        ul li{
          padding: 10px;
          width: 20%;
          border: 1px solid #999;
          float: left;
          margin-left: 4%;
          margin-bottom: 20px;
          .info_h{
            font-size: 12px;
            line-height: 20px;
            span:nth-child(1){
              float: left;
            }
            span:nth-child(2){
              float: right;
            }

          }
          .info_d{
            line-height: 20px;
            font-size: 12px;
          }
        }


      }
      .youhui{
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        border: 1px dashed #999;
        ul li{
          float: left;
          margin-left: 5%;
          height: 100px;
          width: 25%;
          border: 1px solid #999;
          margin-bottom: 10px;
          position: relative;
          img{
            width: 70%;
            height: 100%;
          }
          .rang{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            position: absolute;
            left: -25px;
            top: 50%;
            margin-top: -25px;
            background-color: #fff;
          }
          .dec{
            position: absolute;
            top: 0;
            right: 0;
            width: 30%;
            height: 100px;
            text-align: center;
            div{
              width: 20%;
              text-align: center;
              margin-left: 20px;
              margin-top: 20px;

            }
          }
        }
      }
      .paySubmint{
        position: absolute;
        right: 0px;
        bottom: 0px;
        padding: 10px;
        background-color: @bg;
        .header_p{
          padding: 5px;
          background-color: #fff;
          div{
            margin-top: 10px;
            font-size: 16px;
            font-weight: 700;
            span{
              font-weight: 400;
              margin-left: 10px;
            }
          }

        }
        .btn{
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: @bg;
          color: #fff;
          cursor: pointer;
        }

      }

    }
  }


</style>
