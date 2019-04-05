<template>
    <div class="inviteC">
        <!-- 大图 -->
        <div class="banner">
            <img src="../../assets/img/invite_banner.jpg" alt="">
            <div class="banner_position" v-if="userStatus">
                <div class="name_img"><div><img :src="userData.avatar" alt=""></div></div>
                <div class="name_txt">{{userData.username}}</div>
                <div class="tips" @click="countClick(userData)">我已成功邀请 <span>{{userData.count}}</span> 人</div>
            </div>
        </div>
        <!-- 大图 end -->

        <!-- 步骤 -->
        <div class="invite_bg steps_bg">
            <div class="ihsteps_layout steps">
                <div class="tipsImg"><img src="../../assets/img/steps_tab.png" alt=""></div>
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
                    <span class="tip_position noselect" @click="inviteClick('info')">立即邀请</span>
                </div>
            </div>
        </div>
        <!-- 步骤 end-->

        <!-- 获奖方式 -->
        <div class="invite_bg getmode_bg" v-if="getmodeStatus">
            <div class="getmode_title"><span>获奖方式</span></div>
            <div class="ihsteps_layout getmode">
                <div class="getmode_in">
                    <div class="getmode_list">
                        <div class="list listRed">
                            <div class="title">{{wayData[0].yaoqing}}</div>
                            <div class="imgs"><img :src="wayData[0].img" alt=""></div>
                            <div class="receive">领 取</div>
                            <div class="nums">{{wayData[0].nums}}</div>
                        </div>
                        <div class="list listYellow">
                            <div class="title">{{wayData[1].yaoqing}}</div>
                            <div class="imgs"><img :src="wayData[1].img" alt=""></div>
                            <div class="receive">领 取</div>
                            <div class="nums">{{wayData[1].nums}}</div>
                        </div>
                        <div class="list listBlue">
                            <div class="title">{{wayData[2].yaoqing}}</div>
                            <div class="imgs"><img :src="wayData[2].img" alt=""></div>
                            <div class="receive">领 取</div>
                            <div class="nums">{{wayData[2].nums}}</div>
                        </div>
                        <p class="p_txt">邀请新人并完成租赁即可获取以上<span>全部</span>奖励</p>
                    </div>
                </div>
                <div class="tips">先到先得，送完即止</div>
            </div>
        </div>
        <!-- 获奖方式 end -->
        <!-- 排行榜 -->
        <div class="invite_bg getmode_bg">
            <div class="getmode_title"><span>排行榜</span></div>
            <div class="ihsteps_layout getmode">
                <div class="getmode_in">
                    <div class="getmode_list">
                        <div class="ranking_tab">
                            <div class="num1">排名</div>
                            <div class="num2">头像</div>
                            <div class="num3">昵称</div>
                            <div class="num4">邀请人数</div>
                        </div>
                        <div class="ranking_tab ranking_list" v-for="(item,index) in rankingList" :key="index">
                            <div class="num1"><span :class="index < 3 ? 'span_cur':''"><strong v-if="index > 2">NO.</strong>{{index+1}}</span></div>
                            <div class="num2"><img :src="item.img" alt=""></div>
                            <div class="num3">{{item.username}}</div>
                            <div class="num4">{{item.nums}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 排行榜 end -->
        
        <!-- 邀请的人资料 -->
        <div class="count" v-if="invitationPidStatus">
            <div class="count_bg" @click="count_bgClick()"></div>
            <div class="count_in">
                <div class="title">成功邀请的人</div>
                <div class="count_list">
                    <div class="list_in">
                        <span>用户名</span>
                        <span>手机号</span>
                        <span>租贡状态</span>
                    </div>
                    <div class="list_in" v-for="(item,index) in invitationPid" :key="index">
                        <span>{{item.username}}</span>
                        <span>{{item.mobile}}</span>
                        <span>{{item.status}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 邀请的人资料 end -->
        <!-- 登录注册 -->
        <login-pop ref="log_Pop"></login-pop>
        <!-- 登录注册 end -->
    </div>
</template>

<script type="text/ecmascript-6">
    import loginPop from '@/components/login/loginPop';
    export default {
        data() {
            return {
                userStatus:false,//顶部信息-头像昵称等,显示隐藏
                userData:'',    //顶部信息-头像昵称等
                invitationPid:'',//邀请的人数据
                invitationPidStatus:false,//邀请的人模块显示隐藏
                rankingList:[],  // 排行榜
                wayData:'',     //获奖方式
                getmodeStatus:false,   //获奖方式显示状态 
            };
        },
        created() {
            // 顶部信息-头像昵称等
            this.userDatas();

            // 获奖方式
            this.$get('/index.php/hy/user/way',{
                "uid":"1",
            })
            .then((response) => {
                this.getmodeStatus = true;
                this.wayData = response.data;
            })

            // 排行榜
            this.$get('/index.php/hy/user/invitation_list',{
                "uid":"1",
            })
            .then((response) => {
                this.rankingList = response.data;
            })
        },
        mounted() {

        },
        methods: {
            // 用户数据
            userDatas(){
                // 判断有没有登录
                if(JSON.parse(window.localStorage.getItem("loginData"))==null){
                    this.userStatus = false;
                }else{
                    // 顶部信息-头像昵称等
                    this.$get('/index.php/hy/user/invitation_user',{
                        "uid":JSON.parse(window.localStorage.getItem("loginData")).id
                    })
                    .then((response) => {
                        this.userStatus = true;
                        this.userData = response.data;
                    })
                }
            },
            // 查看邀请的人
            countClick(data){
                if(this.userData.count == 0){
                    this.$Message.info("暂无邀请到的人数据");
                    return;
                }
                this.$get('/index.php/hy/user/invitation_pid',{
                    "uid":JSON.parse(window.localStorage.getItem("loginData")).id
                })
                .then((response) => {
                    this.invitationPid = response.data;
                    this.invitationPidStatus = true;
                })
            },
            // 关闭查看邀请的人
            count_bgClick(){
                this.invitationPidStatus = false;
            },
            // 立即邀请
            inviteClick(type){
                // 判断有没有登录
                if(JSON.parse(window.localStorage.getItem("loginData"))==null){
                    this.$refs.log_Pop.showlogin();
                    return;
                }else{
                    const title = '温馨提示';
                    const content = `<p>复制链接进行邀请：${window.location.href}</p>`;
                    switch (type) {
                        case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    }
                }
            }
        },
        components: {
            loginPop
        }
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
.inviteC{
    margin-top: 80px;
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
            bottom: 0;
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
                cursor: pointer;
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
        width: 1000px;
        margin: 0 auto;
    }
    .steps_bg{
        background: #FEF2D8;
    }
    .steps{
        padding-bottom: 90px;
        .tipsImg{
            width: 100%;
            height: 100px;
            overflow: hidden;
            text-align: center;
            padding: 22px 205px;
            box-sizing: border-box;
            img{
                width: 100%;
            }
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
    .getmode_bg{
        background: #FEF2D8;
        .getmode_title{
            width: 100%;
            height: 60px;
            line-height: 60px;
            color:#168452;
            text-align: center;
            span{
                padding:0 30px;
                box-sizing: border-box;
                font-size: 40px;
                font-weight: bold;
                position: relative;
                &::before{
                    content: "";
                    width: 150px;
                    height:44px;
                    position: absolute;
                    top: 0;
                    left: -150px;
                    background:url(../../assets/img/title_left.png) no-repeat;
                }
                &::after{
                    content: "";
                    width: 150px;
                    height:44px;
                    position: absolute;
                    top: 0;
                    right: -150px;
                    background:url(../../assets/img/title_right.png) no-repeat;
                }
            }
        }
    }
    .getmode{
        background: #83DAB0;
        border-radius: 10px;
        overflow: hidden;
        padding: 30px 0;
        box-sizing: border-box;
        margin: 20px auto 50px;
        .tips{
            padding-top: 30px;
            text-align: center;
            color:#fff;
            font-size: 24px;
        } 
        .getmode_in{
            width: 100%;
            overflow: hidden;
            .getmode_list{
                width: 96%;
                text-align: center;
                background: #fff;
                margin: 0 auto;
                border-radius: 10px;
                .list{
                    width: 237px;
                    background: #8AABE1;
                    display: inline-block;
                    font-size: 0;
                    margin: 40px 30px 30px;
                    font-size: 20px;
                    color:#fff;
                    border-radius: 30px;
                    overflow: hidden;
                    background: #83DAB0;
                    -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
                    -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                    box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                    border-collapse:separate !important;
                    .title{
                        width:80%;
                        height: 40px;
                        line-height: 40px;
                        background: #000;
                        border-radius: 5px;
                        text-align: center;
                        color:#fff;
                        margin: 20px auto;
                        font-size: 20px;
                        -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
                        -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                        box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                        border-collapse:separate !important;
                    }
                    .imgs{
                        width: 80%;
                        height: 120px;
                        overflow: hidden;
                        margin: 0 auto;
                        img{
                            height: 100%;
                        }
                    }
                    .receive{
                        width: 42%;
                        height: 30px;
                        line-height: 30px;
                        border-radius: 30px;
                        text-align: center;
                        margin: 10px auto;
                        background: rgba(0,0,0,0.15);
                        font-size: 16px;
                    }
                    .nums{
                        font-weight: bold;
                        padding-bottom: 15px;
                        font-size: 24px;
                    }
                }
                .listRed{
                    background: -webkit-linear-gradient(#F24E49, #F78E8E); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(#F24E49, #F78E8E); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(#F24E49, #F78E8E); /* Firefox 3.6 - 15 */
                    background: linear-gradient(#F24E49, #F78E8E); /* 标准的语法 */
                    .title{
                        background: #EC2D28;
                    }
                }
                .listYellow{
                    background: -webkit-linear-gradient(#FFBF62, #FFDF96); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(#FFBF62, #FFDF96); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(#FFBF62, #FFDF96); /* Firefox 3.6 - 15 */
                    background: linear-gradient(#FFBF62, #FFDF96); /* 标准的语法 */
                    .title{
                        background: #FDB959;
                    }
                }
                .listBlue{
                    background: -webkit-linear-gradient(#688DD5, #AECCEE); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(#688DD5, #AECCEE); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(#688DD5, #AECCEE); /* Firefox 3.6 - 15 */
                    background: linear-gradient(#688DD5, #AECCEE); /* 标准的语法 */
                    .title{
                        background: #6A8CD0;
                    }
                }
                .p_txt{
                    width: 100%;
                    text-align: center;
                    font-size: 30px;
                    color:#666;
                    padding-bottom: 30px;
                    span{
                        color:red;
                    }
                }
            }  
            .ranking_tab{
                width: 100%;
                height: 50px;
                line-height: 50px;
                color:#999;
                font-weight: bold;
                overflow: hidden;
                font-size: 24px;
                border-bottom: 1px solid #F3F3F3;
                div{
                    width: 25%;
                    float: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                } 
            }
            .ranking_tab:last-child{
                border-bottom: none;
            }
            .ranking_list{
                height: 80px;
                color:#000;
                line-height: 80px;
                .num1{
                    color:#666;
                    span{
                        display: inline-block;
                    }
                    .span_cur{
                        width: 50px;
                        height: 66px;
                        display: block;
                        margin: 7px auto;
                        text-align: center;
                        line-height: 50px;
                        color:#fff;
                        background:url(../../assets/img/getmode_num.png) no-repeat;
                    }
                }
                .num2{
                    img{
                        width: 50px;
                        height: 50px;
                        border-radius: 50px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .count{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left: 0;
        z-index: 10;
        .count_bg{
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
        }
        @media \0screen\,screen\9 {/* 只支持IE6、7、8 */
            .count_bg{
            background-color:#000000;
            filter:Alpha(opacity=50);
            position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
            *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
            }
        }
        .count_in{
            width: 600px;
            height: 500px;
            background: #fff;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -250px;
            margin-left: -300px;
            .title{
                font-size: 22px;
                font-weight: bold;
                text-align: center;
                color:#000;
                height: 54px;
                padding:15px 10px;
                box-sizing: border-box;
                border-bottom: 1px solid #d9d9d9;
            }
            .count_list{
                width: 100%;
                height:445px;
                padding:0 10px 10px;
                box-sizing: border-box;
                .list_in{
                    width: 100%;
                    padding:10px 0;
                    box-sizing: border-box;
                    line-height: 40px;
                    color:#666;
                    border-bottom: 1px solid #f5f5f5;
                    span{
                        width: 32.3%;
                        display: inline-block;
                        text-align: center;
                    }
                }
            }

        }
    }
}

</style>
