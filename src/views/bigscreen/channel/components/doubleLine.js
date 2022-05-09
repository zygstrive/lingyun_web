import echarts from 'echarts'

export default {
    initChart(data) {
        let id = data.id
        var echart = echarts.init(document.getElementById(id))
        let dayList = []
        for (let i = 1; i < 32; i++){
          dayList.push(i)
        }
        // 横轴数据
        const xAxis = dayList
        // 系列 1 数据 (类目1)
        const seriesData1 = data.chart.CURMONTH
        // 系列 2 数据 (类目2)
        const seriesData2 = data.chart.PERMONTH
        // 最大值 (额外拉高多少根据数据数量级决定)
        const max = Math.max(...seriesData1, ...seriesData2) + 10
        // 构造柱最大值数组
        const maxList = []
        for (let i = 0; i < data.chart.length; i += 1) {
            maxList.push(max)
        }

        var option = {
            series: [
                {
                    // 该系列为背景深蓝色半胶囊
                    data: maxList,
                    type: 'bar',
                    xAxisIndex: 0,
                    silent: true,
                    itemStyle: {
                        borderColor: '#001349',
                        barBorderRadius: [20, 20, 0, 0],
                        borderWidth: 1,
                        color:'#1C388B',
                        opacity: 0.71
                    },
                    barWidth: 30,
                    tooltip: {
                        show: false,
                    },
                },
                {
                    name: '当月',
                    data: seriesData1,
                    type: 'bar',
                    xAxisIndex: 1,
                    itemStyle: {
                        barBorderRadius: 25,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#1BC6FF', // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1152DB', // 100% 处的颜色
                            }],
                        },
                    },
                    barWidth: 10,
                },
                {
                    name: '上月',
                    data: seriesData2,
                    type: 'bar',
                    xAxisIndex: 1,
                    itemStyle: {
                        barBorderRadius: 25,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#F8E505', // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1152DB', // 100% 处的颜色
                            }],
                        },
                    },
                    barWidth: 10,
                },
            ],
            dataZoom: {
                type: 'inside',
                xAxisIndex: [0, 1],
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                top: '25%',
                left: '6%',
                right: '2%',
                bottom: '10%',
                // containLabel: true
            },
            legend: {
                itemWidth: 20,
                top: '10%',
                left: 25,
                textStyle: {
                    color: '#A9C0FF',
                    padding:[0, 20 ,0 ,0],
                },
            },
            xAxis: [{
                    data: maxList,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    position: 'bottom',
                },
                {
                    data: xAxis,
                    axisLine: {
                        lineStyle: {
                            color: '#00A0E9',
                            opacity: 0.42
                        },
                    },
                    axisLabel: {
                        color: '#A9C0FF',
                        fontSize: '12',
                        fontWeight:"bold",
                    },
                    axisTick: {
                        show: false,
                    },
                    position: 'bottom',
                },
            ],
            yAxis: {
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#A9C0FF',
                    fontSize: '12',
                    fontWeight:"bold",
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: '#00A0E9',
                        opacity: 0.42
                    },
                },
            },
        }
        echart.setOption(option)
    }
}
