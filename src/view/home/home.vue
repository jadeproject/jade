<template>
    <div class="homeC noselect">
        <!-- 轮播图 -->
        <div class="banner">
            <Carousel autoplay>
                <Carousel-item v-for="(item,index) in bannerData" :key="index">
                    <div class="demo-carousel"><img :src="item" alt=""></div>
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
                        {{aboutData.one}}
                    </div>
                    <div class="right">
                        {{aboutData.two}}
                    </div>
                </div>
                <div class="bot_more" @click="contactbut('info',1)">阅读更多</div>
            </div>
        </div>
        <!-- 关于我们 end -->

        <!-- 产品介绍 -->
        <div class="home_bg product_bg bdDDCAA2" v-if="productStatus">
            <div class="product">
                <div class="top_title">产品介绍</div>
                <div class="home_layout bg01">
                    <div class="con_goods">
                        <div class="left"><img :src="productData.q[0].png" alt=""></div>
                        <div class="right">
                            <h5>{{productData.q[0].name}}</h5>
                            <p class="p1">{{productData.q[0].moral}}</p>
                            <p class="p2">材料：{{productData.q[0].ms}}</p>
                            <p class="p3">种类：{{productData.q[0].type}}</p>
                            <div class="but">
                                <strong>1元/月</strong> <span @click="productDataClick(productData.q[0],0)">立即起租</span>
                            </div>
                        </div>
                    </div>
                    <div class="con_goods_list">
                        <div class="goods_list_in">
                            <div class="imgs"><img :src="productData.q[1].png" alt=""></div>
                            <div class="goods_list_txt">
                                <h5>{{productData.q[1].name}}</h5>
                                <p>1元/月</p>
                                <div @click="productDataClick(productData.q[1],0)">立即起租</div>
                            </div>
                        </div>
                        <div class="goods_list_in">
                            <div class="imgs"><img :src="productData.q[2].png" alt=""></div>
                            <div class="goods_list_txt">
                                <h5>{{productData.q[2].name}}</h5>
                                <p>1元/月</p>
                                <div @click="productDataClick(productData.q[2],0)">立即起租</div>
                            </div>
                        </div>
                        <div class="goods_list_in">
                            <div class="imgs"><img :src="productData.q[3].png" alt=""></div>
                            <div class="goods_list_txt">
                                <h5>{{productData.q[3].name}}</h5>
                                <p>1元/月</p>
                                <div @click="productDataClick(productData.q[3],0)">立即起租</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_bg product_bg" v-if="productStatus">
            <div class="product">
                <div class="home_layout bg02">
                    <div class="product_imgsbg">
                        <!-- <img src="../../assets/img/banner1.png" alt=""> -->
                    </div>
                    <div class="con_goods_list pb100">
                        <div class="goods_left"><img src="../../assets/img/goods3.png" alt=""></div>
                        <div class="goods_right">
                            <div class="goods_r_list" v-for="(item,index) in productData.w" :key="index">
                                <div class="imgs"><img :src="item.png" alt=""></div>
                                <div class="txt">
                                    <div class="t_left">
                                        <h5>10元/月</h5>
                                        <p>{{item.name}}</p>
                                    </div>
                                    <div class="t_right"><span @click="productDataClick(item,1)">立即起租</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 产品介绍 end -->

        <!-- 开奖公告 -->
        <div class="home_bg notice_bg" v-if="drawDataStatus">
            <div class="home_layout notice">
                <div class="top_title">开奖公告</div>
                <div class="notice_con">
                    <div class="notice_con_left">
                        <div class="video">
                            <video :src="`http://askxubing.cn/${drawData.left_movie}`"  width="100%" height="480" controls="controls">
                            标题
                            </video>
                        </div>
                        <p class="history">历史中奖名单</p>
                        <div class="notice_left_list">
                            <div class="list" v-for="(item, index) in drawData.left_list" :key="index">第{{item.gear}}期 <span>中奖号码：{{item.mobile}}</span></div>
                        </div>
                    </div>
                    <div class="notice_con_right ">
                        <div class="list">
                            <div class="title">
                                <span class="sp01">{{drawData.q.name}}   {{drawData.q.gear}}</span>
                                <span class="sp02">价值{{drawData.q.money}}元</span>
                                <span class="sp03">开奖日期：{{drawData.q.time}}</span>
                            </div>
                            <div class="con_cen">
                                <div class="imgs"><img :src="drawData.q.img" alt=""></div>
                                <div class="rights">
                                    <div class="icons" @click="noticeDetails(drawData.q,0)">
                                        <span class="iconfont">&#xe661;</span>
                                        <p>详情</p>
                                    </div>
                                    <div class="icons" @click="noticeDetails(drawData.q,0)">
                                        <span class="iconfont">&#xe609;</span>
                                        <p>往期</p>
                                    </div>
                                    <div class="icons" @click="noticePeriod(drawData.q,1,1)">
                                        <span class="iconfont">&#xe627;</span>
                                        <p>视频</p>
                                    </div>
                                </div>
                                <p class="position_right">{{drawData.q.status}}</p>
                            </div>
                            <p class="p_txt">上期中奖名单：{{drawData.q.last}}</p>
                        </div>

                        <div class="list">
                            <div class="title">
                                <span class="sp01">{{drawData.w.name}}   {{drawData.w.gear}}</span>
                                <span class="sp02">价值{{drawData.w.money}}元</span>
                                <span class="sp03">开奖日期：{{drawData.w.time}}</span>
                            </div>
                            <div class="con_cen">
                                <div class="imgs"><img :src="drawData.w.img" alt=""></div>
                                <div class="rights">
                                    <div class="icons" @click="noticeDetails(drawData.w,1)">
                                        <span class="iconfont">&#xe661;</span>
                                        <p>详情</p>
                                    </div>
                                    <div class="icons" @click="noticeDetails(drawData.w,1)">
                                        <span class="iconfont">&#xe609;</span>
                                        <p>往期</p>
                                    </div>
                                    <div class="icons" @click="noticePeriod(drawData.w,1,2)">
                                        <span class="iconfont">&#xe627;</span>
                                        <p>视频</p>
                                    </div>
                                </div>
                                <p class="position_right">{{drawData.w.status}}</p>
                            </div>
                            <p class="p_txt">上期中奖名单：{{drawData.w.last}}</p>
                        </div>

                        <div class="list">
                            <div class="title">
                                <span class="sp01">{{drawData.q_vip.name}}   {{drawData.q_vip.gear}}</span>
                                <span class="sp02">价值{{drawData.q_vip.money}}元</span>
                                <span class="sp03">开奖日期：{{drawData.q_vip.time}}</span>
                            </div>
                            <div class="con_cen">
                                <div class="imgs"><img :src="drawData.q_vip.img" alt=""></div>
                                <div class="rights">
                                    <div class="icons" @click="noticeDetails(drawData.q_vip,2)">
                                        <span class="iconfont">&#xe661;</span>
                                        <p>详情</p>
                                    </div>
                                    <div class="icons" @click="noticeDetails(drawData.q_vip,2)">
                                        <span class="iconfont">&#xe609;</span>
                                        <p>往期</p>
                                    </div>
                                    <div class="icons" @click="noticePeriod(drawData.q_vip,1,3)">
                                        <span class="iconfont">&#xe627;</span>
                                        <p>视频</p>
                                    </div>
                                </div>
                                <p class="position_right">{{drawData.q_vip.status}}</p>
                            </div>
                            <p class="p_txt">上期中奖名单：{{drawData.q_vip.last}}</p>
                        </div>

                        <div class="list">
                            <div class="title">
                                <span class="sp01">{{drawData.w_vip.name}}   {{drawData.w_vip.gear}}</span>
                                <span class="sp02">价值{{drawData.w_vip.money}}元</span>
                                <span class="sp03">开奖日期：{{drawData.w_vip.time}}</span>
                            </div>
                            <div class="con_cen">
                                <div class="imgs"><img :src="drawData.w_vip.img" alt=""></div>
                                <div class="rights">
                                    <div class="icons" @click="noticeDetails(drawData.w_vip,3)">
                                        <span class="iconfont">&#xe661;</span>
                                        <p>详情</p>
                                    </div>
                                    <div class="icons" @click="noticeDetails(drawData.w_vip,3)">
                                        <span class="iconfont">&#xe609;</span>
                                        <p>往期</p>
                                    </div>
                                    <div class="icons" @click="noticePeriod(drawData.w_vip,1,4)">
                                        <span class="iconfont">&#xe627;</span>
                                        <p>视频</p>
                                    </div>
                                </div>
                                <p class="position_right">{{drawData.w_vip.status}}</p>
                            </div>
                            <p class="p_txt">上期中奖名单：{{drawData.w_vip.last}}</p>
                        </div>

                        <div class="list">
                            <div class="title">
                                <span class="sp01">{{drawData.one.name}}   {{drawData.one.gear}}</span>
                                <span class="sp02">价值{{drawData.one.money}}元</span>
                                <span class="sp03">开奖日期：{{drawData.one.time}}</span>
                            </div>
                            <div class="con_cen">
                                <div class="imgs"><img :src="drawData.one.img" alt=""></div>
                                <div class="rights">
                                    <div class="icons" @click="noticeDetails(drawData.one,4)">
                                        <span class="iconfont">&#xe661;</span>
                                        <p>详情</p>
                                    </div>
                                    <div class="icons" @click="noticeDetails(drawData.one,4)">
                                        <span class="iconfont">&#xe609;</span>
                                        <p>往期</p>
                                    </div>
                                    <div class="icons" @click="noticePeriod(drawData.one,1,5)">
                                        <span class="iconfont">&#xe627;</span>
                                        <p>视频</p>
                                    </div>
                                </div>
                                <p class="position_right">{{drawData.one.status}}</p>
                            </div>
                            <p class="p_txt">上期中奖名单：{{drawData.one.last}}</p>
                        </div>
                        <div class="notice_con_r_tis">
                            更多活动敬请期待 <span class="iconfont">&#xe649;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 开奖公告 end-->

        <!-- 常见问题 -->
        <div class="home_bg common_bg">
            <div class="home_layout">
                <div class="top_title">常见问题</div>
                <div class="common">
                    <div id="idlist">
                        <Collapse active-key="1" accordion>
                            <Panel :key="index" v-for="(item,index) in commonlist"> 
                                <div class="list" :class="index == indexs ?'listcur list':'list'" @click="commonClick(index)">
                                    <div class="lefts"><span>{{index+1}}</span></div>
                                    <div class="centers">{{item.title}}</div>
                                    <div class="rights"><span class="iconfont">&#xe620;</span></div>
                                </div>
                                <p slot="content" class="p_txt">{{item.desc}}</p>
                            </Panel>
                        </Collapse>
                        <div class="moretxt" @click="contactbut('info',1)">更多</div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 常见问题 end-->

        <!-- 浮窗 -->
        <div class="contactbut" v-if="isTop == true">
            <i-button @click="contactbut('info',2)" class="int"><span class="iconfont">&#xe678;</span></i-button>
            <i-button @click="contactbut('info',3)" class="int"><span class="iconfont">&#xe624;</span></i-button>
            <i-button @click="goTopbut()" class="int" ref="btn" title="回到顶部"><span class="iconfont">&#xe623;</span></i-button>
        </div>
        <!-- 浮窗 end -->

        <!-- 底部 -->
        <food-title></food-title>
        <!-- 底部 end-->

        <!-- 登录注册 -->
        <login-pop ref="log_Pop"></login-pop>
        <!-- 登录注册 end -->
    </div>
