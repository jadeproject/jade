<template>
  <div class="Past">
    <div class="Content">
      <div @click="gohubDetail()">
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
    <hub-six-two-d  ref="showDetail"></hub-six-two-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import hubSixTwoD from './hubSixTwoD'
  export default {
    data() {
      return {};
    },
    created() {

    },
    mounted() {

    },
    methods: {
      // 点击到视频列表
      gohubDetail(){
        this.$refs.showDetail.show();
      }
    },
    components: {
      hubSixTwoD
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  .Past{
    height: 90%;
    width: 100%;
    background-color: #fff;
    padding: 0 10%;
    position: relative;
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
