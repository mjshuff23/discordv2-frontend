import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannels } from '../store/actions/channel';

function ChannelList({ id }) {
  const dispatch = useDispatch();

   useEffect(() => {
        dispatch(getChannels(id));
   }, [dispatch])
  const channels = useSelector(state => Object.values(state.channel));
  return (
    <div>
      <ul>
        {channels.map(channel => (
          <li key={channel.id}>{channel.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelList
