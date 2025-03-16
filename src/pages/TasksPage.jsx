
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from '../DragAndDrop/Draggable';
import { Droppable } from '../DragAndDrop/Droppable';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTaskStatus } from '../redux/store';
import { IconButton, Tooltip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAdd from '../DragAndDrop/TaskAdd';
import { useForm } from 'react-hook-form';
import { validationTask } from '../validation/VallidationAuthed';
import { yupResolver } from '@hookform/resolvers/yup';
import { Style, TaskEnd } from '../DragAndDrop/useHookTask'


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
                <TaskAdd open={open} setOpen={setOpen} addFollowTask={addFollowTask} setAddFollowTask={setAddFollowTask} handleAddTask={handleAddTask} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors} ></TaskAdd>

                <DndContext onDragEnd={handleDragEnd}>
                    <div style={{ fontSize: '10px', display: 'flex', gap: '1px', color: '#91ff35' }}>
                        {['Нужно сделать', 'В работе', 'Отложено', 'Выполнено'].map((column) => (
                            <Droppable key={column} id={column}>
                                <h3>{column}</h3>
                                {tasks
                                    .filter((task) => task.status === column)
                                    .map((task) => (
                                        <Draggable key={task.id} id={task.id}>
                                            <div
                                                style={{
                                                    padding: '5px',
                                                    margin: '5px 0',
                                                    border: Style(task.status).border,
                                                    backgroundColor: '#767676',
                                                    height: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    position: 'relative',
                                                    fontSize: '14px',
                                                    textDecoration: 'none',
                                                    zIndex: hoveredRowId === task.id ? 10 : 1
                                                }}
                                                onMouseEnter={() => setHoveredRowId(task.id)}
                                                onMouseLeave={() => setHoveredRowId(null)}
                                            >

                                                <Box>
                                                    <p style={{ textDecoration: Style(task.status).textDecoration }}>{task.task}</p>
                                                    <Box>
                                                        <p style={{ fontSize: '9px', margin: '0' }}>Дата создания: {task.date}</p>
                                                        <p style={{ fontSize: '9px', margin: '0' }}>{TaskEnd(task.status)}</p>
                                                    </Box>
                                                </Box>

                                                {hoveredRowId === task.id && (
                                                    <IconButton
                                                        style={{
                                                            position: 'absolute',
                                                            right: '5px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            zIndex: 1,
                                                        }}
                                                        onMouseDown={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteTask(task.id);
                                                        }}
                                                    >
                                                        <DeleteIcon className='snap' />
                                                    </IconButton>
                                                )}
                                            </div>
                                        </Draggable>
                                    ))}
                            </Droppable>
                        ))}
                    </div>
                </DndContext>
            </Box>
        </>
    );
}

export default TasksPage;

