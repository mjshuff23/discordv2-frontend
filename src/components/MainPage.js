import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServers } from '../store/actions/server';
import { postChannelMessage } from '../store/actions/channelMessages';
import { addJoinedChannel } from '../store/actions/channel';
import ChannelList from './ChannelList'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './stylesheets/MainPage.css'

function MainPage({ socket }) {
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

  const channels = useSelector(state => Object.values(state.channel));
  const currentChannel = useSelector(state => state.channel.currentChannel);
  const joinedChannels = useSelector(state => state.channel.joinedChannels);
  const dispatch = useDispatch();

  let serverId;
  if (!currentChannel) {
    serverId = 1;
  } else {
    serverId = currentChannel.serverId;
  }

  useEffect(() => {
    dispatch(getServers());
  }, [])

  useEffect(() => {
    if (currentChannel) {
      socket.emit('join', currentChannel);
    }
  }, [currentChannel, socket]);

  // Sets up the listener for new socket connections
  useEffect(() => {
    // If there's no current channel
    // there's nothing to do here so just return
    if (!currentChannel) {
      return;
    }

    // If we've already got a listener for this
    // channel, then skip adding a new one
    if (joinedChannels.includes(currentChannel)) {
      return;
    }

    // Listen for connections to the currentChannel
    // And add the incoming messages to Redux.
    socket.on(currentChannel, ({message, channel}) => {
      console.log(
        `Received new message for ${channel}: ${message.body}`
      );
      // If the current channel doesn't match the
      // channel the message belongs to, then
      // don't add the message because it shouldn't
      // display
      if (channel !== message.channelId) return;

      dispatch(postChannelMessage(message));
    });

    dispatch(addJoinedChannel(currentChannel));
  },[currentChannel, dispatch, joinedChannels, socket]);

  const onSend = message => {
    socket.emit(currentChannel.id, {
      message,
      userId: Number.parseInt(userId)
    });
  }

  return (
    <div className="mainPage">
      {channels.length === 0 ? (
        <>
          <Sidebar />
        </>
      ) :
        <>
          <Sidebar />
          <ChannelList serverId={serverId} />
          <Chat onSend={onSend} />
        </>
      }
    </div>
  )
}

export default MainPage
