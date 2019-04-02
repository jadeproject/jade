<template>
    <div class="contract" v-if="flag">
      <div class="ct">
        <div class="title">爱上弘毅租赁合同</div>
        <div class="ctxt">
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合爱上弘毅租赁合同爱上弘毅租赁合同
          同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合
          同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
          爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同爱上弘毅租赁合同
        </div>
        <div class="dec">
          点击“同意”，就表示您同意上述以上内容 <span>"爱上弘毅用户协议"，关于爱上弘毅个人隐私</span>
        </div>
        <div class="btn">
          <div><button class="close" @click="close_btn">取消</button></div>
          <div><button class="gread" @click="gread_clk">同意</button></div>
        </div>

      </div>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              flag:false,
              greadkey:{
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
          close_btn(){
            this.flag=false;
          },
          gread_clk(){
            this.flag=false;
            this.$emit('gopay','2')
          }
        },
        components: {}
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .contract{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(7, 17, 27, 0.5);
    .ct{
      width: 50%;
      height: 100%;
      background-color: #fff;
      opacity: 1;
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -25%;
      .title{
        text-align: center;
        height: 40px;
        line-height: 40px;
      }
      .ctxt{
        padding: 0 10px;
        height: 70%;
        width: 100%;
        overflow: auto;
        font-size: 16px;
        line-height: 30px;
        text-indent: 2em;
      }
      .dec{
        margin-top: 10px;
        font-size: 16px;
        padding: 0px 10px;
        line-height: 20px;
        span{
          color: @bg;
        }
      }
      .btn{
        display: flex;
        margin-top: 40px;
        div{
          flex: 1;
          text-align: center;
          position: relative;
          height: 50px;

          button{
            cursor: pointer;
            outline: none;
            width: 80px;
            height: 40px;
            border: none;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -25%;
            margin-top: -25%;
            text-align: center;
            border-radius: 10px;
            font-size:16px;
            color: #fff;
          }
          .close{
            background-color: red;
          }
          .gread{
            background-color: @bg;
          }
        }
      }
    }
  }


</style>
