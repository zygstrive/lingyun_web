<template>
  <div class="bg999">
    <div class="arpu">

      <div class="arpu-titie"></div>

      <div class="arpu-list">
        <div>
          <p>全网龄ARPU</p>
          <div class="color-1">
            {{ form.MobileNetwork.WholeNetwork }}  <span class="size-1">元/户</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.MobileNetwork.WholeNetworkChain > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.MobileNetwork.WholeNetworkChain }}  <span class="size-3">元/户</span>
          </div>
        </div>
        <div>
          <p>拍照ARPU</p>
          <div class="color-1">
            {{ form.MobileNetwork.Photograph }}  <span class="size-1">元/户</span>
          </div>
        </div>
        <div>
          <p>定比</p>
          <div :class="[form.MobileNetwork.PhotographRatio > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.MobileNetwork.PhotographRatio }}  <span class="size-3">元/户</span>
          </div>
        </div>
      </div>

      <div class="title-text">
        <div :class="selectData==='全网龄ARPU'?'title':'title2'" @click="changgeDataType('全网龄ARPU')">
          全网龄ARPU趋势图
        </div>
        <div :class="selectData!=='全网龄ARPU'?'title':'title2'" @click="changgeDataType('拍照ARPU')">
          拍照ARPU趋势图
        </div>
      </div>

      <div id="lineChartTop4" class="mar-top" style="width:1748px;height:438px;"></div>
    </div>
  </div>
</template>

<script>
  import trend from '../../keyStrategy/components/trend2'
  import lineChart from './line3.js'
  import lineWholeNetWorkChart from './line5'
  import { queryNetWorkBusinessType,network,querybyBusinessTypeNetWork } from '@/api/bigscreen.js'

  export default {
    name: "components4",
    components:{
      trend
    },
    data(){
      return {
        selectData: "全网龄ARPU",
        ids: 'lineChartTop4',
        params: {
          businessType: "Mobile_ARPU"
        },
        form: {
          MobileNetwork: {
            WholeNetwork: '',
            WholeNetworkChain: '',
            Photograph: '',
            PhotographRatio: ''
          }
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getWholeNetWorkData();
        this.getMobileNetwork();
      })
    },
    methods:{

        getMobileNetwork(){
          querybyBusinessTypeNetWork(this.params).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.form.MobileNetwork.WholeNetwork = result.order
              this.form.MobileNetwork.WholeNetworkChain = result.orderRate
              this.form.MobileNetwork.Photograph = result.scale
              this.form.MobileNetwork.PhotographRatio = result.scaleRate
            }
          })
        },

        getWholeNetWorkData(){
          queryNetWorkBusinessType(this.params).then(res =>{
            if(res.rspCode === '0000'){
                let {result} = res
                this.getWholeBar(result)
            }
          })
        },
        getPhotographData(){
          network(this.params).then(res => {
            if(res.rspCode === '0000'){
                let {result} = res
                this.getPhotographBar(result)
            }
          })
        },
        getWholeBar(res){
          let id = this.ids
          lineWholeNetWorkChart.initChart(res,id)
        },
        getPhotographBar(res){
          let id = this.ids
          lineChart.initChart(res,id)
        },
        changgeDataType(type) {
          this.selectData = type
          if(type === '全网龄ARPU'){
            this.$nextTick(() => {
              this.getWholeNetWorkData();
            })
          }else {
            this.$nextTick(() =>{
              this.getPhotographData();
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

  .arpu{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .arpu-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_3.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .arpu-list{
    width: 1812px;
    height: 215px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border5.png");
    background-size: 100% 100%;
    margin: 0 auto 20px;
    display: flex;
    flex-flow: row nowrap;
    >div{
      width: 25%;
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
      .color-2{
        color: #FF4C7A;
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
      .colorGreen{
        color: #6FFF57;
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