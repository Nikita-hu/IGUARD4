import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { FormControl, FormHelperText, OutlinedInput, Button, IconButton, Box } from '@mui/material';
import { errorStyle } from '../hook/useStyle.js'
const TaskAdd = ({ open, setOpen, addFollowTask, setAddFollowTask, onSubmit, register, handleSubmit, errors, }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                className='task-dialog'
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <DialogContent>

                        <FormControl key='task' sx={{ marginBottom: 0 }}>
                            <FormHelperText className='styles'>Новая задача</FormHelperText>
                            <OutlinedInput
                                {...register('addFollowTask')}
                                size='small'
                                placeholder='Введите задачу'
                                className='enter-styles'
                                color='#000'
                                value={addFollowTask}
                                onChange={(e) => setAddFollowTask(e.target.value)}
                                sx={errorStyle(errors.addFollowTask)}
                            />
                            {errors.addFollowTask && <span className='error'>{errors.addFollowTask.message}</span>}
                        </FormControl>
                    </DialogContent>


                    <IconButton  className='task-buttonh'><Button type="submit">Добавить</Button></IconButton>
                    </Box>
                </form>
            </Dialog>

        </div>
    )
}
export default TaskAdd