<template>
  <div class="bg333">
    <div style="display: block;height: 10px">
    </div>
    <el-row :gutter="8.5" style="margin-left: 10px;height: 99%" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000025" title="高危攻坚" class="divClass3" ></dataConponents>
        <dataConponents gary-code="2000026" title="低余额维系" class="divClass3" style="margin-top: 36px;"></dataConponents>
        <dataConponents gary-code="2000029" title="携号转网" class="divClass3" style="margin-top: 36px;"></dataConponents>
      </el-col>
      <el-col :span="10">
        <topDataComponents gary-code="3000003" bool-id="w" style="margin-top:30px"></topDataComponents>
        <keepRetain :img-src="require('@/assets/gzBigScreen/fullview_bg3.png')"
                    :title-img-src="require('@/assets/gzBigScreen/kehubaoyou_title.png')"
        ></keepRetain>
      </el-col>
      <el-col :span="7">
        <dataConponents gary-code="2000027" title="合约捆绑" class="divClass"></dataConponents>
        <dataConponents gary-code="2000028" title="金融分期" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import keepRetain from '../keepRetain.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
  export default {
    name: 'index_keepRetain',
    components:{
      dataConponents,
      topDataComponents,
      keepRetain
    },
    props:{
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.bg333{
  height: 99%;
  background-size: 100% 100%;
}
.bg444{
  border: #24F8BA 1px solid;
}
.divClass{
  display: block;
  height: 491px;
  width: 521px
}
.divClass3{
  display: block;
  height: 314px;
  width: 521px
}
</style>