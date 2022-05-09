<template>
    <div class="three-container">
        <div class="title">外呼</div>
        <div class="center">
          <div class="map">
            <div v-for="(i,index) in mapList.slice(0, 4)" 
              :class="['mapDetails afterL',{'mleft' : index == 1 || index == 2},{'mleft1' : index == 0 || index == 3},{'active': active == index + 1}]"
              :style="{'top': 5 + (index * 25) + '%'}" :key="index">
              <div class="city">{{i.city}}</div>
              <el-row class="content">
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12">月累计坐席</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月触达量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mCdValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月办理量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mBlValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月转化率</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mRate}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12">当日坐席</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日触达量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dCdValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日办理量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dBlValue}}<span class="f18"></span>
                      </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日转化率</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dRate}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <!-- <div class="img" id="map"></div> -->
            <div class="img">
              <div :class="['circle', 'circle1',{'active': active == 1}]"><i></i></div>
              <div :class="['circle', 'circle2',{'active': active == 2}]"><i></i></div>
              <div :class="['circle', 'circle3',{'active': active == 3}]"><i></i></div>
              <div :class="['circle', 'circle4',{'active': active == 4}]"><i></i></div>
              <div :class="['circle', 'circle5',{'active': active == 5}]"><i></i></div>
              <div :class="['circle', 'circle6',{'active': active == 6}]"><i></i></div>
              <div :class="['circle', 'circle7',{'active': active == 7}]"><i></i></div>
              <div :class="['circle', 'circle8',{'active': active == 8}]"><i></i></div>
              <img src="~@/assets/images/bigScreen/channel/mapBg.png" />
            </div>
            <div v-for="(i,index) in mapList.slice(4, 8)" 
              :class="['mapDetails afterR',{'mright' : index == 1 || index == 2},{'mright1' : index == 0 || index == 3},{'afterR1' : index == 1},{'active': active == index + 5}]"
              :style="{'top':(index == 1 ? 25 : 5 + (index * 25)) + '%'}" :key="index+5">
              <div class="city">{{i.city}}</div>
              <el-row class="content">
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12">月累计坐席</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月触达量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mCdValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月办理量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mBlValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">月转化率</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.mRate}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12">当日坐席</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日触达量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dCdValue}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日办理量</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dBlValue}}<span class="f18"></span>
                      </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">日转化率</el-col>
                    <el-col :span="12" class="color f24">
                      {{i.dRate}}<span class="f18"></span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="center">
          <div v-for="(i,index) in bottomChart" :key="i.id" :class="['chartItem', {'paddLeft': index%2 == 0}]">
            <div class="chartTitle">{{i.title}}</div>
            <div class="lineChart">
              <el-table :data="i.table" class="table" v-if="index%2 == 0">
                <el-table-column label="" prop="url" width='70'>
                  <template slot-scope="scope">
                    <img :src="scope.row.url" />
                  </template>
                </el-table-column>
                <el-table-column label="名称" prop="name" width="220"></el-table-column>
                <el-table-column label="触达量" prop="jtValue"></el-table-column>
                <el-table-column label="办理量" prop="blValue"></el-table-column>
                <el-table-column label="转化率" prop="rate">
                  <template slot-scope="scope">
                   {{scope.row.rate ? scope.row.rate + ' %' : ''}}
                  </template>
                </el-table-column>
              </el-table>
              <el-table :data="i.table" class="table" v-else>
                <el-table-column label="" prop="url" width='70'>
                  <template slot-scope="scope">
                    <img :src="scope.row.url" />
                  </template>
                </el-table-column>
                <el-table-column label="姓名" prop="name" width="220"></el-table-column>
                <el-table-column label="工号" prop="num"></el-table-column>
                <el-table-column label="触达量" prop="jtValue"></el-table-column>
                <el-table-column label="办理量" prop="blValue"></el-table-column>
                <el-table-column label="转化率" prop="rate">
                  <template slot-scope="scope">
                   {{scope.row.rate ? scope.row.rate + ' %' : ''}}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import { queryCallChnlView, queryCallChnlTop} from '@/api/bigscreen.js'
  export default {
    name: 'channelWh',
    data () {
      return {
        active: 1,
        mapList: [],
        bottomChart: []
      }
    },
    mounted() {
      this.initMap()
      this.initTable()
    },
    methods:{
      initMap() {
        let that = this
        queryCallChnlView({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            that.mapList = [{
              city: '广州',
              mValue: result.EP0020 && result.EP0020.monthseatNum || '-',
              mCdValue: result.EP0020 && result.EP0020.monthtouchNum || '-',
              mBlValue: result.EP0020 && result.EP0020.monthOrderNum || '-',
              mRate: result.EP0020 && result.EP0020.monthcovorRate || '-',
              dValue: result.EP0020 && result.EP0020.dayseatNum || '-',
              dCdValue: result.EP0020 && result.EP0020.daytouchNum || '-',
              dBlValue: result.EP0020 && result.EP0020.dayOrderNum  || '-',
              dRate: result.EP0020 && result.EP0020.daycovorRate || '-',
            },{
              city: '深圳',
              mValue: result.EP0755 && result.EP0755.monthseatNum || '-',
              mCdValue: result.EP0755 && result.EP0755.monthtouchNum || '-',
              mBlValue: result.EP0755 && result.EP0755.monthOrderNum || '-',
              mRate: result.EP0755 && result.EP0755.monthcovorRate || '-',
              dValue: result.EP0755 && result.EP0755.dayseatNum || '-',
              dCdValue: result.EP0755 && result.EP0755.daytouchNum || '-',
              dBlValue: result.EP0755 && result.EP0755.dayOrderNum  || '-',
              dRate: result.EP0755 && result.EP0755.daycovorRate || '-',
            },{
              city: '东莞',
              mValue: result.EP0769 && result.EP0769.monthseatNum || '-',
              mCdValue: result.EP0769 && result.EP0769.monthtouchNum || '-',
              mBlValue: result.EP0769 && result.EP0769.monthOrderNum || '-',
              mRate: result.EP0769 && result.EP0769.monthcovorRate || '-',
              dValue: result.EP0769 && result.EP0769.dayseatNum || '-',
              dCdValue: result.EP0769 && result.EP0769.daytouchNum || '-',
              dBlValue: result.EP0769 && result.EP0769.dayOrderNum  || '-',
              dRate: result.EP0769 && result.EP0769.daycovorRate || '-',
            },{
              city: '佛山',
              mValue: result.EP0757 && result.EP0757.monthseatNum || '-',
              mCdValue: result.EP0757 && result.EP0757.monthtouchNum || '-',
              mBlValue: result.EP0757 && result.EP0757.monthOrderNum || '-',
              mRate: result.EP0757 && result.EP0757.monthcovorRate || '-',
              dValue: result.EP0757 && result.EP0757.dayseatNum || '-',
              dCdValue: result.EP0757 && result.EP0757.daytouchNum || '-',
              dBlValue: result.EP0757 && result.EP0757.dayOrderNum  || '-',
              dRate: result.EP0757 && result.EP0757.daycovorRate || '-',
            },{
              city: '珠三角',
              mValue: result.zsj && result.zsj.monthseatNum || '-',
              mCdValue: result.zsj && result.zsj.monthtouchNum || '-',
              mBlValue: result.zsj && result.zsj.monthOrderNum || '-',
              mRate: result.zsj && result.zsj.monthcovorRate || '-',
              dValue: result.zsj && result.zsj.dayseatNum || '-',
              dCdValue: result.zsj && result.zsj.daytouchNum || '-',
              dBlValue: result.zsj && result.zsj.dayOrderNum  || '-',
              dRate: result.zsj && result.zsj.daycovorRate || '-',
            },{
              city: '粤东',
              mValue: result.yd && result.yd.monthseatNum || '-',
              mCdValue: result.yd && result.yd.monthtouchNum || '-',
              mBlValue: result.yd && result.yd.monthOrderNum || '-',
              mRate: result.yd && result.yd.monthcovorRate || '-',
              dValue: result.yd && result.yd.dayseatNum || '-',
              dCdValue: result.yd && result.yd.daytouchNum || '-',
              dBlValue: result.yd && result.yd.dayOrderNum  || '-',
              dRate: result.yd && result.yd.daycovorRate || '-',
            },{
              city: '粤西',
              mValue: result.yx && result.yx.monthseatNum || '-',
              mCdValue: result.yx && result.yx.monthtouchNum || '-',
              mBlValue: result.yx && result.yx.monthOrderNum || '-',
              mRate: result.yx && result.yx.monthcovorRate || '-',
              dValue: result.yx && result.yx.dayseatNum || '-',
              dCdValue: result.yx && result.yx.daytouchNum || '-',
              dBlValue: result.yx && result.yx.dayOrderNum  || '-',
              dRate: result.yx && result.yx.daycovorRate || '-',
            },{
              city: '粤北',
              mValue: result.yb && result.yb.monthseatNum || '-',
              mCdValue: result.yb && result.yb.monthtouchNum || '-',
              mBlValue: result.yb && result.yb.monthOrderNum || '-',
              mRate: result.yb && result.yb.monthcovorRate || '-',
              dValue: result.yb && result.yb.dayseatNum || '-',
              dCdValue: result.yb && result.yb.daytouchNum || '-',
              dBlValue: result.yb && result.yb.dayOrderNum  || '-',
              dRate: result.yb && result.yb.daycovorRate || '-',
            }]

            // setInterval(() => {
            //   that.active++
            //   if(that.active > 6){
            //     that.active = 1
            //   }
            // }, 5000);
          }
        })

        setInterval(() => {
          this.active++
          if(this.active > 8){
            this.active = 1
          }
        }, 5000);
      },
      initTable() {
        let that = this
        that.bottomChart = [{
            title: '转化率前TOP5团队',
            table: []
        },{
            title: '转化率前TOP5坐席',
            table: []
        },{
            title: '转化率后TOP5团队',
            table: []
        },{
            title: '转化率后TOP5坐席',
            table: []
        }]
        queryCallChnlTop({}).then(res => {
          if (res.rspCode === '0000') {
            let result = res.result || ''
            let TEAMTOP = []
            result && result.TEAMTOP && result.TEAMTOP.length > 0 && result.TEAMTOP.forEach((i, index) => {
              TEAMTOP.push({
                name: i.teamName || '-',
                jtValue: i.dayTouchNum || '-',
                blValue: i.dayOrderNum || '-',
                rate: i.converRate || '-',
                url: require(`../../../assets/images/bigScreen/channel/num_${index+1}.png`),
              })
            });
            
            let SEATTOP = []
            result && result.SEATTOP && result.SEATTOP.length > 0 && result.SEATTOP.forEach((i, index) => {
              SEATTOP.push({
                name: i.teamName || '-',
                num: i.teamId || '-',
                jtValue: i.dayTouchNum || '-',
                blValue: i.dayOrderNum || '-',
                rate: i.converRate || '-',
                url: require(`../../../assets/images/bigScreen/channel/num_${index+1}.png`),
              })
            }); 

            let TEAMBOT = []
            result && result.TEAMBOT && result.TEAMBOT.length > 0 && result.TEAMBOT.forEach((i, index) => {
              TEAMBOT.push({
                name: i.teamName || '-',
                num: i.teamId || '-',
                jtValue: i.dayTouchNum || '-',
                blValue: i.dayOrderNum || '-',
                rate: i.converRate || '-',
                url: require(`../../../assets/images/bigScreen/channel/numOn_${index+1}.png`),
              })
            });

            let SEATBOT = []
            result && result.SEATBOT && result.SEATBOT.length > 0 && result.SEATBOT.forEach((i, index) => {
              SEATBOT.push({
                name: i.teamName || '-',
                num: i.teamId || '-',
                jtValue: i.dayTouchNum || '-',
                blValue: i.dayOrderNum || '-',
                rate: i.converRate || '-',
                url: require(`../../../assets/images/bigScreen/channel/numOn_${index+1}.png`),
              })
            }); 
            that.bottomChart = [{
                title: '转化率前TOP5团队',
                table: TEAMTOP
            },{
                title: '转化率前TOP5坐席',
                table: SEATTOP
            },{
                title: '转化率后TOP5团队',
                table: TEAMBOT
            },{
                title: '转化率后TOP5坐席',
                table: SEATBOT
            }]
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  /deep/ .el-table{
      background: none;
      font-family: Microsoft YaHei;
      font-weight: 400;
  }
  /deep/.el-table th{
      padding: 5px 0;
      background: none;
      text-align: center;
      color: #02F6FF !important;
      font-size: 1.0625rem;
  }
  /deep/ .el-table tr{
      background-color: transparent;
  }
  /deep/.el-table__body-wrapper tr{
      background-image: url('~@/assets/images/bigScreen/channel/border1.png') !important;
      background-position: bottom;
      background-size: 100% 2.4375rem;
      background-repeat: no-repeat;
  }
  /deep/.el-table td{
      padding: 6px 0;
      background: none !important;
      border: none !important;
      text-align: center !important;
      color: #FFFFFF;
      font-family: 'Bebas Neue';
      font-size: 1.375rem;
  }
  /deep/ .el-table th.is-leaf, .el-table td{
      border: none !important;
      color: #FFFFFF ;
  }
  /deep/.el-table::before{
      height: 0 !important;
  }
  /deep/.el-table th > .cell{
      display: contents !important;
  }

.three-container{
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/images/bigScreen/channel/border3.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    font-size: 16px;
    font-family: Microsoft YaHei;
    .title{
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 48px;
      font-family: PangMenZhengDaoBiaoTiTi;
      font-weight: 400;
      color: #33ACDE;
      top: 2px;
    }
    .center{
      width: 100%;
      padding: 1.875rem 4.375rem;
      height: 50%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
    }
    .center:last-child{
      padding-top: 0;
      height: 49%;
    }
    .map{
      width: 100%;
      height: 100%;
      position: relative;
      .img{
        width: 60%;
        height: 100%;
        margin: 0 auto;
      }
      img{
        width: 70.625rem;
        height: 58.875rem;
        margin-top: 10%;
      }
      .circle{
        width: 2.625rem;
        height: 2.625rem;
        border: 5px solid #c1f3ff;
        border-radius: 100%;
        position: absolute;
        i{
          display: block;
          width: 1.3125rem;
          height: 1.3125rem;
          background: #2CFFCB;
          border-radius: 100%;
          margin: .3125rem auto;
        }
      }
      .circle1{
        left: 51%;
        top: 43%;
      }
      .circle1::after{
        content: '';
        position: absolute;
        left: -151px;
        top: -359px;
        width: 3px;
        height: 422px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(-47deg);
      }
      .circle2{
        left: 56%;
        top: 54%;
      }
      .circle2::after{
        content: '';
        position: absolute;
        left: -230px;
        top: -314px;
        width: 3px;
        height: 482px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(-70deg);
      }
      .circle3{
        left: 51%;
        top: 50%;
      }
      .circle3::after{
        content: '';
        position: absolute;
        left: -185px;
        top: -121px;
        width: 3px;
        height: 377px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(-108deg);
      }
      .circle4{
        left: 46.5%;
        top: 50%;
      }
      .circle4::after{
        content: '';
        position: absolute;
        left: -112px;
        top: -1px;
        width: 3px;
        height: 405px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(-147deg);
      }
      .circle5{
        left: 49%;
        top: 56%;
      }
      .circle5::after{
        content: '';
        position: absolute;
        left: 158px;
        top: -457px;
        width: 3px;
        height: 490px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(33deg);
      }
      .circle6{
        left: 76%;
        top: 43%;
      }
      .circle6::after{
        content: '';
        position: absolute;
        left: -55px;
        top: -120px;
        width: 3px;
        height: 175px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(-42deg);
      }
      .circle7{
        left: 41%;
        top: 42%;
      }
      .circle7::after{
        content: '';
        position: absolute;
        left: 265px;
        top: -135px;
        width: 3px;
        height: 500px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(111deg);
      }
      .circle8{
        left: 58%;
        top: 48%;
      }
      .circle8::after{
        content: '';
        position: absolute;
        left: 70px;
        top: 29px;
        width: 3px;
        height: 368px;
        background: #26FFCF;
        opacity: .7;
        transform: rotate(162deg);
      }
      .active::after{
        background: #FFDF60;
      }
      .active{
        i{
          background: #FFDF60;
        }
      }
    }
    .mapDetails{
      width: 28%;
      // height: 12.9375rem;
      background-image: url('~@/assets/images/bigScreen/channel/bg5.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      line-height: 2.1875rem;
      .city{
        position: absolute;
        color: #00FFFF;
        font-size: 1.5rem;
        width: 4.25rem;
        top: 1.5625rem;
        text-align: center;
        font-family: 'YouSheBiaoTiHei';
      }
      .content{
        padding: 6% 9% 6% 17%;
        font-size: 18px;
        color: #fff;
      }
      .color{
        font-family: 'Bebas Neue';
        background: linear-gradient(0deg, #FFFF00 0%, #FFFDBD 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .f24{
        font-size: 1.5rem;
        font-family: 'Bebas Neue';
      }
      .f18{
        font-size: 1.125rem;
        font-family: PangMenZhengDaoBiaoTiTi;
      }
    }
    .mleft{
      left: -1%;
    }
    .mleft1{
      left: 2%;
    }
    .afterL::after{
      content: '';
      position: absolute;
      right: 0;
      top: 36%;
      width: 3px;
      height: 16px;
      background: #26FFCF;
    }
    .afterL::before{
      content: '';
      position: absolute;
      left: 100%;
      top: 39%;
      width: 14%;
      height: 3px;
      background: #26FFCF;
      opacity: .7;
    }
    .afterR{
      background-image: url('~@/assets/images/bigScreen/channel/bg9.png');
      .city{
        right: 0;
      }
      .content {
        padding: 6% 9% 6% 11%;
      }
    }
    .afterR::after{
      content: '';
      position: absolute;
      left: 0;
      top: 36%;
      width: 3px;
      height: 16px;
      background: #26FFCF;
    }
    .afterR::before{
      content: '';
      position: absolute;
      left: -15%;
      top: 39%;
      width: 14%;
      height: 3px;
      background: #26FFCF;
      opacity: .7;
    }
    .afterR1::before{
      content: '';
      position: absolute;
      left: -12%;
      top: 39%;
      width: 12%;
      height: 3px;
      background: #26FFCF;
      opacity: .7;
    }
    .mright{
      right: -1%;
    }
    .mright1{
      right: 2%;
    }
    .active{
      background-image: url('~@/assets/images/bigScreen/channel/bg5-on.png');
    }
    .active.afterR{
      background-image: url('~@/assets/images/bigScreen/channel/bg9-on.png');
    }
    .active:after{
      background: #FFDF60;
    }
    .active:before{
      background: #FFDF60;
    }
    .paddLeft{
      padding-right: 2%;
    }
    .chartItem{
      width: 50%;
      height: 50%;
      .chartTitle{
        font-size: 2.25rem;
        font-family: YouSheBiaoTiHei;
        color: #14DBFF;
        height: 4.375rem;
        line-height: 4.8125rem;
        margin: 1.25rem 0 .625rem;
        padding-left: 1.875rem;
        background-image: url('~@/assets/images/bigScreen/channel/bg8.png');
        background-repeat: no-repeat;
      }
      .lineChart{
        width: 100%;
        padding: 1rem 1.875rem;
        height: calc(100% - 6.25rem);
        background-image: url('~@/assets/images/bigScreen/channel/border6.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .table{
        img{
          width: 2.8125rem;
          height: 3.0625rem;
        }
      }
    }
}
</style>
