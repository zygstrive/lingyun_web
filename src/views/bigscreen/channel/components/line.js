import echarts from 'echarts'

export default {
    initChart(data) {
        let id = data.id
        var echart = echarts.init(document.getElementById(id))
        let value = data.value
        let xAxis = data.xAxis
        let colors = ['#04AEFD', '#06349E', 'rgba(9, 86, 247, 1)', 'rgba(9, 86, 247, 0)']
        if(id == 'xsChart') {
            colors = ['#0EDE6B','#06349E', 'rgba(9, 201, 176, 1)', 'rgba(9, 201, 176, 0)']
        }
        if(id == 'qdChart'){
            colors = ['#7637C4','#06349E', 'rgba(118, 55, 196, 1)', 'rgba(118, 55, 196, 0)']
        }
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '10%',
                left: '4%',
                right: '2%',
                bottom: '10%',
                // containLabel: true
            },
            legend: {
                show: false,
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: '#A9C0FF',
                    fontSize: '12',
                    fontWeight:"bold",
                    width: 100
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: xAxis
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
                        fontSize: '12',
                        fontWeight:"bold",
                    },
                    // formatter: '{value} %',
                    padding:[0, 10 ,0 ,0]
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
                {
                    name: '',
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
                        color: colors[1],
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
                    data: value
                },
            ]
        };
        echart.setOption(option)
    }
}
