import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context/ContextHolder'
import Input from './Input'
import Todo from './Todo'


const Todos = () => {
    
    const { status } = useContext(TodoContext)
    const [todos, setTodo] = useState([
        {
            todo:'Cleaning',
            status:1,
            id:1
        },
        {
            todo:'Walking',
            status:1,
            id:2
        }
    ])

    const deleteOneHandler = (id, deleteAll) => {
       let filter;
       deleteAll ? filter = todos.filter((todo) => todo.status !== 2) : filter = todos.filter((todo) => todo.id !== id)
        setTodo(filter)
    }

    return (
        <section className="todos">
            {
                status !== 2 &&
                 <Input todos={todos} setTodo={setTodo} />
            }
            {
                
                todos.map((todo) => (
                    
                    status === todo.status || status === 0 ?
                    <Todo deleteOneHandler={deleteOneHandler} status={status} key={todo.id} todos={todos} setTodo={setTodo} todo={ todo } />:''
                
            ))
                
            }
            {
                status === 2 && todos.find((todo) => todo.status === 2) ?
                 <div style={{ display:'flex', justifyContent:'flex-end' }}  className="todos-delete-button">
                    <button onClick={()=> deleteOneHandler( 0 ,true)} className='button-delete'> <span className="material-icons">delete_outline</span> delete all </button>
                 </div> : ''
            }
        </section>
    )
}

export default Todos
