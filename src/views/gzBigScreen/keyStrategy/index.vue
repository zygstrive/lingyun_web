<template>
  <div style="width:7680px; height: 2160px">
    <headerBtn style="width: 100%;height: 77px;"></headerBtn>
    <div class="headerbg" style="display: block;height: 85px"></div>
    <div class="bg">
      <el-row style="height: 50%">
        <el-col :span="6" style="height: 100%">
          <fiveoperation></fiveoperation>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <flowproduct></flowproduct>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <twoPproduct></twoPproduct>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <controldropset></controldropset>
        </el-col>
      </el-row>
      <el-row style="height: 50%">
        <el-col :span="6" style="height: 100%">
          <mandatorybinding></mandatorybinding>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <fmc></fmc>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <financialstage></financialstage>
        </el-col>
        <el-col :span="6" style="height: 100%">
          <mnp></mnp>
        </el-col>
      </el-row>
    </div>
  </div>


</template>

<script>
  import controldropset from './components/main/controldropset.vue'
  import financialstage from './components/main/financialstage.vue'
  import fiveoperation from './components/main/fiveoperation.vue'
  import flowproduct from './components/main/flowproduct.vue'
  import fmc from './components/main/FMC.vue'
  import mandatorybinding from './components/main/mandatorybinding.vue'
  import mnp from './components/main/MNP.vue'
  import twoPproduct from './components/main/twoPproduct.vue'
  import headerBtn from '../components/headerBtn'


  export default {
    name: 'index',
    components:{
      controldropset,
      financialstage,
      fiveoperation,
      flowproduct,
      fmc,
      mandatorybinding,
      mnp,
      twoPproduct,
      headerBtn
    },
    data(){
      return{

      }
    },
    mounted() {
    },
    methods:{
    }
  }
</script>

<style scoped>
  .headerbg{
    width: 7680px;
    height: 85px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../../../assets/images/bigScreen/keyStrategy/bg_zdyw_1.jpg");
  }
  .bg{
    /*margin: 0px 0px 0px 0px;*/
    /* width: 7680px; */
    /* height: 2075px; */
    height: calc(100% - 85px);
    /*background-image: url("../../../assets/gzBigScreen/2621616747794_.pic_hd.jpg");*/
    background-size: 100% 100%;
    /* overflow: hidden; */
    /*border: #24F8BA 1px solid;*/
    /*border-left-width: 0px;*/
    /*border-top-width: 0px;*/
    /*border-bottom-width: 0px;*/
    /*border-right-width: 0px;*/
  }
  .el-col{
    /* border: 1px solid red; */
  }
  .divClass{
    /* display: block;
    height: 456px;
    width: 521px
  }
  .divClass2{
    display: block;
    height: 290px;
    width: 521px */
  }
</style>