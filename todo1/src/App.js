import {Component} from 'react';

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default class App extends Component{
  state = {
    todos: [
      {id: 1, title: 'React', done: false},
      {id: 2, title: 'Angular', done: false},
      {id: 3, title: 'Vue', done: true}
    ]
  };

  removeTodo = (id)=>{
    let todos = this.state.todos;
    todos = todos.filter((el)=> el.id !== id );
    this.setState({todos});
  };

  addTodo = (title)=>{
    const todos = this.state.todos;
    const todo = {
      id: Date.now(),
      title: title,
      done: false
    };
    todos.push(todo);
    this.setState({todos});
  };

  doneTodo = (id)=>{
    const todos = this.state.todos;
    todos.map((el)=>{
      if(el.id === id) el.done = !el.done;
      return el;
    });
    this.setState({todos});
  }

  render() {
    return (
        <div className='App'>
            <h1>Todo List</h1>
          <AddTodo addTodo={this.addTodo} />
          { this.state.todos.length ? <TodoList todos={this.state.todos}  removeTodo={this.removeTodo} doneTodo={this.doneTodo} /> : <p>NO TODOS</p>}
        </div>
    );
  }

}



