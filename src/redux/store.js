import { createSlice, configureStore } from "@reduxjs/toolkit";

const isAuthed = () => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === 'isAuthed') return true;
    }
    return false
}

const authSlice = createSlice({

    name: 'auth',
    initialState: {
        authed: isAuthed(),
        switchAuth: false,
        addUser: false,
        login: ""
    },
    reducers: {
        setAuthed: (state, action) => {
            state.authed = action.payload;
        },
        setSwitch: (state, action) => {
            state.switchAuth = action.payload;
        },
        setAddUser: (state, action) => {
            state.addUser = action.payload;
        },
        setLoginUser: (state, action) => {
            state.login = action.payload;
        }
    }
});

export const { setLoginUser, setAddUser, setSwitch, setAuthed} = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });