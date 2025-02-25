import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Sales from './Sales';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import CircularProgress from '@mui/material/CircularProgress';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const Chart = ({ numbersOne, numbersTwo, numbersThree }) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [salesOne, setSalesOne] = useState(null);
    const [salesTwo, setSalesTwo] = useState(null);
    const [salesThree, setSalesThree] = useState(null);
    const [showLegend, setShowLegend] = useState(true);
    const [currentDayIndex, setCurrentDayIndex] = useState(null);
    const [showChartBar, setShowChartBar] = useState(false);

    const today = new Date();
    const dayIndex = today.getDay();
    const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;

    const defaultChartOne = [10, 15, 12, 8, 20, 25, 18];
    const defaultChartTwo = [5, 2, 4, 6, 7, 21, 17];
    const defaultChartThree = [0, 4, 11, 14, 23, 9, 30];

    const toggleLegend = () => {
        setShowLegend(prev => !prev);
    };

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

    return (
        <div className="chart-container">
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

            <Sales
                open={open}
                setOpen={setOpen}
                category={category}
                salesOne={salesOne}
                salesTwo={salesTwo}
                salesThree={salesThree}
            />
            <PinkSwitch onClick={toggleLegend} defaultChecked />
        </div>
    );
};

export default Chart;
