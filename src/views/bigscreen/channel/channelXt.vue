<template>
    <div class="three-container">
        <div class="title">渠道协同</div>
        <div class="center">
          <div v-for="(i,index) in topList" :key="index" :class="['item', {'mar': index%2 == 0}]">
            <div class="itemName">
              <img :src="i.url"/>
            </div>
            <div class="itemCon">
              <div class="itemNum">
                <div class="itemNumCenter" v-for="(c, ind) in i.list" :key="ind">
                  <div class="itemNumLeft">
                    <span>{{c.name}}</span>
                    <div class="line"></div>
                  </div>
                  <span>{{c.value}}</span>
                </div>
              </div>
              <img src="~@/assets/images/bigScreen/channel/img3.png"/>
              <div class="itemRate">
                <div>覆盖率</div>
                <div class="f36">{{i.rate}}%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="center padding">
          <div class="content">
            <div v-for="i in bottomChart.slice(0,4)" :key="i.name" :span="6" class="col">
              <div class="colName">{{i.name}}</div>
              <div class="colImg"><img :src="i.url"/> </div>
              <div class="colText">当月办理量</div>
              <div class="colValue">
                {{i.value ? (i.value > 10000 ? (i.value / 10000).toFixed(2) : i.value) : '-'}} <span v-if="i.value > 10000">万</span>
              </div>
              <div :class="['colRate', i.upDown == 1 ? 'colorRed' : 'colorGreen']">
                <span>环比</span> {{i.rate}}%
              </div>
            </div>
          </div>
          <div class="rowBg"></div>
          <div class="content marTop">
            <div v-for="i in bottomChart.slice(4,7)" :key="i.name" :span="6" class="col">
              <div class="colName">{{i.name}}</div>
              <div class="colImg"><img :src="i.url"/> </div>
              <div class="colText">当月办理量</div>
              <div class="colValue">
                {{i.value ? (i.value > 10000 ? (i.value / 10000).toFixed(2) : i.value) : '-'}} <span v-if="i.value > 10000">万</span>
              </div>
              <div :class="['colRate', i.upDown == 1 ? 'colorRed' : 'colorGreen']">
                <span>环比</span> {{i.rate}}%
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import { queryChcnbLouDou, queryChcnbChanNeng} from '@/api/bigscreen.js'
  export default {
    name: 'channelXt',
    data () {
      return {
        topList:[],
        bottomChart:[]
      }
    },
    mounted() {
      this.getTopList()
      this.getBottomList()
    },
    methods:{
      getTopList() {
        let that = this
        queryChcnbLouDou({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            // console.log(result.GD-WOSALE)
            that.topList = [{
              url: require('../../../assets/images/bigScreen/channel/title-cb.png'),
              list:[{
                  name: '接触量',
                  value: result.CBSS && result.CBSS.touchNum || '-'
                },{
                  name: '弹窗量',
                  value: result.CBSS && result.CBSS.popNum || '-'
                },{
                  name: '办理量',
                  value: result.CBSS && result.CBSS.orderNum || '-'
                }],
                rate: result.CBSS && result.CBSS.covorRate || '-'
              },{
                url: require('../../../assets/images/bigScreen/channel/title-wo.png'),
                list:[{
                  name: '接触量',
                  value: result.GDWOSALE && result.GDWOSALE.touchNum || '-'
                },{
                  name: '弹窗量',
                  value: result.GDWOSALE && result.GDWOSALE.popNum || '-'
                },{
                  name: '办理量',
                  value: result.GDWOSALE && result.GDWOSALE.orderNum || '-'
                }],
                rate: result.GDWOSALE && result.GDWOSALE.covorRate || '-'
              },{
                url: require('../../../assets/images/bigScreen/channel/title-new.png'),
                list:[{
                  name: '接触量',
                  value: result.XKF && result.XKF.touchNum || '-'
                },{
                  name: '弹窗量',
                  value: result.XKF && result.XKF.popNum || '-'
                },{
                  name: '办理量',
                  value: result.XKF && result.XKF.orderNum || '-'
                }],
                rate: result.XKF && result.XKF.covorRate || '-'
              },{
                url: require('../../../assets/images/bigScreen/channel/title-wocf.png'),
                list:[{
                  name: '接触量',
                  value: result.GDCF && result.GDCF.touchNum || '-'
                },{
                  name: '弹窗量',
                  value: result.GDCF && result.GDCF.popNum || '-'
                },{
                  name: '办理量',
                  value: result.GDCF && result.GDCF.orderNum || '-'
                }],
                rate: result.GDCF && result.GDCF.covorRate || '-'
            }]
          }
        })
      },
      getBottomList() {
        let that = this
        queryChcnbChanNeng({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            that.bottomChart = [{
              name: '营业渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_yyqd.png'),
              value: result.YYQD && result.YYQD.orderNum || '',
              rate: result.YYQD && result.YYQD.momRate || '-',
              upDown: result.YYQD && result.YYQD.upDown || '-'
            },{
              name: 'WO创富',
              url: require('../../../assets/images/bigScreen/channel/icon_fzqd.png'),
              value: result.WOCF && result.WOCF.orderNum || '',
              rate: result.WOCF && result.WOCF.momRate || '-',
              upDown: result.WOCF && result.WOCF.upDown || '-'
            },{
              name: '智家渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_gjqd.png'),
              value: result.ZJQD && result.ZJQD.orderNum || '',
              rate: result.ZJQD && result.ZJQD.momRate || '-',
              upDown: result.ZJQD && result.ZJQD.upDown || '-'
            },{
              name: '政企渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_zqqd.png'),
              value: result.ZQQD && result.ZQQD.orderNum || '',
              rate: result.ZQQD && result.ZQQD.momRate || '-',
              upDown: result.ZQQD && result.ZQQD.upDown || '-'
            },{
              name: '社会渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_shqd.png'),
              value: result.SHQD && result.SHQD.orderNum || '',
              rate: result.SHQD && result.SHQD.momRate || '-',
              upDown: result.SHQD && result.SHQD.upDown || '-'
            },{
              name: '交付渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_jfqd.png'),
              value: result.JFQD && result.JFQD.orderNum || '',
              rate: result.JFQD && result.JFQD.momRate || '-',
              upDown: result.JFQD && result.JFQD.upDown || '-'
            },{
              name: '客服渠道',
              url: require('../../../assets/images/bigScreen/channel/icon_kfqd.png'),
              value: result.KFQD && result.KFQD.orderNum || '',
              rate: result.KFQD && result.KFQD.momRate || '-',
              upDown: result.KFQD && result.KFQD.upDown || '-'
            }]
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.three-container{
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
      height: 49%;
    }
    .padding{
      padding-top: 0;
    }
    .mar{
      margin-right: 2%;
    }
    .item{
      width: 49%;
      height: 50%;
      .itemName{
        width: 100%;
        text-align: center;
        img{
          width: auto;
          height: 11.25rem;
        }
      }
      .itemCon{
        width: 100%;
        height: calc(100% - 8.125rem);
        text-align: center;
        // background: rgba(0, 160, 233, 0);
        border: 1px solid;
        // border-image: radial-gradient(circle, #23F8B9, #24F8BA) 1 1;
        box-shadow: 0px 0px 47px 3px #173C90;
        position: relative;
        margin-top: -3.25rem;
        img{
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -11.5625rem;
          width: 23.125rem;
          height: 95%;
          z-index: 1;
          margin-bottom: 5%;
        }
        .itemNum{
          position: relative;
          margin: 0 auto;
          width: 23.125rem;
          height: 100%;
          text-align: center;
          z-index: 9;
          .itemNumCenter{
            font-size: 2.1875rem;
            color: #FFFFFF;
            position: relative;
            font-weight: normal;
            // font-family: 'DigifaceWide';
            font-family: DS-Digital;
            margin-top: 3.4375rem;
          }
          .itemNumCenter:first-child{
            margin-top: .625rem;
          }
          .itemNumLeft{
            position: absolute;
            left: -50%;
            color: #00FFFF;
            font-size: 1.5rem;
            font-family: Microsoft YaHei;
            width: 50%;
            line-height: 3.125rem;
            .line{
              width: 80%;
              height: 1px;
              background: #00FFFC;
              position: absolute;
              left: 80%;
              top: 50%
            }
          }
        }
        .itemRate{
          position: absolute;
          z-index: 0;
          top: 5rem;
          right: 5.5rem;
          width: 14.9375rem;
          height: 4.375rem;
          line-height: 2.1875rem;
          font-size: 1.5rem;
          color: #00FFFF;
          background: linear-gradient(90deg, rgba(35, 156, 248, 0.45) 0%, rgba(51, 153, 255, 0) 100%);
        }
        .f36{
          font-family: DS-Digital;
          font-size: 2.25rem;
          font-weight: normal;
          color: #fff;
        }
      }
    }
    .rowBg{
      width: 100%;
      height: 13.125rem;
      background-image: url('~@/assets/images/bigScreen/channel/bg7.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: -7rem;
    }
    .marTop{
      margin-top: -7rem;
    }
    .content{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .col{
        margin-right: 16.25rem;
        text-align: center;
        font-size: 1.5rem;
      }
      .col:last-child{
        margin-right: 0;
      }
      .colName{
        color: #82E3FF;
        margin-bottom: 1.25rem;
      }
      .colText{
        color: #fff;
      }
      .colImg{
        width: 15.625rem;
        height: 13.75rem;
        margin: 2.5rem 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .colValue{
        font-size: 44px;
        font-family: DS-Digital;
        color: #F8CD1F;
        span{
          font-size: 24px;
          font-family: PangMenZhengDaoBiaoTiTi;
        }
      }
      .colorRed{
        color: #FF4C7A;
      }
      .colorGreen{
        color: #19DC7C;
      }
      .colRate{
        font-family: PangMenZhengDaoBiaoTiTi;
        span{
          color: #fff;
          margin-right: 5px;
        }
      }
    }
}
</style>
