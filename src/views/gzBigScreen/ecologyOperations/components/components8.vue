<template>
  <div class="bg999">
    <div class="three-noes">

      <div class="three-noes-titie"></div>

      <div class="three-noes-list">
        <div>
          <p>T1三无双低占比</p>
          <div class="color-1">
            {{ form.Three.ThreeUnparalleledProportion }}<span class="size-2">%</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.Three.ThreeUnparalleledChain > 0 ? 'colorRed' : 'colorGreen']">
            {{ form.Three.ThreeUnparalleledChain }}<span class="size-4">%</span>
          </div>
        </div>
        <div>
          <p>非当月入网三无双低占比</p>
          <div class="color-1">
            {{ form.Three.NotThreeUnparalleledProportion }}<span class="size-2">%</span>
          </div>
        </div>
        <div>
          <p>环比</p>
          <div :class="[form.Three.NotThreeUnparalleledChain > 0 ? 'colorRed': 'colorGreen']">
            {{ form.Three.NotThreeUnparalleledChain }}<span class="size-4">%</span>
          </div>
        </div>
      </div>

      <div class="title-text">
        <div :class="selectData==='T1三无双低占比'?'title':'title2'" @click="changgeDataType('T1三无双低占比')">
          T1三无双低占比趋势图
        </div>
        <div :class="selectData!=='T1三无双低占比'?'title':'title2'" @click="changgeDataType('非当月三无双低占比')">
          非当月三无双低占比趋势图
        </div>
      </div>

      <div id="lineChartDown4" class="mar-top" style="width:1748px;height:438px;"></div>
    </div>

  </div>
</template>

<script>
  import lineThreeChart from './line8.js'
  import lineNotThreeChart from './line7.js'
  import { queryNetWorkBusinessType,network,querybyBusinessTypeNetWork } from '@/api/bigscreen.js'

  export default {
    name: "components8",
    data () {
      return {
        selectData:'T1三无双低占比',
        params: {
          businessType: "Three_noes"
        },
        form: {
          Three: {
            ThreeUnparalleledProportion: '',
            ThreeUnparalleledChain: '',
            NotThreeUnparalleledProportion: '',
            NotThreeUnparalleledChain: ''
          }
        },
        ids: 'lineChartDown4'
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getData();
        this.getTopData();
      })
    },
    methods:{
        getTopData(){
          querybyBusinessTypeNetWork(this.params).then(res => {
             if(res.rspCode === '0000'){
               let {result} = res
               this.form.Three.ThreeUnparalleledProportion = result.order
               this.form.Three.ThreeUnparalleledChain = result.orderRate
               this.form.Three.NotThreeUnparalleledProportion = result.scale
               this.form.Three.NotThreeUnparalleledChain = result.scaleRate
             }
          })
        },

        getNotThreeData(){
            network(this.params).then(res => {
              if(res.rspCode === '0000'){
                let {result} = res
                this.getNotThreeBartData(result)
              }
            })
        },

        getData(){
          queryNetWorkBusinessType(this.params).then(res => {
            if(res.rspCode === '0000'){
              let {result} = res
              this.getBarData(result)
            }
          })
        },

        getNotThreeBartData(res){
          let id = this.ids
          lineNotThreeChart.initChart(res,id) //非三无双折线图
        },
        getBarData(res){
          let id = this.ids
          lineThreeChart.initChart(res,id)  //TI无双折线图
        },

        changgeDataType(type){
          this.selectData = type
          if(type === 'T1三无双低占比'){
            this.$nextTick(() => {
              this.getData();
            })
          }else {
            this.$nextTick(() => {
              this.getNotThreeData();
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

  .three-noes{
    width: 1891px;
    height: 976px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/border1.png");
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 52px;
  }
  .three-noes-titie{
    width: 1072px;
    height:91px;
    background-image: url("../../../../assets/images/bigScreen/ecologyOperations/bg_title_7.png");
    background-size: 100% 100%;
    margin: 0 auto 11px;
  }
  .three-noes-list{
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
        color: #6FFF57;
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