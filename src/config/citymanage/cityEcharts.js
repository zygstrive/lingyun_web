import echarts from 'echarts'
import {color} from "echarts/src/export";

export default {
  initEcharts(data,id,that) {
    const dataxsy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    let xdatalend=[],xData=[],ydatalend=[],yData=[],leagend=[]
    leagend.push(data.lastMonthStr)
    leagend.push(data.thisMonthStr)
    data.dayOrder.forEach(item =>{
      xdatalend.push(item.dayOfMonth)
      xData.push(item.dayAmount)
    })
    data.monthOrder.forEach(item =>{
      ydatalend.push(item.dayOfMonth)
      yData.push(item.dayAmount)

    })
    var echart = echarts.init(document.getElementById(id))
    let colors = ['#04AEFD', '#06349E', 'rgba(9, 86, 247, 1)', 'rgba(9, 86, 247, 0)']
    var option = {
      tooltip:{
        show:true
      },
      grid:{
        top:"100px",
        left:"100px",
        right:"100px",
        bottom:"50px"
      },
      legend: {
        data:leagend,
        x: 'right',
        y:'top',
        selectedMode: false, //取消图标点击事件
        padding: [30, 150 , 0, 0] ,
        textStyle:{
          color: '#02f6fe'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#A9C0FF',
            fontSize: '18px',
            width: 100
          },
          splitLine: {
            show: false
          },
          // boundaryGap: false,
          data: dataxsy
        }

      ],
      yAxis: [
        {
          type: 'value',
          name: '流失规模',
          min: 0,
          max: 500000,
          interval: 50000,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#00A0E9',
              opacity: 0.42
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00A0E9'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#A9C0FF',
              fontSize: '18px',
            },
            formatter: '{value}',
            padding:[0, 10 ,0 ,0]
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: 'value',
          name: '流失率',
          min: 0,
          max: 10,
          interval: 1,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#00A0E9',
              opacity: 0.42
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00A0E9'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#A9C0FF',
              fontSize: '18px',
            },
            formatter: '{value} %',
            padding:[0, 10 ,0 ,0]
          },
          axisTick: {
            show: false,
          },
        }
      ],
      series: [
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [20, 5],//40 ,10
          symbolOffset: [0, 7],//[0, 7]
          z: 12,
          color: "#2DB1EF",
          data: yData,
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [25, 10],//[50, 15]
          symbolOffset: [0, 10],//[0, 12]
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#2EA9E5',
              borderType: 'solid',
              borderWidth: 1
            }
          },
          data: yData
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [25, 10],//[50, 15]
          symbolOffset: [0, 10],//[0, 12]
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#2EA9E5',
              borderType: 'solid',
              borderWidth: 1
            }
          },
          data: yData
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [30, 15],//[70, 20]
          symbolOffset: [0, 14],//[0, 18]
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#19465D',
              borderType: 'solid',
              borderWidth: 2
            }
          },
          data: yData
        },
        {
          name: '流失规模',
          type: 'line',
          symbolSize: 10,//25 //折线节点的大小
          lineStyle: {
            normal: {
              color: colors[0],
            },
          },
          itemStyle: {
            color: colors[2],
            borderColor: colors[1],
            borderWidth: 1,
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(9, 201, 176, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(9, 201, 176, 0)'
                }
              ], false),
            }
          },
          data: yData
        },
        {
          name: '流失率',
          type: 'bar',
          yAxisIndex: 1,
          label: {
            show: false,
          },
          barWidth: "20",//40
          barGap: '10%', // Make series be overlap
          barCateGoryGap: '10%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                offset: 0,
                color: "#38B2E6"
              },
                {
                  offset: 1,
                  color: "#0B3147"
                }
              ]),
              opacity: .8
            },
          },
          data: xData
        },
      ]
    };
    echart.setOption(option)
  }
}
