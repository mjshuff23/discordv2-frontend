import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelMessages } from '../store/actions/channelMessages';
import './stylesheets/ChannelList.css';

function ChannelList() {
  const dispatch = useDispatch();

  const showMessages  = async (channelId) => {
    dispatch(getChannelMessages(channelId));
  }
  const channels = useSelector(state => Object.values(state.channel));

  return (
    <div className='channelList'>
      {channels.map((channel) => {
        return (
          <button className='channelList__button' key={channel.id} onClick={() => (showMessages(channel.id))}>{channel.title}</button>
        )
      })}
    </div>
  )
}

export default ChannelList
