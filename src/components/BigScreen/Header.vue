<template>
  <div class="header flex "  >
    <div class="back item1"  >
      <!-- <div class="back-arrow" @click="backToIndex()"/> -->
      <!-- <div class="back-font" /> -->
    </div>
    <div  class="item8 ">
      <div class="back-arrow" @click="backToIndex()">
        <span>引导页</span>
        <i>上一屏</i>
      </div>
    </div>
    <!-- <slot class="title" name="title" />
    <div id="eparchySelect" class="eparchySelect" v-if="!show">
      <el-select v-model="eparchyCode" :popper-append-to-body="false" style="transform: skewX(34deg);" @change="changeEparchyCode()">
        <el-option
          v-for="item in eparchySelect"
          :key="item.eparchyCode"
          :label="item.eparchyName"
          :value="item.eparchyCode"
        />
      </el-select>
    </div> -->
  </div>
</template>

<script>
import { queryEparchy } from '@/api/bigscreen.js'

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      eparchyCode: '',
      eparchySelect: []
    }
  },
  created() {
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      queryEparchy({}).then(res => {
        res.result.map(i => {
          if (i.eparchyName === '浙江省' || i.eparchyName === '浙江') {
            i.eparchyName = '全省'
            this.eparchyCode = i.eparchyCode
          }
        })
        this.eparchySelect = res.result
      })
    },
    changeEparchyCode() {
      this.$emit('change', this.eparchyCode)
    },
    // 返回引导页
    backToIndex() {
      this.$router.go(-1)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  position: relative;
  width: 100%;

  line-height:42px;
  .back-arrow {
      cursor: pointer;
      display: inline-block;
      width:14%;
      // height: 100%;
      font-family: 'PangMenZhengDao';
      background-image: image-set(
        url("~@/assets/images/bigScreen/back.png") 1x,
        url("~@/assets/images/bigScreen/back@2x.png") 2x
      );
      background-repeat: no-repeat;
      background-size:contain;
      background-position: left 20px;
      // padding-left:12%;
      border:1px solid red;
      text-indent: 15%;
      font-size: 12px;
      i{
        font-style: normal;
      }
      
  }
  // .back {
  //   height: 100%;
  //   width: 100%;
  // }
  // .eparchySelect {
  //   position: absolute;
  //   width: 160.15px;
  //   height: 34.85px;
  //   line-height: 35px;
  //   top: 20px;
  //   right: 15%;
  //   cursor: pointer;
  //   text-align: center;
  //   transform: skewX(-34deg);
  //   background-image: image-set(
  //       url("~@/assets/images/bigScreen/contactExecution/sub-nav-btn.png") 1x,
  //       url("~@/assets/images/bigScreen/contactExecution/sub-nav-btn.png") 2x
  //   );
  //   background-repeat: repeat-x;
  //   background-size: 100% 100%;
  //   padding: 0 10px;
  //   /deep/ .el-input__inner{
  //     background: transparent;
  //     color: #27C5FFFF;
  //     text-align: center;
  //     border: none;
  //     font-size: 20.57px;
  //   }
  //   /deep/ .el-icon-arrow-up:before{
  //     content: '';
  //   }
  //   /deep/ .el-select .el-input .el-select__caret{
  //     background-image: image-set(
  //         url("~@/assets/images/bigScreen/select-arrow.png") 1x,
  //         url("~@/assets/images/bigScreen/select-arrow@2x.png") 2x
  //     );
  //     background-repeat: repeat-x;
  //     background-size: 100% 100%;
  //     width: 22px;
  //     height: 15px;
  //     margin-top: 10px;
  //   }
  //   /deep/ .el-select-dropdown{
  //     background-color: rgba(9,59,125,0.9);
  //     margin: 0px;
  //     box-shadow: 0px 0px 15px #00FFFCFF inset;
  //     border-radius: 0px;
  //     padding: 0 10px;
  //   }
  //   /deep/ .el-select-dropdown__item{
  //     color: #ffffff;
  //     font-size: 18px;
  //     border-bottom: 1px solid;
  //     -moz-border-image:url("~@/assets/images/bigScreen/select-dropdown-item-bottom.png") 30 30 round;	/* Old Firefox */
  //     -webkit-border-image:url("~@/assets/images/bigScreen/select-dropdown-item-bottom.png") round;	/* Safari and Chrome */
  //     -o-border-image:url("~@/assets/images/bigScreen/select-dropdown-item-bottom.png") 30 30 round;		/* Opera */
  //     border-image:url("~@/assets/images/bigScreen/select-dropdown-item-bottom.png") 30 30 round;
  //   }
  //   /deep/ .el-select-dropdown__item:hover{
  //     color: #333;;
  //   }
  //   /deep/ .el-select-dropdown__item.selected{
  //     color: #27C5FFFF;
  //     background-color: transparent;
  //   }
  //   /deep/ .el-popper .popper__arrow, .el-popper .popper__arrow::after{
  //     visibility: hidden;
  //   }
  // }
}
</style>
