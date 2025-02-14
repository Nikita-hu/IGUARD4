import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Box, FormControl, FormHelperText, OutlinedInput, FormLabel, FormControlLabel, Radio, IconButton, Tooltip } from '@mui/material';
import '../i.scss'
import CancelIcon from '@mui/icons-material/Cancel';
import Man2SharpIcon from '@mui/icons-material/Man2Sharp';
import Woman2SharpIcon from '@mui/icons-material/Woman2Sharp';
const Dial = ({ open, handleClose, handleSubmit, onSubmit, register, errors, reset, checked, setChecked, editRowId, errorStyle }) => {
    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='thebox'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    editRowId
                        ? <DialogTitle className='title'>Редактировать форму  <IconButton sx={{ color: 'text.secondary', marginLeft: '70px' }} onClick={handleClose}><CancelIcon sx={{ fontSize: '13px' }} /></IconButton></DialogTitle>

                        : <DialogTitle className='title'>Заполните форму   <IconButton sx={{ color: 'text.secondary', marginLeft: '70px' }} onClick={handleClose}><CancelIcon sx={{ fontSize: '13px' }} /></IconButton></DialogTitle>
                }
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <FormControl key='name'  >
                            <FormHelperText className='styles'>Name</FormHelperText>
                            <OutlinedInput
                                size='small'
                                placeholder='Enter name'
                                {...register('name')}
                                className='styles'
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
                                className='styles'
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
                                className='styles'
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
                                className='styles'
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
                                className='styles'
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
                        <IconButton className='button go'><Button type="submit">Добавить</Button></IconButton>
                    </Box>
                </DialogContent>
            </form>
        </Dialog>
    );
};
export default Dial;