import echarts from 'echarts'

export default {
  initZhengceCategory(data,id,that) {
   
    let fontsize,ltop,lleft,mapfont

    if(window.screen.width>=3840){
        fontsize=26;
        ltop=70;
        lleft=30;
        mapfont=26;
    }else{
        fontsize=18;
        ltop= 20;
        lleft=10;
    }

    var myChart = echarts.init(document.getElementById(id))
    
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
    var city = [{
            name: "汕尾市",
            code: '0660'
        },
        {
            name: "东莞市",
            code: '0769'
        },
        {
            name: "茂名市",
            code: '0668',
        },
        {
            name: "云浮市",
            code: '0766',
        },
        {
            name: "惠州市",
            code: '0752'
        },
        {
            name: "深圳市",
            code: '0755'
        },
        {
            name: "河源市",
            code: '0762'
 
        },
        {
            name: "湛江市",
            code: '0759'
        },
        {
            name: "佛山市",
            code: '0757'
        },
        {
            name: "广州市",
            code: '0020'
        },
        {
            name: "韶关市",
            code: '0751'
        },
        {
            name: "中山市",
            code: '0760'
        },
        {
            name: "潮州市",
            code: '0768'
        },
        {
            name: "梅州市",
            code: '0753'
        },
        {
            name: "珠海市",
            code: '0756'
        },
        {
            name: "汕头市",
            code: '0754'
        },
        {
            name: "清远市",
            code: '0763'
        },
        {
            name: "阳江市",
            code: '0662'
        },
        {
            name: "肇庆市",
            code: '0758'
        },
        {
            name: "江门市",
            code: '0750'
        },
        {
            name: "揭阳市",
            code: '0663'
        }
    ]
    var mapDate = []
    //myChart.showLoading();
    let index = -1;
    // var timer = setInterval(function() {
    //     // 隐藏提示框
    //     myChart.dispatchAction({
    //         type: 'hideTip',
    //         seriesIndex: 0,
    //         dataIndex: index
    //     });
    //     // 显示提示框
    //     myChart.dispatchAction({
    //         type: 'showTip',
    //         seriesIndex: 0,
    //         dataIndex: index + 1
    //     });
    //     // 取消高亮指定的数据图形
    //     myChart.dispatchAction({
    //         type: 'downplay',
    //         seriesIndex: 0,
    //         dataIndex: index
    //     });
    //     // 高亮指定的数据图形
    //     myChart.dispatchAction({
    //         type: 'highlight',
    //         seriesIndex: 0,
    //         dataIndex: index + 1
    //     });
    //     index++;
    //     if (index > 13) {
    //         index = -1;
    //     }
    // }, 2000);
    
    
    myChart.on('mousemove', function(e) {
        //clearInterval(timer);
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
    //-----鼠标移入静止播放
    myChart.on('mouseout', function(e) {
        //clearInterval(timer);
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: e.dataIndex
        }); //鼠标移出后先把上次的高亮取消
        // timer = setInterval(function() {
        //     // 隐藏提示框
        //     myChart.dispatchAction({
        //         type: 'hideTip',
        //         seriesIndex: 0,
        //         dataIndex: index
        //     });
        //     // 显示提示框
        //     myChart.dispatchAction({
        //         type: 'showTip',
        //         seriesIndex: 0,
        //         dataIndex: index + 1
        //     });
        //     // 取消高亮指定的数据图形
        //     myChart.dispatchAction({
        //         type: 'downplay',
        //         seriesIndex: 0,
        //         dataIndex: index
        //     });
        //     // 高亮指定的数据图形
        //     myChart.dispatchAction({
        //         type: 'highlight',
        //         seriesIndex: 0,
        //         dataIndex: index + 1
        //     });
        //     index++;
        //     if (index > 13) {
        //         index = -1;
        //     }
        // }, 2000);
    });
    myChart.on('click', function(e) {
     
        var chooseName = city.filter(item => {
            return item.name == e.name
        })
        //console.log(chooseName)
       // alert(chooseName[0].code)
        that.change(chooseName[0])
        //mapInit()
    })
    setTimeout(function() {
        mapInit()
    }, 1000);
    var mapInit = () => {
       

        echarts.registerMap('guangzhou', data);
       // myChart.hideLoading();
    
        var option = {
               // backgroundColor: '#020933',
                // title: {
                //     top: ltop,
                //     left:lleft,
                //     text: '广东地图',
                //     subtext: '',
                //     x: 'center',
                //     textStyle: {
                //         color: '#00FFFF', //标题颜色设置
                //         fontSize:fontsize,
                //         //fontFamily:'PangMenZhengDao'
                //         //fontWeight:700
                //     }
                // },
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
                    roam: false,
                    itemStyle: { //阴影发光
                        normal: {
                            areaColor: '#013C62', //#013C62
                            shadowColor: '#182f68',// #182f68 #101071
                            shadowOffsetX: 0,
                            opacity:0.94,
                            shadowOffsetY: 10 //地图阴影 25 
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
                        roam: true,
                        // backgroundColor:'#FFBE2A',
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff', //地图字体颜色
                                    fontSize:18,
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
                                borderColor: '#2ab8ff',//地图边线颜色'#2ab8ff
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
                                color: '#ffff',
                                shadowBlur: 10,
                                shadowColor: '#333'
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
