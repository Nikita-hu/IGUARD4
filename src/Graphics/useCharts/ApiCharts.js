const ApiCharts = (showLegend, Namel, Datel, currentMonthIndex) => ({
  chart: {
    type: 'column',
    width: 1000,
    height: 400,
    backgroundColor: 'transparent',
  },

  title: {
    style: {
      color: 'white',
    },
    text: 'Продажи за 4 квартала года',
    align: 'center',
  },

  xAxis: {
    categories: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', // Категории на оси X
    ],

    labels: {
      style: {
        color: 'white',
      },
    },

    plotLines: [{
      color: '#f44336',
      width: 2,
      zIndex: 2,
      value: currentMonthIndex,
      dashStyle: 'Dash',
      label: {
        text: 'Сегодняшний месяц',
        rotation: 0,
        y: 20,
        style: {
          color: '#f44336',
        },
      },
    }],
  },

  yAxis: {
    min: 0,
    title: {
      text: 'За месяц млн',
      style: {
        color: 'white',
      },
      rotation: 0,
      align: 'high',
      verticalAlign: 'bottom',
      y: -20,
      x: 90,
    },

    labels: {
      style: {
        color: 'white',
      },
    },
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
      color: 'white',
    },
  },

  plotOptions: {
    series: {
      stacking: null,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '7px',
          color: 'red',
          textOutline: 'none',
        },
        borderWidth: '0px',
      },

    },
  },

  series: Namel.map((name, index) => ({
    name: name,
    data: Datel[index].map(value => ({
      y: value,
      // color: {
      //   linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1, x3: 0, y3:0.5 },
      //   stops: [
      //     [0, '#d500f9'],
      //     [0.5, '#2979ff'],
      //     [1, '#76ff03'],
      //   ],
      // },
      color: ['#76ff03', '#33bfff', '#ffea00', '#ff1744'][index % 4],
      borderWidth: '0px'
    }
    )),
  })),

  credits: {
    text: 'HighCharts.com',
    style: {
      color: 'black',
    },
  },

  tooltip: {
    formatter: function () {
      const index = this.point.index;
      const categoryName = this.series.name;
      const total = this.series.data.reduce((sum, point) => {
        return sum + point.y;
      }, 0);
      return `Квартал: ${index + 1} <br> ${categoryName} <br> Сумма по категории: ${total}`;
    },
  },
});

export default ApiCharts;
