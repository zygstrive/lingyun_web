<template>
  <div class="bg">
    <el-row>
      <el-col :span="4">
        <a @click="gotoRute('/StrategyFullView')">
          <el-image class="routeImg quancelueyunying" :src="quancelueyunying">
          </el-image>
        </a>
      </el-col>
      <el-col :span="4">
        <a @click="gotoRute('/ecologyOperations/index')"><el-image class="routeImg quanwangjingying" :src="quanwangjingying"></el-image></a>
      </el-col>
      <el-col :span="4">
        <a @click="gotoRute('/channel')"><el-image class="routeImg chudianyunying" :src="chudianyunying"></el-image></a>
      </el-col>
      <el-col :span="4">
        <a @click="gotoRute('/keyStrategy')"><el-image class="routeImg zhongdianyewu" :src="zhongdianyewu"></el-image></a>
      </el-col>
      <el-col :span="4">
        <a @click="gotoRute('/citymanage')"><el-image class="routeImg dishikanban" :src="dishikanban"></el-image></a>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>

  </div>
</template>

<script>

  import quancelueyunying from '@/assets/images/bigScreen/sandtable/sandtable_5.png'
  import quanwangjingying from '@/assets/images/bigScreen/sandtable/sandtable_4.png'
  import chudianyunying from '@/assets/images/bigScreen/sandtable/sandtable_3.png'
  import zhongdianyewu from '@/assets/images/bigScreen/sandtable/sandtable_2.png'
  import dishikanban from '@/assets/images/bigScreen/sandtable/sandtable_1.png'
  export default {
    name: "index",
    data(){
      return{
        quancelueyunying:quancelueyunying,
        quanwangjingying:quanwangjingying,
        chudianyunying:chudianyunying,
        zhongdianyewu:zhongdianyewu,
        dishikanban:dishikanban
      }
    },
    components:{
    },
    methods:{
      gotoRute(ruteName){
        this.$router.push({
          path:ruteName
        })
      }
    }
  }
</script>

<style scoped>
  .bg{
    /*margin: 0px 0px 0px 0px;*/
    /* height:100%; */
    width: 7620px;
    height: 2160px;
    background-image: url("../../../assets/images/bigScreen/sandtable/sandtablebg.jpg");
    background-size: 100% 100%;
    /*border: #24F8BA 1px solid;*/
    /*border-left-width: 0px;*/
    /*border-top-width: 0px;*/
    /*border-bottom-width: 0px;*/
    /*border-right-width: 0px;*/
  }
  .routeImg{
    width: 674px;
    height: 674px;
  }
  .quancelueyunying{
    margin-top: 406px;
    margin-left: 1312px;
  }
  .quanwangjingying{
    margin-top: 1069px;
    margin-left: 898px;
  }
  .chudianyunying{
    margin-top: 1164px;
    margin-left: 922px;
  }
  .zhongdianyewu{
    margin-top: 1063px;
    margin-left: 958px;
  }
  .dishikanban{
    margin-top: 381px;
    margin-left: 440px;
  }
</style>