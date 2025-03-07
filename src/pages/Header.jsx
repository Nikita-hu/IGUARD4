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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuthed, setLoginUser } from '../redux/store';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleExit = () => {
    document.cookie = "isAuthed=; max-age=0; path=/"
    dispatch(setAuthed(false))
    dispatch(setLoginUser(""))
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChart = () => {
    setAnchorEl(null);
    navigate('/ChartsPage');
  };

  const handleUsers = () => {
    setAnchorEl(null);
    navigate('/UsersPage')
  }
  const login = useSelector((state) => state.login)
  useEffect(() => {
    const savedLogin = localStorage.getItem('login');
    if (savedLogin) {
      dispatch((setLoginUser(savedLogin)))
    }
  })
  return (
    <div>
      <Box className='box'>
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

          <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              IGUARD4
            </Typography>
            <Typography variant="body1" component="div">
              Ваш Логин: {login}
            </Typography>
          </Box>
          <Tooltip title="Выход">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleExit}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>

        </Toolbar>

      </Box>
      <h1 className='title-word'>Добро пожаловать в мое приложение</h1>
    </div>

  );
}