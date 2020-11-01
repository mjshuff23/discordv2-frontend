const baseUrl = "http://localhost:8080";
export const ADD_CHANNELS = "discord/server/ADD_CHANNELS"
export const SET_CURRENT_CHANNEL = "SET_CURRENT_CHANNEL";
export const ADD_JOINED_CHANNEL = "ADD_JOINED_CHANNEL";

export const addChannels = (channels) => ({ type: ADD_CHANNELS, channels })
export const setCurrentChannel = (channel) => ({ type: SET_CURRENT_CHANNEL, channel });
export const addJoinedChannel = (channel) => ({ type: ADD_JOINED_CHANNEL, channel });


export const getChannels = (serverId) => async (dispatch) => {
    if (!serverId) return;
    const response = await fetch(`${baseUrl}/channels/${serverId}`)
    if (response.ok) {
        const { channels } = await response.json();
        dispatch(addChannels(channels));
    }
}
