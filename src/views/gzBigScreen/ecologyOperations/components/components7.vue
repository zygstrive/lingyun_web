<template>
  <div class="bg999">
    <div class="loss">

      <div class="loss-titie"></div>

      <div class="loss-list">
        <div>
          <p>净流失</p>
          <div class="color-1">
            {{ form.Loss.NetLoss }}  <span class="size-1">万户</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.Loss.NetLossRate > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.Loss.NetLossRate }}  <span class="size-3">万户</span>
          </div>
        </div>
        <div>
          <p>流失规模</p>
          <div class="color-1">
            {{ form.Loss.LossScale }}  <span class="size-1">万户</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.Loss.LossScaleRate > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.Loss.LossScaleRate }}  <span class="size-3">万户</span>
          </div>
        </div>
        <div>
          <p>流失率</p>
          <div class="color-1">
            {{ form.Loss.WastageRate }}  <span class="size-2">%</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.Loss.WastageChain > 0 ? 'colorRed': 'colorGreen']">
            {{ form.Loss.WastageChain }} <span class="size-4">%</span>
          </div>
        </div>
      </div>

      <div class="title-text">
        <div :class="selectData==='流失规模'?'title':'title2'" @click="changgeDataType('流失规模')">
          流失规模趋势图
        </div>
        <div :class="selectData!=='流失规模'?'title':'title2'" @click="changgeDataType('流失率')">
          流失率趋势图
        </div>
      </div>

      <div id="lineChartDown3" class="mar-top" style="width:1748px;height:438px;"></div>
    </div>


  </div>
</template>

<script>
  import lineLossChart from './line6.js'
  import lineEcharts from './line4'
  import { queryNetWorkBusinessType,network,querybyBusinessTypeNetWork } from '@/api/bigscreen.js'

  export default {
    name: "components7",
    components:{
    },
    data(){
      return{
        selectData:"流失规模",
        params: {
          businessType: "Loss"
        },
        form: {
          Loss: {
            NetLoss: '',
            NetLossRate: '',
            LossScale: '',
            LossScaleRate: '',
            WastageRate: '',
            WastageChain: ''
          }
        },
        ids: 'lineChartDown3'
      }

    },
    mounted() {
      this.$nextTick(() => {
        this.getNetWorkData();
        this.getLossTop()
      })
    },
    methods:{

        getLossTop(){
          querybyBusinessTypeNetWork(this.params).then(res => {
              if(res.rspCode === '0000'){
                  let {result} = res
                  this.form.Loss.NetLoss = result.empty
                  this.form.Loss.NetLossRate = result.emptyRate
                  this.form.Loss.LossScale = result.scale
                  this.form.Loss.LossScaleRate = result.scaleRate
                  this.form.Loss.WastageRate = result.order
                  this.form.Loss.WastageChain = result.orderRate
              }
          })
        },

        getDate(){
          queryNetWorkBusinessType(this.params).then(res =>{
            if(res.rspCode === '0000'){
                let {result} = res
                this.getbartData(result)
            }
          })
        },
        getNetWorkData(){
          network(this.params).then(res=> {
            if(res.rspCode === '0000'){
              let {result} = res
              this.getNetBarData(result)
            }
          })
        },
        getbartData(res){
          let id = this.ids
          lineLossChart.initLossChart(res,id) //流失率折线图
        },
        getNetBarData(res){
          let id = this.ids
          lineEcharts.initChart(res,id) //流失规模折线图
        },
        changgeDataType(type){
          this.selectData = type
          if(type === '流失规模'){
            this.$nextTick(() =>{
              this.getNetWorkData()
            })
          }else {
            this.$nextTick(() => {
              this.getDate()
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
    padding-top: 31px;
  }
  .loss{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .loss-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_6.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .loss-list{
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
      .colorRed{
        color: #FF4C7A;
        font-size: 36px;
        font-family: DigifaceWide;
        .size-3{
          font-size: 29px;
          font-family: YouSheBiaoTiHei;
        }
        .size-4{
          font-size: 29px;
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
        .size-4{
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