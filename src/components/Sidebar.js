import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../store/actions/server'

function Sidebar() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServers());
    }, [dispatch])

    const servers = useSelector((state) => Object.values(state.server));
    console.log(Array.isArray(servers))
    return (
        <div className="sidebar">
         <ul>
         {servers.map((server) => (
            <li key={server.id} className="user">{server.title}</li>
             ))}
         </ul>

        </div>
    )
}

export default Sidebar
