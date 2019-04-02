<template>
    <div class="hubDetailC" v-if="flag">
      <div class="Dinfo">
        <div class="title">产品介绍</div>
        <div class="content">
          <div class="left">
            <div class="imgbig">
              <img :src="bigUrl" alt="">
            </div>
            <div class="img_rang">
              <div v-for="(item,index) in goodsDetail.avatar" :key="index" :class="{'cureen':cureendIndex==index}" @click="imgSelect(item,index)"><img :src="item" alt=""></div>
              <!--<div><img src="../../../assets/img/m_avatar.png" alt=""></div>-->
              <!--<div><img src="../../../assets/img/m_avatar.png" alt=""></div>-->
            </div>
          </div>
          <div class="right">
            <div class="title_h">{{goodsDetail.name}}</div>
            <div class="dec">寓意：{{goodsDetail.moral}}</div>
            <div class="dec">材料：{{goodsDetail.ms}}</div>
            <div class="dec">种类：{{goodsDetail.type}}</div>
            <div class="payType">
              支付类型:
              <div><span class="iconfont">&#xe678;</span></div>
              <div><span class="iconfont">&#xe603;</span></div>
            </div>
            <div class="pay_btn">
              <div>1元/月</div>
              <div>
                <button @click="btnClci(1)">立即租</button>
              </div>
            </div>
            <div class="line_type">
              <div class="line">
                <div>1</div>
                <span>立即租</span>
              </div>
              <div class="line2">
                <div>2</div>
                <span>签合同</span>
              </div>
              <div class="line2">
                <div>3</div>
                <span>付款</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <contract ref="contract_show" @gopay="btnClci"></contract>

    </div>

</template>

<script type="text/ecmascript-6">
  import contract from './contract'
    export default {
        props:{
          gohubDetailDatas:{}
        },
        data() {
            return {
              flag:false,
              gread:0,
              goodsDetail:'',
              tt:0,
              bigUrl:''
            };
        },
        created() {

        },
        watch:{
          gohubDetailDatas(e){
            this.goodsDetail = e;
            this.bigUrl=this.goodsDetail.avatar[0];
          }
        },
        computed:{
          cureendIndex(){
            return this.tt;
          }
        },
        mounted() {

        },
        methods: {
          show(){
            this.flag=true;
          },
          btnClci(status){
            console.log(status)
            if(status==1){
              this.$refs.contract_show.show();
            }else if(status==2){
              this.$emit('showPay','1')
            }

          },
          imgSelect(item,index){
            this.tt=index;
            this.bigUrl=item;
          },
          // gread(data){
          //   if(data.key==1){
          //     this.gread=data.key;
          //   }

          // }
        },
        components: {
          contract
        }
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .hubDetailC{
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .Dinfo{
      .title{
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: @bg;
        color: #fff;
      }
      .content{
        width: 100%;
        display:flex;
        .left{
          width:40%;
          height: 100%;
          padding: 20px 30px;
          .imgbig{
            width: 300px;
            height: 300px;
            background-color: #999;
            border-radius: 10px;
            img{
              height: 300px;
              width: 100%;
            }


          }
          .img_rang{
            margin-top: 10px;
            display: flex;
            div{
              flex: 1;
              margin-left: 10px;
              width: 20%;
              height: 80px;
              font-size:0;
              float:left;
              background-color: #999;
              &.cureen{
                border: 3px solid @bg;

              }
              img{
                width: 100%;
                height: 100%;
              }
            }
            div:first-child{
              margin-left: 0;
            }
          }
        }
        .right{
          flex: 1;
          .title_h{
            text-align: left;
            height: 60px;
            line-height: 60px;
          }
          .dec{
            line-height: 30px;
          }
          .payType{
            margin-top: 30px;
            div{
              height: 20px;
              width: 20px;
              background-color: #51e96f;
              display: inline-block;
              text-align: center;
              color:#fff;
            }
            div:last-child{
              background-color: blue;
            }

          }
          .pay_btn{
            display: flex;
            margin-top: 30px;
            div{
              flex: 1;
              button{
                border: none;
                outline: none;
                background-color:red;
                color: #fff;
                padding: 10px 10px;
                text-align: center;
                border-radius: 10px;
              }
            }
            div:first-child {
              text-align: center;
              line-height: 40px;
              font-weight: 700;
              font-size: 20px;
            }
          }
          .line_type{
            margin-top: 40px;
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
        }
      }

    }

  }


</style>
