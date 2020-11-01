import React, { useEffect, useRef } from 'react'
import { baseUrl } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './stylesheets/Message.css'
import { Avatar } from '@material-ui/core'

function Message({ messageInfo }) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>{messageInfo.userId}
                    <span className="message__timestamp">{messageInfo.createdAt}</span>
                </h4>
                <p>{messageInfo.body}</p>
            </div>

        </div>
    )
}

export default Message;
