<template>
  <div class="headerBg">
    <div class="leftBtn">
      <span
        style="font-family: PangMenZhengDaoBiaoTiTi;font-size: 30px;color: #00FFFF;margin-left: 92px"
        @click="gobacksandtable"
      >
        引导页</span>
      <span
        style="font-family: PangMenZhengDaoBiaoTiTi;font-size: 30px;color: #00FFFF;margin-left: 19px"
        @click="gobackRute"
      >上一屏</span>
    </div>
    <div style="" class="rightBtn" @click="rutePush"  v-if="!flag"></div>
  </div>
</template>

<script>
export default {
  name: "headerBtn",
  props:{
    flag:Boolean
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
    gobacksandtable(){
      this.$router.push({
        path:'/'
      })
    },
    gobackRute(){
      // this.$router.back(-1)
      let index = this.ruteList.findIndex(i => i == this.$route.path)
      this.ruteList.forEach(obj => {
        if (this.$route.path === obj){
          if (index > 0){
            this.$router.push({
              path:this.ruteList[index - 1]
            })
            return
          } else { 
            this.$router.push({
              path: '/'
            })
          }
          index = index - 1
        }
      })
    },
    rutePush(){
      let index = this.ruteList.findIndex(i => i == this.$route.path)
      this.ruteList.forEach(obj => {
        if (this.$route.path === obj){
          if (index < 4){
            this.$router.push({
              path:this.ruteList[index + 1]
            })
            return
          }
          index = index + 1
        }
      })
    }
  }
}
</script>

<style scoped>
.headerBg{
  height: 85px;
  width: 100%;
  position: relative !important;
  z-index: 10;

}
.rightBtn {
  position: sticky;
  right: 50px;
  height: 50px;
  margin-top: 14px;
  width: 467px;
  float: right;
  background-size: 100% 100%;
  cursor: pointer;
  background-image: url("../../../assets/gzBigScreen/header_next_btn.png");
}
.leftBtn{
  position: sticky;
  left: 50px;
  margin-top: 14px;
  height: 50px;
  width: 484px;
  float: left;
  line-height: 50px;
  background-image: url("../../../assets/gzBigScreen/back_index.png");
  background-size: 100% 100%;
}

.leftBtn span{
  cursor: pointer;
}
</style>