<template>
    <div class="loginC">
      <div class="noLogin">
         <div>
           <span class="iconfont">&#xe61f;</span>
           <span>登陆</span>
         </div>
         <div>
           <span class="iconfont">&#xe613;</span>
           <span>注册</span>
         </div>
      </div>

    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {};
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
    .noLogin{
      div{
        padding: 20px 0;
        text-align: center;
        font-size: 14px;
        cursor:pointer;
        span:nth-child(1){
          color: @bg;
        }
        span:nth-child(2){
          color: #fff;
          margin-left: 10px;
        }
      }
    }

  }


</style>
