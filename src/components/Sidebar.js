import { Avatar, Tooltip } from '@material-ui/core';
import { Popover } from '@material-ui/core';
import React  from 'react'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './stylesheets/Sidebar.css'
import { getChannels } from '../store/actions/channel';
import AddServer from './AddServer';
import { setCurrentServer } from '../store/actions/server';

function Sidebar() {
    const [showServer, setShowServer] = useState(false);
    const [showChannel, setShowChannel] = useState(false);
    const dispatch = useDispatch();

    const showChannels = async (serverId) => {
        setShowChannel(!showChannel);
        dispatch(getChannels(serverId));
        dispatch(setCurrentServer(serverId));
    }

    const showServerForm = () => setShowServer(!showServer);

    const servers = useSelector(state => Object.values(state.server.servers));

    if (!servers) return;
    return (
        <div className="sidebar gradient-2">
            {servers.map((server, index) => {
                if (!server) return;
                let imgurl;
                if (index === 2) { imgurl = `http://www.mikeshuff.com/images/server${index + 1}.png`; }
                else { imgurl = `http://www.mikeshuff.com/images/server${index + 1}.jpg`; }
                return (
                    <Tooltip key={server.id} title={server.title} placement='right'>
                        <Avatar
                            key={server.id}
                            id={server.id}
                            alt={server.title}
                            onClick={() => {
                                if (!server.id) {
                                    return;
                                } else {
                                    showChannels(server.id)
                                }
                            }}
                            className='sidebar__serverBtn'
                            src={imgurl}
                        />
                    </Tooltip>)
            })}
            <Avatar onClick={showServerForm} className="sidebar__addButton" >
                <AddIcon />
            </Avatar>
            <Popover
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                open={showServer}
                onClose={() => setShowServer(!showServer)}

            >
                <AddServer />
            </Popover>
        </div>
    )
}

export default Sidebar
