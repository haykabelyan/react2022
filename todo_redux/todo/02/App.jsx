import {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

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
      <InputField text={text} handleInput={setText}  handleSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} /> 
    </div>
  );
}

export default App;
