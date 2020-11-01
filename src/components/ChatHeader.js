import React from 'react'
import './stylesheets/ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon  from '@material-ui/icons/HelpRounded';


function ChatHeader({ title }) {
    return (
        <div className="chatHeader">

            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>{title}</h3>
            </div>

            <div className="chatHeader__right">

                <div className="chatHeader__search">
                    <input placeholder="Search"  />
                    <SearchRoundedIcon />
                </div>
            </div>

        </div>
    )
}

export default ChatHeader
