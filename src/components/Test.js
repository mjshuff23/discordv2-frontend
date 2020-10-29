import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authentication';

function Test() {
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout())
  }
  return (
    <div>
      <h1> Test </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Test
