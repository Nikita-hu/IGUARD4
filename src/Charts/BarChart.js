const BarChart = (showLegend) => ({
    chart: {
        type: 'bar',
        width: 900,
        height: 400,
        textItem: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        style: {
            color: 'white',
        },
        text: 'Продажи за 4 квартала года',
        align: 'centre'
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
            }
        }
    },
    series: [{
        name: 'Категория: D',
        data: [120, 80, 50, 70]
    },
    {
        name: 'Категория: С',
        data: [150, 90, 60, 90]
    },
    {
        name: 'Категория: B',
        data: [130, 70, 55, 45]
    },
    {
        name: 'Категория: А',
        data: [160, 100, 70, 105]
    },
    ],
    tooltip: {
        formatter: function () {
            const index = this.point.index;
            const total = this.series.chart.series.reduce((sum, series) => {
                return sum + series.data[index].y;
            }, 0);
            return `Квартал ${index + 1} <br> ${this.series.name}  <br> Сумма: ${total} `;
        }
    },
    credits: {
        text: 'HightCharts.com',
        style: {
            color: 'black',
        }
    },
});
export default BarChart;