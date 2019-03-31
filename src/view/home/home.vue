<template>
    <div class="homeC">
        <!-- 轮播图 -->
        <div class="banner">
            <Carousel autoplay>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../../assets/img/banner1.png" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../../assets/img/banner1.png" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../../assets/img/banner1.png" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../../assets/img/banner1.png" alt=""></div>
                </Carousel-item>
            </Carousel>
        </div>
        <!-- 轮播图 end -->

        <!-- 关于我们 -->
        <div class="home_bg about_bg">
            <div class="home_layout about">
                <div class="top_title">
                    <h4>关于我们</h4>
                    <p><span>ABOUT </span><span> US</span></p>
                </div>
                <div class="con_text">
                    <div class="left">
                        这里是关于公司的简介这里是关于公司的简介这里是关于公司的简这里是关于公司的简介这里是关于公司的简介这里是关于公司的简介<br/>
                        这里是关于公司的简介这里是关于公司的简介这里是关于公司的简这里是关于公司的简介这里是关于公司这里是关于公司的简介这里是关于公司的简介这里是关于公司的简介<br/>
                        这里是关于公司的简介这里是关于公司的简介这里是关于公司的简介<br/>
                    </div>
                    <div class="right">
                        Company ProfileCompany ProfileCompany ProfileCompany <br/>ProfileCompany ProfileCompany ProfileCompany ProfileCompany ProfileCompany ProfileCompany <br/>ProfileCompany ProfileCompany ProfileCompany ProfileCompany
                    </div>
                </div>
                <div class="bot_more">阅读更多</div>
            </div>
        </div>
        <!-- 关于我们 end -->

        <!-- 产品介绍 -->
        <div class="home_bg product_bg">
            <div class="product">
                <div class="top_title">产品介绍</div>
                <div class="home_layout">
                    <div class="con_goods">
                        <div class="left"><img src="../../assets/img/banner1.png" alt=""></div>
                        <div class="right">
                            <h5>观音吊坠</h5>
                            <p class="p1">大慈大悲 普渡众生</p>
                            <p class="p2">材料：和田玉籽料</p>
                            <p class="p3">种类：吊坠</p>
                            <div class="but">
                                <strong>1元/月</strong> <span>立即起租</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 产品介绍 end -->
    </div>

</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {

            };
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {

        }
    };
</script>

<style type="text/css" lang="less" scoped>
  .homeC{
    /*margin-top: 40px;*/
    .banner{
        img{
            width: 100%;
        }
    }
    .home_bg{
        width: 100%;
        overflow: hidden;
    }
    .home_layout{
        width: 1100px;
        margin: 0 auto;
    }
    .about_bg{
        background: #fff;
    }
    .about{
        padding:70px 0;
        color:#9C4A32;
        .top_title{
            h4{
                font-size:60px;
                margin-bottom: 20px;
            }
            p{
                font-size: 25px;
                span{
                    padding-right:10px;
                }
            }
        }
        .con_text{
            width: 100%;
            overflow: hidden;
            margin-top: 50px;
            div{
                width: 47%;
                float: left;
                line-height:35px;
                font-size: 20px;
            }
            .right{
                float: right;
            }
        }
        .bot_more{
            width: 100%;
            overflow: hidden;
            margin-top: 60px;
            font-size: 25px;
            text-align: center;
            cursor: pointer;
            &:hover{
                color:red;
            }
        }
    }
    .product_bg{
        background: #BD543A
    }
    .product{
        .top_title{
            font-size: 30px;
            text-align: center;
            color:#fff;
            padding: 30px 0;
            background: #9C4932;
            position: relative;
            &::after{
                content: '';
                width: 80px;
                height:2px;
                background: #F8F2D8;
                position: absolute;
                bottom: 15px;
                left: 50%;
                margin-left: -40px;
            }
        }
        .con_goods{
            width: 100%;
            overflow: hidden;
            .left{
                width: 70%;
                float: left;
                font-size: 0;
                img{
                    width: 100%;
                }
            }
            .right{
                width: 30%;
                float: right;
                color:#fff;
                padding-left:50px;
                box-sizing: border-box;
                h5{
                    font-size: 30px;
                    margin:30px 0 15px 0;
                }
                .p1{
                    margin-top:45px;
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 35px;
                }
                .p2,.p3{
                    line-height: 40px;
                    font-size: 30px;
                }
                .but{
                    margin-top: 60px;
                    font-size:30px;
                    line-height: 48px;
                    strong{
                        float: left;
                    }
                    span{
                        padding:10px 20px;
                        float: left;
                        line-height: 26px;
                        background: #F93939;
                        border-radius:39px;
                        font-size: 25px;
                        cursor: pointer;    
                        margin-left: 10px;
                    }
                }
            }
        }
    }
  }


</style>
