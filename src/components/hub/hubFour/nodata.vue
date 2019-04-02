<template>
  <div class="nodata">
    <div class="icon">
      <span class="iconfont">&#xe601;</span>
    </div>
    <div class="tips">暂未开放，敬请期待</div>
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
  @import "../../../assets/css/config";
  .nodata{
    width: 200px;
    height: 150px;
    color:#999;
    margin: 40% auto;
    .icon{
      width: 100px;
      height: 100px;
      margin: 0 auto;
      text-align: center;
      line-height: 100px;
      .iconfont{
        font-size: 50px;
      }
    }
    .tips{
      text-align: center;
      font-size: 20px;
    }
  }
</style>
