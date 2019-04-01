<template>
  <div class="videoC" v-show="flag">
    <div class="videoList">
      <div class="title">千元尊享往期视频：</div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
      <div class="list">
        <div class="video_in">
          <video src="../../../assets/video/movie.mp4"  width="200" height="130" controls="controls">
          标题
          </video>
        </div>
        <div class="txt">
          第13168期 开奖回放，第13168期开奖回放，第13168期 开奖回放
        </div>
      </div>
    </div>
    <div class="page">
      <Page :current="2" :total="50" simple></Page>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        flag:false,
        gread:0
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
      width: 200px;
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
    bottom: 20px;
  }
}

</style>
