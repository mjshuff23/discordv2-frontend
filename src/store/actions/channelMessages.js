const baseUrl = "http://localhost:8080";
export const ADD_CHANNEL_MESSAGES= "discord/server/ADD_CHANNEL_MESSAGES"

export const addChannelMessages =(channelMessages) => ({ type: ADD_CHANNEL_MESSAGES, channelMessages })


export const getChannelMessages = (channelId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/channels/${channelId}/messages`)

    if (response.ok) {

        const { channelMessages } = await response.json();
        dispatch(addChannelMessages(channelMessages));
    }
}
