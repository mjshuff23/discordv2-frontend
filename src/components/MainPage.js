import React from 'react'
import { useState } from 'react'
import ChannelList from './ChannelList'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './stylesheets/MainPage.css'

function MainPage() {
      return (
        <div className="mainPage">
          <Sidebar />
          <ChannelList />
          <Chat />
        </div>
    )
}

export default MainPage
