import { Avatar, Tooltip } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServers } from '../store/actions/server';
import ChannelList from './ChannelList';
import './stylesheets/Sidebar.css'
import { getChannels } from '../store/actions/channel';
import Chat from './Chat';

function Sidebar() {

    const [showChannel, setShowChannel] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServers());
    }, [dispatch])

    const showChannels = async (serverId) => {
        setShowChannel(!showChannel);
        dispatch(getChannels(serverId));
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
                            onClick={() => showChannels(server.id)}
                            className='sidebar__serverBtn'
                            imgProps={imgProps}
                            src={imgurl}
                        />
                    </Tooltip>)
            })}
        </div>
    )
}

export default Sidebar
