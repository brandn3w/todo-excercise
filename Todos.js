import React from 'react';


const Todos =({todos, deleteTodo})=> {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClisk={()=> deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p classname="center"> You have no tasks to do </p>
    ) 
    return (
        <div className="todos collection">
            {todoList}
           
        </div>
    )
}

export default Todos;