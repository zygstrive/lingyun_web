<template>
  <div class="contain-main">
    <div style="margin-top:18%">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="700px">
        <!--轨道颜色渐变-->
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(1,36,108);stop-opacity:0" />
            <stop offset="100%" style="stop-color:rgb(20,233,253);stop-opacity:1" />
          </linearGradient>
          <!-- 6边形 -->
          <!-- <pattern v-for="item in list" :key="item.id" :id="`patter-${item.id}`" 
            height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none" 
              xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="item.imageUrl">
            </image>
          </pattern> -->
          <pattern id="patter-1" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-1.png">
            </image>
          </pattern>
          <pattern id="patter-2" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-2.png">
            </image>
          </pattern>
          <pattern id="patter-3" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-3.png">
            </image>
          </pattern>
          <pattern id="patter-4" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-4.png">
            </image>
          </pattern>
          <pattern id="patter-5" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-5.png">
            </image>
          </pattern>
          <pattern id="patter-6" height="1" width="1" patternContentUnits="objectBoundingBox">
            <image height="1" width="1" preserveAspectRatio="none"
              xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../assets/bigScreen/index/icon-6.png">
            </image>
          </pattern>
        </defs>
        <!--轨道-->
        <ellipse
          cx="950"
          cy="200"
          rx="730"
          ry="250"
          stroke="url(#grad)"
          style="fill:transparent;stroke-width:3" />
        <!-- path M415,0 C -950 700, 2500 700, 1250 0 --------->
        <polygon points="150,-140 210,-100 210,-40 150,0 90,-40 90,-100"
          v-for="item in list" :key="item.id" :fill="`url(#patter-${item.id})`" @click="openPage(item.id)">
          <animateMotion
            :id="`first${item.id}`"
            path="M410,0 C -1050 690, 2500 690, 1270 0"
            :begin="`${(item.id-1)*4}s;first${item.id}.begin+24s`"
            dur="24s"
            rotate="0"
            fill="freeze"
          />
        </polygon>
      </svg>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Index',
      data () {
        return {
          list:[
            {
              id: 1,
              imageUrl: '../../assets/bigScreen/index/icon-1.png',
              path: '/bigscreen/customerPortrait'
            },
            {
              id: 2,
              imageUrl: '../../assets/bigScreen/index/icon-2.png',
              path: '/bigscreen/cityOperation'
            },
            {
              id: 3,
              imageUrl: '../../assets/bigScreen/index/icon-3.png',
              path: '/bigscreen/digitalValue'
            },
            {
              id: 4,
              imageUrl: '../../assets/bigScreen/index/icon-4.png',
              path: '/bigscreen/panorama'
            },
            {
              id: 5,
              imageUrl: '../../assets/bigScreen/index/icon-5.png',
              path: '/bigscreen/contactOperation'
            },
            {
              id: 6,
              imageUrl: '../../assets/bigScreen/index/icon-6.png',
              path: '/bigscreen/strategyOperation'
            }
          ]
        }
      },
      methods:{
        //  打开页面
        openPage(index) {
          this.$router.push({ path: this.list[index - 1].path })
        },
      }
    }
</script>

<style lang="less" scoped>
  .contain-main{
    background: url(../../assets/bigScreen/index/bg.jpg) center top no-repeat;
    color: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
