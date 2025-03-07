import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import BarChart from '../useCharts/BarChart';
import CircularProgress from '@mui/material/CircularProgress';

const Bar = ({ showChartBar, showLegend }) => {
    const chartBar = BarChart(showLegend);
    return (
        <>
            {showChartBar ? (
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartBar}
                />
            ) : (
                <CircularProgress sx={{ color: 'white' }} />
            )}
        </>
    )
}
export default Bar