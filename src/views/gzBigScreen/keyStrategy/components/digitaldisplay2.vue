<template>
  <div>
    <el-row style="width:80%; margin-left:10%">
      <el-col :span="12">
        <el-row>
          <el-col :span="8" style="width: 21.333%;">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="dangribanliliang"/>
          </el-col>
          <el-col :span="16">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">当日办理量</span>
              </div>
              <el-row class="flex">
                <el-col :span="12">
                  <span class="iconvaluefont3" >{{result.orderAmountDay || '-'}}</span>
                </el-col>
                <el-col :span="12">
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
      <el-col :span="12">
        <el-row>
          <el-col :span="8" style="width: 21.333%;">
            <el-image class="iconImg ribanliliangiconImgDiv" :src="yueleijibanliliang"/>
          </el-col>
          <el-col :span="16">
            <div class="topDivP">
              <div class="ribanliliangkey">
                <span class="iconkeyfont ">当月累计办理量</span>
              </div>
             <el-row class="flex">
               <el-col :span="12">
                  <span class="iconvaluefont3">{{result.orderAmountMonth || '-'}}</span>
                  <span class="iconvaluefont2">万</span>
               </el-col>
               <el-col :span="12">
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
  /* .iconImg{
    width: 173px;
    height: 173px;
  }
  .ribanliliangiconImgDiv{
    margin-left: 53px;
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
    width: 147px;
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
    margin-left: 0px;
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
    margin-top: 20px;
    margin-left: 15px;
  }
  .span2222{
    font-family: DigifaceWide;
    font-size: 30px;
    color: #FF9393;
  }
  .spanbg1{
    background-image: url("../../../../assets/images/bigScreen/keyStrategy/zengzhang.png");
    background-size: 100% 100%;
    width: 151px;
    height: 55px;
    line-height: 55px;
    margin-top: 23px;
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
    width: 151px;
    height: 55px;
    line-height: 55px;
    margin-top: 23px;
    text-align: center;
  } */
</style>