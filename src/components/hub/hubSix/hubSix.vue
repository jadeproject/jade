<template>
  <div class="hubFives">
    <div class="title">
      <div v-for="(item,index) in peple_title" :class="{'curren':currenIndex==index}" @click="select(item,index)">{{item.val}}</div>
    </div>
    <div class="rangContent">
      <hub-six-one v-if="tt==0"></hub-six-one>
      <hub-six-two v-if="tt==1"></hub-six-two>
      <!--<hub-six-three v-if="tt==2"></hub-six-three>-->
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import hubSixOne from './hubSixOne'
  import hubSixTwo from './hubSixTwo'
  import hubSixThree from './hubSixThree'
  export default {
    data() {
      return {
        peple_title:[
          {
            val:'抽奖类型',
            type:1
          },
          {
            val:'往期视频',
            type:2
          },
          // {
          //   val:'抽奖公告',
          //   type:3
          // }
        ],
        tt:0
      };
    },
    computed:{
      currenIndex(){
        return this.tt
      }
    },
    created() {
      console.log(this.$GQ("indextt"))
      if(this.$GQ("indextt")){
        this.tt = this.$GQ("indextt");
      }  
    },
    mounted() {

    },
    methods: {
      select(item,index){
        this.tt=index;
      }

    },
    components: {
      hubSixOne,
      hubSixTwo,
      hubSixThree

    }
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .hubFives{
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    border: 1px solid #ededed;
    box-shadow: 2px 2px 2px 2px #ededed;
    .title{
      height: 40px;
      width: 100%;
      line-height: 40px;
      display:flex;
      font-size: 16px;
      div{
        flex: 1;
        text-align: center;
        border-bottom: 1px solid #f4f4f4;
        cursor: pointer;
        &.curren{
          color: @bg;
        }
      }

    }
    .rangContent{
      width: 100%;
      height: 100%;


    }
  }


</style>
