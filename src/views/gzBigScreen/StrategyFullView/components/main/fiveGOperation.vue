<template>
  <div class="bg333">
    <el-row :gutter="8.5" style="margin-left: 10px" class="bg444">
      <el-col :span="7">
        <dataConponents gary-code="2000001" title="套餐升级" class="divClass" ></dataConponents>
        <dataConponents gary-code="2000004" title="登网辅导" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
      <el-col :span="10">
        <topDataComponents gary-code="3000001" style="margin-top:30px" bool-id="i"></topDataComponents>
        <fiveOperation></fiveOperation>
      </el-col>
      <el-col :span="7">
        <dataConponents gary-code="2000002" title="5G叠加包" class="divClass"></dataConponents>
        <dataConponents gary-code="2000003" title="终端运营" class="divClass" style="margin-top: 36px;"></dataConponents>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataConponents from '../../../components/dataConponents.vue'
import fiveOperation from '../fiveOperation.vue'
import topDataComponents from '../../../components/topDataComponents.vue'
export default {
  name: 'index',
  props:{
  },
  components:{
    dataConponents,
    topDataComponents,
    fiveOperation
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
.divClass2{
  display: block;
  height: 285px;
  width: 521px
}
</style>