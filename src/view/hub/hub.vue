<template>
  <div class="hubC">
    <div class="list" :style="{height:hubCheight+'px'}">
      <div class="left" :style="{height:hubCheight+'px'}">
        <div v-for="(item,index) in list" :key="item.type" :class="{'current':currentIndex===index}" @click="select_Item(index)">
          {{item.val}}
        </div>
      </div>
      <div class="right">
        <div class="content_R">
          <!--玉石中心-->
          <hub-one v-if="type==0"></hub-one>
          <hub-two v-if="type==1"></hub-two>
          <hub-three v-if="type==2"></hub-three>
          <hub-four v-if="type==30"></hub-four>
          <hub-fives v-if="type==4"></hub-fives>
          <hub-six v-if="type==5"></hub-six>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import HubOne from '@/components/hub/hubOne/hubOne'
  import HubTwo from '@/components/hub/hubTwo/hubTwo'
  import HubThree from '@/components/hub/hubThree/hubThree'
  import HubFour from '@/components/hub/hubFour/hubFour'
  import HubFives from '@/components/hub/hubFives/hubFives'
  import HubSix  from '@/components/hub/hubSix/hubSix'
  export default {
    data() {
      return {
        list:[
          {
            val:'玉石中心',
            type:'1'
          },
          {
            val:'订单中心',
            type:'2'
          }, {
            val:'活动中心',
            type:'3'
          }, {
            val:'邀请中心',
            type:'40'
          },
          {
            val:'账户中心',
            type:'5'
          },
          {
            val:'抽奖栏目',
            type:'6'
          },
        ],
        tt:0,
        type:0,
        hubCheight:document.documentElement.clientHeight-80, // 屏幕尺寸
        typeStatus:this.$GQ("type"),
      };
    },
    computed:{
      // 默认显示
      currentIndex() {
        return this.tt;
      }
    },
    watch:{
      type(e){
        console.log(e)
      }
    },
    created() {

    },
    mounted() {
      this.tt=Number(this.$GQ("type"));
      this.type=Number(this.$GQ("type"));
      console.log(this.$GQ("type"));
    },
    methods: {
      select_Item(index){
        // 去邀请页面
        if(index==3){
          this.$router.push('./invite')
        }else{
          this.tt=index;
          this.type=index;
          this.$router.push({
            path:'./hub',
            query:{
              type:index
            }
          })
        }
      }
    },
    components: {
      HubOne,
      HubTwo,
      HubThree,
      HubFour,
      HubFives,
      HubSix
    }
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../assets/css/config";
  .hubC{
    // margin-top: 80px;
    // padding: 0 100px;
    height: 80%;
    width: 100%;
    padding-top: 80px;
    .list{
      overflow: hidden;
      width: 1000px;
      margin: 0 auto;
      // position:fixed;
      // padding: 0 100px;
      // top:80px;
      // bottom:0;
      // left:0;
      // right:0;
      // z-index: -1;
      .left{
        width: 20%;
        height: 100%;
        float: left;
        overflow: auto;
        border-right: 1px solid #f4f4f4;
        border-left: 1px solid #f4f4f4;
        div{
          text-align: center;
          line-height: 80px;
          cursor: pointer;
          &.current{
            background-color: @bg;
            color: #fff;
          }
        }
      }
      .right{
        background-color: #f4f4f4;
        // margin-left: 20px;
        height: 100%;
        float: left;
        overflow: hidden;
        width: 80%;
        padding: 20px;
        box-sizing: border-box;
        .content_R{
          height: 100%;
          overflow: hidden;
          background: #fff;
        }
      }
    }

  }

</style>
