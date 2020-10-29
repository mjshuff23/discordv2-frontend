import { CREATE_SERVER } from "../actions/server";

export default function reducer(state = {}, action) {
    switch(action.type) {
        case CREATE_SERVER: {
            return {
                ...state
            }
        }
    }
}