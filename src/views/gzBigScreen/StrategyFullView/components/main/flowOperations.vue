<template>
  <div class="bg333">
    <el-row :gutter="8.5" style="margin-left: 10px" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000022" title="2I价值经营" class="divClass" ></dataConponents>
        <dataConponents gary-code="2000024" title="创新业务" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
      <el-col :span="10">
        <topDataComponents gary-code="3000002" bool-id="c" style="margin-top:30px"></topDataComponents>
        <fiveOperation  :img-src="require('@/assets/gzBigScreen/fullview_bg1.png')"
                     :title-img-src="require('@/assets/gzBigScreen/liuliang_title.png')"></fiveOperation>

      </el-col>
      <el-col :span="7">
        <dataConponents gary-code="2000023" title="传统流量包" class="divClass3"></dataConponents>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import fiveOperation from '../keepRetain.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
export default {
  name: 'flowOperations',
  components:{
    dataConponents,
    topDataComponents,
    fiveOperation
  },
  props:{
  },
  data(){
    return{
      dataD:{}
    }
  },
  mounted() {
  },
  methods:{

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
  border: #24F8BA 1px solid;
}
.divClass{
  display: block;
  height: 451px;
  width: 521px
}
.divClass3{
  display: block;
  height: 955px;
  width: 521px
}
</style>