</template>
<script type="text/ecmascript-6">
    import foodTitle from '@/components/global/foot';
    import loginPop from '@/components/login/loginPop';
    let timer = null
    export default {
        data() {
            return {
                indexs:-2,
                bannerData:[],  //轮播图
                aboutData:'',   //关于我们
                productData:'', //产品介绍
                productStatus:false,    //产品介绍显示状态
                drawData:'',  //开奖公告
                drawDataStatus:'',  //开奖公告显示状态
                commonlist:[],  //常见问题
                qq_wechat:{},   //qq微信二维码
                isTop: true
            };
        },
        created() {
            // 轮播图
            this.$get('/index.php/hy/user/chart',{
                "uid":"1",
            })
            .then((response) => {
                console.log(response)
                this.bannerData = response.data;
            })

            // 关于我们
            this.$get('/index.php/hy/user/about',{
                "uid":"1",
            })
            .then((response) => {
                console.log(response)
                this.aboutData = response.data;
            })

            // 产品介绍
            this.$get('/index.php/hy/user/product',{
                "uid":"1",
            })
            .then((response) => {
                console.log(response)
                this.productStatus = true;
                this.productData = response.data;
            })

            // 开奖公告
            this.$get('/index.php/hy/user/draw_notice',{
                "uid":"1",
            })
            .then((response) => {
                console.log(response,"drawData")
                this.drawDataStatus = true;
                this.drawData = response.data;
            })

            // 常见问题
            this.$get('/index.php/hy/Configure/index_question',{
                "config":"question",
            })
            .then((response) => {
                this.commonlist = response.data;
            })

            // QQ和微信二维码
            this.$get('/index.php/hy/user/qq_wechat',{
                "uid":7,
            })
            .then((response) => {
                this.qq_wechat = response.data;
            })
        },
        mounted () {
            this.needScroll(); 
        },
        methods: {
            // 产品介绍点击
            productDataClick(data,index){
                // 判断有没有登录
                if(JSON.parse(window.localStorage.getItem("loginData"))==null){
                    this.$refs.log_Pop.showlogin();
                    return;
                }
                // data = 数据
                // index = 产品类型，0=千元，1=万元
                this.$router.push({
                path:'./hub',
                    query:{
                        type:0,
                        goodsId:data.id,
                        indextt:index
                    }
                })
            },
            // 开奖公告-详情点击
            noticeDetails(data,index){
                // 判断有没有登录
                if(JSON.parse(window.localStorage.getItem("loginData"))==null){
                    this.$refs.log_Pop.showlogin();
                    return;
                }
                // data = 数据
                // index = 需要展开列表的索引值
                this.$router.push({
                path:'./hub',
                    query:{
                        type:2,
                        index:index
                    }
                })
            },
            // 开奖公告-往期点击
            noticePeriod(data,index,typeStatus){
                // 判断有没有登录
                if(JSON.parse(window.localStorage.getItem("loginData"))==null){
                    this.$refs.log_Pop.showlogin();
                    return;
                }
                // data = 数据
                // index = tab显示索引值
                // typeStatus = 视频类型
                this.$router.push({
                path:'./hub',
                    query:{
                        type:5,
                        indextt:index,
                        typeStatus:typeStatus
                    }
                })
            },
            // 常见问题列表点击
            commonClick(e){
                this.indexs = e;
            },

            // 联系弹窗
            contactbut (type,nums) {
                let title = '';
                if(nums == 1){
                    title = '微信扫码查看更多'
                }else{
                    title = nums == 2 && nums != 1? '微信扫码查看更多' : 'QQ扫码联系我们';
                }
                let imgs = nums == 2 && nums != 1 ? this.qq_wechat.wechat : this.qq_wechat.qq;
                this.qq_wechat
                let content = `<img class="contactimg" src="${imgs}" />`;
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                }
            },
            // 监控回到顶部按钮显示隐藏
            needScroll () {
                let clientHeight = document.documentElement.clientHeight
                let obtn = this.$refs.btn
                window.onscroll = function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    // console.log(osTop)
                    // console.log(clientHeight)
                    // if (osTop > clientHeight) {
                    //     console.log(123)
                    //     this.isTop = true
                    // } else {
                    //     console.log(222)
                    //     this.isTop = false
                    // }
                    // if (!this.isTop) {
                    //     clearInterval(timer)
                    // }
                    // this.isTop = false
                }
            },
            // 回到头部
            goTopbut(){
                timer = setInterval(function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop
                    let ispeed = Math.floor(-osTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                    if (osTop === 0) {
                        this.isTop = false
                        clearInterval(timer)
                    }
                }, 30)
            }
        },
        components: {
            foodTitle,
            loginPop
        }
    };
