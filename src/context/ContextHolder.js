import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

const ContextHolder = (props) => {
    const [ status, setStatus ] = useState(0)
    
    return (
        <TodoContext.Provider value={ { status, setStatus }}>
            { props.children }
        </TodoContext.Provider>
        
    )
}

export default ContextHolder
