<template>
  <div class="hubSixOne">
    <div class="typeQY">
      <img src="../../../assets/img/qy.png" alt="" class="iconbg">
      <img src="../../../assets/img/banner1.png" :onerror="imgUrl" alt="" class="bgI">
      <div class="info">

        <div class="title">千元尊享{{qyData.gear}}期</div>
        <div class="dec">{{qyData.status}}</div>
        <div class="dec"><span>{{qyData.num}}人</span></div>
        <div class="dec">
          <Progress :percent="qyData.jindu"></Progress>
        </div>
        <div class="dec">
          <button @click="gohubOne(type=0,tt=0)">立即参加</button>
        </div>
        <div class="share">分享到</div>
        <div class="icon">
          <span class="iconfont">&#xe6cd;</span>
          <span class="iconfont">&#xe626;</span>
          <span class="iconfont">&#xe678;</span>
          <span class="iconfont">&#xe606;</span>
        </div>

      </div>

    </div>
    <div class="typeQY">
      <img src="../../../assets/img/qy.png" alt="" class="iconbg">
      <img src="../../../assets/img/banner1.png" :onerror="imgUrl" alt="" class="bgI">
      <div class="info">

        <div class="title">万元尊享{{wyData.gear}}期</div>
        <div class="dec">{{wyData.status}}</div>
        <div class="dec"><span>{{wyData.num}}人</span></div>
        <div class="dec">
          <Progress :percent="wyData.jindu"></Progress>
        </div>
        <div class="dec">
          <button @click="gohubOne(type=0,tt=1)">立即参加</button>
        </div>
        <div class="share">分享到</div>
        <div class="icon">
          <span class="iconfont">&#xe6cd;</span>
          <span class="iconfont">&#xe626;</span>
          <span class="iconfont">&#xe678;</span>
          <span class="iconfont">&#xe606;</span>
        </div>

      </div>

    </div>
    <!--<div class="typeQY">-->
      <!--<img src="../../../assets/img/qy.png" alt="" class="iconbg">-->
      <!--<img src="../../../assets/img/banner1.png" :onerror="imgUrl" alt="" class="bgI">-->
      <!--<div class="info">-->

        <!--<div class="title">千元尊享01期</div>-->
        <!--<div class="dec">已参加</div>-->
        <!--<div class="dec"><span>123456人</span></div>-->
        <!--<div class="dec">-->
          <!--<Progress :percent="25"></Progress>-->
        <!--</div>-->
        <!--<div class="dec">-->
          <!--<button>立即参加</button>-->
        <!--</div>-->
        <!--<div class="share">分享到</div>-->
        <!--<div class="icon">-->
          <!--<span class="iconfont">&#xe6cd;</span>-->
          <!--<span class="iconfont">&#xe626;</span>-->
          <!--<span class="iconfont">&#xe678;</span>-->
          <!--<span class="iconfont">&#xe606;</span>-->
        <!--</div>-->

      <!--</div>-->

    <!--</div>-->
    <!--<div class="typeQY">-->
      <!--<img src="../../../assets/img/qy.png" alt="" class="iconbg">-->
      <!--<img src="../../../assets/img/banner1.png" :onerror="imgUrl" alt="" class="bgI">-->
      <!--<div class="info">-->

        <!--<div class="title">千元尊享01期</div>-->
        <!--<div class="dec">已参加</div>-->
        <!--<div class="dec"><span>123456人</span></div>-->
        <!--<div class="dec">-->
          <!--<Progress :percent="25"></Progress>-->
        <!--</div>-->
        <!--<div class="dec">-->
          <!--<button>立即参加</button>-->
        <!--</div>-->
        <!--<div class="share">分享到</div>-->
        <!--<div class="icon">-->
          <!--<span class="iconfont">&#xe6cd;</span>-->
          <!--<span class="iconfont">&#xe626;</span>-->
          <!--<span class="iconfont">&#xe678;</span>-->
          <!--<span class="iconfont">&#xe606;</span>-->
        <!--</div>-->

      <!--</div>-->

    <!--</div>-->
  </div>

</template>

<script type="text/ecmascript-6">
  import {reloadOne} from "../../../../common/GetJS";

  export default {
    data() {
      return {
        imgURL:'this.src="' + require('../../../assets/img/banner1.png') + '"',
        qyData:{},
        wyData:{}
      };
    },
    computed: {},
    created() {

    },
    mounted() {
      this.$get('/index.php/hy/user/draw_type',{
        "uid":JSON.parse(window.localStorage.getItem("loginData")).id
      }).then((responese)=>{
        this.qyData=responese.data.q_array;
        this.wyData=responese.data.w_array;

      })


    },
    methods: {
      gohubOne(type,tt){
        this.$router.push({
          path:'./hub',
          query:{
            type:type,
            tt:tt
          }
        })
        reloadOne();
      }
    },
    components: {}
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";

  .hubSixOne {
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 20px 100px;
    overflow: auto;

    .typeQY {
      border: 1px solid #f4f4f4;
      padding: 10px;
      display: flex;
      box-shadow: 2px 2px 2px 2px #f5f5f5;
      margin-bottom: 30px;
      position: relative;
      .iconbg{
        height: 93px;
        width: 100px;
        position: absolute;
        left: -8px;
        top: -4px;
      }


      .bgI{
        width: 50%;
        height: 170px;
      }

      .info {
        flex: 1;
        margin-left: 10px;

        .title {
          font-size: 18px;
          font-weight: 700;
        }

        .dec {
          font-size: 12px;
          margin-top: 10px;
          position: relative;

          span {
            font-size: 20px;
            color: @bg;
          }

          button {
            padding: 10px 15px;
            text-align: center;
            background-color: @bg;
            outline: none;
            border: none;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 0;
            margin-left: -30px;
            border-radius: 8px;
          }
        }

        .share {
          margin-top: 40px;
          font-size: 12px;
        }

        .icon {
          margin-top: 8px;
        }
      }
    }

  }


</style>
