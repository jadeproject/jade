<template>
    <div class="headC">
      <div class="headC_key">
        <div class="left"></div>
        <div class="right">
          <div>
            <router-link to="/"> 首页</router-link>
          </div>
          <div v-if="type<0">
            关于我们
          </div>
          <div>产品介绍</div>
          <div>开奖公告</div>
          <div>常见问题</div>
          <div @click="longinShow()" class="icon"><span class="iconfont">&#xe602;</span></div>
        </div>
      </div>
      <login ref="loginT" @On_click="log_click"></login>
      <login-pop ref="log_Pop" @showLoginR="logR"></login-pop>

    </div>

</template>
<script type="text/ecmascript-6">
  import login from '@/components/login/login'
  import loginPop from '@/components/login/loginPop'
    export default {
        data() {
            return {
              showLogin:true
            };
        },
        created() {

        },
        mounted() {

        },
        methods: {
          // 控制右边切换
          longinShow(){
            if(this.showLogin==true){
              this.$refs.loginT.hiden();
              this.showLogin=false;
              this.$refs.log_Pop.hiden();
            }else {
              this.$refs.loginT.show();
              this.showLogin=true;
              this.$refs.log_Pop.hiden();
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
          },
          // 显示右边登陆状态
          logR(data){
            // 显示登陆状态1，2显示注册状态
            if(data.key==1){
              this.$refs.loginT.showLogin()
            }else if(data.key==2){
              this.$refs.loginT.showRg();
            }

          }

        },
        components: {
          login,
          loginPop
        }
    };
</script>

<style type="text/css" lang="less">
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
    z-index: 10;
    
    .headC_key{
      width: 100%;
      line-height: 80px;
      display: flex;
      cursor:pointer;
      .left{
        width: 30%;
        height: 100%;
      }
      .right{
        width: 70%;
        height: 100%;
        display: flex;
        div{
          flex: 1;
          text-align: center;

        }
      }
    }
  }


</style>
