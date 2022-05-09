<template>
  <div style="height: 100%">
    <div class="bg333">
      <topDataComponents style="margin-top:10px;margin-left: 10%;width: 80%"></topDataComponents>
      <div class="divSize" :class="selectType===1?'divClass1_select':'divClass1'"></div>
      <div class="divSize" :class="selectType===2?'divClass2_select':'divClass2'"></div>
      <div class="divSize" :class="selectType===3?'divClass3_select':'divClass3'"></div>
      <div class="divSize" :class="selectType===4?'divClass4_select':'divClass4'"></div>
      <div class="divSize" :class="selectType===5?'divClass5_select':'divClass5'"></div>
      <div class="divSize" :class="selectType===6?'divClass6_select':'divClass6'"></div>
    </div>
  </div>


</template>

<script>
import topDataComponents from '../../../components/topDataComponents.vue'

export default {
  name: "loadIndex",
  components:{
    topDataComponents
  },
  props:{
  },
  data(){
    return{
      selectType:1,
      timer:'',
      dataD:{}
    }
  },
  watch:{
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.selectType === 6){
        this.selectType = 1
      }else {
        this.selectType = this.selectType + 1
      }
      this.selectBtn(this.selectType)
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods:{
    selectBtn(type){
      this.$emit('changeSelectType',type)
    }
  }
}
</script>

<style scoped>
.bg333{
  height: 92%;
  background-size: 100% 100%;
}
.bg2{
  height: 92%;
  background-image: url("../../../../../assets/gzBigScreen/3801616760653_.pic_hd.jpg");
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10%;

}
.divSize{
  height: 176px;
  width: 155px;
}
.divClass1{
  background-image: url("../../../../../assets/gzBigScreen/kehubaoyou.png");
  background-size: 100% 100%;
  margin-top: 311px;
  margin-left: 175px;
}
.divClass1_select{
  background-image: url("../../../../../assets/gzBigScreen/kehubaoyou_select.png");
  background-size: 100% 100%;
  margin-top: 311px;
  margin-left: 175px;
}
.divClass2{
  background-image: url("../../../../../assets/gzBigScreen/laxin.png");
  background-size: 100% 100%;
  margin-top: 11px;
  margin-left: 587px;
}
.divClass2_select{
  background-image: url("../../../../../assets/gzBigScreen/laxin_selct.png");
  background-size: 100% 100%;
  margin-top: 11px;
  margin-left: 587px;
}
.divClass3{
  background-image: url("../../../../../assets/gzBigScreen/shengtaiBtn.png");
  background-size: 100% 100%;
  margin-top: -174px;
  margin-left: 1137px;
}
.divClass3_select{
  background-image: url("../../../../../assets/gzBigScreen/shengtaiBtn_select.png");
  background-size: 100% 100%;
  margin-top: -174px;
  margin-left: 1137px;
}
.divClass4{
  background-image: url("../../../../../assets/gzBigScreen/jiantingrh.png");
  background-size: 100% 100%;
  float: right;
  margin-top: -367px;
  margin-right: 255px;
}
.divClass4_select{
  background-image: url("../../../../../assets/gzBigScreen/jiatingrh_se.png");
  background-size: 100% 100%;
  float: right;
  margin-top: -367px;
  margin-right: 255px;
}
.divClass5{
  background-image: url("../../../../../assets/gzBigScreen/liuliang.png");
  background-size: 100% 100%;
  margin-top: -652px;
  margin-right: 417px;
  float: right;
}
.divClass5_select{
  background-image: url("../../../../../assets/gzBigScreen/liuliang_s.png");
  background-size: 100% 100%;
  margin-top: -652px;
  margin-right: 417px;
  float: right;
}
.divClass6{
  background-image: url("../../../../../assets/gzBigScreen/fivegBtn.png");
  background-size: 100% 100%;
  margin-top: -652px;
  margin-left: 332px;
}
.divClass6_select{
  background-image: url("../../../../../assets/gzBigScreen/fiveg_select.png");
  background-size: 100% 100%;
  margin-top: -652px;
  margin-left: 332px;
}
</style>