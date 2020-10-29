import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getServers } from '../store/actions/server'

function Sidebar() {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getServers());
    }, [])
    return (
        <div className="sidebar">
            <h1>this be da sidebar</h1>
        </div>
    )
}

export default Sidebar
