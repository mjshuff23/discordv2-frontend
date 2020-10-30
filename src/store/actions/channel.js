const baseUrl = "http://localhost:8080";
export const ADD_CHANNELS = "discord/server/ADD_CHANNELS"

export const addChannels =(channels) => ({ type: ADD_CHANNELS, channels })

export const getChannels = (serverId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/channels/${serverId}`)

    if (response.ok) {
        const { channels } = await response.json();
        dispatch(addChannels(channels));
    }
}
