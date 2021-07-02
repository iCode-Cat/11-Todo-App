import React, {useState} from 'react'

const Input = ({ setTodo, todos }) => {
    const [input, setInput] = useState([])

    const todoHandler = () => {
        setTodo([...todos, {
            todo:input, status:1, id:Math.floor(Math.random()*98765)
        }
    ])
        
    setInput([])
    }

    return (
            <div className="todos-input-container">
            <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder='add details' className="todos-input" />
            <button onClick={todoHandler} className="todos-button">Add</button>
            </div>
        
    )
}

export default Input
