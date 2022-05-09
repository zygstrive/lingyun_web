import echarts from 'echarts'

export default {
  initZhengceCategory(data, id) {
    // var data_xAxis = data.data.xAxisData;
    // var option = {
    //   title: {
    //     show:false,
    //     top: 15,
    //     left: 5,
    //     textStyle: {
    //       color: '#00B2EE'
    //     }
    //   },
    //   legend: {
    //     show: true,
    //     top: '8%',
    //     right: '5%',
    //     itemWidth: 20,
    //     icon: 'roundRect',
    //     textStyle: {
    //       fontSize: '8',
    //       color: '#00B2EE'
    //     }
    //   },
    //   grid: {
    //     top: '15%',
    //     bottom: '10%',
    //     left: '5%',
    //     right: '5%'
    //   },
    //   xAxis: {
    //     type: 'category',
    //     data: data_xAxis,
    //     boundaryGap:false,
    //     axisLine: {
    //       show: false,
    //       lineStyle: {
    //         color: '#00FFFF', //x轴颜色
    //       }
    //     },
    //     axisTick: {
    //       show: false,
    //       alignWithLabel: false
    //     },
    //     axisLabel: {
    //       interval: 0,
    //       fontSize:'10',
    //       textStyle: {
    //         color: '#4898E2' //坐标轴字颜色
    //       },
    //       margin: 15
    //     },
    //     splitLine: {
    //       show: false
    //     }
    //   },
    //   yAxis: {
    //     type: 'value',
    //     axisTick: {
    //       show: false
    //     },
    //     axisLine: {
    //       show: false,
    //       lineStyle: {
    //         color: '#00FFFF', //y轴颜色
    //       }
    //     },
    //     axisLabel: {
    //       textStyle: {
    //         fontSize: 10,
    //         color: '#4898E2'
    //       }
    //     },
    //     splitLine: {
    //       show: false
    //     }
    //   },
    //   series: [{
    //     name: data.data.legendData[0],
    //     type: 'line',
    //     symbol:'none',
    //     symbolSize:'6',
    //     data: data.data.seriesData[0],
    //     smooth: true,
    //     z:'1',
    //     lineStyle: {
    //       color: "rgba(16, 54, 162, 1)"
    //     },
    //     itemStyle: {
    //       color: "rgba(16, 54, 162, 1)",
    //     },
    //     areaStyle: {
    //       normal: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //           offset: 0,
    //           color: 'rgba(16, 54, 162, .4)'
    //         },
    //           {
    //             offset: 1,
    //             color: 'rgba(0, 96, 255, 0)'
    //           }
    //         ], false),
    //         shadowColor: 'rgba(16, 54, 162, .9)',
    //         shadowBlur: 20
    //       }
    //     },
    //   },{
    //     name: data.data.legendData[1],
    //     type: 'line',
    //     symbol:'none',
    //     symbolSize:'6',
    //     data: data.data.seriesData[1],
    //     smooth: true,
    //     z:'2',
    //     lineStyle: {
    //       color: "rgba(76, 249, 255, 1)"
    //     },
    //     itemStyle: {
    //       color: "rgba(76, 249, 255, 1)",
    //     },
    //     areaStyle: {
    //       normal: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //           offset: 0,
    //           color: 'rgba(76, 249, 255, .4)'
    //         },
    //           {
    //             offset: 1,
    //             color: 'rgba(163, 104, 1, 0)'
    //           }
    //         ], false),
    //         shadowColor: 'rgba(76, 249, 255, .9)',
    //         shadowBlur: 20
    //       }
    //     }
    //   }]
    // }
    var myChart = echarts.init(document.getElementById(id))

    // echart.setOption(option)

    // var hzmap = "mjson/data-hz.json";

    // var yhmap = "/asset/get/s/data-1600653263643-JkbhAV0A0.json";

    // var xsmap = "/asset/get/s/data-1600653259674-GTpBwKU4O.json";

    // var xhmap = "/asset/get/s/data-1600653255389-pxTPxjzUc.json";

    // var xcmap = "/asset/get/s/data-1600653251697-QvFmjFcKd.json";

    // var tlmap = "/asset/get/s/data-1600653248319-E3YPA5Tlm.json";

    // var scmap = "/asset/get/s/data-1600653244513-l3K2yAhTB.json";

    // var lamap = "/asset/get/s/data-1600653223414-5FrpixnXN.json";

    // var jgmap = "/asset/get/s/data-1600653218036-gjxivnBmR.json";

    // var jdmap = "/asset/get/s/data-1600653212836-Fys3xysTL.json";

    // var gsmap = "/asset/get/s/data-1600653207131-SD-0mAm2J.json";

    // var fymap = "/asset/get/s/data-1600653202961-133VfVqOm.json";

    // var camap = "/asset/get/s/data-1600653199148-QX4sdweja.json";

    // var bjmap = "/asset/get/s/data-1600653191497-Jb5ggdJc0.json";

    // 0660 汕尾
    // 0769 东莞
    // 0668 茂名
    // 0766 云浮
    // 0752 惠州
    // 0755 深圳
    // 0762 河源
    // 0759 湛江
    // 0757 佛山
    // 0020 广州
    // 0751 韶关
    // 0760 中山
    // 0768 潮州
    // 0753 梅州
    // 0756 珠海
    // 0754 汕头
    // 0763 清远
    // 0662 阳江
    // 0758 肇庆
    // 0750 江门
    // 0663 揭阳

    //var mapname = hzmap
    // var mapJson = [{
    //         name: "滨江区",
    //         json: bjmap
    //     },
    //     {
    //         name: "淳安县",
    //         json: camap
    //     },
    //     {
    //         name: "富阳区",
    //         json: fymap
    //     },
    //     {
    //         name: "拱墅区",
    //         json: gsmap
    //     },
    //     {
    //         name: "建德市",
    //         json: jdmap
    //     },
    //     {
    //         name: "江干区",
    //         json: jgmap
    //     },
    //     {
    //         name: "临安区",
    //         json: lamap
    //     },
    //     {
    //         name: "上城区",
    //         json: scmap
    //     },
    //     {
    //         name: "桐庐县",
    //         json: tlmap
    //     },
    //     {
    //         name: "下城区",
    //         json: xcmap
    //     },
    //     {
    //         name: "西湖区",
    //         json: xhmap
    //     },
    //     {
    //         name: "萧山区",
    //         json: xsmap
    //     },
    //     {
    //         name: "余杭区",
    //         json: yhmap
    //     }
    // ]
    // var mapDate = []
    var mapDate = [{
            name: '广州市',
            value: [113.2614288, 23.11891174]
        },{
            name: '深圳市',
            value: [114.110672, 22.55639648]
        },{
            name: '东莞市',
            value: [113.7487717, 23.0485363]
        },{
            name: '佛山市',
            value: [113.1145172	, 23.03487778]
        },
    ];


    //myChart.showLoading();
    // let index = -1;
    // var timer = setInterval(function () {
    //   // 隐藏提示框
    //   myChart.dispatchAction({
    //     type: 'hideTip',
    //     seriesIndex: 0,
    //     dataIndex: index
    //   });
    //   // 显示提示框
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: index + 1
    //   });
    //   // 取消高亮指定的数据图形
    //   myChart.dispatchAction({
    //     type: 'downplay',
    //     seriesIndex: 0,
    //     dataIndex: index
    //   });
    //   // 高亮指定的数据图形
    //   myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: index + 1
    //   });
    //   index++;
    //   if (index > 13) {
    //     index = -1;
    //   }
    // }, 2000);


    myChart.on('mousemove', function (e) {
      clearInterval(timer);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
    });
    //---------------------------------------------鼠标移入静止播放
    myChart.on('mouseout', function (e) {
      clearInterval(timer);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      }); //鼠标移出后先把上次的高亮取消
      timer = setInterval(function () {
        // 隐藏提示框
        myChart.dispatchAction({
          type: 'hideTip',
          seriesIndex: 0,
          dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index + 1
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: index
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index + 1
        });
        index++;
        if (index > 13) {
          index = -1;
        }
      }, 2000);
    });
    myChart.on('click', function (e) {

      // var chooseName = mapJson.filter(item => {
      //     return item.name == e.name
      // })
      // mapname = chooseName[0].json
      // mapDate = []
      console.log(e)
      //mapInit()
    })

    setTimeout(function () {
      mapInit()
    }, 1000);
    var mapInit = () => {


      echarts.registerMap('guangzhou', data);
      // myChart.hideLoading();
      var option = {
        // backgroundColor: '#020933',
        title: {
          show: false,
          top: 20,
          left: 10,
          text: '广东地图',
          subtext: '',
          x: 'center',
          textStyle: {
            color: '#00FFFF', //标题颜色设置
            fontSize: 18,
            //fontFamily:'PangMenZhengDao'
            //fontWeight:700
          }
        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter: function(params) {
        //         console.log(params)
        //             return params.name + ' : ' + params.value[2];
        //     }
        // },
        // visualMap: {
        //     min: 0,
        //     max: 1000000,
        //     right: 100,
        //     seriesIndex: 1,
        //     type: 'piecewise',
        //     bottom: 0,
        //     show:false,
        //     textStyle: {
        //         color: '#FFFF'
        //     },
        //     splitList: [{
        //             gt: 50000,
        //             color: '#F5222D',
        //             label: '困难人数大于5万人'
        //         }, //大于5万人
        //         {
        //             gte: 30000,
        //             lte: 50000,
        //             color: '#FA541C ',
        //             label: '困难人数3-5万人'
        //         }, //3-5万人
        //         {
        //             gte: 10000,
        //             lte: 30000,
        //             color: '#FA8C16',
        //             label: '困难人数1-3万人'
        //         }, //1-3万人
        //         {
        //             lte: 10000,
        //             color: '#fbe1d6',
        //             label: '困难人数小于1万人'
        //         }
        //     ]
        // },
        geo: {
          map: 'guangzhou',
          aspectScale: 0.75, //长宽比
          zoom: 1,
        //   roam: false,
          itemStyle: { //阴影发光
            normal: {
              areaColor: '#013C62', //#013C62
              shadowColor: '#182f68', // #182f68 #101071
              shadowOffsetX: 0,
              opacity: 0.94,
              shadowOffsetY: 17 //地图阴影 25 
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          }
        },
        series: [{
            type: 'map',
            // roam: true,
            // backgroundColor:'#FFBE2A',
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff' //地图字体颜色
                },

              },
              emphasis: {
                textStyle: {
                  color: '#fff', //鼠标悬停地图字体颜色 FFBE2A-C45F00

                }
              }
            },

            itemStyle: {
              normal: {
                borderColor: '#2ab8ff', //地图边线颜色'#2ab8ff
                borderWidth: 1.5,
                //areaColor: '#001E89',//地图区块的颜色#12235c 
                areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#001E89"
                  },
                  {
                    offset: 1,
                    color: "#186DFF"
                  }
                ]),
                opacity: .8
              },
              emphasis: {
                //areaColor: '#2AB8FF',
                areaColor: new echarts.graphic.LinearGradient(0.7, 0, 0, 0, [{
                    offset: 0,
                    color: " #C45F00"
                  },
                  {
                    offset: 1,
                    color: "#FFBE2A"
                  }
                ]),
                //opacity: .6,
                borderWidth: 0,
                //color: 'green'
              }
            },
            zoom: 1,
            roam: false,
            map: 'guangzhou' //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#2CFFCB',
                borderColor: '#fff,',
                shadowBlur: 10,
                shadowColor: '#fff'
              }
            },
            data: mapDate
          }

        ]
      };
      myChart.setOption(option);
      // window.onresize = function () {
      //     myChart.resize();
      // }

    }

  }
}