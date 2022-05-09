<template>
  <div class="box-bg" style="width:7680px; height: 2160px">
    <headerBtn style="width: 100%"></headerBtn>
    <el-row >
      <el-col :span="6" style="height: 100%">
        <components1></components1>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <components2></components2>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <components3></components3>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <components4></components4>
      </el-col>
    </el-row>
    <el-row style="height: 50%">
      <el-col :span="6" style="height: 100%">
        <components5></components5>

      </el-col>
      <el-col :span="6" style="height: 100%">
        <components6></components6>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <components7></components7>
      </el-col>
      <el-col :span="6" style="height: 100%">
        <components8></components8>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import components1 from './components/components1.vue'
  import components2 from './components/components2.vue'
  import components3 from './components/components3.vue'
  import components4 from './components/components4.vue'
  import components5 from './components/components5.vue'
  import components6 from './components/components6.vue'
  import components7 from './components/components7.vue'
  import components8 from './components/components8.vue'
  import headerBtn from '../components/headerBtn'

  export default {
    name: "index",
    components:{
      components1,
      components2,
      components3,
      components4,
      components5,
      components6,
      components7,
      components8,
      headerBtn
    },
    data(){
      return{
        ruteList:[
          '/StrategyFullView',
          '/ecologyOperations/index',
          '/channel',
          '/keyStrategy',
          '/citymanage',
        ]
      }
    },
    methods:{
      gobackRute(){
        this.$router.push({
          path:'/sandtable'
        })
      },
      rutePush(){
        let index = 0
        this.ruteList.forEach(obj => {
          if (this.$route.path === obj){
            if (index < 4){
              this.$router.push({
                path:this.ruteList[index + 1]
              })
            }

          }
          index = index + 1
        })
      }
    }
  }
</script>

<style scoped>
  .box-bg{
    background-image: url("../../../assets/images/bigScreen/ecologyOperations/bg_qwjy.jpg");
    background-size: 100% 100%;
  }
  .headerBg{
    height: 85px;
    width: 100%;
    position: absolute;
    z-index: 10
  }
  .rightBtn {
    height: 50px;
    margin-top: 14px;
    width: 467px;
    float: right;
    margin-right: 50px;
    /* background-size: 100% 100%; */
    /* background-image: url("../../../assets/gzBigScreen/header_next_btn.png"); */
  }
  .leftBtn{
    margin-top: 14px;
    height: 50px;
    width: 467px;
    float: left;
    margin-left: 50px;
    /*background-image: url("../../../assets/gzBigScreen/header_back_btn.png");*/
    /*background-size: 100% 100%;*/
  }
</style>