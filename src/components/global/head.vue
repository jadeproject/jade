<template>
    <div class="headC">
      <div class="headC_key">
        <div class="left"></div>
        <div class="right">
          <div>首页</div>
          <div>关于我们</div>
          <div>产品介绍</div>
          <div>开奖公告</div>
          <div>常见问题</div>
          <div><span class="iconfont">&#xe602;</span></div>
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

<style type="text/css" lang="less">
  .headC{
    height: 20px;
    width: 100%;
    .headC_key{
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
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

        }
        div:last-child{
          font-size: 30px;
        }
      }
    }
  }


</style>
