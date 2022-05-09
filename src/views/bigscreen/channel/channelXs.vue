<template>
    <div class="two-container">
        <div class="title">线上运营</div>
        <div class="center">
            <div class="topTitle">
                <div class="item">触达量：<span class="f48">{{allData.touchNum && (allData.touchNum/10000).toFixed(2) || '-'}}</span><span class="f26">万</span></div>
                <div class="item">办理量：<span class="f48">{{allData.orderNum && (allData.orderNum/10000).toFixed(2) || '-'}}</span><span class="f26">万</span></div>
                <div class="item">转化率：<span class="f48">{{allData.covorRate || '-'}}</span><span class="f26">%</span></div>
            </div>
            <div class="topCon">
              <div class="topLeft color">
                  <div v-for="(i,index) in topList.slice(0 ,3)" :key="i.name" :class="['item', {'active': active == index +1}]">
                      <div class="itemName">{{i.name}}</div>
                      <div class="itemCon">
                          <el-row class="row" v-for="(c,index) in i.child" :key="index">
                              <el-col :span="3">
                                  <img src="~@/assets/images/bigScreen/channel/icon1.png"/>
                              </el-col>
                              <el-col :span="12"><span class="f18 blue">{{c.name}}：</span>{{c.value}}</el-col>
                              <el-col :span="6" :class="[c.rate>0?'red':'green']">
                                {{c.rate}}<span class="f18">%</span>
                              </el-col>
                              <el-col :span="3">
                                  <div :class="[c.rate > 0?'icon1':'icon']"></div>
                              </el-col>
                          </el-row>
                      </div>
                  </div>
              </div>
              <div class="img">
                  <div class="imgText left">
                    <div class="color">自有</div>
                    <div class="blue">（3个）</div>
                  </div>
                  <img src="~@/assets/images/bigScreen/channel/img2.png"/>
                  <div class="imgText right">
                    <div class="color1">合作</div>
                    <div class="blue">（3个）</div>
                  </div>
              </div>
              <div class="topLeft color1">
                  <div v-for="(i,index) in topList.slice(3,6)" :key="i.name" :class="['item', {'active': active == index + 4}]">
                      <div class="itemName">{{i.name}}</div>
                      <div class="itemCon">
                          <el-row class="row" v-for="(c,index) in i.child" :key="index">
                              <el-col :span="3">
                                  <img src="~@/assets/images/bigScreen/channel/icon2.png"/>
                              </el-col>
                              <el-col :span="12"><span class="f18 blue">{{c.name}}：</span>{{c.value}}</el-col>
                              <el-col :span="6" :class="[c.rate>0?'red':'green']">
                                {{c.rate}}<span class="f18">%</span>
                              </el-col>
                              <el-col :span="3">
                                  <div :class="[c.rate > 0?'icon1':'icon']"></div>
                              </el-col>
                          </el-row>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="center">
          <div v-for="(i,index) in bottomChart" :key="i.id" :class="['chartItem', {'paddLeft': index%2 == 0}]">
            <div class="chartTitle">{{i.title}}</div>
            <div class="lineChart">
              <div class="chartRate">
                <div class="item">占比：<span>{{i.rate}}</span>%</div>
                <div class="item">月环比：<span :class="[i.mRate>0?'colorRed':'colorGreen']">{{i.mRate}}</span>%</div>
              </div>
              <div style="width:100%;height:100%" :id="i.id"></div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import lineChart from './components/doubleLine.js'
  import { queryIntChnlView, queryIntChnlFenLei} from '@/api/bigscreen.js'
  export default {
    name: 'channelXs',
    data () {
      return {
        active: 1,
        allData: '',
        topList: [],
        bottomChart:[{
          code: '3000001',
          id: '5gChart',
          title: '5G运营'
        },{
          code: '3000002',
          id: 'jzChart',
          title: '价值提升'
        },{
          code: '3000003',
          id: 'wxChart',
          title: '维系保有'
        },{
          code: '3000006',
          id: 'stChart',
          title: '生态运营'
        }]
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.init()
        this.bottomChart.forEach( (i, index) => {
          this.initLineChart(i, index)
        })
      })
    },
    methods:{
      init() {
        let that = this
        that.topList = [{
          name: '大流量APP',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        },{
          name: '广东联通官微',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        },{
          name: '场景化短信',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        },{
          name: '微信充值',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        },{
          name: '淘宝充值',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        },{
          name: '2B/2C',
          child:[{
              name: '触达量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '办理量',
              value: '-',
              rate: '-',
              status: 1
          },{
              name: '转化率',
              value: '-',
              rate: '-',
              status: 1
          }]
        }]
        queryIntChnlView({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            that.allData = result.ONLINALL
            that.topList = [{
              name: '大流量APP',
              child:[{
                  name: '触达量',
                  value: result.GDST && result.GDST.touchNum || '-',
                  rate: result.GDST && result.GDST.touchNumRate || '-',
                  status: result.GDST && result.GDST.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.GDST && result.GDST.orderNum || '-',
                  rate: result.GDST && result.GDST.orderNumRate || '-',
                  status: result.GDST && result.GDST.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.GDST && result.GDST.covorRate || '-',
                  rate: result.GDST && result.GDST.covorRateCycle || '-',
                  status: result.GDST && result.GDST.covorRateUD || 1
              }]
            },{
              name: '广东联通官微',
              child:[{
                  name: '触达量',
                  value: result.GDGW && result.GDGW.touchNum || '-',
                  rate: result.GDGW && result.GDGW.touchNumRate || '-',
                  status: result.GDGW && result.GDGW.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.GDGW && result.GDGW.orderNum || '-',
                  rate: result.GDGW && result.GDGW.orderNumRate || '-',
                  status: result.GDGW && result.GDGW.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.GDGW && result.GDGW.covorRate || '-',
                  rate: result.GDGW && result.GDGW.covorRateCycle || '-',
                  status: result.GDGW && result.GDGW.covorRateUD || 1
              }]
            },{
              name: '场景化短信',
              child:[{
                  name: '触达量',
                  value: result.GDSMS && result.GDSMS.touchNum || '-',
                  rate: result.GDSMS && result.GDSMS.touchNumRate || '-',
                  status: result.GDSMS && result.GDSMS.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.GDSMS && result.GDSMS.orderNum || '-',
                  rate: result.GDSMS && result.GDSMS.orderNumRate || '-',
                  status: result.GDSMS && result.GDSMS.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.GDSMS && result.GDSMS.covorRate || '-',
                  rate: result.GDSMS && result.GDSMS.covorRateCycle || '-',
                  status: result.GDSMS && result.GDSMS.covorRateUD || 1
              }]
            },{
              name: '微信充值',
              child:[{
                  name: '触达量',
                  value: result.WECHAT && result.WECHAT.touchNum || '-',
                  rate: result.WECHAT && result.WECHAT.touchNumRate || '-',
                  status: result.WECHAT && result.WECHAT.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.WECHAT && result.WECHAT.orderNum || '-',
                  rate: result.WECHAT && result.WECHAT.orderNumRate || '-',
                  status: result.WECHAT && result.WECHAT.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.WECHAT && result.WECHAT.covorRate || '-',
                  rate: result.WECHAT && result.WECHAT.covorRateCycle || '-',
                  status: result.WECHAT && result.WECHAT.covorRateUD || 1
              }]
            },{
              name: '淘宝充值',
              child:[{
                  name: '触达量',
                  value: result.ALIPAYXP && result.ALIPAYXP.touchNum || '-',
                  rate: result.ALIPAYXP && result.ALIPAYXP.touchNumRate || '-',
                  status: result.ALIPAYXP && result.ALIPAYXP.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.ALIPAYXP && result.ALIPAYXP.orderNum || '-',
                  rate: result.ALIPAYXP && result.ALIPAYXP.orderNumRate || '-',
                  status: result.ALIPAYXP && result.ALIPAYXP.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.ALIPAYXP && result.ALIPAYXP.covorRate || '-',
                  rate: result.ALIPAYXP && result.ALIPAYXP.covorRateCycle || '-',
                  status: result.ALIPAYXP && result.ALIPAYXP.covorRateUD || 1
              }]
            },{
              name: '2B/2C',
              child:[{
                  name: '触达量',
                  value: result.CH2B2C && result.CH2B2C.touchNum || '-',
                  rate: result.CH2B2C && result.CH2B2C.touchNumRate || '-',
                  status: result.CH2B2C && result.CH2B2C.touchNumRateUD || 1
              },{
                  name: '办理量',
                  value: result.CH2B2C && result.CH2B2C.orderNum || '-',
                  rate: result.CH2B2C && result.CH2B2C.orderNumRate || '-',
                  status: result.CH2B2C && result.CH2B2C.orderNumRateUD || 1
              },{
                  name: '转化率',
                  value: result.CH2B2C && result.CH2B2C.covorRate || '-',
                  rate: result.CH2B2C && result.CH2B2C.covorRateCycle || '-',
                  status: result.CH2B2C && result.CH2B2C.covorRateUD || 1
              }]
            }]

            setInterval(() => {
              that.active++
              if(that.active > 6){
                that.active = 1
              }
            }, 5000);
          }
        })
      },

      initLineChart(val, index) {
        let that = this
        queryIntChnlFenLei({ businessType: val.code }).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            let chart = []
            let PERMONTHList = []
            result && result.PERMONTH && result.PERMONTH.length > 0 && result.PERMONTH.forEach(i => {
              PERMONTHList.push(i.touchNum)
            })
            let CURMONTHList = []
            result && result.CURMONTH && result.CURMONTH.length > 0 && result.CURMONTH.forEach(i => {
              CURMONTHList.push(i.touchNum)
            })
            chart.CURMONTH = CURMONTHList
            chart.PERMONTH = PERMONTHList
            let data = {
              id: val.id,
              title: val.title,
              rate: (result.ratioRate || result.ratioRate == 0) ? result.ratioRate : '-',
              mRate: (result.cycleRate || result.cycleRate == 0) ? result.cycleRate : '-',
              chart:chart
            }
            // that.bottomChart[index] = data
            that.$set(that.bottomChart, index, data)
            lineChart.initChart(data)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.two-container{
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/images/bigScreen/channel/border3.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    font-size: 16px;
    .title{
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 48px;
      font-family: PangMenZhengDaoBiaoTiTi;
      font-weight: 400;
      color: #33ACDE;
      top: 2px;
    }
    .center{
      width: 100%;
      padding: 1.875rem 4.375rem;
      height: 50%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
    }
    .center:last-child{
      padding-top: 0;
      height: 49%;
    }
    .topTitle{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2% 15% 1%;
      .item{
        font-size: 1.875rem;
        color: #CCFEFF;
        flex: 1;
      }
      span{
        color: #FFFF00;
      }
      .f48{
        font-size: 3rem;
        font-family: 'DigifaceWide';
      }
      .f36{
        font-size: 2.25rem;
        font-family: 'YouSheBiaoTiHei';
      }
    }
    .topCon{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: calc(100% - 8.125rem);
      .color{
        color: #FFDF60;
      }
      .color1{
        color: #00FFFF;
      }
      .green{
        color: #19DC7C;
      }
      .red{
        color: #FD584F;
      }
      .blue{
        color: #CCFEFF;
      }
      .topLeft{
        width: 30%;
        height: 100%;
        .item{
          width: 100%;
          height: 32%;
          padding: 1.5rem 1.5rem 0 2.5rem;
          margin-bottom: 3%;
          background-image: url('~@/assets/images/bigScreen/channel/bg1.png');
          background-size: 100% 100%;
        }
        .item:last-child{
          margin-bottom: 0;
        }
        .active{
          background-image: url('~@/assets/images/bigScreen/channel/bg1-on.png');
        }
        .itemName{
          font-size: 1.875rem;
          font-family: YouSheBiaoTiHei;
          // margin-bottom: .5rem;
        }
        .itemCon{
          font-size: 1.125rem;
        }
        .row{
          font-size: 1.8rem;
          font-family: DigifaceWide;
          line-height: 3.125rem;
          img{
            vertical-align: middle;
          }
          .f18{
            font-size: 1.125rem;
          }
        }
        .icon{
          width: 0;
          height: 0;
          border: 6px solid;
          margin: 15px auto;
          border-color: #19DC7C transparent transparent;
        }
        .icon1{
          width: 0;
          height: 0;
          border: 6px solid;
          margin: 15px auto;
          border-color: transparent transparent #FD584F;
        }
      }
      .img{
        flex: 1;
        height: 100%;
        position: relative;
        .imgText{
          position: absolute;
          top: 50%;
          margin-top: -6.125rem;
          font-size: 3rem;
          font-family: PangMenZhengDaoBiaoTiTi;
          width: 6.25rem;
          text-align: center;
          div:last-child{
            font-size: 1.5rem;
          }
        }
        .left{
          left: 1%;
        }
        .right{
          right: 1%;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .padding{
      padding: 3.125rem 3.75rem;
    }
    .paddLeft{
      padding-right: 2%;
    }
    .chartItem{
      width: 50%;
      height: 50%;
      .chartTitle{
        font-size: 2.25rem;
        font-family: YouSheBiaoTiHei;
        color: #14DBFF;
        height: 4.375rem;
        line-height: 4.8125rem;
        margin: 1.25rem 0 .625rem;
        padding-left: 1.875rem;
        background-image: url('~@/assets/images/bigScreen/channel/bg8.png');
        background-repeat: no-repeat;
      }
      .lineChart{
        width: 100%;
        padding: .25rem 1.25rem;
        height: calc(100% - 6.25rem);
        background-image: url('~@/assets/images/bigScreen/channel/border6.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
      }
      .chartRate{
        position: absolute;
        right: 5%;
        top: 5%;
        color: #CCFEFF;
        font-size: 1.0625rem;
        line-height: 3.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .item{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
        }
        span{
          padding: 0 10px;
          display: block;
          height: 3.125rem;
          font-family: DigifaceWide;
          color: #fff;
          font-size: 2.125rem;
          background-image: url('~@/assets/images/bigScreen/channel/bg6.png');
          background-size: 100% 100%;
          margin-right: 5px;
        }
        .colorRed {
          color: #FF4C7A
        }
        .colorGreen {
          color: #19DC7C
        }
      }
    }
}
</style>
