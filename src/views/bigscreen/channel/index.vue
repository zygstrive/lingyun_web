
<template>
  <div class="main">
    <div class="header">
        <headerBtn style="width: 100%"></headerBtn>
    </div>
      <el-row class="content">
        <!-- <ChannelIndex></ChannelIndex> -->
        <el-col class="col" :span="6">
            <ChannelIndex></ChannelIndex>
        </el-col>
        <el-col class="col" :span="6">
            <ChannelXs></ChannelXs>
        </el-col>
        <el-col class="col" :span="6">
            <ChannelXt></ChannelXt>
        </el-col>
        <el-col class="col" :span="6">
            <ChannelWh></ChannelWh>
        </el-col>
      </el-row>
  </div>
</template>

<script>
    import headerBtn from '../../gzBigScreen/components/headerBtn'
    import ChannelIndex from './channelIndex.vue'
    import ChannelXs from './channelXs.vue'
    import ChannelXt from './channelXt.vue'
    import ChannelWh from './channelWh.vue'
    export default {
        name: 'fullContactIndex',
        components:{
            ChannelIndex,
            ChannelXs,
            ChannelXt,
            ChannelWh,
            headerBtn
        },
        data () {
            return {

            }
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
// /deep/ .center{
//     border:1px solid red
// }
.main{
    // width: 100%;
    // height: 100%;
    // overflow: hidden;
    width: 7620px;
    height: 2160px;
    background-image: url('~@/assets/images/bg.jpg');
    background-size: 100% 100%;
    // background-repeat: no-repeat;
    font-size: 16px;
    .header{
        height: 85px;
        margin-bottom: 10px;
    }
    .content{
      //margin-top: 85px;
        height: calc(100%  - 5.9375rem);
      //height: 100%;
    }
    .col{
        height: 100%;
    }
}

</style>
