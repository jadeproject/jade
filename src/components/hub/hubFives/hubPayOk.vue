<template>
    <div class="hubPayC" v-if="flag">
      <div class="address">
        <div class="title">Hi,{{username}}</div>
        <div class="icon"><span class="iconfont">&#xe652;</span></div>
        <div class="pay_txt">支付成功</div>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              flag:false,
              username:this.$GQ('username')
            };
        },
        created() {
          
        },
        watch:{

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
      .icon{
        margin-top: 10%;
        color:#5fcdc7;
        text-align: center;
        padding:20px;
        .iconfont{
          font-size: 10rem;
        }
      }
      .pay_txt{
        text-align: center;
        font-size: 3rem;
        color:#5fcdc7;
      }
    }
  }
</style>
