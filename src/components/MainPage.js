import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './stylesheets/MainPage.css'

function MainPage() {
    return (
        <div className="mainPage">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default MainPage
