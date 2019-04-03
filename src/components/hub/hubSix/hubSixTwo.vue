<template>
  <div class="Past">
    <div class="Content">
      <div @click="gohubDetail(item)" v-for="item in videoData">
        <span>{{item.title}}</span>
        <span class="iconfont">&#xe62a;</span>
      </div>
    </div>
    <!--<div class="page">-->
      <!--<Page :current="2" :total="50" simple></Page>-->
    <!--</div>-->
    <hub-six-two-d  ref="showDetail" :OneData="OneData" :videoDataType="videoDataType"></hub-six-two-d>
  </div>
</template>

<script type="text/ecmascript-6">
  import hubSixTwoD from './hubSixTwoD'
  export default {
    data() {
      return {
        videoData:[
          {
            title:'千元日常往期视频',
            type:1
          },
          {
            title:'万元日常往期视频',
            type:2
          },
          {
            title:'千元尊享日常往期视频',
            type:3
          },
          {
            title:'万元尊享日常往期视频',
            type:4
          },
          {
            title:'0元得日常往期视频',
            type:5
          }
        ],
        // 获取头部的信息
        OneData:{},
        // 获取对应的视频数据
        videoDataType:[],
        pageLeng:'1'
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      // 点击到视频列表
      gohubDetail(item){
        this.OneData=item;
        this.$refs.showDetail.show();

        // 请求视频数据
        this.$get('/index.php/hy/user/last_moive',{
          "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
          "type":item.type,
          "page":this.pageLeng
        }).then((response)=>{
         this.videoDataType=response.data

        })
      }
    },
    components: {
      hubSixTwoD
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  .Past{
    height: 100%;
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
