const baseUrl = "http://localhost:8080";
export const ADD_CHANNEL_MESSAGES= "discord/server/ADD_CHANNEL_MESSAGES"
export const ADD_CHANNEL_MESSAGE = "discord/server/ADD_CHANNEL_MESSAGE"

export const addChannelMessages =(channelMessages) => ({ type: ADD_CHANNEL_MESSAGES, channelMessages })
export const addChannelMessage = (channelMessage) => ({ type: ADD_CHANNEL_MESSAGE, channelMessage})

export const getChannelMessages = (channelId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/channels/${channelId}/messages`)

    if (response.ok) {

        const { channelMessages } = await response.json();
        dispatch(addChannelMessages(channelMessages));
    }
}

export const postChannelMessage = (channelId, body, userId) => async (dispatch) => {
    console.log(channelId, body, userId)
    const response = await fetch(`${baseUrl}/channels/${channelId}/messages/add`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, body}),
      });


    if (response.ok) {

        const { channelMessage } = await response.json();
        dispatch(addChannelMessage(channelMessage));
    }
}
