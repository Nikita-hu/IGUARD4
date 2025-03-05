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
        authed: isAuthed() 
    },
    reducers: {
        setAuthed: (state, action) => {
            state.authed = action.payload;
        }
    }
});

export const { setAuthed } = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });