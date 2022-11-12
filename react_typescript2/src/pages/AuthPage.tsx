import React from 'react'
import { register } from '../store/actions/authActions';
import { useInput } from './../hooks/input';
import { useAppDispatch } from './../hooks/redux';


// HASEL EM 02:11:00

export function AuthPage() {

    const username = useInput();
    const password = useInput();
    const dispatch = useAppDispatch();

    const isFormValid = ()=> username.value && password.value;

    const submitHandler = (event: React.FormEvent)=>{
        event.preventDefault();

        if(isFormValid()){
            dispatch(register({
                username: username.value,
                password: password.value
            }));
        }else{
            alert('INVALID!!!!!!');
        }
    }

  return (
    <form 
        className='container mx-auto max-w-[500px] '
        onSubmit={submitHandler}
    >

    <div className='mb-2'>
        <label htmlFor="username" className='block'></label>
        <input type="text" id='username' className='border px-2 py2 w-full' {...username} />
    </div>

    <div className='mb-2'>
        <label htmlFor="password" className='block'></label>
        <input type="password" id='password' className='border px-2 py2 w-full' {...password} />
    </div>

        <button className='py-2 px-4 bg-blue-700 border' type='submit'>Register</button>
    </form>
  )
}
