import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import LineChart from '../useCharts/LineChart'
const Line = ({ currentDayIndex, handleData, numbersOne, numbersTwo, numbersThree, showLegend, handleClickOpen, defaultChartOne,
    defaultChartTwo, defaultChartThree }) => {

    const chartLine = LineChart(
        currentDayIndex, handleData, numbersOne,
        numbersTwo, numbersThree, showLegend, handleClickOpen, defaultChartOne,
        defaultChartTwo, defaultChartThree
    );

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartLine}
        />
    )
}
export default Line