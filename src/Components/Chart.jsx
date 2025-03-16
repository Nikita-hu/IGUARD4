import React, { useState, useEffect } from 'react';
import Sales from './Sales';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import useApiChart from '../hook/useApiChart';
import Line from '../Graphics/Charts/Line';
import Bar from '../Graphics/Charts/Bar';
import Api from '../Graphics/Charts/Api';
import { useData } from '../hook/useData'
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

    const { monthIndex, adjustedIndex } = useData()

    const { data, error, isLoading } = useApiChart(year)

    const toggleYear = () => {
        setYear(prevYear => (prevYear === 2023 ? 2024 : 2023))
    }

    const handleData = (index) => {
        const updateSales = (numbers, setSales) => {
            const sales = numbers[index]
            setSales(sales);
        };
        updateSales(numbersOne, setSalesOne);
        updateSales(numbersTwo, setSalesTwo);
        updateSales(numbersThree, setSalesThree);
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

    if (isLoading) {
        return <div style={{ color: 'white' }}>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
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

    return (

        <div className="chart-container">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                <Line currentDayIndex={currentDayIndex} handleData={handleData} numbersOne={numbersOne}
                    numbersTwo={numbersTwo} numbersThree={numbersThree} showLegend={showLegend} handleClickOpen={handleClickOpen} 
                />

                <Bar showLegend={showLegend} showChartBar={showChartBar} />

                <Button className='chart' onClick={toggleYear}>
                    Переключить год на {year === 2023 ? 2024 : 2023}
                </Button>

                <Api showLegend={showLegend} Namel={Namel} Datel={Datel} currentMonthIndex={currentMonthIndex} />

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



