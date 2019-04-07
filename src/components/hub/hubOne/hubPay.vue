<template>
    <div class="hubPayC" v-if="flag">
      <div class="address">
          <div class="title">选择地址:</div>
          <div class="select">
            <ul class="clearfix">
              <li v-for="(item,index) in address" :key="index" @click="addressClick(item,index)" :class="addressIndex == index ? 'add_cur':''">
                <div class="info_h">
                  <span>{{item.city}}</span>
                  <span>{{item.name}}（收）</span>
                </div>
                <div class="info_d">
                  {{item.address}}
                </div>
                <div class="info_d">
                  电话：{{item.mobile}} 
                </div>
              </li>
            </ul>
          </div>
        <div class="youhui" v-if="coupon !=''">
          <ul class="clearfix">
            <li v-for="(item,index) in coupon" :key="index" @click="couponClick(item,index)" :class="couponIndex == index ? 'add_cur':''" v-if="item.status === 'normal'">
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
        <div class="paySubmint" v-if="addName !='' && adds != '' && moneys !=''">
          <div class="header_p">
            <InputNumber class="input" :max="10" :min="1" :step="1" v-model="goodsNums"></InputNumber>
            <div>实付款：<span>{{moneys}}元</span></div>
            <div>收件人：<span>{{addName}}</span></div>
            <div>收件地址：<span>{{adds}}</span></div>
          </div>
          <div class="btn" @click="sub">提交订单</div>
        </div>
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
              addressIndex:-2,
              address:'',
              couponIndex:-2,
              coupon:'',
              moneys:'',
              addName:'',
              adds:'',
              addsId:'',
              goodsNums:1,
              addCoupon:{
                address:{},
                coupon:{}
              },
            };
        },
        created() {
          
        },
        watch:{
          flag(e){
            console.log(e)
            if(e == true){
              this.moneys = this.gohubDetailDatas.Totalmoney;
              // 选择收货地址和优惠券
              this.$get('/index.php/hy/user/address_coupon',{
                  "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
              })
              .then((response) => {
                console.log(response)
                // 地址
                this.address = response.data.address;
                // 优惠券
                this.coupon = response.data.coupon;
              })
            }
          }
        },
        mounted() {

        },
        methods: {
          // 选择地址
          addressClick(data,index){
            this.addressIndex = index;
            this.addName = data.name;
            this.adds = data.address;
            this.addsId=data.id;
            this.addCoupon.address = data;
          },
          // 选择优惠券a
          couponClick(data,index){
            if(this.couponIndex == index){
              this.addCoupon.coupon = {};
              this.moneys = this.gohubDetailDatas.Totalmoney;
              this.couponIndex = '-2';
              return;
            }
            this.couponIndex = index;
            this.moneys = this.gohubDetailDatas.Totalmoney - data.money;
            this.addCoupon.coupon = data;
          },
          show(){
            this.flag=true;
          },
          sub(){
            this.$emit('showPayT',"1",this.addCoupon,this.moneys,this.addsId,this.goodsNums)
          }
        },
        components: {}
    };
</script>
<style>
.ivu-input-number-input-wrap{
  height: 40px;
}
.ivu-input-number-input-wrap .ivu-input-number-input{
  height: 40px;
  line-height: 40px;
}
.ivu-input-number-handler{
  height: 20px;
}
.ivu-input-number-handler-down-inner, .ivu-input-number-handler-up-inner{
  top: 4px;
}
</style>

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
        height: 40%;
        overflow: auto;
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
            background: #d9d9d9;
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
          .ivu-input-number{
            width: 150px;
            height: 40px;
            display: block;
            
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
