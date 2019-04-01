<template>
  <div class="Past">
    <div class="Content">
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
      <div>
        <span>千元尊享往期视频</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
    </div>
    <div class="page">
      <Page :current="2" :total="50" simple></Page>
    </div>
  </div>
  <!--<hub-six-two-detail></hub-six-two-detail>-->


</template>

<script type="text/ecmascript-6">
  // import hubSixTwoDetail from './hubSixTwoDetail'
  export default {
    data() {
      return {};
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    components: {
      // hubSixTwoDetail
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  .Past{
    height: 90%;
    width: 100%;
    background-color: #fff;
    padding: 0 10%;
    .Content{
      width: 100%;
      height: 90%;
      overflow: auto;
      div{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f4f4f4;
        font-size: 14px;
        span:nth-child(1){
          float: left;
        }
        span:nth-child(2){
          float: right;
        }
      }

    }
    .page{
      position: absolute;
      right: 0px;
      bottom: 20px;
    }
  }


</style>
