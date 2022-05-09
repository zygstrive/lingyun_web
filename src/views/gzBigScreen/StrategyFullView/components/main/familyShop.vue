<template>
  <div class="bg333">
    <div style="display: block;height: 10px">
    </div>
    <el-row :gutter="8.5" style="margin-left: 10px;" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000012" title="以固带移" class="divClass" ></dataConponents>
        <dataConponents gary-code="2000013" title="以移带固" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
      <el-col :span="10">
        <topDataComponents bool-id="x" gary-code="3000004" style="margin-top:30px"></topDataComponents>
        <fiveOperation :img-src="require('@/assets/gzBigScreen/fullview_bg4.png')"
                    :title-img-src="require('@/assets/gzBigScreen/jiatingronghe_title.png')"
        ></fiveOperation>

      </el-col>
      <el-col :span="7">
        <dataConponents gary-code="2000014" title="宽带维系" class="divClass" ></dataConponents>
        <dataConponents gary-code="2000030" title="宽带提速" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import fiveOperation from '../keepRetain.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
export default {
  name: 'familyShop',
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
  height: 99%;
  background-size: 100% 100%;
}
.bg444{
  border: #24F8BA 1px solid;
  height: 99%;
}
.divClass{
  display: block;
  height: 491px;
  width: 521px
}
.divClass3{
  display: block;
  height: 955px;
  width: 521px
}
</style>