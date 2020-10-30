import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../store/actions/server';
import ChannelList from './ChannelList';
import './stylesheets/Sidebar.css'

function Sidebar() {

    const [showChannel, setShowChannel] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServers());
    }, [dispatch])

    const showChannels = (event) => {
        event.preventDefault();
        setShowChannel(!showChannel);
    }

    const servers = useSelector((state) => Object.values(state.server));

        return (
            <div className="sidebar">
                {servers.map((server) => (
                    <Avatar
                        key={server.id}
                        alt={server.title}
                        onClick={showChannels}
                        className='sidebar__serverBtn'
                        src='../../public/image1.jpg'
                    />
                ))}
                {showChannel ? <ChannelList /> : null}
            </div>
        )
}

export default Sidebar
