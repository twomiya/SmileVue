<template>
  <!--search bar layout-->
  <div>
    <div class="search-bar">
        <van-row>
            <van-col span="3"><i class="iconfont">&#xe677;</i></van-col>
            <van-col span="16"><input type="text" class="serch-input"></van-col>
            <van-col span="5"><van-button class="search-button" size="mini">查找</van-button></van-col>
        </van-row>
    </div>
    <!--swipwer area-->
    <div class="swiper-area">
        <van-swipe :autoplay="1000">
            <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                <img v-lazy="banner.image" width="100%"/>
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="type-bar">
      <div  v-for="(cate,index) in category" :key="index" >
              <img v-lazy="cate.image" width="90%" />
              <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!--AD banner area-->
    <div class="">
        <img :src="adBanner.PICTURE_ADDRESS" width="100%"/>
    </div>

    <!--Recommend goods area-->
    <div class="recommend-area">
        <div class="recommend-title">
            商品推荐
        </div>
        <div class="recommend-body">
          <!--swiper-->
          <swiper :option=" swiperOption">
              <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                  <div class="recommend-item">
                          <img :src="item.image" width="80%" />
                          <div>{{item.goodsName}}</div>
                          <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                  </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!-- <swiperDefault></swiperDefault> -->
        </div>
    </div>
    <!--floor one area-->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>

    <!--Hot Area-->
    <div class="hot-area">
        <div class="hot-title">热卖商品</div>
        <div class="hot-goods">
            <van-list>
                <van-row gutter="20">
                    <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                        <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                    </van-col>
                </van-row>

            </van-list>
        </div>
    </div>



  </div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {toMoney} from '@/filter/moneyFilter.js'
// import swiperDefault from '../components/swiperDefault'
import floorComponent from '../components/floorComponent'
import goodsInfo from '../components/goodsInfoComponent'
export default {
   components: {
    swiper,
    swiperSlide,
    // swiperDefault
    floorComponent,
    goodsInfo
  },
  data () {
    return {
      msg: 'Shopping Mall',
      bannerPicArray:[],
      category:[],
      adBanner:[],
      recommendGoods:[],
      swiperOption:{
         direction:'vertical',
          pagination:{
              el:'.swiper-pagination'
          }
      },
      floor1:[],
      floor2:[],
      floor3:[],
      floorName:{},
      hotGoods:[]


    }
  },
  created(){
    this.$api.get('https://www.easy-mock.com/mock/5afd141a43590165fd1d3c68/example_copy/test/',{})
    .then(response=>{
        console.log(response)
        if(response.status==200){
            //轮播图片
            this.bannerPicArray = response.data.data.slides
            // 获取商品列表
            this.category=response.data.data.category;
            // 获取广告图片
            this.adBanner = response.data.data.advertesPicture
            //推荐商品
            this.recommendGoods = response.data.data.recommend
            //楼层1,2,3数据
            this.floor1 = response.data.data.floor1
            this.floor2 = response.data.data.floor2
            this.floor3 = response.data.data.floor3
            // 楼层名称
            this.floorName = response.data.data.floorName
            // 热卖商品
            this.hotGoods = response.data.data.hotGoods
        }
    })
    .catch((error) => {
    })
  }
}
</script>
<style scoped>
.search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height:2.2rem;
    color:#fff;
}
.swiper-area{
      width:20rem;
      clear:both;
  }
  .serch-input{
    width: 100%;
    height: 1.3rem;
    border:0;
    border-bottom:1px solid #fff;
    background-color: #e5017d;
  }
  .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
  .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
  .recommend-body{
       border-bottom: 1px solid #eee;
   }

  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
  .hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }


</style>

