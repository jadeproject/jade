<template>
  <div class="videoC" v-show="flag">
    <div class="videoList">
      <div class="title">{{OneData.title}}：</div>
      <div class="list" v-for="item in videoDataType">
        <div class="video_in">
          <video :src="`http://askxubing.cn/${item.movie}`"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第{{item.gear}}期 开奖回放
        </div>
      </div>
    </div>
    <div class="page">
      <Page :current="current" :total="videoDataType[0].AllPage" simple @on-change="Page_cur"></Page>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      OneData:{
        type:Object
      },
      videoDataType:{
        type: Array
      }
    },
    data() {
      return {
        flag:false,
        gread:0,
        current:1
      };
    },
    created() {

    },
    mounted() {
      
    },
    methods: {
      show(){
        this.flag=true;
      },
      Page_cur(){
        this.$emit('data',this.current)
        // 请求视频数据
        this.$get('/index.php/hy/user/last_moive',{
          "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
          "type":this.OneData.type,
          "page":this.current
        }).then((response)=>{
          this.videoDataType=response.data
        })
      }
    },
    components: {}
  };
</script>

<style type="text/css" lang="less">
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  not supported by any browser */
}
.videoC{
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  .videoList{
    width: 100%;
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;
    height: 83%;
    overflow: auto;
    .title{
      width: 100%;
      height: 40px;
      overflow: hidden;
      font-size: 20px;
      color:#000;
      font-weight: bold;
    }
    .list{
      width: 167px;
      height: 180px;
      background: #fff;
      display: inline-block;
      overflow: hidden;
      border-radius: 5px;
      -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
      -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
      box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
      border-collapse:separate !important;
      margin: 0 10px 15px 0;
      .video_in{
        width: 200px;
        height: 130px;
        background: black;
      }
      .txt{
        line-height: 22px;
        padding:5px 10px;
        box-sizing: border-box;
        color: #000;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .page{
    position: absolute;
    right: 0px;
    bottom: 50px;
  }
}

</style>
