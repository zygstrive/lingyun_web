<template>
  <div class="bg999">
    <div class="stock-value">

      <div class="stock-value-titie"></div>

      <div class="stock-value-list">
        <div>
          <p>累计增收</p>
          <div class="color-1">
            {{ form.Cost.Cumulative_Income }} <span class="size-1">亿元</span>
          </div>
        </div>
        <div>
          <p>同比</p>
          <div :class="[form.Cost.Cumulative_Rate > 0 ? 'colorRed': 'colorGreen']">
            {{ form.Cost.Cumulative_Rate }} <span class="size-3">万元</span>
          </div>
        </div>
        <div>
          <p>目标完成率</p>
          <div class="color-1">
            {{ form.Cost.Target_Rate }} <span class="size-2">%</span>
          </div>
        </div>
      </div>
      <div class="title-text">
        <div class="title">
          当月价值增收趋势图
        </div>
      </div>
      <div id="lineChartTop3" class="mar-top" style="width:1748px;height:438px;"></div>

    </div>
  </div>
</template>

<script>
  import trend from '../../keyStrategy/components/trend2'
  import lineChart from './line12.js'
  import { querybyBusinessTypeNetWork,network } from '@/api/bigscreen.js'

  export default {
    name: "components3",
    components:{
      trend
    },
    data(){
      return{
        ids: 'lineChartTop3',
        form: {
          Cost: {
            Cumulative_Income:'',
            Target_Rate: '',
            Cumulative_Rate: ''
          }
        },
        params: {
          businessType: "SIncrease_Revenue"
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getData();
        this.getTop();
      })
    },
    methods: {
      getData(){
        network(this.params).then(res => {
          if(res.rspCode === '0000'){
            let {result} = res
            this.getBar(result)
          }
        })
      },
      getTop(){
        querybyBusinessTypeNetWork(this.params).then(res => {
            let{result} = res
            this.form.Cost.Cumulative_Income = result.outAccount
            this.form.Cost.Cumulative_Rate = result.outRate
            this.form.Cost.Target_Rate = result.targetCompletionRate
        })
      },
      getBar(res){
        let id = this.ids
        lineChart.initChart(res,id)
      }

    }
  }
</script>

<style lang='scss' scoped>
  .bg999{
    height: 100%;
    background-size: 100% 100%;
  }

  .stock-value{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .stock-value-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_2.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .stock-value-list{
    width: 1773px;
    height: 215px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border4.png");
    background-size: 100% 100%;
    margin: 0 auto 20px;
    display: flex;
    flex-flow: row nowrap;
    >div{
      width: 34%;
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
      .colorRed{
        color: #FF4C7A;
        font-size: 36px;
        font-family: DigifaceWide;
        .size-3{
          font-size: 29px;
          font-family: YouSheBiaoTiHei;
        }
      }
      .colorGreen{
        color: #19DC7C;
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
    background-image: url(/img/bg8.df167c9f.png);
    background-size: 100% 100%;
    margin-left: 38px;
  }
  .mar-top{
    padding-left: 30px;
  }
</style>