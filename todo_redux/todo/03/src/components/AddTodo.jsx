import React from 'react';

function AddTodo({text, setText, addTodo }) {
  return (
    <div className='AddTodo'>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick={addTodo}>ADD TODO</button>
    </div>
  );
}

export default AddTodo;
