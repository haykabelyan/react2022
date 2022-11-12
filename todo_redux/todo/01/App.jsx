import {useState} from 'react';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');


 const addTodo = ()=>{

  if(!text.trim().length) return;

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false
      }
    ]);
    setText('');
 }

 const removeTodo = (id)=>{
  setTodos(todos.filter(todo=>todo.id !== id));
 }

 const toggleTodoComplete = (todoId)=>{
  setTodos(
   todos.map( todo=>{
      if(todo.id !== todoId) return todo;
      return {
        ...todo,
        completed: !todo.completed
      }
    }
   ));
 }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>
      <ul>
        {
          todos.map(todo=> <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodoComplete(todo.id)} />
              <span>{todo.text}</span>
              <span onClick={()=>removeTodo(todo.id)}>&times;</span>
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
