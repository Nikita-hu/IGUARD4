import React from 'react';
import '../i.scss';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button } from 'theme-ui';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const TwoPage = ({ numbers }) => {
    const navigate = useNavigate();
    
    const config = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Продажи за неделю'
        },
        xAxis: {
            categories: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
            title: {
                text: 'Дни недели'
            },
        },
        yAxis: {
            title: {
                text: 'Количество продаж'
            }
        },
        series: [{
            name: 'Data',
            data: numbers.length > 0 ? numbers : [10, 15, 12, 8, 20, 25, 18],
        }]
    };
    
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={config}
            />
            <Button className='chart' onClick={() => navigate('/')} ><ArrowBackIcon/></Button>
        </div>
    );
};

export default TwoPage;