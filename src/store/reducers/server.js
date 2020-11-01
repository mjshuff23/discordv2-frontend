import { LOAD_SERVER, ADD_SERVER, ADD_SERVERS, SET_CURRENT_SERVER } from "../actions/server";
import merge from "lodash/merge";

export default function reducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case ADD_SERVER: {
            return {
                ...state, servers: { [action.server.id]: action.server, }
            }
        }
        // case ADD_SERVERS: {
        //     const servers = action.servers.map((server) => ({ [server.id]: server}));
        //     return merge({}, state, ...servers)
        // }

        case LOAD_SERVER: {
            return { ...state, ...action.list };
        }

        case SET_CURRENT_SERVER: {
            return { ...state, currentServer: action.serverId }
        }

        default:
            return state;
    }
}
