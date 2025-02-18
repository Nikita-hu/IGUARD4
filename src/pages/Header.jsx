import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Tooltip } from '@mui/material';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChart = () => {
    setAnchorEl(null);
    navigate('/TwoPage');
  };

  const handleUsers = () => {
    navigate('/Users')
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Toolbar className='toolbar' >
        <Tooltip title="Меню">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Menu className='back-word'
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className='menu' onClick={handleChart}>Графики</MenuItem>
          <MenuItem className='menu' onClick={handleUsers}>Пользователи</MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          IGUARD4
        </Typography>
      </Toolbar>
    </Box>
  );
}