<template>
    <div class="loginC">
      <div class="noLogin" v-if="type==1">
         <div>
           <span class="iconfont">&#xe61f;</span>
           <span  class="name">登陆</span>
         </div>
         <div>
           <span class="iconfont">&#xe613;</span>
           <span class="name">注册</span>
         </div>
      </div>
      <div class="loginInfo">
        <div class="info">
          <span class="name">王小明</span>
        </div>

      </div>

    </div>

</template>

<script type="text/ecmascript-6">
   import imgurl from '../../assets/img/m_avatar.png'
    export default {
        data() {
            return {
              type:2,
              imgurl:'../../assets/img/m_avatar.png'
            };
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {}
    };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config";
  .loginC{
    width: 10%;
    padding:10px;
    background-color: #9e9fa1;
    z-index: 1;
    position: fixed;
    right: 0;
    top: 40px;
    .noLogin,.loginInfo{
      div{
        padding: 20px 0;
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
      .info{
        padding: 30px 0;
        .name{
          color: #fff;
          margin-left: 10px;
        }

      }


    }

  }


</style>
