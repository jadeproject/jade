<template>
    <div class="HobOne">
      <div class="info" v-if="hubone">
        <div class="rang">
          <div class="title">
             <div v-for="(item,index)  in title" :class="{'current':currentIndex===index}" @click="typeClick(item,index)">{{item.val}}</div>
          </div>
          <div class="content clearfix">
            <ul class="clearfix">
              <li v-for="(item,index) in goodslist" :key="index">
                <div class="info_jade">
                  <img :src="item.png" alt="">
                  <div class="foot">
                    <div class="left">
                      <span>1元/月</span>
                      <span>{{item.name}}</span>
                    </div>
                    <div class="right" @click="gohubDetail(item)">立即起租</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div >
      </div>
      <hub-detail ref="showDetail"  :gohubDetailDatas="gohubDetailData" @showPay="PayPage"></hub-detail>
      <hub-pay ref="showPay_flag" :gohubDetailDatas="gohubDetailData" @showPayT="payT"></hub-pay>
      <hub-pay-t ref="showPayT_flag" :gohubDetailDatas="gohubDetailData"  :addCoupons="addCoupon" :paydatas="paydata"></hub-pay-t>
      <hub-pay-ok ref="showPayOk_flag" ></hub-pay-ok>
    </div>

</template>

<script type="text/ecmascript-6">
    import hubDetail from './hubDetail'
    import hubPay from './hubPay'
    import hubPayT from  './hubPayT'
    import hubPayOk from  './hubPayOk'
    export default {
        data() {
            return {
              title:[
                {
                  val:'千元尊享',
                  type:'1'
                },
                {
                  val:'万元尊享',
                  type:'2'
                }
              ],
              tt:0,
              hubone:true,
              gread:0,
              goodslist:[], // 玉石中心
              gohubDetailData:'', // 商品信息
              addCoupon:'',// 收货地址和优惠券
              paydata:'', // 支付信息
            };
        },
      computed:{
        // 默认显示
        currentIndex() {
          return this.tt;
        }
      },
        created() {
          this.getgoods(1)
        },
        mounted() {
          // this.tt=Number(this.$GQ('tt'))
          // this.getgoods(this.tt+1);
          // 支付成功回调事件
          if(this.$GQ("pay") && this.$GQ("id") && this.$GQ("username")){
            this.$refs.showPayOk_flag.show();
          }
        },
        methods: {
          getgoods(status){
            // 玉石中心
            this.$get('/index.php/hy/user/jade_center',{
                "dang":status,
            })
            .then((response) => {
              console.log(response)
              this.goodslist = response.data;
              let that = this;
              // 首页跳转过来处理
              if(this.$GQ('goodsId')){
                that.tt = that.$GQ('indextt');
                let datas = '';
                that.goodslist.forEach(function(e){
                  if(e.id = that.$GQ('goodsId')){
                    datas = e;
                  }
                })
                that.gohubDetail(datas)
              }
            })
          },
          // tab切换
          typeClick(item,index){
            if(index == this.tt){return;}
            //  
            this.goodslist == '';
            this.tt=index;
            this.getgoods(index+1);
          },
          // 去商品详情
          gohubDetail(data){
            this.hubone = false;
            data.Totalmoney = this.tt == 0 ? "1000":"10000";
            this.gohubDetailData = data;
            this.$refs.showDetail.show();
          },
          // 选择地址和优惠券
          PayPage(i){
            if(i==1){
              this.$refs.showPay_flag.show();
            }
          },
          // 去付款
          payT(i,data,money){
            if(i==1){
              this.gohubDetailData.Totalmoney = money;
              this.addCoupon = data;
              this.$refs.showPayT_flag.show();
            }
          }
        },
        components: {
          hubDetail,
          hubPay,
          hubPayT,
          hubPayOk
        }
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .HobOne{
    height: 100%;
    width: 100%;
    /*z-index: -10;*/
    position: relative;
   .info{
     height: 100%;
     width: 100%;
     background-color: @bg;
     border-radius: 10px;
     padding: 20px;
     .rang{
       background-color: #fff;
       border-radius: 10px;
       height: 100%;
       width: 100%;
       overflow: hidden;
       padding-bottom: 10px;
       .title{
         display: flex;
         height: 40px;
         line-height: 40px;
         border-bottom: 1px solid #f4f4f4;
         cursor: pointer;

         div{
           flex: 1;
           text-align: center;
           &.current{
             color: @bg;
           }
         }
         div:nth-child(1){
           border-right: 1px solid #999;
         }
       }
       .content{
         padding-bottom: 20px;
         width: 100%;
         height: 92%;
         overflow: auto;
         ul li{
           margin-left: 20px;
           width: 21.5%;
           margin-top: 10px;
           float: left;
           .info_jade{
             height: 150px;
             width: 100%;
             background-color: #f4f4f4;
             position: relative;
             border-radius: 10px;
             img{
               text-align: center;
               width: 100%;
               height: 100%;
             }
             .foot{
               position: absolute;
               left: 0;
               bottom: 0;
               width: 100%;
               display:flex;
               font-size:12px;
               background-color: @mask;
               border-radius: 0 0 10px 10px;
               .left{
                 width: 60%;
                 text-align: center;

                 color: #fff;
                 span{
                   display: block;
                 }
                 span{
                   margin-top: 2px;
                 }
               }
               .right{
                 flex:1;
                 background-color:red;
                 text-align: center;
                 line-height: 30px;
                 border-radius: 0 0 10px 0;
                 color: #fff;
                 cursor: pointer;
               }
             }
           }
         }
       }
     }

   }
  }


</style>
