import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

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