<template>
  <div class="box" :class="type">
    <div v-if="type !== 'border-none'" class="top">
      <div class="top-left" />
      <div class="top-line" />
      <div class="top-right" />
    </div>
    <div v-if="type !== 'border-none'" class="center">
      <div class="center-left" />
      <div class="center-content" />
      <div class="center-right" />
    </div>
    <div v-if="type !== 'border-none'" class="bottom">
      <div class="bottom-left" />
      <div class="bottom-line" />
      <div class="bottom-right" />
    </div>
    <div class="title">
      <div class="title-text">{{ title }}</div>
      <div class="title-line">
        <div class="line" />
        <div class="dot" />
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 6px;
    .top-left {
      width: 4px;
      height: 5px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/top-left.png") 1x, url("~@/assets/images/bigScreen/FlexBox/top-left@2x.png") 2x);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .top-line {
      flex: 1;
      width: 100%;
      height: 5px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/top-line.png") 1x, url("~@/assets/images/bigScreen/FlexBox/top-line@2x.png") 2x);
      background-repeat: repeat-x;
      background-size: 100% 100%;
    }
    .top-right {
      width: 6px;
      height: 5px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/top-right.png") 1x, url("~@/assets/images/bigScreen/FlexBox/top-right@2x.png") 2x);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .center {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 6px;
    .center-left {
      width: 4px;
      height: 100%;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/left-line.png") 1x, url("~@/assets/images/bigScreen/FlexBox/left-line@2x.png") 2x);
      background-repeat: repeat-y;
      background-size: 100% 100%;
    }
    .center-right {
      width: 6px;
      height: 100%;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/right-line.png") 1x, url("~@/assets/images/bigScreen/FlexBox/right-line@2x.png") 2x);
      background-repeat: repeat-y;
      background-size: 100% 100%;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .bottom-left {
      width: 188px;
      height: 76px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/bottom-left.png") 1x, url("~@/assets/images/bigScreen/FlexBox/bottom-left@2x.png") 2x);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .bottom-line {
      flex: 1;
      width: 100%;
      height: 76px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/bottom-line.png") 1x, url("~@/assets/images/bigScreen/FlexBox/bottom-line@2x.png") 2x);
      background-repeat: repeat-x;
      background-size: 100% 100%;
    }
    .bottom-right {
      width: 12px;
      height: 76px;
      background-image: image-set(url("~@/assets/images/bigScreen/FlexBox/bottom-right.png") 1x, url("~@/assets/images/bigScreen/FlexBox/bottom-right@2x.png") 2x);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .title {
    position: absolute;
    left: 12px;
    display: inline-flex;
    flex-direction: column;
    height: 58px;
    /*color: #00E3FF;*/
    color: #fff;
    font-size: 17.5px;
    .title-text {
      padding: 20px 20px 12px 20px;
    }
    .title-line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 10px;
      .line {
        flex: 1;
        height: 1px;
        border-bottom: 1px solid #0869b4;
      }
      .dot {
        width: 6px;
        height: 6px;
        border: 1px solid #0869b4;
        border-radius: 50%;
      }
    }
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &.type-1 {
    width: 438px;
    height: 336px;
    background-image: image-set(url("~@/assets/images/bigScreen/customerPortrait/box-type-1.png") 1x, url("~@/assets/images/bigScreen/customerPortrait/box-type-1@2x.png") 2x);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  &.type-2 {
    width: 438px;
    height: 306px;
    background-image: image-set(url("~@/assets/images/bigScreen/customerPortrait/box-type-2.png") 1x, url("~@/assets/images/bigScreen/customerPortrait/box-type-2@2x.png") 2x);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  &.type-3 {
    width: 100%;
    height: 700px;
    .title {
      .title-text {
        padding-left: 0px;
      }
    }
  }
}
</style>
