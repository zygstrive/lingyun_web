<template>
  <div class="bg333">
    <el-row :gutter="8.5" style="margin-left: 10px" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000031" title="畅系列产品" class="divClass" ></dataConponents>
      </el-col>
      <el-col :span="10">
        <topDataComponents gary-code="3000006" bool-id="a" style="margin-top:30px"></topDataComponents>
        <fiveOperation :img-src="require('@/assets/gzBigScreen/fullview_bg2.png')"
                    :title-img-src="require('@/assets/gzBigScreen/fullview_title2.png')"
        ></fiveOperation>

      </el-col>
      <el-col :span="7">
        <dataConponents gary-code="2000032" title="三网产品" class="divClass3"></dataConponents>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import fiveOperation from '../keepRetain.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
export default {
  name: 'ecologyOperations',
  components:{
    dataConponents,
    topDataComponents,
    fiveOperation
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
  height: 100%;
  background-size: 100% 100%;
}
.bg444{
  height: 100%;
  width: 99%;
  border: #24F8BA 1px solid;
}
.divClass{
  display: block;
  height: 955px;
  width: 521px
}
.divClass3{
  display: block;
  height: 955px;
  width: 521px
}
</style>