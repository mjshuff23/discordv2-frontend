import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './stylesheets/ChannelList.css';
import { setCurrentChannel, getChannels } from '../store/actions/channel';
// import { NavLink } from 'react-router-dom';

function ChannelList({ serverId }) {
  const channels = useSelector((state) => state.channel.channels);
  const channelArray = Object.values(channels);
  // const currentChannel = useSelector((state) => state.channel.currentChannel);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getChannels(serverId));
  }, []);

  // When someone clicks the channel button,
  // set the current Channel in Redux
  const joinChannel = async (channel) => {
    dispatch(setCurrentChannel(channel));
    // dispatch(getChannelMessages(channel.id));
  }



  // const showMessages = async (channelId) => {
  //   dispatch(getChannelMessages(channelId));
  // }

  return (
    <div className='channelList border-gradient margin-fix'>
      {channelArray.map((channel, idx) => {
        return (
          <div className='channelList__div' key={idx} onClick={() => (joinChannel(channel))}><span key={Math.random() * 1000} className='channelList__hash'>#</span><span key={Math.random() * 1000} className='channelList__channel'>{channel.title}</span></div>
        )
      })}
    </div>
  )
}


/*

          <NavLink key={idx} className='channelList__div' activeClassName="is-selected" to={`/channels/${channel.id}`} onClick={() => joinChannel(channel)}>
            <span key={idx} className='channelList__hash'>#</span>
            <span key={idx} className='channelList__channel'>{channel.title}</span>
          </NavLink>*/


export default ChannelList
