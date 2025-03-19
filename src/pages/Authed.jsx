import React, { useState, useEffect } from 'react';
import { Box, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthed, setAddUser, setLoginUser } from '../redux/store.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Photo } from '../hook/useStyle.js'
import { validationAuthed } from '../validation/VallidationAuthed.js'
import useApiAuthed from '../hook/useApiAuthed.js';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/Login.jsx'
import SliderButton from '../Components/SliderButton.jsx'
import Register from '../Components/Register.jsx';
import { useDataCookie } from '../hook/useData.js';

const Authed = () => {
    const { data: dataLogin, error, isLoading, refetch } = useApiAuthed()

    const loginOrRegister = useSelector((state) => state.switchAuth)

    const addUser = useSelector((state) => state.addUser)

    const navigate = useNavigate()

    const [login, setLogin] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (addUser) {
            refetch();
            dispatch(setAddUser(false));
        }
    })

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(validationAuthed)
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (!dataLogin || dataLogin.length === 0) {
        return <div>Нет данных для отображения</div>;
    }

    const handleLocal = () => {
        const userExists = dataLogin.some(user => user.login === login && user.password === Number(password));
        if (userExists) {
            dispatch(setLoginUser(login))
            dispatch(setAuthed(true))
            localStorage.setItem('login', login)
            const seconds = useDataCookie()
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
            <Box className="authed">
                <Card className='card-login'>
                    <Box sx={{ marginBottom: 'auto' }}>
                        {Photo.logo}
                        <SliderButton/>
                    </Box>
                    {!loginOrRegister ? (
                            <Login className="authed" onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors} login={login} setLogin={setLogin} password={password} setPassword={setPassword} />
                    ) : (
                        <Register className="authed" loginOrRegister={loginOrRegister} />
                    )
                    }
                </Card>
            </Box>
        </div>
    );
};

export default Authed;
