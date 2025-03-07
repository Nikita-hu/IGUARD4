import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ApiCharts from '../useCharts/ApiCharts';

const Api = ({ showLegend, Namel, Datel, currentMonthIndex }) => {
    const chartApi = ApiCharts(showLegend, Namel, Datel, currentMonthIndex);
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartApi}
        />
    )
}
export default Api