import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { authed: false },
    reducers: {
        setAuthed: (state, action) => {
            state.authed = action.payload;
        }
    }
});

export const { setAuthed } = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });