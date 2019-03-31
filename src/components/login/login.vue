<template>
    <div class="loginC" v-if="flag">
      <div class="noLogin" v-if="type==1">
         <div @click="loginPonClick()">
           <span class="iconfont">&#xe61f;</span>
           <span  class="name">登陆</span>
         </div>
         <div @click="regPonClick()">
           <span class="iconfont">&#xe613;</span>
           <span class="name">注册</span>
         </div>
      </div>
      <div class="loginInfo" v-if="type==2">
        <div class="info">
          <img src="../../assets/img/m_avatar.png" alt="">
          <span class="name">王小明</span>
        </div>
        <div>
           <span class="iconfont">&#xe61f;</span>
           <span class="name">玉石中心</span>
        </div>
        <div>
          <span class="iconfont">&#xe652;</span>
          <span class="name">订单中心</span>
        </div>
        <div>
          <span class="iconfont">&#xe630;</span>
          <span class="name">活动中心</span>
        </div>
        <div>
          <span class="iconfont">&#xe655;</span>
          <span class="name">账户中心</span>
        </div>
        <div>
          <span class="iconfont">&#xe604;</span>
          <span class="name">邀请好友</span>
        </div>
        <div class="exit">
          退出登陆
        </div>

      </div>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              // 对应不同类型
              type:1,
              // 控制显示隐藏
              flag:false,
              loginkey:{
                type:'login'
              },
              regKey:{
                type:'reg'
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
          hiden(){
            this.flag=false;
          },
          loginPonClick(){
            this.$emit('On_click',this.loginkey)
          },
          regPonClick(){
            this.$emit('On_click',this.regKey)
          }
        },
        components: {}
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config";
  .loginC{
    width: 10%;
    background-color: #9e9fa1;
    z-index: 10000000000;
    position: fixed;
    right: 0;
    top: 40px;
    .noLogin,.loginInfo{
      div{
        padding: 25px 0;
        text-align: center;
        font-size: 14px;
        cursor:pointer;
        width: 100%;
        span:nth-child(1){
          color: @bg;
        }
        .name{
          color: #fff;
          margin-left: 10px;
        }

      }
      div{
        padding: 12px 0;
      }
      .info{
        padding:20px 0;
        .border-1px(#000);
        img{
          height: 30px;
          width: 30px;
          border-radius: 50%;
        }
        .name{
          color: #fff;
          margin-left: 10px;
        }


      }
      .exit{
        line-height: 30px;
        text-align: center;
        background-color: @bg;
        color: #fff;
      }


    }

  }


</style>
