<template>
    <div class="hubPayC" v-if="flag">
      <div class="address">
        <div class="title">Hi,{{username}}</div>
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
        <div class="youhui">
          <div class="tis">获得 {{coupon.nums}} 张优惠券</div>
          <ul class="clearfix">
            <li v-for="(item,index) in coupon.data" :key="index">
              <div class="moneys">
                <p>{{item.money}}元</p>
                <p>租赁可用</p>
              </div>
              <div class="rang"></div>
              <div class="dec">
                <div>优惠券</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bot_tis">优惠券可在租赁时使用，也可赠送好友</div>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          gohubDetailDatas:{}
        },
        data() {
            return {
              flag:false,
              coupon:'',
              username:this.$GQ('username')
            };
        },
        created() {
          
        },
        watch:{
          flag(e){
            if(e == true){
              // 租贡成功生成优惠券
              this.$get('/index.php/hy/user/how_coupon',{
                  "uid":this.$GQ('id'),
              })
              .then((response) => {
                console.log(response)
                // 优惠券
                this.coupon = response.data;
              })
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
      .line_type{
        margin-top: 40px;
        margin-left: 20%;
        margin-bottom: 50px;
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
      .bot_tis{
        font-size: 16px;
        color:#666;
        line-height: 40px;
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
          cursor: pointer;
          .info_h{
            font-size: 12px;
            line-height: 20px;
            overflow: hidden;
          }
          
          .info_d{
            line-height: 20px;
            font-size: 12px;
          }
        }
        .clearfix{
          overflow: auto;
          height: 122px;
          .add_cur{
            background: #5fcdc7;
            color:#fff;
            border-color:#5fcdc7;
          }
        }
      }
      .youhui{
        margin-top: 10px;
        width: 100%;
        padding: 10px;
        border: 1px dashed #999;
        overflow: auto;
        .tis{
          color:#5fcdc7;
          font-size: 20px;
          padding-bottom: 10px;
        }
        ul li{
          float: left;
          margin-left: 5%;
          height: 100px;
          width: 25%;
          border: 1px solid #fff;
          margin-bottom: 10px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
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
            height: 100%;
            text-align: center;
            border: 1px solid #d9d9d9;
            border-left-color: #5fcdc7;
            div{
              width: 20%;
              text-align: center;
              margin-left: 15px;
              margin-top: 20px;

            }
          }
        }
        .clearfix{
          .add_cur{
            .moneys{
              color:#fff;
              background: #5fcdc7;
            }
            border-color:#fff;
          }
          .moneys{
            width: 70%;
            float: left;
            background: #5fcdc7;
            color:#fff;
            text-align: right;
            padding: 20px 5px;
            box-sizing: border-box;
            p{
              line-height: 30px;
            }
          }
        }
      }
      .paySubmint{
        position: relative;
        // right: 0px;
        // bottom: 0px;
        margin-top: 20px;
        padding: 10px;
        background-color: @bg;
        .header_p{
          padding:10px 20px;
          box-sizing: border-box;
          background-color: #fff;
          div{
            margin-top: 10px;
            font-size: 16px;
            font-weight: 700;
            width: 70%;
            display: inline-block;
            span{
              font-weight: 400;
              margin-left: 10px;
            }
          }

        }
        .btn{
          width: 20%;
          height: 40px;
          border-radius: 20px;
          line-height: 40px;
          position: absolute;
          right:20px;
          top: 50%;
          margin-top: -20px;
          text-align: center;
          background-color: @bg;
          color: #fff;
          cursor: pointer;
        }

      }

    }
  }


</style>
