<template>
  <div class="payOrder">
    <div class="title">
      所有抽奖
    </div>
    <div class="itemKey">
      <span>抽奖类别</span>
      <span>期数/日常期数</span>
      <span>开奖时间</span>
      <span>中奖编号</span>
      <span>抽奖状态</span>
      <span>我的编号</span>
      <span>参与/未参与</span>
    </div>
    <div class="rang_content" id="rang_cont" v-if="flag">
      <Collapse active-key="1" accordion  v-model="value1">
          <Panel> 
            <div class="itemC" @click="drawListClick('1')">
              <span>千元抽奖日常</span>
              <span>{{drawData.fa_luck_draw_q.gear}}/{{drawData.fa_luck_draw_q.gear_today}}</span>
              <span>{{timeData[0]}}</span>
              <span>{{drawData.fa_luck_draw_q.number}} <!-- <div>最新</div>  --></span>
              <span>{{drawData.fa_luck_draw_q.status}}</span>
              <span>{{drawData.fa_luck_draw_q.my_number}}</span>
              <span>{{drawData.fa_luck_draw_q.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC" v-for="(item,index) in drawDataList" :key="index">
                <span>千元抽奖日常</span>
                <span>{{item.gear}}/{{item.gear_today}}</span>
                <span>{{timeData[0]}}</span>
                <span>{{item.id}}</span>
                <span>{{item.status}}</span>
                <span>{{item.dang}}</span>
                <span>{{item.partake}}
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>

              <div class="page" v-if="AllPageStatus">
                <Page :current="current" :total="AllPages" simple @on-change="Page_cur"></Page>
              </div>
            </div>
          </Panel>

          <Panel> 
            <div class="itemC" @click="drawListClick('2')">
              <span>万元抽奖日常</span>
              <span>{{drawData.fa_luck_draw_q.gear}}/{{drawData.fa_luck_draw_q.gear_today}}</span>
              <span>{{timeData[1]}}</span>
              <span>{{drawData.fa_luck_draw_w.number}}</span>
              <span>{{drawData.fa_luck_draw_w.status}}</span>
              <span>{{drawData.fa_luck_draw_w.my_number}}</span>
              <span>{{drawData.fa_luck_draw_w.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC" v-for="(item,index) in drawDataList" :key="index">
                <span>万元抽奖日常</span>
                <span>{{item.gear}}/{{item.gear_today}}</span>
                <span>{{timeData[0]}}</span>
                <span>{{item.id}}</span>
                <span>{{item.status}}</span>
                <span>{{item.dang}}</span>
                <span>{{item.partake}}
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>
              <div class="page" v-if="AllPageStatus">
                <Page :current="current" :total="AllPages" simple @on-change="Page_cur"></Page>
              </div>
            </div>
          </Panel>

          <Panel> 
            <div class="itemC" @click="drawListClick('3')">
              <span>千元尊享大奖</span>
              <span>{{drawData.fa_luck_draw_vip_q.gear}}/</span>
              <span>{{timeData[2]}}</span>
              <span>{{drawData.fa_luck_draw_vip_q.uid}}</span>
              <span>{{drawData.fa_luck_draw_vip_q.status}}</span>
              <span>{{drawData.fa_luck_draw_vip_q.my_uid}}</span>
              <span>{{drawData.fa_luck_draw_vip_q.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC" v-for="(item,index) in drawDataList" :key="index">
                <span>千元尊享大奖</span>
                <span>{{item.gear}}/</span>
                <span>{{timeData[0]}}</span>
                <span>{{item.id}}</span>
                <span>{{item.status}}</span>
                <span>{{item.dang}}</span>
                <span>{{item.partake}}
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>
              <div class="page" v-if="AllPageStatus">
                <Page :current="current" :total="AllPages" simple @on-change="Page_cur"></Page>
              </div>
            </div>
          </Panel>

          <Panel> 
            <div class="itemC" @click="drawListClick('4')">
              <span>万元尊享大奖</span>
              <span>{{drawData.fa_luck_draw_vip_w.gear}}/</span>
              <span>{{timeData[3]}}</span>
              <span>{{drawData.fa_luck_draw_vip_w.uid}}</span>
              <span>{{drawData.fa_luck_draw_vip_w.status}}</span>
              <span>{{drawData.fa_luck_draw_vip_w.my_uid}}</span>
              <span>{{drawData.fa_luck_draw_vip_w.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC" v-for="(item,index) in drawDataList" :key="index">
                <span>万元尊享大奖</span>
                <span>{{item.gear}}/</span>
                <span>{{timeData[0]}}</span>
                <span>{{item.id}}</span>
                <span>{{item.status}}</span>
                <span>{{item.dang}}</span>
                <span>{{item.partake}}
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>
              <div class="page" v-if="AllPageStatus">
                <Page :current="current" :total="AllPages" simple @on-change="Page_cur"></Page>
              </div>
            </div>
          </Panel>

          <Panel> 
            <div class="itemC" @click="drawListClick('5')">
              <span>0元购1元得</span>
              <span>{{drawData.one.qs}}/</span>
              <span>{{timeData[4]}}</span>
              <span>{{drawData.one.uid}}</span>
              <span>{{drawData.one.status}}</span>
              <span>{{drawData.one.my_uid}}</span>
              <span>{{drawData.one.partake}}
                <!-- <span class="iconfont">&#xe65e;</span> -->
              </span>
            </div>
            <div slot="content">
              <div class="itemC" v-for="(item,index) in drawDataList" :key="index">
                <span>0元购1元得</span>
                <span>{{item.qs}}/</span>
                <span>{{timeData[0]}}</span>
                <span>{{item.id}}</span>
                <span>{{item.status}}</span>
                <span>{{item.dang}}</span>
                <span>{{item.partake}}
                  <!-- <span class="iconfont">&#xe65e;</span> -->
                </span>
              </div>
              <div class="page" v-if="AllPageStatus">
                <Page :current="current" :total="AllPages" simple @on-change="Page_cur"></Page>
              </div>
            </div>
          </Panel>
      </Collapse>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        flag:false,
        drawData:'',
        drawDataList:'',
        timeData:'',
        indexs:'',
        value1:'',
        current:1,
        AllPages:10,
        AllPageStatus:true
      };
    },
    created() {
      let that = this;
      // 获取用户所有抽奖
      this.$get('/index.php/hy/user/my_draw',{
        // "uid":JSON.parse(window.localStorage.getItem("loginData")).id
          "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
      })
      .then((response) => {
        this.drawData = response.data;
        // 获取所有抽奖栏目开奖时间
        this.$get('/index.php/hy/user/show_draw',{
          // "uid":JSON.parse(window.localStorage.getItem("loginData")).id
            "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
        })
        .then((res) => {
          this.flag = true;
          this.timeData = res.data;
          // 首页开奖公告详情按钮进来处理
          if(that.$GQ("index")){
            that.value1 = that.$GQ("index");
            that.drawListClick(parseInt(that.value1)+1);
          }
        })
      })
    },
    mounted() {

    },
    methods: {
      drawListClick(e,page){
        if(this.indexs == e && page != "page"){
          return;
        }
        this.indexs = e;
        // 获取所有抽奖栏目五个栏目数据
        this.$get('/index.php/hy/user/my_draw_data',{
          // "uid":JSON.parse(window.localStorage.getItem("loginData")).id
            "uid":JSON.parse(window.localStorage.getItem("loginData")).id,
            "type":e,
            "page":this.current
        })
        .then((response) => {
          this.drawDataList = response.data;
          this.AllPageStatus = this.drawDataList.length == 0 ? false : true;
          this.AllPages = Number(response.data[0].AllPage + 0);
        })
      },
      Page_cur(e){
        // e = 页码数
        this.current = e;
        this.drawListClick(this.indexs,"page");
      }
    },
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
      font-size: 16px;
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
      text-align: right;
      padding: 10px 0;
      box-sizing: border-box;
    }
  }
</style>
