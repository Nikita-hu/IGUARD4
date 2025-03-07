import React from 'react';
import { Box, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';
import { errorStyle } from '../hook/useStyle.js'

const Login = ({ className, onSubmit, data, register, handleSubmit, errors, login, password, setLogin, setPassword }) => {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Box className={className} sx={{ height: 'auto', gap: '1px', padding: '2px', }}>

                    <FormControl key='login' sx={{ marginBottom: 0 }}>
                        <FormHelperText className='styles'>Логин</FormHelperText>
                        <OutlinedInput
                            inputProps={{ style: { textAlign: 'center' } }}
                            size='small'
                            placeholder='Введите логин'
                            className='enter-styles'
                            color='#91ff35'
                            sx={errorStyle(errors.login)}
                            value={login}
                            {...register('login')}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        {errors.login && <span className='error'>{errors.login.message}</span>}
                    </FormControl>

                    <FormControl key='password' sx={{ marginBottom: 0 }}>
                        <FormHelperText className='styles'>Пароль</FormHelperText>
                        <OutlinedInput
                            inputProps={{ style: { textAlign: 'center' } }}
                            size='small'
                            sx={errorStyle(errors.password)}
                            placeholder='Введите пароль'
                            className='enter-styles'
                            color='#91ff35'
                            {...register('password')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className='error'>{errors.password.message}</span>}
                    </FormControl>

                    <Button type='submit' className="button registr">
                        Войти
                    </Button>

                </Box>

            </form>
        </div>
    );
};

export default Login;
