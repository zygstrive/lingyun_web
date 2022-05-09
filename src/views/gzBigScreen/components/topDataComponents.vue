<template>
<div>
  <el-row :gutter="8.5">
    <el-col :span="8" class="flex">
      <div class="img">
          <img src="../../../assets/gzBigScreen/celueshu.png" style="height: 89px;width: 89px">
      </div>
      <div class="value">
        <span class="topDatatitleClass">生效策略数</span>
        <span class="topDataNumClass">{{argsData.strategyNum}}</span>
        <span class="topDataNumSmallClass">个</span>
      </div>
    </el-col>
    <el-col :span="9" class="flex">
      <div class="img">
        <img src="../../../assets/gzBigScreen/yonghu.png" style="height: 89px;width: 89px">
      </div>
      <div class="value">
        <span class="topDatatitleClass" style="display: block;margin-top: 15px">覆盖用户数</span>
        <span class="topDataNumClass">{{argsData.userNum}}</span>
        <span class="topDataNumSmallClass">万</span>
      </div>
    </el-col>
    <el-col :span="7" class="flex">
      <div class="img">
        <div :id="'waterPoloChart'+boolId+'s'" style="height: 89px;width: 89px"></div>
      </div>
      <div class="value">
        <span class="topDatatitleClass" style="display: block;margin-top: 15px">覆盖率</span>
        <span class="topDataNumClass">{{argsData.userRatio}}</span>
        <span class="topDataNumSmallClass">%</span>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import waterPoloChart from '../components/fullService-waterPoloChart.js'
import 'echarts-liquidfill'
import { queryStrategy, queryStrategyType } from '@/api/bigscreen'
export default {
  name: "topDataComponents",
  props:{
    boolId:String,
    garyCode:String
  },
  watch:{
    argsData(val){
      if (val.userNum){
        val.userNum = (val.userNum / 10000.0).toFixed(1)
        val.userRatio = (val.userRatio * 100).toFixed(1)
      }
    },
  },
  data(){
    return{
      argsData:{}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.waterPoloChart(this.boolId,{
        value:55
      })
    })
    if (this.garyCode !== '' && this.garyCode){
      this.getData1()
    }else {
      this.getData2()
    }
  },
  methods:{
    waterPoloChart(index, val) {
      let data = {
        id: 'waterPoloChart' + index + 's',
        value: val.value,
      }
      waterPoloChart.initChart2(data)
    },
    getData1(){
      queryStrategyType({
        strategyMainCode:this.garyCode
      }).then(response => {
        if (response.rspCode === '0000'){
          this.argsData = response.result
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getData2(){
      queryStrategy({ }).then(response => {
        if (response.rspCode === '0000'){
          this.argsData = response.result
        }
      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>
.topDatatitleClass{
  font-weight: 400;
  color: #00FFFF;
  font-weight: 400;
  display: block;
  line-height: 14px;
  font-size: 14px;
}
.topDataNumClass{
  font-weight: 400;
  color: #FFFFFF;
  background-image:-webkit-linear-gradient(bottom,#FFFFFF,#FFCA12);

  /*background: linear-gradient(0deg, #FFCA12 0%);*/
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
}
.topDataNumSmallClass{
  font-weight: 400;
  color: #FFFFFF;
  background-image:-webkit-linear-gradient(bottom,#FFFFFF,#FFCA12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
}
.waterPoloChart {
  width: 89px;
  height: 89px;
  margin: 0 auto;
}
.flex{
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
}
.img{
  width: 100px;
}
.value{
  flex: 1;
}
</style>