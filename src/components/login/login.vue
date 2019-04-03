<template>
    <div class="loginC_bg" v-if="flag" @click.stop="hiden()">
      <div class="loginC">
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
        <div class="loginInfo" v-if="type==2&&loginData!={}">
          <div class="info">
            <img :src="loginData.avatar" :onerror="imgURL" alt="">
            <span class="name">{{loginData.username}}</span>
          </div>
          <div @click="hubOnclick(key=0)">
            <span class="iconfont">&#xe61f;</span>
            <span class="name">玉石中心</span>
          </div>
          <div @click="hubOnclick(key=1)">
            <span class="iconfont">&#xe652;</span>
            <span class="name">订单中心</span>
          </div>
          <div @click="hubOnclick(key=2)">
            <span class="iconfont">&#xe630;</span>
            <span class="name">活动中心</span>
          </div>
          <div @click="hubOnclick(key=4)">
            <span class="iconfont">&#xe655;</span>
            <span class="name">账户中心</span>
          </div>
          <div @click="Invite()">
            <span class="iconfont">&#xe604;</span>
            <span class="name">邀请好友</span>
          </div>
          <div @click="hubOnclick(key=5)">
            <span class="iconfont">&#xe601;</span>
            <span class="name">抽奖栏目</span>
          </div>
          <div class="exit" @click="exitOnclik">
            退出登陆
          </div>

        </div>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">


  export default {
       props:{
         loginData:{
           type:Object
         }
       },
        data() {
            return {
              // 对应不同类型，1代表登陆注册，2代表登陆完成
              type:1,
              // 控制显示隐藏
              flag:false,
              loginkey:{
                type:'login'
              },
              regKey:{
                type:'reg'
              },
              // 登陆时的用户信息
              loginState:{},
              // 默认图片
              imgURL:'this.src="' + require('../../assets/img/m_avatar.png') + '"'

            };
        },
        computed:{


        },
        created() {


        },
        mounted() {

          if(JSON.parse(window.localStorage.getItem("loginData"))!=null){
            this.loginState=JSON.parse(window.localStorage.getItem("loginData"));
            this.type=2;
            this.flag=true;

          }

        },
        activated(){
          // if(JSON.parse(window.localStorage.getItem("loginData"))!=''){
          //   this.loginState=JSON.parse(window.localStorage.getItem("loginData"));
          //   this.type=2;
          //   this.flag=true;
          //   reloadOne();
          // }else {
          //   this.type=1;
          //   this.flag=false;
          // }


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
          },
          hubOnclick(key){
            this.flag=false;
            this.$router.push({
              path:'./hub',
              query:{
                type:key
              }
            })
            window.location.reload();
          },
          exitOnclik(){
            this.type=1;
            this.flag=true;
            // 清除缓存
            window.localStorage.removeItem('loginData');

          },
          // 登陆后弹对应的弹窗
          showLogin(){
            this.flag=true;
            this.type=2;
          },
          showRg(){
            this.flag=true;
            this.type=1;
          },
          Invite(){
            this.flag=false;
            this.$router.push({
              path:'./invite',
              query:{
              }
            })
          }
        },
        components: {}
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config";
  .loginC_bg{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.3);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
  }
  @media \0screen\,screen\9 {/* 只支持IE6、7、8 */
    .loginC_bg{
      background-color:#000000;
      filter:Alpha(opacity=50);
      position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
      *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
    }
  }
  .loginC{
    width: 1000px;
    z-index: 10;
    // position: fixed;
    // top: 80px;
    margin: 0 auto;
    overflow: hidden;
    .noLogin,.loginInfo{
      float: right;
      background-color: #9e9fa1;
      width: 250px;
      div{
        padding: 25px 20px;
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
        width: 100%;
        cursor: pointer;
      }
      .info{
        padding:20px 0;
        .border-1px(#000);
        width: 100%;
        line-height: 40px;
        text-align: left;
        img{
          height: 50px;
          width: 50px;
          border-radius: 50%;
          vertical-align: middle;
          margin-left: 10%;
        }
        .name{
          color: #fff;
          margin-left: 10px;
          margin-top: 20px;
          margin-left: 5%;
        }


      }
      .exit{
        line-height: 30px;
        text-align: center;
        background-color: @bg;
        color: #fff;
        width: 100%;
      }


    }
    .noLogin{
      padding: 20px 0;
    }

  }


</style>
