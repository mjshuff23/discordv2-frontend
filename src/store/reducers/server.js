import { ADD_SERVER } from "../actions/server";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_SERVER: {
            return {
                ...state,
                title: action.title
            }
        }

        default:
            return state;
    }
}