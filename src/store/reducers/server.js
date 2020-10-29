import { ADD_SERVER, ADD_SERVERS } from "../actions/server";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_SERVER: {
            return {
                ...state,
            [action.serverId]: { title: action.title, id: action.serverId }
            }
        }

        default:
            return state;
    }
}
