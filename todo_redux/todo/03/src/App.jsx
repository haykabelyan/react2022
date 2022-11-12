import {useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice';

const App = () => {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = ()=>{
    dispatch(addTodo({text}));
    setText('');
  }


  return (
    <div className="App">

        <AddTodo text={text} setText={setText} addTodo={addTask}  />
        <TodoList />
    </div>
  );
}

export default App;
