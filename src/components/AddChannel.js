import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authentication';
import { createChannel } from '../store/actions/channel';
import './stylesheets/AddServer.css';

function AddChannel({ socket }) {
  const dispatch = useDispatch();
  const currentServerId = useSelector(state => state.server.currentServer);
  const [channelTitle, setChannelTitle] = useState('');
  const [channelTopic, setChannelTopic] = useState('');


  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   dispatch(logout())
  // }

  const handleChannelCreate = (event) => {
    console.log('handleChannelCreate')
    if (!currentServerId) {
      window.alert('Please pick a valid server to create a channel for!');
    }
    event.preventDefault();
    dispatch(createChannel(channelTitle, currentServerId, socket, channelTopic))
  }

  const updateChannelTitle = (event) => {
    setChannelTitle(event.target.value)
  }
  const updateChannelTopic = (event) => {
    setChannelTopic(event.target.value)
  }

return (
    <div className="serverForm">
      <h1>Create A Channel!</h1>
      <form onSubmit={handleChannelCreate}>
        <input onChange={updateChannelTitle} value={channelTitle} type="text"/>
        <input onChange={updateChannelTopic} value={channelTopic} type="text"/>
        <button type="submit">Create Channel</button>
      </form>

      {/* <button onClick={handleLogout}>Logout</button> */}

    </div>
  )
}

export default AddChannel;
