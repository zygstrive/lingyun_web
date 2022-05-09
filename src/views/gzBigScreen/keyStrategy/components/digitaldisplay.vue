<template>
  <div>
    <el-row style="width:100%">
      <el-col :span="6">
        <el-row>
          <el-col :span="8">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="dangribanliliang"/>
          </el-col>
          <el-col :span="16">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">当日办理量</span>
              </div>
              <el-row class="flex">
               <el-col :span="12" class="wid100">
                  <span class="iconvaluefont3">{{result.orderAmountDay || '-'}}</span>
               </el-col>
               <el-col :span="12" class="wid100">
                  <div :class="'1'===result.dayUpDown?'spanbg1':'spanbg2'">
                    <span :class="'1'===result.dayUpDown?'span2222':'span22223'">{{result.orderMoMDay || '-'}}</span>
                  </div>
<!--                  <el-image class="fudong dangribanlifudong" :src="xiajiang"/>-->
               </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="9" class="chartBox">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="riwanchenglv"/>
            <div class="chart" :id="'waterPoloChart'+boolId+1"></div>

          </el-col>
          <el-col :span="15">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">日完成率</span>
              </div>
              <el-row>
                <el-col :span="12">
                  <span class="iconvaluefont">{{result.orderRateDay || '-'}}</span>
                  <span class="iconvaluefont2">%</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="8">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="yueleijibanliliang"/>
          </el-col>
          <el-col :span="16">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">当月累计办理量</span>
              </div>
              <el-row  class="flex">
                <el-col :span="12"  class="wid100">
                  <span class="iconvaluefont ribanliliangvalue">{{result.orderAmountMonth || '-'}}</span>
                  <span class="iconvaluefont2">万</span>
                </el-col>
                <el-col :span="12"  class="wid100">
<!--                  <el-image class="fudong dangribanlifudong" :src="zengzhang"/>-->
                  <div :class="'1'===result.monthUpDown?'spanbg1':'spanbg2'">
                    <span :class="'1'===result.monthUpDown?'span2222':'span22223'">{{result.orderMoMMonth || '-'}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="9" class="chartBox">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="riwanchenglv"/>
            <div class="chart" :id="'waterPoloChart'+boolId" ></div>
          </el-col>
          <el-col :span="15">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">月完成率</span>
              </div>
              <el-row>
                <el-col :span="12">
                  <span class="iconvaluefont ribanliliangvalue">{{result.orderRateMonth || '-'}}</span>
                  <span class="iconvaluefont2">%</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import dangribanliliang from '@/assets/images/bigScreen/keyStrategy/dangribanliliang.png'
  import xiajiang from '@/assets/images/bigScreen/keyStrategy/xiajiang.png'
  import yueleijibanliliang from '@/assets/images/bigScreen/keyStrategy/yueleijibanliliang.png'
  import zengzhang from '@/assets/images/bigScreen/keyStrategy/zengzhang.png'
  import riwanchenglv from '@/assets/images/bigScreen/keyStrategy/riwanchenglv.png'
  import waterPoloChart from '../../components/fullService-waterPoloChart.js'

  import echarts from 'echarts'
  import 'echarts-liquidfill'
  export default {
    name: "digitaldisplay",
    props:{
      boolId:String,
      result:Object
    },
    data(){
      return{
        dangribanliliang:dangribanliliang,
        xiajiang:xiajiang,
        yueleijibanliliang:yueleijibanliliang,
        zengzhang:zengzhang,
        riwanchenglv:riwanchenglv
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.waterPoloChart(this.boolId,{
          value:55
        })
        this.waterPoloChart((this.boolId + 1),{
          value:55
        })
      })
    },
    methods:{
      waterPoloChart(index, val) {
        let data = {
          id: 'waterPoloChart' + index,
          value: val.value,
        }
        waterPoloChart.initChart(data)
      },

    }

  }
</script>

<style>
  .flex .el-col-12{
    width: 100%;
  }
  .iconImg{
    width: 100%;
    height: auto;
  }
  .ribanliliangiconImgDiv{
    /*margin-left: 53px;*/
  }
  .riwanchenglviconImgDiv{
    margin-top: 122px;
    margin-left: 30px;
  }
  .dangyueleijiiconImgDiv{
    margin-top: 122px;
    margin-left: 0px;
  }
  .iconkeyfont{
    /* width: 147px; */
    height: 28px;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #00FFFF;
  }
  .iconvaluefont{
    width: 84px;
    height: 39px;
    font-size: 60px;
    font-family: DigifaceWide;
    font-weight: normal;
    color: #F6FF00;
  }
  .iconvaluefont3{
    height: 39px;
    font-size: 60px;
    font-family: DigifaceWide;
    font-weight: normal;
    color: #F6FF00;
  }
  .iconvaluefont2{
    width: 84px;
    height: 39px;
    font-size: 30px;
    font-family: DigifaceWide;
    font-weight: normal;
    color: #F6FF00;
  }
  .ribanliliangkey{
    margin-bottom: 5%;
  }
  .ribanliliangvalue{
    margin-top: 38px;
    margin-left: 0px;
  }
  .riwanchenglvkey{
    margin-top: 158px;
    margin-left: 27px;
  }
  .riwanchenglvvalue{
    margin-top: 37px;
    margin-left: 28px;
  }
  .dangyueleijikey{
    margin-top: 159px;
    margin-left: 8px;
  }
  .dangyueleijivalue{
    margin-top: 223px;
    margin-left: 8px;
  }
  .fudong{
    width: 131px;
    height: 55px;
  }
  .dangribanlifudong{
    margin-top: 23px;
    margin-left: 0px;
  }
  .dangyueleijifudong{
    margin-top: 223px;
    margin-left: 8px;
  }
  .topDivP{
    /* margin-top: 20px;
    margin-left: 15px; */
  }
  .span2222{
    font-family: DigifaceWide;
    font-size: 30px;
    color: #FF9393;
  }
  .spanbg1{
    background-image: url("../../../../assets/images/bigScreen/keyStrategy/zengzhang.png");
    background-size: 100% 100%;
    /* width: 50%; */
    /* height: 55px;
    line-height: 55px; */
    padding: 10px 29px;
    display: inline-block;
    /* margin-top: 23px; */
    text-align: center;
  }
  .span22223{
    font-family: DigifaceWide;
    font-size: 30px;
    color: #40FF31;
  }
  .spanbg2{
    background-image: url("../../../../assets/images/bigScreen/keyStrategy/xiajiang.png");
    background-size: 100% 100%;
    /* width: 50% !important; */
    /* height: 55px;
    line-height: 55px; */
    padding: 10px 29px;
    display: inline-block;
    /* margin-top: 23px; */
    text-align: center;
  }

  .flex{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .chartBox{
    position: relative;
    display: block;
  }
  .chart{
    width: 120px;
    height: 120px;
    position: absolute;
    left: 15%;
    top: 14%;
  }
/* @media only screen and (max-width: 3840px) {
  .iconkeyfont,.iconvaluefont3,.span22223,.span2222,.iconvaluefont,.iconvaluefont2{
    font-size: 12px !important;
  }
  .chart{
    display: none;
  }
  .wid100,.spanbg2,.spanbg1{
    width: 100%;
  }
} */
</style>