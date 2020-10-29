import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authentication';
import { createServer } from '../store/actions/server';

function Test() {
  const dispatch = useDispatch();
  const [serverTitle, setServerTitle] = useState('');


  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout())
  }

  const handleServerCreate = (event) => {
    // console.log(event)
    event.preventDefault();
    dispatch(createServer(serverTitle))
  }

  const updateServerTitle = (event) => {
    console.log(event)
    setServerTitle(event.target.value)
  }

return (
    <div>
      <h1> Test </h1>
      <form onSubmit={handleServerCreate}>
        <input onChange={updateServerTitle} value={serverTitle} type="text"/>
        <button type="submit">Create Server</button>
      </form>

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Test
