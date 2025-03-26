import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import logo from '../img/photo.jpg'
import React  from 'react';
import Switch from '@mui/material/Switch';


export const getColor = (value) => {
    if (value < 50) {
        return '#f44336';
    } else if (value >= 50 && value <= 70) {
        return '#ffea00';
    } else if (value > 70 && value <= 100) {
        return '#76ff03';
    } else {
        return '#00e5ff';
    }
};

export const PinkSwitch = styled(Switch)(({ theme }) => ({
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

export const Photo = {
    logo: React.createElement('img', {
        src: logo,
        style: { height: 40, display: 'block', marginLeft: 'auto', marginRight: 'auto' },
        alt: 'Logo'
    }),
};

export const errorStyle = (error) => ({
    border: error ? '2px solid red' : 'none',
    fontSize: '50px'
})

export const getColorTask = (task, status) => {
    if (value < 50) {
        return '#f44336';
    } else if (value >= 50 && value <= 70) {
        return '#ffea00';
    } else if (value > 70 && value <= 100) {
        return '#76ff03';
    } else {
        return '#00e5ff';
    }
};

