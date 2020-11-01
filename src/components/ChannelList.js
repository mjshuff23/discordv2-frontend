import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelMessages } from '../store/actions/channelMessages';
import './stylesheets/ChannelList.css';
import { addChannels, setCurrentChannel } from '../store/actions/channel';
import { baseUrl } from '../config';

function ChannelList({ serverId }) {
  const channels = useSelector((state) => state.channel.channels);
  const channelArray = Object.values(channels);
  const currentChannel = useSelector((state) => state.channel.currentChannel);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/channels/${serverId}`);
        const channels = await response.json();
        dispatch(addChannels(channels));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [dispatch]);

  // When someone clicks the channel button,
  // set the current Channel in Redux
  const joinChannel = async (channel) => {
    dispatch(setCurrentChannel(channel));
    // dispatch(getChannelMessages(channel.id));
  }



  const showMessages = async (channelId) => {
    dispatch(getChannelMessages(channelId));
  }

  return (
    <div className='channelList border-gradient margin-fix'>
      {channelArray.map((channel) => {
        return (
          <div className='channelList__div' key={channel.id} onClick={() => (joinChannel(channel))}><span key={channel.id} className='channelList__hash'>#</span>{channel.title}</div>
        )
      })}
    </div>
  )
}

export default ChannelList
