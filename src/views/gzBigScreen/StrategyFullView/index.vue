<template>
  <div class="bg" style="width:7680px; height: 2160px">
    <headerBtn style="width: 100%"></headerBtn>
    <el-row style="height: 46%;">
      <el-col :span="6" style="height: 100%">
        <loadIndex style="height: 100%" @changeSelectType="changeSelectType"></loadIndex>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <fiveGOperation></fiveGOperation>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <flowOperations></flowOperations>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <ecologyOperations></ecologyOperations>
      </el-col>
    </el-row>
    <el-row style="height: 50%">
      <el-col :span="6" style="height: 100%">
        <selectFlowDialog :select-type="selectType"></selectFlowDialog>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <index_keepRetain></index_keepRetain>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <familyShop></familyShop>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <getNew></getNew>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ecologyOperations from './components/main/ecologyOperations.vue'
import familyShop from './components/main/familyShop.vue'
import fiveGOperation from './components/main/fiveGOperation.vue'
import flowOperations from './components/main/flowOperations.vue'
import getNew from './components/main/getNew.vue'
import index_keepRetain from './components/main/index_keepRetain.vue'
import loadIndex from './components/main/loadIndex.vue'
import selectFlowDialog from './components/main/selectFlowDialog.vue'
import headerBtn from '../components/headerBtn'
import { queryStrategy } from '../../../api/bigscreen'

 export default {
    name: 'index',
    components:{
      ecologyOperations,
      familyShop,
      fiveGOperation,
      flowOperations,
      getNew,
      index_keepRetain,
      loadIndex,
      selectFlowDialog,
      headerBtn
    },
    data(){
      return{
        selectType:1,
      }
    },
   mounted() {
   },
   methods:{
     changeSelectType(type){
       this.selectType = type
     },
   }
 }
</script>

<style scoped>
.bg{
  background-image: url("../../../assets/gzBigScreen/2461617178321_.pic_hd.jpg");
  background-size: 100% 100%;
}
.divClass{
  display: block;
  height: 456px;
  width: 521px
}
.divClass2{
  display: block;
  height: 290px;
  width: 521px
}
</style>