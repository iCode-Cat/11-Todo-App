import React, { useState } from 'react'
import Tabs from './Tabs'
import Todos from './Todos'
import './main.style.scss'
const Main = () => {
   
    return (
        <main className="main-container">
            <article className="main-article">
                <Tabs />
                <Todos />
            </article>
        </main>
    )
}

export default Main
