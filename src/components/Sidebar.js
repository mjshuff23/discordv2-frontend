import { Avatar, Tooltip } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../store/actions/server';
import ChannelList from './ChannelList';
import './stylesheets/Sidebar.css'

function Sidebar() {

    const [showChannel, setShowChannel] = useState(false);
    // const [currentServer, setCurrentServer] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServers());
    }, [dispatch])

    const showChannels = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowChannel(!showChannel);
        console.log(event.target.id);
    }

    const servers = useSelector(state => Object.values(state.server));

    return (
        <div className="sidebar">
            {servers.map((server, index) => {
                let imgurl;
                const imgProps = { id: server.id, }
                if (index === 2) { imgurl = `http://www.mikeshuff.com/images/server${index + 1}.png`; }
                else { imgurl = `http://www.mikeshuff.com/images/server${index + 1}.jpg`; }
                return (
                    <Tooltip key={server.id} title={server.title} placement='right'>
                        <Avatar
                            key={server.id}
                            id={server.id}
                            alt={server.title}
                            onClick={showChannels}
                            className='sidebar__serverBtn'
                            imgProps={imgProps}
                            src={imgurl}
                        />
                    </Tooltip>)
            })}
            { showChannel ? <ChannelList /> : null}
        </div>
    )
}

export default Sidebar
