import { Dispatch } from "@reduxjs/toolkit";
import  axios  from '../../axios';
import { authSlice } from './../slices/authSlice';

interface AuthResponse{
    access: string,
    refresh: string
}

interface AuthData{
    username: string,
    password: string
}

export const  register =  (data: AuthData)=>{
    return async (dispatch: Dispatch) => {
        try{

            const response = await axios.post<AuthResponse>('/users/', data);
            dispatch(authSlice.actions.login({
                username: data.username,
                access: response.data.access
            }));    
        }catch(e){
         console.log('error', e);
         
        }
    }
}