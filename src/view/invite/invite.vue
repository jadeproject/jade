<template>
    <div class="inviteC">
        <!-- 大图 -->
        <div class="banner">
            <img src="../../assets/img/invite_banner.jpg" alt="">
            <div class="banner_position">
                <div class="name_img"><div><img src="../../assets/img/m_avatar.png" alt=""></div></div>
                <div class="name_txt">糟老头子、</div>
                <div class="tips">我已成功邀请 <span>60</span> 人</div>
            </div>
        </div>
        <!-- 大图 end -->

        <!-- 步骤 -->
        <div class="invite_bg steps_bg">
            <div class="ihsteps_layout steps">
                <div class="tipsImg"><img src="../../assets/img/invite_banner.jpg" alt=""></div>
                <div class="steps_in">
                    <div class="left">
                        <h5 class="nums">1</h5>
                        <p>分享活动</p>
                        <p>给好友</p>
                    </div>
                    <div class="center">
                        <h5 class="nums">2</h5>
                        <p>好友注册</p>
                        <p>并实名认证</p>
                    </div>
                    <div class="center">
                        <h5 class="nums">3</h5>
                        <p>并在商城</p>
                        <p>完成租赁</p>
                    </div>
                    <span class="tip_position">立即邀请</span>
                </div>
            </div>
        </div>
        <!-- 步骤 end-->
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {};
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {}
    };
</script>

<style type="text/css" lang="less">
.inviteC{
    margin-top: 40px;
    .banner{
        width:100%;
        overflow: hidden;
        font-size: 0;
        position: relative;
        img{
            width: 100%;
        }
        .banner_position{
            width: 400px;
            height: 330px;
            position: absolute;
            left: 50%;
            bottom: 50px;
            margin-left: -175px;
            font-size: 20px;
            text-align: center;
            .name_img{
                width: 200px;
                height: 200px;
                margin: 0 auto;
                border-radius:50%;
                overflow: hidden;
                div{
                    width: 190px;
                    height: 190px;
                    border-radius:50%;
                    border:10px solid #fff;
                }
            }
            .name_txt{
                text-align: center;
                font-size: 25px;
                font-weight: bold;
                line-height: 40px;
            }
            .tips{
                padding: 0 10px;
                display: inline-block;
                height:50px;
                line-height: 46px;
                text-align: center;
                font-size: 25px;
                border:3px solid #fff;
                border-radius:30px;
                margin: 20px auto 0;
                color:#6296D0;
                background: #fff;
                span{
                    color:red;
                }
            }
        }
    }
    .invite_bg{
        width: 100%;
        overflow: hidden;
    }
    .ihsteps_layout{
        width: 1100px;
        margin: 0 auto;
    }
    .steps_bg{
        background: #FEF2D8;
    }
    .steps{
        padding-bottom: 80px;
        .tipsImg{
            width: 100%;
            height: 100px;
            overflow: hidden;
            text-align: center;
        }
        .steps_in{
            width: 100%;
            height:350px;
            background: #83DAB0;
            border-radius: 30px;
            position: relative;
            div{
                width: 33.3%;
                float: left;
                h5{
                    width: 80px;
                    height:80px;
                    background: #fff;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 80px;
                    font-size: 40px;
                    color:#168452;
                    margin: 50px auto 40px;
                }
                p{
                    font-size: 40px;
                    color:#168452;
                    text-align: center;
                    line-height: 50px;
                }
            }
            .tip_position{
                width: 330px;
                height: 90px;
                border-radius: 50px;
                text-align: center;
                line-height: 86px;
                color:#fff;
                background: #6296D0;
                border:4px solid #fff;
                font-size: 40px;
                position: absolute;
                left: 50%;
                bottom: 0;
                margin-left: -165px;
                margin-bottom: -45px;
                cursor: pointer;
                &:hover{
                    background: #8AABE1;
                }
            }
        }
    }
}

</style>
