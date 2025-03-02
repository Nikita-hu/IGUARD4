import React, { useState } from 'react';
import { Box, Card, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAuthed } from '../redux/store.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Photo, errorStyle } from '../hook/useStyle.js'
import { validationAuthed } from '../validation/VallidationAuthed.js'

const Authed = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [localAuthed, setLocalAuthed] = useState(null);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(validationAuthed)
    });

    const handleLocal = () => {

        const initialUsers = [
            { login: 'User1', password: 'user1' },
            { login: 'User2', password: 'user2' },
            { login: 'User3', password: 'user3' },
        ];
        localStorage.setItem('users', JSON.stringify(initialUsers));

        const userExists = initialUsers.some(user => user.login === login && user.password === password);

        if (userExists) {
            setLocalAuthed(true)
        } else {
            setLocalAuthed(false)
            setError('password', {message: 'Неверный логин или пароль'})
        }
        dispatch(setAuthed(userExists))
        setLogin('')
        setPassword('')
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
