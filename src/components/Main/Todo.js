import React from 'react'

const Todo = ({ todo, todos, setTodo, status, deleteOneHandler }) => {
    

    
    return (
        <section className="todo-box">
            <input onChange={(e)=> {
                
                if(e.target.checked) {
                    todo.status = 2;
                }else {
                    todo.status = 1;
                }
                 setTodo([...todos])
            }} className='todo-box-checkbox' checked={todo.status === 2 ? true : false} type="checkbox" />
            <p style={{ textDecoration:`${todo.status === 2 ? 'line-through':'none'}` }}  className="todo-box-text">
                { todo.todo }
            </p>
            {
                status === 2 && 
                <span onClick={()=> { 
                    deleteOneHandler(todo.id)
                }} 
            className='todo-box-icon material-icons'>
                delete_outline
            </span>
            }
        </section>
    )
}

export default Todo
