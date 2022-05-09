import echarts from 'echarts'

export default {
  initChart(data,id) {
    let xdatalend=[],xData=[],ydatalend=[],yData=[],leagend=[]
    let thisYear = data.thisMonthStr
    let lastYear = data.lastMonthStr
    leagend.push(data.lastMonthStr)
    leagend.push(data.thisMonthStr)
    data.lastMonth.forEach(item => {
      xdatalend.push(item.dayOfMonth)
      xData.push(item.dayAmount)
    })
    data.thisMonth.forEach(item => {
      ydatalend.push(item.dayOfMonth)
      yData.push(item.dayAmount)
    })
    var echart = echarts.init(document.getElementById(id))

    let colors = ['#04AEFD', '#06349E', 'rgba(9, 86, 247, 1)', 'rgba(9, 86, 247, 0)']
    if(id == 'xsChart') {
      colors = ['#0EDE6B','#06349E', 'rgba(9, 201, 176, 1)', 'rgba(9, 201, 176, 0)']
    }
    if(id == 'qdChart'){
      colors = ['#7637C4','#06349E', 'rgba(118, 55, 196, 1)', 'rgba(118, 55, 196, 0)']
    }
    var option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (data) {
          if(data.length > 1){
            return data[0].axisValue + "<br>" + "2020年：" + data[0].value + "%<br> 2021年：" + data[1].value + "%"
          }else {
            return data[0].axisValue + "<br>" + "2020年：" + data[0].value + "%"
          }
        }
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
      xAxis: [{
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
        boundaryGap: false,
        data: xdatalend
      }],
      yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#00A0E9',
            opacity: 0.42
          }
        },
        axisLine: {
          show: false,
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
      }],
      series: [
        {
          name: lastYear,
          type: 'line',
          showAllSymbol: true,
          symbol: 'circle',
          smooth: true,
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: colors[0],
            },
          },
          label: {
            show: false,
          },
          itemStyle: {
            color: colors[0],
            borderColor: colors[0],
            borderWidth: 1,
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colors[2]
                },
                {
                  offset: 1,
                  color: colors[3]
                }
              ], false),
            }
          },
          data: xData
        },
        {
          name: thisYear,
          type: 'line',
          showAllSymbol: true,
          symbol: 'circle',
          smooth: true,
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: colors[2],
            },
          },
          label: {
            show: false,
          },
          itemStyle: {
            color: colors[2],
            borderColor: colors[2],
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
        }
      ]
    };
    echart.setOption(option)
  }
}
