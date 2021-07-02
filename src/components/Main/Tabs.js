import React, { useContext } from 'react'
import { TodoContext } from '../../context/ContextHolder';

const tabsObject = [
    {
        title:'All',
        status:0
    },
    {
        title:'Active',
        status:1
    },
    {
        title:'Completed',
        status:2
    }
]

const Tabs = () => {

    const { status, setStatus } = useContext(TodoContext)
    
    return (
        <section className="main-tabs">
            {
                tabsObject.map((tab, index) => (
                    <p key={ index } onClick={()=> setStatus(tab.status)} className={`main-tabs-title ${status === index && 'tab-active'}`}>
                        { tab.title }
                    </p>
                ))
            }
        </section>
    )
}

export default Tabs
