import React, { useEffect } from 'react';
import './stylesheets/Chat.css'
import ChatHeader from './ChatHeader';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelMessages } from '../store/actions/channelMessages';

function Chat({ onSend, socket }) {
    const dispatch = useDispatch();
    const channelMessages = useSelector(state => Object.values(state.channelMessages));
    let currentChannel = useSelector(state => state.channel.currentChannel);
    // const userId = window.localStorage.getItem('userId')
    // const messages = useSelector(state => state.channelMessages[currentChannel]);

    // Fetch the list of messages for a channel
    useEffect(() => {
        // If there's no current channel, there's nothing
        // to do, so just return
        if (!currentChannel) {
            return;
        }

        (async () => {
            try {
                await dispatch(getChannelMessages(currentChannel.id));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [currentChannel.id]);

    if (!currentChannel) {
        return null;
    }

    function handleSubmit(e) {
        onSend(e);
        // dispatch(postChannelMessage(channelId, message, userId))
    };

    return (
        <div className="chat border-gradient margin-fix">
            <ChatHeader title={currentChannel.title} />
            <div className="chat__messages">
                {channelMessages ? channelMessages.map((channelMessage, idx) => {
                    return <Message key={idx} messageInfo={channelMessage} />
                }) : null}
            </div>
            <div className="chat__input">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e.target[0].value);
                    e.target[0].value = '';
                }}>
                    <input placeholder="Type Here!" />
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

export default Chat;
