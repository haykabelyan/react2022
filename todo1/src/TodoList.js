import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, doneTodo})=>{
     const elements = todos.map((el, index)=>{
        return <TodoItem todo={el} key={index} removeTodo={removeTodo} doneTodo={doneTodo} />
    })

    return (
        <ul className='list-group'>
            {elements}
        </ul>
    );
}

export default TodoList;