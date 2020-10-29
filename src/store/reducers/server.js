import { ADD_SERVER, GET_SERVERS } from "../actions/server";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_SERVER: {
            return {
                ...state,
            [action.serverId]: { title: action.title, id: action.serverId }
            }
        }
        // case GET_SERVERS: {
        //     return {
        //         ...state,
        //     }
        // }

        default:
            return state;
    }
}