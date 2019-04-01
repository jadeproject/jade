<template>
  <div class="hubFives">
    <div class="title">
      <div v-for="(item,index) in peple_title" :class="{'curren':currenIndex==index}" @click="select(item,index)">{{item.val}}</div>
    </div>
    <div class="rangContent">

    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      };
    },
    computed:{
      currenIndex(){
        return this.tt
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {

    }
  };
</script>

<style type="text/css" lang="less" scoped>
  @import "../../../assets/css/config";
  .hubFives{
    height: 100%;
    width: 100%;
    background-color: #fff;
  }


</style>