</script>
<style>
#idlist .ivu-collapse{
    background: none;
    border:none;
    border-radius: 0;
    margin-top: 10px;
}
#idlist .ivu-collapse-content{
    background: none;
    color: #fff;
    line-height: 40px;
    padding: 0;
}
#idlist .ivu-collapse-content>.ivu-collapse-content-box{
    padding: 0;
}
#idlist .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
    padding:0;
}
#idlist .ivu-collapse>.ivu-collapse-item{
    border:none;
}
#idlist .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
    height: auto;
    background: none;
    border:none;
    line-height: 0;
}
#idlist .ivu-icon-ios-arrow-forward:before{
    display: none;
}
.ivu-modal-body .ivu-modal-confirm-body{
    padding: 0;
}
.ivu-modal-confirm-body img{
    width: 100%;
}
.ivu-modal-confirm-footer{
    margin-top:0;
}
</style>

<style type="text/css" lang="less" scoped>
    @import "../../assets/css/config";
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
        not supported by any browser */
    }
    .homeC{
        margin-top: 80px;
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
            width: 1000px;
            margin: 0 auto;
        }
        .bg01{
            background: url("../../assets/img/bg1.png") no-repeat;
        }
        .bg02{
            background: url("../../assets/img/bg2.png") no-repeat right top;
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
                margin-top: 30px;
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
                border-bottom: 4px solid #DDCAA2;
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
                    width: 60%;
                    height: 355px;
                    float: left;
                    font-size: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    width: 40%;
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
                        overflow: hidden;
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
                            -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
                            -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                            box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                            border-collapse:separate !important;
                            &:hover{
                                background: red;
                            }
                        }
                    }
                }
            }
            .con_goods_list{
                width: 100%;
                text-align: center;
                .goods_list_in{
                    width: 32.3%;
                    display: inline-block;
                    .imgs{
                        width: 310px;
                        height: 310px;
                        font-size: 0;
                        margin: 120px auto 70px;
                        position: relative;
                        &::after{
                            content: '';
                            width: 340px;
                            height: 340px;
                            border:2px solid #F8F2D8;
                            border-radius:50%;
                            position: absolute;
                            top: -16px;
                            left: -16px;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            background: #fff;
                            border-radius: 50%;
                        }
                    }
                    .goods_list_txt{
                        color:#F8F2D8;
                        overflow: hidden;
                        h5{
                            font-size: 20px;
                            height:40px;
                            position: relative;
                            &::after{
                                content: '';
                                width: 100px;
                                height: 1px;
                                background: #F8F2D8;
                                position: absolute;
                                bottom: 8px;
                                left: 50%;
                                margin-left: -50px;  
                            }
                        }
                        p{
                            font-size:30px;
                            font-weight: bold;
                            margin:10px auto;
                        }
                        div{
                            width: 140px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            font-size:20px;
                            background: #F93939;
                            border-radius:20px;
                            margin: 20px auto;
                            cursor: pointer;
                            -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
                            -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                            box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                            border-collapse:separate !important;
                            &:hover{
                                background: red;
                            }
                        }
                    }
                }
            }
            .product_imgsbg{
                width: 100%;
                height: 506px;
                font-size: 0;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .con_goods_list{
                overflow: hidden;
                .goods_left{
                    width: 300px;
                    height:580px;
                    background: #fff;
                    float: left;
                    font-size: 0;
                    overflow: hidden;
                    img{
                        height: 100%;
                    }
                }
                .goods_right{
                    width: 700px;
                    height: 580px;
                    float: left;
                    overflow: hidden;
                    .goods_r_list{
                        width: 213px;
                        height: 280px;
                        float: left;
                        margin:0 0 20px 20px;
                        .imgs{
                            width: 100%;
                            height:210px;
                            overflow: hidden;
                            font-size: 0;
                            background: #fff;
                            img{
                                width: 100%;
                            }
                        }
                        .txt{
                            width: 100%;
                            height: 70px;
                            background: #86402F;
                            font-size: 20px;
                            color:#fff;
                            padding: 0 10px;
                            box-sizing: border-box;
                            overflow: hidden;
                            .t_left{
                                width: 56%;
                                overflow: hidden;
                                float: left;
                                text-align: left;
                                h5{
                                    font-size: 18px;
                                    line-height: 40px;
                                }
                                p{
                                    font-size:14px;
                                    text-overflow: ellipsis;
                                    overflow:hidden;
                                    white-space: nowrap;
                                }
                            }
                            .t_right{
                                width: 44%;
                                float: right;
                                padding: 22px 0;
                                box-sizing: border-box; 
                                span{
                                    padding: 6px 15px;
                                    box-sizing: border-box;
                                    border-radius:20px;
                                    font-size:12px;
                                    background: #F93939;
                                    cursor: pointer;
                                    -webkit-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);  
                                    -moz-box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                                    box-shadow: 0px 3px 4px rgba(0,0,0,0.16);
                                    border-collapse:separate !important;
                                    &:hover{
                                        background: red;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .notice_bg{
            background: #fff;
        }
        .notice{
            .top_title{
                font-size: 30px;
                text-align: center;
                color:#9C4932;
                padding: 30px 0;
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
            .notice_con_left{
                width:45%;
                float: left;
                .video{
                    width: 100%;
                    font-size: 0;
                }
                .history{
                    width:100%;
                    height: 40px;
                    line-height: 40px;
                    color:#fff;
                    text-align: center;
                    background: #B2391B;
                    font-size: 20px;
                }
                .notice_left_list{
                    width: 100%;
                    height:240px;
                    overflow: auto;
                    background: #fff;
                    -webkit-box-shadow: 0px 0px 4px rgba(0,0,0,0.16);  
                    -moz-box-shadow: 0px 0px 4px rgba(0,0,0,0.16);
                    box-shadow: 0px 0px 4px rgba(0,0,0,0.16);
                    border-collapse:separate !important;
                    .list{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        color:#333;
                        padding:0 20px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #e8eaec;
                        span{
                            float: right;
                        }
                    }
                }
            }
            .notice_con_right{
                width: 53%;
                float: right;
                overflow: hidden;
                .list{
                    width: 100%;
                    border-left: 1px solid #BD543A;
                    border-right: 1px solid #BD543A;
                    .title{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        color:#fff;
                        font-size: 12px;
                        background: #B2391B;
                        overflow: hidden;
                        span{
                            display: inline-block;
                            width: 32%;
                            padding: 0 10px;
                            box-sizing: border-box;
                        }
                        .sp02{
                            text-align: center;
                        }
                        .sp03{
                            text-align: right;
                        }
                    }
                    .con_cen{
                        width: 100%;
                        height: 80px;
                        overflow: hidden;
                        position: relative;
                        .imgs{
                            width: 45%;
                            float: left;
                            overflow: hidden;
                        }
                        .rights{
                            width: 55%;
                            float: right;
                            .icons{
                                width: 80px;
                                height: 80px;
                                font-size: 14px;
                                color:rgb(32, 25, 25);
                                float: left;
                                text-align: center;
                                padding-top: 12px;
                                box-sizing: border-box;
                                cursor: pointer;
                                .iconfont{
                                    font-size:40px;
                                }
                                p{
                                    line-height: 25px;
                                }
                                &:hover{
                                    background: #f4f4f4;
                                }
                            }
                        }
                        .position_right{
                            font-size: 12px;
                            color:#fff;
                            padding:5px 10px;
                            box-sizing: border-box;
                            background: #9d9d9d;
                            border-radius:5px;
                            position: absolute;
                            top:5px;
                            right: 10px;
                        }
                    }
                    .p_txt{
                        line-height: 30px;
                        font-size: 12px;
                        text-align: center;
                        color:#BD543A;
                    }
                }
                .notice_con_r_tis{
                    width: 100%;
                    height:60px;
                    line-height: 60px;
                    font-size: 20px;
                    color:#BD543A;
                    text-align: center;
                    border:1px solid #BD543A;
                }
            }
        }

        .common_bg{
            background: #333;
            .top_title{
                font-size: 30px;
                text-align: center;
                color:#9C4932;
                padding: 30px 0;
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
        }
        .common{
             overflow: hidden;
             padding-bottom: 100px;
             .list{
                 width: 100%;
                 background: #434344;
                 padding: 0 50px;
                 box-sizing: border-box;
                 color:#fff;
                 font-size: 20px;
                 overflow: hidden;
                 cursor: pointer;
                 margin-top: 10px;
                 .lefts{
                    width: 40px;
                    height: 40px;
                    margin: 10px 30px 0 0;
                    border-radius: 50%;
                    background: #515151;
                    text-align: center;
                    line-height: 40px;
                    float: left;
                 }
                 .centers{
                     width: 750px;
                     height: 60px;
                     float: left;
                     color: #fff;
                     line-height: 60px;
                     text-overflow: ellipsis;
                     overflow: hidden;
                     white-space: nowrap;
                 }
                 .rights{
                     width: 30px;
                     height: 30px;
                     margin: 15px 0 0 10px;
                     text-align: center;
                     line-height: 30px;
                     float: right;
                     border-radius: 50%;
                     background: #515151;
                 }
             }
             .listcur{
                 background: #B2391B;
                 .lefts{
                     background: #D84E0B;
                 }
                 .rights{
                     background: #D84E0B;
                 }
             }
             .p_txt{
                padding: 50px;
                box-sizing: border-box;
                background: #4B4B4C;
            }
            .moretxt{
                width:100%;
                height:50px;
                line-height: 50px;
                font-size: 16px;
                color:#fff;
                text-align: center;
                background: #434344;
                margin-top: 50px;
                cursor: pointer;
                &:hover{
                    background: #4B4B4C;
                    color:#D84E0B;
                }
            }
        }

        .contactbut{
            width: 50px;
            height: 180px;
            position: fixed;
            right: 50px;
            bottom: 80px;
            .int{
                width:50px;
                height: 50px;
                cursor: pointer;
                margin-bottom: 10px;
                text-align: center;
                line-height: 50px;
                background: #fff;
                color:#D84E0B;
                border-radius:5px;
                border: none;
                padding: 0;
                -webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.16);  
                -moz-box-shadow: 0px 2px 4px rgba(0,0,0,0.16);
                box-shadow: 0px 2px 4px rgba(0,0,0,0.16);
                border-collapse:separate !important;
                &:hover{
                   background: #D84E0B; 
                   color:#fff;
                }
                .iconfont{
                    font-size: 30px;
                }
            }
        }

        .pb100{
            padding-bottom: 100px;
        }
        .bdDDCAA2{
            border-bottom: 4px solid #DDCAA2;
        }
    }


</style>
