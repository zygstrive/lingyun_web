
<template>
  <div class="one-container">
    <div class="center">
      <div class="top-content">
        <div class="top-left">
          <div class="topBg">
            <div class="title">月办理量</div>
            <div class="num"><span>{{allData.monthOrderNum ? (allData.monthOrderNum/10000).toFixed(2) : '-'}}</span> 万</div>
          </div>
          <div class="topBg">
            <div class="title">环比</div>
            <div class="num1">
              <div class="chartLine" id="topChart1"></div>
              <div :class="['chartNum',allData.monthUpDown == 1 ? 'colorRed' : 'colorGreen']">
                {{allData.monthMonRate || '-'}}<span>%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="top-left">
          <div class="topBg">
            <div class="title">日办理量</div>
            <div class="num"><span>{{allData.dayOrderNum ? (allData.dayOrderNum/10000).toFixed(2) : '-'}}</span> 万</div>
          </div>
          <div class="topBg">
            <div class="title">环比</div>
            <div class="num1">
              <div class="chartLine" id="topChart2"></div>
              <div :class="['chartNum',allData.dayUpDown == 1 ? 'colorRed' : 'colorGreen']">
                {{allData.dayMonRate || '-'}}<span>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-img" >
        <img src="~@/assets/images/bigScreen/channel/img1.png"/>
      </div>
      <div class="top-content1">
        <div v-for="(i,index) in topList" :key="i.name" :class="['item', {'itembg2': index !== 2}]">
          <div class="bigTitle">{{i.name}}</div>
          <div class="topDiv">
            <div class="topBg wid30">
              <div class="title">月办理量</div>
              <div class="num"><span>{{i.monthValue ? (i.monthValue/10000).toFixed(2) : '-'}}</span> 万</div>
            </div>
            <div class="topBg wid70">
              <div class="title">环比</div>
              <div class="num1">
                <div class="chartLine" :id="'monthRate' + index"></div>
                <div :class="['chartNum',i.monthUpDown == 1 ? 'colorRed' : 'colorGreen']">
                  {{i.monthRate}}<span>%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="topDiv">
            <div class="topBg wid30">
              <div class="title">日办理量</div>
              <div class="num"><span>{{i.dayValue ? (i.dayValue/10000).toFixed(2) : '-'}}</span> 万</div>
            </div>
            <div class="topBg wid70">
              <div class="title">环比</div>
              <div class="num1">
                <div class="chartLine" :id="'dayRate' + index"></div>
                <div :class="['chartNum',i.dayUpDown == 1 ? 'colorRed' : 'colorGreen']">
                  {{i.dayRate}}<span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="lineItem" v-for="i in bottomChart" :key="i.id">
        <div class="title">{{i.title}}</div>
        <div class="lineChart" :id="i.id"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import barChart from './components/bar.js'
  import lineChart from './components/line.js'
  import { queryAllChnlView, queryAllChnlQST} from '@/api/bigscreen.js'
  export default {
    name: 'channelOne',
    data () {
      return {
        allData: {},
        topList: [],
        bottomChart:[]
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getData()
        this.initLineChart()
      })
    },
    methods:{
      // 上
      getData() {
        let that = this
        queryAllChnlView({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            that.allData = result.allchnl || ''
            that.topList = [{
              name: '线上运营',
              monthValue: result.inet ? result.inet.monthOrderNum : '',
              monthRate: result.inet ? result.inet.monthMonRate : '-',
              monthUpDown: result.inet ? result.inet.monthUpDown : '-',
              dayValue: result.inet ? result.inet.dayOrderNum : '',
              dayRate: result.inet ? result.inet.dayMonRate : '-',
              dayUpDown: result.inet ? result.inet.dayUpDown : '-',
            },{
              name: '渠道协同',
              monthValue: result.chncb ? result.chncb.monthOrderNum : '',
              monthRate: result.chncb ? result.chncb.monthMonRate : '-',
              monthUpDown: result.chncb ? result.chncb.monthUpDown : '-',
              dayValue: result.chncb ? result.chncb.dayOrderNum : '',
              dayRate: result.chncb ? result.chncb.dayMonRate : '-',
              dayUpDown: result.chncb ? result.chncb.dayUpDown : '-',
            },{
              name: '外呼',
              monthValue: result.call ? result.call.monthOrderNum : '',
              monthRate: result.call ? result.call.monthMonRate : '-',
              monthUpDown: result.call ? result.call.monthUpDown : '-',
              dayValue: result.call ? result.call.dayOrderNum : '',
              dayRate: result.call ? result.call.dayMonRate : '-',
              dayUpDown: result.call ? result.call.dayUpDown : '-',
            }]
            that.initBarChart()
          }
        })
      },
      initBarChart() {
        const allData = this.allData
        let top = [{
          id: 'topChart1',
          value: allData.monthMonRate
        },{
          id: 'topChart2',
          value: allData.dayMonRate
        }]
        barChart.initChart(top[0])
        barChart.initChart(top[1])

        let data = []
        let data1 = []
        this.topList.forEach((i, index) => {
          data.push({
            id: 'monthRate' + index,
            value: i.monthRate
          })
          data1.push({
            id: 'dayRate' + index,
            value: i.dayRate
          })
        });
        setTimeout(() => {
          let list = data.concat(data1)
          list.forEach((i) => {
            barChart.initChart(i)
          })
        })
      },
      // 下
      initLineChart() {
        let that = this
        queryAllChnlQST({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            if(result) {
              let whxAxis = [];
              let whvalue = [];
              result && result.call.length > 0 && result.call.forEach( i =>{
                whxAxis.push(i.dayOfMonth)
                whvalue.push(i.orderNum)
              })

              let xsxAxis = [];
              let xsvalue = [];
              result && result.inet.length > 0 && result.inet.forEach( i =>{
                xsxAxis.push(i.dayOfMonth)
                xsvalue.push(i.orderNum)
              })

              let xtxAxis = [];
              let xtvalue = [];
              result && result.chncb.length > 0 && result.chncb.forEach( i =>{
                xtxAxis.push(i.dayOfMonth)
                xtvalue.push(i.orderNum)
              })
              that.bottomChart = [{
                id: 'xsChart',
                title: '线上运营日趋势图',
                xAxis: xsxAxis,
                value: xsvalue
              },{
                id: 'qdChart',
                title: '渠道协同日趋势图',
                xAxis: xtxAxis,
                value: xtvalue
              },{
                id: 'whChart',
                title: '外呼日趋势图',
                xAxis: whxAxis,
                value: whvalue
              }]
              setTimeout(() => {
                that.bottomChart.forEach( i => {
                  lineChart.initChart(i)
                })
              }, 0);
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.one-container{
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/images/bigScreen/channel/border2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    font-size: 16px;
    font-family: Microsoft YaHei;
    .center{
      position: relative;
      padding: 1.875rem 4.375rem;
      height: 50%;
    }
    .center:last-child{
      padding-top: 0;
      height: 49%;
    }
    .colorRed{
      color: #FC8585;
    }
    .colorGreen{
      color: #35FD47;
    }
    .top-content{
      width: 93%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      padding-top: 1%;
      .top-left{
        width: 19.375rem;
      }
      .topBg:first-child{
        margin-bottom: .5rem;
      }
    }
    .top-img{
      text-align: center;
      padding-left: 8.75rem;
      padding-right: 6.25rem;
      height: calc(100% - 21.875rem);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .topBg{
      width: 19.375rem;
      height: 6.5625rem;
      padding: .85rem 1.875rem;
      background: url('~@/assets/images/bigScreen/channel/bg2.png');
      background-size: 100% 100%;
      overflow: hidden;
      .title{
        font-size: 1.25rem;
        color: #6BD0FF;
        font-family: Microsoft YaHei;
      }
      .num{
        font-size: 1.5rem;
        font-family: DigifaceWide;
        text-align: center;
        color: #FFDF60;
        span{
          font-size: 2.625rem;
        }
      }
      .num1{
        display: flex;
        position: relative;
        .chartLine{
          width: 55%;
        }
        .chartNum{
          flex: 1;
          text-align: center;
          font-size: 1.6rem;
          font-family: DigifaceWide;
          span{
            font-size: 1.2rem;
          }
        }
      }
    }
    .top-content1{
      display: flex;
      align-items: center;
      height: 21.875rem;
      .item:first-child{
        margin: 0;
      }
      .item{
        flex: 3;
        height: 100%;
        background-image: url('~@/assets/images/bigScreen/channel/border4.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-left: 1.5625rem;
        padding: 3.75rem 1.25rem 0 1.875rem;
        position: relative;
        .bigTitle{
          font-size: 30px;
          font-family: PangMenZhengDaoBiaoTiTi;
          color: #00FFFF;
          position: absolute;
          top: 4px;
          left: 13%;
        }
      }
      .itembg2{
        background-image: url('~@/assets/images/bigScreen/channel/border5.png');
        .bigTitle{
          left: 14%;
        }
      }
      .topDiv{
        display: flex;
        margin-bottom: 2.9375rem;
        .wid30{
          width: 40%;
          margin-right: 1rem;
        }
        .wid70{
          flex: 1;
        }
        .topBg{
          background: url('~@/assets/images/bigScreen/channel/bg3.png');
          background-size: 100% 100%;
        }
        .num{
          margin-top: 10px;
          font-size: 1.125rem;
          color: #FFDF60;
          span{
            font-size: 2rem;
          }
        }
      }
    }
    .lineItem{
      width: 100%;
      height: 32%;
      // padding-top: 1.25rem;
      .title{
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
        height: calc(100% - 6.25rem);
      }
    }
}
</style>
