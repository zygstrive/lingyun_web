<template>
  <div class="bg">
    <div class="bg2">
      <span class="titleB">固移融合</span>
      <digitaldisplay :result="result" bool-id="point6"  class="box"></digitaldisplay>
      <div class="bg3">
        <span class="title3">
          办理量走势图
        </span>
      </div>
      <trend :trendList="trendListBar" :trendListLine="trendListLine" :thisMonthStr="thisMonthStr" :lastMonthStr="lastMonthStr"  class="" style="height: 53%;"></trend>
    </div>
  </div>

</template>

<script>
  import trend from '../trend.vue'
  import digitaldisplay from '../digitaldisplay.vue'
  import { querybyBusinessType, queryQSTbyBusinessType } from '@/api/bigscreen'
  export default {
    name: "fiveoperation",
    components:{
      trend,
      digitaldisplay
    },
    data(){
      return{
        trendListLine:[],
        trendListBar:[],
        thisMonthStr:'',
        lastMonthStr:'',
        form:{
          businessType:"FUSE"
        },
        result:Object
      }
    },
    mounted() {
      this.querybyBusinessType();
      this.queryQSTbyBusinessType();
    },
    methods:{
      querybyBusinessType(){
        querybyBusinessType(this.form).then(res => {
          if (res.rspCode === '0000'){
            this.result = res.result
          }
        }).catch(function (response) {
          console.log(response)
        })
      },

      queryQSTbyBusinessType(){
        this.trendListLine = [];
        this.trendListBar = [];
        queryQSTbyBusinessType(this.form).then(res => {
          if (res.rspCode === '0000'){
            this.trendListLine = res.result.thisMonth
            this.trendListBar = res.result.lastMonth
            this.thisMonthStr = res.result.thisMonthStr
            this.lastMonthStr = res.result.lastMonthStr
          }else{
            this.trendListLine = [{dayOfMonth:"0",dayAmount:"0"}];
            this.trendListBar =  [{dayOfMonth:"0",dayAmount:"0"}];
          }
        }).catch(function (response) {
          console.log(response)
          this.trendListLine = [{dayOfMonth:"0",dayAmount:"0"}];
          this.trendListBar =  [{dayOfMonth:"0",dayAmount:"0"}];
        })
      },
    }

  }
</script>

<style scoped>
   .bg{
  height: 100% !important;
  background-image: url("../../../../../assets/images/bigScreen/keyStrategy/bg_zdyw_2.jpg");
  background-size: 100% 100%;
  /*border: #24F8BA 1px solid;*/
}
.bg2{
  height: 100%;
  background-image: url("../../../../../assets/images/bigScreen/keyStrategy/background.png");
  background-size: 100% 100%;
  /*border: #24F8BA 1px solid;*/
}
.bg3{
  width: 40%;
  height: 8%;
  background-image: url("../../../../../assets/images/bigScreen/keyStrategy/title2.png");
  text-align: center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding-left: 3%;
  /* line-height: 70px; */
  /* margin-top: 47px; */
}
.titleB{
  /*margin-top: 16px;*/
  font-size: 48px;
  /* padding-top: 20px; */
  margin-left: 10.5%;
  height: 10%;
  display: flex;
  align-items: center;
  font-family: PangMenZhengDaoBiaoTiTi;
  color: #ffffff;
}
.title3{
  font-size: 42px;
  font-family: PangMenZhengDaoBiaoTiTi;
  color: #ffffff;
  display: block;
}
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
  height:25%; 
}
/* @media only screen and (max-width: 3840px) {
  .titleB{
    font-size: 1rem;
  }
  .title3{
      font-size: 1rem;
  }
} */
</style>