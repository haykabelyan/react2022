import {useState} from 'react';

const AddTodo = ({addTodo})=>{

    const [value, setValue] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if(value.trim()) addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className='form-control' value={value} onChange={event=> setValue(event.target.value)}/>
            <button className='btn btn-outline-secondary' type='submit'>ADD</button>
        </form>
    );
};


export default AddTodo;