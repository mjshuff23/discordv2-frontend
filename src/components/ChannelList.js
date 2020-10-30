import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelMessages } from '../store/actions/channelMessages';

function ChannelList() {
  const dispatch = useDispatch();

  const showMessages  = async (channelId) => {
    dispatch(getChannelMessages(channelId));
  }
  const channels = useSelector(state => Object.values(state.channel));

  return (
    <div>
      {channels.map((channel) => {
        return (
          <button key={channel.id} onClick={() => (showMessages(channel.id))}>{channel.title}</button>
        )
      })}
    </div>
  )
}

export default ChannelList
