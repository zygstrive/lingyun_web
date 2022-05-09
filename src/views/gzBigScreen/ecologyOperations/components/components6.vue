<template>
  <div class="bg999">
    <div class="yongbaolu">

      <div class="yongbaolu-titie"></div>

      <div class="yongbaolu-list">
        <div>
          <p>存量用保率</p>
          <div class="color-1">
            {{ form.Stock.StockRate }}<span class="size-1">%</span>
          </div>
        </div>
        <div>
          <p>同比</p>
          <div :class="[form.Stock.StockRatio > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.Stock.StockRatio }} <span class="size-3">%</span>
          </div>
        </div>
      </div>

      <div class="title-text">
        <div class="title">
          存量用保率趋势图
        </div>
      </div>

      <div id="lineChartDown2" class="mar-top" style="width:1748px;height:438px;"></div>
    </div>

  </div>
</template>

<script>
  import lineChart from './line2.js'
  import { network,querybyBusinessTypeNetWork } from '@/api/bigscreen.js'

  export default {
    name: "components6",
    data () {
      return {
        params:{
          businessType:"Utilization_rate"
        },
        form:{
          Stock:{
            StockRate: '',
            StockRatio: ''
          }
        },
        ids: 'lineChartDown2'
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getData()
        this.getStockRate()
      })
    },
    methods:{

        getStockRate(){
          querybyBusinessTypeNetWork(this.params).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.form.Stock.StockRate = result.stockUtilizationRate
              this.form.Stock.StockRatio = result.stockRate
            }
          })
        },

        getData(){
          network(this.params).then(res=>{
              if(res.rspCode === '0000'){
                let {result}=res;
                this.getbartData(result)
              }
          }).catch(function (response) {
            console.log(response)
          })
        },
        getbartData(res){
          let id = this.ids
          lineChart.initChart(res,id) //折线图
        }
    }
  }
</script>

<style lang='scss' scoped>
  .bg999{
    height: 100%;
    background-size: 100% 100%;
    padding-top: 31px;
  }

  .yongbaolu{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .yongbaolu-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_5.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .yongbaolu-list{
    width: 1800.6px;
    height: 205px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border6.png");
    background-size: 100% 100%;
    margin: 0 auto 20px;
    display: flex;
    flex-flow: row nowrap;
    >div{
      width: 50%;
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
        }
      }
      .colorGreen{
        color: #19DC7C;
        font-size: 36px;
        font-family: DigifaceWide;
        .size-3{
          font-size: 29px;
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
  .mar-top{
    padding-left: 30px;
  }
</style>