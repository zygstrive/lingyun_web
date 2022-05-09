import echarts from 'echarts'

export default {
  initCityBar(data,id,that) {
   let fontsize
    if(window.screen.width>=3840){
        fontsize=26;
    }

    let xdatalend=[],xData=[],ydatalend=[],yData=[],leagend=[]
    
    leagend.push(data.thisMonthStr)
    leagend.push(data.lastMonthStr)
    //console.log(leagend)
    data.dayOrder.forEach(element => {
        xdatalend.push(element.dayOfMonth)
        xData.push(element.dayAmount)
    });
    data.monthOrder.forEach(element => {
        ydatalend.push(element.dayOfMonth)
        yData.push(element.dayAmount)
    });
    var echart = echarts.init(document.getElementById(id))
    //console.log(JSON.stringify(xData))
    //console.log(JSON.stringify(yData))
    var option = {
      //backgroundColor: '#061326',
      grid: {
          top: "18%",
          left: "10%",
          bottom: "22%",
          right: "0", //地图四个移动的方向
          containLabel: false //靠左
      },
      tooltip:{
        show:true 
      },
      animation: true,
      legend: {
        data: leagend,
        right:0,
        top:'0%',
       
        textStyle:{
          color:'#A9C0FF',
          fontSize :fontsize,
        }
      },
      xAxis: [{
          type: "category",
          data: xdatalend,
          show: true,
        //   axisTick: {
        //       alignWithLabel: true
        //   },
          nameTextStyle: {
              color: "#82b0ec"
          },
          
          axisLine: { // X坐标最外边线
              show: true,
              lineStyle: {
                  color: "rgba(0, 160, 233, 0)"
              }
          },
          axisLabel: {
              textStyle: {
                  color: "#fff",
                  fontSize:fontsize
              },
              margin: 25
          }
      }],
      yAxis: [{ //辅助线
          show: true,
          data:ydatalend,
          type: "value",
          axisLabel: {
              textStyle: {
                  color: "#fff",
                  fontSize:fontsize
              },
          },
          splitLine: { //x坐标内部边线
                show: true,
                lineStyle: {
                    color: 'rgba(0, 160, 233, 0.4)'

                },
          },
          axisLine: { //Y坐标边线
            show: true,
            lineStyle: {
                color: 'rgba(0, 160, 233, 0.4)'
            }
          }
      }],
    series: [{
            name: "",
            type: 'pictorialBar',
            symbolSize: [20, 5], //40 ,10
            symbolOffset: [0, -3],// [0, -6] #FFFFD7
            symbolPosition: 'end',
            z: 0,//12
            // "barWidth": "0",
            label: {
                normal: {
                    show: false,//控制圆柱顶点的值是否显示
                    position: "top",
                    // "formatter": "{c}%"
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#34DCFF'
                }
            },
            color: "rgba(0, 255, 255, 1)",
            data: yData
          },
          {
              name: '',
              type: 'pictorialBar',
              symbolSize: [20, 5],//40 ,10
              symbolOffset: [0, 7],//[0, 7]
              // "barWidth": "20",
              z: 12,
              color: "#2DB1EF",
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
              name: leagend[0],
              type: 'bar',
              //silent: true,
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
          {
              name:leagend[1],
              type:'line',
              // smooth: true, //是否平滑
              showAllSymbol: true,
              // symbol: 'image://./static/images/guang-circle.png',
              symbol: 'circle',
              symbolSize: 10,//25 //折线节点的大小
              lineStyle: {
                  normal: {
                      color: "#FACD89", //#FFFACD89 
                      shadowColor: 'rgba(0, 0, 0, .3)',
                      shadowBlur: 0,
                      shadowOffsetY: 5,
                      shadowOffsetX: 5,
                  },
              },
              label: {
                  show: false,//是否显示折线节点的值
                  position: 'top',
                  textStyle: {
                      color: '#FACD89',
                  }
              },
               z: 20,
              itemStyle: {
                  color: "#FFFFD7",
                  borderColor: "#FACD89",
                  borderWidth: 3,
                  shadowColor: '0px 14px 7px 0px rgba(52, 6, 45, 0.4)',
                  shadowBlur: 0,
                  shadowOffsetY: 0,
                  shadowOffsetX: 0,
                 
              },
              tooltip: {
                  show: true
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: 'rgba(35, 156, 248,0.1)'
                          },
                          {
                              offset: 1,
                              color: 'rgba(51, 153, 255,0)'
                          }
                      ], false),
                      shadowColor: 'rgba(250, 205, 137, 0.6)',
                      shadowBlur: 20
                  }
              },
              data:yData
          }
      ]
    };
    echart.setOption(option)
    

    setTimeout(function (){
	    window.onresize = function () {
	    	echart.resize();
	    }
	  },200)

  }
  
}
