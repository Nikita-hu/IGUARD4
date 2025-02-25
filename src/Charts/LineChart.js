const LineChart = (currentDayIndex, handleData, numbersOne, numbersTwo, numbersThree, showLegend, handleClickOpen, defaultChartOne, defaultChartTwo, defaultChartThree,) => ({
    chart: {
        type: 'line',
        width: 900,
        height: 400,
        textItem: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Продажи за неделю',
        style: {
            color: 'white',
        }
    },
    navigation: {
        buttonOptions: {
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 10,
        },
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    {
                        text: 'Custom Action 1',
                        onclick: function () {
                            alert('Custom Action 1 executed');
                        }
                    },
                    {
                        text: 'Custom Action 2',
                        onclick: function () {
                            alert('Custom Action 2 executed');
                        }
                    },
                    {
                        text: 'Custom Action 3',
                        onclick: function () {
                            alert('Custom Action 3 executed');
                        }
                    },
                    'separator',
                    'downloadPNG',
                    'downloadJPEG',
                    'downloadPDF',
                    'downloadSVG'
                ]
            }
        }
    },
    xAxis: {
        color: 'red',
        categories: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        title: {
            text: 'Дни недели',
            style: {
                color: 'white'
            }
        },
        labels: {
            style: {
                color: 'white'
            }
        },
        plotLines: [{
            color: 'red',
            width: 2,
            zIndex: 2,
            value: currentDayIndex,
            dashStyle: 'Dash',
            label: {
                text: 'Сегодняшний день',
                rotation: 0,
                y: 20,
                style: {
                    color: 'red'
                }
            }
        }]
    },
    yAxis: {
        title: {
            text: 'Количество продаж',
            style: {
                color: 'white',
            }
        },
        labels: {
            style: {
                color: 'white',
            }
        }
    },
    series: [{
        name: 'Отдел: 1',
        data: numbersOne || defaultChartOne,
        color: 'green'
    },
    {
        name: 'Отдел: 2',
        data: numbersTwo || defaultChartTwo,
        color: 'blue'
    },
    {
        name: 'Отдел: 3',
        data: numbersThree || defaultChartThree,
        color: 'yellow'
    }],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        enabled: showLegend,
        itemStyle: {
            color: 'white',
        },
        itemHoverStyle: {
            color: 'white'
        },
    },
    credits: {
        text: 'HightCharts.com',
        style: {
            color: 'black',
        }
    },
    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        const index = this.index;
                        handleData(index)
                        handleClickOpen(this);
                    }
                }
            }
        }
    },

});

export default LineChart;
