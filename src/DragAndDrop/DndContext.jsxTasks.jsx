import React from 'react';
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { DndContext } from '@dnd-kit/core';
import { IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Style, TaskEnd } from './useHookTask'
const DndContextTasks = ({handleDragEnd, handleDeleteTask, hoveredRowId, setHoveredRowId, tasks}) => {

    return (
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
    )
}
export default DndContextTasks