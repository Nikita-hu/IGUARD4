import React, { useState, useEffect } from 'react';
import { Box, Card, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAuthed } from '../redux/store.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Photo, errorStyle } from '../hook/useStyle.js'
import { validationAuthed } from '../validation/VallidationAuthed.js'
import useApiAuthed from '../hook/useApiAuthed.js';

const Authed = () => {
    const { data, error, isLoading } = useApiAuthed()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [localAuthed, setLocalAuthed] = useState(false);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(validationAuthed)
    });
    useEffect(() => { dispatch(setAuthed(localAuthed))[localAuthed, dispatch] })
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    // const getTodayDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0');
    //     const day = String(today.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // };
    // useEffect(() => {

    //     const savedData = JSON.parse(localStorage.getItem('users'));
    //     const todayDate = getTodayDate();

    //     if (savedData) {
    //         const isDateMatch = savedData.some(user => user.data === todayDate);
    //         setLocalAuthed(isDateMatch);
    //     }
    // }, []);

    const handleLocal = () => {
        // const todayDate = getTodayDate();
        // const initialDate = [
        //     { data: todayDate }
        // ];
        // localStorage.setItem('users', JSON.stringify(initialDate));

        const userExists = data.some(user => user.login === login && user.password === Number(password));

        if (userExists) {
            setLocalAuthed(true)
        } else { 
            setLocalAuthed(false)
            setError('password', { message: 'Неверный логин или пароль' })
        }
    };


    const onSubmit = (data) => {
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
