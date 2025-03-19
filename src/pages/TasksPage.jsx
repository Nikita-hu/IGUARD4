
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTaskStatus } from '../redux/store';
import { IconButton, Tooltip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskAdd from '../DragAndDrop/TaskAdd';
import { useForm } from 'react-hook-form';
import { validationTask } from '../validation/VallidationAuthed';
import { yupResolver } from '@hookform/resolvers/yup';
import DndContextTasks from '../DragAndDrop/DndContext.jsxTasks';

function TasksPage() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const [addFollowTask, setAddFollowTask] = useState('');
    const [hoveredRowId, setHoveredRowId] = useState(null);
    const [open, setOpen] = useState(false)


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationTask)
    });

    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            task: addFollowTask,
            date: new Date().toLocaleDateString("ru-RU", {
                day: "numeric", month: "long", year: "numeric"
            }),
            status: 'Нужно сделать'
        };

        dispatch(addTask(newTask));
        setAddFollowTask('');
        setOpen(false)
    };

    const handleDeleteTask = (id) => {
        console.log('Удаление задачи с ID:', id);
        dispatch(deleteTask(id));
    };

    const handleDragEnd = ({ active, over }) => {
        if (over) {
            dispatch(updateTaskStatus({
                taskId: active.id,
                newStatus: over.id
            }));
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const onSubmit = () => {
        handleAddTask()
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Tooltip title="Добавить задачу">
                    <IconButton className='add' sx={{ marginBottom: '10px' }} onClick={handleClickOpen}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>

                <TaskAdd open={open} setOpen={setOpen} addFollowTask={addFollowTask} setAddFollowTask={setAddFollowTask} handleAddTask={handleAddTask} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors} />

                <DndContextTasks handleDragEnd={handleDragEnd} handleDeleteTask={handleDeleteTask} hoveredRowId={hoveredRowId} setHoveredRowId={setHoveredRowId} tasks={tasks} />
            </Box>
        </>
    );
}

export default TasksPage;

