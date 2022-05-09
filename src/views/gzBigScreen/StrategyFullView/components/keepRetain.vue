<template>
  <div>
    <div class="operationTitle">
<!--      <el-image class="operationTitle" :src="operationTitle"/>-->
      <img :src="titleImgSrc" style="height: 100%;width: 100%"/>

    </div>
    <div>
<!--      <el-image class="backgroundImg" :src="operationBackGrd"/>-->
      <div v-if="isLastImage" class="backgroundImg2" >
        <img :src="imgSrc" style="height: 100%;width: 100%"/>

      </div>
      <div class="backgroundImg" v-if="!isLastImage">
        <img :src="imgSrc" style="height: 100%;width: 100%"/>
      </div>
    </div>
  </div>

</template>

<script>

  import operationBackGrd from '@/assets/images/bigScreen/strategyfullview/fiveOperationBackGrd.png'
  import operationTitle from '@/assets/images/bigScreen/strategyfullview/fiveOperationTitle.png'
  import taocanshenji from '@/assets/images/bigScreen/strategyfullview/taocanshenji.png'
  import diejiabao from '@/assets/images/bigScreen/strategyfullview/diejiabao.png'
  import dengwangfudao from '@/assets/images/bigScreen/strategyfullview/dengwangfudao.png'
  import zhongduanyunying from '@/assets/images/bigScreen/strategyfullview/zhongduanyunying.png'

  export default {
    name: "keepRetain",
    props:{
      imgSrc:String,
      titleImgSrc:String,
      isLastImage:{
        default:false,
        type:Boolean
      }
    },
    data(){
      return{
        operationBackGrd:operationBackGrd,
        operationTitle:operationTitle,
        taocanshenji:taocanshenji,
        diejiabao:diejiabao,
        dengwangfudao:dengwangfudao,
        zhongduanyunying:zhongduanyunying
      }
    },
    mounted(){

    },
    methods(){

    }

  }
</script>

<style scoped>
  .backgroundImg{
    width: 1646px;
    height: 685px;
    margin-top: 154px;
    margin-left: 102px;
  }
  .backgroundImg2{
    width: 1646px;
    height: 685px;
    margin-top: 154px;
    margin-left: -423px;
  }
  .backgroundImg{
    width: 579.1px;
    height: 685px;
    margin-top: 154px;
    margin-left: 102px;
  }

  .operationTitle{
    width: 390px;
    height: 157px;
    position: absolute;
    margin-top: -155px;
    margin-left: 197px;
  }

  .taocanshenji{
    width: 142px;
    height: 95px;
    position: absolute;
    margin-top: 318px;
    margin-left: 38px;
  }

  .diejiabao{
    width: 142px;
    height: 95px;
    position: absolute;
    margin-top: 310px;
    margin-left: 612px;
  }

  .dengwangfudao{
    width: 142px;
    height: 95px;
    position: absolute;
    margin-top: 622px;
    margin-left: 9px;
  }

  .zhongduanyunying{
    width: 142px;
    height: 95px;
    position: absolute;
    margin-top: 727px;
    margin-left: 625px;
  }

</style>