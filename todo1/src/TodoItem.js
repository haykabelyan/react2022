

const TodoItem = ({todo, removeTodo, doneTodo})=>{

    const classes = ['list-group-item'];
    if(todo.done) classes.push('done');

    return(
        <li className= {classes.join(' ')}>
            <span onClick={()=> doneTodo(todo.id)} >{todo.title}</span>
            <i className='fa fa-trash text-danger float-end' onClick={()=> removeTodo(todo.id)} />
            <i className="fa fa-exclamation text-success float-end" onClick={()=> doneTodo(todo.id)} />
        </li>
    );
};

export default TodoItem;