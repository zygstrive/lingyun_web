<template>
  <div style="text-align: center">
    <span class="title">{{title}}</span>
    <div :class="title==='传统流量包'||'畅系列产品'||'三网产品'?'bg2':'bg'">
      <el-row :gutter="8.5">
        <el-col :span="8">
          <div class="topDataBgClass">
            <b class="topDatatitleClass">生效策略数</b>
            <b class="topDataNumClass">{{argsData.strategyNum}}</b>
            <b class="topDataNumSmallClass">个</b>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="topDataBgClass">
            <a class="topDatatitleClass">覆盖用户数</a>
            <a class="topDataNumClass">{{argsData.userNum}}</a>
            <a class="topDataNumSmallClass">万</a>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="topDataBgClass">
            <a class="topDatatitleClass">覆盖率</a>
            <a class="topDataNumClass">{{argsData.userRatio}}</a>
            <a class="topDataNumSmallClass">%</a>
          </div>
        </el-col>
      </el-row>
      <el-table
        class="table"
        :data="tableData"
        @cell-mouse-enter="pause"
        @cell-mouse-leave="begin"
        style="width: 100%;margin-top:20px"
        :cell-style="changeCellStyle"
      >
        <el-table-column
          prop="policyTypeName"
          label="三级策略">
        </el-table-column>
        <el-table-column
          prop="strategyNum"
          label="生成策略数">
        </el-table-column>
        <el-table-column
          prop="userNum"
          label="覆盖用户数(万)">
        </el-table-column>
        <el-table-column
          prop="userRatio"
          label="覆盖率(%)">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { queryStrategyType2 ,queryStrategyOperation } from '@/api/bigscreen'

export default {
  name: "dataConponents",
  props:{
    title:String,
    tableHeightD:{
      type:Number,
      default:188
    },
    tableList:Array,
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
      tableData:[],
      argsData:{},
      aa:''
    }
  },
  destroyed() {
    this.pause()
  },
  mounted() {
    if (this.garyCode !== '' && this.garyCode){
      this.getData1()
      this.getData2()
    }else {
      this.getData2()
    }
    this.begin()
  },
  methods: {
    tableScroll() {
      this.$nextTick(() => {
       if(this.tableData.length > 22){
          let data = this.tableData[0];
          setTimeout(() => {
            this.tableData.push(data);
            t.style.transition = "all .5s";
            t.style.marginTop = "-50px";
          }, 500);
          setTimeout(() => {
            this.tableData.splice(0, 1);
            t.style.transition = "all 0s ease 0s";
            t.style.marginTop = "0";
          }, 1000);
       }
     });
    },
    begin() {
      this.aa = setInterval(() =>{
        this.tableScroll()
      },3000)
    },
    pause() {
      clearInterval(this.aa)
    },
    changeCellStyle(row, column, rowIndex, columnIndex) {
      if (row.column.label === "三级策略") {
        return "color: #02F6FF;font-size:14"; // 修改的样式
      } else {
        return "";
      }
    },
    getData2(){
      queryStrategyOperation({
        strategySubCode:this.garyCode
      }).then(response => {
        if (response.rspCode === '0000'){
          this.tableData = response.result
          this.tableData.forEach(val => {
            val.userNum = (val.userNum / 10000.0).toFixed(1)
            val.userRatio = (val.userRatio * 100).toFixed(1)
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getData1(){
      queryStrategyType2({
        strategySubCode:this.garyCode
      }).then(response => {
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
/deep/ .el-table{
  background: none;
  font-family: Microsoft YaHei;
  font-weight: 400;
  height: calc(100% - 215px);
  /* border: 1px solid red; */
}
/deep/.el-table th{
  padding: 5px 0;
  background: url("~@/assets/gzBigScreen/tablebg.png") 50% 1px no-repeat;
  text-align: center;
  color: #02F6FF !important;
  font-size: 14px;
}
/deep/ .el-table tr{
  background: none !important;
}
/deep/.el-table td{
  padding: 9px 0;
  font-size: 14px;
  background: none !important;
  border: none !important;
  text-align: center !important;
  color: #FFFFFF;
  font-family: DigifaceWide;
}
/deep/.el-table td:first-child {
  font-family: Microsoft YaHei;
  font-size: 14px;
}
/deep/ .el-table th.is-leaf, .el-table td{
  border: none !important;
  color: #FFFFFF ;
}
/deep/.el-table::before{
  height: 0 !important;
}
/deep/.el-table th > .cell{
  display: contents !important;
}
/deep/.el-table .ascending .sort-caret.ascending {
  border-bottom-color: #02f6ff;
}

/deep/ .el-table .cell{
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

/deep/.el-table .descending .sort-caret.descending {
  border-top-color: #02f6ff;
}
.topDataBgClass{
  text-align: center;
  background-image: url("../../../assets/gzBigScreen/zhu.png");
  background-size: 100% 100%;
  height: 186px;
}
.topDatatitleClass{
  font-weight: 400;
  padding-top: 59px;
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
  font-size: 30px;
}
.topDataNumSmallClass{
  font-weight: 400;
  color: #FFFFFF;
  background-image:-webkit-linear-gradient(bottom,#FFFFFF,#FFCA12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
}
.bg {
  text-align: center;
  background-image: url("../../../assets/gzBigScreen/smalbg1.png");
  background-size: 100% 100%;
  height: 100%;
  margin-top: -20px;
  padding-top: 10px;text-overflow: ellipsis
}
.bg2 {
  text-align: center;
  background-image: url("../../../assets/gzBigScreen/largbg.png");
  background-size: 100% 100%;
  height: 100%;
  margin-top: -20px;
  padding-top: 10px;
}
.title{
  color: #02F6FF;
  font-size: 30px;
  font-family: PangMenZhengDaoBiaoTiTi;
}
</style>