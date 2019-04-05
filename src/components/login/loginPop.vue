<template>
  <div v-if="flag">
    <div class="loginPop_bg" @click.stop="hiden($event)"></div>
    <div class="loginPop">
      <div class="info">
        <div class="logo_info">
          <div class="imgIcon"></div>
          <div class="info_dec">
            <div>爱上弘毅</div>
            <div>幸福从此结缘</div>
          </div>
        </div>

        <div class="inp" v-if="login_I">
          <input type="text" placeholder="请输入电话号码" v-model="phone">
        </div>
        <div class="inp" v-if="login_I">
          <input type="password" placeholder="请输入登陆密码" v-model="psw">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入昵称" v-model="reg_name">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="password" placeholder="请设置密码" v-model="reg_psw">
        </div>
        <div class="inp" v-if="reg_I">
          <span>+86</span>
          <input class="phone" type="text" placeholder="请输入手机号" v-model="reg_phone">
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入短信验证码" v-model="reg_yz">
          <button class='yz' @click="send" ref="btn_bg" :disabled="isDisable">
            <i v-if="sendMsgDisabled">{{time+'秒后获取'}}</i>
            <i v-if="!sendMsgDisabled">获取验证码</i>
          </button>
        </div>
        <div class="inp" v-if="reg_I">
          <input type="text" placeholder="请输入邀请人昵称" v-model='iv_name'>
        </div>
        <div class="reade" v-if="reg_I">
          <Checkbox :checked.sync="single" v-model='single'> 我已经阅读相关服务条款和隐私政策</Checkbox>
        </div>
        <div class="login_btn" @click="login_btn">
          {{btn_text}}
        </div>
        <div class="dec_btn" v-if="login_I">
          <div>忘记密码</div>
          <div @click="regClick()">立即注册</div>
        </div>


      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reloadOne} from "../../../common/GetJS";
  export default {
    data() {
      return {
        login_I: false,
        reg_I: true,
        single: false,
        flag: false,
        btn_text: '登陆',
        loginR: {
          key: 1
        },
        regR: {
          key: 2
        },
        // 登陆手机验证
        phone: '',
        // 登陆密码
        psw: '',
        // 注册姓名
        reg_name: '',
        // 注册密码
        reg_psw: '',
        // 注册手机
        reg_phone: '',
        // 注册验证码
        reg_yz: '',
        // 邀请人姓名
        iv_name: '',
        // 发送验证码
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
        isDisable: false
      };
    },
    created() {

    },
    mounted() {



    },
    methods: {
      showlogin() {
        this.login_I = true;
        this.reg_I = false;
        this.flag = true;
        this.btn_text = "登陆"
      },
      showreg() {
        this.login_I = false;
        this.reg_I = true;
        this.flag = true;
        this.btn_text = "注册"
      },
      regClick() {
        this.showreg();
      },
      // 显示登陆状态
      login_btn() {
        if (this.btn_text == "登陆") {
          if (this.phone == '') {
            this.$Message.info("手机号码不为空");
            return;
          } else if (!(/^1[3|5|7|8][0-9]\d{4,8}$/.test(this.phone))) {
            this.$Message.info("手机号码有误");
            return;
          } else if (this.psw == '') {
            this.$Message.info("请输入密码");
            return;
          } else {
            // 登陆接口
            this.$get('/index.php/hy/user/login',{
              "mobile":this.phone,
              "password":this.psw,
              "coupon":this.$GQ('coupon')
            }).then((response)=>{
              console.log(response)
              if(response.code == 200){
                // 将用户数据存放在缓存中
                window.localStorage.setItem("loginData",JSON.stringify(response.data));
                // 将用户数据存放在vuex中
                this.$store.state.loginData=JSON.parse(window.localStorage.getItem("loginData"));
                this.flag = false;
                this.$emit('showLoginR', this.loginR);
                // 刷新获取数据
                // this.$router.push('./')
                reloadOne();
              }else if(response.code == 108){
                alert("登录密码错误，请重新输入")
              }else{
                alert(response.msg)
              }
            })

          }
        } else if (this.btn_text == "注册") {
          if (this.reg_name == '') {
            this.$Message.info("请输入注册姓名")
          } else if (this.reg_psw == '') {
            this.$Message.info("请输入注册密码")
          } else if (this.reg_phone == '') {
            this.$Message.info("请输入手机号码")
          } else if (!(/^1[3|5|7|8][0-9]\d{4,8}$/.test(this.reg_phone))) {
            this.$Message.info("手机号码有误")
          } else if (this.reg_yz == '') {
            this.$Message.info("请输入验证码")
          } else if (this.single == false) {
            this.$Message.info("请阅读隐私条约")
          } else {
            // 注册接口
            this.$get('/index.php/hy/Register/reg', {
              "mobile": this.reg_phone,
              "username": this.reg_name,
              "password": this.reg_psw,
              "pid": this.iv_name,
              "code": this.reg_yz

            }).then((response) => {
              console.log(response.data);
              this.$Message.info("注册成功")
              this.showlogin();


            })

          }

        }

      },
      send() {
        if(!(/^1[3|5|7|8][0-9]\d{4,8}$/.test(this.reg_phone))){
          this.$Message.info("手机号码有误");
          return;
        }
        let me = this;
        me.sendMsgDisabled = true;
        me.isDisable = true;
        me.$refs.btn_bg.style.backgroundColor = "#a5acb1";
        let interval = window.setInterval(function () {
          if ((me.time--) <= 0) {
            me.$refs.btn_bg.style.backgroundColor = "#5fcdc7";
            me.time = 60;
            me.sendMsgDisabled = false;
            me.isDisable = false;
            window.clearInterval(interval);
          }
        }, 1000);
        this.$get("/index.php/hy/code/get_code",{
          "mobile":this.reg_phone
        }).then((response)=>{
          console.log(response.data);
        })
      },
      hiden(e) {
        this.flag = false;
      }
    },
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config.less";
  .loginPop_bg{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
  }
  @media \0screen\,screen\9 {/* 只支持IE6、7、8 */
    .loginPop_bg{
      background-color:#000000;
      filter:Alpha(opacity=50);
      position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
      *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
    }
  }
  .loginPop {
    padding: 20px 0;
    width: 600px;
    background-color: @mask;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1001;
    transform: translate(-50%,-50%);
    .info {
      padding: 0px 100px;

      .logo_info {
        margin-top: 20px;
        display: flex;

        .imgIcon {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background-color: #fff;
        }

        .info_dec {
          flex: 1;
          margin-left: 20px;
          margin-top: 10px;
          color: #fff;

          div:nth-child(1) {
            font-size: 18px;
          }

          div:nth-child(2) {
            font-size: 14px;
            margin-top: 10px;
          }
        }

      }

      .inp {
        height: 40px;
        width: 100%;
        margin-top: 25px;
        background-color: #b0b2b3;
        border-radius: 20px;
        padding-left: 40px;
        position: relative;

        input {
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #b0b2b3;
          border: none;
          outline: none;
          font-size: 16px;
          color: #fff;
          background: none;
        }

        span {
          position: absolute;
          left: 10px;
          top: 50%;
          border-right: 1px solid #fff;
          padding-right: 5px;
          transform: translateY(-50%);
          color: @bg;
        }

        .phone {
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

        .yz {
          position: absolute;
          right: 0;
          top: 0;
          background-color: @bg;
          height: 40px;
          border-radius: 0 20px 20px 0;
          font-size: 16px;
          padding-right: 10px;
          padding-left: 10px;
          line-height: 40px;
          color: #fff;
          cursor: pointer;
          width: 150px;
          height: 100%;
          outline: none;
          text-align: center;
          border: none;

        }
      }

      .login_btn {
        margin-top: 20px;
        background-color: @bg;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 20px;
      }

      .reade {
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 22px;
      }

      .dec_btn {
        margin-top: 40px;
        display: flex;
        line-height: 40px;
        color: #fff;
        cursor: pointer;

        div {
          flex: 1;
          text-align: center;
        }
      }

    }

  }


</style>
