<template>
    <div class="foodC">
        <div class="lefts">{{foodData[0]}}</div>
        <div class="rights">联系电话：{{foodData[1]}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                foodData:'',
            };
        },
        created() {
            // 资料
            this.$get('/index.php/hy/user/index_floot',{
                "uid":"1",
            })
            .then((response) => {
                console.log(response)
                this.foodData = response.data;
            })
        },
        mounted() {

        },
        methods: {},
        components: {}
    };
</script>

<style type="text/css" lang="less">
    .foodC{
        width: 100%;
        height:60px;
        line-height: 60px;
        background: #243324;
        font-size: 20px;
        color:#fff;
        overflow: hidden;
        padding:0 50px;
        box-sizing: border-box;
        .lefts{
            float: left;
        }
        .rights{
            float: right;
        }
    }

</style>
