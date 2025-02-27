import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Sales from './Sales';
import BarChart from '../Charts/BarChart';
import ApiCharts from '../Charts/ApiCharts';
import LineChart from '../Charts/LineChart';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import useApiChart from '../hook/useApiChart';

const Chart = ({ numbersOne, numbersTwo, numbersThree, showLegend }) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [salesOne, setSalesOne] = useState(null);
    const [salesTwo, setSalesTwo] = useState(null);
    const [salesThree, setSalesThree] = useState(null);
    const [currentDayIndex, setCurrentDayIndex] = useState(null);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(null);

    const [showChartBar, setShowChartBar] = useState(false);

    const [year, setYear] = useState(2023);

    const today = new Date();
    const dayIndex = today.getDay();
    const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    const monthIndex = today.getMonth()

    const defaultChartOne = [10, 15, 12, 8, 20, 25, 18];
    const defaultChartTwo = [5, 2, 4, 6, 7, 21, 17];
    const defaultChartThree = [0, 4, 11, 14, 23, 9, 30];

    const { data, error, isLoading } = useApiChart(year)

    const toggleYear = () => {
        setYear(prevYear => (prevYear === 2023 ? 2024 : 2023))
    }

    const handleData = (index) => {
        const updateSales = (numbers, defaultChart, setSales) => {
            const sales = numbers[index] > 0 ? numbers[index] : defaultChart[index];
            setSales(sales);
        };

        updateSales(numbersOne, defaultChartOne, setSalesOne);
        updateSales(numbersTwo, defaultChartTwo, setSalesTwo);
        updateSales(numbersThree, defaultChartThree, setSalesThree);
        console.log(numbersOne, numbersTwo, numbersThree);
    };

    const handleClickOpen = (point) => {
        setCategory(point.category);
        setOpen(true);
    };

    useEffect(() => {
        setCurrentDayIndex(adjustedIndex);
        setCurrentMonthIndex(monthIndex);

        const timer = setTimeout(() => {
            setShowChartBar(true);
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const chartLine = LineChart(
        currentDayIndex, handleData, numbersOne,
        numbersTwo, numbersThree, showLegend, handleClickOpen, defaultChartOne,
        defaultChartTwo, defaultChartThree
    );

    const chartBar = BarChart(showLegend);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    const Namel = []
    const Datel = []

    data.forEach(item => {
        Namel.push(item.Name)
        const numericData = item.Data.map(value => parseFloat(value.replace(',', '.')));
        Datel.push(numericData)
    });

    const chartApi = ApiCharts(showLegend, Namel, Datel, currentMonthIndex);


    return (

        <div className="chart-container">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartLine}
                />

                {showChartBar ? (
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartBar}
                    />
                ) : (
                    <CircularProgress sx={{ color: 'white' }} />
                )}

                <Button className='chart' onClick={toggleYear}>
                    Переключить год на {year === 2023 ? 2024 : 2023}
                </Button>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartApi}
                />

                <Sales
                    open={open}
                    setOpen={setOpen}
                    category={category}
                    salesOne={salesOne}
                    salesTwo={salesTwo}
                    salesThree={salesThree}
                />

            </Box>
        </div>
    );
};

export default Chart;



