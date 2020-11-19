import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authentication';
import { createServer } from '../store/actions/server';
import './stylesheets/AddServer.css';

function AddServer({ socket }) {
  const dispatch = useDispatch();
  const [serverTitle, setServerTitle] = useState('');


  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout())
  }

  const handleServerCreate = (event) => {
    event.preventDefault();
    dispatch(createServer(serverTitle, socket))
  }

  const updateServerTitle = (event) => {
    setServerTitle(event.target.value)
  }

return (
    <div className="serverForm">
      <h1>Create A Server</h1>
      <form onSubmit={handleServerCreate}>
        <input onChange={updateServerTitle} value={serverTitle}  placeholder="Server Title" type="text"/>
        <button type="submit">Create Server</button>
      </form>

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default AddServer
