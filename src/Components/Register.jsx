import React, { useState } from 'react';
import { Box, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorStyle } from '../hook/useStyle.js'
import Man2SharpIcon from '@mui/icons-material/Man2Sharp';
import Woman2SharpIcon from '@mui/icons-material/Woman2Sharp';
import { FormLabel, FormControlLabel, Radio } from '@mui/material';
import { useCreateMutation } from '../hook/useApiUsers.js'
import useApi from '../hook/useApiUsers.js';
import { validationSchema } from '../validation/ValidationUsers.js';
import { setActiveSwitch, setAddUser, setSwitch } from '../redux/store.js'
import { useDispatch } from 'react-redux';


const Register = () => {
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const create = useCreateMutation()

    const onSubmit = async (data) => {
        data.password = Number(data.password);
        data.gender = checked;
        data.date = new Date().toLocaleDateString("ru-RU", {
            day: "2-digit", month: "2-digit", year: "numeric"
        });

        try {
            await create.mutateAsync(data);
            dispatch(setAddUser(true));
            dispatch(setSwitch(false))
            dispatch(setActiveSwitch(false))
            reset();
        } catch {
            console.log('scsdc')
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Box className="authed" sx={{ height: 'auto', gap: '1px', padding: '2px', }}>

                    <FormControl key='name'  >
                        <FormHelperText className='styles'>Name</FormHelperText>
                        <OutlinedInput
                            size='small'
                            placeholder='Enter name'
                            {...register('name')}
                            className='enter-styles'
                            sx={errorStyle(errors.name)}
                        />
                        {errors.name && <span className='error'>{errors.name.message}</span>}
                    </FormControl>

                    <FormControl key='email'  >
                        <FormHelperText className='styles'>Email</FormHelperText>
                        <OutlinedInput
                            size='small'
                            placeholder='Enter email'
                            {...register('email')}
                            className='enter-styles'
                            sx={errorStyle(errors.email)}
                        />
                        {errors.email && <span className='error'>{errors.email.message}</span>}
                    </FormControl>

                    <FormControl key='login'  >
                        <FormHelperText className='styles'>Login</FormHelperText>
                        <OutlinedInput
                            size='small'
                            placeholder='Enter login'
                            {...register('login')}
                            className='enter-styles'
                            sx={errorStyle(errors.login)}
                        />
                        {errors.login && <span className='error'>{errors.login.message}</span>}
                    </FormControl>

                    <FormControl key='password'  >
                        <FormHelperText className='styles'>Password</FormHelperText>
                        <OutlinedInput
                            size='small'
                            type="password"
                            placeholder='Enter password'
                            {...register('password')}
                            className='enter-styles'
                            sx={errorStyle(errors.password)}
                        />
                        {errors.password && <span className='error'>{errors.password.message}</span>}
                    </FormControl>

                    <FormControl key='dateOfBirth'  >
                        <FormHelperText className='styles'>Date of Birth</FormHelperText>
                        <OutlinedInput
                            size='small'
                            placeholder='Enter dateOfBirth'
                            {...register('dateOfBirth')}
                            className='enter-styles'
                            sx={errorStyle(errors.dateOfBirth)}
                        />
                        {errors.dateOfBirth && <span className='error'>{errors.dateOfBirth.message}</span>}
                    </FormControl>

                    <FormLabel className='styles'>Выберите пол</FormLabel>
                    <FormControl key='checkbox' className='word' >
                        <FormControlLabel
                            control={
                                <Radio
                                    {...register('gender')}
                                    value="true"
                                    checked={checked === 'true'}
                                    color="secondary"
                                    className="radio"
                                    onChange={(event) => setChecked(event.target.value)}
                                />
                            }
                            label={<Man2SharpIcon className='men-women' />}
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    {...register('gender')}
                                    value="false"
                                    checked={checked === 'false'}
                                    color="secondary"
                                    className="radio"
                                    onChange={(event) => setChecked(event.target.value)}
                                />
                            }
                            label={<Woman2SharpIcon className='men-women' />}
                        />
                        {errors.gender && <span className='error'>{errors.gender.message}</span>}
                    </FormControl>
                    <Button type="submit" className='button registr' >Зарегистрироваться</Button>
                   

                </Box>
            </form>
        </div>
    )
}
export default Register;