import React, { useState } from 'react';
import { Box, Card, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAuthed } from '../redux/store.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Photo, errorStyle } from '../hook/useStyle.js'
import { validationAuthed } from '../validation/VallidationAuthed.js'
import useApiAuthed from '../hook/useApiAuthed.js';
import { useNavigate } from 'react-router-dom';

const Authed = () => {
    const { data, error, isLoading } = useApiAuthed()

    const navigate = useNavigate()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(validationAuthed)
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    const handleLocal = () => {

        const userExists = data.some(user => user.login === login && user.password === Number(password));

        if (userExists) {
            dispatch(setAuthed(true))
            const now = new Date()
            const endOfDay = new Date(now)
            endOfDay.setHours(23, 59, 59, 999)
            const seconds = Math.floor((endOfDay - now) / 1000)
            document.cookie = `isAuthed=true; max-age=${seconds}; path=/`;
            navigate('/')
        } else {
            dispatch(setAuthed(false))
            setError('password', { message: 'Неверный логин или пароль' })
        }
    };


    const onSubmit = () => {
        handleLocal()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="authed">
                    <Card className='card'>
                        {Photo.logo}
                        <FormControl key='login' sx={{ marginBottom: 0 }}>
                            <FormHelperText className='styles'>Логин</FormHelperText>
                            <OutlinedInput
                                inputProps={{ style: { textAlign: 'center' } }}
                                size='small'
                                placeholder='Введите логин'
                                className='enter-styles'
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
                                {...register('password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <span className='error'>{errors.password.message}</span>}
                        </FormControl>
                        <Button type='submit' className="button registr">
                            Войти
                        </Button>
                    </Card>
                </Box>
            </form>
        </div>
    );
};

export default Authed;
