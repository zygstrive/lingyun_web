<template>
  <div class="bg333">
    <div style="display: block;height: 10px">
    </div>
    <el-row :gutter="8.5" style="margin-left: 10px" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000015" title="以移带移" class="divClass" ></dataConponents>
      </el-col>
      <el-col :span="17">
        <topDataComponents gary-code="3000005" bool-id="f" style="margin-top:30px"></topDataComponents>
        <fiveOperation :img-src="require('@/assets/gzBigScreen/fullview_bg6.png')"
                       :is-last-image="true"
                    :title-img-src="require('@/assets/gzBigScreen/fullview_title5.png')"
        ></fiveOperation>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import fiveOperation from '../keepRetain.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
export default {
  name: 'getNew',
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
  width: 99%;
}
.divClass{
  display: block;
  height: 516px;
  width: 521px
}
.divClass3{
  display: block;
  height: 955px;
  width: 521px
}
</style>