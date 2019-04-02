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
          <div><input type="text"></div>
          <div><input type="text"></div>
          <div><input type="text"></div>
        </div>
        <div class="r">
          <div></div>
          <div><img src="../../../assets/img/m_avatar.png" alt=""><span class="watch_look">看不清</span></div>
          <div><button class="btn">发送验证码</button></div>
        </div>
      </div>
      <div class="btnsub" @click="submint">提交</div>
    </div>


    <hub-fives-three-d ref="detail"></hub-fives-three-d>


  </div>

</template>

<script type="text/ecmascript-6">
  import hubFivesThreeD from './hubFivesThreeD'
  export default {
    data() {
      return {
        flag:true

      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      submint(){
        this.flag=false;
        this.$refs.detail.show();
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
          margin-top: 60px;
          font-size: 16px;
          img{
            height: 40px;
            width: 60px;
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
      position: absolute;
      left: 50%;
      bottom: 20px;
      /*margin-left: -50%;*/
      background-color: @bg;
      color: #fff;
      margin-left: -30px;
    }

  }


</style>
