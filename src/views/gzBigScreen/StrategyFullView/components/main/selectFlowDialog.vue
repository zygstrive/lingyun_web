<template>
  <div class="bg333">
    <div v-if="selectType===1" class="bg2">
    </div>
    <div v-if="selectType===2" class="bg3">
    </div>
    <div v-if="selectType===3" class="bg4">
    </div>
    <div v-if="selectType===4" class="bg5">
    </div>
    <div v-if="selectType===5" class="bg6">
    </div>
    <div v-if="selectType===6" class="bg7">
    </div>
  </div>
</template>

<script>
export default {
  name: "selectFlowDialog",
  props:{
    selectType:Number
  }
}
</script>

<style scoped>
.bg333{
  height: 100%;
  background-size: 100% 100%;
}
.bg2{
  height: 854px;
  width: 1690px;
  margin-left: 92px;
  background-image: url("../../../../../assets/gzBigScreen/kehubaoyou_leval3.png");
  background-size: 100% 100%;
}
.bg3{
  height: 872px;
  width: 408px;
  margin: auto;
  background-image: url("../../../../../assets/gzBigScreen/laxin_leval3.png");
  background-size: 100% 100%;
}
.bg4{
  height: 1062px;
  width: 1000px;
  margin: auto;
  background-image: url("../../../../../assets/gzBigScreen/shengtaijingying_levale3.png");
  background-size: 100% 100%;
}
.bg5{
  height: 781px;
  width: 1683px;
  margin: auto;
  background-image: url("../../../../../assets/gzBigScreen/jiatingronghe_leval3.png");
  background-size: 100% 100%;
}
.bg6{
  height: 1000px;
  width: 1738px;
  margin: auto;
  background-image: url("../../../../../assets/gzBigScreen/liuliangjingying_leval3.png");
  background-size: 100% 100%;
}

.bg7{
  height: 999px;
  width: 1738px;
  margin: auto;
  background-image: url("../../../../../assets/gzBigScreen/fiveg_leval3.png");
  background-size: 100% 100%;
}

</style>