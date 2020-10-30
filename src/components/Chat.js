import React from 'react';
import './stylesheets/Chat.css'
import ChatHeader from './ChatHeader';
import AddCirleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon  from '@material-ui/icons/Gif';
import Message from './Message';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCirleIcon fontSize="large" />
                <form>
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
