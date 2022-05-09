<template>
  <div class="bg999">
    <div class="stock-income">

      <div class="stock-income-titie"></div>

      <div class="stock-income-list">
        <div>
          <p>累计通服收入</p>
          <div class="color-1">
            {{ form.TongFu.CumulativeAccount }} <span class="size-1">亿元</span>
          </div>
        </div>
        <div>
          <p>同比</p>
          <div :class="[form.TongFu.CumulativeRate > 0 ? 'colorRed': 'colorGreen']">
            {{ form.TongFu.CumulativeRate }} <span class="size-3">万元</span>
          </div>
        </div>
        <div>
          <p>目标完成率</p>
          <div class="color-1">
            {{ form.TongFu.CumulativeCompletionRate }} <span class="size-2">%</span>
          </div>
        </div>
        <div>
          <p>累计出账收入</p>
          <div class="color-1">
            {{ form.Revenue.CumulativeAccount }} <span class="size-1">亿元</span>
          </div>
        </div>
        <div>
          <p>同比</p>
          <div :class="[form.Revenue.CumulativeRate > 0 ? 'colorRed': 'colorGreen']">
            {{ form.Revenue.CumulativeRate }} <span class="size-3">万元</span>
          </div>
        </div>
        <div>
          <p>目标完成率</p>
          <div class="color-1">
           {{ form.Revenue.TargetCompletionRate }} <span class="size-2">%</span>
          </div>
        </div>
      </div>

      <div class="title-text">
        <div :class="selectData==='当月通服收入'?'title':'title2'" @click="changgeDataType('当月通服收入')">
          当月通服收入趋势图
        </div>
        <div :class="selectData!=='当月通服收入'?'title':'title2'" @click="changgeDataType('当月出账收入')">
          当月出账收入趋势图
        </div>
      </div>

      <div id="lineChartTop2" class="mar-top" style="width:1748px;height:438px;"></div>
    </div>
  </div>
</template>

<script>
  import trend from '../../keyStrategy/components/trend2'
  import lineTongfuChart from './line10.js'
  import lineAccountChart from './line9.js'
  import { network,querybyBusinessTypeNetWork } from '@/api/bigscreen.js'
  export default {
    name: "components2",
    components:{
      trend
    },
    data(){
      return{
        selectData:"当月通服收入",
        params: {
          businessType: "Stock_income"
        },
        param: {
          businessType: "Stock_Tongfu"
        },
        form: {
          Revenue: {
            CumulativeAccount: '',
            CumulativeRate: '',
            TargetCompletionRate: ''
          },
          TongFu: {
            CumulativeAccount: '',
            CumulativeRate: '',
            CumulativeCompletionRate: ''
          }
        },
        ids: 'lineChartTop2'
      }

    },
    mounted() {
      this.$nextTick(() => {
        this.getTongFuData();
        this.getIncomeData();
      })
    },
    methods:{

        getIncomeData(){
          querybyBusinessTypeNetWork(this.params).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.form.Revenue.CumulativeAccount = result.outAccount
              this.form.Revenue.CumulativeRate = result.outRate
              this.form.Revenue.TargetCompletionRate = result.targetCompletionRate
            }
          })

          querybyBusinessTypeNetWork(this.param).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.form.TongFu.CumulativeAccount = result.outAccount
              this.form.TongFu.CumulativeRate = result.outRate
              this.form.TongFu.CumulativeCompletionRate = result.targetCompletionRate
            }
          })
        },

        getAccountData(){
          network(this.params).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.getAccountBar(result)
            }
          })
        },
        getTongFuData(){
          network(this.param).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.getTongFuBar(result)
            }
          })
        },
        getAccountBar(res){
          let id = this.ids
          lineAccountChart.initChart(res,id)
        },
        getTongFuBar(res) {
          let id = this.ids
          lineTongfuChart.initChart(res,id)
        },
        changgeDataType(type){
          this.selectData = type
          if(type === '当月通服收入'){
            this.$nextTick(() => {
              this.getTongFuData();
            })
          }else {
            this.$nextTick(() => {
              this.getAccountData()
            })
          }
        }
    }
  }
</script>

<style lang='scss' scoped>
  .bg999{
    height: 100%;
    background-size: 100% 100%;
  }
  .stock-income{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .stock-income-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_1.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .stock-income-list{
    width: 1822px;
    height: 215px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border3.png");
    background-size: 100% 100%;
    margin: 0 auto 20px;
    display: flex;
    flex-flow: row nowrap;
    >div{
      width: 17%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;
      >p{
        color: #00FFFF;
        font-size: 36px;
        font-family: MicrosoftYaHei;
        margin: 0;
        padding-bottom: 10px;
      }
      .color-1{
        color: #F6FF00;
        font-size: 42px;
        font-family: DigifaceWide;
        .size-1{
          font-size: 34px;
          font-family: YouSheBiaoTiHei;
        }
        .size-2{
          font-size: 34px;
        }
      }
      .colorGreen{
        color: #6FFF57;
        font-size: 36px;
        font-family: DigifaceWide;
        .size-3{
          font-size: 29px;
          font-family: YouSheBiaoTiHei;
        }
      }
      .colorRed{
        color: #FF4C7A;
        font-size: 36px;
        font-family: DigifaceWide;
        .size-3{
          font-size: 29px;
          font-family: YouSheBiaoTiHei;
        }
      }

    }
  }
  .title-text{
    display: flex;
    flex-flow: row nowrap;
  }
  .title{
    min-width: 345px;
    height: 71px;
    line-height: 71px;
    font-size: 2.25rem;
    font-family: YouSheBiaoTiHei;
    color: #FFFFFF;
    padding-left: 39px;
    background-image: url('~@/assets/images/bigScreen/channel/bg8.png');
    background-size: 100% 100%;
    margin-left: 38px;
  }
  .title2{
    min-width: 345px;
    height: 71px;
    line-height: 71px;
    font-size: 2.25rem;
    font-family: YouSheBiaoTiHei;
    color: #14DBFF;
    padding-left: 39px;
    margin-left: 38px;

  }
  .mar-top{
    padding-left: 30px;
  }

</style>