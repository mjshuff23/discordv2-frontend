import { ADD_CHANNELS } from "../actions/channel";
import merge from "lodash/merge";

export default function reducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case ADD_CHANNELS: {
            console.log(ADD_CHANNELS)
            const channels = action.channels.map((channel) => ({ [channel.id]: channel}));
            console.log(channels)
            return merge({}, state, ...channels)
        }

        default:
            return state;
    }
}
