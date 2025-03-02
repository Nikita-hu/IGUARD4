import { getColor } from '../hook/useStyle'

const BarChart = (showLegend) => ({

    chart: {
        type: 'column',
        width: 900,
        height: 400,
        backgroundColor: 'transparent'
    },

    title: {
        style: {
            color: 'white',
        },
        text: 'Продажи за 4 квартала года',
        align: 'center'
    },

    xAxis: {
        categories: [
            'Q1', 'Q2', 'Q3', 'Q4',
        ],

        labels: {
            style: {
                color: 'white'
            }
        }
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Суммы продаж за этот год',
            style: {
                color: 'white',
            },
        },

        labels: {
            style: {
                color: 'white'
            }
        }
    },

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
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            },
            borderWidth: 0,
        }
    },

    series: [
        {
            name: 'Категория: D',
            data: [120, 80, 45, 65].map(value => ({
                y: value,
                color: getColor(value)
            }))
        },

        {
            name: 'Категория: C',
            data: [30, 90, 60, 150].map(value => ({
                y: value,
                color: getColor(value)
            }))
        },

        {
            name: 'Категория: B',
            data: [130, 70, 55, 20].map(value => ({
                y: value,
                color: getColor(value)
            }))
        },

        {
            name: 'Категория: A',
            data: [160, 52, 70, 105].map(value => ({
                y: value,
                color: getColor(value)
            }))
        },
    ],
    tooltip: {
        formatter: function () {
            const index = this.point.index;
            const categoryName = this.series.name;
            const total = this.series.data.reduce((sum, point) => {
                return sum + point.y;
            }, 0);
            return `Квартал: ${index + 1} <br> ${categoryName} <br>  Сумма по категории: ${total},`;
        }
    },

    credits: {
        text: 'HighCharts.com',
        style: {
            color: 'black',
        }
    },
});

export default BarChart;
