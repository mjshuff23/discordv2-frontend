import { ADD_SERVER, ADD_SERVERS } from "../actions/server";
import merge from "lodash/merge";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_SERVER: {
            return {
                ...state,
                [action.server.id]: action.server,
            }
        }
        case ADD_SERVERS: {
            console.log(action)
            const servers = action.servers.map((server) => ({ [server.id]: server}));
            return merge({}, state, ...servers)
        }

        default:
            return state;
    }
}
