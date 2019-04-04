<template>
  <div class="safe">
    <div v-if="flag">
      <div class="title">修改密码</div>
      <div class="line_type">
        <div class="line">
          <div>1</div>
          <span>验证身份</span>
        </div>
        <div class="line2">
          <div>2</div>
          <span>修改登陆密码</span>
        </div>
        <div class="line2">
          <div>3</div>
          <span>完成修改</span>
        </div>
      </div>
      <div class="modify clearfix">
        <div class="l clearfix">
          <div>账户名:</div>
          <div>验证码:</div>
          <div>短信验证码:</div>
        </div>
        <div class="c clearfix">
          <div><input type="text" v-model="name"></div>
          <div><input type="text" v-model="yzm"></div>
          <div><input type="text" v-model="dxyz"></div>
          <div class="btnsub" @click="submint">提交</div>
        </div>
        <div class="r">
          <div></div>
          <div><img :src="`http://askxubing.cn/index.php?s=/captcha&r=${randNum}`" alt="" ><span @click="btnClick"  class="watch_look">看不清</span></div>
          <div>
            <button class='yz' @click="send" ref="btn_bg" :disabled="isDisable">
              <i v-if="sendMsgDisabled">{{time+'秒后获取'}}</i>
              <i v-if="!sendMsgDisabled">获取验证码</i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hub-fives-three-d ref="detail"></hub-fives-three-d>
  </div>

</template>

<script type="text/ecmascript-6">
  import hubFivesThreeD from './hubFivesThreeD'
  import {sum} from "../../../../common/GetJS";
  export default {
    data() {
      return {
        flag:true,
        name:'',
        yzm:'',
        dxyz:'',
        // 发送验证码
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
        isDisable: false,
        randNum:''

      };
    },
    created() {

    },
    mounted() {

      // 对接图形生成码
      // 生成随机数
      this.randNum=sum(1,100);
      this.showTx(this.randNum);

      console.log();


    },
    methods: {
      // 提交
      submint(){
        if(this.name==''){
          this.$Message.info('请输入姓名');
        }else if(this.yzm==''){
          this.$Message.info('请输入验证码');
        }else if(this.dxyz==''){
          this.$Message.info('请输入短信验证码');
        }else {
          this.$get('/index.php/hy/user/change_pwd_1',{
             "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
            "username":JSON.parse(window.localStorage.getItem("loginData")).username,
            "code":this.dxyz,
            "mobile":JSON.parse(window.localStorage.getItem("loginData")).mobile

          }).then((responese)=>{
            console.log(responese.data);
            this.flag=false;
            this.$refs.detail.show();
          })

        }

      },
      send() {
        // 短信
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
          "mobile":JSON.parse(window.localStorage.getItem("loginData")).mobile
        }).then((response)=>{
          console.log(response.data);
        })
      },
      btnClick(){
        this.randNum=sum(1,100);
        this.showTx(this.randNum);

      },
      // 获取图形验证码
      showTx(Num){
        this.$get('/index.php',{
          's':'/captcha',
          'r':Num
        }).then((responese)=>{
          console.log(responese.data);
        })
      }

    },

    components: {
      hubFivesThreeD
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .safe{
    padding: 20px;
    position: relative;
    height: 90%;
    width: 100%;
    .line_type{
      margin-top: 40px;
      width: 100%;
      height: 40px;
      margin-left: 10%;
      .line,.line2{
        height: 4px;
        width: 200px;
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
    .modify{
      margin-top: 50px;
      display: flex;
      height: 100%;
      width: 100%;
      .l{
        flex: 1;
        div{
          margin-top: 30px;
          text-align: right;
        }
      }
      .c{
        flex: 1;
        margin-left: 20px;
        div{
          margin-top: 25px;
          input{
            border-right: none;
            border-top: none;
            border-left: none;
            outline: none;
          }
        }
      }
      .r{
        flex: 1;
        div{
          margin-top: 50px;
          margin-left: 20px;
          font-size: 16px;
          img{
            height: 40px;
            width: 80px;
            vertical-align: middle;
            margin-right: 20px;
            .atch_look{
              padding-left: 20px;
            }

          }
          span{
            cursor: pointer;
          }
          button{
            height: 30px;
            padding: 5px 10px;
            background-color: @bg;
            color: #fff;
            border: none;
            outline: none;
            font-size: 16px;
            cursor: pointer;
            margin-top: 15px;
          }
        }
        div:nth-child(3){
          margin-top: 10px;
        }
      }

    }
    .btnsub{
      padding: 10px 30px;
      text-align: center;
      // position: absolute;
      // left: 50%;
      // bottom: 20px;
      /*margin-left: -50%;*/
      background-color: @bg;
      color: #fff;
      // margin-left: -30px;
    }

  }


</style>
