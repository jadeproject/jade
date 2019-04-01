<template>
    <div class="loginPop" v-if="flag">
      <div class="info">
        <div class="logo_info">
            <div class="imgIcon"></div>
            <div class="info_dec">
               <div>爱上弘毅</div>
               <div>幸福从此结缘</div>
            </div>
        </div>

        <div class="inp" v-if="login_I">
          <input type="text" placeholder="请输入电话号码">
        </div>
        <div class="inp" v-if="login_I">
          <input type="text" placeholder="请输入登陆密码">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入昵称">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请设置密码">
        </div>
        <div class="inp" v-if="reg_I">
          <span>+86</span>
          <input class="phone" type="text" placeholder="请输入手机号">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入短信验证码">
          <div class='yz'>发送短信验证码</div>
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入邀请人昵称">
        </div>
        <div class="reade" v-if="reg_I">
          <Checkbox :checked.sync="single"> 我已经阅读相关服务条款和隐私政策</Checkbox>
        </div>
        <div  class="login_btn" @click="login_btn">
          {{btn_text}}
        </div>
        <div class="dec_btn" v-if="login_I">
          <div>忘记密码</div>
          <div @click="regClick()">立即注册</div>
        </div>


      </div>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              login_I:false,
              reg_I:true,
              single:false,
              flag:false,
              btn_text:'登陆',
              loginR:{
                key:1
              },
              regR:{
                key:2
              }

            };
        },
        created() {

        },
        mounted() {

        },
        methods: {
          showlogin(){
            this.login_I=true;
            this.reg_I=false;
            this.flag=true;
            this.btn_text="登陆"
          },
          showreg(){
            this.login_I=false;
            this.reg_I=true;
            this.flag=true;
            this.btn_text="注册"
          },
          regClick(){
            this.showreg();
          },
          // 显示登陆状态
          login_btn(){
            if( this.btn_text=="登陆"){
              this.flag=false;
              this.$emit('showLoginR',this.loginR)
            }else if(this.btn_text=="注册"){
               this.showlogin();
            }

          },
          hiden(){
            this.flag=false;
          }
        },
        components: {}
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config.less";
  .loginPop{
    padding: 20px 0;
    width: 40%;
    background-color: @mask;
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    .info{
      padding: 0px 100px;
      .logo_info{
        margin-top: 20px;
        display: flex;
        .imgIcon{
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background-color:#fff;
        }
        .info_dec{
          flex: 1;
          margin-left: 20px;
          margin-top: 10px;
          color: #fff;
          div:nth-child(1){
           font-size: 18px;
          }
          div:nth-child(2){
            font-size: 14px;
            margin-top: 10px;
          }
        }

      }
      .inp{
        height: 40px;
        width: 100%;
        margin-top: 25px;
        background-color: #b0b2b3;
        border-radius: 20px;
        padding-left: 40px;
        position: relative;
        input{
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #b0b2b3;
          border: none;
          outline: none;
          font-size: 16px;
          color: #fff;
        }
        span{
          position: absolute;
          left: 10px;
          top: 50%;
          border-right: 1px solid #fff;
          padding-right: 5px;
          transform: translateY(-50%);
          color: @bg;
        }
        .phone{
          position: absolute;
          left: 60px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #b0b2b3;
          border: none;
          outline: none;
          font-size: 16px;
          color: #fff;
        }
        .yz{
          position: absolute;
          right: 0;
          top: 0;
          background-color: @bg;
          height: 40px;
          border-radius:0 20px 20px 0;
          font-size: 16px;
          padding-right: 10px;
          padding-left: 10px;
          line-height: 40px;
          color: #fff;
          cursor: pointer;
        }
      }
      .login_btn{
        margin-top: 20px;
        background-color:@bg;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 20px;
      }
      .reade{
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 22px;
      }
      .dec_btn{
        margin-top: 40px;
        display: flex;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
        div{
          flex: 1;
          text-align: center;
        }
      }

    }

  }


</style>
