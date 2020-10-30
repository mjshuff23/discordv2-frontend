import React, { useEffect } from 'react';
import './stylesheets/Chat.css'
import ChatHeader from './ChatHeader';
import AddCirleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelMessages, postChannelMessage } from '../store/actions/channelMessages';

function Chat() {
    const dispatch = useDispatch();
    const channelMessages = useSelector(state => Object.values(state.channelMessages));
    const currentChannel = useSelector(state => Object.values(state.channel));
    const userId = window.localStorage.getItem('userId')
    console.log(userId)

    const handleSubmit = async (channelId, message, userId) => {
        // e.preventDefault();
        dispatch(postChannelMessage(channelId, message, userId))
    };

    console.log(`currentChannel: `, currentChannel);
    if (!currentChannel.length) {
      currentChannel[0] = { id: 1, title: "" };
    }

    console.log(`currentChannel: `, currentChannel);
    return (
        <div className="chat">
        <ChatHeader title={currentChannel[0].title}/>
            <div className="chat__messages">
              {channelMessages ? channelMessages.map((channelMessage) => {
                   return <Message messageInfo={channelMessage} />
              }) : null}
            </div>

            <div className="chat__input">
                <AddCirleIcon fontSize="large" />
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(currentChannel[0].id, e.target[0].value, userId)}}>
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
