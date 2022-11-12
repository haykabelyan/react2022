import React from 'react';

import {useDispatch} from 'react-redux';
import {removeTodo, toggleComplete} from '../store/todoSlice';

function TodoItem({id, text, completed}) {

  const dispatch = useDispatch();

  return (
    <li className='TodoItem'>
          <input type="checkbox" checked={completed} onChange={()=>dispatch(toggleComplete({id}))} />
          <span>{text}</span>
          <span onClick={()=>dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
}

export default TodoItem;
