import React, { useState, useEffect } from 'react';
import '../i.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Sales from './Sales';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

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

    const toggleLegend = () => {
        setShowLegend(prev => !prev);
    };

    const handleClickOpen = (point) => {
        setCategory(point.category)
        setOpen(true)
    };

    useEffect(() => {
        const today = new Date();
        const dayIndex = today.getDay();
        const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
        setCurrentDayIndex(adjustedIndex);
    }, []);

    const defaultChart = [10, 15, 12, 8, 20, 25, 18]

    const chart = {
        chart: {
            type: 'line',
            width: 900,
            height: 400,
            textItem: 'center',
            backgroundColor: 'black'
        },
        title: {
            text: 'Продажи за неделю',
            style: {
                color: 'white',
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
            data: numbersOne.length > 0 ? numbersOne : defaultChart,
            color: 'green'
        },
        {
            name: 'Отдел: 2',
            data: numbersTwo.length > 0 ? numbersTwo : defaultChart,
            color: 'blue'
        },
        {
            name: 'Отдел: 3',
            data: numbersThree.length > 0 ? numbersThree : defaultChart,
            color: 'yellow'
        },
        ],
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            enabled: showLegend,
            itemStyle: {
                color: 'white',
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
                            const index = this.index

                            const salesOne = numbersOne[index] > 0 ? numbersOne[index] : defaultChart[index];
                            setSalesOne(salesOne)


                            const salesTwo = numbersTwo[index] > 0 ? numbersTwo[index] : defaultChart[index];
                            setSalesTwo(salesTwo)

                            const salesThree = numbersThree[index] > 0 ? numbersThree[index] : defaultChart[index];
                            setSalesThree(salesThree)

                            handleClickOpen(this);
                        }
                    }
                }
            }
        }
    }
    return (
        <div className="chart-container">
            <HighchartsReact
                highcharts={Highcharts}
                options={chart}
            />
            <Sales open={open} setOpen={setOpen}
                category={category} salesOne={salesOne}
                salesTwo={salesTwo} salesThree={salesThree} defaultChart={defaultChart}
            />
            <PinkSwitch onClick={toggleLegend} defaultChecked />
        </div>
    );

};

export default Chart;


