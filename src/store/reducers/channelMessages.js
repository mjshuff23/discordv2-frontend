import { ADD_CHANNEL_MESSAGES } from "../actions/channelMessages";
import merge from "lodash/merge";

export default function reducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case ADD_CHANNEL_MESSAGES: {

            const channelMessages = action.channelMessages.map((channelMessage) => ({ [channelMessage.id]: channelMessage}));
            return merge({}, state, ...channelMessages)
        }

        default:
            return state;
    }
}
