<template>
  <div class="container f-page">
    <!-- 页头区域 -->
    <Header  :flag="true">
      <!-- <template v-slot:title>
        <div class="header-title" />
      </template> -->
    </Header>

    <!-- <div class="header-title" /> -->
    <!-- 内容区域 -->
    <div class="content flex-column">
      <div class="flex-row flex-between item1 mb10">
        <div class="top flex-row">
          <div class="top-left item1 flex-column fbox">
            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">
                <div class="item1 h-box leftbox flex-column" >
                  <div class="item1 box-top flex" >
                    <div class="flex-end setw100 " >
                      <div class="pubcolor">当日实时收入</div>

                      <span class="fyellow font-Italic">{{form.REALINCOME.realIncomeDay}}<i>万元</i></span>
                    </div>
                  </div>
                  <div class="item1 box-bottom" >
                    <div class="pubcolor">同比</div>
                    <p class="font-Italic" :class="[form.REALINCOME.dayUpDown==0?'colorGreen':'colorRed']">{{form.REALINCOME.realIncomedayDiffer}}<i>万元</i></p>
                  </div>
                </div>
                <div class="item1 h-middle pup-title"  >
                  <div class="actual-title pup-title"></div>
                </div>
                <div class="item1 h-box rightbox flex-column" >

                  <div class="item1 box-top flex" >
                    <div class="flex-end setw100">
                      <div class="pubcolor">累计实时收入</div>
                      <span class="fyellow font-Italic">{{form.REALINCOME.realIncomeMonth}}<i>亿元</i></span>
                    </div>
                  </div>
                  <div class="item1 box-bottom" >
                    <div class="pubcolor">同比</div>
                    <p class="font-Italic" :class="[form.REALINCOME.monthUpDown==0?'colorGreen':'colorRed']">{{form.REALINCOME.realIncomeMonthDiffer}}<i>万元</i></p>
                  </div>
                </div>
              </div>
              <div class="top-title"><span>当日实时收人</span></div>
            </div>
            <div class="item2 mapwrap" id='leftTopChart0'></div>
          </div>
          <!-- 地图-  ['CHANSERIES','QUASILOSS','BINDING','FUSE','FINANCIALSTAGING'] -->
          <div class="top-center item1 relative">
            <div class="maphead " >
              <span class="fblue">广东地图·</span>
              <i>{{cityname}}</i>
              <div class="line"></div>
            </div>

            <div  id='map' class="mapbox"></div>
          </div>

          <div class="top-left item1 flex-column fbox">
            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">
                <div class="item1 f-box leftbox flex-column boxc" >
                  <div class="pubcolor">月累计办理量</div>
                  <span class="fyellow font-Italic">{{form.G5_HANDLE.orderAmountMonth}}<i>户</i></span>
                </div>
                <div class="item1 h-middle pup-title" >
                  <div class="G5-title pup-title"></div>
                </div>
                <div class="item1 f-box rightbox flex-column boxc" >
                  <div class="pubcolor">环比</div>
                  <span class="font-Italic" :class="[form.G5_HANDLE.upDown==0?'colorGreen':'colorRed']">{{form.G5_HANDLE.upDown==0?'-':''}}{{form.G5_HANDLE.orderMoM}}<i>户</i></span>
                </div>
              </div>
              <div class="top-title"><span>日办理量走势图</span></div>
            </div>
            <div class="item2" id='leftTopChart1'></div>
          </div>

          <div class="top-left item1 flex-column fbox">
            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">
                <div class="item1 f-box leftbox flex-column boxc" >
                  <div class="pubcolor">月累计办理量</div>
                  <span class="fyellow font-Italic">{{form.CHANSERIES.orderAmountMonth}}<i>户</i></span>
                </div>
                <div class="item1 h-middle pup-title" >
                  <div class="P2-title pup-title"></div>
                </div>
                <div class="item1 f-box rightbox flex-column boxc" >
                  <div class="pubcolor">环比</div>
                  <span class="font-Italic" :class="[form.CHANSERIES.upDown==0?'colorGreen':'colorRed']">{{form.CHANSERIES.upDown==0?'-':''}}{{form.CHANSERIES.orderMoM}}<i>户</i></span>

                </div>
              </div>
              <div class="top-title"><span>月办理量走势图</span></div>
            </div>
            <div class="item2" id='leftTopChart2'></div>
          </div>

        </div>
      </div>
      <!----bottom底部----->
      <div class="flex-row flex-between item1 mb10">
        <div class="bottom flex-row ">
          <div class="bottom-left item1 flex-column fbox">

            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">
                <div class="item1 h-box leftbox flex-column" >

                  <div class="item1 box-top flex" >
                    <div class="flex-end setw100 " >
                      <div class="pubcolor">准流失规模</div>
                      <span class="fyellow font-Italic">{{form.QUASILOSS.orderAmountMonth}} <i>户</i></span>
                    </div>
                  </div>

                  <div class="item1 box-bottom flex-row" >
                    <div class="item1">
                      <div class="pubcolor">环比</div>
                      <p class="font-Italic" :class="[form.QUASILOSS.upDown==0?'colorGreen':'colorRed']">{{form.QUASILOSS.upDown==0?'-':''}}{{form.QUASILOSS.orderMoM}}<i>户</i></p>
                    </div>
                    <!-- <div  class="item1">
                         <div class="pubcolor">同比</div>
                         <p class="font-Italic" :class="[form.QUASILOSS.yoyUpDown==0?'colorGreen':'colorRed']">{{form.QUASILOSS.yoyUpDown==0?'-':''}}{{form.QUASILOSS.orderYoy}}<i>户</i></p>
                     </div>-->
                  </div>

                </div>
                <div class="item1 h-middle pup-title">
                  <div class="b1-title pup-title"></div>
                </div>
                <div class="item1 h-box rightbox flex-column">

                  <div class="item1 box-top flex">
                    <div class="flex-end setw100">
                      <div class="pubcolor">准流失率</div>
                      <span class="fyellow font-Italic">{{form.QUASILOSS.upDown==0?'-':''}}{{form.QUASILOSS.orderRateMonth}}%<i></i></span>
                    </div>
                  </div>
                  <div class="item1 box-bottom flex-row" >
                    <div class="item1">
                      <div class="pubcolor">环比</div>
                      <p class="font-Italic" :class="[form.QUASILOSS.rateMomUpDown==0?'colorGreen':'colorRed']">{{form.QUASILOSS.rateMomUpDown==0?'-':''}}{{form.QUASILOSS.rateMom}}%<i></i></p>
                    </div>
                    <!-- <div  class="item1">
                         <div class="pubcolor">同比</div>
                         <p class="font-Italic" :class="[form.QUASILOSS.rateYoyUpDown==0?'colorGreen':'colorRed']">{{form.QUASILOSS.rateYoyUpDown==0?'-':''}}{{form.QUASILOSS.rateYoy}}%<i></i></p>
                     </div>-->
                  </div>
                </div>
              </div>
              <div class="top-title"><span>准流失量走势图</span></div>
            </div>
            <div class="item2 mapwrap" id='leftTopChart9'></div>

          </div>
          <!--['','','','','FINANCIALSTAGING'] -->
          <div class="bottom-left item1 flex-column fbox">

            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">
                <div class="item1 h-box leftbox flex-column" >

                  <div class="item1 box-top flex" >
                    <div class="flex-end setw100 " >
                      <div class="pubcolor">月累计办理量</div>
                      <span class="fyellow font-Italic">{{form.BINDING.orderAmountMonth}}<i>户</i></span>
                    </div>
                  </div>
                  <div class="item1 box-bottom" >
                    <div class="pubcolor">环比</div>
                    <p class="font-Italic" :class="[form.BINDING.upDown==0?'colorGreen':'colorRed']">{{form.BINDING.upDown==0?'-':''}}{{form.BINDING.orderMoM}}<i>户</i></p>
                  </div>

                </div>
                <div class="item1 h-middle pup-title"  >
                  <div class="b2-title pup-title"></div>
                </div>

                <div class="item1 f-box rightbox flex-column boxc" >
                  <div class="pubcolor">渗透率</div>
                  <span class="font-Italic" :class="[form.BINDING.bUpDown==0?'colorGreen':'colorRed']">{{form.BINDING.bUpDown==0?'-':''}}{{form.BINDING.orderRateMonth}}%<i></i></span>
                </div>

              </div>
              <div class="top-title"><span>日办理量走势图</span></div>
            </div>
            <div class="item2 mapwrap" id='leftTopChart10'></div>

          </div>
          <div class="bottom-left item1 flex-column fbox">

            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">

                <div class="item1 f-box leftbox flex-column boxc" >
                  <div class="pubcolor">月累计办理量</div>
                  <span class="fyellow font-Italic">{{form.FUSE.orderAmountMonth}}<i>户</i></span>
                </div>

                <div class="item1 h-middle pup-title"  >
                  <div class="b3-title pup-title"></div>
                </div>


                <div class="item1 f-box rightbox flex-column boxc" >
                  <div class="pubcolor">环比</div>
                  <span class="font-Italic" :class="[form.FUSE.upDown==0?'colorGreen':'colorRed']">{{form.FUSE.upDown==0?'-':''}}{{form.FUSE.orderMoM}}<i>户</i></span>
                </div>


              </div>
              <div class="top-title"><span>日办理量走势图</span></div>
            </div>
            <div class="item2 mapwrap" id='leftTopChart3'></div>

          </div>
          <div class="bottom-left item1 flex-column fbox">

            <div class="top-header item2 flex-column flex-between" >
              <div class="flex-row item2">

                <div class="item1 f-box leftbox flex-column boxc" >
                  <div class="pubcolor">月累计办理量</div>
                  <span class="fyellow font-Italic">{{form.FINANCIALSTAGING.orderAmountMonth}}<i>户</i></span>
                </div>

                <div class="item1 h-middle pup-title"  >
                  <div class="b4-title pup-title"></div>
                </div>
                <div class="item1 f-box rightbox flex-column boxc" >
                  <div class="pubcolor">环比</div>
                  <span class="font-Italic" :class="[form.FINANCIALSTAGING.upDown==0?'colorGreen':'colorRed']">{{form.FINANCIALSTAGING.upDown==0?'-':''}}{{form.FINANCIALSTAGING.orderMoM}}<i>户</i></span>
                </div>
              </div>
              <div class="top-title"><span>日办理量走势图</span></div>
            </div>
            <div class="item2 mapwrap" id='leftTopChart4'></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from '@/views/gzBigScreen/components/headerBtn.vue'
  import cityBar from '@/config/citymanage/cityChart'
  import cityEcharts from '@/config/citymanage/cityEcharts'
  import cityEcharts1 from '@/config/citymanage/cityEcharts1'
  import earthChart from '@/config/citymanage/earthChart.js'
  import mapjson from '@/static/json/data-gd.json'
  import { cityQSTbyBusinessType, citybyBusinessType } from '@/api/bigscreen.js'

  export default {
    components: {
      Header,
    },
    data() {
      return {
        cityname:'广州',
        ids:'leftTopChart',
        mapid:'map',
        cityList:['REALINCOME','5G_HANDLE','CHANSERIES','FUSE','FINANCIALSTAGING'],
        cityLists:['QUASILOSS'],
        cityLists1:['BINDING'],
        param: {
          eparchyCode:'0020'
        },
        form:{
          REALINCOME:{ //实时收人
            realIncomeDay:'',
            realIncomeMonth:'',
            realIncomedayDiffer:'',
            realIncomeMonthDiffer:'',
            dayUpDown:'',
            monthUpDown:''
          },
          G5_HANDLE:{ //5G
            orderAmountMonth:'',
            orderMoM:'',//环比
            upDown:''
          },
          CHANSERIES:{ //2P
            orderAmountMonth:'',
            orderMoM:'',
            upDown:''
          },
          QUASILOSS:{//准流失
            orderAmountMonth:'',
            orderRateMonth:'',

            orderMoM:'', //准流失规模环比
            orderYoy:'', //准流失规模同比
            upDown:'',//环比正负
            yoyUpDown:'',//同比正负

            rateMom:'',  //准流失率 环比
            rateYoy:'',     //准流失率 同比
            rateMomUpDown:'', //准流失率 环比  正负
            rateYoyUpDown:''  //准流失率 同比 正负

          },
          BINDING:{ //强捆绑
            orderAmountMonth:'',
            orderMoM:'',
            orderRateMonth:'',
            upDown:'',
            bUpDown:''
          },
          FUSE:{ //固移融合
            orderAmountMonth:'',
            orderMoM:'',
            upDown:''
          },
          FINANCIALSTAGING:{ //金融分期
            orderAmountMonth:'',
            orderMoM:'',
            upDown:''
          }
          // orderAmountMonth:'', //月累计
          // orderMoM:'',//环比
          // orderRateMonth:'', //渗透率
          // upDown   环比正负 0降低，1增长  // 加减
          // yoyUpDown  同比正负

        }

      }
    },

    mounted() {
      this.updatePage();
      this.getearthData();
      this.updatePages();
      this.updatePages1();
    },
    methods: {
      change(data){

        this.cityname=data.name
        this.param.eparchyCode=data.code;
        this.updatePage();
        this.updatePages();
        this.updatePages1()
      },
      updatePage() {
        this.cityList.forEach((item,key)=>{
          this.getHttp(item,key);
        })
      },
      updatePages(){
        this.cityLists.forEach((item,key) =>{
          this.getHttps(item,key)
        })
      },
      updatePages1(){
        this.cityLists1.forEach((item,key) =>{
          this.getHttps1(item,key);
        })
      },
      getHttp(param,key){


        cityQSTbyBusinessType({
          businessType:param,
          eparchyCode:this.param.eparchyCode

        }).then(res=>{
          // console.log(res)

          let {rspCode,result}=res;

          if(rspCode=='0000'){
            if(param=='REALINCOME'){

              this.form.REALINCOME.realIncomeDay=result.orderResult.realIncomeDay
              this.form.REALINCOME.realIncomeMonth=result.orderResult.realIncomeMonth

              this.form.REALINCOME.realIncomedayDiffer=result.orderResult.realIncomedayDiffer
              this.form.REALINCOME.realIncomeMonthDiffer=result.orderResult.realIncomeMonthDiffer

              this.form.REALINCOME.dayUpDown=result.orderResult.dayUpDown
              this.form.REALINCOME.monthUpDown=result.orderResult.monthUpDown


            }else if(param=='5G_HANDLE'){

              this.form.G5_HANDLE.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.G5_HANDLE.orderMoM=result.orderResult.orderMoM;
              this.form.G5_HANDLE.upDown=result.orderResult.upDown;

            }else if(param=='CHANSERIES'){

              this.form.CHANSERIES.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.CHANSERIES.orderMoM=result.orderResult.orderMoM;
              this.form.CHANSERIES.upDown=result.orderResult.upDown;

            }else if(param=='FUSE'){

              this.form.FUSE.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.FUSE.orderMoM=result.orderResult.orderMoM;
              this.form.FUSE.upDown=result.orderResult.upDown;

            }else if(param=='FINANCIALSTAGING'){

              this.form.FINANCIALSTAGING.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.FINANCIALSTAGING.orderMoM=result.orderResult.orderMoM;
              this.form.FINANCIALSTAGING.upDown=result.orderResult.upDown;

            }
          }
          this.getbartData(result,key);

        })

      },
      getHttps1(param){

        cityQSTbyBusinessType({
          businessType:param,
          eparchyCode:this.param.eparchyCode

        }).then(res=>{

          let {rspCode,result}=res;

          if(rspCode=='0000'){
            if(param=='BINDING'){

              this.form.BINDING.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.BINDING.orderMoM=result.orderResult.orderMoM;
              this.form.BINDING.orderRateMonth=result.orderResult.orderRateMonth
              this.form.BINDING.bUpDown=result.orderResult.bUpDown;
              this.form.BINDING.upDown=result.orderResult.upDown;
            }
          }
          this.getEchart1(result);

        })

      },
      getHttps(param,key){

        cityQSTbyBusinessType({
          businessType:param,
          eparchyCode:this.param.eparchyCode

        }).then(res=>{

          let {rspCode,result}=res;

          if(rspCode=='0000'){
            if(param=='QUASILOSS'){ //准流失 （同比， 准流失率，准流失规模）

              this.form.QUASILOSS.orderAmountMonth=result.orderResult.orderAmountMonth;
              this.form.QUASILOSS.orderMoM=result.orderResult.orderMoM;

              this.form.QUASILOSS.orderRateMonth=result.orderResult.orderRateMonth;


              this.form.QUASILOSS.yoyUpDown=result.orderResult.yoyUpDown;
              this.form.QUASILOSS.orderYoy=result.orderResult.orderYoy;
              this.form.QUASILOSS.upDown=result.orderResult.upDown;

              this.form.QUASILOSS.rateMom=result.orderResult.rateMom;
              this.form.QUASILOSS.rateMomUpDown=result.orderResult.rateMomUpDown;

              this.form.QUASILOSS.rateYoy =result.orderResult.rateYoy ;
              this.form.QUASILOSS.rateYoyUpDown=result.orderResult.rateYoyUpDown;

            }
          }
          this.getEchart(result);

        })
      },
      //地图
      getearthData(){
        earthChart.initZhengceCategory(mapjson,this.mapid,this)
      },
      //6柱状图
      getbartData(res,key){

        let id=this.ids+key

        cityBar.initChart(res,id,this) //圆柱
      },

      getEchart(res){
        let id=this.ids+9
        cityEcharts.initEcharts(res,id,this)
      },
      getEchart1(res){
        let id=this.ids+10
        cityEcharts1.initCharts1(res,id,this)
      }

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  //$light-blue: #1EFFF2;
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 7920px;
    height: 2160px;
    /* width: 100%;
     height: 100%;*/
    color: #fff;

    background-image: image-set(
        url("~@/assets/images/bigScreen/bg.jpg") 1x,
        url("~@/assets/images/bigScreen/bg@2x.jpg") 2x
    );
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .top-title{

      >span{
        font-family:'YouSheBiaoTiHei';
        display:block;
        // text-align: left;
        width: 100%;
        background-image: image-set(
            url("~@/assets/images/bigScreen/citymanage/title.png") 1x,
            url("~@/assets/images/bigScreen/citymanage/title@2x.png") 2x
        );
        line-height:25px;
        padding-left:12%;
        background-repeat: no-repeat;
        background-size:contain;
      }
    }
    .maphead{
      font-family:'PangMenZhengDaoBiaoTiTi';
      color:#fff;
      font-size:20px;
      position: absolute;
      top:6%;
      left: 4%;
      display: inline-block;


      .line{
        position: absolute;
        // height: 40px;
        height: 100%;

        bottom:-18px;
        width: 100%;
        background-image: image-set(
            url("~@/assets/images/bigScreen/citymanage/line.png") 1x,
            url("~@/assets/images/bigScreen/citymanage/line@2x.png") 2x
        );
        background-repeat: no-repeat;
        background-size: cover;
        background-position:0 bottom;
      }

      .fblue{
        //font-family:'PangMenZhengDao';
        color:#00FFFF;

      }
      i{
        font-style: normal;
      }
    }

    .header-title {
      // margin-top: 22px;
      width: 176px;
      max-width: 352px;
      height: 42px;
      // background-image: image-set(
      //     url("~@/assets/images/bigScreen/citymanage/header-title.png") 1x,
      //     url("~@/assets/images/bigScreen/citymanage/header-title@2x.png") 2x
      // );
      // background-repeat: no-repeat;
      // background-size: contain;
      // background-position: center;

    }
    .content{

      padding:0 15px 15px 15px;
      height: 100%;
      .top,.bottom{
        >.item1{
          margin-right: 20px;
        }
        >.item1:last-child{
          margin-right:0;
        }
      }
      .fbox{
        padding:10px 20px 14px 20px;
      }

      .top-header{

        .h-box{
          //position: relative;
          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/box.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/box@2x.png") 2x
          );
          background-repeat: no-repeat;
          background-size:contain;
          background-position:center ;

          // right: -40px;
          >div{
            text-align: center;
          }

          .box-bottom{
            >div{
              margin-top:10px
            }
          }
        }
        .f-box{
          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/box1.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/box1@2x.png") 2x
          );
          background-repeat: no-repeat;
          background-size:contain;
          background-position:center ;

        }
        .pup-title{
          background-repeat: no-repeat;
          background-size:contain;
          background-position:center;
        }
        .h-middle{
          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/t1.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/t1@2x.png") 2x
          );
          .actual-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl1.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl1@2x.png") 2x
            );
            height: 82%;
          }
          .G5-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl2.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl2@2x.png") 2x
            );
            height: 92%;
          }
          .P2-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl3.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl3@2x.png") 2x
            );
            height:92%;
          }
          .b1-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl4.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl4@2x.png") 2x
            );
            height:100%;
          }
          .b2-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl5.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl5@2x.png") 2x
            );
            height:100%;
          }
          .b3-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl6.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl6@2x.png") 2x
            );
            height:92%;
          }
          .b4-title{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/tl7.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/tl7@2x.png") 2x
            );
            height:92%;
          }
        }
      }
      .top{
        width: 100%;
        .top-left{
          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/top.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/top@2x.png") 2x
          );
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .top-center{

          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/map.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/map@2x.png") 2x
          );
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .mapbox{
            background-image: image-set(
                url("~@/assets/images/bigScreen/citymanage/q.png") 1x,
                url("~@/assets/images/bigScreen/citymanage/q@2x.png") 2x
            );
            background-repeat: no-repeat;
            background-size:contain;
            background-position: center;
            height: 100%;
          }
        }
      }
      .bottom{
        width: 100%;
        .bottom-left{
          // position: relative;
          background-image: image-set(
              url("~@/assets/images/bigScreen/citymanage/bottom.png") 1x,
              url("~@/assets/images/bigScreen/citymanage/bottom@2x.png") 2x
          );
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }

    }
  }

  @media (min-width: 3840px) {
    .header{
      height: 85px;
    }
  }
  @media (min-width: 7000px) {
    .header{
      height: 145px;
    }
  }

  .colorRed{
    color: #FF4C7A;
  }
  .colorGreen{
    color: #19DC7C;
  }

  /*---*/
  .f-page .flex-end {
    align-self: center;
  }
  .f-page .box-bottom{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .f-page .box-bottom .item1{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .pubcolor{
    font-size: 30px;
    font-family: MicrosoftYaHei;
  }
  .font-Italic{
    font-size: 36px;
    font-family: DigifaceWide;
  }
  .font-Italic>i{
    font-size: 30px;
    font-family: YouSheBiaoTiHei;
  }
  .flex{
    flex-flow: initial;
  }
  .top-title{
    display: flex;
    flex-flow: row nowrap;
    padding-top: 10px;
  }
  .top-title>span{
    display: block;
    min-width: 581px !important;
    height: 70px ;
    line-height: 70px !important;
    padding-left: 109px !important;
    font-size: 2.25rem;
    background-size: 100% 100%;
  }
  .top-header{
    padding-top: 30px;
  }
  .f-page .leftbox {
    left: 68px;
  }
  .f-page .rightbox {
    left: -68px;
  }
</style>
