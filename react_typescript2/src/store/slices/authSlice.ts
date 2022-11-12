import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AuthState {
    access: string
    username: string
    isAuth: boolean
}

interface AuthPayload {
    access: string
    username: string
}

const initialState: AuthState = {
    access: localStorage.getItem('ACCESS_KEY') ?? '',
    username: localStorage.getItem('USERNAME_KEY') ?? '',
    isAuth: Boolean(localStorage.getItem('ACCESS_KEY'))
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
       login(state, action: PayloadAction<AuthPayload>){
        state.access = action.payload.access
        state.username = action.payload.username
        state.isAuth = Boolean(action.payload.access)
        
        localStorage.setItem('ACCESS_KEY', action.payload.access);
        localStorage.setItem('USERNAME_KEY', action.payload.username);
       }
    }
});

export default authSlice.reducer;