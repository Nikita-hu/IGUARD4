import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useDataTask } from '../hook/useData';

const isAuthed = () => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === 'isAuthed') return true;
    }
    return false;
}

const date = useDataTask()

const status = {
    1: "Нужно сделать",
    2: "В работе",
    3: "Отложено",
    4: "Выполнено"
}
const initialTasks = [
    { id: 1, task: 'Задача 1', date: date, status: status[1] },
    { id: 2, task: 'Задача 2', date: date, status: status[1] },
    { id: 3, task: 'Задача 3', date: date, status: status[1] },
    { id: 4, task: 'Задача 4', date: date, status: status[1] },
    { id: 5, task: 'Задача 5', date: date, status: status[1] },
    { id: 6, task: 'Задача 6', date: date, status: status[1] },
    { id: 7, task: 'Задача 7', date: date, status: status[1] },
    { id: 8, task: 'Задача 8', date: date, status: status[1] },
    { id: 9, task: 'Задача 9', date: date, status: status[1] },
    { id: 10, task: `Задача 10`, date: date, status: status[1] }
];

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authed: isAuthed(),
        switchAuth: false,
        switchAuth: false,
        switchAuth: false,
        addUser: false,
        login: "",
        tasks: initialTasks
    },
    reducers: {
        setAuthed: (state, action) => {
            state.authed = action.payload;
        },
        setSwitch: (state, action) => {
            state.switchAuth = action.payload;
        },
        setActiveSwitch: (state, action) => {
            state.activeSwitch = action.payload
        },
        setAddUser: (state, action) => {
            state.addUser = action.payload;
        },
        setLoginUser: (state, action) => {
            state.login = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTaskStatus: (state, action) => {
            const {taskId, newStatus} = action.payload;
            const task = state.tasks.find(task => task.id === taskId)
            if (task) {
                task.status = newStatus
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
    }
});

export const { setLoginUser, setAddUser, setSwitch, setAuthed, addTask, updateTaskStatus, deleteTask, setActiveSwitch} = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });