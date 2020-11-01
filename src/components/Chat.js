import React, { useState, useEffect, useRef } from 'react';
import './stylesheets/Chat.css'
import ChatHeader from './ChatHeader';
import AddCirleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useDispatch, useSelector } from 'react-redux';
import { postChannelMessage, getChannelMessages } from '../store/actions/channelMessages';

function Chat({ onSend }) {
    const dispatch = useDispatch();
    const channelMessages = useSelector(state => Object.values(state.channelMessages));
    let currentChannel = useSelector(state => state.channel.currentChannel);
    const userId = window.localStorage.getItem('userId')
    const messages = useSelector(state => state.channelMessages[currentChannel]);
    const messageElement = useRef(null);

    useEffect(() => {
        if (messageElement.current) {
            messageElement.current.scrollIntoView();
        }
    });

    // Fetch the list of messages for a channel
    useEffect(() => {
        // If there's no current channel, there's nothing
        // to do, so just return
        if (!currentChannel) {
            return;
        }

        (async () => {
            try {
                dispatch(getChannelMessages(currentChannel.id));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [currentChannel, dispatch]);

    // If there's no current Channel, just render nothing
    if (!currentChannel) {
        return null;
    }

    const handleSubmit = async (channelId, message, userId) => {
        console.log(channelId, message, userId);
        onSend(message);
        // dispatch(postChannelMessage(channelId, message, userId))
    };

    return (
        <div className="chat border-gradient margin-fix">
            <ChatHeader title={currentChannel.title} />
            <div className="chat__messages">
                {channelMessages ? channelMessages.map((channelMessage) => {
                    return <Message key={channelMessage.id} messageInfo={channelMessage} />
                }) : null}
            </div>

            <div className="chat__input">
                <AddCirleIcon fontSize="large" />
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(currentChannel.id, e.target[0].value, userId)
                    e.target[0].value = '';
                }}>
                    <input placeholder="message" />
                    <button className="chat__inputButton" type="submit">Send</button>
                </form>
                <div className="chat__inputIcons">
                    <SendRoundedIcon />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>

        </div>
    )
}

export default Chat
