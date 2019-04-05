<template>
    <div class="headC">
      <div class="headC_key">
        <!-- <div class="left"></div> -->
        <div class="right">
          <div></div>
          <div @click="tabClick('0')">
            <router-link to="/"> 首页</router-link>
          </div>
          <div @click="tabClick('700')" v-if="hostStatus">
            关于我们
          </div>
          <div @click="tabClick('1430')" v-if="hostStatus">产品介绍</div>
          <div @click="tabClick('3810')" v-if="hostStatus">开奖公告</div>
          <div @click="tabClick('4700')" v-if="hostStatus">常见问题</div>
          <div v-if="hostStatus" @click="Invite()">
            邀请好友
          </div>
          <div v-if="hostStatus"></div>
        </div>
        <div @click="longinShow()" class="icon noselect"><span class="iconfont">&#xe602;</span></div>
      </div>
      <login ref="loginT" @On_click="log_click" @host_click="hostStatusClick" :loginData="loginData"></login>
      <login-pop ref="log_Pop" @showLoginR="logR"></login-pop>
    </div>

</template>
<script type="text/ecmascript-6">
  import login from '@/components/login/login'
  import loginPop from '@/components/login/loginPop'
    export default {
        data() {
            return {
              showLogin:false,
              type:null,
              loginData:{},
              hostStatus:true
            };
        },
        created() {
          console.log(JSON.parse(window.localStorage.getItem("loginData")));
          this.loginData=JSON.parse(window.localStorage.getItem("loginData"));
          if(this.loginData == null){
            this.$router.push({
              path:'./',
              query:{}
            })
          }
          this.hostStatusClick();
        },
        mounted() {

        },
        watch:{

        },
        methods: {
          hostStatusClick(e){
            if(this.$GQ("type")){
              console.log("不显示")
              this.hostStatus = false;
            }else{
              console.log("显示")
              this.hostStatus = true;
            }
          },
          // 控制右边切换
          longinShow(){
            // alert("111")
            // console.log(JSON.parse(window.localStorage.getItem("loginData")));
            // if (JSON.parse(window.localStorage.getItem("loginData"))==null){
            //   this.showLogin=false;
            // } 
            this.showLogin=!this.showLogin;
            if(this.showLogin){
              this.$refs.loginT.show();
              // this.$refs.log_Pop.hiden();
            }else {
              this.$refs.loginT.hiden();
              // this.$refs.log_Pop.show();
            }
          },
          // 点击登陆注册显示不同的窗体
          log_click(data){
           if(data.type=='login'){
             this.$refs.log_Pop.showlogin();
           }
           if(data.type=='reg'){
             this.$refs.log_Pop.showreg();
           }
           if(data=='showLogin'){
             this.showLogin=false;
           }
          },
          // 显示右边登陆状态
          logR(data){
            // 显示登陆状态1，2显示注册状态
            if(data.key==1){
              this.$refs.loginT.showLogin()
            }else if(data.key==2){
              this.$refs.loginT.showRg();
            }
          },
          // tab点击到指定位置
          tabClick(data){
            this.$refs.loginT.hiden();
            if(data == 0){
              this.hostStatus = true;
            }
            // console.log(data)
            let timer = null
            timer = setInterval(function () {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                document.documentElement.scrollTop = data;
                clearInterval(timer)
            }, 30)
          },
          // 邀请好友
          Invite(){
            this.flag=false;
            this.$router.push({
              path:'./invite',
              query:{
                type:"invite"
              }
            })
            this.hostStatusClick("invite")
          }
        },
        components: {
          login,
          loginPop
        }
    };
</script>

<style type="text/css" lang="less">
  .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Chrome/Safari/Opera */
      -khtml-user-select: none; /* Konqueror */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
      not supported by any browser */
  }
  .headC{
    /*height: 20px;*/
    height: 80px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #f4f4f4;
    box-shadow: 4px 2px 2px 2px #ededed;
    z-index: 11;
    
    .headC_key{
      width: 1000px;
      line-height: 80px;
      display: flex;
      cursor:pointer;
      position: relative;
      margin: 0 auto;
      // .left{
      //   width: 30%;
      //   height: 100%;
      // }
      .right{
        width: 100%;
        height: 100%;
        display: flex;
        color:#000;
        div{
          flex: 1;
          text-align: center;
          a{
            display: block;
          }
          a{
            color:#000;
          }
        }

      }
      .icon{
        position: absolute;
        right: 50px;
        top: 0%;
        font-weight: 700;
        .iconfont{
          font-size: 28px;
        }
      }
    }
  }


</style>
