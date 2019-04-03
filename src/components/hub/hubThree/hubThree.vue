<template>
  <div class="payOrder">
    <div class="title">
      活动中心
    </div>
    <div class="itemKey">
      <span>抽奖类别</span>
      <span>期号</span>
      <span>开奖时间</span>
      <span>中奖编号</span>
      <span>抽奖状态</span>
      <span>我的编号</span>
      <span>参与/未参与</span>
    </div>
    <div class="rang_content" id="rang_cont">
      <Collapse active-key="1" accordion>
          <Panel> 
            <div class="itemC">
              <span>千元抽奖日常</span>
              <span>{{drawData.fa_luck_draw_q.gear}}</span>
              <span>20:00:00</span>
              <span>{{drawData.fa_luck_draw_q.number}} <div>最新</div> </span>
              <span>{{drawData.fa_luck_draw_q.status}}</span>
              <span>{{drawData.fa_luck_draw_q.my_number}}</span>
              <span>{{drawData.fa_luck_draw_q.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC">
                <span>千元抽奖日常</span>
                <span>1</span>
                <span>20:00:00</span>
                <span>AW1234567 <div>最新</div> </span>
                <span>已中奖</span>
                <span>AW1324443</span>
                <span>已参加
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>
            </div>
          </Panel>
      </Collapse>
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
        drawData:'',
      };
    },
    created() {
      // 获取用户所有抽奖
      this.$get('/index.php/hy/user/my_draw',{
          "uid":"7",
      })
      .then((response) => {
        console.log(response)
        this.drawData = response.data;
      })
    },
    mounted() {

    },
    methods: {},
    components: {}
  };
</script>
<style>
#rang_cont .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header>i{
  position: absolute;
  right: 0;
  top: 10px;
}
#rang_cont .ivu-collapse{
  border: none;
}
#rang_cont .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
  padding: 0;
}
#rang_cont .ivu-collapse-content{
  padding: 0;
}
#rang_cont .ivu-collapse-header{
  position: relative;
}

</style>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .payOrder{
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    .title{
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: @bg;
      color: #fff;
    }
    .itemKey,.itemC{
      height: 40px;
      line-height: 40px;
      display: flex;
      font-size: 18px;
      font-weight: 700;
      span{
        flex: 1;
        text-align: center;
        position: relative;
        div{
          text-align: center;
          background-color: red;
          position: absolute;
          right: -10px;
          top: 10px;
          font-size: 12px;
          height: 20px;
          width: 30px;
          line-height: 20px;
          border-radius: 10px;
          color: #fff;
        }
        i{
          padding: 2px 4px;
          background-color: @bg;
          border-radius: 2px;
          color: #fff;
        }
      }
      span:nth-child(7){
        width: 30%;
      }

    }
    .rang_content{
      height: 79%;
      width: 100%;
      overflow: auto;
      .itemC{
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
      }
    }

    .dec{
      width: 14.28%;
    }
    .page{
      position: absolute;
      right: 0px;
      bottom: 20px;
    }


  }


</style>
