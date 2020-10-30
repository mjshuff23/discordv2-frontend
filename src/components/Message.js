import React from 'react'
import './stylesheets/Message.css'
import { Avatar } from '@material-ui/core'

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Michael
                    <span className="message__timestamp">3:09 PM(EST), 10/30/2020</span>
                </h4>
                <p>Heyoo</p>
            </div>

        </div>
    )
}

export default Message;
