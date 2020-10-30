import { ADD_CHANNELS } from "../actions/channel";
import merge from "lodash/merge";

export default function reducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case ADD_CHANNELS: {
            const channels = action.channels.map((channel) => ({ [channel.id]: channel}));
            return merge({}, ...channels)
        }

        default:
            return state;
    }
}
